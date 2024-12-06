'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { InstagramEmbed } from 'react-social-media-embed';

interface GridLayoutProps {
  instagramPostUrl: string;
  cameraImage: string;
  mainVideo: string;
  mainText: string;
  motorWrapImage: string;
  carWrapImage: string;
}

const GridLayout: React.FC<GridLayoutProps> = ({
  instagramPostUrl,
  cameraImage,
  mainVideo,
  mainText,
  motorWrapImage,
  carWrapImage,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getMediaUrl = (url: string) => {
    if (url.includes('cloudinary.com')) {
      return url; // Return Cloudinary URL as is
    }
    // Handle Google Drive URL
    const fileId = url.match(/[-\w]{25,}/);
    return fileId ? `https://drive.google.com/uc?export=view&id=${fileId[0]}` : url;
  };

  return (
    <div className="container mx-auto py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Top Row */}
        <div className="h-[400px] bg-gray-100 overflow-hidden">
          {isClient && (
            <InstagramEmbed url={instagramPostUrl} width="100%" height={400} />
          )}
        </div>
        <div className="relative h-[400px]">
          <Image
            src={getMediaUrl(cameraImage)}
            alt="Camera foto"
            fill
            className="object-cover"
          />
        </div>

        {/* Middle Row */}
        <div className="col-span-1 md:col-span-2 relative h-[600px]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={getMediaUrl(mainVideo)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
            <p className="text-white text-lg">{mainText}</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="relative h-[400px]">
          <Image
            src={getMediaUrl(motorWrapImage)}
            alt="Motor wrap foto"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[400px]">
          <Image
            src={getMediaUrl(carWrapImage)}
            alt="Car wrap foto"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;