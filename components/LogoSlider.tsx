'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

interface Logo {
  id: number;
  title: string;
  logo_image: string;
}

const logos: Logo[] = [
  { id: 1, title: "Partner 1", logo_image: "/logos/partner1.png" },
  { id: 2, title: "Partner 2", logo_image: "/logos/partner2.png" },
  { id: 3, title: "Partner 3", logo_image: "/logos/partner3.png" },
  { id: 4, title: "Partner 4", logo_image: "/logos/partner4.png" },
  { id: 5, title: "Partner 5", logo_image: "/logos/partner5.png" },
  { id: 6, title: "Partner 6", logo_image: "/logos/partner6.png" },
  { id: 7, title: "Partner 7", logo_image: "/logos/partner7.png" },
  { id: 8, title: "Partner 8", logo_image: "/logos/partner8.png" },
];

export default function LogoSlider(): JSX.Element {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 2500, stopOnInteraction: false })
  ]);

  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-center text-3xl font-light text-gray-800 mb-6">Onze Partners</h2>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {logos.map((logo) => (
              <div key={logo.id} className="flex-[0_0_50%] min-w-0 sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] px-2">
                <div className="relative w-full pt-[50%]">
                  <Image
                    src={logo.logo_image}
                    alt={logo.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

