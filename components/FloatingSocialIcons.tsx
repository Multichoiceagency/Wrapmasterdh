'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faTiktok, 
  faWhatsapp, 
  faFacebook 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faPhone, 
  faChevronLeft, 
  faChevronRight 
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const socialMedia = {
  instagram: 'https://www.instagram.com/wrapmasterdh/',
  tiktok: 'https://www.tiktok.com/@wrapmasterdh',
  whatsapp: 'https://wa.me/31638718893',
  facebook: 'https://www.facebook.com/WrapmasterDH',
  phone: 'tel:0702250721',
};

const iconMap: { [key: string]: IconProp } = {
  instagram: faInstagram,
  tiktok: faTiktok,
  whatsapp: faWhatsapp,
  facebook: faFacebook,
  phone: faPhone,
};

const FloatingSocialIcons: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(prev => !prev);

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      {visible ? (
        <div className="flex flex-col">
          {Object.entries(socialMedia).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-red-600 hover:text-white"
            >
              <FontAwesomeIcon
                icon={iconMap[key as keyof typeof iconMap]}
                className="text-xl"
              />
            </a>
          ))}
          <button
            onClick={toggleVisibility}
            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-red-600 hover:text-white"
            aria-label="Hide social icons"
          >
            <FontAwesomeIcon icon={faChevronLeft as IconProp} className="text-xl" />
          </button>
        </div>
      ) : (
        <button
          onClick={toggleVisibility}
          className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-red-600 hover:text-white"
          aria-label="Show social icons"
        >
          <FontAwesomeIcon icon={faChevronRight as IconProp} className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default FloatingSocialIcons;
