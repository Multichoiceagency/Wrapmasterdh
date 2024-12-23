'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faFileAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import Image from 'next/image';

interface MenuItem {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    menu_link: string;
    menu_order: number;
  };
}

interface SocialMediaItem {
  id: number;
  acf: {
    instagram?: string;
    tiktok?: string;
    whatsapp?: string;
  };
}

interface HeaderData {
  menuItems: MenuItem[];
  socialMedia: SocialMediaItem;
}

const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);

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

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const menuItemsRes = await fetch('https://www.website.wrapmasterdh.nl/wp-json/wp/v2/menu_items');
        const menuItems = await menuItemsRes.json();

        const socialMediaRes = await fetch('https://www.website.wrapmasterdh.nl/wp-json/wp/v2/social-media');
        const socialMedia = await socialMediaRes.json();

        setHeaderData({
          menuItems,
          socialMedia: socialMedia[0] // Assuming there's only one social media item
        });
      } catch (error) {
        console.error('Error fetching header data:', error);
      }
    };

    fetchHeaderData();
  }, []);

  if (!headerData) {
    return null; // Or a loading spinner
  }

  const renderSocialIcons = (isScrolled: boolean) => {
    const iconMap: { [key: string]: IconProp } = {
      instagram: faInstagram,
      tiktok: faTiktok,
      whatsapp: faWhatsapp,
    };

    return (
      <div className="flex justify-center space-x-4">
        {Object.entries(headerData.socialMedia.acf).map(([key, value]) => {
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
    <header
      className={`fixed top-0 w-full transition-all duration-300 z-50 flex justify-between items-center px-4 xs:px-10 sm:px-6 md:px-8 lg:px-10 xl:px-16 sm:pr-16 ${
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
        <FontAwesomeIcon icon={menuOpen ? (faTimes as IconProp) : (faBars as IconProp)} />
      </button>

      <div className="flex-grow flex justify-center items-center relative sm:mr-8">
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
        <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 flex items-center pr-4">
      <Link href="tel:0702250721" className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faPhone as IconProp} className="text-red-600 text-2xl" />
        <span className="absolute top-0 right-0 -mt-1 -mr-1 h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
      </Link>
    </div>
    </div>
      <div className="hidden md:block">
        {renderSocialIcons(isScrolled)}
      </div>

      <nav
        className={`fixed inset-0 bg-white z-[100] transition-all duration-300 ease-in-out transform 
          ${menuOpen ? 'opacity-100 visible' : '-translate-y-full opacity-0 invisible'} 
          md:w-[300px] md:left-0 md:h-screen ${menuOpen ? 'md:translate-x-0' : 'md:-translate-x-full'}`}
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
            {headerData.menuItems
              .sort((a, b) => a.acf.menu_order - b.acf.menu_order)
              .map((item) => (
                <li 
                  key={item.id} 
                  className="py-2 px-4"
                >
                  <Link href={item.acf.menu_link || '/'} onClick={() => setMenuOpen(false)} className="block w-full justify text-lg font-bold">
                    {decodeHtmlEntities(item.title.rendered)}
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
  );
};

export default Header;