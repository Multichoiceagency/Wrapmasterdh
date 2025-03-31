import Image from 'next/image'

interface Feature {
  title: string
  description: string
  icon: string
}

interface Slide {
  imageUrl: string
  alt: string
}

interface DienstContentProps {
  content: string
  features: Feature[]
  gallery: string[]
  slides?: Slide[]
}

export default function DienstContent({ content, features, gallery, slides }: DienstContentProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="prose max-w-none mb-16" dangerouslySetInnerHTML={{ __html: content }} />
      
      {features.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <Image src={feature.icon} alt={feature.title} width={64} height={64} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {gallery.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image src={image} alt={`Gallery image ${index + 1}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      )}

      {slides && slides.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font mb-8">Slides</h2>
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              >
                <Image
                  src={slide.imageUrl}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                  className="transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

