'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

export default function OverOnsPage() {
  return (
    
      <main className="bg-gray-100">
      {/* Hero Section */}
      <SwiperSlide>
          <div className="relative w-full h-[90vh] bg-black"> {/* Full height */}
            <video
              className="w-full h-[90vh] object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/video/carwrapping.mp4" // Ensure this video path is correct
            ></video>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font tracking-widest">
                AUTO WRAPPEN BIJ
              </h1>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 bg-black text-white font-semibold border border-white hover:bg-white hover:text-black transition-all">
                WRAPMASTER
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Hero Sectie */}
        <div className="container mx-auto px-4 lg:px-16">
        <div className="bg-cover bg-center relative h-80 rounded-lg mb-12" style={{ backgroundImage: "url('/images/company-banner.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <h1 className="text-4xl lg:text-5xl font text-white">Over Ons</h1>
            <p className="text-white text-lg mt-4 text-center max-w-2xl">
              Wrapmaster is jouw specialist voor het wrappen van auto's, scooters, motoren, en meer. Met jarenlange ervaring en passie voor ons vak transformeren we voertuigen naar jouw smaak.
            </p>
          </div>
        </div>



        {/* Bedrijfsinformatie */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font mb-4">Wie zijn wij?</h2>
          <p className="text-gray-700 mb-6">
            Bij <strong>Wrapmaster</strong> draait alles om kwaliteit, professionaliteit, en passie voor voertuigen. Sinds onze oprichting hebben we ons gevestigd als een toonaangevende speler in de wrappen- en detailingindustrie. Of het nu gaat om het wrappen van auto's, scooters, motoren of het verzorgen van chrome delete, onze missie is om elk voertuig een unieke en persoonlijke uitstraling te geven.
          </p>

          <p className="text-gray-700 mb-6">
            Ons toegewijde team werkt met de beste materialen zoals 3M en Avery Dennison om ervoor te zorgen dat elk project perfect wordt uitgevoerd. Klanttevredenheid staat bij ons voorop, en we gaan altijd voor een resultaat waar we trots op kunnen zijn.
          </p>

          <Image
            src="/images/team-working.jpg"
            alt="Wrapmaster Team"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg mb-6"
          />
          
          <p className="text-gray-700 mb-6">
            Ons ervaren team heeft al meer dan 500 auto's gewrapt en met meer dan 10 jaar ervaring in de branche zijn wij experts op het gebied van voertuigwrapping. Of je nu op zoek bent naar een volledige wrap, detailwrapping, of bescherming van je auto, wij hebben de juiste oplossing voor jou.
          </p>
        </div>

        {/* Diensten sectie */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font mb-4">Onze Diensten</h2>
          <p className="text-gray-700 mb-6">
            We bieden een breed scala aan diensten om aan al jouw wensen te voldoen:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li><strong>Auto Wrappen:</strong> Verander de uitstraling van je auto met een unieke wrap.</li>
            <li><strong>Detail Wrappen:</strong> Wrappen van specifieke delen zoals spiegels, dak of motorkap.</li>
            <li><strong>Chrome Delete:</strong> Geef je voertuig een moderne look door alle chromen onderdelen te verwijderen.</li>
            <li><strong>Scooter en Motor Wrappen:</strong> Voor tweewielers die net dat beetje extra flair nodig hebben.</li>
            <li><strong>Reclame Belettering:</strong> Laat je merk zien met professionele bedrijfsbelettering.</li>
            <li><strong>Koplampen Tinten en Velgenbescherming:</strong> Bescherm en personaliseer je voertuig tot in de details.</li>
            <li><strong>Poetsen & Glascoating:</strong> Houd je auto in perfecte conditie met onze poets- en glascoating diensten.</li>
          </ul>

          <p className="text-gray-700">
            Elk project dat wij aanpakken, groot of klein, wordt met dezelfde precisie en aandacht voor detail uitgevoerd. We luisteren naar jouw wensen en zorgen ervoor dat je 100% tevreden bent met het eindresultaat.
          </p>
        </div>

        {/* Onze Waarden */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font mb-4">Onze Waarden</h2>
          <p className="text-gray-700 mb-6">
            We geloven in het leveren van uitzonderlijke service en waarde aan onze klanten. Onze kernwaarden zijn:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li><strong>Kwaliteit:</strong> We werken met hoogwaardige materialen en leveren vakmanschap van het hoogste niveau.</li>
            <li><strong>Innovatie:</strong> We blijven altijd op de hoogte van de laatste trends en technologieën in de wrap- en detailingwereld.</li>
            <li><strong>Klanttevredenheid:</strong> Wij geloven dat de klant altijd centraal staat. We streven naar volledige tevredenheid in elk project.</li>
            <li><strong>Betrouwbaarheid:</strong> Je kunt altijd op ons rekenen voor tijdige en hoogwaardige service.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-red-600 text-white text-center py-12 rounded-lg">
          <h2 className="text-3xl font mb-4">Klaar om je voertuig te transformeren?</h2>
          <p className="text-lg mb-6">Neem vandaag nog contact met ons op voor een vrijblijvende offerte of bezoek onze werkplaats in Den Haag.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Neem Contact Op
          </a>
        </div>
      </div>
    </main>
  );
}
