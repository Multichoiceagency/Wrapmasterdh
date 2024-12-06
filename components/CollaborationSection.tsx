'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Brand {
  name: string;
  logo: string;
}

interface CollaborationSectionProps {
  heroImage: string;
  brands: Brand[];
  partners: Brand[];
}

const getMediaUrl = (url: string) => {
  if (url.includes('cloudinary.com')) {
    return url;
  }
  const fileId = url.match(/[-\w]{25,}/);
  return fileId ? `https://drive.google.com/uc?export=view&id=${fileId[0]}` : url;
};

export default function CollaborationSection({ 
  heroImage, 
  brands, 
  partners 
}: CollaborationSectionProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full mb-16">
        <Image
          src={getMediaUrl(heroImage)}
          alt="Samenwerking Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Samenwerking</h1>
        </div>
      </div>

      {/* Brands Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Alle Folie Merken</h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{
              prevEl: '.brand-prev',
              nextEl: '.brand-next',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="py-4"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[3/2] relative">
                  <Image
                    src={getMediaUrl(brand.logo)}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="brand-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="brand-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Partners Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Partners</h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{
              prevEl: '.partner-prev',
              nextEl: '.partner-next',
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="py-4"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[3/2] relative">
                  <Image
                    src={getMediaUrl(partner.logo)}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="partner-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="partner-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

