'use client';

import { useState } from 'react';
import Image from 'next/image';

interface EngineSlide {
  imageUrl: string;
  alt: string;
}

interface EngineSliderProps {
  slides: EngineSlide[];
}

export default function EngineSlider({ slides }: EngineSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full bg-black">
      <div className="relative aspect-[21/9] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.imageUrl}
              alt={slide.alt}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              className="transform scale-100 transition-transform duration-700"
              priority
            />
          </div>
        ))}

        {/* Dot Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-red-600 w-6' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div></div>
    </div>
  );
}

