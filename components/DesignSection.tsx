interface DesignSectionProps {
    title: string;
    subtitle: string;
    description: string[];
  }
  
  export default function DesignSection({ title, subtitle, description }: DesignSectionProps) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-2">
            {title}
            <span className="font-bold"> {subtitle}</span>
          </h2>
          <div className="space-y-6 mt-8">
            {description.map((paragraph, index) => (
              <p key={index} className="text-gray-800 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  