'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen w-full overflow-hidden">
      <div
        className={`absolute inset-0 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Image
          src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/auto-wrappen/g-wagon/brabus-nardo-grey-motorkap.jpg"
          alt="Full-screen banner"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          quality={90}
          priority
        />
      </div>
    </section>
  );
}

export default HeroSection;

