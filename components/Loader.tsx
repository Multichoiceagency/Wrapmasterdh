// components/Loader.tsx
import React from 'react';
import Image from 'next/image';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-white z-50">
      {/* Example: Using a logo SVG in the public/logos folder */}
      <Image
        src="/logos/handtekening-zwart.svg" // Path to your SVG logo
        alt="Loading..."
        width={200}
        height={200}
        className="animate-draw"
      />
    </div>
  );
};

export default Loader;
