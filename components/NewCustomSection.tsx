'use client';

import Link from 'next/link';
import Image from 'next/image';

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
    titel: "INSTAGRAM",
    subtitel: "VOLG ONS OP INSTAGRAM",
    foto: "/enes-website/memo/IMG_5272.JPG",
    slug: "instagram",
    link: "https://www.instagram.com/wrapmasterdh/",
    isVideo: false,
  },
  {
    id: 2,
    titel: "TIKTOK",
    subtitel: "VOLG ONS OP TIKTOK",
    foto: "/enes-website/wallpaper/Maasvlakte-100.jpg",
    slug: "tiktok",
    link: "https://www.tiktok.com/@wrapmasterdh",
    isVideo: false,
  },
  {
    id: 3,
    titel: "YOUTUBE",
    subtitel: "BEKIJK ONZE VIDEOS",
    foto: "/enes-website/auto-wrappen/rsq3/rsq3-18.jpg",
    slug: "youtube",
    link: "https://www.youtube.com/channel/UCeYPrQZxZXLLtGXVQqLEqZA",
    isVideo: false,
    video_titel: "YOUTUBE KANAAL",
    video_beschrijving: "BEKIJK ONZE GEDETAILLEERDE VIDEOS OP YOUTUBE",
  }
];

const NewCustomSection = () => {
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

      {/* YouTube Section */}
      <div className="relative w-full h-[50vh] md:h-[80vh]">
        <div className="w-full h-full relative">
          <Image
            src={customSlides[2].foto}
            alt={customSlides[2].titel}
            fill
            style={{ objectFit: 'cover' }}
            sizes="100vw"
            priority
          />
          {/* Overlay text on image */}
          <div className="absolute inset-0 flex flex-col justify-start items-start text-left bg-black bg-opacity-30 p-6 md:p-12">
            <h3 className="text-3xl md:text-xl font uppercase text-white">{customSlides[2].video_titel}</h3>
            <p className="text-base md:text-l font-light mt-2 md:mt-4 text-white max-w-md">{customSlides[2].video_beschrijving}</p>
            <Link href={customSlides[2].link}>
              <button className="mt-4 md:mt-6 px-4 py-2 md:py-3 bg-black text-white text-sm md:text-base font-semibold hover:bg-gray-800 transition">
                Bekijk Kanaal
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCustomSection;

