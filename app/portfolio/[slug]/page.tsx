import { notFound } from 'next/navigation'
import PortfolioHero from '@/components/PortfolioHero'
import PortfolioContent from '@/components/PortfolioContent'

async function getPortfolioItem(slug: string) {
  const res = await fetch(`https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/portfolio?slug=${slug}&_embed`)
  if (!res.ok) {
    notFound()
  }
  const data = await res.json()
  return data[0]
}

export default async function PortfolioPage({ params }: { params: { slug: string } }) {
  const portfolioItem = await getPortfolioItem(params.slug)

  return (
    <div>
      <PortfolioHero
        title={portfolioItem.title.rendered}
        description={portfolioItem.acf?.description || ''}
        backgroundImage={portfolioItem.acf?.background_image || ''}
      />
      <PortfolioContent
        content={portfolioItem.content.rendered}
        gallery={portfolioItem.acf?.gallery || []}
        videos={portfolioItem.acf?.videos || []}
      />
    </div>
  )
}

