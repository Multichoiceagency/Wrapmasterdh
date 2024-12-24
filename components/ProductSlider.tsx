'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

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

  return (
    <section className="py-12 overflow-hidden bg-white">
      <div className="text-left mb-12 ml-12">
        <h2 className="text-2xl font-medium text-gray-800">ACCESSOIRES VOOR JOUW VOERTUIG</h2>
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
                        <h3 className="text-l mt-5 font-semibold">{product.title}</h3>
                        <p className="text-sm text-gray-500">{product.subtitle}</p>
                      </div>
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

