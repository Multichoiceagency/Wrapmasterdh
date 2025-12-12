import { NextResponse } from "next/server"
import { getPresignedUploadUrl, uploadToS3, isS3Configured } from "@/lib/s3"

// Maximum file size (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024

// Allowed file types
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf",
  "video/mp4",
  "video/quicktime",
]

/**
 * GET - Generate a signed URL for direct client upload to Supabase Storage
 * This is the recommended method for large files as it uploads directly to storage
 */
export async function GET(request: Request) {
  try {
    if (!isS3Configured()) {
      return NextResponse.json(
        { error: "S3 storage is not configured" },
        { status: 500 }
      )
    }

    const { searchParams } = new URL(request.url)
    const fileName = searchParams.get("fileName")
    const contentType = searchParams.get("contentType")
    const folder = searchParams.get("folder") || "uploads"

    if (!fileName || !contentType) {
      return NextResponse.json(
        { error: "fileName and contentType are required" },
        { status: 400 }
      )
    }

    if (!ALLOWED_TYPES.includes(contentType)) {
      return NextResponse.json(
        { error: "File type not allowed" },
        { status: 400 }
      )
    }

    const { uploadUrl, key, publicUrl } = await getPresignedUploadUrl(
      fileName,
      contentType,
      folder,
      3600 // 1 hour expiry
    )

    return NextResponse.json({
      uploadUrl,
      key,
      publicUrl,
    })
  } catch (error) {
    console.error("Error generating presigned URL:", error)
    return NextResponse.json(
      { error: "Failed to generate upload URL" },
      { status: 500 }
    )
  }
}

/**
 * POST - Upload a file through the server (for smaller files or when direct upload isn't possible)
 * Files are sent to the server first, then uploaded to Supabase Storage
 */
export async function POST(request: Request) {
  try {
    if (!isS3Configured()) {
      return NextResponse.json(
        { error: "S3 storage is not configured" },
        { status: 500 }
      )
    }

    const formData = await request.formData()
    const file = formData.get("file") as File | null
    const folder = (formData.get("folder") as string) || "uploads"

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File size exceeds 10MB limit" },
        { status: 400 }
      )
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: "File type not allowed" },
        { status: 400 }
      )
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const { url, key } = await uploadToS3(buffer, file.name, file.type, folder)

    return NextResponse.json({
      success: true,
      url,
      key,
      fileName: file.name,
      size: file.size,
    })
  } catch (error) {
    console.error("Error uploading file:", error)
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    )
  }
}
