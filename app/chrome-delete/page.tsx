'use client';

import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import OnzeDiensten from '@/app/components/Diensten/Diensten';
import { faInstagram, faTiktok, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageCarousel from '@/components/ImageCarousel';
import dynamic from 'next/dynamic';

const NextSeoClient = dynamic(
  () => import('next-seo').then((mod) => mod.NextSeo),
  { ssr: false }
);

const socialMedia = {
  instagram: 'https://www.instagram.com/wrapmasterdh/',
  tiktok: 'https://www.tiktok.com/@wrapmasterdh',
  whatsapp: 'https://wa.me/31638718893',
  facebook: 'https://www.facebook.com/WrapmasterDH',
};

const dienstData = {
  title: "CHROME DELETE",
  description: "",
  heroImage: "/enes-website/osman/q3/DSC05363.jpg",
  contentImage1: "/enes-website/chrome-delete/mercedes.jpg",
  contentImage2: "/enes-website/chrome-delete/bmw.jpg",
  contentImage3: "/enes-website/chrome-delete/FOTO-1-2.jpeg",

};

const sliderImages = [
  "/enes-website/memo/DSC04799.jpeg",
  "/enes-website/memo/1000010430.jpg",
  "/enes-website/chrome-delete/IMG_1903.JPG",
  "/enes-website/osman/idbuzz/DSC05899.jpg",
];

const reels = [
  {
    id: 1,
    video: "/video/audi-rsq8.mp4",
    likes: "65.2k",
    comments: "195",
  },
  {
    id: 2,
    video: "/video/audi-rsq8.mp4",
    likes: "120k",
    comments: "345",
  },
  {
    id: 3,
    video: "/video/audi-rsq8.mp4",
    likes: "45.6k",
    comments: "89",
  },
  {
    id: 4,
    video: "/video/audi-rsq8.mp4",
    likes: "78.9k",
    comments: "230",
  },
];

export default function Carwrapping() {
  const [showMore, setShowMore] = useState(false);
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const shortText = (
    <p>
      Met Chrome Delete kun je glanzende chromen details vervangen door een strakke, moderne afwerking. Denk aan raamomlijstingen, grilles, spiegelkappen en sierlijsten. Een perfecte keuze voor een minimalistische uitstraling.
    </p>
  );
  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is Chrome Delete?</h3>
      <p className="mt-3">
        Chrome Delete is een aanpassingsoptie waarbij chromen accenten op je auto worden voorzien van een matte, satijnen of glanzende afwerking. Hiermee geef je jouw auto een strakke en elegante look.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Chrome Delete?</h3>
      <ul className="mt-3 list-disc list-inside">
        <li>Strakke uitstraling: Verminder de glans van chromen details.</li>
        <li>Volledig aanpasbaar: Kies uit matte, glanzende of carbon-afwerkingen.</li>
        <li>Bescherming: Bescherm de originele onderdelen tegen krassen en verkleuring.</li>
        <li>Flexibiliteit: Niet permanent en eenvoudig te verwijderen.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wrapmaster: Jouw Chrome Delete Specialist</h3>
      <p className="mt-3">
        Ons ervaren team zorgt voor een naadloos resultaat zonder zichtbare randen. Wij bieden maatwerk en werken uitsluitend met hoogwaardige materialen.
      </p>
    </>
  );

  return (
    <>
      <NextSeoClient
        title="Carwrapping bij Wrapmaster"
        description="Transformeer jouw voertuig met Wrapmaster's carwrapping diensten. Bescherm je lak en geef je auto een unieke uitstraling."
        canonical="https://wrapmasterdh.nl/carwrapping"
        openGraph={{
          url: "https://wrapmasterdh.nl/carwrapping",
          title: "Carwrapping bij Wrapmaster",
          description: "Transformeer jouw voertuig met Wrapmaster's carwrapping diensten. Bescherm je lak en geef je auto een unieke uitstraling.",
          images: [
            {
              url: dienstData.heroImage,
              width: 1200,
              height: 630,
              alt: dienstData.title,
            },
          ],
          site_name: "Wrapmaster",
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'carwrapping, auto wrappen, voertuig wrap, lakbescherming',
          },
        ]}
      />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-screen">
          <Image
            src={dienstData.heroImage}
            alt={dienstData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-20">
            <div className="text-left text-white px-4 max-w-4xl">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 py-5 text-center">{dienstData.title}</h1>
              <p className="text-base sm:text-xl mb-6 px-16 text-center">{dienstData.description}</p>
              <div className='flex justify-center'>
            <Link 
              href="/diensten"
              className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
            >
              TERUG NAAR DIENSTEN
            </Link>
            </div>
            </div>
          </div>
        </section>

        {/* Text with Image Section */}
        <section className="flex flex-col lg:flex-row py-8 lg:py-16">
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 mb-8 lg:mb-0">
            <h2 className="text-2xl font-light sm:text-3xl lg:text-4xl mb-4 lg:mb-8">
              Carwrapping bij Wrapmaster – Geef jouw Voertuig een Nieuwe Look
            </h2>
            <div className="mb-6 lg:mb-8 leading-relaxed max-w-xl font-regular text-sm sm:text-base">
              {showMore ? fullText : shortText}
              <button
                className="mt-4 text-blue-600 hover:underline focus:outline-none"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Lees minder" : "Lees meer"}
              </button>
            </div>
            <Link 
              href="/offerte-aanvragen"
              className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
            >
              Offerte aanvragen
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src={dienstData.contentImage1}
                alt="Carwrapping bij Wrapmaster"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        <ImageCarousel images={sliderImages} />


               {/* Two Images Section */}
               <section className="max-w-full mx-auto mt-16 md:mt-44">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="relative h-[700px] sm:h-[700px]">
                     <Image
                       src={dienstData.contentImage2}
                       alt="Content Image 1"
                       fill
                       className="object-cover"
                       priority
                     />
                   </div>
                   <div className="relative h-[700px] sm:h-[700px]">
                     <Image
                       src={dienstData.contentImage3}
                       alt="Content Image 2"
                       fill
                       className="object-cover"
                       priority
                     />
                   </div>
                 </div>
               </section>

        {/* Wrapmaster Services Section */}
        <section className="py-9">
          <OnzeDiensten />
        </section>
      </main>
    </>
  );
}
