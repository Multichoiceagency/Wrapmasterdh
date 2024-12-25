import { HTMLAttributes } from 'react';

interface TechnicalSpecsProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  specs: string;
}

export default function TechnicalSpecs({ title, specs, className, ...props }: TechnicalSpecsProps) {
  return (
    <section 
      className={`bg-gray-50 py-16 sm:py-24 ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font tracking-tight uppercase text-center mb-8">
            {title}
          </h2>
          <div 
            className="prose prose-sm sm:prose lg:prose-lg mx-auto text-gray-600"
            dangerouslySetInnerHTML={{ __html: specs }}
          />
        </div>
      </div>
    </section>
  );
}

