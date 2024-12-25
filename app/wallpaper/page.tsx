'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Wallpaper {
  id: number;
  title: string;
  subtitle: string;
  download_link: string;
  preview_image: string;
}

const WallpaperPage = () => {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const response = await fetch(
          'https://www.website.wrapmasterdh.nl/wp-json/wp/v2/wallpapers?_embed'
        );
        const data = await response.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedWallpapers: Wallpaper[] = data.map((wallpaper: any) => {
          let previewImageUrl = wallpaper.acf?.preview_image || '';
          if (previewImageUrl.includes('drive.google.com')) {
            const fileId = previewImageUrl.split('/d/')[1]?.split('/')[0];
            if (fileId) {
              previewImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            }
          }

          let downloadLink = wallpaper.acf?.download_link || '';
          if (downloadLink.includes('drive.google.com')) {
            const fileId = downloadLink.split('/d/')[1]?.split('/')[0];
            if (fileId) {
              downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
            }
          }

          return {
            id: wallpaper.id,
            title: wallpaper.title.rendered || 'Default Title',
            subtitle: wallpaper.acf?.subtitle || 'Default Subtitle',
            download_link: downloadLink,
            preview_image: previewImageUrl,
          };
        });

        setWallpapers(formattedWallpapers);
      } catch (error) {
        console.error('Failed to fetch wallpapers:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWallpapers();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      {/* Header Section */}
      <section className="w-full h-[50vh] bg-black flex items-center justify-center">
        <h1 className="text-5xl font text-white uppercase">Wallpapers downloaden</h1>
      </section>

      {/* Wallpapers Section */}
      <section className="max-w-7xl mx-auto mt-20">
        <h2 className="text-5xl font text-center uppercase mb-16">Download Jouw Favoriete Wallappers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wallpapers.map((wallpaper) => (
            <div key={wallpaper.id} className="group relative overflow-hidden rounded-md shadow-md">
              {/* Preview Image */}
              <div className="relative w-full h-64">
                <Image
                  src={wallpaper.preview_image}
                  alt={wallpaper.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Details and Download Button */}
              <div className="p-4 text-center">
                <h3 className="text-l font uppercase group-hover:text-red-600 transition-colors">
                  {wallpaper.title}
                </h3>
                <p className="text-gray-500 mt-2">{wallpaper.subtitle}</p>
                <a
                  href={wallpaper.download_link}
                  download
                  className="mt-4 inline-block px-6 py-2 bg-red-600 text-white font uppercase rounded hover:bg-red-700 transition"
                >
                  Downloaden
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WallpaperPage;
