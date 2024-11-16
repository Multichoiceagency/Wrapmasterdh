'use client';

import React from 'react';
import Image from 'next/image';
import Flickity from 'react-flickity-component';
import { Card, CardContent } from "@/components/ui/card";

import 'flickity/css/flickity.css';

interface Supercar {
  image: string;
  name: string;
  base: string;
}

const supercars: Supercar[] = [
  {
    image: "/images/brabus1.png",
    name: "BRABUS 900 DEEP BLUE",
    base: "based on Mercedes-AMG G 63",
  },
  {
    image: "/images/brabus2.png",
    name: "BRABUS FOR TAYCAN",
    base: "based on Porsche Taycan Turbo S",
  },
  {
    image: "/images/brabus2.png",
    name: "BRABUS 930",
    base: "based on Mercedes-AMG S 63 E Performance",
  },
  {
    image: "/images/brabus2.png",
    name: "BRABUS 900 ROCKET R",
    base: "based on Porsche 911 Turbo S",
  },
  // Add more supercars as needed
];

const Portfolio: React.FC = () => {
  const flickityOptions = {
    cellAlign: 'left', // Align cells to the left to prevent gaps
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: true,
    freeScroll: false,
    percentPosition: false,
    imagesLoaded: true, // Ensure images are loaded before calculations
    autoPlay: 2000, // Set to 3000ms for auto-play
    pauseAutoPlayOnHover: true,
    draggable: false,
  };

  return (
    <section className="py-12 h-100 overflow-hidden">
      <div className="text-left mb-12 ml-12">
        <h2 className="text-3xl font-bold text-gray-800">PORTFOLIO</h2>
      </div>

      <div className="carousel-container overflow-hidden">
        <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate={false}
          static
        >
          {supercars.map((car, index) => (
            <div
              key={index}
              className="carousel-cell mr-2 w-full sm:w-1/2 lg:w-1/3"
            >
              <Card className="w-full h-[400px] flex flex-col relative overflow-hidden">
                <div className="relative h-96 w-full">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="flex flex-col justify-end flex-grow">
                  <div>
                    <h3 className="text-l mt-5 font-semibold ">{car.name}</h3>
                    <p className="text-sm text-gray-500">{car.base}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Flickity>
      </div>
    </section>
  );
};

export default Portfolio;
