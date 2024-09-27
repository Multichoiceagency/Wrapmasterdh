'use client';

import Image from 'next/image';
import { useRef } from 'react';

const OverflowSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const portfolioItems = [
    {
      image: '/images/brabus1.png',
      title: 'BRABUS 900 DEEP BLUE',
      subtitle: 'based on Mercedes-AMG G 63',
    },
    {
      image: '/images/brabus2.png',
      title: 'BRABUS FOR TAYCAN',
      subtitle: 'based on Porsche Taycan Turbo S',
    },
    {
      image: '/images/project3.jpg',
      title: 'BRABUS 930',
      subtitle: 'based on Mercedes-AMG S 63 E Performance',
    },
    {
      image: '/images/project4.jpg',
      title: 'BRABUS XLP 800 6x6',
      subtitle: 'ADVENTURE EDITION',
    },
    {
      image: '/images/project5.jpg',
      title: 'BRABUS ROCKET 900',
      subtitle: 'based on Mercedes-AMG G63',
    },
  ];

  // Handle horizontal scroll manually with arrows
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Brand New Supercars</h2>

      <div className="relative-mx-8">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10 shadow-lg"
        >
          &#10094;
        </button>

        <div
          ref={scrollRef}
          className="w-full space-x-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="w-[513px] h-[342px] bg-black flex-shrink-0 rounded-lg overflow-hidden"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={513}
                height={342}
                className="object-cover"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10 shadow-lg"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default OverflowSlider;
