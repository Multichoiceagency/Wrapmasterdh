'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Button from '../Button';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { href: "/diensten", text: "DIENSTEN" },
    { href: "/auto-wrappen", text: "AUTO WRAPPEN" },
    { href: "/auto-wrappen", text: "PPF" },
    { href: "/auto-wrappen", text: "3D MODELLEN" },
    { href: "/boats", text: "PORTFOLIO" },
    { href: "/bekende-nederlanders", text: "BEKENDE BN'ERS" },
    { href: "/over-ons", text: "OVER ONS" },
    { href: "/contact", text: "CONTACT" },
  ];

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 z-50 flex justify-between items-center px-4 xs:px-10 sm:px-6 md:px-8 lg:px-10 xl:px-16 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <button
        className={`z-50 flex items-center text-2xl focus:outline-none transition-all duration-300 ease-in-out ${
          menuOpen || isScrolled ? 'text-black' : 'text-white'
        }`}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      <div className="flex-grow flex justify-center">
        <Link href="/">
          <img
            src={isScrolled ? '/logos/handtekening-zwart.png' : '/logos/handtekening-wit.png'}
            alt="wrapmaster logo"
            className={`transition-all duration-300
              ${isScrolled 
                ? 'h-6 w-auto xs:h-12 sm:h-10 md:h-12 lg:h-14 xl:h-16' 
                : 'h-8 w-auto xs:h-16 sm:h-14 md:h-16 lg:h-18 xl:h-20'}
              pt-2`}
            width={200}
            height={150}
          />
        </Link>
      </div>

      <a
        href="tel:0702250721"
        className={`text-xl block md:hidden ${
          menuOpen ? 'hidden' : 'block'
        } ${
          isScrolled ? 'text-black' : 'text-white'
        }`}
        aria-label="Phone"
      >
        <FontAwesomeIcon icon={faPhone} />
      </a>

      <div className="hidden md:block">
        <Link href="/offerte-aanvragen">
          <Button className='bg-red-700 hover:bg-slate-950 font-medium' icon={<FontAwesomeIcon icon={faPhone} />}>
            Gratis offerte
          </Button>
        </Link>
      </div>

      <nav
        className={`fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out transform 
          ${menuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'} 
          md:w-[300px] md:left-0 md:h-screen ${menuOpen ? 'md:translate-x-0' : 'md:-translate-x-full'}`}
      >
        <ul className="flex flex-col font-bold items-center justify-center h-full space-y-8 text-lg md:space-y-5 md:items-start md:p-5">
          <Link href="/">
            <img
              src="/logos/logo-zwart.png"
              alt="Logo"
              className='justify-items-right lg:w-32 md:w-38 xs:w-16'
              width={200}
              height={150}
            />
          </Link>
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className={`w-full text-center md:text-left px-10 transform transition-all duration-300 ease-in-out ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${menuOpen ? index * 50 : 0}ms` }}
            >
              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                {item.text}
              </Link>
            </li>
          ))}
          <li className={`w-full text-center md:text-left transform transition-all duration-300 ease-in-out ${
            menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: `${menuOpen ? menuItems.length * 50 : 0}ms` }}>
            <Link href="/offerte-aanvragen" onClick={() => setMenuOpen(false)}>
              <Button className='bg-red-700 hover:bg-slate-950 font-bold' icon={<FontAwesomeIcon icon={faPhone} />}>
                OFFERTE AANVRAGEN
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;