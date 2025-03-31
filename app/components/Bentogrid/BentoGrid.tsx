'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Import the Button component

const BentoGrid = () => {
  const gridItems = [
    {
      image: '/images/carwrapping.jpg',
      title: 'Carwrapping',
      description:
        'Geef je voertuig een nieuwe look met gekleurde folie, zonder de originele kleur permanent te veranderen.',
      buttons: ['Meer weten', 'Offerte aanvragen'],
      link: '#',
      large: true, // For larger grid item
    },
    {
      image: '/images/velgenbescherming.jpg',
      title: 'Koplampen Tinten',
      description:
        'Geef je verlichting een eigen twist met transparante, matte, satijnen of hoogglanzende folie.',
      buttons: ['Meer weten'],
      link: '#',
      large: false,
    },
    {
      image: '/images/sterrenhemel.png',
      title: 'Chrome Delete',
      description:
        'Verwijder chrome onderdelen van je voertuig en geef het een frisse, unieke look met wrapping.',
      buttons: ['Meer weten'],
      link: '#',
      large: false,
    },
    {
      image: '/images/gordelkleur-vervangen.jpg',
      title: 'Reclamebelettering',
      description:
        'Presenteer je bedrijf professioneel met opvallende reclamebelettering op voertuigen.',
      buttons: ['Meer weten'],
      link: '#',
      large: false,
    },
    {
      image: '/images/lampen-tinten.png',
      title: 'Poetsen & Glascoating',
      description:
        'Bescherm je auto met een coating en maak deze makkelijker te onderhouden voor optimale bescherming.',
      buttons: ['Meer weten'],
      link: '#',
      large: false,
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto p-6">
      <h2 className="text-3xl font text-center mb-8">Onze aanbevelingen</h2>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className={`relative bg-black text-white overflow-hidden group ${
              item.large ? 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2' : 'col-span-1'
            }`}
          >
            {/* Image with hover animation */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover opacity-80 transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-red-700 to-transparent transform transition-transform duration-500 ease-in-out">
              <h3 className="text-1xl font-semibold">{item.title}</h3>
              {item.description && <p className="text-sm mt-2">{item.description}</p>}
              <div className="mt-4 flex space-x-2">
                {item.buttons.map((buttonText, buttonIndex) => (
                  <Link href={item.link} key={buttonIndex} passHref>
                    <Button variant="secondary">{buttonText}</Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
