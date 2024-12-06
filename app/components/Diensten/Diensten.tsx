/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Flickity from 'flickity';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

import 'flickity/css/flickity.css';

interface Dienst {
  id: number;
  title: string;
  link_url: string;
  subtitle: string;
  order_number: number;
}

const OnzeDiensten: React.FC = () => {
  const [diensten, setDiensten] = useState<Dienst[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const flickityRef = useRef<Flickity | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const isGoogleDriveLink = (url: string) => url.includes('drive.google.com');
  const isCloudinaryLink = (url: string) => url.includes('cloudinary.com');
  const isVideoLink = (url: string) => url.match(/\.(mp4|webm|ogg)$/i);

  const getGoogleDriveDirectLink = (url: string) => {
    const fileId = url.match(/[-\w]{25,}/);
    return fileId ? `https://drive.google.com/uc?export=view&id=${fileId[0]}` : url;
  };

  useEffect(() => {
    const fetchDiensten = async () => {
      try {
        let allDiensten: any[] = [];
        let page = 1;
        let hasMorePages = true;

        while (hasMorePages) {
          const response = await fetch(
            `https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/onze_diensten?_embed&per_page=100&page=${page}`
          );
          const data = await response.json();

          if (data.length > 0) {
            allDiensten = [...allDiensten, ...data];
            page++;
          } else {
            hasMorePages = false;
          }
        }

        const formattedDiensten: Dienst[] = allDiensten
          .map((dienst: any) => ({
            id: dienst.id,
            title: dienst.title.rendered,
            link_url: dienst.acf?.link_url || '',
            subtitle: dienst.acf?.subtitle || '',
            order_number: dienst.acf?.order_number || 0,
          }))
          .sort((a: Dienst, b: Dienst) => a.order_number - b.order_number);

        setDiensten(formattedDiensten);
        setIsLoading(false);
        console.log(`Total posts loaded: ${formattedDiensten.length}`);
      } catch (error) {
        console.error('Failed to fetch diensten:', error);
        setIsLoading(false);
      }
    };

    fetchDiensten();
  }, []);

  useEffect(() => {
    if (!isLoading && diensten.length > 0 && carouselRef.current) {
      if (flickityRef.current) {
        flickityRef.current.destroy();
      }

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
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };

      flickityRef.current = new Flickity(carouselRef.current, flickityOptions);
    }

    return () => {
      if (flickityRef.current) {
        flickityRef.current.destroy();
        flickityRef.current = null;
      }
    };
  }, [isLoading, diensten]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-white">
        <div className="w-16 h-16 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-12 h-100 overflow-hidden bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">BEKIJK ONZE DIENSTEN</h2>
      </div>

      <div className="carousel-container overflow-hidden">
        <div ref={carouselRef} className="carousel">
          {diensten.map((dienst) => (
            <div
              key={dienst.id}
              className="carousel-cell w-full sm:w-1/2 lg:w-1/3 px-2"
            >
              <Link href={dienst.link_url}>
                <Card className="w-full h-[400px] flex flex-col relative overflow-hidden">
                  <div className="relative h-96 w-full">
                    {isVideoLink(dienst.link_url) ? (
                      <video
                        src={isGoogleDriveLink(dienst.link_url) ? getGoogleDriveDirectLink(dienst.link_url) : dienst.link_url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={isGoogleDriveLink(dienst.link_url) ? getGoogleDriveDirectLink(dienst.link_url) : dienst.link_url}
                        alt={dienst.title}
                        fill
                        priority
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>
                  <CardContent className="flex flex-col justify-end flex-grow">
                    <div>
                      <h3 className="text-l mt-5 font-semibold">{dienst.title}</h3>
                      <p className="text-sm text-gray-500">{dienst.subtitle}</p>
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

export default OnzeDiensten;

