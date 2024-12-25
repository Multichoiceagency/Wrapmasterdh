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
  title: "Paint Protection Film (PPF) bij Wrapmaster",
  description: "Bescherm je voertuig met Wrapmaster's premium Paint Protection Film (PPF) diensten. Behoud de uitstraling en waarde van je auto.",
  heroImage: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_2.png",
  contentImage1: "/enes-website/memo-map/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-BMW-M3-G80-Sedan-20264_2.jpg",
  contentImage2: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-V-2-Mercedes-AMG-C63-Sedan-Estate-W205-Facelift-18962_1.jpg",
};

const sliderImages = [
  "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_2.png",
  "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_6.jpg",
  "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_8.jpg",
  "/enes-website/memo-map/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-BMW-M3-G80-Sedan-20264_5.jpg",
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
      Bij Wrapmaster begrijpen we dat jouw voertuig meer is dan alleen een vervoersmiddel; het is een waardevol bezit dat de beste bescherming verdient. Daarom bieden wij premium Paint Protection Film (PPF) aan – de ultieme oplossing om jouw lakwerk te beschermen tegen dagelijkse slijtage, steenslag, krasjes en weersinvloeden.
    </p>
  );

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Paint Protection Film?</h3>
      <p className="mt-3">
        PPF is een transparante, zelfhelende folie die speciaal is ontworpen om de lak van jouw auto in topconditie te houden. Het beschermt jouw voertuig tegen:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Kleine krasjes: De folie herstelt zichzelf bij blootstelling aan warmte.</li>
        <li>Steenslag en vuil: Voorkomt schade door steentjes en vuil onderweg.</li>
        <li>UV-stralen: Beschermt tegen verkleuring door zonlicht.</li>
        <li>Weersinvloeden: Houdt regen, sneeuw en pekel op afstand van jouw lak.</li>
      </ul>
      <p className="mt-3">
        Met PPF behoudt jouw auto niet alleen zijn esthetische uitstraling, maar ook zijn restwaarde.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Ervaring en Expertise bij Wrapmaster</h3>
      <p className="mt-3">
        Bij Wrapmaster mag je rekenen op vakmanschap en expertise. Ons team van installateurs beschikt over uitgebreide kennis en jarenlange ervaring in het professioneel aanbrengen van Paint Protection Film. Elk voertuig behandelen we met zorg en precisie, zodat je verzekerd bent van een naadloze afwerking en maximale bescherming.
      </p>
      <p className="mt-3">
        We maken uitsluitend gebruik van hoogwaardige PPF-materialen van gerenommeerde merken. Bovendien passen wij geavanceerde technieken toe om ervoor te zorgen dat de folie perfect aansluit op de vormen van jouw voertuig.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Voordelen van PPF door Wrapmaster</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Onzichtbare bescherming: De transparante folie is nauwelijks zichtbaar, waardoor het originele design van jouw auto behouden blijft.</li>
        <li>Duurzaam en onderhoudsvriendelijk: Onze PPF is ontworpen om jarenlang mee te gaan en eenvoudig te reinigen.</li>
        <li>Maatwerk oplossingen: Of het nu gaat om volledige lakbescherming of specifieke delen zoals bumpers en spiegels, wij leveren een oplossing op maat.</li>
        <li>Verhoogde waarde: Bescherm jouw investering en behoud de uitstraling van je voertuig.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster staan kwaliteit en klanttevredenheid centraal. Wij denken met je mee en bieden een op maat gemaakte service die volledig is afgestemd op jouw wensen. Of je nu een sportauto, bedrijfsvoertuig of motorfiets wilt beschermen, wij hebben de expertise om elk project tot een succes te maken.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Neem vandaag nog contact met ons op!</h3>
      <p className="mt-3">
        Wil je meer weten over de voordelen van Paint Protection Film of een afspraak maken? Het team van Wrapmaster staat klaar om jouw voertuig de bescherming te bieden die het verdient. Neem direct contact met ons op en ervaar de perfecte combinatie van vakmanschap en hoogwaardige materialen.
      </p>
    </>
  );

  return (
    <>
      <NextSeo
        title="Paint Protection Film (PPF) bij Wrapmaster"
        description="Bescherm je voertuig met Wrapmaster's premium Paint Protection Film (PPF) diensten. Behoud de uitstraling en waarde van je auto."
        canonical="https://wrapmasterdh.nl/ppf"
        openGraph={{
          url: "https://wrapmasterdh.nl/ppf",
          title: "Paint Protection Film (PPF) bij Wrapmaster",
          description: "Bescherm je voertuig met Wrapmaster's premium Paint Protection Film (PPF) diensten. Behoud de uitstraling en waarde van je auto.",
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
            content: 'Paint Protection Film, PPF, lakbescherming, steenslagbescherming, UV-bescherming, ppf paint protection film',
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
              Paint Protection Film (PPF) bij Wrapmaster – Ultieme Bescherming voor Jouw Voertuig
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
                alt="Paint Protection Film bij Wrapmaster"
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
                    /></span>
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

