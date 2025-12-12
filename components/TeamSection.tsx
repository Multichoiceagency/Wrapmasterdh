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
  bannerImage: string;
  teamMembers: TeamMember[];
}

export default function TeamSection({ bannerImage, teamMembers }: TeamSectionProps) {
  return (
    <div className="w-full">
      {/* ✅ Banner Image (i.p.v. video) */}
      <div className="relative h-[90vh] min-h-[300px] w-full mb-16">
        <Image 
          src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/ons-team/strength-people-hands-success-meeting.jpg"
          alt="Team Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end justify-center py-5">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Ons Team</h1>
        </div>
      </div>

      {/* Team Grid */}
      <div className="container w-full mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col items-center p-4">
              {/* ✅ Afbeelding is nu vierkant en klein */}
              <div className="relative w-32 h-32 aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <CardContent className="text-center mt-4">
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