'use client'

import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  const navigationGroups = [
    {
      items: [
        { title: "ONS TEAM", href: "/ons-team", isHeading: true },
        { title: "SAMENWERKINGEN", href: "/samenwerking", isHeading: true },
        { title: "DIENSTEN", href: "/portfolio", isHeading: true },
      ],
      socialIcon: <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />,
      socialLink: "https://www.instagram.com/wrapmasterdh/"
    },
    {
      items: [
        { title: "PORTFOLIO", href: "/algemene voorwaarden", isHeading: true },
        { title: "6X6 Rental", href: "/herroeping-claim", isHeading: true },
        { title: "Ons team", href: "/voorwaarden", isHeading: true },
      ],
      socialIcon: <FontAwesomeIcon icon={faTiktok} className="h-5 w-5" />,
      socialLink: "https://www.tiktok.com/@wrapmasterdh"
    },
    {
      items: [
        { title: "OFFERTE AANVRAGEN", href: "/tuning-shop", isHeading: true },
        { title: "CONTACT", href: "/mode-shop", isHeading: true },
        { title: "VACATURES", href: "/privacybeleid", isHeading: true },
      ],
      socialIcon: <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />,
      socialLink: "https://www.facebook.com/WrapmasterDH"
    },
    {
      items: [
        { title: "WRAPVOORWAARDEN", href: "/carriere", isHeading: true },
        { title: "ALGEMENE VOORWAARDEN", href: "/contact", isHeading: true },
        { title: "PRIVACYBELEID", href: "/cookie-instellingen", isHeading: true },
      ],
      socialIcon: <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />,
      socialLink: "https://www.youtube.com/@wrapmasterdh/videos"
    },
  ]

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
              <Link href={group.socialLink} className="text-white bg-black py-2 px-2 rounded-md hover:text-red-600 mt-4 hover:scale-110 transition-all duration-300">
                {group.socialIcon}
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Footer with list layout */}
        <div className="md:hidden w-full mb-8">
          <ul className="space-y-8">
            {navigationGroups.flatMap(group => 
              group.items.map((item, itemIndex) => (
                <li key={`${item.title}-${itemIndex}`}>
                  <Link
                    href={item.href}
                    className="text-[#333] font-light hover:text-[#666] block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))
            )}
          </ul>
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
        Website gerealiseerd door{' '}
        <Link 
          href="https://multichoiceagency.nl/" 
          target="_blank" 
          className="font-semibold underline hover:text-gray-400"
        >
          Multichoiceagency.nl - Webdesign Studio
        </Link>{' '}
        | Copyright 2024 © door Wrapmaster
      </div>
    </footer>
  )
}

