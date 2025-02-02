'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { NextSeo } from 'next-seo'
import { BlogPost } from '../types/blog'

async function getBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch("https://www.website.wrapmasterdh.nl/wp-json/wp/v2/nieuws?_embed", { next: { revalidate: 3600 } })
  const data = await res.json()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
              url: '/enes-website/carwrapping/urus-khaki/URUS-export.jpg',
              width: 1200,
              height: 630,
              alt: 'Wrapmaster Blog Hero Image',
            },
          ],
          site_name: 'Wrapmaster',
        }}
      />
      <main className="bg-slate-200">
        {/* Hero Sectie */}
        <section className="relative h-[70vh]">
          <video
            src="/enes-website/auto-wrappen/urus-khaki/urus.mp4"
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover opacity-100"
          ></video>
          <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center pb-4">
            <h1 className="text-2xl md:text-4xl font-medium text-white text-center">
              WRAPMASTER BLOG
            </h1>
          </div>
        </section>
<section className="container mx-auto py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* 🔹 Verkleinde gap van 8 naar 4 */}
    {blogPosts.map((post) => (
      <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
        {/* Afbeelding of video */}
        <div className="relative aspect-[16/9] w-full h-64 overflow-hidden"> {/* 🔹 h-72 -> h-64 voor een compactere look */}
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

        {/* Card Content met compactere spacing */}
        <div className="p-3 bg-white rounded-md flex flex-col justify-between h-[200px]"> {/* 🔹 p-4 -> p-3 & h-220 -> h-200 */}
          {/* Titel met vaste hoogte */}
          <h3 className="text-l font-semibold text-gray-800 group-hover:text-primary transition min-h-[50px]">
            {post.title}
          </h3>

          {/* Beschrijving met limiet, zodat kaarten niet te lang worden */}
          <p className="text-sm text-gray-600 min-h-[50px] line-clamp-3">
            {post.excerpt.replace(/(<([^>]+)>)/gi, "").slice(0, 90)}...
          </p>

          {/* Datum altijd onderaan, zonder extra witruimte */}
          <p className="text-sm text-gray-500">{post.date}</p>
        </div>
      </Link>
    ))}
  </div>
</section>


        {/* Beschrijving Sectie */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Blijf Up-To-Date over de laatste nieuws met Wrapmaster!</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ontdek het laatste nieuws, evenementen en inzichten uit de wereld van autofolie en voertuigaanpassingen. Onze blog is jouw go-to bron voor industrietrends, projectshowcases en experttips.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
