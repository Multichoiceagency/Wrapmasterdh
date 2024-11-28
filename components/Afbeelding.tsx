'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// Define the banner type
interface Banner {
  id: number;
  title: string;
  featured_image: string;
  button_text?: string;
  button_link?: string;
}

function Afbeelding() {
  const [banner, setBanner] = useState<Banner | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch(
          'https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/banner?_embed'
        );
        const data = await response.json();

        // Map the data from WordPress API
        if (data.length > 0) {
          const bannerData: Banner = {
            id: data[0].id,
            title: data[0].title.rendered,
            featured_image: data[0]._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-image.jpg', // Fallback image
            button_text: data[0]?.button_text,
            button_link: data[0]?.button_link,
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
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!banner) {
    return <p className="text-center text-white">No banner found.</p>;
  }

  return (
    <section>
      <div className="relative bg-gray-900 text-white h-screen">
        {/* Image fetched dynamically */}
        <Image
          src={banner.featured_image}
          alt={banner.title}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-10 flex justify-center">
          <div className="text-center">
            <h3 className="text-4xl font-bold">{banner.title}</h3>
            {banner.button_text && banner.button_link && (
              <Link href={banner.button_link}>
                <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition">
                  {banner.button_text}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Afbeelding;
