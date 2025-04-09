"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

interface NewsPost {
  id: number
  title: string
  date: string
  featured_image: string
  video_file: string
  excerpt: string
  slug: string
}

export default function NewsEvents() {
  const [newsPosts, setNewsPosts] = useState<NewsPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        // Consider moving this URL to an environment variable
        const response = await fetch(
          "https://www.website.wrapmasterdh.nl/wp-json/wp/v2/nieuws?_embed",
          { next: { revalidate: 3600 } }, // Cache for 1 hour
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()

        const formattedPosts = data.map((post: any) => {
          // Safely access nested properties
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg?height=300&width=400"

          // Parse the excerpt to remove HTML tags
          const rawExcerpt = post.scf?.custom_excerpt || post.excerpt?.rendered || ""
          const cleanExcerpt = rawExcerpt.replace(/<[^>]*>/g, "")

          return {
            id: post.id,
            title: post.title?.rendered || "Untitled",
            date: new Date(post.date).toLocaleDateString("nl-NL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            featured_image: featuredImage,
            video_file: post.scf?.video_file || "",
            excerpt: cleanExcerpt,
            slug: post.slug || `post-${post.id}`,
          }
        })

        setNewsPosts(formattedPosts)
      } catch (error) {
        console.error("Failed to fetch news posts:", error)
        setError("Er is een fout opgetreden bij het laden van nieuwsberichten.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchNewsPosts()
  }, [])

  const handleToggleNews = () => {
    if (visibleCount >= newsPosts.length) {
      setVisibleCount(3) // Reset to show only 3 posts
    } else {
      setVisibleCount(newsPosts.length) // Show all posts
    }
  }

  // Loading state
  if (isLoading) {
    return (
      <section className="w-full py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-8">NEWS & EVENTS</h2>
          <div className="flex items-center justify-center py-12">
            <div className="w-12 h-12 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    )
  }

  // Error state
  if (error) {
    return (
      <section className="w-full py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-8">NEWS & EVENTS</h2>
          <div className="text-center text-red-600 py-8">{error}</div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-center mb-8">NEWS & EVENTS</h2>

        {newsPosts.length === 0 ? (
          <div className="text-center text-gray-500 py-8">Geen nieuwsberichten beschikbaar.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsPosts.slice(0, visibleCount).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block group bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {post.video_file ? (
                    <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                      <source src={post.video_file} type="video/mp4" />
                      <Image
                        src={post.featured_image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </video>
                  ) : (
                    <Image
                      src={post.featured_image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=300&width=400"
                      }}
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-red-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                  <p className="text-sm text-gray-700">
                    {post.excerpt.length > 80 ? `${post.excerpt.substring(0, 80)}...` : post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {newsPosts.length > 3 && (
          <div className="flex flex-col items-center mt-12">
            <button
              onClick={handleToggleNews}
              className="text-sm font-bold text-black hover:text-red-700 hover:underline mb-4 transition-colors"
            >
              {visibleCount >= newsPosts.length ? "Laat minder nieuws zien" : "Laat meer nieuws zien"}
            </button>
            <Link href="/blog" className="px-6 py-3 bg-black text-white font-medium hover:bg-red-700 transition-colors">
              Bekijk alle nieuws
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
