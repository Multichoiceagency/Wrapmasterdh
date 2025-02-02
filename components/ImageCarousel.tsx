'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <section className="py-16">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20} // ✅ Tussenruimte tussen slides
        slidesPerView={1} // ✅ Start met 1 slide per keer
        breakpoints={{
          640: { slidesPerView: 2 }, // ✅ 2 slides op tablets
          1024: { slidesPerView: 3 }, // ✅ 3 slides op desktops
        }}
        loop={true} // ✅ Eindeloze loop
        autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ Automatisch sliden
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[500px] w-full">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageCarousel;
