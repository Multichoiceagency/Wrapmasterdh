'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const LargeOverflowSlider = () => {
  const carImages = [
    {
      src: 'http://localhost:3010/uploads/images/brabus1.png', // Add your image paths
      alt: 'Car Image 1',
    },
    {
      src: 'http://localhost:3010/uploads/images/brabus2.png', // Add your image paths
      alt: 'Car Image 2',
    },
    {
      src: '/images/brabus3.png', // Add your image paths
      alt: 'Car Image 3',
    },
  ];

  return (
    <section className="relative w-screen h-[100vh] overflow-x-hidden bg-gray-900">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {carImages.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[100vh]">
              <Image
                src={car.src}
                alt={car.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="overflow-visible"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <div className="swiper-pagination swiper-pagination-custom"></div>
      </div>
    </section>
  );
};

export default LargeOverflowSlider;
