'use client';

import Link from 'next/link';
import Slider from 'react-slick';
import '@/app/components/Diensten/slick-custom.css'; // Import your custom CSS

const OnzeDiensten = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
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
    ],
  };

  const servicesData = [
    {
      video: '/video/kia-ev6-carwrapping.mp4',
      title: 'Carwrapping',
      slogan: 'Transform your car with stunning wraps.',
      link: '/car-wrapping',
    },
    {
      image: '/images/lampen-tinten.png',
      title: 'Koplampen Tinten',
      slogan: 'Illuminate with style.',
      link: '/koplampen-tinten',
    },
    {
      image: '/images/chrome-delete.jpg',
      title: 'Chrome Delete',
      slogan: 'Sleek and sophisticated—Chrome no more!',
      link: '/chrome-delete',
    },
    {
      image: '/images/reclamebelettering.png',
      title: 'Reclamebelettering',
      slogan: 'Get noticed with custom vehicle lettering.',
      link: '/reclamebelettering',
    },
    {
      image: '/images/poetsen-glascoating.jpeg',
      title: 'Poetsen & Glascoating',
      slogan: 'Shine and protect like never before.',
      link: '/poetsen-glascoating',
    },
    {
      image: '/images/velgen-remklauwen-spuiten.png',
      title: 'Velgen & Remklauwen',
      slogan: 'Make your wheels stand out.',
      link: '/velgen-remklauwen',
    },
    {
      image: '/images/gordelkleur-vervangen.jpg',
      title: 'Autogordels Vervangen',
      slogan: 'Safety meets style.',
      link: '/autogordels-vervangen',
    },
    {
      image: '/images/scooter-motorwrapping.png',
      title: 'Scooter & Motorwrap',
      slogan: 'Wrap your ride for the ultimate look.',
      link: '/scooter-motorwrap',
    },
  ];

  return (
    <section className="py-12">
      {/* Title Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold w-18 text-gray-800">BEKIJK ONZE DIENSTEN</h2>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute top-0 left-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <p className="text-lg text-green-600 font-bold">WIJ ZIJN BESCHIKBAAR VOOR NIEUWE PROJECTEN !</p>
          </div>
        </div>
      </div>

      {/* Large Image Slider */}
      <div className="container w-full mx-auto">
        <Slider {...settings}>
          {servicesData.map((service, index) => (
            <div key={index} className="p-4">
              <Link href={service.link}>
                <div className="relative flex flex-col items-center">
                  {service.video ? (
                    <video
                      src={service.video}
                      autoPlay
                      loop
                      muted
                      className="w-[1388px] h-[488px] object-cover mb-4"
                    />
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-[1388px] h-[488px] object-cover mb-4"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-center text-gray-800">{service.title}</h3>
                  <p className="text-sm text-center text-gray-600 mt-1">{service.slogan}</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OnzeDiensten;
