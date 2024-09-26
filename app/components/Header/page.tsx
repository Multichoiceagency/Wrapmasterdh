'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Button from '../Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle scroll for sticky header effect
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <header
      className={`fixed top-0 w-full h-20 transition-all duration-300 z-50 flex justify-between items-center px-5 ${
        isScrolled ? 'bg-white/10 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Hamburger Menu Button */}
      <button
  className={`z-50 flex items-center text-2xl focus:outline-none ${
    menuOpen ? 'text-black' : 'text-white'
  }`}
  onClick={toggleMenu}
  aria-label="Toggle Menu"
>
  <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
</button>

      {/* Centered Logo */}
      <div className="flex-grow flex justify-center ">
        <Link href="/">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="h-18"
          />
        </Link>
      </div>

      {/* Phone icon for mobile */}
      <a
        href="tel:+1234567890" // Replace with actual phone number
        className={`text-xl block md:hidden ${menuOpen ? 'hidden' : 'block'}`}
        aria-label="Phone"
      >
        <FontAwesomeIcon icon={faPhone} />
      </a>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <Button icon={<FontAwesomeIcon icon={faPhone} />}>Gratis offerte</Button>
      </div>

      {/* Menu: Fullscreen on Mobile, Sidebar on Desktop (from the left) */}
      <nav
        className={`fixed top-0 left-0 transition-transform duration-300 ease-in-out z-40 w-full h-screen bg-white md:w-[300px] md:h-screen md:left-0 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col font-bold items-center justify-center h-full space-y-8 text-lg md:space-y-5 md:items-start md:p-5">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link href="/cars" onClick={() => setMenuOpen(false)}>
              CARS
            </Link>
          </li>
          <li>
            <Link href="/boats" onClick={() => setMenuOpen(false)}>
              BOATS
            </Link>
          </li>
          <li>
            <Link href="/fashion" onClick={() => setMenuOpen(false)}>
              FASHION
            </Link>
          </li>
          <li>
            <Link href="/collaborations" onClick={() => setMenuOpen(false)}>
              COLLABORATIONS
            </Link>
          </li>
          <li>
            <Link href="/brand" onClick={() => setMenuOpen(false)}>
              BRAND
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
