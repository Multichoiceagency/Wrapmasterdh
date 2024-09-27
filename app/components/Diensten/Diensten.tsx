'use client';

import Link from 'next/link';
import Slider from 'react-slick';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@/app/components/Diensten/slick-custom.css'; // Import your custom CSS

const OnzeDiensten = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Custom Next Arrow
  const NextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl bg-white rounded-full shadow-lg p-2 z-10"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );
  };

  // Custom Prev Arrow
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl bg-white rounded-full shadow-lg p-2 z-10"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );
  };

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const servicesData = [
    {
      image: '/images/carwrapping.jpg',
      title: 'Carwrapping',
      description:
        'Carwrapping is simpelweg het inpakken van jouw voertuig met een speciaal gekleurde folie. Bij Wrapmaster bieden wij een groot scala aan folie in diverse kleuren aan.',
      link: '/car-wrapping',
    },
    {
      image: '/images/lampen-tinten.png',
      title: 'Koplampen Tinten',
      description:
        'Wrapmaster biedt transparante, matte, satijnen en hoogglanzende folie om je verlichting een eigen draai te geven.',
      link: '/koplampen-tinten',
    },
    {
      image: '/images/chrome-delete.jpg',
      title: 'Chrome Delete',
      description:
        'Wij van Wrapmaster kunnen een volledige chrome delete uitvoeren en alle chrome delen in- en rondom je auto naar elk gewenste kleur veranderen.',
      link: '/chrome-delete',
    },
    {
      image: '/images/reclamebelettering.png',
      title: 'Reclamebelettering',
      description:
        'Autobelettering is een voordelige en aantrekkelijke manier om uw bedrijf goed te presenteren met een opvallend design.',
      link: '/reclamebelettering',
    },
    {
      image: '/images/poetsen-glascoating.jpeg',
      title: 'Poetsen & Glascoating',
      description:
        'Een coating beschermt uw auto en maakt deze gemakkelijker te onderhouden, voor optimale bescherming en verzorging.',
      link: '/poetsen-glascoating',
    },
    {
      image: '/images/velgen-remklauwen-spuiten.png',
      title: 'Velgen & Remklauwen',
      description:
        'Wij kunnen je velgen en remklauwen in iedere gewenste kleur spuiten, coaten of wrappen.',
      link: '/velgen-remklauwen',
    },
    {
      image: '/images/gordelkleur-vervangen.jpg',
      title: 'Autogordels Vervangen',
      description:
        'Wrapmaster is de autogordel specialist van Nederland. Voor beschadigde gordels of om je autogordel te vervangen.',
      link: '/autogordels-vervangen',
    },
    {
      image: '/images/scooter-motorwrapping.png',
      title: 'Scooter & Motorwrap',
      description:
        'Bij Wrapmaster heb je ook de mogelijkheid om je scooter of motor te wrappen voor een unieke uitstraling.',
      link: '/scooter-motorwrap',
    },
  ];

  return (
    <section className="py-12">
      {/* Top Navigation Links */}
      <nav className="flex flex-col items-center justify-center md:flex-row md:space-x-48 space-y-4 md:space-y-0 mb-8 border-b pb-4">
        <Link href="/car-wrapping" className="text-lg font-semibold text-gray-800 hover:text-black transition">
          Carwrapping
        </Link>
        <Link href="/ppf" className="text-lg font-semibold text-gray-800 hover:text-black transition">
          Koplampen Tinten
        </Link>
        <Link href="/chrome-delete" className="text-lg font-semibold text-gray-800 hover:text-black transition">
          Chrome Delete
        </Link>
        <Link href="/reclamebelettering" className="text-lg font-semibold text-gray-800 hover:text-black transition">
          Reclamebelettering
        </Link>
        <Link href="/velgen-remklauwen" className="text-lg font-semibold text-gray-800 hover:text-black transition">
          Velgen & Remklauwen
        </Link>
      </nav>

      {/* Our Services Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Onze Diensten</h2>
      </div>

      {/* Draggable Slider */}
      <div className="relative max-w-[1400px] mx-auto">
        <Slider {...settings}>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-6"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-white shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover mb-4"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{service.description}</p>
                </div>

                {/* Hover Info Icon with Link */}
                {hoveredIndex === index && (
                  <Link href={service.link} className="absolute inset-0 flex justify-center items-center bg-black/50">
                    <FontAwesomeIcon icon={faInfoCircle} className="text-white text-4xl" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Discover More Button */}
      <div className="text-center mt-8">
        <Link
          href="/discover-more"
          className="px-6 py-3 bg-black text-white text-lg font-semibold hover:bg-gray-700 transition"
        >
          Ontdek Meer
        </Link>
      </div>
    </section>
  );
};

export default OnzeDiensten;
