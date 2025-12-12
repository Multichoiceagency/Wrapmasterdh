"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

const NextSeoClient = dynamic(() => import("next-seo").then((mod) => mod.NextSeo), { ssr: false })

// Lazy load accordion content
const LazyAccordionContent = ({ content }: { content: React.ReactNode }) => {
  return <div className="px-4 py-3 bg-white">{content}</div>
}

const DynamicAccordionContent = dynamic(() => Promise.resolve(LazyAccordionContent), {
  loading: () => (
    <div className="px-4 py-3 bg-white">
      <div className="animate-pulse h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  ),
  ssr: false,
})

// Hero section data
const dienstData = {
  title: "ALARMBEVEILIGING",
  description: "",
  heroImage: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/alarm/proefdruk-alarm-stickers.webp",
}

// Accordion data
const klassenData = [
  {
    title: "Klasse 1",
    content: (
      <>
        <p>
          Een goedgekeurde **SCM startonderbreker** beveiligt uw auto tegen diefstal. Af-fabriek is elke Europese auto
          voorzien van een startonderbreker, maar door nieuwe diefstalmethodes is deze niet meer voldoende. Daarom wordt
          er een **extra startonderbreker met eigen autorisatie** geïnstalleerd.
        </p>
        <h3 className="mt-4 font-semibold">Voordelen van een SCM startonderbreker:</h3>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Dubbele automatische startonderbreking (blokkering van startmotor en brandstofpomp).</li>
          <li>Eigen autorisatie via draadloze transponder of handzender.</li>
          <li>LED-indicator schrikt autodieven af.</li>
          <li>SCM/VbV goedgekeurde installatie door specialisten.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Klasse 2",
    content: (
      <>
        <p>
          **SCM Klasse Alarmsysteem** (voorheen Klasse 2) bevat een SCM gecertificeerde startonderbreker aangevuld met
          een alarmsysteem met **inbraakdetectie en alarmering**.
        </p>
        <h3 className="mt-4 font-semibold">Wat biedt Klasse 2?</h3>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>SCM gecertificeerde startonderbreker.</li>
          <li>Omtrekdetectie (deuren, achterklep en motorkap beveiligd).</li>
          <li>Optische en akoestische alarmering bij inbraak (sirene + knipperlichten).</li>
          <li>Automatische inschakeling mogelijk.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Klasse 3",
    content: (
      <>
        <p>
          Een **SCM Alarmsysteem 3** biedt **extra beveiliging** met hellingshoekdetectie en een **triple beveiliging**
          tegen diefstal en sabotage.
        </p>
        <h3 className="mt-4 font-semibold">Beveiligingsfuncties van Klasse 3:</h3>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Omtrekdetectie (beveiliging van deuren, motorkap en achterklep).</li>
          <li>Interieurdetectie (bewegingssensoren in de auto).</li>
          <li>Hellingshoekdetectie (tegen diefstal van velgen en sleepdiefstal).</li>
          <li>Gecodeerde noodstroomsirene.</li>
          <li>Optische signalering via knipperlichten.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Klasse 4",
    content: (
      <>
        <p>
          **SCM Klasse Voertuigvolgsysteem** is de nieuwe naam voor **Klasse 4 en 5**, aangevuld met een extra
          startonderbreker.
        </p>
        <h3 className="mt-4 font-semibold">Wat biedt een voertuigvolgsysteem?</h3>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Volgsysteem (Mi50) met GPS-tracking.</li>
          <li>Startonderbreker (MiBlock) voor extra beveiliging.</li>
          <li>Koppeling met een **PAC-meldkamer** (directe communicatie met politie).</li>
          <li>Sabotagemeldingen bij ongeautoriseerde beweging.</li>
          <li>Live tracking bij diefstal.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Alarm Keuring",
    content: (
      <>
        <p>
          Laat uw alarmsysteem **op tijd keuren**! Als uw alarm ouder is dan **3 jaar**, moet u deze jaarlijks laten
          keuren om het certificaat geldig te houden.
        </p>
        <h3 className="mt-4 font-semibold">Waarom keuren?</h3>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Verzekeraars eisen een geldige keuring.</li>
          <li>Controle of het alarmsysteem nog goed functioneert.</li>
          <li>Afmelding bij het SCM na succesvolle keuring.</li>
        </ul>
      </>
    ),
  },
  {
    title: "KE01 CCV SCM Certificering",
    content: (
      <>
        <p>
          Sinds 2020 heeft de **Keyless Protector** CCV / SCM goedkeuring voor het **KE01 keurmerk**. Vanaf 2021
          verplichten verzekeraars **extra bescherming tegen relay attacks**.
        </p>
        <h3 className="mt-4 font-semibold">Wat beschermt KE01?</h3>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Beveiliging tegen diefstal via keyless entry.</li>
          <li>Extra controle bij ontgrendelen.</li>
          <li>SCM gecertificeerde installatie.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Peilzender / Terugvindsysteem TV01",
    content: (
      <>
        <p>
          Een **peilzender** zorgt ervoor dat uw auto traceerbaar blijft na diefstal. Dit systeem werkt samen met een
          **meldkamer abonnement**.
        </p>
        <h3 className="mt-4 font-semibold">Voordelen van een Peilzender:</h3>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Na-diefstal terugvindsysteem.</li>
          <li>Dagelijkse locatie-updates.</li>
          <li>Gecertificeerde meldkamer (PAC).</li>
          <li>Ook beschikbaar als standalone oplossing.</li>
        </ul>
      </>
    ),
  },
]

export default function AlarmsystemenInstalleren() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <NextSeoClient
        title="Alarmsystemen Installeren bij Wrapmaster"
        description="Professionele installatie van hoogwaardige alarmsystemen voor auto's, scooters en motoren. Bescherm je voertuig tegen diefstal met Wrapmaster's expertise."
        canonical="https://wrapmasterdh.nl/alarmsystemen-installeren"
      />
      <main className="bg-white">
        {/* ✅ Hero Section ✅ */}
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-50vh">
          <Image
            src={dienstData.heroImage || "/placeholder.svg"}
            alt={dienstData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-20">
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center">{dienstData.title}</h1>
            <p className="text-lg sm:text-xl text-gray-300 text-center mt-2">{dienstData.description}</p>
            <Link
              href="/diensten"
              className="mt-5 bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font-medium text-sm sm:text-base uppercase tracking-wide hover:bg-red-700 transition-colors"
            >
              TERUG NAAR DIENSTEN
            </Link>
          </div>
        </section>

        {/* ✅ Accordion Section with Lazy Loading ✅ */}
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

                {/* Lazy Loaded Accordion Content */}
                {openIndex === index && <DynamicAccordionContent content={item.content} />}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
