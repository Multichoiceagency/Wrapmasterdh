'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import Head from 'next/head';

interface Dienst {
  id: number;
  titel: string;
  subtitel: string;
  afbeelding: string;
  slug: string;
}

const diensten: Dienst[] = [
  { id: 17, titel: "Carwrapping", subtitel: "Complete voertuigtransformatie", afbeelding: "/enes-website/wallpaper/lambo-urus-satin-black.jpg", slug: "carwrapping" },
  { id: 16, titel: "PPF (Paint Protection Film)", subtitel: "Onzichtbare lakbescherming", afbeelding: "/enes-website/ppf/Maasvlakte-9.jpg", slug: "ppf" },
  { id: 15, titel: "Ambient Light", subtitel: "Sfeervolle interieurverlichting", afbeelding: "/enes-website/ambient-light/Mercedez-Benz AMG GT63_DONE_ (18 of 41).jpg", slug: "ambient-light" },
  { id: 14, titel: "Chrome Delete", subtitel: "Moderne look zonder chroom", afbeelding: "/enes-website/chrome-delete/chrome-delete.jpg", slug: "chrome-delete" },
  { id: 13, titel: "Detailing", subtitel: "Professionele autodetailing", afbeelding: "/enes-website/detailing/Brabus 800 (9 of 20).jpg", slug: "detailing" },
  { id: 12, titel: "Sterrenhemel", subtitel: "Luxueuze interieurverlichting", afbeelding: "/enes-website/ambient-light/Project- Ram-7.jpg", slug: "sterrenhemel" },
  { id: 11, titel: "Gordel", subtitel: "Veiligheid met stijl", afbeelding: "/enes-website/gordelkleur/IMG_1750.JPG", slug: "gordelkleur-veranderen" },
  { id: 10, titel: "Lampentinten", subtitel: "Stijlvolle lampaanpassingen", afbeelding: "/enes-website/lampen-tinten/lampentinten.jpg", slug: "lampentinten" },
  { id: 9, titel: "Ramentinten", subtitel: "Privacy en UV-bescherming", afbeelding: "/enes-website/ramentint/RSQ3-ramentint1.jpg", slug: "ramentinten" },
  { id: 8, titel: "Reclame/Design", subtitel: "Opvallende voertuigreclame", afbeelding: "/enes-website/reclame/_GLA5951.jpg", slug: "reclame-en-design" },
  { id: 7, titel: "Remklauwen", subtitel: "Customization van remklauwen", afbeelding: "/enes-website/remklauwen/Brabus 800 (5 of 7).jpg", slug: "remklauwen" },
  { id: 6, titel: "Velgen Poedercoaten", subtitel: "Duurzame velgafwerking", afbeelding: "/enes-website/velgen/WM-21.jpg", slug: "velgen-poedercoaten" },
  { id: 5, titel: "Alloygator", subtitel: "Velgbescherming op maat", afbeelding: "/enes-website/alloygator/AG-15-e1539160696939-300x300.jpg", slug: "alloygator" },
  { id: 4, titel: "Scooter/Motor Wrap", subtitel: "Stijlvolle wraps voor tweewielers", afbeelding: "/enes-website/memo/IMG_2501.JPG", slug: "scooter-motor-wrap" },
  { id: 3, titel: "Security Alarm", subtitel: "Geavanceerde beveiligingssystemen", afbeelding: "/enes-website/memo-map/510x1000x0_proefdruk-alarm-stickers-0.jpg", slug: "alarmbeveiliging-auto" },
  { id: 2, titel: "Bodykit", subtitel: "Custom bodykit installatie", afbeelding: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_6.jpg", slug: "bodykit" },
  { id: 1, titel: "Folie Verwijderen", subtitel: "Professionele folieverwijdering", afbeelding: "/enes-website/wrapfolie/GLA_4446-scaled.jpg", slug: "folie-verwijderen" },
];

const DienstenPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Onze Diensten - Wrapmaster | Specialist in Carwrapping en Auto Customization</title>
        <meta name="description" content="Ontdek onze uitgebreide reeks van professionele autodiensten, waaronder carwrapping, PPF, detailing, en meer. Wrapmaster is uw specialist voor alle auto customization behoeften." />
        <meta name="keywords" content="carwrapping, PPF, detailing, bodykit, auto customization, folie verwijderen, security alarm, velgen poedercoaten, ramentinten, chrome delete" />
        <link rel="canonical" href="https://www.wrapmasterdh.nl/diensten" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[100vh] sm:h-100vh">
      <Image
          src="/enes-website/wallpaper/lambo-urus-satin-black.jpg"
          alt="Wrapmaster Hero afbeelding"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-10 sm:pb-20">
            <div className="text-left text-white px-4 max-w-4xl">
              <h1 className="text-3xl sm:text-6xl mb-2 py-5 text-center">Onze diensten</h1>
              <p className="text-base sm:text-xl mb-6 px-16 text-center">Proffessionele carwrapping diensten</p>
              <div className='flex justify-center'>
            <Link 
              href="/offerte-aanvragen"
              className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
            >
              Offerte aanvragen
            </Link>
            </div>
            </div>
          </div>
        </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-left mb-12">
            <h2 className="text-3xl font text-gray-800">ONZE DIENSTEN</h2>
            <p className="text-xl text-gray-600 mt-2">Gespecialiseerd in carwrapping en auto customization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diensten.map((dienst) => (
              <Link key={dienst.id} href={`/${dienst.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={dienst.afbeelding}
                      alt={dienst.titel}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{dienst.titel}</h3>
                    <p className="text-gray-600">{dienst.subtitel}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Wrapmaster",
        "description": "Specialist in carwrapping en auto customization",
        "url": "https://www.wrapmasterdh.nl",
        "telephone": "0702250721",
        "address": {
          "@type": "PostallAdress",
          "streetAddress": "Westvlietweg 72L",
          "addressLocality": "Den Haag",
          "postalCode": "2495AA",
          "addressCountry": "NL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 52.06350716913658,
          "longitude": 4.364688783795313
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/WrapmasterDH",
          "https://www.instagram.com/wrapmasterdh"
        ]
      })} } />
    </>
  );
};

export default DienstenPage;

