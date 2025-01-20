'use client'

import Image from 'next/image'

export default function BodykitInstallatieSection() {
  return (
    <div className="flex flex-col lg:flex-row pt-20 lg:py-20">
      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 mb-8 lg:mb-0">
        <h2 className="text-3xl font-light sm:text-3xl lg:text-3xl mb-4 lg:mb-8">
          Professionele Bodykit Installatie
        </h2>
        <div className="mb-6 lg:mb-8 leading-relaxed max-w-xl font-regular text-sm sm:text-base">
          <p>
            Transformeer uw voertuig met onze expertise in bodykit installatie. Onze vakkundige 
            technici zorgen voor een naadloze integratie van hoogwaardige bodykits, waardoor uw 
            auto een unieke en opvallende uitstraling krijgt.
          </p>
          <p className="mt-3 lg:mt-4">
            Van subtiele verbeteringen tot dramatische stijlveranderingen, wij bieden een breed 
            scala aan opties om aan uw wensen te voldoen. Elk onderdeel wordt zorgvuldig 
            geselecteerd en geïnstalleerd voor optimale pasvorm en duurzaamheid.
          </p>
          <p className="mt-3 lg:mt-4">
            Onze bodykit installatie omvat niet alleen esthetische verbeteringen, maar kan ook 
            de aerodynamica en prestaties van uw voertuig verbeteren. Laat ons uw auto 
            transformeren tot een echte blikvanger op de weg.
          </p>
        </div>
        <a 
          href="/diensten/bodykit"
          className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
        >
          Ontdek Mogelijkheden
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/enes-website/memo-map/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-BMW-M3-G80-Sedan-20264_2.jpg"
            alt="Professionele Bodykit Installatie"
            fill
            className="object-cover object-center transform lg:transform-none scale-x-[-1] lg:scale-x-100"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  )
}

