'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Define the data structure for ACF fields
interface CustomSlide {
  id: number;
  titel: string;
  subtitel: string;
  foto: string;
  slug: string;
  link: string;
  youtube_video_url?: string;
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

        // Format data for images and video sections
        const formattedSlides: CustomSlide[] = data.map((slide: any) => {
          // Convert Google Drive link to a direct link
          let fotoUrl = slide.acf?.foto || '';
          if (fotoUrl.includes('drive.google.com')) {
            const fileId = fotoUrl.split('/d/')[1]?.split('/')[0];
            if (fileId) {
              fotoUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            }
          }

          return {
            id: slide.id,
            titel: slide.acf?.titel || 'Default Title',
            subtitel: slide.acf?.subtitel || 'Default Subtitle',
            foto: fotoUrl,
            link: slide.acf?.link || '#',
            slug: slide.slug,
            youtube_video_url: slide.acf?.youtube_video_url || '', // YouTube URL from ACF
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
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="max-w-full mx-auto mt-44">
      <div className="relative w-full">
        {/* Dynamic Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          {customSlides.map((slide) => (
            <div key={slide.id} className="relative w-full h-screen">
              <Link href={slide.link}>
                <div>
                  <Image
                    src={slide.foto}
                    alt={slide.titel}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white">
                    <h3 className="text-4xl font-extrabold tracking-widest uppercase">{slide.titel}</h3>
                    <p className="text-2xl font-light tracking-wider">{slide.subtitel}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Rode verticale lijn tussen de kolommen */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-[4px] bg-black transform -translate-x-1/2"></div>
      </div>

      {/* Dynamic YouTube Video Section */}
      {customSlides.map((slide) =>
        slide.youtube_video_url ? (
          <div key={slide.id} className="relative mt-16 bg-gray-900 text-white">
            <div className="w-full h-0 aspect-w-16 aspect-h-9 relative">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${new URL(slide.youtube_video_url).searchParams.get('v')}`}
                title={slide.titel}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white p-4 bg-black bg-opacity-50 rounded-md">
              <h3 className="text-3xl font-bold uppercase">{slide.titel}</h3>
              <p className="text-xl font-light">{slide.subtitel}</p>
              <Link href={slide.link}>
                <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition">
                  Discover More
                </button>
              </Link>
            </div>
          </div>
        ) : null
      )}
    </section>
  );
};

export default CustomSection;
