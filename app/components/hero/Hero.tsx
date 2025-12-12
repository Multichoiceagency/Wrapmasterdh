"use client"

import { useEffect, useRef, useCallback } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/effect-fade"
import "swiper/css/navigation"

// Define the slide interface
interface HeroSlide {
  id: number
  videoFile: string
  heroTitle: string
  buttonText: string
  buttonLink: string
}

// Sample slide data
const slides: HeroSlide[] = [
  {
    id: 1,
    videoFile: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/black-ferrari.mp4",
    heroTitle: "SPECIALIST IN CAR CUSTOMIZING",
    buttonText: "BEKIJK ONZE DIENSTEN",
    buttonLink: "/diensten",
  },
]

export default function HeroSection() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const swiperRef = useRef<SwiperType | null>(null)

  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, slides.length)

    // Play the first video when component mounts
    const firstVideo = videoRefs.current[0]
    if (firstVideo) {
      firstVideo.play().catch((err) => console.error("Video play error:", err))
    }

    return () => {
      // Cleanup: pause all videos when component unmounts
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause()
        }
      })
    }
  }, [])

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === swiper.activeIndex) {
          video.play().catch((err) => console.error("Video play error:", err))
        } else {
          video.pause()
          video.currentTime = 0
        }
      }
    })
  }, [])

  const setVideoRef = useCallback(
    (index: number) => (el: HTMLVideoElement | null) => {
      videoRefs.current[index] = el
    },
    [],
  )

  return (
    <div className="relative w-full h-[85vh] md:h-[93vh]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        effect="fade"
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          // Ensure first slide video plays on initial load
          const firstVideo = videoRefs.current[0]
          if (firstVideo) {
            firstVideo.play().catch((err) => console.error("Video play error:", err))
          }
        }}
        className="h-full"
        allowTouchMove={true}
      >
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
              <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-2xl mb-4">{slide.heroTitle}</h1>
              <a
                href={slide.buttonLink}
                className="mt-2 px-4 md:px-6 py-2 md:py-3 bg-black text-white text-sm sm:text-base md:text-sm hover:bg-red-700 hover:text-white transition duration-300"
              >
                {slide.buttonText}
              </a>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  )
}
