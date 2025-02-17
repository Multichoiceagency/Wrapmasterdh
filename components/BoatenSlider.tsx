'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Head from 'next/head';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface BoatDesign {
  id: number;
  afbeelding: string;
}

const boatDesigns: BoatDesign[] = [
  { id: 1, afbeelding: "/enes-website/auto-wrappen/range/rangerover.jpg" },
  { id: 2, afbeelding: "/enes-website/OSMAN/idbuzz/DSC06265.jpg" },
  { id: 3, afbeelding: "/enes-website/auto-wrappen/urus-khaki/urus1.jpg" },
  { id: 4, afbeelding: "/enes-website/auto-wrappen/rsq3/RSQ3-23.jpg" },
  { id: 5, afbeelding: "/enes-website/auto-wrappen/ferrari/1.jpg" },
  { id: 6, afbeelding: "/enes-website/auto-wrappen/g-wagon/Brabus.jpg" },
];

const BoatSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = useCallback(() => {
    setImagesLoaded((prev) => {
      const newCount = prev + 1;
      if (newCount >= 3 && !isLoaded) {
        setIsLoaded(true);
      }
      return newCount;
    });
  }, [isLoaded]);

  useEffect(() => {
    if (emblaApi && isLoaded) {
      emblaApi.reInit();
    }
  }, [emblaApi, isLoaded]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <Head>
        <title>Bootontwerpen - BoatMaster | Specialist in Bootdesign en Customization</title>
        <meta name="description" content="Ontdek onze uitgebreide reeks van professionele bootontwerpen, waaronder luxe jachten, speedboten, zeilboten en meer. BoatMaster is uw specialist voor alle boot customization behoeften." />
        <meta name="keywords" content="bootontwerp, jachtdesign, speedboot styling, zeilboot innovatie, catamaran concept, vissersboot upgrade, woonboot renovatie" />
        <link rel="canonical" href="https://www.wrapmasterdh.nl" />
      </Head>
      <section className="pt-16 bg-white relative">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-light text-gray-800">BOOTONTWERPEN</h2>
          <p className="text-l text-gray-600 mt-2">Ontdek onze unieke bootontwerpen</p>
        </div>

        <div className="carousel-container relative overflow-hidden">
          <div className="embla" ref={emblaRef}>
            <div className={`embla__container transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {boatDesigns.map((design, index) => (
                <div key={design.id} className="embla__slide w-full sm:w-1/2 lg:w-1/3 px-2">
                  <Card className="w-full h-auto md:h-[600px] flex flex-col relative overflow-hidden">
                    {/* Op mobiel vierkante afbeelding, op grotere schermen vaste hoogte */}
                    <div className="relative w-full bg-gray-200 aspect-square md:aspect-auto md:h-[500px]">
                      <Image
                        src={design.afbeelding}
                        fill
                        alt=""
                        priority={index < 3}
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                        onLoad={handleImageLoad}
                      />
                    </div>
                    <CardContent className="flex flex-col justify-end flex-grow">
                      {/* Eventuele extra content */}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigatiepijlen */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full shadow-lg z-20"
            aria-label="Vorige slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full shadow-lg z-20"
            aria-label="Volgende slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      <style jsx global>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
        }
        @media (min-width: 640px) {
          .embla__slide {
            flex: 0 0 50%;
          }
        }
        @media (min-width: 1024px) {
          .embla__slide {
            flex: 0 0 33.33%;
          }
        }
        .carousel-container {
          min-height: 650px;
        }
        @media (max-width: 640px) {
          .carousel-container {
            min-height: auto;
          }
        }
      `}</style>
    </>
  );
};

export default BoatSlider;
