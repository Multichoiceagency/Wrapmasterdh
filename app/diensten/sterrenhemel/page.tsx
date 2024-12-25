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
  title: "Sterrenhemel Inbouwen bij Wrapmaster",
  description: "Maak van jouw Auto een Unieke Beleving - Creëer een magische sfeer met onze op maat gemaakte sterrenhemel voor jouw auto.",
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

export default function SterrenhemelInbouwen() {
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
      Wil jij jouw auto een spectaculaire en luxe uitstraling geven? Bij Wrapmaster bieden we de mogelijkheid om een prachtige sterrenhemel in te bouwen in jouw voertuig. Met honderden subtiele LED-lichtpuntjes in het interieur creëren we een magische en exclusieve sfeer, geïnspireerd door de sterrenhemels die je normaal alleen in de meest luxe auto's ziet.
    </p>
  );

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is een Sterrenhemel in de Auto?</h3>
      <p className="mt-3">
        Een sterrenhemel in de auto bestaat uit een netwerk van kleine LED-lichtjes die in de bekleding van het plafond worden geplaatst. Deze lichtjes bootsen een realistische sterrenhemel na, compleet met verschillende helderheden en zelfs de optie voor aanpasbare kleuren en twinkelende effecten. Het resultaat is een ongeëvenaarde rijervaring die niet alleen indrukwekkend is, maar ook ontspannend werkt.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor een Sterrenhemel in jouw Auto?</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Luxe uitstraling: Geef jouw voertuig een unieke en exclusieve look die gegarandeerd indruk maakt.</li>
        <li>Volledig personaliseerbaar: Kies jouw favoriete kleuren, patronen en twinkle-effecten.</li>
        <li>Ontspannende sfeer: De zachte verlichting zorgt voor een rustgevende ambiance tijdens het rijden.</li>
        <li>Uniek ontwerp: Elk sterrenhemelproject wordt volledig op maat gemaakt en aangepast aan jouw wensen.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wrapmaster: Jouw Specialist in Sterrenhemels</h3>
      <p className="mt-3">
        Bij Wrapmaster mag je rekenen op vakmanschap en precisie. Ons team van professionals met jarenlange ervaring zorgt ervoor dat elke sterrenhemel perfect wordt ingebouwd, zonder schade aan jouw voertuig. We werken met hoogwaardige materialen en LED-technologie om een verbluffend en duurzaam resultaat te garanderen.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Voordelen van een Sterrenhemel door Wrapmaster</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Hoogwaardige afwerking: Ons ervaren team zorgt voor een naadloze installatie waarbij de originele bekleding intact blijft.</li>
        <li>Maatwerk: Van kleurkeuze tot patroonontwerp, wij creëren een sterrenhemel die volledig bij jouw stijl past.</li>
        <li>Geavanceerde technologie: Onze systemen zijn energiezuinig en kunnen worden bediend via een afstandsbediening of smartphone-app.</li>
        <li>Lange levensduur: Wij gebruiken premium LED-lichtjes die jaren meegaan zonder helderheidsverlies.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Hoe werkt het Inbouwen van een Sterrenhemel?</h3>
      <ol className="list-decimal list-inside mt-2">
        <li>Adviesgesprek: We bespreken jouw wensen en geven advies over de mogelijkheden.</li>
        <li>Ontwerp en voorbereiding: Samen creëren we een uniek sterrenhemelontwerp, inclusief kleur- en effectopties.</li>
        <li>Installatie: Ons team installeert de LED-lichtjes nauwkeurig in het plafond van jouw auto, met oog voor detail.</li>
        <li>Afwerking en controle: We testen het systeem en zorgen voor een perfect afgewerkt interieur.</li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster begrijpen we dat jouw auto meer is dan alleen een vervoermiddel. Wij combineren passie voor innovatie met een scherp oog voor detail om een sterrenhemel te creëren die jouw auto echt uniek maakt. Met onze focus op kwaliteit en klanttevredenheid zorgen we ervoor dat jouw verwachtingen worden overtroffen.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Transformeer jouw Auto met een Wrapmaster Sterrenhemel!</h3>
      <p className="mt-3">
        Wil jij een sterrenhemel laten inbouwen en jouw auto een luxe uitstraling geven? Kies voor Wrapmaster en geniet van een interieur dat letterlijk straalt. Neem vandaag nog contact met ons op voor meer informatie of een vrijblijvende offerte. Samen maken we jouw droom werkelijkheid!
      </p>
    </>
  );

  return (
    <>
      <NextSeo
        title="Sterrenhemel Inbouwen bij Wrapmaster - Maak van jouw Auto een Unieke Beleving"
        description="Creëer een magische sfeer in jouw auto met een op maat gemaakte sterrenhemel door Wrapmaster. Ontdek onze luxe LED-verlichting oplossingen voor auto-interieurs."
        canonical="https://wrapmasterdh.nl/sterrenhemel-inbouwen"
        openGraph={{
          url: "https://wrapmasterdh.nl/sterrenhemel-inbouwen",
          title: "Sterrenhemel Inbouwen bij Wrapmaster - Maak van jouw Auto een Unieke Beleving",
          description: "Creëer een magische sfeer in jouw auto met een op maat gemaakte sterrenhemel door Wrapmaster. Ontdek onze luxe LED-verlichting oplossingen voor auto-interieurs.",
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
            content: 'sterrenhemel inbouwen, auto sterrenhemel, LED-verlichting auto, luxe auto-interieur, custom car lighting',
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
              Sterrenhemel Inbouwen bij Wrapmaster – Maak van jouw Auto een Unieke Beleving
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
                alt="Sterrenhemel Inbouwen bij Wrapmaster"
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

