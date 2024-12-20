"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { useEffect, useState, useRef, useCallback } from "react";
import "./custom.swiper.css";

interface HeroSlide {
  id: number;
  video_file: string;
  featured_image: string;
  hero_title: string;
  button_text: string;
  button_link: string;
}

interface WordPressHeroSlide {
  id: number;
  acf: {
    video_file?: string;
    hero_title?: string;
    button_text?: string;
    button_link?: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

const HeroSection = () => {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const fetchHeroSlides = async () => {
      try {
        let allSlides: WordPressHeroSlide[] = [];
        let page = 1;
        let hasMorePages = true;

        while (hasMorePages) {
          const response = await fetch(
            `https://www.website.wrapmasterdh.nl/wp-json/wp/v2/hero_slider?_embed&per_page=100&page=${page}`
          );
          
          if (!response.ok) {
            if (response.status === 400) {
              // No more pages
              hasMorePages = false;
              break;
            }
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data: WordPressHeroSlide[] = await response.json();
          
          if (data.length === 0) {
            hasMorePages = false;
          } else {
            allSlides = [...allSlides, ...data];
            page++;
          }
        }

        const formattedSlides: HeroSlide[] = allSlides.map((slide) => ({
          id: slide.id,
          video_file: slide.acf?.video_file || "",
          featured_image: slide._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          hero_title: slide.acf?.hero_title || "Default Title",
          button_text: slide.acf?.button_text || "Learn More",
          button_link: slide.acf?.button_link || "#",
        }));

        setSlides(formattedSlides);
      } catch (error) {
        console.error("Failed to fetch hero slides:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroSlides();
  }, []);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, slides.length);
  }, [slides]);

  const handleSlideChange = (swiper: SwiperType) => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === swiper.activeIndex) {
          video.play().catch(() => {
            // Autoplay was prevented, show play button or fallback image
          });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  };

  const setVideoRef = useCallback((index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el;
  }, []);

  const handleSlideClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[85vh] md:h-[93vh]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        autoplay={{
          delay: 30000,
          disableOnInteraction: true,
        }}
        effect="fade"
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="h-full hero-swiper"
        allowTouchMove={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} onClick={handleSlideClick}>
            {slide.video_file ? (
              <div className="relative w-full h-full">
                <video
                  ref={setVideoRef(index)}
                  className="w-full h-full object-cover"
                  playsInline
                  loop
                  muted
                  preload="auto"
                  poster={slide.featured_image}
                >
                  <source src={slide.video_file} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
            ) : (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.featured_image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 px-4 animate-fade-in">
                {slide.hero_title}
              </h1>
              <a
                href={slide.button_link}
                className="mt-4 px-6 py-3 bg-black text-white font-semibold border border-white hover:bg-white hover:text-black transition duration-300 animate-fade-in"
              >
                {slide.button_text}
              </a>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default HeroSection;

