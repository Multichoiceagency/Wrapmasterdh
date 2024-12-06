import TeamSection from '@/components/TeamSection';

export default function TeamPage() {
  return (
    <main>
      <TeamSection 
        videoUrl="https://res.cloudinary.com/dkdltgrov/video/upload/v1732802787/AUDI_RSQ8_CORRECTIE_trv9wc.mp4"
        teamMembers={[
          {
            name: "Team Member 1",
            role: "Founder",
            image: "https://drive.google.com/uc?export=view&id=1lOJTNgeeaIGFyRrYgSoavLuGCq2OVJ4g"
          },
          {
            name: "Team Member 2",
            role: "Lead Designer",
            image: "https://drive.google.com/uc?export=view&id=1lOJTNgeeaIGFyRrYgSoavLuGCq2OVJ4g"
          },
          {
            name: "Team Member 3",
            role: "Specialist",
            image: "https://drive.google.com/uc?export=view&id=1lOJTNgeeaIGFyRrYgSoavLuGCq2OVJ4g"
          },
          {
            name: "Team Member 4",
            role: "Technician",
            image: "https://drive.google.com/uc?export=view&id=1lOJTNgeeaIGFyRrYgSoavLuGCq2OVJ4g"
          },
          {
            name: "Team Member 5",
            role: "Designer",
            image: "https://drive.google.com/uc?export=view&id=1lOJTNgeeaIGFyRrYgSoavLuGCq2OVJ4g"
          },
          {
            name: "Team Member 6",
            role: "Specialist",
            image: "https://drive.google.com/uc?export=view&id=1lOJTNgeeaIGFyRrYgSoavLuGCq2OVJ4g"
          },
          {
            name: "Team Member 7",
            role: "Technician",
            image: "https://drive.google.com/uc?export=view&id=1lOJTNgeeaIGFyRrYgSoavLuGCq2OVJ4g"
          },
        ]} 
      />
    </main>
  );
}

