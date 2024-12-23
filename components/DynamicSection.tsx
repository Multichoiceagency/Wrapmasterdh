'use client'

import Image from 'next/image'

export default function BodykitInstallatieSection() {
  return (
    <div className="flex py-16">
      {/* Image Section */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="relative w-full h-[500px]">
          <Image
            src="/images/bodykit-installatie.jpg"
            alt="Professionele Bodykit Installatie"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        <h1 className="text-3xl font-bold mb-8">
          Professionele Bodykit Installatie
        </h1>
        <div className="mb-8 leading-relaxed max-w-xl font-regular">
          <p>
            Transformeer uw voertuig met onze expertise in bodykit installatie. Onze vakkundige 
            technici zorgen voor een naadloze integratie van hoogwaardige bodykits, waardoor uw 
            auto een unieke en opvallende uitstraling krijgt.
          </p>
          <p className="mt-4">
            Van subtiele verbeteringen tot dramatische stijlveranderingen, wij bieden een breed 
            scala aan opties om aan uw wensen te voldoen. Elk onderdeel wordt zorgvuldig 
            geselecteerd en geïnstalleerd voor optimale pasvorm en duurzaamheid.
          </p>
          <p className="mt-4">
            Onze bodykit installatie omvat niet alleen esthetische verbeteringen, maar kan ook 
            de aerodynamica en prestaties van uw voertuig verbeteren. Laat ons uw auto 
            transformeren tot een echte blikvanger op de weg.
          </p>
        </div>
        <a 
          href="/diensten/bodykit-installatie"
          className="bg-black text-white px-8 py-3 font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
        >
          Ontdek Mogelijkheden
        </a>
      </div>
    </div>
  )
}

