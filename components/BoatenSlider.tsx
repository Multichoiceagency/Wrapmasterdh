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
  { id: 6, afbeelding: "/enes-website/auto-wrappen/g-wagon/Brabus.jpg"},
];

const BoatenSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      slidesToScroll: 1,
    }, 
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );
  const [isLoaded, setIsLoaded] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  return (
    <>
      <Head>
        <title>Bootontwerpen - BoatMaster | Specialist in Bootdesign en Customization</title>
        <meta name="description" content="Ontdek onze uitgebreide reeks van professionele bootontwerpen, waaronder luxe jachten, speedboten, zeilboten en meer. BoatMaster is uw specialist voor alle boot customization behoeften." />
        <meta name="keywords" content="bootontwerp, jachtdesign, speedboot styling, zeilboot innovatie, catamaran concept, vissersboot upgrade, woonboot renovatie" />
        <link rel="canonical" href="https://www.wrapmasterdh.nl" />
      </Head>
      <section className="py-12 h-100 overflow-hidden bg-white">
        <div className="text-center mb-12 ml-12">
          <h1 className="text-3xl font-light text-gray-800">CARWRAPPING</h1>
        </div>

        <div className="carousel-container overflow-hidden relative">
          <div className="embla" ref={emblaRef}>
            <div className={`embla__container transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {boatDesigns.map((design) => (
                <div
                  key={design.id}
                  className="embla__slide w-full sm:w-1/2 lg:w-1/3 px-2"
                >
                    <Card className="w-full h-[600px] flex flex-col relative overflow-hidden">
                      <div className="relative h-[500px] w-full">
                        <Image
                          src={design.afbeelding}
                          alt=''
                          fill
                          priority
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onLoad={handleImageLoad}
                        />
                      </div>
                      <CardContent className="flex flex-col justify-end flex-grow">
                      </CardContent>
                    </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BoatMaster",
        "description": "Specialist in bootdesign en customization",
        "url": "https://www.boatmaster.nl",
        "telephone": "+31XXXXXXXXX",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Havenstraat 123",
          "addressLocality": "Amsterdam",
          "postalCode": "1234 AB",
          "addressCountry": "NL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 52.3676,
          "longitude": 4.9041
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "17:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/boatmaster",
          "https://www.instagram.com/boatmaster"
        ]
      })} } />
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
      `}</style>
    </>
  );
};

export default BoatenSlider;

