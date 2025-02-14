'use client'

import Link from "next/link"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  const navigationGroups = [
    {
      items: [
        { title: "ONS TEAM", href: "/ons-team", isHeading: true },
        { title: "SAMENWERKINGEN", href: "/samenwerking", isHeading: true },
        { title: "DIENSTEN", href: "/diensten", isHeading: true },
      ],
      socialIcon: <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />,
      socialLink: "https://www.instagram.com/wrapmasterdh/"
    },
    {
      items: [
        { title: "PORTFOLIO", href: "/portfolio", isHeading: true },
        { title: "6X6 Rental", href: "https://www.6x6rental.nl", isHeading: true },
        { title: "WALLPAPER", href: "/wallpaper", isHeading: true },
      ],
      socialIcon: <FontAwesomeIcon icon={faTiktok} className="h-5 w-5" />,
      socialLink: "https://www.tiktok.com/@wrapmasterdh"
    },
    {
      items: [
        { title: "OFFERTE AANVRAGEN", href: "/offerte-aanvraagen", isHeading: true },
        { title: "CONTACT", href: "/contact", isHeading: true },
        { title: "", href: "", isHeading: true },
      ],
      socialIcon: <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />,
      socialLink: "https://www.facebook.com/WrapmasterDH"
    },
    {
      items: [
        { title: "ALGEMENE VOORWAARDEN", href: "/video/Algemene-Voorwaarden-Wrapmaster-1.pdf", isHeading: true },
        { title: "", href: "", isHeading: true },
        { title: "", href: "", isHeading: true },
      ],
      socialIcon: <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />,
      socialLink: "https://www.youtube.com/@wrapmasterdh/videos"
    },
  ]

  // State to track which accordion groups are open on mobile
  const [openAccordions, setOpenAccordions] = useState(
    new Array(navigationGroups.length).fill(false)
  )

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) => {
      const newState = [...prev]
      newState[index] = !newState[index]
      return newState
    })
  }

  return (
    <footer className="bg-white w-full">
      <div className="container mx-auto md:px-0 py-12">
        {/* Desktop Navigation */}
        <div className="hidden md:grid grid-cols-4 gap-8 text-center mb-8">
          {navigationGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-4 flex flex-col items-center">
              {group.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.href}
                  className={`block ${
                    item.isHeading 
                      ? 'font-light text-[#333] hover:text-[#666]' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              {/* Social media icon */}
              <Link 
                href={group.socialLink} 
                className="text-white bg-black py-2 px-2 rounded-md hover:text-red-600 mt-4 hover:scale-110 transition-all duration-300"
              >
                {group.socialIcon}
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Footer Accordion */}
        <div className="md:hidden w-full mb-8">
          {navigationGroups.map((group, index) => (
            <div key={index} className="border-b border-gray-300">
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 flex justify-between items-center"
              >
                {/* Use the first item's title as the accordion header */}
                <span className="text-[#333] font-light">
                  {group.items[0].title}
                </span>
                <span className="text-2xl">
                  {openAccordions[index] ? '-' : '+'}
                </span>
              </button>
              {openAccordions[index] && (
                <ul className="space-y-4 pb-4 pl-4">
                  {group.items.map((item, itemIndex) => (
                    <li key={`${item.title}-${itemIndex}`}>
                      <Link
                        href={item.href}
                        className="text-[#333] font-light hover:text-[#666] block"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {/* Social Media Icons for Mobile */}
          <div className="flex justify-center space-x-6 mt-8">
            {navigationGroups.map((group, index) => (
              <Link 
                key={index} 
                href={group.socialLink} 
                className="text-black hover:text-gray-600"
              >
                {group.socialIcon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full text-center py-4 px-20 text-sm text-white bg-black">
        {' '}
        <Link 
          href="https://multichoiceagency.nl/" 
          target="_blank" 
          className="font-semibold underline hover:text-gray-400"
        >
        </Link>{' '}
         Copyright © by 2025 Wrapmaster
      </div>
    </footer>
  )
}
