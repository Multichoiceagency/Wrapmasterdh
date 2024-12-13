'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItem {
  id: number;
  title: string;
  excerpt: string;
  featuredImage: string;
  slug: string;
  heroMediaType: 'image' | 'video';
  heroVideo: string;
}

interface WPPortfolioItem {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
  acf?: {
    hero_media_type?: 'image' | 'video';
    hero_video?: string;
  };
}

const PortfolioPage = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMediaUrl = (url: string): string => {
    if (url.includes('drive.google.com')) {
      const fileIdMatch = url.match(/[-\w]{25,}/);
      return fileIdMatch ? `https://drive.google.com/uc?export=view&id=${fileIdMatch[0]}` : url;
    }
    return url;
  };

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await fetch(
          'https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/portfolio?_embed'
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: WPPortfolioItem[] = await response.json();

        const formattedPortfolioItems: PortfolioItem[] = data.map((item) => ({
          id: item.id,
          title: item.title.rendered || 'Untitled',
          excerpt: item.excerpt.rendered || '',
          featuredImage: getMediaUrl(item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'),
          slug: item.slug,
          heroMediaType: item.acf?.hero_media_type || 'image',
          heroVideo: getMediaUrl(item.acf?.hero_video || ''),
        }));

        setPortfolioItems(formattedPortfolioItems);
      } catch (error) {
        console.error('Failed to fetch portfolio items:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolioItems();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (portfolioItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl text-gray-600">No portfolio items found.</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-gray-800 text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Our Portfolio</h1>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link key={item.id} href={`/portfolio/${item.slug}`}>
              <div className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
                {item.heroMediaType === 'video' && item.heroVideo ? (
                  <video
                    controls
                    className="w-full h-[300px] rounded-lg object-cover"
                    src={item.heroVideo}
                  />
                ) : (
                  <Image
                    src={item.featuredImage}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="p-4 bg-white">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h2>
                  <div
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: item.excerpt }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
