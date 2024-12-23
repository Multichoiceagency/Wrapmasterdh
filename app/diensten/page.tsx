import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getHeroSlides, getDienstCards } from '@/lib/api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  button_text: string;
  button_link: string;
  background_image: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface DienstCard {
  id: number;
  titel: string;
  subtitel: string;
  afbeelding: string;
  slug: string;
  sort_order: number;
}

async function HeroSection() {
  const heroSlides = await getHeroSlides();

  return (
    <section className="w-full h-screen relative">
      {heroSlides.map((slide) => (
        <div key={slide.id} className="relative w-full h-full">
          <Image
            src={slide.background_image}
            alt={slide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-20 p-4">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide">{slide.title}</h1>
            <p className="text-xl md:text-2xl font-light mt-4">{slide.subtitle}</p>
            <Link href={slide.button_link}>
              <button className="mt-6 px-8 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition">
                {slide.button_text}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

async function DienstenCards() {
  const dienstCards = await getDienstCards();

  return (
    <section className="max-w-7xl mx-auto mt-20 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center uppercase mb-16">Onze Diensten</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dienstCards.map((dienst) => (
          <Link key={dienst.id} href={`/diensten/${dienst.slug}`}>
            <div className="group relative overflow-hidden rounded-md shadow-md cursor-pointer">
              <div className="relative w-full h-64">
                <Image
                  src={dienst.afbeelding}
                  alt={dienst.titel}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-l font-bold uppercase group-hover:text-red-600 transition-colors">
                  {dienst.titel}
                </h3>
                <p className="text-gray-500 mt-2">{dienst.subtitel}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function DienstenPage() {
  return (
    <>
      <Suspense fallback={<div className="h-screen bg-gray-100 flex items-center justify-center">Loading hero...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-gray-100 flex items-center justify-center">Loading diensten...</div>}>
        <DienstenCards />
      </Suspense>
    </>
  );
}

