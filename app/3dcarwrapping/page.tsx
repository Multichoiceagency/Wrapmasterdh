import { Suspense } from 'react';
import Image from 'next/image';
import { get3DCarWrappingPage } from '@/lib/api';
import ThreeDCarWrapping from '@/components/ThreeDCarwrapping';

async function HeroSection() {
  const pageData = await get3DCarWrappingPage();

  return (
    <section className="relative w-full h-[60vh]">
      <Image
        src={pageData.heroImage}
        alt="3D Car Wrapping Hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{pageData.heroTitle}</h1>
        <p className="text-xl md:text-2xl">{pageData.heroSubtitle}</p>
      </div>
    </section>
  );
}

export default function ThreeDCarWrappingPage() {
  return (
    <>
      <Suspense fallback={<div>Loading hero...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Loading 3D car wrapping...</div>}>
        <ThreeDCarWrapping />
      </Suspense>
    </>
  );
}

