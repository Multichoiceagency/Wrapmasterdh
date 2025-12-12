import TeamSection from '@/components/TeamSection';

export default function TeamPage() {
  return (
    <main>
      <TeamSection 
        teamMembers={[
          {
            name: "Altun",
            role: "Eigenaar",
            image: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/ons-team/ufuk.jpg"
          },
          {
            name: "Enes",
            role: "Marketing & Sales",
            image: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/ons-team/enes.jpg"
          },
          {
            name: "Adrian",
            role: "Carwrapper & Designer",
            image: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/ons-team/1 (1).bmp"
          },
          {
            name: "Patrick",
            role: "Carwrapper & PPF installer images ",
            image: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/ons-team/placeholder-2-1.png"
          },
          {
            name: "Kevin",
            role: "Carwrapper & PPF installer",
            image: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/ons-team/1-16.jpg"
          },
          {
            name: "Amelia",
            role: "Carwrapper",
            image: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/ons-team/1 (3).bmp"
          },
          {
            name: "Frank",
            role: "Carwrapper",
            image: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/ons-team/placeholder-2-1.png"
          },
          {
            name: "Ayoub",
            role: "Detailer",
            image: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/ons-team/1 (7).bmp"
          },
        ]} bannerImage={''}      />
    </main>
  );
}

