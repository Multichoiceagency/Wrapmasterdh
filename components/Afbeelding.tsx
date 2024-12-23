'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Banner {
  id: number;
  featured_image: string;
}

function Afbeelding() {
  const [banner, setBanner] = useState<Banner | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch(
          'https://www.website.wrapmasterdh.nl/wp-json/wp/v2/banner?_embed'
        );
        const data = await response.json();

        if (data.length > 0) {
          const bannerData: Banner = {
            id: data[0].id,
            featured_image: data[0]._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-image.jpg',
          };

          setBanner(bannerData);
        }
      } catch (error) {
        console.error('Failed to fetch banner data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBanner();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-gray-900">
        <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!banner) {
    return <div className="h-screen w-screen bg-gray-900"></div>;
  }

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <Image
        src={banner.featured_image}
        alt="Full-screen banner"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
}

export default Afbeelding;

