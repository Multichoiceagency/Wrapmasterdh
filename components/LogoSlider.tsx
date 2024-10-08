'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function LogoSlider() {
  const logos = [
    { src: '/images/wittebrug.jpg', alt: '3M Logo', width: 200, height: 100 },
    { src: '/images/motorhuis-opel.jpeg', alt: 'Motorhuis opel Dennison Logo', width: 200, height: 100 },
    { src: '/images/logo-1.png', alt: 'Xpel Logo', width: 200, height: 100 },
    { src: '/images/dhl-logo.jpg', alt: 'DHL Logo', width: 200, height: 100 },
    { src: '/images/seventy_six-blackbananas.png', alt: 'Wrapmaster Logo', width: 200, height: 100 },
    // Voeg hier meer logo's toe
  ];

  return (
    <div className="justify-center py-10">
      <h2 className="text-center text-3xl font-bold mb-6">Onze Partners</h2>
      
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        className="mySwiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="container justify-center items-center py-10">
            <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="object-fit" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
