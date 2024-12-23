'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Flickity from 'react-flickity-component';
import { Card, CardContent } from "@/components/ui/card";
import { get3DCarWrappingItems } from '@/lib/api';

import 'flickity/css/flickity.css';

interface ThreeDCarWrappingItem {
  id: number;
  image: string;
  name: string;
  base: string;
}

const ThreeDCarWrapping: React.FC = () => {
  const [items, setItems] = useState<ThreeDCarWrappingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch3DCarWrappingItems = async () => {
      try {
        const data = await get3DCarWrappingItems();
        setItems(data);
      } catch (error) {
        console.error('Error fetching 3D car wrapping items:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetch3DCarWrappingItems();
  }, []);

  const flickityOptions = {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: true,
    freeScroll: false,
    percentPosition: false,
    imagesLoaded: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: true,
    draggable: true,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-12 h-100 overflow-hidden">
      <div className="text-left mb-12 ml-12">
        <h2 className="text-3xl font-bold text-gray-800">3D CAR WRAPPING</h2>
      </div>

      <div className="carousel-container overflow-hidden">
        <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="carousel-cell mr-2 w-full sm:w-1/2 lg:w-1/3"
            >
              <Card className="w-full h-[400px] flex flex-col relative overflow-hidden">
                <div className="relative h-96 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="flex flex-col justify-end flex-grow">
                  <div>
                    <h3 className="text-l mt-5 font-semibold ">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.base}</p>
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

export default ThreeDCarWrapping;

