'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '@/app/components/hero/custom.swiper.css'; // Custom CSS for pagination styling

const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh]"> {/* Adjusted height to 90vh */}
      <Swiper
        modules={[Autoplay, Pagination]} // Register modules here
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom', // Custom pagination element
        }}
        autoplay={{
          delay: 30000, // Default 30 seconds for slides
          disableOnInteraction: true,
        }}
      >
        {/* Slide 1 - Video */}
        <SwiperSlide>
          <div className="relative w-full h-[90vh] bg-black"> {/* Full height */}
            <video
              className="w-full h-[90vh] object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/video/audi-rsq8-full-colour-wrap.mp4" // Ensure this video path is correct
            ></video>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest">
                WE CALL IT - VOLLKOMMEN.
              </h1>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 bg-black text-white font-semibold border border-white hover:bg-white hover:text-black transition-all">
                BRABUS 930
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Image */}

        <SwiperSlide>
          <div className="relative w-full h-[90vh] bg-black"> {/* Full height */}
            <video
              className="w-full h-[90vh] object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/video/kia-ev6-carwrapping.mp4" // Ensure this video path is correct
            ></video>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest">
                WE CALL IT - VOLLKOMMEN.
              </h1>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 bg-black text-white font-semibold border border-white hover:bg-white hover:text-black transition-all">
                BRABUS 930
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Image */}
        <SwiperSlide>
          <div
            className="relative w-full h-[90vh] bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/lamborghini-urus-groen.jpg)' }} // Double-check this path
          >
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest">
                EXPERIENCE LUXURY
              </h1>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 bg-black text-white font-semibold border border-white hover:bg-white hover:text-black transition-all">
                EXPLORE NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Pagination */}
      <div className="swiper-pagination swiper-pagination-custom"></div>
    </div>
  );
};

export default HeroSection;
