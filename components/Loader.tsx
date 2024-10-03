// components/Loader.tsx

import React from 'react';
import Image from 'next/image';
import loaderGif from '@/public/images/loader.gif'; // Adjust the path as needed

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen fixed inset-0 bg-background z-50">
      <Image
        src={loaderGif}
        alt="Loading animation"
        width={200} // Set desired width
        height={200} // Set desired height
        objectFit="contain"
        priority // Ensure the loader image loads quickly
      />
    </div>
  );
};

export default Loader;
