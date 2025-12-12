"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import OnzeDiensten from "@/app/components/Diensten/Diensten"
import { Skeleton } from "@/components/ui/skeleton"

const NextSeoClient = dynamic(() => import("next-seo").then((mod) => mod.NextSeo), { ssr: false })

const socialMedia = {
  instagram: "https://www.instagram.com/wrapmasterdh/",
  tiktok: "https://www.tiktok.com/@wrapmasterdh",
  whatsapp: "https://wa.me/31638718893",
  facebook: "https://www.facebook.com/WrapmasterDH",
}

const dienstData = {
  title: "FOLIE VERWIJDEREN",
  description: "",
  heroImage: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/wrapfolie/GLA_4446-scaled.jpg",
  contentImage1: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/wrapfolie/GLA_4446-scaled.jpg",
}

const sliderImages = [
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_2.png",
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_6.jpg",
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/memo-map/bodykit/eng_pl_Front-Splitter-Lamborghini-Huracan-EVO-AWD-15430_8.jpg",
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/memo-map/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-BMW-M3-G80-Sedan-20264_5.jpg",
]

const reels = [
  {
    id: 1,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/audi-rsq8.mp4",
    likes: "65.2k",
    comments: "195",
  },
  {
    id: 2,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/audi-rsq8.mp4",
    likes: "120k",
    comments: "345",
  },
  {
    id: 3,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/audi-rsq8.mp4",
    likes: "45.6k",
    comments: "89",
  },
  {
    id: 4,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/audi-rsq8.mp4",
    likes: "78.9k",
    comments: "230",
  },
]

// Skeleton component for the Folie Verwijderen page
function FolieVerwijderenSkeleton() {
  return (
    <div className="animate-pulse bg-white">
      {/* Hero Section Skeleton */}
      <section className="relative h-[100vh] sm:h-[100vh]">
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

export default function FolieVerwijderen() {
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
      Is de wrap op jouw auto, scooter of motor toe aan vervanging of wil je terug naar de originele lak? Kies voor
      folie verwijderen bij Wrapmaster! Ons team met jarenlange ervaring zorgt voor een vakkundige en veilige
      verwijdering van de folie, zonder lijmresten of schade aan de lak. Of het nu gaat om een gedeeltelijke wrap of een
      volledige voertuigwrap, wij leveren een resultaat waar je op kunt vertrouwen.
    </p>
  )

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Waarom Folie Verwijderen?</h3>
      <p className="mt-3">
        Het verwijderen van een wrap kan nodig zijn om verschillende redenen, zoals slijtage van de folie, de wens voor
        een nieuwe kleur of om de originele staat van jouw voertuig te herstellen. Het is belangrijk dat dit proces op
        een professionele manier wordt uitgevoerd om beschadigingen aan de lak of hardnekkige lijmresten te voorkomen.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van professioneel folie verwijderen:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Beschermt de lak: Voorkomt schade aan de originele lak van jouw voertuig.</li>
        <li>Grondige verwijdering: Geen achtergebleven lijmresten of stukjes folie.</li>
        <li>Snel en efficiënt: Bespaar tijd en moeite met een professionele aanpak.</li>
        <li>
          Geschikt voor alle voertuigen: Wij kunnen folie verwijderen van auto's, scooters, motoren en andere
          voertuigen.
        </li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Folie Verwijderen bij Wrapmaster</h3>
      <p className="mt-3">
        Bij Wrapmaster hebben we de expertise en tools om elk type folie zorgvuldig te verwijderen. Of het nu gaat om
        matte, glanzende of metallic wraps, ons team gebruikt speciale technieken om de folie snel en veilig te
        verwijderen, zelfs na jaren van gebruik. We zorgen ervoor dat jouw voertuig weer strak en schoon wordt
        opgeleverd.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Onze werkwijze:</h4>
      <ol className="list-decimal list-inside mt-2">
        <li>Inspectie: We beoordelen de staat van de folie en bespreken jouw wensen.</li>
        <li>
          Verwijdering: Met behulp van warmte en speciale gereedschappen verwijderen we de folie zonder de lak te
          beschadigen.
        </li>
        <li>Reiniging: Eventuele lijmresten worden zorgvuldig verwijderd met hoogwaardige producten.</li>
        <li>
          Aflevering: Je voertuig wordt schoon en klaar voor gebruik afgeleverd, of voorbereid op een nieuwe wrap.
        </li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster combineren we vakmanschap en ervaring om jou de beste service te bieden. Ons team met jarenlange
        ervaring zorgt ervoor dat de folie professioneel en zonder problemen wordt verwijderd, zodat jouw voertuig weer
        als nieuw oogt.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van Wrapmaster:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Veilige verwijdering: Wij beschermen jouw lak en zorgen voor een krasvrij resultaat.</li>
        <li>Hoogwaardige producten: We gebruiken alleen materialen en tools van topkwaliteit.</li>
        <li>Snel en efficiënt: Onze professionals verwijderen de folie snel en effectief.</li>
        <li>
          Maatwerk: Of je nu een complete wrap of kleine onderdelen wilt laten verwijderen, wij leveren maatwerk
          afgestemd op jouw behoeften.
        </li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wanneer is Folie Verwijderen Noodzakelijk?</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Slijtage of verkleuring: Als de wrap na verloop van tijd is beschadigd of verkleurd.</li>
        <li>Nieuwe wrap: Voorbereiding op een nieuwe wrap of een andere stijl.</li>
        <li>Verkoop: Terugbrengen naar de originele staat van het voertuig om de verkoopwaarde te verhogen.</li>
        <li>Huur- of leasevoertuigen: Het herstellen van voertuigen naar hun originele staat.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Laat Folie Verwijderen door Wrapmaster!</h3>
      <p className="mt-3">
        Wil je de wrap van jouw voertuig professioneel laten verwijderen? Kies voor de expertise van Wrapmaster en
        geniet van een vakkundige service zonder zorgen. Neem vandaag nog contact met ons op voor meer informatie of een
        vrijblijvende offerte. Samen zorgen we ervoor dat jouw voertuig er weer perfect uitziet!
      </p>
    </>
  )

  // Show skeleton while loading
  if (loading) {
    return <FolieVerwijderenSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="Folie Verwijderen bij Wrapmaster - Professioneel, Veilig en Zonder Beschadigingen"
        description="Vakkundige verwijdering van wraps voor auto's, scooters en motoren. Kies voor de expertise van Wrapmaster voor een veilige en schadevrije folieverwijdering."
        canonical="https://wrapmasterdh.nl/folie-verwijderen"
        openGraph={{
          url: "https://wrapmasterdh.nl/folie-verwijderen",
          title: "Folie Verwijderen bij Wrapmaster - Professioneel, Veilig en Zonder Beschadigingen",
          description:
            "Vakkundige verwijdering van wraps voor auto's, scooters en motoren. Kies voor de expertise van Wrapmaster voor een veilige en schadevrije folieverwijdering.",
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
            content:
              "folie verwijderen, wrap verwijderen, wrapfolie verwijderen, carwrapping verwijderen, auto wrap verwijderen",
          },
        ]}
      />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[100vh] sm:h-100vh">
          <Image
            src={dienstData.heroImage || "/placeholder.svg"}
            alt={dienstData.title}
            fill
            className="object-cover"
            priority
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
              Folie Verwijderen bij Wrapmaster – Professioneel, Veilig en Zonder Beschadigingen
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
                alt="Folie Verwijderen bij Wrapmaster"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
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
