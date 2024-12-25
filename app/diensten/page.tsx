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
  { id: 5, titel: "Alloygater", subtitel: "Velgbescherming op maat", afbeelding: "/enes-website/alloygator/AG-15-e1539160696939-300x300.jpg", slug: "alloygater" },
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
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/enes-website/wallpaper/lambo-urus-satin-black.jpg"
          alt="Wrapmaster Hero Image"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font mb-4">Onze Diensten</h1>
          <p className="text-xl md:text-2xl">Ontdek onze professionele auto customization services</p>
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
              <Link key={dienst.id} href={`/diensten/${dienst.slug}`}>
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
        "url": "https://www.wrapmaster.nl",
        "telephone": "+31XXXXXXXXX",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Straatnaam 123",
          "addressLocality": "Stad",
          "postalCode": "1234 AB",
          "addressCountry": "NL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 52.3676,
          "longitude": 4.9041
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
            "closes": "17:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/wrapmaster",
          "https://www.instagram.com/wrapmaster"
        ]
      })} } />
    </>
  );
};

export default DienstenPage;

