'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from "@/components/ui/card";

const dienstData = {
  title: "Professionele Bodykit Installatie",
  description: "Transformeer uw voertuig met onze expertise in bodykit installatie. Onze vakkundige technici zorgen voor een naadloze integratie van hoogwaardige bodykits, waardoor uw auto een unieke en opvallende uitstraling krijgt.",
  heroImage: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_2.png",
  contentImage: "/enes-website/memo-map/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-BMW-M3-G80-Sedan-20264_2.jpg",
  gridImages: [
    "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-V-2-Mercedes-AMG-C63-Sedan-Estate-W205-Facelift-18962_1.jpg",
    "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-V-2-Mercedes-AMG-C63-Sedan-Estate-W205-Facelift-18962_2.png"
  ]
};

interface Product {
  id: number;
  title: string;
  subtitle: string;
  featured_image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Velgen",
    subtitle: "Stijlvolle velgen voor uw auto",
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_2.png"
  },
  {
    id: 2,
    title: "Remklauwen",
    subtitle: "Hoogwaardige remklauwen voor betere prestaties",
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_6.jpg"
  },
  {
    id: 3,
    title: "Uitlaten",
    subtitle: "Sportuitlaten voor een krachtig geluid",
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_8.jpg"
  },
  {
    id: 4,
    title: "Bodykits",
    subtitle: "Custom bodykits voor een unieke look",
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-V-2-Mercedes-AMG-C63-Sedan-Estate-W205-Facelift-18962_1.jpg"
  },
  {
    id: 5,
    title: "Interieur Accessoires",
    subtitle: "Luxe accessoires voor uw interieur",
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-V-2-Mercedes-AMG-C63-Sedan-Estate-W205-Facelift-18962_2.png"
  },
  {
    id: 6,
    title: "Verlichting",
    subtitle: "LED-verlichting voor extra stijl en veiligheid",
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-V-3-Lamborghini-Urus-Mk1-16126_1.jpg"
  },
  {
    id: 7,
    title: "Carwrapping",
    subtitle: "Transformeer uw auto met premium wraps",
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-BMW-M3-G80-Sedan-20264_2.jpg"
  },
  {
    id: 8,
    title: "PPF (Paint Protection Film)",
    subtitle: "Bescherm uw lak tegen steenslag en krassen",
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-BMW-M3-G80-Sedan-20264_5.jpg"
  },
  {
    id: 9,
    title: "Chrome Delete",
    subtitle: "Vervang chroom accenten voor een moderne look",
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-BMW-M3-G80-Sedan-20264_19.jpg"
  },
  {
    id: 10,
    title: "Ramentinten",
    subtitle: "Privacy en UV-bescherming voor uw auto",
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Set-of-Splitters-Lamborghini-Urus-Mk1-21178_7.jpg"
  },
  {
    id: 11,
    title: "Alloygator",
    subtitle: "Velgbescherming op maat",
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Street-Pro-Rear-Side-Splitters-Mercedes-AMG-C63-Sedan-Estate-W205-Facelift-18949_3.jpg"
  },
];

export default function Carwrapping() {
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

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src={dienstData.heroImage}
          alt={dienstData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-20">
          <div className="text-left text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl mb-2">{dienstData.title}</h1>
            <p className="text-lg md:text-xl">{dienstData.description}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex flex-col lg:flex-row py-8 lg:py-16">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 mb-8 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font mb-4 lg:mb-8">
            {dienstData.title}
          </h1>
          <div className="mb-6 lg:mb-8 leading-relaxed max-w-xl font-regular text-sm sm:text-base">
            <p>{dienstData.description}</p>
            <p className="mt-3 lg:mt-4">
              Van subtiele verbeteringen tot dramatische stijlveranderingen, wij bieden een breed 
              scala aan opties om aan uw wensen te voldoen. Elk onderdeel wordt zorgvuldig 
              geselecteerd en geïnstalleerd voor optimale pasvorm en duurzaamheid.
            </p>
            <p className="mt-3 lg:mt-4">
              Onze bodykit installatie omvat niet alleen esthetische verbeteringen, maar kan ook 
              de aerodynamica en prestaties van uw voertuig verbeteren. Laat ons uw auto 
              transformeren tot een echte blikvanger op de weg.
            </p>
          </div>
          <Link 
            href="/contact"
            className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
          >
            NEEM CONTACT OP
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src={dienstData.contentImage}
              alt={dienstData.title}
              fill
              className="object-cover object-center transform lg:transform-none scale-x-[-1] lg:scale-x-100"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Product Slider Section */}
      <section className="py-12 overflow-hidden bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-800">ACCESSOIRES VOOR JOUW VOERTUIG</h2>
          <p className="text-xl text-gray-600 mt-2">Wij installeren ook onderdelen aan uw voertuig</p>
        </div>

        <div className="carousel-container overflow-visible">
          <div className="embla" ref={emblaRef}>
            <div className={`embla__container transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="embla__slide w-full sm:w-1/2 lg:w-1/3 px-2"
                >
                  <Link href={`/products/${product.id}`}>
                    <Card className="w-full h-[600px] flex flex-col relative overflow-hidden">
                      <div className="relative h-[500px] w-full">
                        <Image
                          src={product.featured_image}
                          alt={product.title}
                          fill
                          priority={index < 3}
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onLoad={handleImageLoad}
                        />
                      </div>
                      <CardContent className="flex flex-col justify-end flex-grow">
                        <div>
                          <h3 className="text-xl">{product.title}</h3>
                          <p className="text-sm text-gray-400">{product.subtitle}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Images Section */}
      <section className="w-full h-screen flex">
        {dienstData.gridImages.map((imageUrl, index) => (
          <div key={index} className="relative w-1/2 h-full">
            <Image
              src={imageUrl}
              alt={`Full-width image ${index + 1}`}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        ))}
      </section>

      <style jsx global>{`
        .embla {
          overflow: visible;
          margin: 0 -20px;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
          padding: 0 20px;
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
    </main>
  );
}

