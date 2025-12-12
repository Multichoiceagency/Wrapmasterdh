"use client"

import PhotoUploader from "@/components/PhotoUploader"

export default function TestUploadPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Test Foto Upload</h1>
        <p className="text-gray-600 mb-6">
          Upload een foto naar Supabase Storage om te testen of de connectie werkt.
        </p>

        <PhotoUploader
          onUploadComplete={(url, filename) => {
            console.log("Upload complete:", { url, filename })
          }}
          accept="image/*"
          maxSizeMB={10}
        />

        <div className="mt-8 p-4 bg-gray-50 rounded text-sm">
          <p className="font-semibold mb-2">Configuratie:</p>
          <p className="text-gray-600 break-all">
            URL: {process.env.NEXT_PUBLIC_SUPABASE_URL || "Niet ingesteld"}
          </p>
          <p className="text-gray-600">
            Bucket: {process.env.NEXT_PUBLIC_SUPABASE_BUCKET || "photos"}
          </p>
        </div>
      </div>
    </div>
  )
}
