'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

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
  return (
    <section className="relative text-white h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden">
      <Image
        src={banner.featured_image}
        alt={banner.title}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-center pb-8 px-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">{banner.title}</h3>
        {banner.button_text && banner.button_link && (
          <Link href={banner.button_link}>
            <button className="px-6 py-2 bg-red-600 text-white font-semibold text-sm sm:text-base hover:bg-red-700 transition duration-300 ease-in-out">
              {banner.button_text}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}

export default PrintFolie;

