'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface BoatSection {
  id: number;
  title: string;
  featured_image: string;
  button_text?: string;
  button_link?: string;
}

const banner: BoatSection = {
  id: 1,
  title: "Boot wraps, geheel op maat",
  featured_image: "/enes-website/memo-map/design/3dchanger/Changer_17.png",
  button_text: "Bekijk 3D boot ontwerpen",
  button_link: "/diensten/print-folie"
};

function BoatSection() {
  return (
    <section className="relative text-white h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden">
      <Image
        src={banner.featured_image}
        alt={banner.title}
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-center pb-8 px-4">
        <h3 className="text-4xl font-light uppercase py-7 text-white text-center">{banner.title}</h3>
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

export default BoatSection;

