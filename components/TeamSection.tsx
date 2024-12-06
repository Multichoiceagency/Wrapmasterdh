'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamSectionProps {
  videoUrl: string;
  teamMembers: TeamMember[];
}

const getMediaUrl = (url: string) => {
  if (url.includes('cloudinary.com')) {
    return url;
  }
  const fileId = url.match(/[-\w]{25,}/);
  return fileId ? `https://drive.google.com/uc?export=view&id=${fileId[0]}` : url;
};

export default function TeamSection({ videoUrl, teamMembers }: TeamSectionProps) {
  return (
    <div className="w-full">
      {/* Video Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full mb-16">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={getMediaUrl(videoUrl)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Ons Team</h1>
        </div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={getMediaUrl(member.image)}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

