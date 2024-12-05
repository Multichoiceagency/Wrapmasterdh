/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the data structure for Hero and Dienst fields
interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  button_text: string;
  button_link: string;
  background_image: string;
}

interface DienstCard {
  id: number;
  titel: string;
  subtitel: string;
  afbeelding: string;
  link: string;
}

const DienstenPage = () => {
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  const [dienstCards, setDienstCards] = useState<DienstCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroSlides = async () => {
      try {
        const response = await fetch(
          'https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/hero-slide?_embed'
        );
        const data = await response.json();

        // Format data for hero section
        const formattedHeroSlides: HeroSlide[] = data.map((slide: any) => {
          let backgroundImageUrl = slide.acf?.background_image || '';
          if (backgroundImageUrl.includes('drive.google.com')) {
            const fileId = backgroundImageUrl.split('/d/')[1]?.split('/')[0];
            if (fileId) {
              backgroundImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            }
          }

          return {
            id: slide.id,
            title: slide.title.rendered || 'Default Title', // Gebruik hier de standaard WordPress post titel
            subtitle: slide.acf?.subtitle || 'Default Subtitle',
            button_text: slide.acf?.button_text || 'Discover Now',
            button_link: slide.acf?.button_link || '#',
            background_image: backgroundImageUrl,
          };
        });

        setHeroSlides(formattedHeroSlides);
      } catch (error) {
        console.error('Failed to fetch hero slides:', error);
      }
    };

    const fetchDienstCards = async () => {
      try {
        const response = await fetch(
          'https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/diensten-pagina?_embed'
        );
        const data = await response.json();

        // Format data for dienst cards
        const formattedDienstCards: DienstCard[] = data.map((dienst: any) => {
          let afbeeldingUrl = dienst.acf?.background_image || '';
          if (afbeeldingUrl.includes('drive.google.com')) {
            const fileId = afbeeldingUrl.split('/d/')[1]?.split('/')[0];
            if (fileId) {
              afbeeldingUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
            }
          }

          return {
            id: dienst.id,
            titel: dienst.title.rendered || 'Default Title', // Gebruik hier de standaard WordPress post titel
            subtitel: dienst.acf?.subtitle || 'Default Subtitle',
            afbeelding: afbeeldingUrl,
            link: dienst.link || '#',
          };
        });

        setDienstCards(formattedDienstCards);
      } catch (error) {
        console.error('Failed to fetch dienst cards:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroSlides();
    fetchDienstCards();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="w-full h-screen relative">
        {heroSlides.map((slide) => (
          <div key={slide.id} className="relative w-full h-full">
            <Image
              src={slide.background_image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-20 p-4">
              <h1 className="text-6xl font-bold uppercase tracking-wide">{slide.title}</h1>
              <p className="text-2xl font-light mt-4">{slide.subtitle}</p>
              <Link href={slide.button_link}>
                <button className="mt-6 px-8 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition">
                  {slide.button_text}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Diensten Cards Section */}
      <section className="max-w-7xl mx-auto mt-20">
        <h2 className="text-5xl font-bold text-center uppercase mb-16">Onze Diensten</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dienstCards.map((dienst) => (
            <div key={dienst.id} className="group relative overflow-hidden bg-white rounded-md shadow-md">
              <Link href={dienst.link}>
                <div className="relative w-full h-64">
                  <Image
                    src={dienst.afbeelding}
                    alt={dienst.titel}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-2xl font-bold uppercase group-hover:text-red-600 transition-colors">
                    {dienst.titel}
                  </h3>
                  <p className="text-gray-500">{dienst.subtitel}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Static Information Section */}
      <section className="max-w-7xl mx-auto my-32 text-center">
        <h2 className="text-4xl font-bold mb-8">Visual Elegance Absolute Individuality</h2>
        <p className="text-lg text-gray-700 mb-12">
          Creating a unique blend of visual excellence and flawless technology, our supercars offer a perfect driving experience.
          We pride ourselves on our craftsmanship, performance, and dedication to offering a high-end product. Discover our range of supercars and experience luxury like never before.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full h-64">
            <Image
              src="/images/car-performance.jpg"
              alt="Confident Performance"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold mb-4">Confident Performance</h3>
            <p className="text-lg text-gray-600">
              The combination of power, performance, and precision engineering defines every model we create. Our cars are designed to offer the ultimate driving experience for those who demand the best.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DienstenPage;
