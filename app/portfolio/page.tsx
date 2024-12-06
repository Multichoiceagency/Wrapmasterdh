import PortfolioSection from '@/components/PortfolioSection';

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioSection 
        heroSlides={[
          {
            type: 'video',
            url: "https://res.cloudinary.com/dkdltgrov/video/upload/v1732802787/AUDI_RSQ8_CORRECTIE_trv9wc.mp4",
          },
          {
            type: 'image',
            url: "https://drive.google.com/uc?export=view&id=1lOJTNgeeaIGFyRrYgSoavLuGCq2OVJ4g",
          },
        ]}
        videos={[
          "https://res.cloudinary.com/dkdltgrov/video/upload/v1732802787/AUDI_RSQ8_CORRECTIE_trv9wc.mp4",
          "https://res.cloudinary.com/dkdltgrov/video/upload/v1732802787/AUDI_RSQ8_CORRECTIE_trv9wc.mp4",
          "https://res.cloudinary.com/dkdltgrov/video/upload/v1732802787/AUDI_RSQ8_CORRECTIE_trv9wc.mp4",
          "https://res.cloudinary.com/dkdltgrov/video/upload/v1732802787/AUDI_RSQ8_CORRECTIE_trv9wc.mp4",
        ]}
        images={[
          "https://drive.google.com/uc?export=view&id=1lOJTNgeeaIGFyRrYgSoavLuGCq2OVJ4g",
          "https://drive.google.com/uc?export=view&id=1lOJTNgeeaIGFyRrYgSoavLuGCq2OVJ4g",
          "https://drive.google.com/uc?export=view&id=1lOJTNgeeaIGFyRrYgSoavLuGCq2OVJ4g",
          "https://drive.google.com/uc?export=view&id=1lOJTNgeeaIGFyRrYgSoavLuGCq2OVJ4g",
        ]}
      />
    </main>
  );
}

