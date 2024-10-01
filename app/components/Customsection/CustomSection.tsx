'use client';

import Link from 'next/link';

const CustomSection = () => {
  return (
    <section className="max-w-full mx-auto mt-44">
      {/* Two image section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <img
            src="/images/brabus1.png" // First image
            alt="BRABUS XLP 900 6x6 Superblack"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold">BRABUS XLP 900 6x6</h3>
            <p className="text-xl font-medium">Superblack</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/brabus2.png" // Second image
            alt="BRABUS XLP 800 6x6 Adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold">BRABUS XLP 800 6x6</h3>
            <p className="text-xl font-medium">Adventure</p>
          </div>
        </div>
      </div>

      {/* Video section */}
      <div className="relative bg-gray-900 text-white">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/video/carwrapping.mp4" // Replace with your video path
        />
          <div className="absolute inset-x-0 bottom-6 flex justify-center">
            <div className="text-center">
              <h3 className="text-3xl font-bold">WRAPMASTER INDIVIDUALIZATION PROGRAM</h3>
              <Link href="/discover-more">
                <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition">
                  Discover More
                </button>
              </Link>
            </div>
          </div>
        </div>
    </section>
  );
};

export default CustomSection;
