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

// Dynamically import NextSeo to disable SSR for it.
const NextSeoClient = dynamic(() => import("next-seo").then((mod) => mod.NextSeo), { ssr: false })

const socialMedia = {
  instagram: "https://www.instagram.com/wrapmasterdh/",
  tiktok: "https://www.tiktok.com/@wrapmasterdh",
  whatsapp: "https://wa.me/31638718893",
  facebook: "https://www.facebook.com/WrapmasterDH",
}

const dienstData = {
  title: "LAMPEN TINTEN",
  description: "",
  heroImage: "http://localhost:3010/uploads/enes-website/lampen-tinten/1000008429.jpg",
  contentImage1: "http://localhost:3010/uploads/enes-website/lampen-tinten/lampentinten.jpg",
  contentImage2: "http://localhost:3010/uploads/enes-website/lampen-tinten/1000007448.jpg",
  contentImage3: "http://localhost:3010/uploads/enes-website/lampen-tinten/1000007506.jpg",
}

const sliderImages = [
  "http://localhost:3010/uploads/enes-website/lampen-tinten/DSC00224-2.jpg",
  "http://localhost:3010/uploads/enes-website/lampen-tinten/IMG_0123.JPEG",
  "http://localhost:3010/uploads/enes-website/lampen-tinten/IMG_5457.JPG",
  "http://localhost:3010/uploads/enes-website/lampen-tinten/IMG_0820.jpg",
]

const reels = [
  {
    id: 1,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/IMG_1975.mp4",
    likes: "65.2k",
    comments: "195",
  },
  {
    id: 2,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/S6 Lampen tinten - ontchroming V2.MP4",
    likes: "120k",
    comments: "345",
  },
]

