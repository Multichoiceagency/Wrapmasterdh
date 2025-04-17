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
  title: "SCOOTER & MOTOR WRAP",
  description: "",
  heroImage: "/enes-website/memo/29164.jpg",
  contentImage1: "/enes-website/memo/IMG_2491.JPG",
  contentImage2: "/enes-website/memo/IMG_7278-min.JPEG",
  contentImage3: "/enes-website/memo/IMG_2176-min.JPG",
}

const sliderImages = [
  "/enes-website/memo/IMG_0247-min.JPG",
  "/enes-website/memo/1000006100-min (1).jpg",
  "/enes-website/memo/IMG_2175-min (1).JPG",
  "/enes-website/memo/jetsky-min (1).JPG",
]

// Skeleton component for the Scooter en Motor Wraps page
function ScooterEnMotorWrapsSkeleton() {
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
          <Skeleton className="aspect-[4/3]" />
          <Skeleton className="aspect-[4/3]" />
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

export default function ScooterEnMotorWraps() {
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
      Wil je jouw scooter of motorfiets een compleet nieuwe look geven? Met een wrap op maat van Wrapmaster kun je jouw
      tweewieler personaliseren zoals jij dat wilt. Of je nu kiest voor een subtiele stijl of een opvallend design, ons
      team met jarenlange ervaring zorgt voor een hoogwaardige afwerking die zowel stijlvol als duurzaam is.
    </p>
  )

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is een Scooter of Motor Wrap?</h3>
      <p className="mt-3">
        Een scooter of motor wrap is een hoogwaardige folie die wordt aangebracht op de carrosserie van je tweewieler.
        Deze wrap beschermt niet alleen de originele lak tegen beschadigingen, maar biedt ook de mogelijkheid om het
        uiterlijk volledig te transformeren. Dankzij de uitgebreide keuzemogelijkheden in kleuren, patronen en
        afwerkingen kun je jouw scooter of motorfiets echt uniek maken.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor een Scooter of Motor Wrap?</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Personalisatie: Creëer een unieke look die perfect aansluit bij jouw stijl.</li>
        <li>Bescherming: Bescherm de originele lak tegen krassen, steenslag en weersinvloeden.</li>
        <li>Flexibiliteit: Een wrap kan eenvoudig worden verwijderd of vervangen zonder schade aan de lak.</li>
        <li>Betaalbaar alternatief: Een wrap is een voordelig alternatief voor een volledige spuitbeurt.</li>
        <li>Kleuren en designs: Kies uit een breed scala aan kleuren, patronen en speciale effecten.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wrap Opties voor Scooters en Motoren</h3>
      <p className="mt-3">
        Bij Wrapmaster bieden we talloze mogelijkheden om jouw tweewieler te personaliseren. Populaire opties zijn:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Effen kleuren: Voor een strakke, minimalistische look.</li>
        <li>Patronen: Kies voor opvallende graphics of unieke prints zoals camouflage of carbon.</li>
        <li>Speciale afwerkingen: Metallic, mat, satijn, chroom of zelfs een chameleon-effect.</li>
        <li>Reclame wraps: Ideaal voor bedrijven die hun merk willen promoten op een scooter of motorfiets.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster combineren we passie, vakmanschap en hoogwaardige materialen om jouw scooter of motorfiets naar
        een hoger niveau te tillen. Ons team heeft jarenlange ervaring met het wrappen van tweewielers, wat betekent dat
        we zelfs de meest complexe ontwerpen en vormen kunnen realiseren. Je kunt rekenen op een strakke, duurzame
        afwerking die indruk maakt op de weg.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van Wrapmaster:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>
          Hoogwaardige materialen: Wij gebruiken premium folies die bestand zijn tegen slijtage, UV-straling en
          weersinvloeden.
        </li>
        <li>Perfecte afwerking: Onze wraps worden nauwkeurig aangebracht zonder luchtbellen of zichtbare naden.</li>
        <li>Maatwerk: Elk ontwerp wordt volledig aangepast aan jouw wensen en de vormen van jouw scooter of motor.</li>
        <li>
          Snelle service: Wij zorgen ervoor dat jouw tweewieler snel weer de weg op kan met een frisse nieuwe look.
        </li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Onze Werkwijze</h3>
      <ol className="list-decimal list-inside mt-2">
        <li>
          Adviesgesprek: We bespreken jouw wensen en ideeën, en adviseren over de beste wrapopties voor jouw tweewieler.
        </li>
        <li>Ontwerp: Samen maken we een uniek ontwerp dat aansluit bij jouw stijl en voorkeuren.</li>
        <li>
          Voorbereiding: De scooter of motor wordt grondig gereinigd en voorbereid voor een optimale hechting van de
          folie.
        </li>
        <li>Installatie: Onze professionals brengen de wrap nauwkeurig aan voor een naadloze en duurzame afwerking.</li>
        <li>Aflevering: Na een laatste controle leveren we jouw tweewieler af, klaar om te schitteren op de weg.</li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Transformeer Jouw Scooter of Motor met Wrapmaster!</h3>
      <p className="mt-3">
        Wil jij jouw scooter of motorfiets onderscheiden van de rest? Kies voor een professionele wrap van Wrapmaster en
        geef jouw tweewieler een unieke uitstraling. Neem vandaag nog contact met ons op voor meer informatie of een
        vrijblijvende offerte. Samen zorgen we ervoor dat jouw tweewieler een echte blikvanger wordt!
      </p>
    </>
  )

  // Show skeleton while loading
  if (loading) {
    return <ScooterEnMotorWrapsSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="Scooter en Motor Wraps bij Wrapmaster - Maak van Jouw Tweewieler een Blikvanger"
        description="Personaliseer en bescherm je scooter of motor met professionele wraps van Wrapmaster. Creëer een unieke look die past bij jouw stijl. Ontdek onze diensten!"
        canonical="https://wrapmasterdh.nl/scooter-en-motor-wraps"
        openGraph={{
          url: "https://wrapmasterdh.nl/scooter-en-motor-wraps",
          title: "Scooter en Motor Wraps bij Wrapmaster - Maak van Jouw Tweewieler een Blikvanger",
          description:
            "Personaliseer en bescherm je scooter of motor met professionele wraps van Wrapmaster. Creëer een unieke look die past bij jouw stijl. Ontdek onze diensten!",
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
              "scooter en motorwrap, scooterwrap, motorwrap, tweewieler styling, scooter personalisatie, motor customization",
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
              Scooter en Motor Wraps bij Wrapmaster – Maak van Jouw Tweewieler een Blikvanger
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
                alt="Scooter en Motor Wraps bij Wrapmaster"
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

        {/* Wrapmaster Services Section */}
        <section className="py-9">
          <OnzeDiensten />
        </section>
      </main>
    </>
  )
}
