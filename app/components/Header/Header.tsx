'use client';

import { useState, useEffect } from 'react';
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
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 z-50 flex justify-between items-center px-4 xs:px-10 sm:px-6 md:px-8 lg:px-10 xl:px-16 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Hamburger Menu Button */}
      <button
        className={`z-50 flex items-center text-2xl focus:outline-none ${
          menuOpen || isScrolled ? 'text-black' : 'text-white'
        }`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {/* Centered Logo */}
      <div className="flex-grow flex justify-center">
        <Link href="/">
          <img
            src={isScrolled ? '/logos/logo-zwart.png' : '/logos/logo-wit.png'} // Replace with your logo paths
            alt="Logo"
            className="h-10 xs:h-24 pt-2 sm:h-14 md:h-16 lg:h-18 xl:h-36"
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
          <Link href="/">
            <img
              src="/logos/handtekening-zwart.png" // Replace with your logo path
              alt="Logo"
              className="h-18"
            />
          </Link>
          <li className="w-full text-center md:text-left">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
          </li>
          <li className="w-full text-center md:text-left">
            <Link href="/cars" onClick={() => setMenuOpen(false)}>
              CARS
            </Link>
          </li>
          <li className="w-full text-center md:text-left">
            <Link href="/boats" onClick={() => setMenuOpen(false)}>
              BOATS
            </Link>
          </li>
          <li className="w-full text-center md:text-left">
            <Link href="/fashion" onClick={() => setMenuOpen(false)}>
              FASHION
            </Link>
          </li>
          <li className="w-full text-center md:text-left">
            <Link href="/collaborations" onClick={() => setMenuOpen(false)}>
              COLLABORATIONS
            </Link>
          </li>
          <li className="w-full text-center md:text-left">
            <Link href="/brand" onClick={() => setMenuOpen(false)}>
              BRAND
            </Link>
          </li>
          <li className="w-full text-center md:text-left">
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
