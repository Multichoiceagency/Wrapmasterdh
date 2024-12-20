'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SectionData {
  id: number;
  title: string;
  description: string;
  featured_image: string;
  button_text: string;
  button_link: string;
}

const DynamicSection = () => {
  const [sectionData, setSectionData] = useState<SectionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const response = await fetch(
          'https://www.website.wrapmasterdh.nl/wp-json/wp/v2/dynamic_section?_embed'
        );
        const data = await response.json();

        if (data.length > 0) {
          const section = {
            id: data[0].id,
            title: data[0].title.rendered,
            description: data[0].content.rendered || '',
            featured_image:
              data[0]._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-image.jpg',
            button_text: data[0]?.acf?.button_text || 'Learn More',
            button_link: data[0]?.acf?.button_link || '#',
          };
          setSectionData(section);
        }
      } catch (error) {
        console.error('Failed to fetch section data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSectionData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!sectionData) {
    return <p className="text-center text-gray-700">No section data found.</p>;
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-12">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative aspect-[16/9]">
            <Image
              src={sectionData.featured_image}
              alt={sectionData.title}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{sectionData.title}</h2>
          <div
            className="prose prose-lg text-gray-600 mb-6"
            dangerouslySetInnerHTML={{ __html: sectionData.description }}
          />
          <Link href={sectionData.button_link}>
            <button className="px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition">
              {sectionData.button_text}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DynamicSection;