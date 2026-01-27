"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import type { BlogPost } from "@/app/types/blog"
import Image from "next/image"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`)

    if (!res.ok) {
      throw new Error(`Failed to fetch post: ${res.status}`)
    }

    const posts = await res.json()

    if (posts.length === 0) return null

    const post = posts[0]
    return {
      id: post.id,
      title: post.title.rendered || "Geen titel",
      date: new Date(post.date).toLocaleDateString("nl-NL"),
      featured_image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
      video_file: post.acf?.video_file || "",
      excerpt: post.acf?.custom_excerpt || post.excerpt.rendered || "Geen samenvatting beschikbaar.",
      content: post.content.rendered || "Geen inhoud beschikbaar.",
      slug: post.slug,
    }
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

async function getRecentPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?_embed&per_page=6`)

    if (!res.ok) {
      throw new Error(`Failed to fetch recent posts: ${res.status}`)
    }

    const posts = await res.json()

    return posts.map((post: any) => ({
      id: post.id,
      title: post.title.rendered || "Geen titel",
      date: new Date(post.date).toLocaleDateString("nl-NL"),
      featured_image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
      excerpt: post.acf?.custom_excerpt || post.excerpt.rendered || "Geen samenvatting beschikbaar.",
      slug: post.slug,
    }))
  } catch (error) {
    console.error("Error fetching recent posts:", error)
    return []
  }
}

// Separate skeleton component for the blog post page
function BlogPostSkeleton() {
  return (
    <main className="bg-white">
      {/* Hero Section Skeleton */}
      <section className="relative h-[60vh] justify-center bg-gray-100">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Skeleton className="h-12 w-3/4 max-w-2xl" />
        </div>
      </section>

      {/* Blog Content Skeleton */}
      <article className="container mx-auto py-12 px-4">
        <Skeleton className="h-6 w-32 mb-8" />
        <div className="flex flex-col md:flex-row md:space-x-8 mt-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Skeleton className="aspect-[16/9] w-full rounded-xl" />
          </div>
          <div className="md:w-1/2">
            <Skeleton className="h-4 w-40 mb-4" />
            <Skeleton className="h-8 w-3/4 mb-6" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Skeleton className="h-12 w-64" />
        </div>
      </article>

      {/* Recent Posts Grid Skeleton */}
      <section className="bg-gray-100 py-12 w-full">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-64 mx-auto mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <Skeleton className="aspect-[4/3] w-full mb-4 rounded-md" />
                <Skeleton className="h-5 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      try {
        if (params?.slug) {
          const [postData, recentPostsData] = await Promise.all([getBlogPost(params.slug as string), getRecentPosts()])

          setPost(postData)
          setRecentPosts(recentPostsData)
        }
      } catch (err) {
        console.error("Error loading blog data:", err)
        setError("Er is een fout opgetreden bij het laden van de blogpost.")
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [params?.slug])

  // Show skeleton while loading
  if (loading) {
    return <BlogPostSkeleton />
  }

  // Show error state
  if (error || !post) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <p className="text-red-600 mb-4">{error || "Blogpost niet gevonden."}</p>
        <Link href="/blog" className="px-6 py-3 bg-black text-white hover:bg-red-700 transition-colors">
          Terug naar Blog
        </Link>
      </div>
    )
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] justify-center bg-gray-900">
        <Image
          src={post.featured_image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-3xl font-bold text-white text-center px-4">{post.title}</h1>
        </div>
      </section>

      {/* Blog Content */}
      <article className="container mx-auto py-12 px-4">
        <Link href="/blog" className="text-primary font-bold hover:text-red-700 hover:underline mb-4 inline-block">
          &larr; Terug naar Blog
        </Link>
        <div className="flex flex-col md:flex-row md:space-x-8 mt-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {post.video_file ? (
              <video src={post.video_file} controls className="w-full h-auto object-cover rounded-xl"></video>
            ) : (
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={post.featured_image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            )}
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-4">Plaatsingsdatum: {post.date}</p>
            <h2 className="text-3xl py-4 font-bold">{post.title}</h2>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content || "" }} />
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/offerte-aanvragen"
            className="px-6 py-3 bg-green-700 rounded-md uppercase text-white font-medium hover:bg-red-700 transition"
          >
            Vrijblijvend offerte aanvragen
          </Link>
        </div>
      </article>

      {/* Recent Posts Grid */}
      <section className="bg-gray-100 py-12 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Recente Berichten</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recentPosts.map((recentPost) => (
              <Link key={recentPost.id} href={`/blog/${recentPost.slug}`} className="block group">
                <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden rounded-md">
                  <Image
                    src={recentPost.featured_image || "/placeholder.svg"}
                    alt={recentPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2 group-hover:text-primary transition">
                  {recentPost.title}
                </h3>
                <p className="text-sm text-gray-600">{recentPost.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
