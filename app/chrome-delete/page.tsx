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

const socialMedia = {
  instagram: 'https://www.instagram.com/wrapmasterdh/',
  tiktok: 'https://www.tiktok.com/@wrapmasterdh',
  whatsapp: 'https://wa.me/31638718893',
  facebook: 'https://www.facebook.com/WrapmasterDH',
};

const dienstData = {
  title: "Chrome Delete bij Wrapmaster",
  description: "Voor een Moderne en Stoere Auto. Transformeer chromen accenten naar een strakke, minimalistische uitstraling.",
  heroImage: "/enes-website/memo-map/chrome-delete/chrome-delete-hero.jpg",
  contentImage1: "/enes-website/memo-map/chrome-delete/chrome-delete-1.jpg",
  contentImage2: "/enes-website/memo-map/chrome-delete/chrome-delete-2.jpg",
};

const sliderImages = [
  "/enes-website/memo-map/chrome-delete/chrome-delete-slider-1.jpg",
  "/enes-website/memo-map/chrome-delete/chrome-delete-slider-2.jpg",
  "/enes-website/memo-map/chrome-delete/chrome-delete-slider-3.jpg",
  "/enes-website/memo-map/chrome-delete/chrome-delete-slider-4.jpg",
];

const reels = [
  {
    id: 1,
    video: "/video/chrome-delete-reel-1.mp4",
    likes: "65.2k",
    comments: "195",
  },
  {
    id: 2,
    video: "/video/chrome-delete-reel-2.mp4",
    likes: "120k",
    comments: "345",
  },
  {
    id: 3,
    video: "/video/chrome-delete-reel-3.mp4",
    likes: "45.6k",
    comments: "89",
  },
  {
    id: 4,
    video: "/video/chrome-delete-reel-4.mp4",
    likes: "78.9k",
    comments: "230",
  },
];

