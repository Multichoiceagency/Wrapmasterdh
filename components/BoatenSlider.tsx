'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import Head from 'next/head';

interface BoatDesign {
  id: number;
  titel: string;
  subtitel: string;
  afbeelding: string;
  slug: string;
}

const boatDesigns: BoatDesign[] = [
  { id: 1, titel: "Luxe Jacht Ontwerp", subtitel: "Elegantie op het water", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_3.png", slug: "luxe-jacht" },
  { id: 2, titel: "Speedboot Styling", subtitel: "Snelheid en stijl gecombineerd", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_4.png", slug: "speedboot" },
  { id: 3, titel: "Zeilboot Innovatie", subtitel: "Moderne zeilprestaties", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_5.png", slug: "zeilboot" },
  { id: 4, titel: "Catamaran Concept", subtitel: "Ruimte en stabiliteit", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_7.png", slug: "catamaran" },
  { id: 5, titel: "Vissersboot Upgrade", subtitel: "Functionaliteit meets comfort", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_8.png", slug: "vissersboot" },
  { id: 6, titel: "Woonboot Renovatie", subtitel: "Drijvend woongenot", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_9.png", slug: "woonboot" },
];

const BoatenSlider: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let flickityInstance: any = null;

    const initFlickity = async () => {
      if (typeof window !== 'undefined' && carouselRef.current) {
        const Flickity = (await import('flickity')).default;
        flickityInstance = new Flickity(carouselRef.current, {
          cellAlign: 'left',
          contain: true,
          wrapAround: true,
          pageDots: true,
          prevNextButtons: true,
          freeScroll: false,
          percentPosition: false,
          imagesLoaded: true,
          autoPlay: 3000,
          pauseAutoPlayOnHover: true,
          draggable: true,
        });
      }
    };

    initFlickity();

    return () => {
      if (flickityInstance && typeof flickityInstance.destroy === 'function') {
        flickityInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Bootontwerpen - BoatMaster | Specialist in Bootdesign en Customization</title>
        <meta name="description" content="Ontdek onze uitgebreide reeks van professionele bootontwerpen, waaronder luxe jachten, speedboten, zeilboten en meer. BoatMaster is uw specialist voor alle boot customization behoeften." />
        <meta name="keywords" content="bootontwerp, jachtdesign, speedboot styling, zeilboot innovatie, catamaran concept, vissersboot upgrade, woonboot renovatie" />
        <link rel="canonical" href="https://www.boatmaster.nl/ontwerpen" />
      </Head>
      <section className="py-12 h-100 overflow-hidden bg-white">
        <div className="text-left mb-12 ml-12">
          <h1 className="text-2xl font-medium text-gray-800">ONZE BOOTONTWERPEN</h1>
          <p className="text-l text-gray-600 mt-2">Gespecialiseerd in bootdesign en customization</p>
        </div>

        <div className="carousel-container overflow-hidden">
          <div ref={carouselRef} className="carousel">
            {boatDesigns.map((design) => (
              <div
                key={design.id}
                className="carousel-cell mr-2 w-full sm:w-1/2 lg:w-1/3"
              >
                <Link href={`/ontwerpen/${design.slug}`}>
                  <Card className="w-full h-[400px] flex flex-col relative overflow-hidden">
                    <div className="relative h-96 w-full">
                      <Image
                        src={design.afbeelding}
                        alt={design.titel}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardContent className="flex flex-col justify-end flex-grow">
                      <div>
                        <h2 className="text-l mt-5 font-semibold">{design.titel}</h2>
                        <p className="text-sm text-gray-500">{design.subtitel}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BoatMaster",
        "description": "Specialist in bootdesign en customization",
        "url": "https://www.boatmaster.nl",
        "telephone": "+31XXXXXXXXX",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Havenstraat 123",
          "addressLocality": "Amsterdam",
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
          "https://www.facebook.com/boatmaster",
          "https://www.instagram.com/boatmaster"
        ]
      })} } />
    </>
  );
};

export default BoatenSlider;

