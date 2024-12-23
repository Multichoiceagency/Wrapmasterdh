'use client';

import React, { useEffect, useState } from 'react';
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
  sort_order: number;
}

const getGoogleDriveDirectLink = (url: string): string => {
  const fileId = url.match(/[-\w]{25,}/);
  return fileId ? `https://drive.google.com/uc?export=view&id=${fileId[0]}` : url;
};

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
  const [diensten, setDiensten] = useState<Dienst[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDiensten = async () => {
      try {
        const response = await fetch(
          'https://www.website.wrapmasterdh.nl/wp-json/wp/v2/diensten-pagina?_embed&per_page=100'
        );
        const data = await response.json();

        const formattedDiensten: Dienst[] = data
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((dienst: any) => {
            let afbeeldingUrl = dienst.acf?.background_image || '';
            if (afbeeldingUrl.includes('drive.google.com')) {
              afbeeldingUrl = getGoogleDriveDirectLink(afbeeldingUrl);
            }

            const sortOrder = dienst.acf?.sort_order ? parseInt(dienst.acf.sort_order, 10) : 0;

            return {
              id: dienst.id,
              titel: dienst.title.rendered || 'Default Title',
              subtitel: dienst.acf?.subtitle || 'Default Subtitle',
              afbeelding: afbeeldingUrl,
              slug: dienst.slug || '',
              sort_order: sortOrder,
            };
          })
          .sort((a: { sort_order: number; }, b: { sort_order: number; }) => a.sort_order - b.sort_order);

        setDiensten(formattedDiensten);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch diensten:', error);
        setIsLoading(false);
      }
    };

    fetchDiensten();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-white">
        <div className="w-16 h-16 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-12 h-100 overflow-hidden bg-white">
        <div className="text-left mb-12 ml-12">
        <h2 className="text-2xl font-medium text-gray-800">ONZE DIENSTEN</h2>
        <p className="text-l text-gray-600 mt-2">Gespecialiseerd in carwrapping</p>
      </div>
      <div className="carousel-container overflow-hidden">
        <Flickity
          className={'carousel'}
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

