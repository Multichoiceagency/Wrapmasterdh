'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Head from 'next/head';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ThreeDCarwrapping {
  id: number;
  titel: string;
  subtitel: string;
  afbeelding: string;
}

const carWrapDesigns: ThreeDCarwrapping[] = [
  { id: 1, titel: "", subtitel: "", afbeelding: "/enes-website/design/Changer_1.png" },
  { id: 2, titel: "", subtitel: "", afbeelding: "/enes-website/design/Changer_3.png" },
  { id: 3, titel: "", subtitel: "", afbeelding: "/enes-website/design/Changer_4.png" },
  { id: 4, titel: "", subtitel: "", afbeelding: "/enes-website/design/Changer_5.png" },
  { id: 5, titel: "", subtitel: "", afbeelding: "/enes-website/design/Changer_6.png" },
  { id: 6, titel: "", subtitel: "", afbeelding: "/enes-website/design/Changer_7.png" },
  { id: 7, titel: "", subtitel: "", afbeelding: "/enes-website/design/Changer_9.png" },
  { id: 8, titel: "", subtitel: "", afbeelding: "/enes-website/design/Changer_11.png" },
  { id: 9, titel: "", subtitel: "", afbeelding: "/enes-website/design/Changer_12.png" },
];

const ThreeDCarwrapping: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay()]);
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <Head>
        <title>3D Carwrapping - WrapMaster | Specialist in Auto Customization</title>
        <meta
          name="description"
          content="Ontdek onze uitgebreide reeks van professionele 3D carwrapping ontwerpen, waaronder matte, glanzende, en unieke wraps. WrapMaster is uw specialist voor alle auto customization behoeften."
        />
        <meta
          name="keywords"
          content="3D carwrapping, auto wrap, matte wrap, glanzende wrap, camouflage wrap, kleurverloop wrap, carbon fiber wrap, holografische wrap"
        />
        <link rel="canonical" href="https://www.wrapmaster.nl/reclame-en-design" />
      </Head>
      <section className="py-12 h-100 overflow-hidden bg-white relative">
        <div className="text-left mb-12">
          <h1 className="text-3xl text-center font-light text-gray-800">3D CARWRAPPING ONTWERPEN</h1>
        </div>

        <div className="carousel-container relative overflow-hidden">
          <div className="embla" ref={emblaRef}>
            <div className={`embla__container transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {carWrapDesigns.map((design) => (
                <div
                  key={design.id}
                  className="embla__slide w-full sm:w-1/2 lg:w-1/3 px-2"
                >
                  <Card className="w-full h-[400px] h-lg-[300px] flex flex-col relative overflow-hidden">
                    <div className="relative h-[500px] w-full">
                      <Image
                        src={design.afbeelding}
                        alt={design.titel}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onLoad={handleImageLoad}
                      />
                    </div>
                    <CardContent className="flex flex-col justify-end flex-grow">
                      <div>
                        <h2 className="text-l mt-5 font-semibold">{design.titel}</h2>
                        <p className="text-sm text-gray-500">{design.subtitel}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigatie-iconen (zowel op mobiel als desktop) */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "WrapMaster",
            "description": "Specialist in 3D carwrapping en auto customization",
            "url": "https://www.wrapmasterdh.nl",
            "telephone": "+31XXXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Westvlietweg 72L",
              "addressLocality": "Den Haag",
              "postalCode": "1",
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
              "https://www.facebook.com/wrapmaster",
              "https://www.instagram.com/wrapmaster"
            ]
          }),
        }}
      />

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

export default ThreeDCarwrapping;
