interface PortfolioHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  mediaType: 'image' | 'video';
  videoUrl: string;
}

export default function PortfolioHero({
  title,
  description,
  backgroundImage,
  mediaType,
  videoUrl,
}: PortfolioHeroProps) {
  return (
    <div className="relative w-full h-[60vh]">
      {mediaType === 'video' && videoUrl ? (
        <video
          controls
          className="w-full h-full object-cover"
          src={videoUrl}
        />
      ) : (
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="w-full h-full"
        />
      )}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font">{title}</h1>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
}
