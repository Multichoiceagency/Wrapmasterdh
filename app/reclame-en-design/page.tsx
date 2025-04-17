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
  title: "RECLAME EN DESIGN",
  description: "",
  heroImage: "/enes-website/reclame/_GLA5938.jpg",
  contentImage1: "/enes-website/reclame/IMG_0605.JPEG",
  contentImage2: "/enes-website/reclame/gardenlux.JPG",
  contentImage3: "/enes-website/reclame/1F530CAE-FE9D-4B41-8508-4D07EEFE481E.jpg",
}

const sliderImages = [
  "/enes-website/reclame/claiomhof (8).JPG",
  "/enes-website/reclame/claiomhof (5).JPG",
  "/enes-website/reclame/_GLA5951.jpg",
  "/enes-website/reclame/44E4B936-2821-49A3-86E3-2564F1868B55.jpg",
]

// Skeleton component for the Reclame en Design Wraps page
function ReclameEnDesignWrapsSkeleton() {
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

export default function ReclameEnDesignWraps() {
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
      Ben je op zoek naar een krachtige manier om jouw merk te promoten of jouw voertuig een unieke uitstraling te
      geven? Bij Wrapmaster zijn we gespecialiseerd in reclame en design wraps die zowel zakelijk als persoonlijk
      gebruik naar een hoger niveau tillen. Met onze hoogwaardige wraptechnieken en jarenlange ervaring zorgen we voor
      een perfecte afwerking die jouw boodschap of design gegarandeerd laat opvallen.
    </p>
  )

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is een Reclame of Design Wrap?</h3>
      <p className="mt-3">
        Een reclame of design wrap is een hoogwaardige folie die op de buitenkant van een voertuig wordt aangebracht.
        Deze folie kan bedrukt worden met logo's, teksten, afbeeldingen en patronen die perfect aansluiten bij jouw
        branding of persoonlijke smaak. Dit maakt het dé ideale oplossing om je bedrijfswagen te transformeren tot een
        rijdend visitekaartje of om jouw privéauto een unieke look te geven.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom Kiezen voor een Reclame of Design Wrap?</h3>
      <ul className="list-disc list-inside mt-2">
        <li>
          Onderscheidend vermogen: Val op in het verkeer en trek de aandacht van potentiële klanten met een
          professioneel ontworpen wrap.
        </li>
        <li>Mobiele reclame: Bereik duizenden mensen per dag terwijl je onderweg bent.</li>
        <li>
          Flexibiliteit: De wrap is volledig aanpasbaar en kan eenvoudig worden vervangen of verwijderd zonder schade
          aan de lak.
        </li>
        <li>
          Bescherming: Naast een opvallend design beschermt de folie jouw originele lak tegen krassen en weersinvloeden.
        </li>
        <li>
          Kostenbesparend: Een wrap is een betaalbare en duurzame marketingoplossing in vergelijking met andere
          reclamemiddelen.
        </li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Reclame Wraps voor Bedrijven</h3>
      <p className="mt-3">
        Bij Wrapmaster begrijpen we hoe belangrijk het is om jouw merk zichtbaar te maken. Met onze reclame wraps kun je
        jouw bedrijfswagens omtoveren tot effectieve marketingtools. Wij werken nauw samen met jou om een ontwerp te
        creëren dat jouw branding versterkt en een professionele uitstraling biedt. Van subtiele logo's tot volledige
        voertuigbedekking, wij realiseren jouw visie.
      </p>
      <p className="mt-3">Populaire toepassingen voor reclame wraps:</p>
      <ul className="list-disc list-inside mt-2">
        <li>Logo's en contactgegevens op bedrijfswagens</li>
        <li>Volledig bedekte voertuigen met opvallende branding</li>
        <li>Reclame voor tijdelijke acties of evenementen</li>
        <li>Wrappen van hele wagenparken voor een consistente uitstraling</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Design Wraps voor Particulieren</h3>
      <p className="mt-3">
        Wil je jouw persoonlijke auto een unieke look geven? Onze design wraps bieden oneindige mogelijkheden. Van
        opvallende kleuren en patronen tot speciale effecten zoals metallic, mat, satijn of carbon-look – alles is
        mogelijk. Dankzij onze hoogwaardige materialen en nauwkeurige installatie ziet jouw auto er niet alleen uniek
        uit, maar blijft het ook goed beschermd.
      </p>
      <p className="mt-3">Mogelijkheden voor design wraps:</p>
      <ul className="list-disc list-inside mt-2">
        <li>Kleuropties: Kies uit honderden kleuren, inclusief speciale afwerkingen.</li>
        <li>Patronen en graphics: Voeg unieke ontwerpen toe aan je auto.</li>
        <li>Speciale effecten: Metallic, glanzend, mat of zelfs chameleon-effect wraps.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster mag je rekenen op een team van ervaren professionals met jarenlange ervaring in reclame- en
        design wraps. Ons vakmanschap, oog voor detail en gebruik van hoogwaardige materialen garanderen een naadloze en
        duurzame afwerking. Of je nu één voertuig wilt wrappen of een hele vloot, wij leveren altijd maatwerk dat
        volledig aansluit op jouw wensen.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van kiezen voor Wrapmaster:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Hoogwaardige materialen: Wij werken met premium folies die duurzaam en UV-bestendig zijn.</li>
        <li>
          Professioneel ontwerp: Onze ontwerpers zorgen voor creatieve en effectieve designs die jouw visie tot leven
          brengen.
        </li>
        <li>
          Nauwkeurige installatie: Onze wrapspecialisten zorgen voor een perfecte afwerking zonder luchtbellen of
          zichtbare naden.
        </li>
        <li>Volledige service: Van ontwerp tot installatie, wij begeleiden je bij elke stap van het proces.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Onze Werkwijze</h3>
      <ol className="list-decimal list-inside mt-2">
        <li>
          Adviesgesprek: We bespreken jouw wensen en doelen om een ontwerp te creëren dat past bij jouw merk of stijl.
        </li>
        <li>Ontwerp: Ons team maakt een uniek design op maat dat perfect aansluit op jouw voertuig.</li>
        <li>Voorbereiding: Het voertuig wordt grondig gereinigd en voorbereid voor de wrapinstallatie.</li>
        <li>Installatie: Onze professionals brengen de wrap nauwkeurig aan voor een strak en duurzaam resultaat.</li>
        <li>Aflevering: Na een laatste kwaliteitscontrole leveren we jouw voertuig in topconditie af.</li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Laat Jouw Auto Opvallen met Wrapmaster Reclame en Design Wraps!</h3>
      <p className="mt-3">
        Of je nu jouw merk wilt promoten of jouw voertuig een unieke uitstraling wilt geven, bij Wrapmaster ben je aan
        het juiste adres. Met onze reclame- en design wraps combineer je stijl, functionaliteit en bescherming in één
        pakket. Neem vandaag nog contact met ons op voor meer informatie of een vrijblijvende offerte. Samen zorgen we
        ervoor dat jouw voertuig de aandacht trekt die het verdient!
      </p>
    </>
  )

  // Show skeleton while loading
  if (loading) {
    return <ReclameEnDesignWrapsSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="Reclame en Design Wraps bij Wrapmaster - Laat Jouw Auto Opvallen!"
        description="Transformeer je voertuig met professionele reclame en design wraps van Wrapmaster. Ideaal voor bedrijfsreclame en unieke persoonlijke designs. Ontdek onze diensten!"
        canonical="https://wrapmasterdh.nl/reclame-en-design-wraps"
        openGraph={{
          url: "https://wrapmasterdh.nl/reclame-en-design-wraps",
          title: "Reclame en Design Wraps bij Wrapmaster - Laat Jouw Auto Opvallen!",
          description:
            "Transformeer je voertuig met professionele reclame en design wraps van Wrapmaster. Ideaal voor bedrijfsreclame en unieke persoonlijke designs. Ontdek onze diensten!",
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
            content: "reclame en belettering, autoreclame, reclame, voertuigbestickering, design wraps, carwrapping",
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
              Reclame en Design Wraps bij Wrapmaster – Laat Jouw Auto Opvallen!
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
                alt="Reclame en Design Wraps bij Wrapmaster"
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
