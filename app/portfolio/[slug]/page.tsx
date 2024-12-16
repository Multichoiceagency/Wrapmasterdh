import { notFound } from 'next/navigation';
import PortfolioHero from '@/components/PortfolioHero';
import PortfolioContent from '@/components/PortfolioContent';
import RelatedProjects from '@/components/RelatedProjects';
import ProjectGallery from '@/components/ProjectGallery';

async function getPortfolioItem(slug: string) {
  const res = await fetch(`https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/portfolio?slug=${slug}&_embed`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  return data[0];
}

export default async function PortfolioPage({ params }: { params: { slug: string } }) {
  const portfolioItem = await getPortfolioItem(params.slug);

  return (
    <div>
      <PortfolioHero
        title={portfolioItem.title.rendered}
        description={portfolioItem.acf?.hero_description || ''}
        backgroundImage={portfolioItem.acf?.hero_image || portfolioItem._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'}
        mediaType={portfolioItem.acf?.hero_media_type || 'image'}
        videoUrl={portfolioItem.acf?.hero_video || ''}
      />
      <PortfolioContent
        content={portfolioItem.content.rendered}
        clientName={portfolioItem.acf?.client_name || ''}
        projectDate={portfolioItem.acf?.project_date || ''}
      />
      <ProjectGallery portfolioItem={portfolioItem} />
      <RelatedProjects relatedProjects={portfolioItem.acf?.related_projects || []} />
    </div>
  );
}

