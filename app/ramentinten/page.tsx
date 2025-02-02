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
import ImageCarousel from '@/components/ImageCarousel';

const socialMedia = {
  instagram: 'https://www.instagram.com/wrapmasterdh/',
  tiktok: 'https://www.tiktok.com/@wrapmasterdh',
  whatsapp: 'https://wa.me/31638718893',
  facebook: 'https://www.facebook.com/WrapmasterDH',
};

const dienstData = {
  title: "RAMEN TINTEN",
  description: "",
  heroImage: "/enes-website/ramentint/35423.jpg",
  contentImage1: "/enes-website/ramentint/RSQ3-ramentint.jpg",
  contentImage2: "/enes-website/ramentint/174585ba-079e-4bc9-a934-3397441542e3.jpg",
  contentImage3: "/enes-website/ramentint/IMG_2906.JPG",
};

const sliderImages = [
  "/enes-website/ramentint/41144.jpg",
  "/enes-website/ramentint/47458.jpg",
  "/enes-website/ramentint/47254.jpg",
  "/enes-website/ramentint/43106.jpg",
];

const reels = [
  {
    id: 1,
    video: "/video/IMG_1782.mov",
    likes: "65.2k",
    comments: "195",
  },
];

export default function Ramentinten() {
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
      Ben je op zoek naar een manier om jouw auto meer privacy te geven en tegelijkertijd een stijlvolle en luxueuze uitstraling te creëren? Kies voor ramentinten bij Wrapmaster! Met onze hoogwaardige tintfolies profiteer je niet alleen van een exclusieve look, maar ook van praktische voordelen zoals zonwering en bescherming tegen UV-straling. Ons team met jarenlange ervaring staat garant voor een naadloze afwerking en duurzaam resultaat.
    </p>
  );

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is Ramentinten?</h3>
      <p className="mt-3">
        Ramentinten houdt in dat de autoruiten worden voorzien van een speciale folie die een donkere tint aan het glas geeft. Deze folie is ontworpen om het zicht naar binnen te verminderen, de warmte in de auto te reguleren en schadelijke UV-stralen te blokkeren. Het resultaat is niet alleen esthetisch aantrekkelijk, maar ook functioneel.
      </p>
      <p className="mt-3">
        Daarnaast biedt Wrapmaster ook de mogelijkheid om de voorruit te tinten met chameleon tint, een populaire keuze voor een unieke en stijlvolle uitstraling. Met een breed scala aan kleuren kun je de perfecte tint kiezen die past bij jouw persoonlijke smaak. Chameleon tint verandert subtiel van kleur afhankelijk van de hoek en lichtinval, wat een indrukwekkend en dynamisch effect geeft aan jouw voertuig.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Ramentinten?</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Privacy: Verminder inkijk en geniet van meer persoonlijke ruimte in jouw auto.</li>
        <li>Stijlvolle uitstraling: Een getinte ruit geeft je auto een exclusieve, moderne look.</li>
        <li>Warmtewerend: De folie helpt de temperatuur in je auto te reguleren door zonnewarmte te verminderen.</li>
        <li>UV-bescherming: Bescherm jezelf en je interieur tegen schadelijke UV-stralen die verkleuring en schade veroorzaken.</li>
        <li>Chameleon tint: Creëer een unieke uitstraling met een voorruit die van kleur verandert afhankelijk van licht en hoek.</li>
        <li>Veiligheid: In geval van breuk houdt de folie het glas bij elkaar, waardoor de kans op verwondingen kleiner wordt.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Ramentinten bij Wrapmaster</h3>
      <p className="mt-3">
        Bij Wrapmaster bieden we professionele ramentinten die voldoen aan de strengste kwaliteitseisen. Of je nu kiest voor een lichte tint, een donkerdere variant of een opvallende chameleon tint, wij hebben een breed scala aan opties om aan jouw wensen te voldoen. Met onze jarenlange ervaring garanderen wij een perfecte installatie zonder luchtbellen of zichtbare naden.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Voordelen van Ramentinten door Wrapmaster</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Premium tintfolies: Wij gebruiken alleen folies van topkwaliteit die duurzaam, krasbestendig en UV-bestendig zijn.</li>
        <li>Nauwkeurige afwerking: Onze professionals zorgen voor een strakke en naadloze installatie.</li>
        <li>Ruime keuze: Kies uit verschillende tinten, van subtiel donker tot volledig verduisterd, en chameleon tinten voor een unieke stijl.</li>
        <li>Wettelijke normen: Onze tintfolies voldoen aan de Nederlandse regelgeving voor autoruiten, zodat je altijd veilig de weg op kunt.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Ramen die Wij Kunnen Tinten</h3>
      <p className="mt-3">
        Bij Wrapmaster kunnen we vrijwel alle ruiten van jouw voertuig tinten, waaronder:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Zijruiten</li>
        <li>Achterruit</li>
        <li>Kleine driehoekige ramen</li>
        <li>Voorruit: Met chameleon tint in diverse kleuropties, voor een opvallende en unieke look</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster combineren we vakmanschap met de nieuwste technologie en hoogwaardige materialen. Ons ervaren team met jarenlange ervaring zorgt ervoor dat elke tintfolie met precisie wordt aangebracht, zodat je niet alleen geniet van een stijlvolle auto, maar ook van een duurzame oplossing. Jouw tevredenheid en veiligheid staan altijd centraal.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Onze Werkwijze</h3>
      <ol className="list-decimal list-inside mt-2">
        <li>Adviesgesprek: Samen bespreken we jouw wensen en adviseren we over de juiste tint en folie.</li>
        <li>Voorbereiding: De ruiten worden grondig gereinigd voor een optimale hechting van de folie.</li>
        <li>Installatie: Onze professionals brengen de folie nauwkeurig en zonder luchtbellen aan.</li>
        <li>Eindcontrole: We testen en inspecteren de installatie om een perfect resultaat te garanderen.</li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Maak Jouw Auto Uniek met Wrapmaster Ramentinten!</h3>
      <p className="mt-3">
        Wil jij jouw auto voorzien van stijlvolle ramentinten die privacy, bescherming en esthetiek combineren? Of ben je op zoek naar een unieke chameleon tint voor jouw voorruit? Bij Wrapmaster ben je verzekerd van topkwaliteit en een afwerking waar je trots op kunt zijn. Neem vandaag nog contact met ons op voor meer informatie of een vrijblijvende offerte. Samen zorgen we ervoor dat jouw auto er fantastisch uitziet én optimaal beschermd is!
      </p>
    </>
  );

  return (
    <>
      <NextSeo
        title="Ramentinten bij Wrapmaster - Stijl, Privacy en Bescherming in Één"
        description="Upgrade je auto met professionele ramentinten en chameleon folie van Wrapmaster. Verbeter privacy, stijl en UV-bescherming. Ontdek onze diensten!"
        canonical="https://wrapmasterdh.nl/ramentinten"
        openGraph={{
          url: "https://wrapmasterdh.nl/ramentinten",
          title: "Ramentinten bij Wrapmaster - Stijl, Privacy en Bescherming in Één",
          description: "Upgrade je auto met professionele ramentinten en chameleon folie van Wrapmaster. Verbeter privacy, stijl en UV-bescherming. Ontdek onze diensten!",
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
            content: 'ramen tinten, raamtint, raam folie, chameleon folie, auto privacy, UV-bescherming',
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
          <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-20">
            <div className="text-left text-white px-4 max-w-4xl">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 py-5 text-center">{dienstData.title}</h1>
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
              Ramentinten bij Wrapmaster – Stijl, Privacy en Bescherming in Één
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
                alt="Ramentinten bij Wrapmaster"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 70vw"
                priority
              />
            </div>
          </div>
        </section>

        <ImageCarousel images={sliderImages} />

        {/* Two Images Section */}
        <section className="max-w-full mx-auto mt-16 md:mt-44">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[700px] sm:h-[800px]">
              <Image
                src={dienstData.contentImage3}
                alt="Content Image 1"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative h-[700px] sm:h-[800px]">
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
  <div className="flex justify-between gap-2 px-4">
    {reels.slice(0, 2).map((reel) => (
      <div
        key={reel.id}
        className="relative w-screen max-w-[100%] max-h-[500px] sm:h-[760px] bg-black rounded-lg overflow-hidden"
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
        <div className="relative inset-0 flex flex-col justify-between p-4">
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
            <div className="flex items-center justify-between text-sm"></div>
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

