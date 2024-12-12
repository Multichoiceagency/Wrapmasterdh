'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  type: 'video' | 'image';
  url: string;
}

interface PortfolioSectionProps {
  heroSlides: HeroSlide[];
  videos: string[];
  images: string[];
}

const getMediaUrl = (url: string) => {
  if (url.includes('cloudinary.com')) {
    return url;
  }
  const fileId = url.match(/[-\w]{25,}/);
  return fileId ? `https://drive.google.com/uc?export=view&id=${fileId[0]}` : url;
};

export default function PortfolioSection({
  heroSlides,
  videos,
  images,
}: PortfolioSectionProps) {
  return (
    <div className="w-full pb-16">
      {/* Hero Slider */}
      <div className="relative h-[60vh] min-h-[400px] w-full mb-16">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: '.hero-prev',
            nextEl: '.hero-next',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index} className="relative h-full">
              {slide.type === 'video' ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={getMediaUrl(slide.url)} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={getMediaUrl(slide.url)}
                  alt={`Portfolio slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Video Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="aspect-[9/16] relative overflow-hidden rounded-lg">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={getMediaUrl(video)} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <h1>Ons Portfolio</h1>
          {images.slice(0, 3).map((image, index) => (
            <div key={index} className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={getMediaUrl(image)}
                alt={`Portfolio image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {images[3] && (
          <div className="aspect-[21/9] relative overflow-hidden rounded-lg">
            <Image
              src={getMediaUrl(images[3])}
              alt="Portfolio image 4"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}