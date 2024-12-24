'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

interface Banner {
  id: number;
  title: string;
  featured_image: string;
  button_text?: string;
  button_link?: string;
}

const banner: Banner = {
  id: 1,
  title: "Professionele Print Folie",
  featured_image: "/enes-website/memo-map/design/Changer_12.png",
  button_text: "Ontdek Meer",
  button_link: "/diensten/print-folie"
};

function PrintFolie() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.scrollY;
        sectionRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-white h-screen md:h-screen overflow-hidden"
    >
      <Image
        src={banner.featured_image}
        alt={banner.title}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', transform: 'scale(1.5)', width: '100%', height: '100%', zIndex: -1 }}
      />
      <div className="absolute inset-0 flex items-end justify-center pb-8">
        <div className="text-center px-4">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">{banner.title}</h3>
          {banner.button_text && banner.button_link && (
            <Link href={banner.button_link}>
              <button className="px-6 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105">
                {banner.button_text}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default PrintFolie;
