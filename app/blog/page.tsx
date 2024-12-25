'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { NextSeo } from 'next-seo'
import { BlogPost } from '../types/blog'

async function getBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch("https://www.website.wrapmasterdh.nl/wp-json/wp/v2/nieuws?_embed", { next: { revalidate: 3600 } })
  const data = await res.json()

  return data.map((post: any) => ({
    id: post.id,
    title: post.title.rendered || "Geen titel",
    date: new Date(post.date).toLocaleDateString('nl-NL'),
    featured_image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
    video_file: post.scf?.video_file || "",
    excerpt: post.scf?.custom_excerpt || post.excerpt.rendered || "Geen samenvatting beschikbaar.",
    slug: post.slug,
  }))
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    getBlogPosts().then(setBlogPosts)
  }, [])

  return (
    <>
      <NextSeo
        title="Wrapmaster Blog - Laatste Nieuws en Evenementen"
        description="Ontdek de nieuwste trends, projecten en expertise in autofolie en voertuigaanpassingen op de Wrapmaster blog. Blijf op de hoogte van onze evenementen en industrietrends."
        canonical="https://wrapmasterdh.nl/blog"
        openGraph={{
          url: 'https://wrapmasterdh.nl/blog',
          title: 'Wrapmaster Blog - Laatste Nieuws en Evenementen',
          description: 'Ontdek de nieuwste trends, projecten en expertise in autofolie en voertuigaanpassingen op de Wrapmaster blog.',
          images: [
            {
              url: '/blog-hero.jpg',
              width: 1200,
              height: 630,
              alt: 'Wrapmaster Blog Hero Image',
            },
          ],
          site_name: 'Wrapmaster',
        }}
      />
      <main className="bg-white">
        {/* Hero Sectie */}
        <section className="relative h-[70vh] bg-gray-900">
          <Image
            src="/blog-hero.jpg"
            alt="Blog Hero"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Wrapmaster Blog
            </h1>
          </div>
        </section>

        {/* Blog Posts Sectie */}
        <section className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                <div className="relative aspect-[16/9] w-full h-64 overflow-hidden">
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
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
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
            ))}
          </div>
        </section>

        {/* Beschrijving Sectie */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Blijf op de hoogte met Wrapmaster</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ontdek het laatste nieuws, evenementen en inzichten uit de wereld van autofolie en voertuigaanpassingen. Onze blog is jouw go-to bron voor industrietrends, projectshowcases en experttips.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

