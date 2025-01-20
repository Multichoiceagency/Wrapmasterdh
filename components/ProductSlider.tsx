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
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_2.png"
  },
  {
    id: 2,
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_6.jpg"
  },
  {
    id: 3,
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_8.jpg"
  },
  {
    id: 4,
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-V-2-Mercedes-AMG-C63-Sedan-Estate-W205-Facelift-18962_1.jpg"
  },
  {
    id: 5,
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-V-2-Mercedes-AMG-C63-Sedan-Estate-W205-Facelift-18962_2.png"
  },
  {
    id: 6,
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-V-3-Lamborghini-Urus-Mk1-16126_1.jpg"
  },
  {
    id: 7,
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-BMW-M3-G80-Sedan-20264_2.jpg"
  },
  {
    id: 8,
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-BMW-M3-G80-Sedan-20264_5.jpg"
  },
  {
    id: 9,
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-BMW-M3-G80-Sedan-20264_19.jpg"
  },
  {
    id: 10,
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Set-of-Splitters-Lamborghini-Urus-Mk1-21178_7.jpg"
  },
  {
    id: 11,
    featured_image: "/enes-website/memo-map/bodykit/eng_pl_Street-Pro-Rear-Side-Splitters-Mercedes-AMG-C63-Sedan-Estate-W205-Facelift-18949_3.jpg"
  },
];

const ProductSlider: React.FC = () => {
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
    <section className="pt-16 overflow-hidden bg-white">
      <div className="text-center mb-6 ml-12">
        <h2 className="text-3xl font-light text-gray-800">ACCESSOIRES VOOR JOUW VOERTUIG</h2>
        <p className="text-l text-gray-600 mt-2">Wij installeren ook onderdelen aan uw voertuig</p>
      </div>

      <div className="carousel-container overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className={`embla__container transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className="embla__slide w-full sm:w-1/2 lg:w-1/3 px-2"
              >
                <Link href={`/products/${product.id}`}>
                  <Card className="w-full h-[600px] flex flex-col relative overflow-hidden">
                    <div className="relative h-[500px] w-full bg-gray-200">
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
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
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
        .carousel-container {
          min-height: 650px;
        }
      `}</style>
    </section>
  );
};

export default ProductSlider;

