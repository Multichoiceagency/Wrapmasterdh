"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// ✅ Dynamisch importeren zonder SSR
const NextSeoClient = dynamic(() =>
  import("next-seo").then((mod) => mod.NextSeo), { ssr: false }
);

// ✅ BlogPost type
type BlogPost = {
  id: number;
  title: string;
  date: string;
  featured_image: string;
  video_file: string;
  excerpt: string;
  slug: string;
};

// ✅ API-functie om blogposts op te halen
async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch("https://www.website.wrapmasterdh.nl/wp-json/wp/v2/nieuws?_embed", {
      next: { revalidate: 3600 }, // 1 uur cache
    });

    if (!res.ok) throw new Error("Fout bij ophalen van blogposts");

    const data = await res.json();

    return data.map((post: any) => ({
      id: post.id,
      title: post.title?.rendered || "Geen titel",
      date: new Date(post.date).toLocaleDateString("nl-NL"),
      featured_image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
      video_file: post.scf?.video_file || "",
      excerpt: post.scf?.custom_excerpt || post.excerpt?.rendered || "Geen samenvatting beschikbaar.",
      slug: post.slug,
    }));
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
}

// ✅ Blogpagina component
export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts()
      .then(setBlogPosts)
      .finally(() => setLoading(false));
  }, []);

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
              url: "/enes-website/carwrapping/urus-khaki/URUS-export.jpg",
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
          <video
            src="/enes-website/auto-wrappen/urus-khaki/urus.mp4"
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover opacity-100"
          ></video>
          <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center pb-4">
            <h1 className="text-2xl md:text-4xl font-medium text-white text-center">WRAPMASTER BLOG</h1>
          </div>
        </section>

        {/* ✅ Blog Grid */}
        <section className="container mx-auto py-12">
          {/* 🔹 Laadindicator */}
          {loading && <p className="text-center py-6 text-gray-600">Laden...</p>}

          {/* 🔹 Geen data fallback */}
          {!loading && blogPosts.length === 0 && (
            <p className="text-center py-6 text-gray-600">Geen blogs gevonden.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              post.slug && (
                <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                  {/* 📌 Afbeelding of video */}
                  <div className="relative aspect-[16/9] w-full h-64 overflow-hidden rounded-md">
                    {post.video_file && index === 0 ? (
                      <video
                        src={post.video_file}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      <Image
                        src={post.featured_image}
                        alt={post.title || "Blog afbeelding"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
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
              )
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
