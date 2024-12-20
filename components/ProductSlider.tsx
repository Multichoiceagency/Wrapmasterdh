'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

interface Product {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    subtitle: string;
  };
  featured_image: string;
}

interface WPProduct {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    subtitle: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

const ProductSlider: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const flickityRef = useRef<Flickity | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://www.website.wrapmasterdh.nl/wp-json/wp/v2/producten_wrapmaster?_embed"
        );
        const data: WPProduct[] = await response.json();

        const formattedProducts: Product[] = data.map((product) => ({
          id: product.id,
          title: product.title,
          acf: product.acf,
          featured_image: product._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
        }));

        setProducts(formattedProducts);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let Flickity: typeof import('flickity');
    if (typeof window !== 'undefined') {
      import('flickity').then((flickityModule) => {
        Flickity = flickityModule.default;
        initializeFlickity();
      });
    }

    function initializeFlickity() {
      if (!isLoading && products.length > 0 && carouselRef.current && !flickityRef.current && Flickity) {
        const flickityOptions: Flickity.Options = {
          cellAlign: 'left',
          contain: true,
          wrapAround: true,
          pageDots: true,
          prevNextButtons: true,
          freeScroll: false,
          percentPosition: false,
          imagesLoaded: true,
          autoPlay: 3000,
          pauseAutoPlayOnHover: true,
          draggable: true,
        };

        flickityRef.current = new Flickity(carouselRef.current, flickityOptions);
      }
    }

    return () => {
      if (flickityRef.current) {
        flickityRef.current.destroy();
        flickityRef.current = null;
      }
    };
  }, [isLoading, products]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-white">
        <div className="w-16 h-16 border-4 border-t-transparent  rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-12 h-100 overflow-hidden bg-white">
      <div className="text-center mb-12 ml-12">
        <h2 className="text-3xl font-bold text-gray-800">ASSESCOIRES VOOR JOUW VOERTUIG</h2>
        <p className="text-xl text-gray-600 mt-2">Wij installeren ook onderdelen aan uw voertuig</p>
      </div>

      <div className="carousel-container overflow-hidden">
        <div ref={carouselRef} className="carousel">
          {products.map((product) => (
            <div
              key={product.id}
              className="carousel-cell mr-2 w-full sm:w-1/2 lg:w-1/3"
            >
              <Link href={`/products/${product.id}`}>
                <Card className="w-full h-[400px] flex flex-col relative overflow-hidden">
                  <div className="relative h-96 w-full">
                    <Image
                      src={product.featured_image}
                      alt={product.title.rendered}
                      fill
                      priority
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                    />
                  </div>
                  <CardContent className="flex flex-col justify-end flex-grow">
                    <div>
                      <h3 className="text-l mt-5 font-semibold">{product.title.rendered}</h3>
                      <p className="text-sm text-gray-500">{product.acf.subtitle}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;