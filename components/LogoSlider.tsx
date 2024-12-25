/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

interface Logo {
  id: number;
  title: string;
  logo_image: string;
}

const getGoogleDriveImageUrl = (url: string) => {
  if (url.includes('drive.google.com')) {
    const fileId = url.match(/[-\w]{25,}/);
    return fileId ? `https://drive.google.com/uc?export=view&id=${fileId[0]}` : url;
  }
  return url;
};

export default function LogoSlider() {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch('https://www.website.wrapmasterdh.nl/wp-json/wp/v2/logo?per_page=100');
        if (!response.ok) {
          throw new Error('Failed to fetch logos');
        }
        const data = await response.json();
        const formattedLogos: Logo[] = data.map((item: any) => ({
          id: item.id,
          title: item.title.rendered,
          logo_image: getGoogleDriveImageUrl(item.acf?.logo_image || ''),
        }));
        setLogos(formattedLogos);
      } catch (error) {
        console.error('Error fetching logos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogos();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="py-10 px-4 md:px-0">
      <h2 className="text-center text-3xl font-light text-gray-800 font mb-6">Onze Partners</h2>
      
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id} className="flex justify-center items-center pt-6">
              <div className="relative w-48 h-24 md:w-40 md:h-20">
                <Image
                  src={logo.logo_image}
                  alt={logo.title}
                  layout="fill"
                  objectFit="contain"
                  className="max-w-full h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

