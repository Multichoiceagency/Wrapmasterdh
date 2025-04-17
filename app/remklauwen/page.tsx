"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import OnzeDiensten from "@/app/components/Diensten/Diensten"
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
  title: "REMKLAUWEN IN KLEUR",
  description: "",
  heroImage: "/enes-website/remklauwen/RS6-8.jpg",
  contentImage1: "/enes-website/remklauwen/1000017877.jpg",
  contentImage2: "/enes-website/remklauwen/WrapMaster Black Range Rover (6 of 13).jpg",
  contentImage3: "/enes-website/remklauwen/BlndrAgency_ (20 of 34).jpg",
}

const sliderImages = [
  "/enes-website/remklauwen/1000018243.jpg",
  "/enes-website/remklauwen/IMG_2540.JPG",
  "/enes-website/remklauwen/IMG_2288.jpg",
  "/enes-website/remklauwen/1000017877.jpg",
]

// Skeleton component for the Remklauwen Kleuren page
function RemklauwenKleurenSkeleton() {
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
          <Skeleton className="h-[700px] sm:h-[800px]" />
          <Skeleton className="h-[700px] sm:h-[800px]" />
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

export default function RemklauwenKleuren() {
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
      Wil je jouw auto een stijlvolle en sportieve upgrade geven? Kies voor remklauwen kleuren bij Wrapmaster! Het
      aanpassen van de kleur van je remklauwen is een subtiele, maar krachtige manier om de uitstraling van je voertuig
      naar een hoger niveau te tillen. Ons team van professionals met jarenlange ervaring zorgt voor een perfect
      resultaat dat jouw auto laat opvallen en tegelijkertijd de remklauwen beschermt tegen slijtage.
    </p>
  )

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Waarom je Remklauwen Kleuren?</h3>
      <p className="mt-3">
        Remklauwen zijn vaak een over het hoofd gezien detail, maar kunnen een groot verschil maken in het totaalplaatje
        van je auto. Met professionele kleuring van de remklauwen geef je jouw voertuig een unieke, persoonlijke touch
        die past bij jouw stijl. Bovendien beschermt de speciale coating de remklauwen tegen vuil, roest en hitte.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van remklauwen kleuren:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>
          Sportieve uitstraling: Geef jouw auto een dynamische look die perfect past bij sportwagens en luxe voertuigen.
        </li>
        <li>Personalisatie: Kies uit een breed scala aan kleuren die aansluiten bij jouw auto en smaak.</li>
        <li>Bescherming: De coating beschermt de remklauwen tegen roest, vuil en hoge temperaturen.</li>
        <li>
          Lange levensduur: Dankzij hoogwaardige materialen blijft de kleur langdurig mooi, zelfs bij intensief gebruik.
        </li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wrapmaster: Jouw Specialist in Remklauwen Kleuren</h3>
      <p className="mt-3">
        Bij Wrapmaster hebben we jarenlange ervaring in het professioneel kleuren van remklauwen. Ons team gebruikt
        alleen hoogwaardige hittebestendige coatings en zorgt voor een nauwkeurige en duurzame afwerking. Of je nu kiest
        voor een klassieke rode remklauw, een opvallende gele tint of een uniek metallic effect, wij garanderen een
        resultaat dat jouw auto laat schitteren.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Onze Remklauwkleur Opties</h3>
      <p className="mt-3">
        We bieden een breed scala aan kleuren en afwerkingen om jouw remklauwen perfect te laten aansluiten bij het
        design van je voertuig:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Klassieke kleuren: Rood, zwart, zilver of wit voor een tijdloze en stijlvolle look.</li>
        <li>Sportieve tinten: Geel, blauw, oranje of groen voor een opvallende en dynamische uitstraling.</li>
        <li>Speciale afwerkingen: Metallic, mat of glanzende lak voor een unieke en luxe uitstraling.</li>
        <li>Custom kleuren: Laat jouw remklauwen volledig personaliseren met een kleur naar keuze.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster staat kwaliteit altijd voorop. Ons team met jarenlange ervaring werkt met precisie en oog voor
        detail om ervoor te zorgen dat jouw remklauwen niet alleen mooi, maar ook duurzaam gekleurd worden. We begrijpen
        dat elk voertuig uniek is, en daarom bieden we maatwerk oplossingen die volledig aansluiten op jouw wensen.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van remklauwen kleuren bij Wrapmaster:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Professionele technieken: Wij gebruiken de nieuwste technologieën en tools voor een perfecte afwerking.</li>
        <li>Hoogwaardige coatings: Onze hittebestendige en slijtvaste coatings garanderen een langdurig resultaat.</li>
        <li>
          Snelle en efficiënte service: Wij zorgen ervoor dat je snel weer de weg op kunt met je vernieuwde remklauwen.
        </li>
        <li>Maatwerk: Of je nu een sportieve of subtiele look wilt, wij creëren een stijl die past bij jouw auto.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Onze Werkwijze</h3>
      <ol className="list-decimal list-inside mt-2">
        <li>Adviesgesprek: Samen bespreken we jouw wensen en helpen we je de perfecte kleur kiezen.</li>
        <li>
          Voorbereiding: De remklauwen worden grondig gereinigd en voorbereid om optimale hechting van de coating te
          garanderen.
        </li>
        <li>Kleuren: Met hoogwaardige hittebestendige lak wordt de kleur nauwkeurig aangebracht.</li>
        <li>
          Afwerking: Na het aanbrengen van de coating worden de remklauwen gecontroleerd en beschermd tegen
          beschadigingen.
        </li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Laat Jouw Remklauwen Opvallen met Wrapmaster!</h3>
      <p className="mt-3">
        Wil je jouw remklauwen een sportieve en stijlvolle upgrade geven? Kies voor de expertise van Wrapmaster en maak
        jouw auto uniek. Met onze professionele aanpak en hoogwaardige materialen garanderen we een resultaat dat de
        aandacht trekt en jarenlang meegaat. Neem vandaag nog contact met ons op voor meer informatie of een
        vrijblijvende offerte!
      </p>
    </>
  )

  // Show skeleton while loading
  if (loading) {
    return <RemklauwenKleurenSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="Remklauwen kleur veranderen bij Wrapmaster - Geef Jouw Auto een Sportieve en Luxe Uitstraling"
        description="Upgrade je auto met professioneel gekleurde remklauwen van Wrapmaster. Verbeter de look en bescherming van je remmen. Ontdek onze diensten!"
        canonical="https://wrapmasterdh.nl/remklauwen-kleuren"
        openGraph={{
          url: "https://wrapmasterdh.nl/remklauwen-kleuren",
          title: "Remklauwen kleur veranderen bij Wrapmaster - Geef Jouw Auto een Sportieve en Luxe Uitstraling",
          description:
            "Upgrade je auto met professioneel gekleurde remklauwen van Wrapmaster. Verbeter de look en bescherming van je remmen. Ontdek onze diensten!",
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
            content: "remklauwen, remklauwen kleur veranderen, remklauw coating, auto styling, remklauw verven",
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
              Remklauwen Kleuren bij Wrapmaster – Geef Jouw Auto een Sportieve en Luxe Uitstraling
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
                alt="Remklauwen Kleuren bij Wrapmaster"
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
            <div className="relative h-[700px] sm:h-[800px]">
              <Image
                src={dienstData.contentImage3 || "/placeholder.svg"}
                alt="Content Image 1"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative h-[700px] sm:h-[800px]">
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

        {/* Wrapmaster Services Section */}
        <section className="py-9">
          <OnzeDiensten />
        </section>
      </main>
    </>
  )
}
