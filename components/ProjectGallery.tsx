'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';

interface PortfolioItem {
  acf: {
    foto_1: string;
    foto_2: string;
    foto_3: string;
    foto_4: string;
    foto_5: string;
    foto_6: string;
    foto_7: string;
    foto_8: string;
    foto_9: string;
    foto_10: string;
  };
}

interface ProjectGalleryProps {
  portfolioItem: PortfolioItem;
}

export default function ProjectGallery({ portfolioItem }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = Object.entries(portfolioItem.acf)
    .filter(([key, value]) => key.startsWith('foto_') && value)
    .map(([key, value]) => ({
      id: key,
      url: value,
    }));

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative aspect-square group">
            <Image
              src={image.url}
              alt={`Gallery image ${image.id}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg cursor-pointer transition-transform duration-300 group-hover:scale-105"
              onClick={() => setSelectedImage(image.url)}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownload(image.url);
              }}
              className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Download image"
            >
              <Download className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Selected image"
              layout="fill"
              objectFit="contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownload(selectedImage);
              }}
              className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-md"
              aria-label="Download image"
            >
              <Download className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

