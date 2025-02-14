"use client"

import { useRouter } from "next/navigation"

export default function OfferteAanvragen() {
  const router = useRouter() // ✅ Next.js router gebruiken

  return (
    <main className="relative">
      {/* ✅ Knop verplaatst naar de linkerkant */}
      <button
        onClick={() => router.push("/offerte-aanvragen")}
        className="fixed font-bold text-l bottom-4 left-4 bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        OFFERTE AANVRAGEN
      </button>
    </main>
  )
}
