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

// Get or create Redis client (singleton pattern)
export function getRedisClient(): Redis {
  if (!redisClient) {
    const redisUrl = process.env.REDIS_URL

    if (redisUrl) {
      // Use connection URL
      redisClient = new Redis(redisUrl, {
        maxRetriesPerRequest: 3,
        retryDelayOnFailover: 100,
        lazyConnect: true,
        tls: redisUrl.startsWith("rediss://") ? {} : undefined,
      })
    } else {
      // Use individual settings
      const host = process.env.REDIS_HOST
      const port = parseInt(process.env.REDIS_PORT || "6380", 10)
      const password = process.env.REDIS_PASSWORD
      const username = process.env.REDIS_USERNAME || "default"

      if (!host || !password) {
        throw new Error("Redis configuration is missing. Set REDIS_URL or REDIS_HOST and REDIS_PASSWORD")
      }

      redisClient = new Redis({
        host,
        port,
        username,
        password,
        tls: {}, // Enable TLS for secure connection
        maxRetriesPerRequest: 3,
        retryDelayOnFailover: 100,
        lazyConnect: true,
      })
    }

    // Error handling
    redisClient.on("error", (err) => {
      console.error("Redis connection error:", err.message)
    })

    redisClient.on("connect", () => {
      console.log("Redis connected successfully")
    })
  }

  return redisClient
}

// Default cache TTL in seconds (1 hour)
const DEFAULT_TTL = 3600

/**
 * Get a value from cache
 */
export async function cacheGet<T>(key: string): Promise<T | null> {
  try {
    const redis = getRedisClient()
    const value = await redis.get(key)

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
  try {
    const redis = getRedisClient()
    await redis.setex(key, ttlSeconds, JSON.stringify(value))
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
  try {
    const redis = getRedisClient()
    await redis.del(key)
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
  try {
    const redis = getRedisClient()
    const keys = await redis.keys(pattern)

    if (keys.length > 0) {
      await redis.del(...keys)
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
  try {
    const redis = getRedisClient()
    await redis.ping()
    return true
  } catch {
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
  try {
    const redis = getRedisClient()
    const now = Date.now()
    const windowKey = `${key}:${Math.floor(now / (windowSeconds * 1000))}`

    // Increment counter
    const count = await redis.incr(windowKey)

    // Set expiry on first request
    if (count === 1) {
      await redis.expire(windowKey, windowSeconds)
    }

    const allowed = count <= maxRequests
    const remaining = Math.max(0, maxRequests - count)
    const ttl = await redis.ttl(windowKey)
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
    await redisClient.quit()
    redisClient = null
  }
}
