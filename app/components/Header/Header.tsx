'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faFileAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
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
};

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

  const renderSocialIcons = (isScrolled: boolean) => {
    const iconMap: { [key: string]: IconProp } = {
      instagram: faInstagram,
      tiktok: faTiktok,
      whatsapp: faWhatsapp,
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
        @keyframes slideInWithBounce {
          0% {
            transform: translateX(-100%);
          }
          60% {
            transform: translateX(10px);
          }
          80% {
            transform: translateX(-5px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .slide-in-bounce {
          animation: slideInWithBounce 0.5s ease-out forwards;
        }
      `}</style>
      <header
        className={`fixed top-0 w-full transition-all duration-300 z-50 flex items-center ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <button
          className={`px-3 py-4 flex items-center justify-center focus:outline-none transition-all duration-300 ease-in-out ${
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
              src={isScrolled ? 'https://drive.google.com/uc?export=view&id=1etzIdB5hN6BqJluoXwuWa93tm8wx2uBb' : 'https://drive.google.com/uc?export=view&id=1O8eIS4tSNvYqFC6PxEdJiZgixFS1avfQ'}
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
          className={`fixed top-0 left-0 bg-white z-[100] w-full md:w-[300px] h-screen shadow-lg transform ${
            menuOpen ? 'translate-x-0 slide-in-bounce' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4">
              <Link href="/">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1lZO0iGKbpw3pDBj22dQQd4ZyXbLYz1_D"
                  alt="Logo zwart"
                  width={200}
                  height={150}
                  className='w-32'
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
            <ul className="flex-grow overflow-y-auto">
              {menuItems.map((item) => (
                <li key={item.id} className="py-2 px-4">
                  <Link href={item.link} onClick={() => setMenuOpen(false)} className="block w-full justify text-lg font">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4 border-t border-gray-200">
              <div className="md:hidden">
                {renderSocialIcons(true)}
              </div>
              <Link href="/offerte-aanvragen" className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700">
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

