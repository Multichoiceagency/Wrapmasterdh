'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import OnzeDiensten from '@/app/components/Diensten/Diensten';
import { faInstagram, faTiktok, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageCarousel from '@/components/ImageCarousel';

const NextSeoClient = dynamic(
  () => import('next-seo').then((mod) => mod.NextSeo),
  { ssr: false }
);

const socialMedia = {
  instagram: 'https://www.instagram.com/wrapmasterdh/',
  tiktok: 'https://www.tiktok.com/@wrapmasterdh',
  whatsapp: 'https://wa.me/31638718893',
  facebook: 'https://www.facebook.com/WrapmasterDH',
};

const dienstData = {
  title: "VELGEN POEDERCOATEN",
  description: "",
  heroImage: "/enes-website/velgen-poedercoaten/Maasvlakte-12.jpg",
  contentImage1: "/enes-website/velgen-poedercoaten/Mercedez-Benz AMG GT63_DONE_ (30 of 41)-min.jpg",
  contentImage2: "/enes-website/velgen-poedercoaten/RSQ3-15-min.jpg",
  contentImage3: "/enes-website/velgen-poedercoaten/Maasvlakte-12.jpg",
};

const sliderImages = [
  "/enes-website/velgen-poedercoaten/WM-21-min.jpg",
  "/enes-website/velgen-poedercoaten/BlndrAgency_ (21 of 34)-min.jpg",
  "/enes-website/velgen-poedercoaten/Mercedez-Benz AMG GT63_DONE_ (26 of 41)-min.jpg",
  "/enes-website/velgen-poedercoaten/1000019599-min.jpg",
];

export default function VelgenPoedercoaten() {
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
      Wil je jouw velgen een frisse, stijlvolle uitstraling geven én beschermen tegen slijtage en weersinvloeden? Kies voor velgen poedercoaten bij Wrapmaster! Met onze hoogwaardige poedercoatservice geven we jouw velgen een nieuwe look die jarenlang meegaat. Ons team met jarenlange ervaring garandeert een perfecte afwerking en duurzaamheid.
    </p>
  );

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is Velgen Poedercoaten?</h3>
      <p className="mt-3">
        Poedercoaten is een proces waarbij een elektrostatische poederlaag op de velgen wordt aangebracht en vervolgens wordt uitgehard in een oven. Het resultaat is een gladde, slijtvaste en weerbestendige coating die veel duurzamer is dan traditionele lak. Bovendien biedt poedercoaten een breed scala aan kleuren en afwerkingen, waardoor je jouw velgen volledig kunt personaliseren.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom Velgen Poedercoaten?</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Luxe uitstraling: Geef jouw auto een premium look met velgen die perfect passen bij jouw stijl.</li>
        <li>Duurzaamheid: De poedercoating biedt een uitstekende bescherming tegen steenslag, krassen en roest.</li>
        <li>Kleuropties: Kies uit een breed scala aan kleuren en afwerkingen, zoals metallic, mat, glanzend of satijn.</li>
        <li>Kostenbesparend: Poedercoaten is een betaalbaar alternatief voor het vervangen van velgen en verlengt hun levensduur aanzienlijk.</li>
        <li>Milieuvriendelijk: Poedercoating is een milieuvriendelijke optie zonder oplosmiddelen of schadelijke chemicaliën.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wrapmaster: Jouw Specialist in Velgen Poedercoaten</h3>
      <p className="mt-3">
        Bij Wrapmaster beschikken we over de expertise en apparatuur om jouw velgen perfect te poedercoaten. Van grondige voorbereiding tot een hoogwaardige afwerking, ons team met jarenlange ervaring zorgt ervoor dat jouw velgen er weer als nieuw uitzien. Of je nu kiest voor een klassieke kleur of een opvallend design, wij leveren altijd maatwerk dat voldoet aan jouw wensen.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Onze Velgen Poedercoat Opties</h3>
      <p className="mt-3">
        Bij Wrapmaster bieden we een breed scala aan kleuren en afwerkingen om jouw velgen te personaliseren:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Kleuren: Klassiek zwart, zilver, wit of kies voor opvallende tinten zoals rood, blauw of goud.</li>
        <li>Afwerkingen: Mat, glanzend, metallic, satijn of speciale effecten zoals parelmoer.</li>
        <li>Custom designs: Laat jouw velgen opvallen met unieke patronen of combinaties van kleuren.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom Kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster combineren we vakmanschap met hoogwaardige materialen om jou de beste service te bieden. Ons team werkt met precisie en oog voor detail, zodat je altijd tevreden bent met het eindresultaat. Jouw velgen krijgen niet alleen een nieuwe look, maar zijn ook beter beschermd tegen slijtage en de elementen.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van velgen poedercoaten bij Wrapmaster:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Hoogwaardige afwerking: Wij garanderen een strakke, egale coating zonder imperfecties.</li>
        <li>Duurzame materialen: Onze poedercoatings zijn hittebestendig, slijtvast en kleurvast.</li>
        <li>Persoonlijke service: Samen met jou kiezen we de perfecte kleur en afwerking die past bij jouw auto.</li>
        <li>Snelle doorlooptijd: Wij zorgen ervoor dat je jouw auto snel weer in topconditie terugkrijgt.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Onze Werkwijze</h3>
      <ol className="list-decimal list-inside mt-2">
        <li>Adviesgesprek: We bespreken jouw wensen en adviseren je over de mogelijkheden qua kleuren en afwerkingen.</li>
        <li>Demontage en voorbereiding: De velgen worden gedemonteerd, gereinigd en straalbehandeld om oude laklagen en onzuiverheden te verwijderen.</li>
        <li>Poedercoaten: De poedercoating wordt zorgvuldig aangebracht en uitgehard in een oven voor een duurzame afwerking.</li>
        <li>Controle en montage: Na een strenge kwaliteitscontrole worden de velgen weer gemonteerd en klaargemaakt voor gebruik.</li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Geef Jouw Auto een Upgrade met Wrapmaster Velgen Poedercoaten!</h3>
      <p className="mt-3">
        Zijn jouw velgen toe aan een nieuwe look of extra bescherming? Kies voor velgen poedercoaten bij Wrapmaster en geniet van een professioneel resultaat dat jouw auto laat stralen. Neem vandaag nog contact met ons op voor meer informatie of een vrijblijvende offerte. Samen zorgen we ervoor dat jouw velgen er beter uitzien dan ooit tevoren!
      </p>
    </>
  );

  return (
    <>
      <NextSeoClient
        title="Velgen Poedercoaten bij Wrapmaster - Geef Jouw Auto een Luxe en Duurzame Upgrade"
        description="Upgrade je auto met professioneel gepoedercoate velgen van Wrapmaster. Verbeter de look en bescherming van je velgen. Ontdek onze diensten!"
        canonical="https://wrapmasterdh.nl/velgen-poedercoaten"
        openGraph={{
          url: "https://wrapmasterdh.nl/velgen-poedercoaten",
          title: "Velgen Poedercoaten bij Wrapmaster - Geef Jouw Auto een Luxe en Duurzame Upgrade",
          description: "Upgrade je auto met professioneel gepoedercoate velgen van Wrapmaster. Verbeter de look en bescherming van je velgen. Ontdek onze diensten!",
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
            content: 'velgen poedercoaten, velgen reperatie, stoeprand schade, velgen coating, auto styling',
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
              Velgen Poedercoaten bij Wrapmaster – Geef Jouw Auto een Luxe en Duurzame Upgrade
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
                alt="Velgen Poedercoaten bij Wrapmaster"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
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

        {/* Wrapmaster Services Section */}
        <section className="py-9">
          <OnzeDiensten />
        </section>
      </main>
    </>
  );
}

