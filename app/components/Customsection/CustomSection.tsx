'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

interface CustomSlide {
  id: number;
  titel: string;
  subtitel: string;
  foto: string;
  slug: string;
  link: string;
  isVideo: boolean;
  video_titel?: string;
  video_beschrijving?: string;
}

const customSlides: CustomSlide[] = [
  {
    id: 1,
    titel: "JEEP GLADIATOR 6X6",
    subtitel: "HUUR DIRECT OP www.6x6rental.nl",
    foto: "/enes-website/Wallpaper/Maasvlakte-8.jpg",
    slug: "instagram",
    link: "https://www.6x6rental.nl/",
    isVideo: false,
  },
  {
    id: 2,
    titel: "MERCEDES X 6X6",
    subtitel: "HUUR DIRECT OP www.6x6rental.nl",
    foto: "/enes-website/MERCEDES 6X6-1 (29).jpg",
    slug: "tiktok",
    link: "https://www.6x6rental.nl/",
    isVideo: false,
  },
  {
    id: 3,
    titel: "BRABUS G800 NARDO GREY",
    subtitel: "",
    foto: "/video/brabus-g800-video.mp4",
    slug: "youtube",
    link: "https://www.youtube.com/shorts/eajMeJ5aJ64",
    isVideo: true,
    video_titel: "BRABUS G800 NARDO GREY",
    video_beschrijving: "",
  }
];

const CustomSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);

  return (
    <section className="max-w-full mx-auto">
      <div className="relative w-full">
        {/* Dynamic Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          {customSlides.slice(0, 2).map((slide) => (
            <div key={slide.id} className="relative w-full h-[50vh] md:h-screen">
              <Link href={slide.link}>
                <div className="relative h-full">
                  <Image
                    src={slide.foto}
                    alt={slide.titel}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 flex flex-col justify-end md:justify-bottom items-center text-left text-white p-6 md:p-12 bg-black bg-opacity-30">
                    <h3 className="text-xl md:text-xl font-medium tracking-widest uppercase">{slide.titel}</h3>
                    <p className="text-lg md:text-l font-light tracking-wider mt-2">{slide.subtitel}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Vertical line between columns */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-[2px] md:w-[4px] bg-black transform -translate-x-1/2"></div>
      </div>

      {/* Video Section */}
      {customSlides.map((slide) => {
        if (slide.isVideo) {
          return (
            <div key={slide.id} className="relative w-full h-[50vh] md:h-[80vh]">
              <div className="w-full h-full relative">
                <video
                  ref={videoRef}
                  src={slide.foto}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                />
                {/* Overlay text on video */}
                <div className="absolute inset-0 flex flex-col justify-start items-start text-left bg-black bg-opacity-30 p-6 md:p-12">
                  <h3 className="text-3xl md:text-xl font uppercase text-white">{slide.video_titel}</h3>
                  <p className="text-base md:text-l font-light mt-2 md:mt-4 text-white max-w-md">{slide.video_beschrijving}</p>
                  <Link href={slide.link}>
                    <button className="mt-4 md:mt-6 px-4 py-2 md:py-3 bg-black text-white text-sm md:text-base font-semibold hover:bg-gray-800 transition">
                      BEKIJK DEZE SUPERCAR
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </section>
  );
};

export default CustomSection;

