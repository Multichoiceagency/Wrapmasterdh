'use client';

import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

// Hero section data
const dienstData = {
  title: "Alarmsystemen Installeren bij Wrapmaster",
  description: "Bescherm Jouw Voertuig Met de Beste Beveiliging. Professionele installatie van hoogwaardige alarmsystemen voor auto's, scooters en motoren.",
  heroImage: "/enes-website/alarm/proefdruk-alarm-stickers.webp",
};

// Accordion data
const klassenData = [
  {
    title: "Klasse 1",
    content: (
      <>
        <p>
          Een goedgekeurde SCM startonderbreker beveiligt uw auto tegen diefstal. Af-fabriek is elke Europese auto voorzien van een startonderbreker. Deze is door nieuwe diefstalmethodes niet meer voldoende. Daarom wordt er een extra startonderbreker met eigen autorisatie geïnstalleerd.
        </p>
        <p className="mt-4 font-bold">Prijs: €389,- incl. 21% BTW</p>
      </>
    ),
  },
  {
    title: "Klasse 2",
    content: (
      <>
        <p>
          SCM Klasse Alarmsysteem (voorheen Klasse 2) bevat een SCM gecertificeerde startonderbreker aangevuld met een alarmsysteem met inbraakdetectie en alarmering.
        </p>
        <p className="mt-4 font-bold">Prijs: vanaf €999,- incl. 21% BTW</p>
      </>
    ),
  },
  {
    title: "Klasse 3",
    content: (
      <>
        <p>
          Een SCM Alarmsysteem 3 heeft hellingshoekdetectie, een goedgekeurde startonderbreker en akoestische en optische alarmering bij inbraak of sabotage.
        </p>
        <p className="mt-4 font-bold">Prijs: vanaf €1099,- incl. 21% BTW</p>
      </>
    ),
  },
  {
    title: "Klasse 4",
    content: (
      <>
        <p>
          Het SCM Klasse Voertuigvolgsysteem helpt bij het volgen, opsporen en blokkeren van een gestolen voertuig en is gekoppeld aan een PAC-meldkamer.
        </p>
        <p className="mt-4 font-bold">Prijs: €699,- incl. 21% BTW</p>
      </>
    ),
  },
  {
    title: "Klasse 5",
    content: (
      <>
        <p>
          Het Terugvindsysteem (TV01) zorgt ervoor dat uw voertuig na diefstal binnen 24 uur teruggevonden wordt. Vereist een geldig SCM certificaat.
        </p>
        <p className="mt-4 font-bold">
          Prijs: €849,- incl. 21% BTW (voor voertuigen met Alarm klasse 3)<br />
          Prijs: €1399,- incl. 21% BTW (voor voertuigen zonder Alarm klasse 3)
        </p>
      </>
    ),
  },
  {
    title: "Alarm Keuring",
    content: (
      <>
        <p>
          Is uw alarmsysteem ouder dan 3 jaar? Dan is het verplicht deze jaarlijks te laten keuren om uw certificaat geldig te houden.
        </p>
        <p className="mt-4 font-bold">Kosten: vanaf €50,- incl. BTW</p>
      </>
    ),
  },
  {
    title: "KE01 CCV SCM Certificering",
    content: (
      <>
        <p>
          De Keyless Protector heeft sinds 2020 CCV / SCM goedkeuring voor het KE01 keurmerk. Vanaf 2021 verplichten verzekeraars aanvullende maatregelen tegen relay attacks.
        </p>
        <p className="mt-4 font-bold">Prijs: vanaf €175,-</p>
      </>
    ),
  },
  {
    title: "Peilzender / Terugvindsysteem TV01",
    content: (
      <>
        <p>
          Een Peilzender is een na-diefstal terugvindsysteem dat zorgt dat uw voertuig traceerbaar blijft. Werkt met een meldkamer abonnement en dagelijkse locatie-updates.
        </p>
        <p className="mt-4 font-bold">Prijs: vanaf €389,- incl. 21% BTW</p>
      </>
    ),
  },
];

export default function AlarmsystemenInstalleren() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <NextSeo
        title="Alarmsystemen Installeren bij Wrapmaster - Bescherm Jouw Voertuig Met de Beste Beveiliging"
        description="Professionele installatie van hoogwaardige alarmsystemen voor auto's, scooters en motoren. Bescherm je voertuig tegen diefstal met Wrapmaster's expertise."
        canonical="https://wrapmasterdh.nl/alarmsystemen-installeren"
      />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-screen">
          <Image
            src={dienstData.heroImage}
            alt={dienstData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-10 sm:pb-20">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-3xl sm:text-6xl mb-2 py-5">{dienstData.title}</h1>
              <p className="text-base sm:text-xl mb-6">{dienstData.description}</p>
              <Link
                href="/diensten"
                className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors"
              >
                TERUG NAAR DIENSTEN
              </Link>
            </div>
          </div>
        </section>

        {/* Accordion Section */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Alarmsystemen Klassen</h2>
          <div className="space-y-4">
            {klassenData.map((item, index) => (
              <div key={index} className="border rounded-lg">
                {/* Accordion Header */}
                <button
                  className="w-full text-left px-4 py-3 font-semibold text-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                </button>

                {/* Accordion Content */}
                {openIndex === index && (
                  <div className="px-4 py-3 bg-white">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
