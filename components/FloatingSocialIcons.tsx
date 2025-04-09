"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTiktok, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faChevronLeft, faChevronRight, faSpinner } from "@fortawesome/free-solid-svg-icons"
import type { IconProp } from "@fortawesome/fontawesome-svg-core"

const socialMedia = {
  instagram: "https://www.instagram.com/wrapmasterdh/",
  tiktok: "https://www.tiktok.com/@wrapmasterdh",
  whatsapp: "https://wa.me/31638718893",
  facebook: "https://www.facebook.com/WrapmasterDH",
  phone: "tel:0702250721",
}

const iconMap: { [key: string]: IconProp } = {
  instagram: faInstagram,
  tiktok: faTiktok,
  whatsapp: faWhatsapp,
  facebook: faFacebook,
  phone: faPhone,
}

const FloatingSocialIcons: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading of social media data
    // In a real app, this could be fetching social links from an API
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const toggleVisibility = () => setVisible((prev) => !prev)

  // Loading indicator component
  const LoadingIndicator = () => (
    <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300">
      <FontAwesomeIcon icon={faSpinner as IconProp} className="text-xl animate-spin text-red-600" />
    </div>
  )

  if (loading) {
    return (
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <LoadingIndicator />
      </div>
    )
  }

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      {visible ? (
        <div className="flex flex-col">
          {Object.entries(socialMedia).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300"
            >
              <FontAwesomeIcon icon={iconMap[key as keyof typeof iconMap]} className="text-xl" />
            </a>
          ))}
          <button
            onClick={toggleVisibility}
            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300"
            aria-label="Hide social icons"
          >
            <FontAwesomeIcon icon={faChevronLeft as IconProp} className="text-xl" />
          </button>
        </div>
      ) : (
        <button
          onClick={toggleVisibility}
          className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300"
          aria-label="Show social icons"
        >
          <FontAwesomeIcon icon={faChevronRight as IconProp} className="text-xl" />
        </button>
      )}
    </div>
  )
}

export default FloatingSocialIcons
