'use client';

import Link from 'next/link';

const BentoGrid = () => {
  const gridItems = [
    {
      image: '/images/carwrapping.jpg',
      title: 'Reserveer nu de EQA of EQB Limited Edition vanaf € 45.891',
      description: 'Beperkt beschikbaar (ESP-subsidie: € 2.500/gr)',
      buttons: ['Meer weten', 'Ontdek de voorraad'],
      link: '#',
      large: true, // For larger grid item
    },
    {
      image: '/images/velgenbescherming.jpg',
      title: 'Mobiliteitsoplossingen voor uw nieuwe Mercedes.',
      description: 'Financiële diensten.',
      buttons: ['Meer weten'],
      link: '#',
      large: false,
    },
    {
      image: '/images/sterrenhemel.png',
      title: 'Ontdek de aantrekkelijke Sport Editions.',
      description: 'Krachtige uitstraling en rijk uitgerust.',
      buttons: ['Meer weten'],
      link: '#',
      large: false,
    },
    {
      image: '/images/gordelkleur-vervangen.jpg',
      title: 'Ontdek de aantrekkelijke Star Editions met complete standaarduitrusting.',
      buttons: ['Meer weten'],
      link: '#',
      large: false,
    },
    {
      image: '/images/lampen-tinten.png',
      title: 'Kies uw ideale upgrade en geniet nog meer van uw Mercedes-Benz.',
      description: 'Digitale extra’s: geniet nog meer van uw auto.',
      buttons: ['Meer weten'],
      link: '#',
      large: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Onze aanbevelingen</h2>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className={`relative bg-black text-white ${
              item.large ? 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2' : 'col-span-1'
            }`}
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 " />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent ">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.description && <p className="text-sm mt-2">{item.description}</p>}
              <div className="mt-4">
                {item.buttons.map((buttonText, buttonIndex) => (
                  <Link href={item.link} key={buttonIndex}>
                    <button className="px-4 py-2 mr-2 bg-red-600 text-white rounded hover:bg-black transition">
                      {buttonText}
                    </button>
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
