'use client'

import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  const navigationGroups = [
    {
      items: [
        { title: "ONS TEAM", href: "/ons-team", isHeading: true },
        { title: "SAMENWERKING", href: "/samenwerking", isHeading: true },
      ],
      socialIcon: <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />,
      socialLink: "https://www.instagram.com/wrapmasterdh/"
    },
    {
      items: [
        { title: "PORTFOLIO", href: "/portfolio", isHeading: true },
        { title: "WALLPAPER", href: "/wallpaper", isHeading: true },
      ],
      socialIcon: <FontAwesomeIcon icon={faTiktok} className="h-5 w-5" />,
      socialLink: "https://www.tiktok.com/@wrapmasterdh"
    },
    {
      items: [
        { title: "OFFERTE AANVRAGEN", href: "/offerte-aanvragen", isHeading: true },
        { title: "RDW", href: "https://www.rdw.nl/particulier/voertuigen/auto/wijzigen-of-restaureren/kleur-van-uw-auto-aanpassen", isHeading: true },
      ],
      socialIcon: <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />,
      socialLink: "https://www.facebook.com/WrapmasterDH"
    },
    {
      items: [
        { title: "CONTACT", href: "/contact", isHeading: true },
        { title: "ALGEMENE VOORWAARDEN", href: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/Algemene-Voorwaarden-Wrapmaster-1.pdf", isHeading: false },
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
              <Link 
                href={group.socialLink} 
                className="text-white bg-black py-2 px-2 rounded-md hover:text-red-600 mt-4 hover:scale-110 transition-all duration-300"
              >
                {group.socialIcon}
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Navigation (zonder accordion) */}
        <div className="md:hidden w-full mb-8 text-center">
          {navigationGroups.map((group, index) => (
            <div key={index} className="border-b border-gray-300 py-4 px-4">
              <ul className="space-y-4">
                {group.items.map((item, itemIndex) => (
                  <li key={`${item.title}-${itemIndex}`}>
                    <Link
                      href={item.href}
                      className={`block ${
                        item.isHeading 
                          ? 'font-light text-[#333] hover:text-[#666]' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Social Media Icons voor Mobile */}
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
      <div className="w-full text-center py-6 px-6 md:px-20 text-sm text-gray-400 bg-black border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span>© {new Date().getFullYear()} Wrapmaster Den Haag. Alle rechten voorbehouden.</span>
          <span className="hidden md:inline text-gray-600">|</span>
          <span>
            Powered by{" "}
            <Link 
              href="https://multichoiceagency.nl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 font-medium transition-colors"
            >
              Multichoiceagency
            </Link>
          </span>
        </div>
        <div className="flex items-center justify-center gap-4 mt-3 text-xs text-gray-500">
          <Link 
            href="/sitemap.xml" 
            target="_blank" 
            className="hover:text-white transition-colors"
          >
            Sitemap
          </Link>
          <span className="text-gray-700">·</span>
          <Link 
            href="/robots.txt" 
            target="_blank" 
            className="hover:text-white transition-colors"
          >
            Robots
          </Link>
        </div>
      </div>
      
    </footer>
  )
}
