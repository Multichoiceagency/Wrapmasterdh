/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
            youtube_video_url: slide.acf?.youtube_video_url || '',
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

  // Function to extract YouTube video ID
  const getYouTubeVideoId = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname === 'youtu.be') {
        // Handle shortened URLs like https://youtu.be/VIDEO_ID
        return parsedUrl.pathname.substring(1);
      } else if (parsedUrl.hostname === 'www.youtube.com' || parsedUrl.hostname === 'youtube.com') {
        // Handle full YouTube URLs like https://www.youtube.com/watch?v=VIDEO_ID
        return parsedUrl.searchParams.get('v');
      }
    } catch (error) {
      console.error('Invalid YouTube URL:', url);
    }
    return null;
  };

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
      {customSlides.map((slide) => {
        if (slide.youtube_video_url) {
          const videoId = getYouTubeVideoId(slide.youtube_video_url);
          return videoId ? (
            <div key={slide.id} className="relative w-full h-[60vh] md:h-[80vh]">
              <div className="w-full h-full relative">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1`}
                  title={slide.video_titel}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                  allowFullScreen
                ></iframe>
                {/* Overlay text on video */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-30 p-4">
                  <h3 className="text-4xl font-bold uppercase text-white">{slide.video_titel}</h3>
                  <p className="text-xl font-light mt-4 text-white">{slide.video_beschrijving}</p>
                  <Link href={slide.link}>
                    <button className="mt-6 px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition">
                      Discover Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : null;
        }
        return null;
      })}
    </section>
  );
};

export default CustomSection;
