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
  title: "Remklauwen Kleuren bij Wrapmaster",
  description: "Geef Jouw Auto een Sportieve en Luxe Uitstraling met professioneel gekleurde remklauwen. Verbeter de look en bescherming van je remmen.",
  heroImage: "/enes-website/remklauwen/RS6-8.jpg",
  contentImage1: "/enes-website/remklauwen/1000017877.jpg",
  contentImage2: "/enes-website/remklauwen/BlndrAgency_ (20 of 34).jpg",
  contentImage3: "/enes-website/remklauwen/BlndrAgency_ (20 of 34).jpg",
};

const sliderImages = [
  "/enes-website/remklauwen/1000018243.jpg",
  "/enes-website/remklauwen/IMG_2540.JPG",
  "/enes-website/remklauwen/IMG_2288.jpg",
  "/enes-website/remklauwen/1000017877.jpg",
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

export default function RemklauwenKleuren() {
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
      Wil je jouw auto een stijlvolle en sportieve upgrade geven? Kies voor remklauwen kleuren bij Wrapmaster! Het aanpassen van de kleur van je remklauwen is een subtiele, maar krachtige manier om de uitstraling van je voertuig naar een hoger niveau te tillen. Ons team van professionals met jarenlange ervaring zorgt voor een perfect resultaat dat jouw auto laat opvallen en tegelijkertijd de remklauwen beschermt tegen slijtage.
    </p>
  );

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Waarom je Remklauwen Kleuren?</h3>
      <p className="mt-3">
        Remklauwen zijn vaak een over het hoofd gezien detail, maar kunnen een groot verschil maken in het totaalplaatje van je auto. Met professionele kleuring van de remklauwen geef je jouw voertuig een unieke, persoonlijke touch die past bij jouw stijl. Bovendien beschermt de speciale coating de remklauwen tegen vuil, roest en hitte.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van remklauwen kleuren:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Sportieve uitstraling: Geef jouw auto een dynamische look die perfect past bij sportwagens en luxe voertuigen.</li>
        <li>Personalisatie: Kies uit een breed scala aan kleuren die aansluiten bij jouw auto en smaak.</li>
        <li>Bescherming: De coating beschermt de remklauwen tegen roest, vuil en hoge temperaturen.</li>
        <li>Lange levensduur: Dankzij hoogwaardige materialen blijft de kleur langdurig mooi, zelfs bij intensief gebruik.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wrapmaster: Jouw Specialist in Remklauwen Kleuren</h3>
      <p className="mt-3">
        Bij Wrapmaster hebben we jarenlange ervaring in het professioneel kleuren van remklauwen. Ons team gebruikt alleen hoogwaardige hittebestendige coatings en zorgt voor een nauwkeurige en duurzame afwerking. Of je nu kiest voor een klassieke rode remklauw, een opvallende gele tint of een uniek metallic effect, wij garanderen een resultaat dat jouw auto laat schitteren.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Onze Remklauwkleur Opties</h3>
      <p className="mt-3">
        We bieden een breed scala aan kleuren en afwerkingen om jouw remklauwen perfect te laten aansluiten bij het design van je voertuig:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Klassieke kleuren: Rood, zwart, zilver of wit voor een tijdloze en stijlvolle look.</li>
        <li>Sportieve tinten: Geel, blauw, oranje of groen voor een opvallende en dynamische uitstraling.</li>
        <li>Speciale afwerkingen: Metallic, mat of glanzende lak voor een unieke en luxe uitstraling.</li>
        <li>Custom kleuren: Laat jouw remklauwen volledig personaliseren met een kleur naar keuze.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster staat kwaliteit altijd voorop. Ons team met jarenlange ervaring werkt met precisie en oog voor detail om ervoor te zorgen dat jouw remklauwen niet alleen mooi, maar ook duurzaam gekleurd worden. We begrijpen dat elk voertuig uniek is, en daarom bieden we maatwerk oplossingen die volledig aansluiten op jouw wensen.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van remklauwen kleuren bij Wrapmaster:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Professionele technieken: Wij gebruiken de nieuwste technologieën en tools voor een perfecte afwerking.</li>
        <li>Hoogwaardige coatings: Onze hittebestendige en slijtvaste coatings garanderen een langdurig resultaat.</li>
        <li>Snelle en efficiënte service: Wij zorgen ervoor dat je snel weer de weg op kunt met je vernieuwde remklauwen.</li>
        <li>Maatwerk: Of je nu een sportieve of subtiele look wilt, wij creëren een stijl die past bij jouw auto.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Onze Werkwijze</h3>
      <ol className="list-decimal list-inside mt-2">
        <li>Adviesgesprek: Samen bespreken we jouw wensen en helpen we je de perfecte kleur kiezen.</li>
        <li>Voorbereiding: De remklauwen worden grondig gereinigd en voorbereid om optimale hechting van de coating te garanderen.</li>
        <li>Kleuren: Met hoogwaardige hittebestendige lak wordt de kleur nauwkeurig aangebracht.</li>
        <li>Afwerking: Na het aanbrengen van de coating worden de remklauwen gecontroleerd en beschermd tegen beschadigingen.</li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Laat Jouw Remklauwen Opvallen met Wrapmaster!</h3>
      <p className="mt-3">
        Wil je jouw remklauwen een sportieve en stijlvolle upgrade geven? Kies voor de expertise van Wrapmaster en maak jouw auto uniek. Met onze professionele aanpak en hoogwaardige materialen garanderen we een resultaat dat de aandacht trekt en jarenlang meegaat. Neem vandaag nog contact met ons op voor meer informatie of een vrijblijvende offerte!
      </p>
    </>
  );

  return (
    <>
      <NextSeo
        title="Remklauwen Kleuren bij Wrapmaster - Geef Jouw Auto een Sportieve en Luxe Uitstraling"
        description="Upgrade je auto met professioneel gekleurde remklauwen van Wrapmaster. Verbeter de look en bescherming van je remmen. Ontdek onze diensten!"
        canonical="https://wrapmasterdh.nl/remklauwen-kleuren"
        openGraph={{
          url: "https://wrapmasterdh.nl/remklauwen-kleuren",
          title: "Remklauwen Kleuren bij Wrapmaster - Geef Jouw Auto een Sportieve en Luxe Uitstraling",
          description: "Upgrade je auto met professioneel gekleurde remklauwen van Wrapmaster. Verbeter de look en bescherming van je remmen. Ontdek onze diensten!",
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
            content: 'remklauwen, remklauwen kleur veranderen, remklauw coating, auto styling, remklauw verven',
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
              Remklauwen Kleuren bij Wrapmaster – Geef Jouw Auto een Sportieve en Luxe Uitstraling
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
                alt="Remklauwen Kleuren bij Wrapmaster"
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

