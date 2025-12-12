"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faTiktok, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons"
import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import Link from "next/link"
import Image from "next/image"

const menuItems = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Diensten", link: "/diensten" },
  { id: 3, title: "Portfolio", link: "/portfolio" },
  { id: 4, title: "Offerte aanvragen", link: "/offerte-aanvragen" },
  { id: 5, title: "Ons Team", link: "/ons-team" },
  { id: 6, title: "Wallpaper", link: "/wallpaper" },
  { id: 7, title: "Samenwerking", link: "/samenwerking" },
  { id: 8, title: "Contact", link: "/contact" },
]

const socialMedia = {
  instagram: "https://www.instagram.com/wrapmasterdh/",
  tiktok: "https://www.tiktok.com/@wrapmasterdh",
  whatsapp: "https://wa.me/31638718893",
  facebook: "https://www.facebook.com/WrapmasterDH",
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  // Updated renderSocialIcons that accepts a custom container className
  const renderSocialIcons = (containerClass = "hidden md:flex justify-end space-x-4 pr-4") => {
    const iconMap: { [key: string]: IconProp } = {
      instagram: faInstagram,
      tiktok: faTiktok,
      whatsapp: faWhatsapp,
      facebook: faFacebook,
    }

    return (
      <div className={containerClass}>
        {Object.entries(socialMedia).map(([key, value]) => {
          const icon = iconMap[key]
          return (
            <a key={key} href={value} target="_blank" rel="noopener noreferrer" aria-label={key}>
              <FontAwesomeIcon
                icon={icon}
                className={`text-2xl transition duration-300 ${isScrolled ? "text-black" : "text-white"} hover:text-red-600`}
              />
            </a>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full transition-all duration-300 z-50 grid grid-cols-3 items-center py-2 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        {/* Left: Hamburger menu */}
        <div className="flex justify-start pl-4">
          <button
            className="p-3 flex items-center focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            <FontAwesomeIcon
              icon={menuOpen ? (faTimes as IconProp) : (faBars as IconProp)}
              className={`text-2xl transition duration-300 ${
                isScrolled ? "text-black" : "text-white"
              } hover:text-red-600`}
            />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image
              src={isScrolled ? "http://localhost:3010/uploads/logos/handtekening-zwart.png" : "http://localhost:3010/uploads/logos/handtekening-wit.png"}
              alt="wrapmaster logo"
              width={200}
              height={150}
              className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 w-auto transition-all duration-300"
              priority
            />
          </Link>
        </div>

        {/* Right: Social media icons for desktop */}
        {renderSocialIcons()}
      </header>

      {/* Mobile menu overlay */}
      <nav
        ref={menuRef}
        className={`fixed top-0 left-0 bg-white z-[100] w-full md:w-[300px] h-screen shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4">
            <Link href="/">
              <Image src="http://localhost:3010/uploads/logos/logo-zwart.png" alt="Logo zwart" width={250} height={150} className="w-36" priority />
            </Link>
            <button className="text-2xl focus:outline-none" onClick={toggleMenu} aria-label="Close Menu">
              <FontAwesomeIcon icon={faTimes as IconProp} />
            </button>
          </div>

          <ul className="flex-grow overflow-y-auto">
            {menuItems.map((item) => (
              <li key={item.id} className="py-2 px-4">
                {item.link.startsWith("http") ? (
                  <a
                    href={item.link}
                    onClick={toggleMenu}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-lg font-light hover:text-red-600 hover:font-medium transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    href={item.link}
                    onClick={toggleMenu}
                    className="block w-full text-lg font-light hover:text-red-600 hover:font-medium transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Social icons at the bottom of mobile menu */}
          <div className="p-4 pb-8 border-t border-gray-200">
            <div className="flex justify-center space-x-4">{renderSocialIcons("flex justify-center space-x-4")}</div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
