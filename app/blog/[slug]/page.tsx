'use client'

import { BlogPost } from "@/app/types/blog"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const res = await fetch(`https://www.website.wrapmasterdh.nl/wp-json/wp/v2/nieuws?slug=${slug}&_embed`, { next: { revalidate: 3600 } })
  const posts = await res.json()

  if (posts.length === 0) {
    return null
  }

  const post = posts[0]
  return {
    id: post.id,
    title: post.title.rendered || "Geen titel",
    date: new Date(post.date).toLocaleDateString('nl-NL'),
    featured_image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
    video_file: post.scf?.video_file || "",
    excerpt: post.scf?.custom_excerpt || post.excerpt.rendered || "Geen samenvatting beschikbaar.",
    content: post.content.rendered || "Geen inhoud beschikbaar.",
    slug: post.slug,
  }
}

async function getRecentPosts(): Promise<BlogPost[]> {
  const res = await fetch(`https://www.website.wrapmasterdh.nl/wp-json/wp/v2/nieuws?_embed&per_page=6`, { next: { revalidate: 3600 } })
  const posts = await res.json()

  return posts.map((post: any) => ({
    id: post.id,
    title: post.title.rendered || "Geen titel",
    date: new Date(post.date).toLocaleDateString('nl-NL'),
    featured_image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
    excerpt: post.scf?.custom_excerpt || post.excerpt.rendered || "Geen samenvatting beschikbaar.",
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([])
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    slidesToScroll: 3,
    align: 'start'
  }, [Autoplay()])

  useEffect(() => {
    getBlogPost(params.slug).then(setPost)
    getRecentPosts().then(setRecentPosts)
  }, [params.slug])

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-16 h-16 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gray-900">
        <Image
          src={post.featured_image}
          alt={post.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="container mx-auto py-12 px-4">
        <Link href="/blog" className="text-primary hover:underline mb-4 inline-block">
          &larr; Terug naar Blog
        </Link>
        <div className="flex flex-col md:flex-row md:space-x-8 mt-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {post.video_file ? (
              <video
                src={post.video_file}
                controls
                className="w-full h-auto object-cover"
              ></video>
            ) : (
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-4">{post.date}</p>
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
          </div>
        </div>
      </article>

      {/* Recent Posts Slider */}
      <section className="bg-gray-100 py-12 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Recente Berichten</h2>
        </div>
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {recentPosts.map((recentPost) => (
              <div key={recentPost.id} className="embla__slide flex-[0_0_33.33%] min-w-0 px-4">
                <Link href={`/blog/${recentPost.slug}`} className="block group">
                  <div className="relative aspect-[16/9] w-full mb-4 overflow-hidden">
                    <Image
                      src={recentPost.featured_image}
                      alt={recentPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition">
                    {recentPost.title}
                  </h3>
                  <p className="text-sm text-gray-600">{recentPost.date}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

