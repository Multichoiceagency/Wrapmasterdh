'use client';

import Link from "next/link";
import Image from "next/image";
import { NextSeo } from 'next-seo';

// ✅ Portfolio items handmatig toegevoegd
const portfolioItems = [
  { id: 1, title: "Audi RS6", featuredImage: "/enes-website/portfolio/brabus23.jpg", slug: "audi-rs6" },
  { id: 2, title: "Lamborghini Urus", featuredImage: "/enes-website/portfolio/brabus12.jpg", slug: "lamborghini-urus" },
  { id: 3, title: "Mercedes G-Wagon", featuredImage: "/enes-website/portfolio/brabus19.jpg", slug: "mercedes-g-wagon" },
  { id: 4, title: "BMW M4", featuredImage: "/enes-website/portfolio/Mercedez-Benz AMG GT63_DONE_ (6 of 41)-min.jpg", slug: "bmw-m4" },
  { id: 5, title: "Porsche 911", featuredImage: "/enes-website/portfolio/Mercedez-Benz AMG GT63_DONE_ (19 of 41)-min.jpg", slug: "porsche-911" },
  { id: 6, title: "Ferrari 488", featuredImage: "/enes-website/portfolio/Mercedez-Benz AMG GT63_DONE_ (32 of 41)-min-min.jpg", slug: "ferrari-488" },
  { id: 7, title: "Tesla Model X", featuredImage: "/enes-website/portfolio/tesla-1.jpg", slug: "tesla-model-x" },
  { id: 8, title: "Range Rover SVR", featuredImage: "/enes-website/portfolio/range-rover-1.jpg", slug: "range-rover-svr" },
  { id: 9, title: "Nissan GT-R", featuredImage: "/enes-website/portfolio/gtr-1.jpg", slug: "nissan-gtr" },
  { id: 10, title: "Lexus LC500", featuredImage: "/enes-website/portfolio/lexus-1.jpg", slug: "lexus-lc500" },
  { id: 11, title: "BMW X6M", featuredImage: "/enes-website/portfolio/x6m-1.jpg", slug: "bmw-x6m" },
  { id: 12, title: "McLaren 720S", featuredImage: "/enes-website/portfolio/mclaren-1.jpg", slug: "mclaren-720s" },
  { id: 13, title: "Ford Mustang", featuredImage: "/enes-website/portfolio/mustang-1.jpg", slug: "ford-mustang" },
  { id: 14, title: "Audi R8", featuredImage: "/enes-website/portfolio/r8-1.jpg", slug: "audi-r8" },
  { id: 15, title: "Bentley Bentayga", featuredImage: "/enes-website/portfolio/bentley-1.jpg", slug: "bentley-bentayga" },
];

export default function PortfolioPage() {
  return (
    <>
      <NextSeo
        title="Wrapmaster Portfolio - Onze Projecten"
        description="Ontdek onze portfolio met indrukwekkende voertuigwraps en aanpassingen. Bekijk onze recente projecten!"
        canonical="https://wrapmasterdh.nl/portfolio"
      />

      <main className="bg-slate-200">
        {/* ✅ Hero Sectie ✅ */}
        <section className="relative h-[70vh]">
          <Image
            src="/enes-website/portfolio/brabus24.jpg"
            alt="Wrapmaster Portfolio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center pb-4">
            <h1 className="text-2xl md:text-4xl font-medium text-white text-center">
              WRAPMASTER PORTFOLIO
            </h1>
          </div>
        </section>

        {/* ✅ 2+1 Grid Portfolio ✅ */}
        <section className="container mx-auto py-12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center flex items-center">
            {portfolioItems.map((item, index) => (
              <div key={item.id} className={`relative w-full ${index % 3 === 2 ? 'md:col-span-2 h-[700px]' : 'h-[700px]'}`}>
                <Link href={`/portfolio/${item.slug}`} className="block group">
                  <Image
                    src={item.featuredImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Beschrijving Sectie ✅ */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Ontdek Onze Unieke Portfolio</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Bekijk ons werk en ontdek hoe we voertuigen transformeren met hoogwaardige carwraps en unieke aanpassingen.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
