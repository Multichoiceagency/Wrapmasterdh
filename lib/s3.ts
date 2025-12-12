import { createClient, SupabaseClient } from "@supabase/supabase-js"

/**
 * Supabase Storage Configuration (Self-Hosted on Coolify)
 *
 * This library supports both cloud-hosted and self-hosted Supabase instances.
 * For self-hosted, the URL format is different from supabase.co
 *
 * Required environment variables:
 * - NEXT_PUBLIC_SUPABASE_URL: Your Supabase Kong URL
 * - SUPABASE_SERVICE_ROLE_KEY: Service role key (for server-side uploads)
 * - NEXT_PUBLIC_SUPABASE_ANON_KEY: Anon key (for client-side)
 * - NEXT_PUBLIC_SUPABASE_BUCKET: Storage bucket name (default: "photos")
 */

let supabaseClient: SupabaseClient | null = null

// Get or create Supabase client for server-side operations
// Returns null if Supabase is not configured
export function getSupabaseClient(): SupabaseClient | null {
  if (!isS3Configured()) {
    return null
  }
  
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    // Use service role key for server-side, fallback to anon key
    const supabaseKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)!

    supabaseClient = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  }
  return supabaseClient
}

export const STORAGE_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || "photos"

// Generate a unique filename with timestamp and random string
export function generateUniqueFileName(originalName: string): string {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 15)
  const extension = originalName.split(".").pop()
  const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9]/g, "-")
  return `${baseName}-${timestamp}-${randomString}.${extension}`
}

// Get the public URL for a file (works with self-hosted Supabase)
export function getPublicUrl(bucket: string, path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  return `${baseUrl}/storage/v1/object/public/${bucket}/${path}`
}

// Upload a file to Supabase Storage
export async function uploadToS3(
  file: Buffer,
  fileName: string,
  contentType: string,
  folder: string = "uploads"
): Promise<{ url: string; key: string }> {
  const supabase = getSupabaseClient()
  
  if (!supabase) {
    throw new Error("Supabase is not configured")
  }
  
  const uniqueFileName = generateUniqueFileName(fileName)
  const key = folder ? `${folder}/${uniqueFileName}` : uniqueFileName

  const { data, error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(key, file, {
      contentType,
      upsert: false,
    })

  if (error) {
    throw new Error(`Failed to upload file: ${error.message}`)
  }

  // Build public URL for self-hosted Supabase
  const url = getPublicUrl(STORAGE_BUCKET, key)

  return { url, key }
}

// Generate a signed URL for direct client uploads
export async function getPresignedUploadUrl(
  fileName: string,
  contentType: string,
  folder: string = "uploads",
  expiresIn: number = 3600
): Promise<{ uploadUrl: string; key: string; publicUrl: string }> {
  const supabase = getSupabaseClient()
  
  if (!supabase) {
    throw new Error("Supabase is not configured")
  }
  
  const uniqueFileName = generateUniqueFileName(fileName)
  const key = folder ? `${folder}/${uniqueFileName}` : uniqueFileName

  const { data, error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .createSignedUploadUrl(key)

  if (error) {
    throw new Error(`Failed to create signed upload URL: ${error.message}`)
  }

  const publicUrl = getPublicUrl(STORAGE_BUCKET, key)

  return {
    uploadUrl: data.signedUrl,
    key,
    publicUrl,
  }
}

// Generate a signed URL for downloading/viewing files
export async function getPresignedDownloadUrl(
  key: string,
  expiresIn: number = 3600
): Promise<string> {
  const supabase = getSupabaseClient()

  if (!supabase) {
    throw new Error("Supabase is not configured")
  }

  const { data, error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .createSignedUrl(key, expiresIn)

  if (error) {
    throw new Error(`Failed to create signed download URL: ${error.message}`)
  }

  return data.signedUrl
}

// Delete a file from Supabase Storage
export async function deleteFromS3(key: string): Promise<void> {
  const supabase = getSupabaseClient()

  if (!supabase) {
    throw new Error("Supabase is not configured")
  }

  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .remove([key])

  if (error) {
    throw new Error(`Failed to delete file: ${error.message}`)
  }
}

// Get the public URL for a stored object
export function getS3PublicUrl(key: string): string {
  return getPublicUrl(STORAGE_BUCKET, key)
}

// List files in a folder
export async function listFilesInFolder(
  folder: string,
  maxKeys: number = 100
): Promise<{ key: string; size: number; lastModified: Date }[]> {
  const supabase = getSupabaseClient()

  if (!supabase) {
    throw new Error("Supabase is not configured")
  }

  const { data, error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .list(folder, {
      limit: maxKeys,
      sortBy: { column: "created_at", order: "desc" },
    })

  if (error) {
    throw new Error(`Failed to list files: ${error.message}`)
  }

  return (data || []).map((item) => ({
    key: `${folder}/${item.name}`,
    size: item.metadata?.size || 0,
    lastModified: new Date(item.created_at || Date.now()),
  }))
}

// Check if Supabase Storage is properly configured
export function isS3Configured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  )
}
