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
  title: "Alarmsystemen Installeren bij Wrapmaster",
  description: "Bescherm Jouw Voertuig Met de Beste Beveiliging. Professionele installatie van hoogwaardige alarmsystemen voor auto's, scooters en motoren.",
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

export default function AlarmsystemenInstalleren() {
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
      Wil je jouw auto, scooter of motor optimaal beschermen tegen diefstal? Bij Wrapmaster bieden we hoogwaardige alarmsystemen die jouw voertuig veiliger maken dan ooit. Ons team met jarenlange ervaring zorgt voor een professionele installatie, zodat jij met een gerust hart kunt parkeren, waar je ook bent.
    </p>
  );

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Waarom Kiezen voor een Alarmsysteem?</h3>
      <p className="mt-3">
        Een goed alarmsysteem is essentieel om jouw voertuig te beschermen tegen diefstal en inbraak. Moderne alarmsystemen bieden geavanceerde functies, zoals bewegingsdetectie, GPS-tracking en sirenes, die criminelen afschrikken en jou direct waarschuwen bij verdachte activiteiten.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van een alarmsysteem:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Diefstalpreventie: Alarmsystemen verminderen aanzienlijk het risico op diefstal door potentiële dieven af te schrikken.</li>
        <li>Snelle melding: Ontvang een directe waarschuwing via je telefoon bij een inbraakpoging.</li>
        <li>GPS-tracking: Vind je voertuig snel terug bij diefstal dankzij realtime lokalisatie.</li>
        <li>Gemoedsrust: Je weet dat jouw voertuig goed beveiligd is, zowel thuis als onderweg.</li>
        <li>Verzekeringskortingen: Veel verzekeraars bieden korting op de premie als jouw voertuig voorzien is van een gecertificeerd alarmsysteem.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wrapmaster: Jouw Specialist in Alarmsystemen</h3>
      <p className="mt-3">
        Bij Wrapmaster installeren we alarmsystemen van topkwaliteit die voldoen aan de strengste veiligheidsnormen. Of je nu een eenvoudige oplossing wilt of een systeem met uitgebreide functies, wij bieden een breed scala aan opties die passen bij jouw voertuig en wensen. Onze professionele installatie zorgt ervoor dat het alarmsysteem optimaal functioneert, zonder schade aan je voertuig.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Onze Alarmsysteem Opties</h3>
      <p className="mt-3">
        Wij bieden alarmsystemen die geschikt zijn voor auto's, scooters en motoren, met functies zoals:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Bewegings- en schoksensoren: Waarschuwen bij verdachte activiteiten in de buurt van jouw voertuig.</li>
        <li>Startonderbrekers: Voorkomen dat jouw voertuig gestart kan worden zonder toestemming.</li>
        <li>GPS-trackers: Realtime locatiebepaling via je smartphone of computer.</li>
        <li>Afstandsbediening en mobiele apps: Bedien en monitor je alarmsysteem eenvoudig op afstand.</li>
        <li>Certificering: Onze alarmsystemen voldoen aan de eisen van verzekeraars en bieden maximale veiligheid.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom Kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster staat kwaliteit en betrouwbaarheid centraal. Ons team heeft jarenlange ervaring in het installeren van alarmsystemen en werkt uitsluitend met gecertificeerde producten. We combineren vakmanschap met de nieuwste technologieën, zodat je kunt rekenen op een alarmsysteem dat jouw voertuig optimaal beschermt.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van Wrapmaster:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Hoogwaardige alarmsystemen: Wij werken met merken die bekend staan om hun betrouwbaarheid en prestaties.</li>
        <li>Professionele installatie: Onze specialisten zorgen voor een nauwkeurige en veilige installatie zonder schade aan jouw voertuig.</li>
        <li>Persoonlijk advies: We helpen je het juiste systeem te kiezen op basis van jouw voertuig en beveiligingsbehoeften.</li>
        <li>Snelle service: Wij zorgen ervoor dat je binnen korte tijd kunt genieten van een goed beveiligd voertuig.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Onze Werkwijze</h3>
      <ol className="list-decimal list-inside mt-2">
        <li>Adviesgesprek: We bespreken jouw wensen en adviseren over het meest geschikte alarmsysteem.</li>
        <li>Voorbereiding: We controleren jouw voertuig en bereiden het voor op een veilige installatie.</li>
        <li>Installatie: Onze professionals installeren het alarmsysteem nauwkeurig en volgens de fabrieksvoorschriften.</li>
        <li>Uitleg en demonstratie: We leggen je precies uit hoe het systeem werkt, zodat je er optimaal gebruik van kunt maken.</li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Bescherm Jouw Voertuig Met Wrapmaster Alarmsystemen!</h3>
      <p className="mt-3">
        Wil je de veiligheid van jouw voertuig naar een hoger niveau tillen? Kies voor een professioneel geïnstalleerd alarmsysteem door Wrapmaster. Neem vandaag nog contact met ons op voor meer informatie of een vrijblijvende offerte. Samen zorgen we ervoor dat jouw voertuig uitstekend beveiligd is!
      </p>
    </>
  );

  return (
    <>
      <NextSeo
        title="Alarmsystemen Installeren bij Wrapmaster - Bescherm Jouw Voertuig Met de Beste Beveiliging"
        description="Professionele installatie van hoogwaardige alarmsystemen voor auto's, scooters en motoren. Bescherm je voertuig tegen diefstal met Wrapmaster's expertise."
        canonical="https://wrapmasterdh.nl/alarmsystemen-installeren"
        openGraph={{
          url: "https://wrapmasterdh.nl/alarmsystemen-installeren",
          title: "Alarmsystemen Installeren bij Wrapmaster - Bescherm Jouw Voertuig Met de Beste Beveiliging",
          description: "Professionele installatie van hoogwaardige alarmsystemen voor auto's, scooters en motoren. Bescherm je voertuig tegen diefstal met Wrapmaster's expertise.",
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
            content: 'alarmsysteem, alarm klasse 1, alarm klasse 2, alarm klasse 3, alarm klasse 4, alarm klasse 5, voertuigbeveiliging, diefstalpreventie',
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
              Alarmsystemen Installeren bij Wrapmaster – Bescherm Jouw Voertuig Met de Beste Beveiliging
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
                alt="Alarmsystemen Installeren bij Wrapmaster"
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

