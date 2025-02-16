'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // ✅ Import pijlen

interface Dienst {
  id: number;
  titel: string;
  subtitel: string;
  afbeelding: string;
  slug: string;
}

const diensten: Dienst[] = [
  { id: 17, titel: "Carwrapping", subtitel: "Complete voertuigtransformatie", afbeelding: "/enes-website/auto-wrappen/lambo-urus-satin-black.jpg", slug: "carwrapping" },
  { id: 16, titel: "PPF (Paint Protection Film)", subtitel: "Onzichtbare lakbescherming", afbeelding: "/enes-website/ppf/Maasvlakte-9.jpg", slug: "ppf" },
  { id: 15, titel: "Ambient Light", subtitel: "Sfeervolle interieurverlichting", afbeelding: "/enes-website/ambient-light/Mercedez-Benz AMG GT63_DONE_ (18 of 41).jpg", slug: "ambient-light" },
  { id: 14, titel: "Chrome Delete", subtitel: "Moderne look zonder chroom", afbeelding: "/enes-website/chrome-delete/chrome-delete.jpg", slug: "chrome-delete" },
  { id: 13, titel: "Detailing", subtitel: "Professionele autodetailing", afbeelding: "/enes-website/detailing/Brabus 800 (9 of 20).jpg", slug: "detailing" },
  { id: 12, titel: "Sterrenhemel", subtitel: "Luxueuze interieurverlichting", afbeelding: "/enes-website/ambient-light/ram.jpg", slug: "sterrenhemel" },
  { id: 11, titel: "Gordel", subtitel: "Veiligheid met stijl", afbeelding: "/enes-website/gordelkleur/IMG_1750.JPG", slug: "gordelkleur-veranderen" },
  { id: 10, titel: "Lampentinten", subtitel: "Stijlvolle lampaanpassingen", afbeelding: "/enes-website/lampen-tinten/lampentinten.jpg", slug: "lampentinten" },
  { id: 9, titel: "Ramentinten", subtitel: "Privacy en UV-bescherming", afbeelding: "/enes-website/ramentint/RSQ3-ramentint1.jpg", slug: "ramentinten" },
  { id: 8, titel: "Reclame/Design", subtitel: "Opvallende voertuigreclame", afbeelding: "/enes-website/reclame/_GLA5951.jpg", slug: "reclame-en-design" },
  { id: 7, titel: "Remklauwen", subtitel: "Customization van remklauwen", afbeelding: "/enes-website/remklauwen/Brabus 800 (5 of 7).jpg", slug: "remklauwen" },
  { id: 6, titel: "Velgen Poedercoaten", subtitel: "Duurzame velgafwerking", afbeelding: "/enes-website/velgen/WM-21.jpg", slug: "velgen-poedercoaten" },
  { id: 5, titel: "Alloygator", subtitel: "Velgbescherming op maat", afbeelding: "/enes-website/alloygator/bluelambo.png", slug: "alloygator" },
  { id: 4, titel: "Scooter/Motor Wrap", subtitel: "Stijlvolle wraps voor tweewielers", afbeelding: "/enes-website/memo/IMG_2501.JPG", slug: "scooter-motor-wrap" },
  { id: 3, titel: "Security Alarm", subtitel: "Geavanceerde beveiligingssystemen", afbeelding: "/enes-website/memo-map/510x1000x0_proefdruk-alarm-stickers-0.jpg", slug: "alarmbeveiliging-auto" },
  { id: 2, titel: "Bodykit", subtitel: "Custom bodykit installatie", afbeelding: "/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_6.jpg", slug: "bodykit" },
  { id: 1, titel: "Folie Verwijderen", subtitel: "Professionele folieverwijdering", afbeelding: "/enes-website/wrapfolie/GLA_4446-scaled.jpg", slug: "folie-verwijderen" },
];

const OnzeDiensten: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 }, 
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [, setImagesLoaded] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImagesLoaded((prev) => {
      const newCount = prev + 1;
      if (newCount >= 3 && !isLoaded) {
        setIsLoaded(true);
      }
      return newCount;
    });
  }, [isLoaded]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', updateButtons);
    updateButtons(); // Directe update bij eerste load
  }, [emblaApi]);

  return (
    <section className="pt-16 pb-10 overflow-hidden bg-white relative">
      <div className="text-center">
        <h2 className="pb-10 text-3xl font-medium text-gray-800">ONZE DIENSTEN</h2>
      </div>

      {/* Slider Container */}
      <div className="carousel-container overflow-hidden relative">
        <div className="relative w-full h-full"> {/* ✅ Houdt de pijlen op de juiste positie */}
          <div className="embla" ref={emblaRef}>
            <div className={`embla__container transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {diensten.map((dienst) => (
                <div key={dienst.id} className="embla__slide w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 px-2">
                  <Link href={`/${dienst.slug}`}>
                    <Card className="w-full h-[400px] sm:h-[400px] md:h-[250px] lg:h-[300px] xl:h-[300px] 2xl:h-[689px] flex flex-col relative overflow-hidden">
                      <div className="relative h-full w-full">
                        <Image
                          src={dienst.afbeelding}
                          alt={dienst.titel}
                          fill
                          priority
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 33vw"
                          onLoad={handleImageLoad}
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
            </div>
          </div>

          {/* Navigatiepijlen */}
          <button
            className={`absolute top-1/2 left-4 transform -translate-y-1/2 p-3 text-white transition hover:bg-red-600 ${!canScrollPrev ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Vorige slide"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            className={`absolute top-1/2 right-4 transform -translate-y-1/2 p-3 text-white transition hover:bg-red-600 ${!canScrollNext ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Volgende slide"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>

      <style jsx global>{`
            .carousel-container {
            min-height: 200px!important;
        }
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
        }
        @media (min-width: 640px) {
          .embla__slide {
            flex: 0 0 50%;
          }
        }
        @media (min-width: 1024px) {
          .embla__slide {
            flex: 0 0 33.33%;
          }
        }
        @media (min-width: 1280px) {
          .embla__slide {
            flex: 0 0 25%;
          }
        }
        @media (min-width: 1536px) {
          .embla__slide {
            flex: 0 0 20%;
          }
        }
      `}</style>
    </section>
  );
};

export default OnzeDiensten;
