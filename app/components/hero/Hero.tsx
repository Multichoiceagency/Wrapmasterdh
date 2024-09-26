'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '@/app/components/hero/custom.swiper.css'; // Custom CSS for pagination styling

// Initialize modules
SwiperCore.use([Autoplay, Pagination]);

const HeroSection = () => {
  return (
    <div className="relative w-full max-h-[90svh] xs:max-h-[85svh] sm:max-h-[80svh] md:max-h-[75svh] lg:max-h-[70svh]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
        autoplay={{
          delay: 10000, // Default 10 seconds for slides
          disableOnInteraction: false,
        }}
      >
        {/* Slide 1 - Video */}
        <SwiperSlide>
          <div className="relative w-full h-[90svh] xs:h-[85svh] sm:h-[80svh] md:h-[75svh] lg:h-[70svh] bg-black">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/video/wrapmasterdh.mp4" // Replace with your video file
            ></video>
            <div className="absolute bottom-10 xs:bottom-12 md:bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
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
          <div
            className="w-full h-[90svh] xs:h-[85svh] sm:h-[80svh] md:h-[75svh] lg:h-[70svh] bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/range-rover-sport-nardo-grijs.jpg)' }}
          >
            <div className="absolute bottom-10 xs:bottom-12 md:bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest">
                DISCOVER THE FUTURE
              </h1>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 bg-black text-white font-semibold border border-white hover:bg-white hover:text-black transition-all">
                SEE MORE
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Image */}
        <SwiperSlide>
          <div
            className="w-full h-[90svh] xs:h-[85svh] sm:h-[80svh] md:h-[75svh] lg:h-[70svh] bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/lamborghini-urus-groen.jpg)' }}
          >
            <div className="absolute bottom-10 xs:bottom-12 md:bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
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

      {/* Custom pagination bullets */}
      <div className="absolute bottom-5 w-full flex justify-center">
        <div className="swiper-pagination swiper-pagination-custom"></div>
      </div>
    </div>
  );
};

export default HeroSection;
