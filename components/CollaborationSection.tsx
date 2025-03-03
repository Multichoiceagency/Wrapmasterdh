"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Brand {
  name: string;
  logo: string;
}

interface CollaborationSectionProps {
  heroImage: string;
  brands: Brand[];
  partners: Brand[];
}

export default function CollaborationSection({ 
  heroImage, 
  brands, 
  partners 
}: CollaborationSectionProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[90vh] min-h-[400px] w-full mb-16">
        <Image
          src={heroImage}
          alt="Samenwerking Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end p-6 justify-center">
          <h1 className="text-4xl md:text-4xl font-light text-white">SAMENWERKING</h1>
        </div>
      </div>

      {/* Brands Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font mb-8 text-center">MERKEN</h2>
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
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="py-4"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[3/2] relative">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="brand-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full">
            <ChevronLeft className="w-6 h-6 text-white hover:text-red-500" />
          </button>
          <button className="brand-next absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full">
            <ChevronRight className="w-6 h-6 text-white hover:text-red-500" />
          </button>
        </div>
      </div>

      {/* Partners Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font mb-8 text-center">PARTNERS</h2>
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
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="py-4"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[3/2] relative">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="partner-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full">
            <ChevronLeft className="w-6 h-6 text-white hover:text-red-500" />
          </button>
          <button className="partner-next absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full">
            <ChevronRight className="w-6 h-6 text-white hover:text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
