"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import OnzeDiensten from "@/app/components/Diensten/Diensten"
import { faInstagram, faTiktok, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ImageCarousel from "@/components/ImageCarousel"
import { Skeleton } from "@/components/ui/skeleton"

const NextSeoClient = dynamic(() => import("next-seo").then((mod) => mod.NextSeo), { ssr: false })

const socialMedia = {
  instagram: "https://www.instagram.com/wrapmasterdh/",
  tiktok: "https://www.tiktok.com/@wrapmasterdh",
  whatsapp: "https://wa.me/31638718893",
  facebook: "https://www.facebook.com/WrapmasterDH",
}

const dienstData = {
  title: "ALLOYGATOR",
  description: "",
  heroImage: "http://localhost:3010/uploads/enes-website/Alloygator/78415338_2707704222583229_8578045637193367552_o.jpg",
  contentImage1: "http://localhost:3010/uploads/enes-website/Alloygator/AG-17-e1539160979388-min.jpg",
  contentImage2: "http://localhost:3010/uploads/enes-website/Alloygator/AG-19-e1539165703298.jpg",
  contentImage3: "http://localhost:3010/uploads/enes-website/Alloygator/Ontwerp zonder titel (1).png",
}

const sliderImages = [
  "http://localhost:3010/uploads/enes-website/Alloygator/tesla.jpg",
  "http://localhost:3010/uploads/enes-website/Alloygator/Mini_Excusive-Black (1).jpg",
  "http://localhost:3010/uploads/enes-website/Alloygator/lamborghini.jpg",
  "http://localhost:3010/uploads/enes-website/Alloygator/Ontwerp zonder titel (1).png",
]

const reels = [
  {
    id: 1,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/GITD (1).mp4",
    likes: "65.2k",
    comments: "195",
  },
  {
    id: 2,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/Femme_Frontaal_AlloyGator.mp4",
    likes: "120k",
    comments: "345",
  },
  {
    id: 3,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/AlloyGator Wheel Protection in action.mp4",
    likes: "45.6k",
    comments: "89",
  },
  {
    id: 4,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/AlloyGator commercial.mp4",
    likes: "78.9k",
    comments: "230",
  },
]

// Skeleton component for the AlloyGator Bescherming page
function AlloyGatorBeschermingSkeleton() {
  return (
    <div className="animate-pulse bg-white">
      {/* Hero Section Skeleton */}
      <section className="relative h-[50vh] sm:h-screen">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-20">
          <div className="text-left px-4 max-w-4xl">
            <Skeleton className="h-10 w-64 mx-auto mb-2" />
            <Skeleton className="h-6 w-full mx-auto mb-6" />
            <div className="flex justify-center">
              <Skeleton className="h-10 w-48" />
            </div>
          </div>
        </div>
      </section>

      {/* Text with Image Section Skeleton */}
      <section className="flex flex-col lg:flex-row py-8 lg:py-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 mb-8 lg:mb-0">
          <Skeleton className="h-12 w-3/4 mb-8" />
          <div className="space-y-4 mb-8">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-10 w-40" />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <Skeleton className="w-full h-[300px] sm:h-[400px] lg:h-[500px]" />
        </div>
      </section>

      {/* Carousel Skeleton */}
      <section className="py-8">
        <div className="overflow-hidden">
          <div className="flex space-x-4 px-4">
            {[1, 2, 3, 4].map((_, index) => (
              <Skeleton key={index} className="min-w-[280px] h-[200px] rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Two Images Section Skeleton */}
      <section className="max-w-full mx-auto mt-16 md:mt-44">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="aspect-[4/3]" />
          <Skeleton className="aspect-[4/3]" />
        </div>
      </section>

      {/* Instagram Reels Section Skeleton */}
      <section className="w-full bg-white py-16">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[1, 2, 3, 4].map((_, index) => (
            <Skeleton key={index} className="h-[300px] sm:h-[760px] rounded-lg" />
          ))}
        </div>
      </section>

      {/* Onze Diensten Section Skeleton */}
      <section className="py-9">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {[1, 2, 3].map((_, index) => (
            <Skeleton key={index} className="h-[300px] rounded-lg" />
          ))}
        </div>
      </section>
    </div>
  )
}

export default function AlloyGatorBescherming() {
  const [showMore, setShowMore] = useState(false)
  const [loading, setLoading] = useState(true)
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  )

  // Simulate loading
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const shortText = (
    <p>
      Wil je jouw velgen beschermen tegen stoeprandschade en tegelijkertijd een unieke uitstraling geven? Kies voor
      AlloyGator velgbescherming bij Wrapmaster! Deze innovatieve randbeschermers bieden een perfecte combinatie van
      stijl en functionaliteit, waardoor jouw velgen niet alleen beschermd zijn, maar er ook fantastisch uitzien. Ons
      team met jarenlange ervaring zorgt voor een professionele installatie, zodat je zorgeloos kunt rijden.
    </p>
  )

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is AlloyGator?</h3>
      <p className="mt-3">
        AlloyGator is een hoogwaardige velgbeschermingsoplossing die speciaal is ontworpen om schade aan velgen te
        voorkomen. De randbeschermers worden strak om de velgranden bevestigd en bieden een duurzame barrière tegen
        stoeprandschade, vuil en andere gevaren op de weg. Verkrijgbaar in diverse kleuren, maken AlloyGators het
        mogelijk om je velgen te personaliseren én te beschermen.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor AlloyGator?</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Bescherming: Voorkom schade aan je velgen door stoepranden, steentjes of andere obstakels.</li>
        <li>
          Duurzaam: AlloyGators zijn gemaakt van sterk, slijtbestendig nylon dat bestand is tegen de zwaarste
          omstandigheden.
        </li>
        <li>Stijlvol: Kies uit een breed scala aan kleuren om je auto een persoonlijke touch te geven.</li>
        <li>Kostenbesparend: Bespaar op dure reparaties aan je velgen door preventieve bescherming.</li>
        <li>Eenvoudig onderhoud: AlloyGators zijn gemakkelijk schoon te maken en behouden hun strakke uitstraling.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">AlloyGator Kleurmogelijkheden</h3>
      <p className="mt-3">
        Bij Wrapmaster bieden we AlloyGators in diverse kleuren, zodat je altijd een optie vindt die perfect bij jouw
        auto past. Populaire keuzes zijn:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Subtiel: Zwart, zilver of grijs voor een onopvallende look die bij elke velg past.</li>
        <li>Opvallend: Rood, blauw, groen of geel voor een sportieve en unieke uitstraling.</li>
        <li>Custom combinatie: Kies twee kleuren voor een opvallend en gepersonaliseerd effect.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom Wrapmaster voor AlloyGator?</h3>
      <p className="mt-3">
        Bij Wrapmaster combineren we kwaliteit en expertise om jouw AlloyGators perfect te installeren. Ons team werkt
        met precisie en zorgt ervoor dat de beschermers naadloos op je velgen passen, zonder dat ze loskomen of je
        rijervaring beïnvloeden. Of je nu kiest voor subtiele bescherming of een opvallende look, wij leveren altijd
        maatwerk.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van kiezen voor Wrapmaster:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Professionele installatie: Wij zorgen voor een nauwkeurige montage zonder beschadiging van je velgen.</li>
        <li>Hoogwaardige materialen: AlloyGators zijn duurzaam en ontworpen om lang mee te gaan.</li>
        <li>Ruime keuze: Met ons brede kleurenpalet kun je je velgen perfect afstemmen op jouw stijl.</li>
        <li>Jarenlange ervaring: Ons ervaren team garandeert een resultaat waar je trots op kunt zijn.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Hoe Werkt AlloyGator?</h3>
      <ol className="list-decimal list-inside mt-2">
        <li>Adviesgesprek: We bespreken jouw wensen en helpen je de juiste kleur en stijl kiezen.</li>
        <li>Voorbereiding: De velgen worden gereinigd en gecontroleerd om een perfecte pasvorm te garanderen.</li>
        <li>Installatie: AlloyGators worden nauwkeurig bevestigd met behulp van geavanceerde technieken en tools.</li>
        <li>
          Afwerking: We testen de montage en zorgen ervoor dat de AlloyGators stevig en veilig op hun plaats zitten.
        </li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Bescherm Jouw Velgen met Wrapmaster AlloyGators!</h3>
      <p className="mt-3">
        Wil je jouw velgen beschermen tegen schade en tegelijkertijd de uitstraling van je auto verbeteren? Kies voor
        AlloyGator velgbescherming bij Wrapmaster. Neem vandaag nog contact met ons op voor meer informatie of een
        vrijblijvende offerte. Wij helpen je graag om jouw auto een unieke en beschermde uitstraling te geven!
      </p>
    </>
  )

  // Show skeleton while loading
  if (loading) {
    return <AlloyGatorBeschermingSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="AlloyGator Bescherming bij Wrapmaster - Bescherm en Personaliseer Jouw Velgen"
        description="Bescherm je velgen tegen stoeprandschade en geef ze een unieke uitstraling met AlloyGator velgbescherming van Wrapmaster. Ontdek onze professionele installatie!"
        canonical="https://wrapmasterdh.nl/alloygator-bescherming"
        openGraph={{
          url: "https://wrapmasterdh.nl/alloygator-bescherming",
          title: "AlloyGator Bescherming bij Wrapmaster - Bescherm en Personaliseer Jouw Velgen",
          description:
            "Bescherm je velgen tegen stoeprandschade en geef ze een unieke uitstraling met AlloyGator velgbescherming van Wrapmaster. Ontdek onze professionele installatie!",
          images: [
            {
              url: dienstData.heroImage,
              width: 1200,
              height: 630,
              alt: dienstData.title,
            },
          ],
          site_name: "Wrapmaster",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "alloygator, velgenbescherming, velgen randen, stoeprandschade, velgen personalisatie",
          },
        ]}
      />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-screen">
          <Image
            src={dienstData.heroImage || "/placeholder.svg"}
            alt={dienstData.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-20">
            <div className="text-left text-white px-4 max-w-4xl">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 py-5 text-center">{dienstData.title}</h1>
              <p className="text-base sm:text-xl mb-6 px-16 text-center">{dienstData.description}</p>
              <div className="flex justify-center">
                <Link
                  href="/diensten"
                  className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
                >
                  TERUG NAAR DIENSTEN
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Text with Image Section */}
        <section className="flex flex-col lg:flex-row py-8 lg:py-16">
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 mb-8 lg:mb-0">
            <h2 className="text-2xl font-light sm:text-3xl lg:text-4xl mb-4 lg:mb-8">
              AlloyGator Bescherming bij Wrapmaster – Bescherm en Personaliseer Jouw Velgen
            </h2>
            <div className="mb-6 lg:mb-8 leading-relaxed max-w-xl font-regular text-sm sm:text-base">
              {showMore ? fullText : shortText}
              <button
                className="mt-4 text-blue-600 hover:underline focus:outline-none"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Lees minder" : "Lees meer"}
              </button>
            </div>
            <Link
              href="/offerte-aanvragen"
              className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
            >
              Offerte aanvragen
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src={dienstData.contentImage1 || "/placeholder.svg"}
                alt="AlloyGator Bescherming bij Wrapmaster"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        <ImageCarousel images={sliderImages} />

        {/* Two Images Section */}
        <section className="max-w-full mx-auto mt-16 md:mt-44">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3]">
              <Image
                src={dienstData.contentImage3 || "/placeholder.svg"}
                alt="Content Image 1"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={dienstData.contentImage2 || "/placeholder.svg"}
                alt="Content Image 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Instagram Reels Section */}
        <section className="w-full bg-white py-16">
          <h2 className="text-black text-3xl font-bold mb-8 text-center">Bekijk Onze Reels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
            {reels.map((reel) => (
              <div key={reel.id} className="relative w-full h-[300px] sm:h-[760px] bg-black rounded-lg overflow-hidden">
                {/* Video */}
                <video src={reel.video} className="w-full h-full object-cover" loop muted autoPlay playsInline></video>
                {/* Instagram Reel Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-40">
                  <div className="flex items-center text-white text-sm font-semibold">
                    <Image src="http://localhost:3010/uploads/logos/logo-wit.png" alt="Reels Play Icon" width={20} height={20} className="mr-2" />
                    Reels
                  </div>
                  <div className="text-white space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        <Image
                          src="http://localhost:3010/uploads/logos/handtekening-wit.png"
                          alt="Reels Play Icon"
                          width={100}
                          height={20}
                          className="mr-2"
                        />
                      </span>
                      <div className="flex space-x-2">
                        <a
                          href={socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400"
                        >
                          <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a
                          href={socialMedia.tiktok}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400"
                        >
                          <FontAwesomeIcon icon={faTiktok} size="lg" />
                        </a>
                        <a
                          href={socialMedia.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400"
                        >
                          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                        </a>
                        <a
                          href={socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400"
                        >
                          <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wrapmaster Services Section */}
        <section className="py-9">
          <OnzeDiensten />
        </section>
      </main>
    </>
  )
}
