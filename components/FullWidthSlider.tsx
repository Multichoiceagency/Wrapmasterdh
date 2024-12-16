'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FullWidthSlide {
  imageUrl: string;
  alt: string;
}

interface FullWidthSliderProps {
  slides: FullWidthSlide[];
}

export default function FullWidthSlider({ slides }: FullWidthSliderProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8; // 80% of container width
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });

      setScrollPosition(newPosition);
    }
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full bg-neutral-100">
      <div className="max-w-[2000px] mx-auto px-4">
        <div 
          ref={scrollContainerRef}
          className="relative flex overflow-x-auto gap-4 py-8 hide-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none w-[800px] relative aspect-[4/3]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Image
                src={slide.imageUrl}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/75 hover:bg-white text-gray-800 p-2 rounded-full transition-colors z-10 shadow-lg"
          aria-label="Previous slides"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/75 hover:bg-white text-gray-800 p-2 rounded-full transition-colors z-10 shadow-lg"
          aria-label="Next slides"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
