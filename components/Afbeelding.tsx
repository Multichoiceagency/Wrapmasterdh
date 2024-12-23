'use client'

import Image from 'next/image'
import React from 'react'

function Afbeelding() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <Image
        src="/images/hero-background.jpg"
        alt="Full-screen banner"
        fill
        className="object-cover"
        priority
      />
    </section>
  )
}

export default Afbeelding

