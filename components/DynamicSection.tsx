'use client'

import Image from 'next/image'

export default function BodykitInstallatieSection() {
  return (
    <div className="flex flex-col py-8 md:py-16">
      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-16 mb-8 md:mb-0 order-1 md:order-2">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
          Professionele Bodykit Installatie
        </h1>
        <div className="mb-6 md:mb-8 leading-relaxed max-w-xl font-regular text-sm md:text-base">
          <p>
            Transformeer uw voertuig met onze expertise in bodykit installatie. Onze vakkundige 
            technici zorgen voor een naadloze integratie van hoogwaardige bodykits, waardoor uw 
            auto een unieke en opvallende uitstraling krijgt.
          </p>
          <p className="mt-3 md:mt-4">
            Van subtiele verbeteringen tot dramatische stijlveranderingen, wij bieden een breed 
            scala aan opties om aan uw wensen te voldoen. Elk onderdeel wordt zorgvuldig 
            geselecteerd en geïnstalleerd voor optimale pasvorm en duurzaamheid.
          </p>
          <p className="mt-3 md:mt-4">
            Onze bodykit installatie omvat niet alleen esthetische verbeteringen, maar kan ook 
            de aerodynamica en prestaties van uw voertuig verbeteren. Laat ons uw auto 
            transformeren tot een echte blikvanger op de weg.
          </p>
        </div>
        <a 
          href="/diensten/bodykit-installatie"
          className="bg-black text-white px-6 md:px-8 py-2 md:py-3 font-bold text-xs md:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
        >
          Ontdek Mogelijkheden
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-1">
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image
            src="/enes-website/memo-map/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-BMW-M3-G80-Sedan-20264_2.jpg"
            alt="Professionele Bodykit Installatie"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  )
}

