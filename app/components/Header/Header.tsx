'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faFileAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Diensten', link: '/diensten' },
  { id: 3, title: 'Portfolio', link: '/portfolio' },
  { id: 6, title: 'Offerte aanvragen', link: '/offerte-aanvragen' },
  { id: 8, title: 'Ons Team', link: '/ons-team' },
  { id: 7, title: 'Wallpaper', link: '/wallpaper' },
  { id: 4, title: 'Samenwerking', link: '/samenwerking' },
  { id: 5, title: '6×6 Rental', link: '/6x6-rental' },
];

const socialMedia = {
  instagram: 'https://www.instagram.com/wrapmasterdh/',
  tiktok: 'https://www.tiktok.com/@wrapmasterdh',
  whatsapp: 'https://wa.me/31638718893',
  facebook: 'https://www.facebook.com/WrapmasterDH',
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef<boolean>(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
      // Reset the animation by removing and re-adding the menu-container class
      if (menuRef.current) {
        menuRef.current.classList.remove('menu-container');
        void menuRef.current.offsetWidth; // Trigger a reflow
        menuRef.current.classList.add('menu-container');
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      isMobileRef.current = window.innerWidth < 768;
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node) && !isMobileRef.current) {
        toggleMenu();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen]);

  const renderSocialIcons = (isScrolled: boolean) => {
    const iconMap: { [key: string]: IconProp } = {
      instagram: faInstagram,
      tiktok: faTiktok,
      whatsapp: faWhatsapp,
      facebook: faFacebook,
    };

    return (
      <div className="flex justify-center space-x-4">
        {Object.entries(socialMedia).map(([key, value]) => {
          const icon = iconMap[key as keyof typeof iconMap];
          if (!icon || !value) return null;
          return (
            <a key={key} href={value} target="_blank" rel="noopener noreferrer" aria-label={key}>
              <FontAwesomeIcon icon={icon} className={`text-2xl ${isScrolled ? 'text-black' : 'text-white'}`} />
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <style jsx global>{`
        @keyframes stairAnimation {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes curtainSlide {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes slideOut {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @media (max-width: 767px) {
          .menu-container {
            animation: curtainSlide 0.3s ease-out forwards;
          }
          .menu-items > * {
            opacity: 0;
            animation: stairAnimation 0.3s ease-out forwards;
          }
          .menu-items > *:nth-child(1) { animation-delay: 0.1s; }
          .menu-items > *:nth-child(2) { animation-delay: 0.15s; }
          .menu-items > *:nth-child(3) { animation-delay: 0.2s; }
          .menu-items > *:nth-child(4) { animation-delay: 0.25s; }
          .menu-items > *:nth-child(5) { animation-delay: 0.3s; }
          .menu-items > *:nth-child(6) { animation-delay: 0.35s; }
          .menu-items > *:nth-child(7) { animation-delay: 0.4s; }
          .menu-items > *:nth-child(8) { animation-delay: 0.45s; }
        }
        @media (min-width: 768px) {
          .slide-in {
            animation: slideIn 0.3s ease-out forwards;
          }
          .slide-out {
            animation: slideOut 0.3s ease-in-out forwards;
          }
        }
      `}</style>
      <header
        className={`fixed top-0 w-full transition-all duration-300 z-50 flex items-center py-2 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <button
          className={`px-3 py-4 flex items-center justify-center focus:outline-none transition-all duration-300 ease-in-out z-[90] ${
            menuOpen || isScrolled ? 'text-black' : 'text-white'
          }`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          <FontAwesomeIcon
            icon={menuOpen ? (faTimes as IconProp) : (faBars as IconProp)}
            className="text-2xl hover:text-red-600 transition-all duration-300"
          />
        </button>

        <div className="flex-grow flex justify-center items-center">
          <Link href="/">
            <Image
              src={isScrolled ? '/logos/handtekening-zwart.png' : '/logos/handtekening-wit.png'}
              alt="wrapmaster logo"
              width={200}
              height={150}
              className={`transition-all duration-300
                ${isScrolled 
                  ? 'h-6 w-auto xs:h-12 sm:h-10 md:h-12 lg:h-14 xl:h-16' 
                  : 'h-8 w-auto xs:h-16 sm:h-14 md:h-16 lg:h-18 xl:h-20'}
                pt-2`}
            />
          </Link>
        </div>

        <div className="md:hidden px-3 py-4">
          <Link href="tel:0702250721" className="flex items-center">
            <FontAwesomeIcon icon={faPhone as IconProp} className="text-red-600 text-2xl" />
            <span className="absolute top-4 right-3 h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
          </Link>
        </div>

        <div className="hidden md:block px-4">
          {renderSocialIcons(isScrolled)}
        </div>

        <nav
          ref={menuRef}
          className={`fixed top-0 left-0 bg-white z-[100] w-full md:w-[300px] h-screen shadow-lg transform transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0 slide-in' : '-translate-x-full'
          } ${isClosing ? 'slide-out' : ''}`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4">
              <Link href="/">
                <Image
                  src="/logos/logo-zwart.png"
                  alt="Logo zwart"
                  width={250}
                  height={150}
                  className='w-36'
                />
              </Link>
              <button
                className="text-2xl focus:outline-none"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                <FontAwesomeIcon icon={faTimes as IconProp} />
              </button>
            </div>
            <ul className="flex-grow overflow-y-auto menu-items">
              {menuItems.map((item) => (
                <li key={item.id} className="py-2 px-4">
                  <Link href={item.link} onClick={toggleMenu} className="block w-full text-lg font-light hover:text-red-600 hover:font-medium transition-colors duration-200">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4 border-t border-gray-200">
              <div className="md:hidden">
                {renderSocialIcons(true)}
              </div>
              <Link href="/offerte-aanvragen" className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 transition-colors hover:scale-110 duration-900 fade-in-out">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                Offerte Aanvragen
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

