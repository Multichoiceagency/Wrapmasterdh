'use client'

<<<<<<< HEAD
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '@/app/components/hero/custom.swiper.css'; // Custom CSS for pagination styling

const HeroSection = () => {
=======
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import { useEffect, useRef, useCallback } from "react"
import "./custom.swiper.css"

interface HeroSlide {
  id: number
  videoFile: string
  heroTitle: string
  buttonText: string
  buttonLink: string
}

const slides: HeroSlide[] = [
  {
    id: 1,
    videoFile: "/video/black-ferrari.mp4",
    heroTitle: "SPECIALIST IN CAR CUSTOMIZING",
    buttonText: "BEKIJK ONZE DIENSTEN",
    buttonLink: "/diensten",
  },
]

const HeroSection: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, slides.length)
  }, [])

  const handleSlideChange = (swiper: SwiperType) => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === swiper.activeIndex) {
          video.play().catch(() => {})
        } else {
          video.pause()
          video.currentTime = 0
        }
      }
    })
  }

  const setVideoRef = useCallback(
    (index: number) => (el: HTMLVideoElement | null) => {
      videoRefs.current[index] = el
    },
    []
  )

>>>>>>> main
  return (
    <div className="relative w-full h-[85vh] md:h-[93vh]"> 
      <Swiper
<<<<<<< HEAD
        modules={[Autoplay, Pagination]} // Register modules here
=======
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
>>>>>>> main
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
<<<<<<< HEAD
          el: '.swiper-pagination-custom', // Custom pagination element
        }}
        autoplay={{
          delay: 30000, // Default 30 seconds for slides
=======
          el: ".swiper-pagination",
        }}
        autoplay={{
          delay: 10000,
>>>>>>> main
          disableOnInteraction: true,
        }}
        effect="fade"
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        className="h-full hero-swiper"
        allowTouchMove={true}
      >
<<<<<<< HEAD
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
=======
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <video
                ref={setVideoRef(index)}
                className="w-full h-full object-cover"
                playsInline
                loop
                muted
                preload="auto"
              >
                <source src={slide.videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0"></div>
            </div>
            <div className="absolute inset-x-0 bottom-20 md:bottom-28 flex flex-col items-center text-center text-white z-10 px-4">
              <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-2xl mb-4 animate-fade-in">
                {slide.heroTitle}
              </h1>
              <a
                href={slide.buttonLink}
                className="mt-2 px-4 md:px-6 py-2 md:py-3 bg-black text-white text-sm sm:text-base md:text-sm hover:bg-red-700 hover:text-white transition duration-300 animate-fade-in"
              >
                {slide.buttonText}
              </a>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
>>>>>>> main
      </Swiper>

      {/* Custom Pagination */}
      <div className="swiper-pagination swiper-pagination-custom"></div>
    </div>
  )
}

export default HeroSection