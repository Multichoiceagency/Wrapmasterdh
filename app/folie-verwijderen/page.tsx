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
  title: "Folie Verwijderen bij Wrapmaster",
  description: "Professioneel, Veilig en Zonder Beschadigingen. Vakkundige verwijdering van wraps voor auto's, scooters en motoren.",
  heroImage: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_2.png",
  contentImage1: "/enes-website/memo-map/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-BMW-M3-G80-Sedan-20264_2.jpg",
  contentImage2: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-V-2-Mercedes-AMG-C63-Sedan-Estate-W205-Facelift-18962_1.jpg",
  contentImage3: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-V-2-Mercedes-AMG-C63-Sedan-Estate-W205-Facelift-18962_1.jpg",
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

export default function FolieVerwijderen() {
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
      Is de wrap op jouw auto, scooter of motor toe aan vervanging of wil je terug naar de originele lak? Kies voor folie verwijderen bij Wrapmaster! Ons team met jarenlange ervaring zorgt voor een vakkundige en veilige verwijdering van de folie, zonder lijmresten of schade aan de lak. Of het nu gaat om een gedeeltelijke wrap of een volledige voertuigwrap, wij leveren een resultaat waar je op kunt vertrouwen.
    </p>
  );

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Waarom Folie Verwijderen?</h3>
      <p className="mt-3">
        Het verwijderen van een wrap kan nodig zijn om verschillende redenen, zoals slijtage van de folie, de wens voor een nieuwe kleur of om de originele staat van jouw voertuig te herstellen. Het is belangrijk dat dit proces op een professionele manier wordt uitgevoerd om beschadigingen aan de lak of hardnekkige lijmresten te voorkomen.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van professioneel folie verwijderen:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Beschermt de lak: Voorkomt schade aan de originele lak van jouw voertuig.</li>
        <li>Grondige verwijdering: Geen achtergebleven lijmresten of stukjes folie.</li>
        <li>Snel en efficiënt: Bespaar tijd en moeite met een professionele aanpak.</li>
        <li>Geschikt voor alle voertuigen: Wij kunnen folie verwijderen van auto's, scooters, motoren en andere voertuigen.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Folie Verwijderen bij Wrapmaster</h3>
      <p className="mt-3">
        Bij Wrapmaster hebben we de expertise en tools om elk type folie zorgvuldig te verwijderen. Of het nu gaat om matte, glanzende of metallic wraps, ons team gebruikt speciale technieken om de folie snel en veilig te verwijderen, zelfs na jaren van gebruik. We zorgen ervoor dat jouw voertuig weer strak en schoon wordt opgeleverd.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Onze werkwijze:</h4>
      <ol className="list-decimal list-inside mt-2">
        <li>Inspectie: We beoordelen de staat van de folie en bespreken jouw wensen.</li>
        <li>Verwijdering: Met behulp van warmte en speciale gereedschappen verwijderen we de folie zonder de lak te beschadigen.</li>
        <li>Reiniging: Eventuele lijmresten worden zorgvuldig verwijderd met hoogwaardige producten.</li>
        <li>Aflevering: Je voertuig wordt schoon en klaar voor gebruik afgeleverd, of voorbereid op een nieuwe wrap.</li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster combineren we vakmanschap en ervaring om jou de beste service te bieden. Ons team met jarenlange ervaring zorgt ervoor dat de folie professioneel en zonder problemen wordt verwijderd, zodat jouw voertuig weer als nieuw oogt.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van Wrapmaster:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Veilige verwijdering: Wij beschermen jouw lak en zorgen voor een krasvrij resultaat.</li>
        <li>Hoogwaardige producten: We gebruiken alleen materialen en tools van topkwaliteit.</li>
        <li>Snel en efficiënt: Onze professionals verwijderen de folie snel en effectief.</li>
        <li>Maatwerk: Of je nu een complete wrap of kleine onderdelen wilt laten verwijderen, wij leveren maatwerk afgestemd op jouw behoeften.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wanneer is Folie Verwijderen Noodzakelijk?</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Slijtage of verkleuring: Als de wrap na verloop van tijd is beschadigd of verkleurd.</li>
        <li>Nieuwe wrap: Voorbereiding op een nieuwe wrap of een andere stijl.</li>
        <li>Verkoop: Terugbrengen naar de originele staat van het voertuig om de verkoopwaarde te verhogen.</li>
        <li>Huur- of leasevoertuigen: Het herstellen van voertuigen naar hun originele staat.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Laat Folie Verwijderen door Wrapmaster!</h3>
      <p className="mt-3">
        Wil je de wrap van jouw voertuig professioneel laten verwijderen? Kies voor de expertise van Wrapmaster en geniet van een vakkundige service zonder zorgen. Neem vandaag nog contact met ons op voor meer informatie of een vrijblijvende offerte. Samen zorgen we ervoor dat jouw voertuig er weer perfect uitziet!
      </p>
    </>
  );

  return (
    <>
      <NextSeo
        title="Folie Verwijderen bij Wrapmaster - Professioneel, Veilig en Zonder Beschadigingen"
        description="Vakkundige verwijdering van wraps voor auto's, scooters en motoren. Kies voor de expertise van Wrapmaster voor een veilige en schadevrije folieverwijdering."
        canonical="https://wrapmasterdh.nl/folie-verwijderen"
        openGraph={{
          url: "https://wrapmasterdh.nl/folie-verwijderen",
          title: "Folie Verwijderen bij Wrapmaster - Professioneel, Veilig en Zonder Beschadigingen",
          description: "Vakkundige verwijdering van wraps voor auto's, scooters en motoren. Kies voor de expertise van Wrapmaster voor een veilige en schadevrije folieverwijdering.",
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
            content: 'folie verwijderen, wrap verwijderen, wrapfolie verwijderen, carwrapping verwijderen, auto wrap verwijderen',
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
              Folie Verwijderen bij Wrapmaster – Professioneel, Veilig en Zonder Beschadigingen
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
                alt="Folie Verwijderen bij Wrapmaster"
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
                    className="object-cover px-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two Images Section */}
        <section className="max-w-full mx-auto mt-16 md:mt-44">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3]">
              <Image
                src={dienstData.contentImage3}
                alt="Content Image 1"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[4/3]">
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

