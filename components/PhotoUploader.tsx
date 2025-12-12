"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const BUCKET_NAME = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || "photos"

interface PhotoUploaderProps {
  onUploadComplete?: (url: string, filename: string) => void
  accept?: string
  maxSizeMB?: number
  className?: string
}

export default function PhotoUploader({
  onUploadComplete,
  accept = "image/*",
  maxSizeMB = 10,
  className = "",
}: PhotoUploaderProps) {
  const [uploading, setUploading] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null)

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // File size limit
    const maxSize = maxSizeMB * 1024 * 1024
    if (file.size > maxSize) {
      setMsg(`Bestand is groter dan ${maxSizeMB} MB`)
      return
    }

    setUploading(true)
    setMsg(null)

    try {
      const ext = file.name.split(".").pop()
      const filename = `${crypto.randomUUID()}.${ext}`

      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(filename, file, {
          contentType: file.type,
          upsert: false,
        })

      if (error) {
        setMsg("Upload mislukt: " + error.message)
      } else {
        // Build the public URL for self-hosted Supabase
        const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${filename}`
        setUploadedUrl(publicUrl)
        setMsg("✅ Upload voltooid!")
        onUploadComplete?.(publicUrl, filename)
      }
    } catch (err) {
      setMsg("Upload mislukt: " + (err instanceof Error ? err.message : "Onbekende fout"))
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className={`photo-uploader ${className}`}>
      <label className="block">
        <span className="sr-only">Kies een bestand</span>
        <input
          type="file"
          accept={accept}
          onChange={onChange}
          disabled={uploading}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-black file:text-white
            hover:file:bg-gray-800
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </label>

      {uploading && (
        <p className="mt-2 text-sm text-gray-600">Uploaden...</p>
      )}

      {msg && (
        <p className={`mt-2 text-sm ${msg.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
          {msg}
        </p>
      )}

      {uploadedUrl && (
        <div className="mt-2">
          <img
            src={uploadedUrl}
            alt="Geüploade foto"
            className="max-w-xs rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  )
}
