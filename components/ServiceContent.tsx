'use client'

import Image from 'next/image'

interface Feature {
  title: string
  description: string
  icon: string
}

interface Testimonial {
  name: string
  content: string
  image: string
}

interface ServiceContentProps {
  content: string
  gallery: string[]
  features: Feature[]
  testimonials: Testimonial[]
}

export default function ServiceContent({
  content,
  gallery,
  features,
  testimonials
}: ServiceContentProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Main Content */}
      <div className="max-w-3xl mx-auto mb-16">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {/* Features */}
      {features && features.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gallery */}
      {gallery && gallery.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <h3 className="ml-3 font-semibold">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

