'use client'

import Link from "next/link"
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { TikTok } from '@/components/TikTok'

export default function Footer() {
  const navigationGroups = [
    {
      items: [
        { title: "WIE WIJ ZIJN", href: "/wie-wij-zijn", isHeading: true },
        { title: "VIND EEN DEALER", href: "/vind-een-dealer", isHeading: true },
        { title: "COLOFON", href: "/colofon", isHeading: true },
      ],
      socialIcon: <Instagram className="h-5 w-5" />,
      socialLink: "#instagram"
    },
    {
      items: [
        { title: "GESCHIEDENIS", href: "/geschiedenis", isHeading: true },
        { title: "HERROEPING & CLAIM", href: "/herroeping-claim", isHeading: true },
        { title: "VOORWAARDEN", href: "/voorwaarden", isHeading: true },
      ],
      socialIcon: <TikTok className="h-5 w-5" />,
      socialLink: "#tiktok"
    },
    {
      items: [
        { title: "TUNING SHOP", href: "/tuning-shop", isHeading: true },
        { title: "MODE SHOP", href: "/mode-shop", isHeading: true },
        { title: "PRIVACYBELEID", href: "/privacybeleid", isHeading: true },
      ],
      socialIcon: <Facebook className="h-5 w-5" />,
      socialLink: "#facebook"
    },
    {
      items: [
        { title: "CARRIÈRE", href: "/carriere", isHeading: true },
        { title: "CONTACT", href: "/contact", isHeading: true },
        { title: "COOKIE-INSTELLINGEN", href: "/cookie-instellingen", isHeading: true },
      ],
      socialIcon: <Youtube className="h-5 w-5" />,
      socialLink: "#youtube"
    },
  ]

  return (
    <footer className="bg-white w-full py-24">
      {/* Desktop Footer */}
      <div className="container mx-auto px-6 md:px-0 py-24 md:py-16">
        {/* Desktop Navigation */}
        <div className="hidden md:grid grid-cols-4 gap-8 text-center">
          {navigationGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-4 flex flex-col items-center">
              {group.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.href}
                  className={`block ${
                    item.isHeading 
                      ? 'font-semibold text-[#333] hover:text-[#666]' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              {/* Social media icon */}
              <Link href={group.socialLink} className="text-black hover:text-gray-600 mt-4">
                {group.socialIcon}
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Footer with 2-column grid */}
        <div className="md:hidden px-4 w-full">
          <div className="grid grid-cols-2 gap-x- gap-y-2">
            {navigationGroups.flatMap(group => 
              group.items.map((item, itemIndex) => (
                <Link
                  key={`${item.title}-${itemIndex}`}
                  href={item.href}
                  className="text-[#333] font-semibold hover:text-[#666]"
                >
                  {item.title}
                </Link>
              ))
            )}
          </div>
          {/* Social Media Icons for Mobile */}
          <div className="flex justify-start space-x-4 mt-6">
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

        {/* Contact Information */}
        <div className="mt-0 px-10 md:px-0 text-left md:text-center text-gray-600">
          <p>Westvlietweg 72-L</p>
          <p>2495 AA, Den Haag</p>
          <Link href="tel:+31638718893" className="hover:text-gray-900">
            +31 6 38718893
          </Link>
          <br />
          <Link href="mailto:info@wrapmasterdh.nl" className="hover:text-gray-900">
            info@wrapmasterdh.nl
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full text-center py-4 mt-10 text-sm text-white bg-black">
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

