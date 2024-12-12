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
}

const PortfolioPage = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await fetch(
          'https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/portfolio?_embed'
        );
        const data = await response.json();

        const formattedPortfolioItems: PortfolioItem[] = data.map((item: any) => ({
          id: item.id,
          title: item.title.rendered || 'Untitled',
          excerpt: item.excerpt.rendered || '',
          featuredImage: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg',
          slug: item.slug,
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

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <Link key={item.id} href={`/portfolio/${item.slug}`}>
            <div className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
              <div className="relative aspect-w-16 aspect-h-9">
                <Image
                  src={item.featuredImage}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h2>
                <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: item.excerpt }} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;

