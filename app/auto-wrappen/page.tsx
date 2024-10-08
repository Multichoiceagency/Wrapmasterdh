/* eslint-disable react/no-unescaped-entities */
'use client';

import HeroSection from '@/app/components/hero/Hero'; // Importeer de hero section component
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const LargeOverflowSlider = () => {
  const carImages = [
    {
      src: '/images/brabus1.png', // Add your image paths
      alt: 'Car Image 1',
    },
    {
      src: '/images/brabus2.png', // Add your image paths
      alt: 'Car Image 2',
    },
    {
      src: '/images/brabus3.png', // Add your image paths
      alt: 'Car Image 3',
    },
  ];

  return (
    <section className="relative w-screen h-[100vh] overflow-x-hidden bg-gray-900">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {carImages.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[100vh]">
              <Image
                src={car.src}
                alt={car.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="overflow-visible"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <div className="swiper-pagination swiper-pagination-custom"></div>
      </div>
    </section>
  );
};

export default function CarWrappingPage() {
  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Overzicht van Car Wrapping */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Waarom kiezen voor Car Wrapping?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Car Wrapping biedt de perfecte balans tussen esthetiek en bescherming voor uw voertuig. Door een hoogwaardige folie aan te brengen, kunt u het uiterlijk van uw auto compleet veranderen zonder permanente aanpassingen aan de lak. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-5xl font-bold text-red-600">500+</p>
              <p className="text-lg">Auto's Gewrapped</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-red-600">10+</p>
              <p className="text-lg">Jaren Ervaring</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-red-600">100%</p>
              <p className="text-lg">Tevreden Klanten</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-red-600">Topkwaliteit</p>
              <p className="text-lg">Materialen & Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Car Wrapping Details */}
      <section id="details" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat is Car Wrapping?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/carwrapping.jpg" // Vervang dit met een relevante afbeelding
                alt="Voorbeeld van Car Wrapping"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg mb-4 text-gray-700">
                Car wrapping is het proces waarbij de buitenkant van een voertuig wordt bedekt met een vinylfolie, wat het uiterlijk drastisch kan veranderen en tegelijkertijd de onderliggende lak beschermt tegen slijtage en krassen. 
              </p>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>Bescherming tegen krassen en UV-schade</li>
                <li>Keuze uit matte, glanzende of satijnen afwerkingen</li>
                <li>Aangepaste ontwerpen en branding voor bedrijven</li>
                <li>Verschillende kleuren en texturen beschikbaar</li>
              </ul>
              <p className="text-lg font-semibold">
                Of je nu kiest voor een volledige wrap of alleen voor specifieke delen, car wrapping biedt flexibiliteit en eindeloze aanpassingsmogelijkheden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Overflow Slider Section */}
      <LargeOverflowSlider />

      {/* Aanvullende Diensten */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Onze Aanvullende Diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/images/velgen-wrap.jpg"
                alt="Velgen Wrappen"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Velgen Wrappen</h3>
                <p className="text-gray-600 mb-4">Transformeer uw velgen met onze hoogwaardige wraptechnieken voor een moderne uitstraling.</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/images/chrome-delete.jpg"
                alt="Chrome Delete"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Chrome Delete</h3>
                <p className="text-gray-600 mb-4">Geef uw auto een strakke, moderne look door alle chroomdelen te verwijderen.</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/images/koplampen.jpg"
                alt="Koplampen Tinten"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Koplampen Tinten</h3>
                <p className="text-gray-600 mb-4">Personaliseer uw voertuig met getinte koplampen voor een stijlvolle en functionele look.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Klaar om uw auto te transformeren?</h2>
          <p className="text-lg mb-8">
            Neem vandaag nog contact op voor een gratis consult en ontdek hoe we uw voertuig kunnen omtoveren tot een uniek meesterwerk.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Neem contact op
          </a>
        </div>
      </section>
    </main>
  );
}
