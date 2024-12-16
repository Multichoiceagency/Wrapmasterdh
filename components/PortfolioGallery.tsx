/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  title?: string;
  description?: string;
}

interface PortfolioGalleryProps {
  mediaGallery: MediaItem[];
}

export default function PortfolioGallery({ mediaGallery }: PortfolioGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="container relative my-16">
      <div className="text-center mb-12 position-relative z-index-1">
        <h2 className="text-3xl font-bold">Project Gallery</h2>
      </div>
      <Gallery>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaGallery.map((item, index) => (
            <li key={index} className="relative overflow-hidden rounded-lg">
              <Item
                original={item.url}
                thumbnail={item.url}
                width={1024}
                height={768}
              >
                {({ ref, open }: { ref: React.Ref<any>; open: (e: React.MouseEvent) => void }) => (
                  <div
                    onClick={(e: React.MouseEvent) => {
                      if (item.type === 'video') {
                        setSelectedVideo(item.url);
                      } else {
                        open(e);
                      }
                    }}
                    className="cursor-pointer block relative aspect-w-4 aspect-h-3"
                  >
                    {item.type === 'image' ? (
                      <Image
                        ref={ref as any}
                        src={item.url}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={item.title || `Gallery image ${index + 1}`}
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-black" aria-label="Play video">
                        <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                      {item.title && <span className="text-white text-lg font-semibold mb-2">{item.title}</span>}
                      {item.description && <span className="text-white text-sm">{item.description}</span>}
                    </div>
                  </div>
                )}
              </Item>
            </li>
          ))}
        </ul>
      </Gallery>
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedVideo(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full"
              onError={(e) => console.error("Error playing video:", e)}
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-white text-2xl"
              aria-label="Close video"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

