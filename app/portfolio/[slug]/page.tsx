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
        mediaType={portfolioItem.acf.hero_media_type}
        mediaUrl={portfolioItem.acf.hero_media_type === 'video' ? portfolioItem.acf.hero_video : portfolioItem.acf.hero_image}
        title={portfolioItem.acf.hero_title}
        buttonText={portfolioItem.acf.hero_button_text}
        buttonLink={portfolioItem.acf.hero_button_link}
      />
      <PortfolioContent
        videos={portfolioItem.acf.portfolio_videos}
        images={portfolioItem.acf.portfolio_images}
      />
    </div>
  )
}

