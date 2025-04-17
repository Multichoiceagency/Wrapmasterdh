"use client"

import { useState, useEffect } from "react"
import HeroSection from "./components/hero/Hero"
import CustomSection from "./components/Customsection/CustomSection"
import ServicesSection from "./components/ServicesSection"
import NewsEvents from "@/components/newsevents"
import Afbeelding from "@/components/Afbeelding"
import DynamicSection from "@/components/DynamicSection"
import ProductSlider from "@/components/ProductSlider"
import OnzeDiensten from "./components/Diensten/Diensten"
import PrintFolie from "@/components/PrintFolie"
import NewCustomSection from "@/components/NewCustomSection"
import ThreeDCarwrapping from "@/components/ThreeDCarwrapping"
import BoatSection from "@/components/BoatSection"
import BoatenSlider from "@/components/BoatenSlider"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

const NextSeoClient = dynamic(() => import("next-seo").then((mod) => mod.NextSeo), { ssr: false })

// Dedicated skeleton component for the Home page
function HomePageSkeleton() {
  return (
    <div className="w-full overflow-x-hidden animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="relative h-[100vh]">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Skeleton className="h-16 w-64 mb-4" />
          <Skeleton className="h-8 w-96 mb-8" />
          <Skeleton className="h-12 w-48" />
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-16 container mx-auto">
        <Skeleton className="h-12 w-64 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-64 rounded-lg" />
          ))}
        </div>
      </section>

      {/* News Events Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <Skeleton className="h-12 w-64 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col">
                <Skeleton className="h-48 w-full rounded-t-lg" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Afbeelding Skeleton */}
      <section className="py-16">
        <Skeleton className="h-[500px] w-full" />
      </section>

      {/* Dynamic Section Skeleton */}
      <section className="py-16 container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <Skeleton className="h-[400px] rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-10 w-40 mt-4" />
          </div>
        </div>
      </section>

      {/* Onze Diensten Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <Skeleton className="h-12 w-64 mx-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-64 rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Section Skeleton */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-10 w-40 mt-4" />
            </div>
            <div className="w-full md:w-1/2">
              <Skeleton className="h-[400px] rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Slider Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <Skeleton className="h-12 w-64 mx-auto mb-8" />
          <div className="flex overflow-hidden">
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="min-w-[280px] h-[200px] rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Print Folie Skeleton */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <Skeleton className="h-[400px] rounded-lg" />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-10 w-40 mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 3D Carwrapping Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <Skeleton className="h-12 w-64 mx-auto mb-8" />
          <Skeleton className="h-[500px] w-full rounded-lg" />
        </div>
      </section>

      {/* New Custom Section Skeleton */}
      <section className="py-16">
        <div className="container mx-auto">
          <Skeleton className="h-12 w-64 mx-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-64 rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Boaten Slider Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <Skeleton className="h-12 w-64 mx-auto mb-8" />
          <div className="flex overflow-hidden">
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="min-w-[280px] h-[200px] rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Boat Section Skeleton */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-10 w-40 mt-4" />
            </div>
            <div className="w-full md:w-1/2">
              <Skeleton className="h-[400px] rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function Home() {
  // State for initial page loading
  const [pageLoading, setPageLoading] = useState(true)

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Show full skeleton while page is loading
  if (pageLoading) {
    return <HomePageSkeleton />
  }

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
              "arwrapping Den Haag, auto wrappen Rotterdam, professioneel auto wrappen, luxe carwrapping, PPF folie bescherming, premium autofolie, car wrap specialist Nederland, chrome delete service, matte wrap auto, kleur auto wrappen, carwrap prijzen, beste carwrapping bedrijf, paint protection film Nederland, auto styling specialist, 3M preferred wrapping, auto wrap garantie, carwrapping certificering, exclusieve auto wraps, high-end car wrapping, automotive customization",
          },
        ]}
      />
      <HeroSection />
      <ServicesSection />
      <NewsEvents />
      <Afbeelding />
      <DynamicSection />
      <OnzeDiensten />
      <CustomSection />
      <ProductSlider />
      <PrintFolie />
      <ThreeDCarwrapping />
      <NewCustomSection />
      <BoatenSlider />
      <BoatSection />
    </div>
  )
}
