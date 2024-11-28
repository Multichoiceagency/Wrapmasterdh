'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SectionData {
  id: number;
  title: string;
  description: string; // Content/description of the post
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
          'https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/dynamic_section?_embed'
        );
        const data = await response.json();

        if (data.length > 0) {
          const section = {
            id: data[0].id,
            title: data[0].title.rendered,
            description: data[0].content.rendered || '', // Fetch description from `content.rendered`
            featured_image:
              data[0]._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-image.jpg',
            button_text: data[0]?.acf?.button_text || 'Learn More', // Ensure this matches your API structure
            button_link: data[0]?.acf?.button_link || '#', // Ensure this matches your API structure
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
    <section className="flex flex-wrap md:flex-nowrap items-center justify-between px-8 py-16 bg-white">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        {/* Image fetched dynamically */}
        <Image
          src={sectionData.featured_image}
          alt={sectionData.title}
          width={800}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 pl-0 md:pl-12">
        <h2 className="text-3xl font-bold mb-4">{sectionData.title}</h2>
        <div
          className="text-lg text-gray-600 mb-6"
          dangerouslySetInnerHTML={{ __html: sectionData.description }} // Render HTML content
        ></div>
        <Link href={sectionData.button_link}>
          <button className="px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition">
            {sectionData.button_text}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default DynamicSection;
