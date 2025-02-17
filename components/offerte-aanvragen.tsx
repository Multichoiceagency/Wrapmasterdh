"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState, useRef } from "react"

export default function OfferteAanvragen() {
  const router = useRouter()
  const [showButton, setShowButton] = useState(true)
  const lastScrollY = useRef(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    // Als we omhoog scrollen (huidige positie is lager dan de vorige)
    if (currentScrollY < lastScrollY.current) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
    lastScrollY.current = currentScrollY
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative">
      {showButton && (
        <button
          onClick={() => router.push("/offerte-aanvragen")}
          className="fixed font-bold text-sm bottom-4 left-4 bg-green-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        >
          OFFERTE AANVRAGEN
        </button>
      )}
    </main>
  )
}
