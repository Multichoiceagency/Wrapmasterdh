'use client';

import { useState } from 'react';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import NewCustomSection from '@/components/NewCustomSection';

// Portfolio items (feel free to adjust or add more items)
const portfolioItems = [
  { id: 1, title: "", featuredImage: "/enes-website/portfolio/brabus23.jpg" },
  { id: 2, title: "", featuredImage: "/enes-website/portfolio/brabus12.jpg" },
  { id: 3, title: "", featuredImage: "/enes-website/portfolio/brabus19.jpg" },
  { id: 4, title: "", featuredImage: "/enes-website/portfolio/Mercedez-Benz AMG GT63_DONE_ (6 of 41)-min.jpg" },
  { id: 5, title: "", featuredImage: "/enes-website/portfolio/Mercedez-Benz AMG GT63_DONE_ (19 of 41)-min.jpg" },
  { id: 6, title: "", featuredImage: "/enes-website/portfolio/Mercedez-Benz AMG GT63_DONE_ (32 of 41)-min-min.jpg" },
  { id: 8, title: "", featuredImage: "/enes-website/portfolio2/BlndrAgency_WRAPMASTER_HURUCAN (4 of 14)-min.jpg" },
  { id: 9, title: "", featuredImage: "/enes-website/portfolio2/BlndrAgency_WRAPMASTER_HURUCAN (10 of 14)-min.jpg" },
  { id: 10, title: "", featuredImage: "/enes-website/portfolio2/BlndrAgency_WRAPMASTER_HURUCAN (14 of 14)-min.jpg" },
  { id: 11, title: "", featuredImage: "/enes-website/portfolio2/BlndrAgency_Wrapmaster_URUS (1 of 14)-min.jpg" },
  { id: 12, title: "", featuredImage: "/enes-website/portfolio2/BlndrAgency_Wrapmaster_URUS (6 of 14)-min.jpg" },
  { id: 13, title: "", featuredImage: "/enes-website/portfolio2/BlndrAgency_Wrapmaster_URUS (8 of 14)-min.jpg" },
  { id: 15, title: "", featuredImage: "/enes-website/portfolio2/Lamborghini Urus5-min.jpg" },
  { id: 17, title: "", featuredImage: "/enes-website/portfolio2/Lamborghini Urus11-min.jpg" },
  { id: 18, title: "", featuredImage: "/enes-website/portfolio2/Lamborghini Urus18-min.jpg" },
  { id: 22, title: "", featuredImage: "/enes-website/ppf/Maasvlakte-4.jpg" },
  { id: 23, title: "", featuredImage: "/enes-website/ppf/Maasvlakte-17.jpg" },
  { id: 24, title: "", featuredImage: "/enes-website/ppf/Maasvlakte-9.jpg" },
  { id: 26, title: "", featuredImage: "/enes-website/portfolio2/RSQ3-7.jpg" },
  { id: 27, title: "", featuredImage: "/enes-website/portfolio2/RSQ3-28.jpg" },
  { id: 28, title: "", featuredImage: "/enes-website/portfolio2/WM-8.jpg" },
  { id: 29, title: "", featuredImage: "/enes-website/portfolio2/WM-25.jpg" },
  { id: 30, title: "", featuredImage: "/enes-website/portfolio2/WM-28.jpg" },
  { id: 31, title: "", featuredImage: "/enes-website/portfolio2/Maasvlakte-9 (2)-min.jpg" },
  { id: 32, title: "", featuredImage: "/enes-website/portfolio2/Maasvlakte-10.jpg" },
  { id: 33, title: "", featuredImage: "/enes-website/portfolio2/Maasvlakte-16 (2).jpg" },
  { id: 34, title: "", featuredImage: "/enes-website/portfolio2/Maasvlakte-21.jpg" },
  { id: 35, title: "", featuredImage: "/enes-website/portfolio2/Project- Ram-9.jpg" },
  { id: 36, title: "", featuredImage: "/enes-website/portfolio2/Project- Ram-10.jpg" },
  { id: 37, title: "", featuredImage: "/enes-website/portfolio2/Project- Ram-18.jpg" },
  { id: 38, title: "", featuredImage: "/enes-website/portfolio2/RS6-1.jpg" },
  { id: 39, title: "", featuredImage: "/enes-website/portfolio2/RS6-7.jpg" },
  { id: 40, title: "", featuredImage: "/enes-website/portfolio2/RS6-10.jpg" },
];

export default function PortfolioPage() {
  // Allow selectedIndex to be a number or null
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedIndex((prev) => ((prev! - 1 + portfolioItems.length) % portfolioItems.length));
  };

  const showNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedIndex((prev) => ((prev! + 1) % portfolioItems.length));
  };

  return (
    <>
      <NextSeo
        title="Wrapmaster Portfolio - Onze Projecten"
        description="Ontdek onze portfolio met indrukwekkende voertuigwraps en aanpassingen. Bekijk onze recente projecten!"
        canonical="https://wrapmasterdh.nl/portfolio"
      />

      <main className="bg-white">
        {/* ✅ Hero Sectie ✅ */}
        <section className="relative h-[100vh]">
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
        <section className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative w-full ${index % 3 === 2 ? 'md:col-span-2 h-[700px]' : 'h-[700px]'}`}
              >
                <button
                  onClick={() => openModal(index)}
                  className="block group w-full h-full relative focus:outline-none"
                >
                  <Image
                    src={item.featuredImage}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                  />
                </button>
              </div>
            ))}
          </div>
        </section>
        <section>
        <div className="container mx-auto text-center">
        <NewCustomSection />
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

        {/* ✅ Modal Lightbox ✅ */}
        {selectedIndex !== null && (
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          >
            <button
              onClick={showPrev}
              className="absolute left-4 text-white text-3xl focus:outline-none"
            >
              &#8592;
            </button>
            <div className="max-w-4xl max-h-full relative">
              <Image
                src={portfolioItems[selectedIndex].featuredImage}
                alt=""
                width={500}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
            <button
              onClick={showNext}
              className="absolute right-4 text-white text-3xl focus:outline-none z-20"
            >
              &#8594;
            </button>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl focus:outline-none z-20"
            >
              &times;
            </button>
          </div>
        )}
      </main>
    </>
  );
}
