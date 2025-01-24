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
  title: "Scooter en Motor Wraps bij Wrapmaster",
  description: "Maak van Jouw Tweewieler een Blikvanger met onze professionele wraps. Personaliseer en bescherm je scooter of motor.",
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

export default function ScooterEnMotorWraps() {
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
      Wil je jouw scooter of motorfiets een compleet nieuwe look geven? Met een wrap op maat van Wrapmaster kun je jouw tweewieler personaliseren zoals jij dat wilt. Of je nu kiest voor een subtiele stijl of een opvallend design, ons team met jarenlange ervaring zorgt voor een hoogwaardige afwerking die zowel stijlvol als duurzaam is.
    </p>
  );

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is een Scooter of Motor Wrap?</h3>
      <p className="mt-3">
        Een scooter of motor wrap is een hoogwaardige folie die wordt aangebracht op de carrosserie van je tweewieler. Deze wrap beschermt niet alleen de originele lak tegen beschadigingen, maar biedt ook de mogelijkheid om het uiterlijk volledig te transformeren. Dankzij de uitgebreide keuzemogelijkheden in kleuren, patronen en afwerkingen kun je jouw scooter of motorfiets echt uniek maken.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor een Scooter of Motor Wrap?</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Personalisatie: Creëer een unieke look die perfect aansluit bij jouw stijl.</li>
        <li>Bescherming: Bescherm de originele lak tegen krassen, steenslag en weersinvloeden.</li>
        <li>Flexibiliteit: Een wrap kan eenvoudig worden verwijderd of vervangen zonder schade aan de lak.</li>
        <li>Betaalbaar alternatief: Een wrap is een voordelig alternatief voor een volledige spuitbeurt.</li>
        <li>Kleuren en designs: Kies uit een breed scala aan kleuren, patronen en speciale effecten.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wrap Opties voor Scooters en Motoren</h3>
      <p className="mt-3">
        Bij Wrapmaster bieden we talloze mogelijkheden om jouw tweewieler te personaliseren. Populaire opties zijn:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Effen kleuren: Voor een strakke, minimalistische look.</li>
        <li>Patronen: Kies voor opvallende graphics of unieke prints zoals camouflage of carbon.</li>
        <li>Speciale afwerkingen: Metallic, mat, satijn, chroom of zelfs een chameleon-effect.</li>
        <li>Reclame wraps: Ideaal voor bedrijven die hun merk willen promoten op een scooter of motorfiets.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster combineren we passie, vakmanschap en hoogwaardige materialen om jouw scooter of motorfiets naar een hoger niveau te tillen. Ons team heeft jarenlange ervaring met het wrappen van tweewielers, wat betekent dat we zelfs de meest complexe ontwerpen en vormen kunnen realiseren. Je kunt rekenen op een strakke, duurzame afwerking die indruk maakt op de weg.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van Wrapmaster:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Hoogwaardige materialen: Wij gebruiken premium folies die bestand zijn tegen slijtage, UV-straling en weersinvloeden.</li>
        <li>Perfecte afwerking: Onze wraps worden nauwkeurig aangebracht zonder luchtbellen of zichtbare naden.</li>
        <li>Maatwerk: Elk ontwerp wordt volledig aangepast aan jouw wensen en de vormen van jouw scooter of motor.</li>
        <li>Snelle service: Wij zorgen ervoor dat jouw tweewieler snel weer de weg op kan met een frisse nieuwe look.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Onze Werkwijze</h3>
      <ol className="list-decimal list-inside mt-2">
        <li>Adviesgesprek: We bespreken jouw wensen en ideeën, en adviseren over de beste wrapopties voor jouw tweewieler.</li>
        <li>Ontwerp: Samen maken we een uniek ontwerp dat aansluit bij jouw stijl en voorkeuren.</li>
        <li>Voorbereiding: De scooter of motor wordt grondig gereinigd en voorbereid voor een optimale hechting van de folie.</li>
        <li>Installatie: Onze professionals brengen de wrap nauwkeurig aan voor een naadloze en duurzame afwerking.</li>
        <li>Aflevering: Na een laatste controle leveren we jouw tweewieler af, klaar om te schitteren op de weg.</li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Transformeer Jouw Scooter of Motor met Wrapmaster!</h3>
      <p className="mt-3">
        Wil jij jouw scooter of motorfiets onderscheiden van de rest? Kies voor een professionele wrap van Wrapmaster en geef jouw tweewieler een unieke uitstraling. Neem vandaag nog contact met ons op voor meer informatie of een vrijblijvende offerte. Samen zorgen we ervoor dat jouw tweewieler een echte blikvanger wordt!
      </p>
    </>
  );

  return (
    <>
      <NextSeo
        title="Scooter en Motor Wraps bij Wrapmaster - Maak van Jouw Tweewieler een Blikvanger"
        description="Personaliseer en bescherm je scooter of motor met professionele wraps van Wrapmaster. Creëer een unieke look die past bij jouw stijl. Ontdek onze diensten!"
        canonical="https://wrapmasterdh.nl/scooter-en-motor-wraps"
        openGraph={{
          url: "https://wrapmasterdh.nl/scooter-en-motor-wraps",
          title: "Scooter en Motor Wraps bij Wrapmaster - Maak van Jouw Tweewieler een Blikvanger",
          description: "Personaliseer en bescherm je scooter of motor met professionele wraps van Wrapmaster. Creëer een unieke look die past bij jouw stijl. Ontdek onze diensten!",
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
            content: 'scooter en motorwrap, scooterwrap, motorwrap, tweewieler styling, scooter personalisatie, motor customization',
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
              Scooter en Motor Wraps bij Wrapmaster – Maak van Jouw Tweewieler een Blikvanger
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
                alt="Scooter en Motor Wraps bij Wrapmaster"
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

