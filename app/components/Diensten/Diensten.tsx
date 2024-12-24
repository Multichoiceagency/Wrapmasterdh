'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import Flickity from 'react-flickity-component';

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
  { id: 11, titel: "Gordel", subtitel: "Veiligheid met stijl", afbeelding: "/enes-website/gordelkleur/IMG_1750.JPG", slug: "gordel" },
  { id: 10, titel: "Lampentinten", subtitel: "Stijlvolle lampaanpassingen", afbeelding: "/enes-website/lampen-tinten/lampentinten.jpg", slug: "lampentinten" },
  { id: 9, titel: "Ramentinten", subtitel: "Privacy en UV-bescherming", afbeelding: "/enes-website/ramentint/RSQ3-ramentint1.jpg", slug: "ramentinten" },
  { id: 8, titel: "Reclame/Design", subtitel: "Opvallende voertuigreclame", afbeelding: "/enes-website/reclame/_GLA5951.jpg", slug: "reclame-design" },
  { id: 7, titel: "Remklauwen", subtitel: "Customization van remklauwen", afbeelding: "/enes-website/remklauwen/Brabus 800 (5 of 7).jpg", slug: "remklauwen" },
  { id: 6, titel: "Velgen Poedercoaten", subtitel: "Duurzame velgafwerking", afbeelding: "/enes-website/velgen/WM-21.jpg", slug: "velgen-poedercoaten" },
  { id: 5, titel: "Alloygater", subtitel: "Velgbescherming op maat", afbeelding: "/enes-website/alloygator/AG-15-e1539160696939-300x300.jpg", slug: "alloygater" },
  { id: 4, titel: "Scooter/Motor Wrap", subtitel: "Stijlvolle wraps voor tweewielers", afbeelding: "/enes-website/memo/IMG_2501.JPG", slug: "scooter-motor-wrap" },
  { id: 3, titel: "Security Alarm", subtitel: "Geavanceerde beveiligingssystemen", afbeelding: "/enes-website/memo-map/510x1000x0_proefdruk-alarm-stickers-0.jpg", slug: "security-alarm" },
  { id: 2, titel: "Bodykit", subtitel: "Custom bodykit installatie", afbeelding: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_6.jpg", slug: "bodykit" },
  { id: 1, titel: "Folie Verwijderen", subtitel: "Professionele folieverwijdering", afbeelding: "/enes-website/wrapfolie/GLA_4446-scaled.jpg", slug: "folie-verwijderen" },
];

const flickityOptions = {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  pageDots: false,
  prevNextButtons: true,
  freeScroll: false,
  percentPosition: false,
  imagesLoaded: true,
  autoPlay: 3000,
  pauseAutoPlayOnHover: true,
  draggable: true,
  adaptiveHeight: true,
};

const OnzeDiensten: React.FC = () => {
  return (
    <section className="py-12 h-100 overflow-hidden bg-white">
      <div className="text-left mb-12 ml-12">
        <h2 className="text-2xl font-medium text-gray-800">ONZE DIENSTEN</h2>
        <p className="text-l text-gray-600 mt-2">Gespecialiseerd in carwrapping</p>
      </div>
      <div className="carousel-container overflow-hidden">
        <Flickity
          className={'carousel focus-visible:outline-none'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {diensten.map((dienst) => (
            <div
              key={dienst.id}
              className="carousel-cell w-full sm:w-1/2 lg:w-1/3 px-2"
            >
              <Link href={`/diensten/${dienst.slug}`}>
                <Card className="w-full h-[400px] flex flex-col relative overflow-hidden">
                  <div className="relative h-96 w-full">
                    <Image
                      src={dienst.afbeelding}
                      alt={dienst.titel}
                      fill
                      priority
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="flex flex-col justify-end flex-grow">
                    <div>
                      <h3 className="text-l mt-5 font-semibold">{dienst.titel}</h3>
                      <p className="text-sm text-gray-500">{dienst.subtitel}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </Flickity>
      </div>
    </section>
  );
};

export default OnzeDiensten;

