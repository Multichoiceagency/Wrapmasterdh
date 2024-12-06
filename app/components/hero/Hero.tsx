"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import "./custom.swiper.css"; // Voeg hier je aangepaste CSS toe

// Define the data structure
interface HeroSlide {
  id: number;
  video_file: string; // URL for the video
  featured_image: string; // URL for the featured image
  hero_title: string; // Title of the slide
  button_text: string; // Button text
  button_link: string; // Button link
}

const HeroSection = () => {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroSlides = async () => {
      try {
        const response = await fetch(
          "https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/hero_slider?_embed"
        );
        const data = await response.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedSlides: HeroSlide[] = data.map((slide: any) => {
          const featuredImage = slide._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""; // Get featured image URL
          return {
            id: slide.id,
            video_file: slide.acf?.video_file || "", // Use ACF video field if available
            featured_image: featuredImage, // Use featured image as fallback
            hero_title: slide.acf?.hero_title || "Default Title",
            button_text: slide.acf?.button_text || "Learn More",
            button_link: slide.acf?.button_link || "#",
          };
        });

        setSlides(formattedSlides);
      } catch (error) {
        console.error("Failed to fetch hero slides:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroSlides();
  }, []);

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
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 30000,
          disableOnInteraction: true,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {slide.video_file ? (
              // If video_file exists, display the video
              <video
                className="w-full h-[85vh] md:h-[93vh] object-cover"
                autoPlay
                loop
                muted
                src={slide.video_file}
              ></video>
            ) : (
              // If no video_file, fallback to featured image
              <div
                className="w-full h-[85vh] md:h-[93vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.featured_image})` }}
              ></div>
            )}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white">
              <h1 className="text-4xl font-bold">{slide.hero_title}</h1>
              <button
                onClick={() => (window.location.href = slide.button_link)}
                className="mt-4 px-6 py-3 bg-black text-white font-semibold border border-white hover:bg-white hover:text-black"
              >
                {slide.button_text}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;

