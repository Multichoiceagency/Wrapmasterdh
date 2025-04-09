"use client"
import { useState } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import NewCustomSection from "@/components/NewCustomSection"

// Portfolio items
const portfolioItems = [
  { id: 1, title: "", featuredImage: "/enes-website/portfolio/brabus23.jpg" },
  { id: 2, title: "", featuredImage: "/enes-website/portfolio/brabus12.jpg" },
  { id: 3, title: "", featuredImage: "/enes-website/portfolio/brabus19.jpg" },
  { id: 4, title: "", featuredImage: "/enes-website/portfolio/Mercedez-Benz AMG GT63_DONE_ (6 of 41)-min.jpg" },
  { id: 5, title: "", featuredImage: "/enes-website/portfolio/Mercedez-Benz AMG GT63_DONE_ (19 of 41)-min.jpg" },
  { id: 6, title: "", featuredImage: "/enes-website/portfolio/Mercedez-Benz AMG GT63_DONE_ (32 of 41)-min-min.jpg" },
  { id: 8, title: "", featuredImage: "/enes-website/portfolio2/BlndrAgency_WRAPMASTER_HURUCAN (4 of 14)-min.jpg" },
  { id: 9, title: "", featuredImage: "/enes-website/portfolio2/BlndrAgency_WRAPMASTER_HURUCAN (10 of 14)-min.jpg" },
  { id: 10, title: "", featuredImage: "/enes-website/portfolio2/BlndrAgency_WRAPMASTER_HURUCAN (14 of 14)-min.jpg" },
  { id: 11, title: "", featuredImage: "/enes-website/portfolio2/BlndrAgency_Wrapmaster_URUS (1 of 14)-min.jpg" },
  { id: 12, title: "", featuredImage: "/enes-website/portfolio2/BlndrAgency_Wrapmaster_URUS (6 of 14)-min.jpg" },
  { id: 13, title: "", featuredImage: "/enes-website/portfolio2/BlndrAgency_Wrapmaster_URUS (8 of 14)-min.jpg" },
  { id: 15, title: "", featuredImage: "/enes-website/portfolio2/Lamborghini Urus5-min.jpg" },
  { id: 17, title: "", featuredImage: "/enes-website/portfolio2/Lamborghini Urus11-min.jpg" },
  { id: 18, title: "", featuredImage: "/enes-website/portfolio2/Lamborghini Urus18-min.jpg" },
  { id: 19, title: "", featuredImage: "/enes-website/ppf/Maasvlakte-4.jpg" },
  { id: 20, title: "", featuredImage: "/enes-website/ppf/Maasvlakte-17.jpg" },
  { id: 21, title: "", featuredImage: "/enes-website/ppf/Maasvlakte-9.jpg" },
  { id: 22, title: "", featuredImage: "/enes-website/portfolio2/RSQ3-7.jpg" },
  { id: 23, title: "", featuredImage: "/enes-website/portfolio2/RSQ3-28.jpg" },
  { id: 24, title: "", featuredImage: "/enes-website/portfolio2/WM-8.jpg" },
  { id: 25, title: "", featuredImage: "/enes-website/portfolio2/WM-25.jpg" },
  { id: 26, title: "", featuredImage: "/enes-website/portfolio2/WM-28.jpg" },
  { id: 27, title: "", featuredImage: "/enes-website/portfolio2/Maasvlakte-9 (2)-min.jpg" },
  { id: 28, title: "", featuredImage: "/enes-website/portfolio2/Maasvlakte-10.jpg" },
  { id: 29, title: "", featuredImage: "/enes-website/portfolio2/Maasvlakte-16 (2).jpg" },
  { id: 30, title: "", featuredImage: "/enes-website/portfolio2/Maasvlakte-21.jpg" },
  { id: 31, title: "", featuredImage: "/enes-website/portfolio2/Project- Ram-9.jpg" },
  { id: 32, title: "", featuredImage: "/enes-website/portfolio2/Project- Ram-10.jpg" },
  { id: 33, title: "", featuredImage: "/enes-website/portfolio2/Project- Ram-18.jpg" },
  { id: 34, title: "", featuredImage: "/enes-website/portfolio2/RS6-1.jpg" },
  { id: 35, title: "", featuredImage: "/enes-website/portfolio2/RS6-7.jpg" },
]

export default function PortfolioPage() {
  // Track loaded images
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({})
  const [heroLoaded, setHeroLoaded] = useState(false)

  // Image loading handlers
  const handleHeroLoad = () => setHeroLoaded(true)
  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({
      ...prev,
      [index]: true,
    }))
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[100vh]">
        {!heroLoaded && <Skeleton className="absolute inset-0 w-full h-full z-10" />}
        <Image
          src="/enes-website/portfolio/brabus24.jpg"
          alt="Wrapmaster Portfolio"
          width={1920}
          height={1080}
          className={`object-cover w-full h-full ${
            heroLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
          priority
          onLoad={handleHeroLoad}
        />
        <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center pb-4">
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-light text-white">PORTFOLIO</h2>
        </div>
      </section>

      {/* Portfolio Grid with Skeletons */}
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative w-full aspect-square md:aspect-auto ${
                index % 3 === 2 ? "md:col-span-2 md:h-[700px]" : "md:h-[700px]"
              }`}
            >
              {/* Show skeleton while image is loading */}
              {!loadedImages[index] && <Skeleton className="absolute inset-0 w-full h-full rounded-lg z-10" />}
              <Image
                src={item.featuredImage || "/placeholder.svg"}
                alt=""
                width={800}
                height={600}
                className={`object-cover w-full h-full rounded-lg ${
                  loadedImages[index] ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* New Custom Section */}
      <section>
        <div className="container mx-auto text-center">
          <NewCustomSection />
        </div>
      </section>
    </main>
  )
}