// Skeleton component for the Lampentinten page
function LampentintenSkeleton() {
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
          <div className="relative h-[700px] sm:h-[700px]">
            <Skeleton className="h-full w-full" />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 p-2">
              <Skeleton className="h-8 w-24 mx-auto" />
            </div>
          </div>
          <div className="relative h-[700px] sm:h-[700px]">
            <Skeleton className="h-full w-full" />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 p-2">
              <Skeleton className="h-8 w-24 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Reels Section Skeleton - 2 side by side */}
      <section className="w-full bg-white py-16">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        <div className="flex justify-between gap-2 px-4">
          <Skeleton className="w-screen max-w-[49%] h-[300px] sm:h-[760px] rounded-lg" />
          <Skeleton className="w-screen max-w-[49%] h-[300px] sm:h-[760px] rounded-lg" />
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

export default function Lampentinten() {
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
      Wil je jouw auto een unieke uitstraling geven? Kies voor lampentinten bij Wrapmaster! Door je koplampen,
      achterlichten of mistlampen te tinten, geef je jouw voertuig een stoerdere en verfijnde uitstraling, zonder in te
      leveren op functionaliteit. Onze hoogwaardige tintfolies zijn speciaal ontworpen om je lampen te beschermen én de
      esthetiek van je auto te verbeteren.
    </p>
  )

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat zijn Lampentinten?</h3>
      <p className="mt-3">
        Lampentinten zijn speciale folies die worden aangebracht op de verlichting van je auto. Deze folies geven je
        lampen een donkerdere tint of een unieke kleur, zoals rookgrijs, geel of blauw. Naast de visuele upgrade bieden
        lampentinten ook extra bescherming tegen krassen, vuil en UV-straling, waardoor je verlichting langer meegaat.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom Kiezen voor Lampentinten?</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Unieke uitstraling: Transformeer de look van jouw auto met stijlvolle, donkere of gekleurde lampen.</li>
        <li>Bescherming: De folie beschermt je lampen tegen krassen, vuil en verkleuring door zonlicht.</li>
        <li>Flexibele opties: Kies uit verschillende tinten en kleuren die passen bij jouw stijl en voertuig.</li>
        <li>Omkeerbaar: De tintfolie is eenvoudig te verwijderen als je weer terug wilt naar de originele look.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Lampentinten bij Wrapmaster</h3>
      <p className="mt-3">
        Bij Wrapmaster zijn we gespecialiseerd in het professioneel tinten van lampen. Ons team gebruikt alleen premium
        tintfolies die veilig zijn voor je verlichting en voldoen aan de wettelijke richtlijnen. Dankzij onze
        nauwkeurige werkwijze zorgen we voor een naadloze en duurzame afwerking, zodat jouw auto er niet alleen mooi
        uitziet, maar ook functioneel blijft.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Voordelen van Lampentinten bij Wrapmaster</h3>
      <ul className="list-disc list-inside mt-2">
        <li>
          Hoogwaardige materialen: Wij werken met folies van topkwaliteit die bestand zijn tegen weersinvloeden en
          slijtage.
        </li>
        <li>
          Breed scala aan opties: Kies uit diverse tinten, zoals lichtgrijs, donker rookglas, geel of blauw, voor een
          unieke stijl.
        </li>
        <li>
          Professionele afwerking: Onze tinten worden strak en zonder luchtbellen aangebracht voor een perfect
          resultaat.
        </li>
        <li>Lange levensduur: Onze lampentinten blijven jarenlang mooi en beschermen jouw verlichting effectief.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Welke Lampen Kunnen We Tinten?</h3>
      <p className="mt-3">
        Bij Wrapmaster kunnen we vrijwel alle soorten verlichting van jouw voertuig tinten, waaronder:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Koplampen: Voor een sportieve en stoere look aan de voorkant.</li>
        <li>Achterlichten: Geef jouw auto een modernere en exclusieve uitstraling.</li>
        <li>Mistlampen: Maak jouw auto onderscheidend met een subtiele tint.</li>
        <li>Dagrijverlichting: Voeg een unieke stijl toe aan jouw dagrijlampen.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster mag je rekenen op vakmanschap, kwaliteit en aandacht voor detail. Ons ervaren team zorgt ervoor
        dat elke tintfolie perfect wordt aangebracht, zonder dat de functionaliteit van je verlichting wordt aangetast.
        Met onze focus op kwaliteit garanderen we een eindresultaat dat jouw verwachtingen overtreft.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Onze Werkwijze</h3>
      <ol className="list-decimal list-inside mt-2">
        <li>Advies: Samen bespreken we jouw wensen en de mogelijkheden qua kleur en tint.</li>
        <li>Voorbereiding: De lampen worden grondig gereinigd om een perfecte hechting te garanderen.</li>
        <li>Aanbrengen: De tintfolie wordt nauwkeurig aangebracht met behulp van geavanceerde technieken.</li>
        <li>Controle: We testen de verlichting om ervoor te zorgen dat deze volledig functioneel blijft.</li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Geef Jouw Auto een Exclusieve Look met Wrapmaster Lampentinten!</h3>
      <p className="mt-3">
        Wil jij jouw auto onderscheiden van de rest met stijlvolle en functionele lampentinten? Bij Wrapmaster ben je
        verzekerd van topkwaliteit en een afwerking waar je trots op kunt zijn. Neem vandaag nog contact met ons op voor
        meer informatie of een vrijblijvende offerte. Samen maken we jouw auto uniek!
      </p>
    </>
  )

  // Show skeleton while loading
  if (loading) {
    return <LampentintenSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="Lampentinten bij Wrapmaster - Geef Jouw Auto een Stoere en Exclusieve Look"
        description="Upgrade je auto met professionele lampentinten van Wrapmaster. Verbeter de uitstraling van je koplampen, achterlichten en meer. Ontdek onze diensten!"
        canonical="https://wrapmasterdh.nl/lampentinten"
        openGraph={{
          url: "https://wrapmasterdh.nl/lampentinten",
          title: "Lampentinten bij Wrapmaster - Geef Jouw Auto een Stoere en Exclusieve Look",
          description:
            "Upgrade je auto met professionele lampentinten van Wrapmaster. Verbeter de uitstraling van je koplampen, achterlichten en meer. Ontdek onze diensten!",
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
            content: "koplampen tinten, lampen tinten, koplampen donker maken, achterlichten tinten, mistlampen tinten",
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
              Lampentinten bij Wrapmaster – Geef Jouw Auto een Stoere en Exclusieve Look
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
                alt="Lampentinten bij Wrapmaster"
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
            <div className="relative h-[700px] sm:h-[700px]">
              <Image
                src={dienstData.contentImage2 || "/placeholder.svg"}
                alt="Content Image 1"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-2 text-xl font-semibold text-center">
                Before
              </div>
            </div>
            <div className="relative h-[700px] sm:h-[700px]">
              <Image
                src={dienstData.contentImage3 || "/placeholder.svg"}
                alt="Content Image 2"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-2 text-xl font-semibold text-center">
                After
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Reels Section */}
        <section className="w-full bg-white py-16">
          <h2 className="text-black text-3xl font-bold mb-8 text-center">Bekijk Onze Reels</h2>
          <div className="flex justify-between gap-2 px-4">
            {reels.slice(0, 2).map((reel) => (
              <div
                key={reel.id}
                className="relative w-screen max-w-[49%] h-[300px] sm:h-[760px] bg-black rounded-lg overflow-hidden"
              >
                <video src={reel.video} className="w-full h-full object-cover" loop muted autoPlay playsInline></video>
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
