'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

export default function LogoSlider() {
  const logos = [
    { src: '/images/wittebrug.jpg', alt: '3M Logo', width: 200, height: 100 },
    { src: '/images/motorhuis-opel.jpeg', alt: 'Motorhuis opel Dennison Logo', width: 200, height: 100 },
    { src: '/images/logo-1.png', alt: 'Xpel Logo', width: 200, height: 100 },
    { src: '/images/dhl-logo.jpg', alt: 'DHL Logo', width: 200, height: 100 },
    { src: '/images/seventy_six-blackbananas.png', alt: 'Wrapmaster Logo', width: 200, height: 100 },
  ];

  return (
    <div className="py-10 px-4 md:px-0">
      <h2 className="text-center text-3xl font-bold mb-6">Onze Partners</h2>
      
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[ Navigation, Autoplay]}
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
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center pt-6">
              <div className="relative w-48 h-24 md:w-40 md:h-20">
                <Image
                  src={logo.src}
                  alt={logo.alt}
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

