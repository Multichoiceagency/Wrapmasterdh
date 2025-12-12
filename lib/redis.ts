import Redis from "ioredis"

/**
 * Redis Cache Configuration
 *
 * Uses Redis for caching to improve performance.
 * Connection uses TLS (rediss://) for secure communication.
 *
 * Required environment variables:
 * - REDIS_URL: Full Redis connection URL (rediss://...)
 *
 * Or individual settings:
 * - REDIS_HOST: Redis host
 * - REDIS_PORT: Redis port (default: 6380)
 * - REDIS_PASSWORD: Redis password
 * - REDIS_USERNAME: Redis username (default: "default")
 */

let redisClient: Redis | null = null
let redisAvailable: boolean | null = null

// Check if Redis is configured
function isRedisUrlConfigured(): boolean {
  const redisUrl = process.env.REDIS_URL
  return !!redisUrl && redisUrl !== "rediss://default:your-redis-password@your-redis-host:6380/0"
}

// Get or create Redis client (singleton pattern)
export function getRedisClient(): Redis | null {
  // Skip if Redis URL is not configured
  if (!isRedisUrlConfigured()) {
    return null
  }

  if (!redisClient) {
    const redisUrl = process.env.REDIS_URL!
    const isTls = redisUrl.startsWith("rediss://")

    redisClient = new Redis(redisUrl, {
      maxRetriesPerRequest: 1, // Don't retry too many times
      connectTimeout: 3000, // 3 second connection timeout
      commandTimeout: 2000, // 2 second command timeout
      lazyConnect: true,
      enableOfflineQueue: false, // Don't queue commands when disconnected
      tls: isTls ? { rejectUnauthorized: false } : undefined,
      retryStrategy: (times) => {
        if (times > 2) {
          redisAvailable = false
          return null // Stop retrying after 2 attempts
        }
        return Math.min(times * 100, 1000)
      },
    })

    // Error handling
    redisClient.on("error", (err) => {
      console.error("Redis connection error:", err.message)
      redisAvailable = false
    })

    redisClient.on("connect", () => {
      console.log("Redis connected successfully")
      redisAvailable = true
    })

    redisClient.on("close", () => {
      redisAvailable = false
    })
  }

  return redisClient
}

// Default cache TTL in seconds (1 hour)
const DEFAULT_TTL = 3600

// Helper to add timeout to promises
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("Redis operation timeout")), ms)
    ),
  ])
}

/**
 * Get a value from cache
 */
export async function cacheGet<T>(key: string): Promise<T | null> {
  const redis = getRedisClient()
  if (!redis || redisAvailable === false) return null

  try {
    const value = await withTimeout(redis.get(key), 2000)

    if (value) {
      return JSON.parse(value) as T
    }

    return null
  } catch (error) {
    console.error("Redis GET error:", error)
    return null
  }
}

/**
 * Set a value in cache with optional TTL
 */
export async function cacheSet(key: string, value: unknown, ttlSeconds: number = DEFAULT_TTL): Promise<boolean> {
  const redis = getRedisClient()
  if (!redis || redisAvailable === false) return false

  try {
    await withTimeout(redis.setex(key, ttlSeconds, JSON.stringify(value)), 2000)
    return true
  } catch (error) {
    console.error("Redis SET error:", error)
    return false
  }
}

/**
 * Delete a value from cache
 */
export async function cacheDelete(key: string): Promise<boolean> {
  const redis = getRedisClient()
  if (!redis || redisAvailable === false) return false

  try {
    await withTimeout(redis.del(key), 2000)
    return true
  } catch (error) {
    console.error("Redis DELETE error:", error)
    return false
  }
}

/**
 * Delete all keys matching a pattern
 */
export async function cacheDeletePattern(pattern: string): Promise<number> {
  const redis = getRedisClient()
  if (!redis || redisAvailable === false) return 0

  try {
    const keys = await withTimeout(redis.keys(pattern), 2000)

    if (keys.length > 0) {
      await withTimeout(redis.del(...keys), 2000)
    }

    return keys.length
  } catch (error) {
    console.error("Redis DELETE pattern error:", error)
    return 0
  }
}

/**
 * Get or set cache (with callback for miss)
 * This is useful for caching database queries or API calls
 */
export async function cacheGetOrSet<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttlSeconds: number = DEFAULT_TTL
): Promise<T> {
  // Try to get from cache first
  const cached = await cacheGet<T>(key)

  if (cached !== null) {
    return cached
  }

  // Cache miss - fetch the data
  const data = await fetchFn()

  // Store in cache (don't await - fire and forget)
  cacheSet(key, data, ttlSeconds)

  return data
}

/**
 * Check if Redis is configured and accessible
 */
export async function isRedisConfigured(): Promise<boolean> {
  const redis = getRedisClient()
  if (!redis) return false

  try {
    await withTimeout(redis.ping(), 2000)
    redisAvailable = true
    return true
  } catch {
    redisAvailable = false
    return false
  }
}

/**
 * Cache key prefixes for different data types
 */
export const CacheKeys = {
  // Rate limiting
  rateLimit: (ip: string) => `rate:${ip}`,

  // Form submissions (for deduplication)
  submission: (type: string, email: string) => `sub:${type}:${email}`,

  // Page data
  pageData: (page: string) => `page:${page}`,

  // API responses
  api: (endpoint: string, params: string) => `api:${endpoint}:${params}`,
} as const

/**
 * Rate limiting using Redis
 * Returns true if the request should be allowed, false if rate limited
 */
export async function checkRateLimit(
  key: string,
  maxRequests: number,
  windowSeconds: number
): Promise<{ allowed: boolean; remaining: number; resetIn: number }> {
  const redis = getRedisClient()
  if (!redis || redisAvailable === false) {
    // Redis not available, allow the request
    return { allowed: true, remaining: maxRequests, resetIn: windowSeconds }
  }

  try {
    const now = Date.now()
    const windowKey = `${key}:${Math.floor(now / (windowSeconds * 1000))}`

    // Increment counter with timeout
    const count = await withTimeout(redis.incr(windowKey), 2000)

    // Set expiry on first request
    if (count === 1) {
      await withTimeout(redis.expire(windowKey, windowSeconds), 2000)
    }

    const allowed = count <= maxRequests
    const remaining = Math.max(0, maxRequests - count)
    const ttl = await withTimeout(redis.ttl(windowKey), 2000)
    const resetIn = ttl > 0 ? ttl : windowSeconds

    return { allowed, remaining, resetIn }
  } catch (error) {
    console.error("Rate limit check error:", error)
    // On error, allow the request
    return { allowed: true, remaining: maxRequests, resetIn: windowSeconds }
  }
}

/**
 * Close Redis connection (for cleanup)
 */
export async function closeRedisConnection(): Promise<void> {
  if (redisClient) {
    try {
      await redisClient.quit()
    } catch {
      // Ignore errors on close
    }
    redisClient = null
    redisAvailable = null
  }
}
