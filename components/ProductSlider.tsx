'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Product {
  id: number;
  featured_image: string;
}

const products: Product[] = [
  {
    id: 1,
    featured_image: "/enes-website/bodykit/eng_pl_Set-of-Splitters-Mercedes-AMG-GT-C-C190-Facelift-22294_20.jpg"
  },
  {
    id: 2,
    featured_image: "/enes-website/bodykit/eng_pl_Set-of-Splitters-V-3-BMW-1-M-Pack-F70-22415_11.jpg"
  },
  {
    id: 3,
    featured_image: "/enes-website/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-Audi-RS6-C8-22437_9.jpg"
  },
  {
    id: 4,
    featured_image: "/enes-website/bodykit/eng_pl_Set-of-Splitters-V-2-Volkswagen-Golf-GTI-Clubsport-Mk8-Facelift-22345_10.jpg"
  },
  {
    id: 5,
    featured_image: "/enes-website/bodykit/eng_pl_Set-of-Splitters-Abarth-500e-22477_14 (1).jpg"
  },
  {
    id: 6,
    featured_image: "/enes-website/bodykit/eng_pl_Set-of-Splitters-Land-Rover-Range-Rover-Sport-Mk2-22478_1.jpg"
  },
  {
    id: 7,
    featured_image: "/enes-website/bodykit/eng_pl_Set-of-Splitters-Audi-S8-D5-Facelift-22231_8.jpg"
  },
  {
    id: 8,
    featured_image: "/enes-website/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-Audi-RS6-C8-22437_16.jpg"
  },
  {
    id: 9,
    featured_image: "/enes-website/bodykit/eng_pl_Set-of-Splitters-BMW-X4-M-Pack-G02-Facelift-22372_22.jpg"
  },
  {
    id: 10,
    featured_image: "/enes-website/bodykit/eng_pl_Rear-Splitter-with-vertical-bars-Mercedes-AMG-GT-C-C190-Facelift-22292_3.jpg"
  },
  {
    id: 11,
    featured_image: "/enes-website/bodykit/eng_pl_Set-of-Splitters-Audi-RS5-Sportback-F5-22136_7.jpg"
  },
];

const ProductSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay()]);
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
    <section className="pt-16 bg-white relative">
      <div className="text-center mb-6 ml-4">
        <h2 className="text-3xl font-light text-gray-800">ACCESSOIRES VOOR JOUW VOERTUIG</h2>
        <p className="text-l text-gray-600 mt-2">Informeer naar de mogelijkheden voor jouw auto</p>
      </div>

      <div className="carousel-container relative overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className={`embla__container transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className="embla__slide w-full sm:w-1/2 lg:w-1/3 px-2"
              >
                <Link href={`/bodykit`}>
                  {/* Op mobiel geen vaste hoogte, op grotere schermen behoudt het de oorspronkelijke hoogte */}
                  <Card className="w-full h-auto md:h-[600px] flex flex-col relative overflow-hidden">
                    {/* Op mobiel vierkante afbeelding */}
                    <div className="relative w-full bg-gray-200 aspect-square md:aspect-auto md:h-[500px]">
                      <Image
                        src={product.featured_image}
                        fill
                        alt=""
                        priority={index < 3}
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                        onLoad={handleImageLoad}
                      />
                    </div>
                    <CardContent className="flex flex-col justify-end flex-grow">
                      {/* Extra content indien nodig */}
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pijlknoppen */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full shadow-lg z-20"
          aria-label="Vorige slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full shadow-lg z-20"
          aria-label="Volgende slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

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
        /* Vaste min-height alleen op grotere schermen */
        .carousel-container {
          min-height: 650px;
        }
        @media (max-width: 640px) {
          .carousel-container {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductSlider;
