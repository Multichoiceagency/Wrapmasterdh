"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { OptimizedVideoEager, OptimizedVideo } from "@/components/ui/optimized-video"

// ✅ Dynamisch importeren zonder SSR
const NextSeoClient = dynamic(() => import("next-seo").then((mod) => mod.NextSeo), { ssr: false })

// ✅ BlogPost type
type BlogPost = {
  id: number
  title: string
  date: string
  featured_image: string
  video_file: string
  excerpt: string
  slug: string
}

// ✅ API-functie om blogposts op te halen
async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Remove the Next.js cache option since this is client-side
    const res = await fetch("https://www.website.wrapmasterdh.nl/wp-json/wp/v2/nieuws?_embed")

    if (!res.ok) throw new Error("Fout bij ophalen van blogposts")

    const data = await res.json()

    return data.map((post: any) => ({
      id: post.id,
      title: post.title?.rendered || "Geen titel",
      date: new Date(post.date).toLocaleDateString("nl-NL"),
      featured_image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
      video_file: post.scf?.video_file || "",
      excerpt: post.scf?.custom_excerpt || post.excerpt?.rendered || "Geen samenvatting beschikbaar.",
      slug: post.slug,
    }))
  } catch (error) {
    console.error("API error:", error)
    return []
  }
}

// Separate BlogPageSkeleton component
function BlogPageSkeleton() {
  return (
    <main className="bg-white">
      {/* Hero Section Skeleton */}
      <section className="relative h-[70vh]">
        <Skeleton className="w-full h-full" />
        <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center pb-4">
          <Skeleton className="h-10 w-64" />
        </div>
      </section>

      {/* Blog Grid Skeleton */}
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="flex flex-col">
              {/* Image skeleton */}
              <Skeleton className="w-full h-64 rounded-md" />

              {/* Content skeleton */}
              <div className="p-3 flex flex-col justify-between h-[200px]">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <Skeleton className="h-4 w-1/3 mt-2" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

// ✅ Blogpagina component
export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getBlogPosts()
      .then(setBlogPosts)
      .catch((err) => {
        console.error("Failed to fetch blog posts:", err)
        setError("Er is een fout opgetreden bij het laden van de blogposts.")
      })
      .finally(() => setLoading(false))
  }, [])

  // Show skeleton while loading
  if (loading) {
    return <BlogPageSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="Wrapmaster Blog - Laatste Nieuws en Evenementen"
        description="Ontdek de nieuwste trends, projecten en expertise in autofolie en voertuigaanpassingen op de Wrapmaster blog. Blijf op de hoogte van onze evenementen en industrietrends."
        canonical="https://wrapmasterdh.nl/blog"
        openGraph={{
          url: "https://wrapmasterdh.nl/blog",
          title: "Wrapmaster Blog - Laatste Nieuws en Evenementen",
          description:
            "Ontdek de nieuwste trends, projecten en expertise in autofolie en voertuigaanpassingen op de Wrapmaster blog.",
          images: [
            {
              url: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/carwrapping/urus-khaki/URUS-export.jpg",
              width: 1200,
              height: 630,
              alt: "Wrapmaster Blog Hero Image",
            },
          ],
          site_name: "Wrapmaster",
        }}
      />

      <main className="bg-white">
        {/* 🔥 Hero Sectie met video */}
        <section className="relative h-[70vh]">
          <OptimizedVideoEager
            src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/auto-wrappen/urus-khaki/urus.mp4"
            poster="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/carwrapping/urus-khaki/URUS-export.jpg"
            className="absolute w-full h-full"
          />
          <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center pb-4 z-20">
            <h1 className="text-2xl md:text-4xl font-medium text-white text-center">WRAPMASTER BLOG</h1>
          </div>
        </section>

        {/* ✅ Blog Grid */}
        <section className="container mx-auto py-12">
          {/* 🔹 Error state */}
          {error && (
            <div className="text-center py-6">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-black text-white hover:bg-red-700 transition-colors"
              >
                Probeer opnieuw
              </button>
            </div>
          )}

          {/* 🔹 Geen data fallback */}
          {!loading && !error && blogPosts.length === 0 && (
            <p className="text-center py-6 text-gray-600">Geen blogs gevonden.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map(
              (post, index) =>
                post.slug && (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                    {/* 📌 Afbeelding of video */}
                    <div className="relative aspect-[16/9] w-full h-64 overflow-hidden rounded-md">
                      {post.video_file && index === 0 ? (
                        <OptimizedVideo
                          src={post.video_file}
                          poster={post.featured_image}
                          className="rounded-md"
                        />
                      ) : (
                        <OptimizedImage
                          src={post.featured_image || "/placeholder.svg"}
                          alt={post.title || "Blog afbeelding"}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                          spinnerSize="sm"
                        />
                      )}
                    </div>

                    {/* 📌 Content */}
                    <div className="p-3 bg-white rounded-md flex flex-col justify-between h-[200px]">
                      <h3 className="text-l font-semibold text-gray-800 group-hover:text-primary transition min-h-[50px]">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 min-h-[50px] line-clamp-3">
                        {post.excerpt.replace(/(<([^>]+)>)/gi, "").slice(0, 90)}...
                      </p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </Link>
                ),
            )}
          </div>
        </section>
      </main>
    </>
  )
}
