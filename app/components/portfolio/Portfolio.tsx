'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Flickity from 'react-flickity-component';
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

// Import Flickity styles
import 'flickity/css/flickity.css';
import '@/app/components/Portfolio/flickity-custom.css';

interface Supercar {
  image: string;
  name: string;
  base: string;
}

const supercars: Supercar[] = [
  {
    image: "/brabus900-deep-blue.jpg",
    name: "BRABUS 900 DEEP BLUE",
    base: "based on Mercedes-AMG G 63"
  },
  {
    image: "/brabus-for-taycan.jpg",
    name: "BRABUS FOR TAYCAN",
    base: "based on Porsche Taycan Turbo S"
  },
  {
    image: "/brabus930.jpg",
    name: "BRABUS 930",
    base: "based on Mercedes-AMG S 63 E Performance"
  },
  {
    image: "/brabus900-rocket-r.jpg",
    name: "BRABUS 900 ROCKET R",
    base: "based on Porsche 911 Turbo S"
  },
  // Add more supercars as needed
];

const Portfolio: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const flickityOptions = {
    cellAlign: 'center',
    contain: false,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: true,
    freeScroll: true,
    percentPosition: false,
    imagesLoaded: true,
  };

  return (
    <section className="py-12 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">BRAND NEW SUPERCARS</h2>
      </div>

      <div className="carousel-container">
        <Flickity
          className={'carousel'} 
          elementType={'div'} 
          options={flickityOptions} 
          disableImagesLoaded={false}
          reloadOnUpdate 
          static 
        >
          {supercars.map((car, index) => (
            <div
              key={index}
              className="carousel-cell"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="w-full h-[400px] flex flex-col relative overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image 
                    src={car.image} 
                    alt={car.name} 
                    fill
                    style={{objectFit: 'cover'}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <p className="text-sm text-gray-500 mt-2">{car.base}</p>
                  </div>
                </CardContent>

                {hoveredIndex === index && (
                  <div className="hover-overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <FontAwesomeIcon icon={faInfoCircle} className="text-white text-4xl" />
                  </div>
                )}
              </Card>
            </div>
          ))}
        </Flickity>
      </div>
    </section>
  );
};

export default Portfolio;