export default function ChromeDelete() {
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
      Wil je jouw auto een strakke, minimalistische uitstraling geven? Met Chrome Delete laat je glanzende chromen details verdwijnen en vervang je deze door een stijlvolle, subtiele afwerking. Bij Wrapmaster zijn we gespecialiseerd in Chrome Delete en zorgen we voor een perfect resultaat dat jouw auto een volledig nieuwe look geeft.
    </p>
  );

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is Chrome Delete?</h3>
      <p className="mt-3">
        Chrome Delete is een aanpassingsoptie waarbij de chromen accenten op jouw auto worden voorzien van een nieuwe laag in een matte, satijnen of glanzende afwerking. Denk hierbij aan raamomlijstingen, grille, spiegelkappen, en sierlijsten. Met Chrome Delete kun je de uitstraling van je voertuig volledig transformeren naar een modern en elegant design, dat beter aansluit bij jouw persoonlijke stijl.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Chrome Delete?</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Strakke uitstraling: Verminder de glans van chromen details en creëer een meer verfijnde, stoere look.</li>
        <li>Volledig aanpasbaar: Kies uit een breed scala aan kleuren en afwerkingen, zoals mat zwart, glanzend zwart of carbon-look.</li>
        <li>Bescherming: De aangebrachte laag beschermt de originele chroomelementen tegen beschadigingen zoals krassen en verkleuring.</li>
        <li>Flexibiliteit: De Chrome Delete is niet permanent en kan zonder schade aan de originele onderdelen worden verwijderd.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wrapmaster: Jouw Chrome Delete Specialist</h3>
      <p className="mt-3">
        Bij Wrapmaster kun je rekenen op een team van professionals met jarenlange ervaring in het professioneel uitvoeren van Chrome Delete projecten. Onze expertise en oog voor detail zorgen ervoor dat de overgang naadloos is, zonder zichtbare randen of imperfecties. Elk onderdeel van jouw auto wordt met uiterste precisie behandeld, zodat je verzekerd bent van een hoogwaardig eindresultaat.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Voordelen van Chrome Delete bij Wrapmaster</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Vakmanschap en precisie: Ons ervaren team werkt met de nieuwste technieken en hoogwaardige materialen.</li>
        <li>Hoogwaardige folie: We gebruiken duurzame folies die bestand zijn tegen weersinvloeden, vuil en UV-straling.</li>
        <li>Maatwerk oplossingen: Elke Chrome Delete wordt op maat uitgevoerd, geheel naar jouw wensen en het ontwerp van jouw voertuig.</li>
        <li>Snelle service: Onze efficiënte werkwijze betekent dat je snel weer de weg op kunt met een vernieuwde uitstraling.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Welke Onderdelen Kunnen We Aanpakken?</h3>
      <p className="mt-3">
        Bij Wrapmaster kunnen we vrijwel elk chromen onderdeel van jouw auto aanpassen. Veelvoorkomende onderdelen voor een Chrome Delete zijn:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Raamlijsten</li>
        <li>Voor- en achtergrille</li>
        <li>Bumperlijsten</li>
        <li>Spiegelkappen</li>
        <li>Sierstrips en deurdrempels</li>
        <li>Logo's en emblemen</li>
      </ul>
      <p className="mt-3">
        Met Chrome Delete wordt jouw auto een unieke verschijning op de weg, helemaal in lijn met jouw stijl.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster staat kwaliteit altijd centraal. Ons team combineert passie voor auto's met jarenlange ervaring en een scherp oog voor detail. We werken uitsluitend met premium materialen en garanderen een langdurig en professioneel resultaat. Bovendien denken we met je mee en bieden we advies op maat om jouw auto de uitstraling te geven die jij voor ogen hebt.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Geef jouw auto een strakke look met Wrapmaster Chrome Delete!</h3>
      <p className="mt-3">
        Ben je klaar om jouw auto een stijlvolle en moderne upgrade te geven? Kies voor de expertise van Wrapmaster en laat jouw voertuig schitteren met een strakke Chrome Delete. Neem vandaag nog contact met ons op voor een vrijblijvend advies of een offerte. Samen maken we jouw auto uniek en precies zoals jij het wilt!
      </p>
    </>
  );

  return (
    <>
      <NextSeo
        title="Chrome Delete bij Wrapmaster - Voor een Moderne en Stoere Auto"
        description="Transformeer chromen accenten naar een strakke, minimalistische uitstraling met Chrome Delete van Wrapmaster. Ontdek onze professionele service!"
        canonical="https://wrapmasterdh.nl/chrome-delete"
        openGraph={{
          url: "https://wrapmasterdh.nl/chrome-delete",
          title: "Chrome Delete bij Wrapmaster - Voor een Moderne en Stoere Auto",
          description: "Transformeer chromen accenten naar een strakke, minimalistische uitstraling met Chrome Delete van Wrapmaster. Ontdek onze professionele service!",
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
            content: 'chrome delete, chrome verwijderen, details wrappen, auto styling, chromen accenten, minimalistische uitstraling',
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
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-10 sm:pb-20">
            <div className="text-left text-white px-4 max-w-4xl">
              <h1 className="text-3xl sm:text-6xl mb-2 py-5 text-center">{dienstData.title}</h1>
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
              Chrome Delete bij Wrapmaster – Voor een Moderne en Stoere Auto
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
                alt="Chrome Delete bij Wrapmaster"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Image Slider Section */}
        <section className="py-16 bg-gray-100">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              {sliderImages.map((image, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] relative h-[500px]">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two Images Section */}
        <section className="max-w-full mx-auto mt-16 md:mt-44">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[300px] sm:h-[500px]">
              <Image
                src={dienstData.contentImage1}
                alt="Content Image 1"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative h-[300px] sm:h-[500px]">
              <Image
                src={dienstData.contentImage2}
                alt="Content Image 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Instagram Reels Section */}
        <section className="w-full bg-white py-16">
          <h2 className="text-black text-3xl font-bold mb-8 text-center">Bekijk Onze Reels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="relative w-full h-[300px] sm:h-[760px] bg-black rounded-lg overflow-hidden"
              >
                {/* Video */}
                <video
                  src={reel.video}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  autoPlay
                  playsInline
                ></video>
                {/* Instagram Reel Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-40">
                  <div className="flex items-center text-white text-sm font-semibold">
                    <Image
                      src="/logos/logo-wit.png"
                      alt="Reels Play Icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Reels
                  </div>
                  <div className="text-white space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        <Image
                          src="/logos/handtekening-wit.png"
                          alt="Reels Play Icon"
                          width={100}
                          height={20}
                          className="mr-2"
                        />
                      </span>
                      <div className="flex space-x-2">
                        <a
                          href={socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400"
                        >
                          <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a
                          href={socialMedia.tiktok}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400"
                        >
                          <FontAwesomeIcon icon={faTiktok} size="lg" />
                        </a>
                        <a
                          href={socialMedia.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400"
                        >
                          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                        </a>
                        <a
                          href={socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400"
                        >
                          <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

