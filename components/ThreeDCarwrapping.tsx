'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import Head from 'next/head';

interface ThreeDCarwrapping {
  id: number;
  titel: string;
  subtitel: string;
  afbeelding: string;
  slug: string;
}

const carWrapDesigns: ThreeDCarwrapping[] = [
  { id: 1, titel: "Matte Zwart Wrap", subtitel: "Elegante en stijlvolle finish", afbeelding: "/enes-website/memo-map/design/changer_1.png", slug: "matte-zwart" },
  { id: 2, titel: "Glanzend Chroom Wrap", subtitel: "Opvallende en luxueuze uitstraling", afbeelding: "/enes-website/memo-map/design/changer_3.png", slug: "glanzend-chroom" },
  { id: 3, titel: "Camouflage Wrap", subtitel: "Uniek en avontuurlijk design", afbeelding: "/enes-website/memo-map/design/changer_4.png", slug: "camouflage" },
  { id: 4, titel: "Kleurverloop Wrap", subtitel: "Vloeiende en dynamische look", afbeelding: "/enes-website/memo-map/design/changer_5.png", slug: "kleurverloop" },
  { id: 5, titel: "Carbon Fiber Wrap", subtitel: "Sportieve en high-tech uitstraling", afbeelding: "/enes-website/memo-map/design/changer_6.png", slug: "carbon-fiber" },
  { id: 6, titel: "Holografische Wrap", subtitel: "Futuristische en opvallende stijl", afbeelding: "/enes-website/memo-map/design/changer_7.png", slug: "holografisch" },
  { id: 4, titel: "Kleurverloop Wrap", subtitel: "Vloeiende en dynamische look", afbeelding: "/enes-website/memo-map/design/changer_9.png", slug: "kleurverloop" },
  { id: 5, titel: "Carbon Fiber Wrap", subtitel: "Sportieve en high-tech uitstraling", afbeelding: "/enes-website/memo-map/design/changer_11.png", slug: "carbon-fiber" },
  { id: 6, titel: "Holografische Wrap", subtitel: "Futuristische en opvallende stijl", afbeelding: "/enes-website/memo-map/design/changer_12.png", slug: "holografisch" },
  { id: 4, titel: "Kleurverloop Wrap", subtitel: "Vloeiende en dynamische look", afbeelding: "/enes-website/memo-map/design/changer_13.png", slug: "kleurverloop" },
  { id: 5, titel: "Carbon Fiber Wrap", subtitel: "Sportieve en high-tech uitstraling", afbeelding: "/enes-website/memo-map/design/changer_14.png", slug: "carbon-fiber" },
  { id: 6, titel: "Holografische Wrap", subtitel: "Futuristische en opvallende stijl", afbeelding: "/enes-website/memo-map/design/changer_15.png", slug: "holografisch" },
  { id: 4, titel: "Kleurverloop Wrap", subtitel: "Vloeiende en dynamische look", afbeelding: "/enes-website/memo-map/design/changer_13.png", slug: "kleurverloop" },
  { id: 5, titel: "Carbon Fiber Wrap", subtitel: "Sportieve en high-tech uitstraling", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_14.png", slug: "carbon-fiber" },
  { id: 6, titel: "Holografische Wrap", subtitel: "Futuristische en opvallende stijl", afbeelding: "/enes-website/memo-map/design/3dchanger/changer_15.png", slug: "holografisch" },
];

const ThreeDCarwrapping: React.FC = () => {
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
        <title>3D Carwrapping - WrapMaster | Specialist in Auto Customization</title>
        <meta name="description" content="Ontdek onze uitgebreide reeks van professionele 3D carwrapping ontwerpen, waaronder matte, glanzende, en unieke wraps. WrapMaster is uw specialist voor alle auto customization behoeften." />
        <meta name="keywords" content="3D carwrapping, auto wrap, matte wrap, glanzende wrap, camouflage wrap, kleurverloop wrap, carbon fiber wrap, holografische wrap" />
        <link rel="canonical" href="https://www.wrapmaster.nl/3d-carwrapping" />
      </Head>
      <section className="py-12 h-100 overflow-hidden bg-white">
        <div className="text-left mb-12 ml-12">
          <h1 className="text-2xl font-medium text-gray-800">3D CARWRAPPING ONTWERPEN</h1>
          <p className="text-l text-gray-600 mt-2">Gespecialiseerd in 3D carwrapping en auto customization</p>
        </div>

        <div className="carousel-container overflow-hidden">
          <div ref={carouselRef} className="carousel">
            {carWrapDesigns.map((design) => (
              <div
                key={design.id}
                className="carousel-cell mr-2 w-full sm:w-1/2 lg:w-1/3"
              >
                <Link href={`/3d-carwrapping/${design.slug}`}>
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
        "name": "WrapMaster",
        "description": "Specialist in 3D carwrapping en auto customization",
        "url": "https://www.wrapmaster.nl",
        "telephone": "+31XXXXXXXXX",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Autostraat 123",
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
          "https://www.facebook.com/wrapmaster",
          "https://www.instagram.com/wrapmaster"
        ]
      })} } />
    </>
  );
};

export default ThreeDCarwrapping;

