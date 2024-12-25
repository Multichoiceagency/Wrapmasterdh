interface PortfolioContentProps {
  content: string;
  clientName: string;
  projectDate: string;
}

export default function PortfolioContent({ content, clientName, projectDate }: PortfolioContentProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div>
          <h3 className="text-2xl font mb-4">Project Details</h3>
          <ul className="space-y-2">
            <li><strong>Client:</strong> {clientName}</li>
            <li><strong>Date:</strong> {projectDate}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

