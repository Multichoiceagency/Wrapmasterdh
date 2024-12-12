import Link from 'next/link'
import Image from 'next/image'
import { PortfolioHero } from '@/components/PortfolioHero'

async function getPortfolioHero() {
  const res = await fetch('https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/portfolio_hero?_embed')
  if (!res.ok) {
    throw new Error('Failed to fetch portfolio hero')
  }
  const data = await res.json()
  return data[0] // Assuming there's only one hero item
}

async function getPortfolioItems() {
  const res = await fetch('https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/portfolio?_embed')
  if (!res.ok) {
    throw new Error('Failed to fetch portfolio items')
  }
  return res.json()
}

export default async function PortfolioIndexPage() {
  const [heroData, portfolioItems] = await Promise.all([getPortfolioHero(), getPortfolioItems()])

  return (
    <div>
      <PortfolioHero
        title={heroData.title.rendered}
        subtitle={heroData.acf.hero_subtitle}
        backgroundImage={heroData._embedded['wp:featuredmedia'][0].source_url}
        buttonText={heroData.acf.hero_button_text}
        buttonLink={heroData.acf.hero_button_link}
      />

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item: any) => (
            <Link href={`/portfolio/${item.slug}`} key={item.id} className="block group">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={item._embedded['wp:featuredmedia'][0].source_url}
                  alt={item.title.rendered}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View Project</span>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold group-hover:text-gray-600 transition-colors duration-300">{item.title.rendered}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

