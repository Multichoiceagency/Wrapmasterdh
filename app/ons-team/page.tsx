import TeamSection from '@/components/TeamSection';

export default function TeamPage() {
  return (
    <main>
      <TeamSection 
        teamMembers={[
          {
            name: "Altun",
            role: "Eigenaar",
            image: "/enes-website/ons-team/ufuk.jpg"
          },
          {
            name: "Cinar",
            role: "Workshop manager",
            image: "/enes-website/ons-team/mehmet.jpg"
          },
          {
            name: "Enes",
            role: "Marketing & Sales",
            image: "/enes-website/ons-team/enes.jpg"
          },
          {
            name: "Adrian",
            role: "Carwrapper & Designer",
            image: "/enes-website/ons-team/1 (1).bmp"
          },
          {
            name: "Patrick",
            role: "Carwrapper & PPF installer images ",
            image: "/enes-website/ons-team/placeholder-2-1.png"
          },
          {
            name: "Kevin",
            role: "Carwrapper & PPF installer",
            image: "/enes-website/ons-team/1-16.jpg"
          },
          {
            name: "Amelia",
            role: "Carwrapper",
            image: "/enes-website/ons-team/1 (3).bmp"
          },
          {
            name: "Frank",
            role: "Carwrapper",
            image: "/enes-website/ons-team/placeholder-2-1.png"
          },
          {
            name: "Ayoub",
            role: "Detailer",
            image: "/enes-website/ons-team/1 (7).bmp"
          },
        ]} bannerImage={''}      />
    </main>
  );
}

