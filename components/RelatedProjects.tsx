'use client';

import Image from "next/image";
import Link from "next/link";

interface RelatedProject {
  ID: number;
  post_title: string;
  post_name: string;
  _thumbnail_id: {
    ID: number;
    guid: string;
  };
}

interface RelatedProjectsProps {
  relatedProjects: RelatedProject[];
}

export default function RelatedProjects({ relatedProjects }: RelatedProjectsProps) {
  return (
    <div className="container relative my-16">
      <div className="text-center mb-12 position-relative z-index-1">
        <h2 className="text-3xl font">Related Projects</h2>
      </div>
      {Array.isArray(relatedProjects) && relatedProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProjects.map((project) => (
            <Link key={project.ID} href={`/portfolio/${project.post_name}`}>
              <div className="block relative aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                <Image
                  src={project._thumbnail_id.guid}
                  layout="fill"
                  objectFit="cover"
                  alt={project.post_title}
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{project.post_title}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No related projects found.</p>
      )}
    </div>
  );
}

