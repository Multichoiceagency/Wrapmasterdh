"use client"
import { Suspense } from "react"
import HeroSection from "./components/hero/Hero"
import ServicesSection from "./components/ServicesSection"
import dynamic from "next/dynamic"

// Components that are likely to be visible in the initial viewport
// are loaded normally to ensure they appear immediately

// Lazy load components that are likely below the fold
const NextSeoClient = dynamic(() => import("next-seo").then((mod) => mod.NextSeo), { ssr: false })

// Simple loading placeholder component
const LoadingPlaceholder = () => (
  <div className="w-full py-16 flex justify-center items-center">
    <div className="animate-pulse space-y-4 w-full max-w-4xl px-4">
      <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="h-40 bg-gray-200 rounded"></div>
        <div className="h-40 bg-gray-200 rounded"></div>
        <div className="h-40 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
)

// Lazy load components with appropriate loading placeholders
const NewsEvents = dynamic(() => import("@/components/newsevents"), {
  loading: () => <LoadingPlaceholder />,
  ssr: true,
})

const Afbeelding = dynamic(() => import("@/components/Afbeelding"), {
  loading: () => <LoadingPlaceholder />,
  ssr: true,
})

const DynamicSection = dynamic(() => import("@/components/DynamicSection"), {
  loading: () => <LoadingPlaceholder />,
  ssr: true,
})

const OnzeDiensten = dynamic(() => import("./components/Diensten/Diensten"), {
  loading: () => <LoadingPlaceholder />,
  ssr: true,
})

const CustomSection = dynamic(() => import("./components/Customsection/CustomSection"), {
  loading: () => <LoadingPlaceholder />,
  ssr: true,
})

const ProductSlider = dynamic(() => import("@/components/ProductSlider"), {
  loading: () => <LoadingPlaceholder />,
  ssr: true,
})

const PrintFolie = dynamic(() => import("@/components/PrintFolie"), {
  loading: () => <LoadingPlaceholder />,
  ssr: true,
})

const NewCustomSection = dynamic(() => import("@/components/NewCustomSection"), {
  loading: () => <LoadingPlaceholder />,
  ssr: true,
})

const ThreeDCarwrapping = dynamic(() => import("@/components/ThreeDCarwrapping"), {
  loading: () => <LoadingPlaceholder />,
  ssr: true,
})

const BoatSection = dynamic(() => import("@/components/BoatSection"), {
  loading: () => <LoadingPlaceholder />,
  ssr: true,
})

const BoatenSlider = dynamic(() => import("@/components/BoatenSlider"), {
  loading: () => <LoadingPlaceholder />,
  ssr: true,
})

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <NextSeoClient
        title="Wrapmaster - Professionele Carwrapping Specialist"
        description="Wrapmaster biedt hoogwaardige carwrapping, chrome delete, en andere autofolie diensten. Transformeer uw voertuig met onze expertise en kwaliteitsproducten."
        canonical="https://wrapmasterdh.nl/"
        openGraph={{
          url: "https://wrapmasterdh.nl/",
          title: "Wrapmaster - Professionele Carwrapping Specialist",
          description:
            "Ontdek de transformatieve kracht van professionele carwrapping en autofolie diensten bij Wrapmaster. Van chrome delete tot printfolie, wij bieden topkwaliteit voor uw voertuig.",
          images: [
            {
              url: "https://wrapmasterdh.nl/logos/logo-zwart.png",
              width: 1200,
              height: 630,
              alt: "Wrapmaster Carwrapping",
            },
          ],
          site_name: "Wrapmaster",
        }}
        twitter={{
          handle: "@wrapmasterdh",
          site: "@wrapmasterdh",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "carwrapping, autofolie, chrome delete, printfolie, voertuigbelettering, auto styling, auto wrappen Den Haag",
          },
        ]}
      />

      {/* Critical above-the-fold content loaded immediately */}
      <HeroSection />
      <ServicesSection />

      {/* Below-the-fold content lazy loaded */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <NewsEvents />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <Afbeelding />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <DynamicSection />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <OnzeDiensten />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <CustomSection />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <ProductSlider />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <PrintFolie />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <ThreeDCarwrapping />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <NewCustomSection />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <BoatenSlider />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <BoatSection />
      </Suspense>
    </div>
  )
}
