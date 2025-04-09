/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

// Swiper modules activeren
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function AutoWrappenDiensten() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <main className="p-10 animate-pulse space-y-6">
        <div className="h-[90vh] bg-gray-200 rounded-md" />
        <div className="h-12 bg-gray-200 w-1/2 rounded-md" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-40 bg-gray-200 rounded-md" />
          <div className="h-40 bg-gray-200 rounded-md" />
          <div className="h-40 bg-gray-200 rounded-md" />
          <div className="h-40 bg-gray-200 rounded-md" />
        </div>
        <div className="h-96 bg-gray-200 rounded-md" />
        <div className="h-96 bg-gray-200 rounded-md" />
        <div className="h-96 bg-gray-200 rounded-md" />
      </main>
    );
  }

  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <SwiperSlide>
        <div
          className="relative w-full h-[90vh] bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/range-rover-sport-nardo-grijs.jpg)' }}
        >
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
            <h1 className="text-1xl xs:text-3xl sm:text-4xl md:text-5xl font tracking-widest">
              DISCOVER THE FUTURE
            </h1>
            <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 bg-black text-white font-semibold border border-white hover:bg-white hover:text-black transition-all">
              SEE MORE
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* Logo Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font mb-8">Wij gebruiken</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center">
              <Image src="/images/3m-wrap.png" alt="3M Logo" width={120} height={60} className="hover:scale-110 transition" />
            </div>
            <div className="flex justify-center">
              <Image src="/images/avery-logo.png" alt="Avery Dennison Logo" width={300} height={60} className="hover:scale-110 transition" />
            </div>
            <div className="flex justify-center">
              <Image src="/images/xpel-logo.jpg" alt="Xpel Logo" width={300} height={60} className="hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* Waarom detailwrappen */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto animate-fadeInUp">
          <h2 className="text-3xl font mb-8">Waarom kiezen voor Detailwrappen?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Detailwrappen biedt een unieke manier om de uitstraling van uw voertuig volledig te personaliseren...
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div><p className="text-4xl text-red-600">500+</p><p className="text-lg">Auto's Gewrapt</p></div>
            <div><p className="text-4xl text-red-600">10+</p><p className="text-lg">Jaren Ervaring</p></div>
            <div><p className="text-4xl text-red-600">100%</p><p className="text-lg">Tevreden Klanten</p></div>
            <div><p className="text-4xl text-red-600">Premium</p><p className="text-lg">Materialen & Service</p></div>
          </div>
        </div>
      </section>

      {/* Wat is detailwrappen */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image src="/images/audi-s3-hexis-blue.jpeg" alt="Detailwrappen" width={800} height={600} className="rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font mb-8">Detailwrappen: Wat is het precies?</h2>
              <p className="text-lg mb-4 text-gray-700">
                Detailwrappen is een moderne techniek waarbij een speciale, hoogwaardige folie...
              </p>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>Keuze uit diverse kleuren</li>
                <li>Bescherming tegen krassen en UV</li>
                <li>Niet-permanent en verwijderbaar</li>
                <li>Verhoogde restwaarde</li>
              </ul>
              <button className="mt-4 px-6 py-3 bg-red-700 rounded-xl text-white hover:bg-black transition-all">BEKIJK PORTFOLIO</button>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe lang duurt het? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-3xl font mb-8">Hoe lang duurt het detailwrappen?</h2>
              <p className="text-lg mb-4 text-gray-700">Gemiddeld 2–3 dagen, inclusief deuren +4 dagen.</p>
              <button className="mt-4 px-6 py-3 bg-red-700 rounded-xl text-white hover:bg-black transition-all w-56">BEKIJK PORTFOLIO</button>
            </div>
            <div className="order-1 lg:order-2">
              <Image src="/images/audi-s3-hexis-blue.jpeg" alt="Wrapproces" width={800} height={600} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Kosten */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font mb-8">Wat kost detailwrappen?</h2>
          <ul className="list-disc list-inside text-lg mb-6 text-gray-700 max-w-2xl mx-auto text-left">
            <li><strong>Type Auto</strong>: Groter = meer kosten</li>
            <li><strong>Complexiteit</strong>: Moeilijker = duurder</li>
            <li><strong>Type Folie</strong>: Speciale = duurder</li>
            <li><strong>Extra opties</strong>: Chrome delete etc.</li>
          </ul>
          <button className="mt-4 px-6 py-3 bg-red-700 rounded-xl text-white hover:bg-black transition-all">OFFERTE AANVRAGEN</button>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font mb-8 text-center">Onze Garanties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Garantie op Wrapping</h3>
              <ul className="list-disc list-inside text-lg text-gray-700">
                <li>Auto’s  3 jaar: 3 jaar garantie</li>
                <li>Auto’s  3 jaar: 1 jaar garantie</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Tevredenheidsgarantie</h3>
              <p className="text-lg text-gray-700">
                100% tevreden? Zo niet, dan lossen we het op.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 text-center">
          <h2 className="text-3xl font mb-8">De Voordelen van Detailwrappen</h2>
          <ul className="text-lg text-gray-700 space-y-2">
            <li><strong>Bescherming:</strong> tegen lakschade & UV</li>
            <li><strong>Snelle transformatie:</strong> 1–2 dagen</li>
            <li><strong>Niet permanent:</strong> folie = verwijderbaar</li>
            <li><strong>Unieke kleuren:</strong> +500 opties</li>
          </ul>
          <Image
            src="/images/brabus1.png"
            alt="Voordelen"
            width={1920}
            height={1080}
            className="rounded-lg shadow-lg mt-8"
          />
        </div>
      </section>

      {/* Onderhoud */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Image src="/images/poetsen-glascoating.jpeg" alt="Onderhoud" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font mb-8">Onderhoudstips</h2>
              <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
                <li>Handwas minimaal 2x per maand</li>
                <li>Zachte borstels in de wasstraat</li>
                <li>Keramische coating aanbevolen</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-16 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font mb-6">Klaar om te starten?</h2>
          <p className="text-lg mb-8">Vraag vandaag nog een offerte aan</p>
          <a href="/contact" className="px-8 py-3 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-100 transition">
            Vraag Offerte Aan
          </a>
        </div>
      </section>
    </main>
  );
}
