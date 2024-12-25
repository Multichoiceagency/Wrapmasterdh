'use client';

import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

interface Logo {
  id: number;
  title: string;
  logo_image: string;
}

interface ApiLogo {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    logo_image?: string;
  };
}

const getGoogleDriveImageUrl = (url: string): string => {
  if (url.includes('drive.google.com')) {
    const fileId = url.match(/[-\w]{25,}/);
    return fileId ? `https://drive.google.com/uc?export=view&id=${fileId[0]}` : url;
  }
  return url;
};

export default function LogoSlider(): JSX.Element {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 2500, stopOnInteraction: false })
  ]);

  useEffect(() => {
    const fetchLogos = async (): Promise<void> => {
      try {
        const response = await fetch('https://www.website.wrapmasterdh.nl/wp-json/wp/v2/logo?per_page=100');
        if (!response.ok) {
          throw new Error('Failed to fetch logos');
        }
        const data: ApiLogo[] = await response.json();
        const formattedLogos: Logo[] = data.map((item: ApiLogo) => ({
          id: item.id,
          title: item.title.rendered,
          logo_image: getGoogleDriveImageUrl(item.acf?.logo_image || ''),
        }));
        setLogos(formattedLogos);
      } catch (error) {
        console.error('Error fetching logos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogos();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="py-10 px-4 md:px-0">
      <h2 className="text-center text-3xl font-light text-gray-800 mb-6">Onze Partners</h2>
      
      <div className="max-w-6xl mx-auto overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {logos.map((logo) => (
            <div key={logo.id} className="flex-[0_0_50%] min-w-0 sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] px-2">
              <div className="relative w-full pt-[50%]">
                <Image
                  src={logo.logo_image}
                  alt={logo.title}
                  layout="fill"
                  objectFit="contain"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

