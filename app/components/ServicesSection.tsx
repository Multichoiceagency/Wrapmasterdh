'use client';

import React from 'react';
import Link from 'next/link';

const ServicesSection: React.FC = () => {
  const services = [
    { name: 'Carwrapping', link: '/carwrapping' },
    { name: 'PPF', link: '/ppf' },
    { name: 'Detailing', link: '/detailing' },
    { name: 'Bodykit', link: '/bodykit' },
  ];

  return (
    <section className="w-full flex flex-col items-center">
      {/* Services Container */}
      <div className="w-full flex flex-wrap justify-between items-center text-center border-b border-gray-300 py-4 px-4">
        {services.map((service, index) => (
          <div key={index} className="w-1/2 sm:w-1/4 mb-4 mt-2 sm:mb-0">
            <Link 
              href={service.link}
              className="text-sm sm:text-base md:text-sm font-bold tracking-wider hover:text-red-900"
            >
              {service.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

