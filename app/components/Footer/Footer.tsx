'use client'

import Link from "next/link"
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { TikTok } from '@/components/TikTok'

export default function Footer() {
  const navigationGroups = [
    {
      items: [
        { title: "OVER ONS", href: "/wie-wij-zijn", isHeading: true },
        { title: "DIENSTEN", href: "/vind-een-dealer", isHeading: true },
        { title: "PORTFOLIO", href: "/colofon", isHeading: true },
      ],
      socialIcon: <Instagram className="h-5 w-5" />,
      socialLink: "#instagram"
    },
    {
      items: [
        { title: "SAMENWERKING", href: "/geschiedenis", isHeading: true },
        { title: "6X6 Rental", href: "/herroeping-claim", isHeading: true },
        { title: "Ons team", href: "/voorwaarden", isHeading: true },
      ],
      socialIcon: <TikTok className="h-5 w-5" />,
      socialLink: "https://www.tiktok.com/@wrapmasterdh"
    },
    {
      items: [
        { title: "ALGEMENE VOORWAARDEN", href: "/tuning-shop", isHeading: true },
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
    <footer className="bg-white w-full">
      <div className="container mx-auto px-6 md:px-0 py-12">
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
        <div className="md:hidden px-4 w-full mb-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
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
      </div>

      {/* Copyright Section */}
      <div className="w-full text-center py-4 text-sm text-white bg-black">
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

