import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-3">
      {/* Services Container */}
      <div className="w-full max-w-7xl flex flex-wrap justify-around items-center text-center border-b border-gray-300 py-4 px-4">
        <div className="w-1/2 sm:w-1/4 mb-4 sm:mb-0">
          <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider">SUPERCARS</span>
        </div>
        <div className="w-1/2 sm:w-1/4 mb-4 sm:mb-0">
          <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider">TUNING</span>
        </div>
        <div className="w-1/2 sm:w-1/4">
          <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider">CLASSICS</span>
        </div>
        <div className="w-1/2 sm:w-1/4">
          <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider">CARS4SALE</span>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;