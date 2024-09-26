'use client';

import Link from 'next/link';
import Slider from 'react-slick';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '@/app/components/Diensten/slick-custom.css'; // Import your custom CSS

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  const newsData = [
    {
      image: '/images/lamborghini-urus-groen.jpg',
      title: 'BRABUS AT MONACO YACHT SHOW 2024',
      description:
        '20.09.2024 - We are excited to announce our return to the Monaco Yacht Show! Experience our latest and most...',
    },
    {
      image: '/images/lambo.jpg',
      title: 'SHADOW 1000 SUN-TOP PHANTOM GRAY SIGNATURE EDITION',
      description:
        '10.09.2024 - Breathtaking acceleration, high speeds, race-responsive handling and outrageously good looks. Pure...',
    },
    {
      image: '/images/lamborghini-urus-groen.jpg',
      title: 'CANNES YACHTING FESTIVAL 2024',
      description:
        '04.09.2024 - From September 10 to 15, Europe’s renowned boat show for luxury boats and water sports enthusiasts...',
    },
  ];

  return (
    <section className="py-12">
      {/* Top Navigation Links */}
      <nav className="flex flex-col items-center justify-center md:flex-row md:space-x-48 space-y-4 md:space-y-0 mb-8 border-b pb-4">
  <Link href="/car-wrapping" className="text-lg font-semibold text-gray-800 hover:text-black transition">
    Car Wrapping
  </Link>
  <Link href="/ppf" className="text-lg font-semibold text-gray-800 hover:text-black transition">
    Paint Protection Film (PPF)
  </Link>
  <Link href="/sterrenhemel" className="text-lg font-semibold text-gray-800 hover:text-black transition">
    Sterrenhemel
  </Link>
  <Link href="/window-tinting" className="text-lg font-semibold text-gray-800 hover:text-black transition">
    Window Tinting
  </Link>
</nav>

      {/* News & Events Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">NEWS & EVENTS</h2>
      </div>

      {/* Draggable Slider */}
      <div className="relative max-w-[1400px] mx-auto">
        <Slider {...settings}>
          {newsData.map((news, index) => (
            <div
              key={index}
              className="p-6"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-white shadow-md">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-64 object-cover mb-4"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{news.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{news.description}</p>
                </div>

                {/* Hover Info Icon */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex justify-center items-center bg-black/50">
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="text-white text-4xl"
                    />
                  </div>
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
          DISCOVER MORE
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
