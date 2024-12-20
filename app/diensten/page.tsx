'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  slug: string;
  sort_order: number;
}

const DienstenPage = () => {
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  const [dienstCards, setDienstCards] = useState<DienstCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroSlides = async () => {
      try {
        const response = await fetch(
          'https://www.website.wrapmasterdh.nl/wp-json/wp/v2/hero-slide?_embed'
        );
        const data = await response.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            title: slide.title.rendered || 'Default Title',
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
          'https://www.website.wrapmasterdh.nl/wp-json/wp/v2/diensten-pagina?_embed&per_page=100'
        );
        const data = await response.json();

        const formattedDienstCards: DienstCard[] = data
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((dienst: any) => {
            let afbeeldingUrl = dienst.acf?.background_image || '';
            if (afbeeldingUrl.includes('drive.google.com')) {
              const fileId = afbeeldingUrl.split('/d/')[1]?.split('/')[0];
              if (fileId) {
                afbeeldingUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
              }
            }

            const sortOrder = dienst.acf?.sort_order ? parseInt(dienst.acf.sort_order, 10) : 0;

            return {
              id: dienst.id,
              titel: dienst.title.rendered || 'Default Title',
              subtitel: dienst.acf?.subtitle || 'Default Subtitle',
              afbeelding: afbeeldingUrl,
              slug: dienst.slug || '',
              sort_order: sortOrder,
            };
          })
          .sort((a: { sort_order: number; }, b: { sort_order: number; }) => a.sort_order - b.sort_order);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dienstCards.map((dienst) => (
            <Link key={dienst.id} href={`/diensten/${dienst.slug}`}>
              <div className="group relative overflow-hidden rounded-md shadow-md cursor-pointer">
                <div className="relative w-full h-64">
                  <Image
                    src={dienst.afbeelding}
                    alt={dienst.titel}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
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
    </>
  );
};

export default DienstenPage;

