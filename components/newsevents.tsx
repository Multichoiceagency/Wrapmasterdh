/* eslint-disable @typescript-eslint/no-explicit-any */
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
  link: string
}

const NewsEvents: React.FC = () => {
  const [newsPosts, setNewsPosts] = useState<NewsCard[]>([])
  const [isLoading, setIsLoading] = useState(true)

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
            link: post.scf?.custom_link || post.link || "#",
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

  return (
    <section className="container mx-auto  py-12">
      <h2 className="text-3xl font-bold text-center mb-8">NEWS & EVENTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsPosts.length === 0 ? (
          <div className="text-center text-gray-500">No news posts available.</div>
        ) : (
          newsPosts.map((post) => (
            <Link key={post.id} href={post.link} className="block group">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                {post.video_file ? (
                  <video
                    src={post.video_file}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-contain"
                  ></video>
                ) : (
                  <Image
                    src={post.featured_image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600">{post.date}</p>
                <p className="text-sm text-gray-700 mt-2">
                  {post.excerpt.replace(/(<([^>]+)>)/gi, "").slice(0, 80)}...
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
      <div className="flex justify-center mt-12">
        <Link
          href="/blog"
          className="px-6 py-3 bg-black text-white font-medium hover:bg-red-700 transition"
        >
          Bekijk alle nieuws
        </Link>
      </div>
    </section>
  )
}

export default NewsEvents

