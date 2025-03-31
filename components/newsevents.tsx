'use client'

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

interface NewsCard {
  id: number
  title: string
  date: string
  featured_image: string
  video_file: string
  excerpt: string
  slug: string
}

const NewsEvents: React.FC = () => {
  const [newsPosts, setNewsPosts] = useState<NewsCard[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(3) // State to manage visible cards

  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        const response = await fetch(
          "https://www.website.wrapmasterdh.nl/wp-json/wp/v2/nieuws?_embed"
        )
        const data = await response.json()

        const formattedPosts = data.map((post: any) => {
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg"

          return {
            id: post.id,
            title: post.title.rendered || "Untitled",
            date: new Date(post.date).toLocaleDateString(),
            featured_image: featuredImage,
            video_file: post.scf?.video_file || "",
            excerpt: post.scf?.custom_excerpt || post.excerpt.rendered || "No excerpt available.",
            slug: post.slug,
          }
        })

        console.log("Formatted Posts:", formattedPosts)
        setNewsPosts(formattedPosts)
      } catch (error) {
        console.error("Failed to fetch news posts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNewsPosts()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-16 h-16 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
      </div>
    )
  }

  const handleToggleNews = () => {
    if (visibleCount >= newsPosts.length) {
      setVisibleCount(3) // Reset to show only 3 posts
    } else {
      setVisibleCount(newsPosts.length) // Show all posts
    }
  }

  return (
    <section className="w-full py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-center mb-8">NEWS & EVENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsPosts.length === 0 ? (
            <div className="text-center text-gray-500 col-span-full">No news posts available.</div>
          ) : (
            newsPosts.slice(0, visibleCount).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block group overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {post.video_file ? (
                    <video
                      src={post.video_file}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    ></video>
                  ) : (
                    <Image
                      src={post.featured_image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-primary transition">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                  <p className="text-sm text-gray-700">
                    {post.excerpt.replace(/(<([^>]+)>)/gi, "").slice(0, 80)}...
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
        <div className="flex flex-col items-center mt-12">
          <button
            onClick={handleToggleNews}
            className="text-sm font-bold text-blue-600 hover:underline mb-4"
          >
            {visibleCount >= newsPosts.length ? "Laat minder nieuws zien" : "Laat meer nieuws zien"}
          </button>
          <Link
            href="/blog"
            className="px-6 py-3 bg-black text-white font-medium hover:bg-red-700 transition"
          >
            Bekijk alle nieuws
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsEvents
