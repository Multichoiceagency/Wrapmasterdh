"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // ✅ Stijlen voor arrows
import "swiper/css/pagination"; // ✅ Stijlen voor bullets

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <section className="py-16 px-4 relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]} // ✅ Modules toegevoegd
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true} // ✅ Pijlen inschakelen
        pagination={{ clickable: true }} // ✅ Bullet points inschakelen
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[500px] w-full">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageCarousel;
