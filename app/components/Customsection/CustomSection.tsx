/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CustomSlide {
  id: number;
  titel: string;
  subtitel: string;
  foto: string;
  slug: string;
  link: string;
  youtube_video_url: string;
  video_titel?: string;
  video_beschrijving?: string;
}

const CustomSection = () => {
  const [customSlides, setCustomSlides] = useState<CustomSlide[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCustomSlides = async () => {
      try {
        const response = await fetch(
          'https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/afbeelding?_embed'
        );
        const data = await response.json();

        const formattedSlides: CustomSlide[] = data.map((slide: any) => {
          const convertToDirectLink = (url: string) => {
            if (url.includes('drive.google.com')) {
              const fileId = url.split('/d/')[1]?.split('/')[0];
              if (fileId) {
                return `https://drive.google.com/uc?export=view&id=${fileId}`;
              }
            }
            return url;
          };

          return {
            id: slide.id,
            titel: slide.acf?.titel || 'Default Title',
            subtitel: slide.acf?.subtitel || 'Default Subtitle',
            foto: convertToDirectLink(slide.acf?.foto || ''),
            link: slide.acf?.link || '#',
            slug: slide.slug,
            youtube_video_url: convertToDirectLink(slide.acf?.youtube_video_url || ''),
            video_titel: slide.acf?.video_titel || 'Default Video Title',
            video_beschrijving: slide.acf?.video_beschrijving || 'Default Video Description',
          };
        });

        setCustomSlides(formattedSlides);
      } catch (error) {
        console.error('Failed to fetch custom slides:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomSlides();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="max-w-full mx-auto mt-16 md:mt-44">
      <div className="relative w-full">
        {/* Dynamic Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          {customSlides.map((slide) => (
            <div key={slide.id} className="relative w-full h-[50vh] md:h-screen">
              <Link href={slide.link}>
                <div className="relative h-full">
                  <Image
                    src={slide.foto}
                    alt={slide.titel}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end md:justify-bottom items-start text-left text-white p-6 md:p-12 bg-black bg-opacity-30">
                    <h3 className="text-xl md:text-xl font-extrabold tracking-widest uppercase">{slide.titel}</h3>
                    <p className="text-lg md:text-2xl font-light tracking-wider mt-2">{slide.subtitel}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Vertical line between columns */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-[2px] md:w-[4px] bg-black transform -translate-x-1/2"></div>
      </div>

      {/* Dynamic Google Drive Image Section (using youtube_video_url) */}
      {customSlides.map((slide) => {
        if (slide.youtube_video_url) {
          return (
            <div key={slide.id} className="relative w-full h-[50vh] md:h-[80vh]">
              <div className="w-full h-full relative">
                <Image
                  src={slide.youtube_video_url}
                  alt={slide.video_titel || ''}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
                {/* Overlay text on image */}
                <div className="absolute inset-0 flex flex-col justify-start items-start text-left bg-black bg-opacity-30 p-6 md:p-12">
                  <h3 className="text-3xl md:text-xl font-bold uppercase text-white">{slide.video_titel}</h3>
                  <p className="text-base md:text-l font-light mt-2 md:mt-4 text-white max-w-md">{slide.video_beschrijving}</p>
                  <Link href={slide.link}>
                    <button className="mt-4 md:mt-6 px-4 py-2 md:py-3 === text-white text-sm md:text-base font-semibold hover:bg-gray-800 transition">
                      Bekijk Portfolio
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

