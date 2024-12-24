'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import Head from 'next/head';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface BoatDesign {
  id: number;
  titel: string;
  subtitel: string;
  afbeelding: string;
  slug: string;
}

const boatDesigns: BoatDesign[] = [
  { id: 1, titel: "Luxe Jacht Ontwerp", subtitel: "Elegantie op het water", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_3.png", slug: "luxe-jacht" },
  { id: 2, titel: "Speedboot Styling", subtitel: "Snelheid en stijl gecombineerd", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_4.png", slug: "speedboot" },
  { id: 3, titel: "Zeilboot Innovatie", subtitel: "Moderne zeilprestaties", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_5.png", slug: "zeilboot" },
  { id: 4, titel: "Catamaran Concept", subtitel: "Ruimte en stabiliteit", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_7.png", slug: "catamaran" },
  { id: 5, titel: "Vissersboot Upgrade", subtitel: "Functionaliteit meets comfort", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_8.png", slug: "vissersboot" },
  { id: 6, titel: "Woonboot Renovatie", subtitel: "Drijvend woongenot", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_9.png", slug: "woonboot" },
];

const BoatenSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      slidesToScroll: 1,
    }, 
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

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
        <link rel="canonical" href="https://www.boatmaster.nl/ontwerpen" />
      </Head>
      <section className="py-12 h-100 overflow-hidden bg-white">
        <div className="text-left mb-12 ml-12">
          <h1 className="text-2xl font-medium text-gray-800">ONZE BOOTONTWERPEN</h1>
          <p className="text-l text-gray-600 mt-2">Gespecialiseerd in bootdesign en customization</p>
        </div>

        <div className="carousel-container overflow-hidden relative">
          <div className="embla" ref={emblaRef}>
            <div className={`embla__container transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {boatDesigns.map((design) => (
                <div
                  key={design.id}
                  className="embla__slide w-full sm:w-1/2 lg:w-1/3 px-2"
                >
                  <Link href={`/ontwerpen/${design.slug}`}>
                    <Card className="w-full h-[600px] flex flex-col relative overflow-hidden">
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
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <button
            className="embla__prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-full z-10"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            &#8592;
          </button>
          <button
            className="embla__next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-full z-10"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            &#8594;
          </button>
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
        .embla__prev,
        .embla__next {
          opacity: 0.7;
          transition: opacity 0.3s;
        }
        .embla__prev:hover,
        .embla__next:hover {
          opacity: 1;
        }
        .embla__prev:disabled,
        .embla__next:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default BoatenSlider;

