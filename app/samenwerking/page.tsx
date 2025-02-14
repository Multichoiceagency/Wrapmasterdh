import CollaborationSection from '@/components/CollaborationSection';

export default function SamenwerkingPage() {
  return (
    <main>
      <CollaborationSection 
        heroImage="/enes-website/samenwerking/3m-04.png"
        brands={[
          {
            name: "Brand 1",
            logo: "/enes-website/logosmerken/3m-04.png"
          },
          {
            name: "Brand 2",
            logo: "/enes-website/logosmerken/arlon-06.png"
          },
          {
            name: "Brand 3",
            logo: "/enes-website/logosmerken/Avery-01.png"
          },
          {
            name: "Brand 4",
            logo: "/enes-website/logosmerken/gswf-05.png"
          },
          {
            name: "Brand 5",
            logo: "/enes-website/logosmerken/hexis-03.png"
          },
          {
            name: "Brand 5",
            logo: "/enes-website/logosmerken/Xpel-02.png"
          },
        ]}
        partners={[
          {
            name: "Partner 1",
            logo: "/enes-website/samenwerking/niham-volvo (1).jpg"
          },
          {
            name: "Partner 2",
            logo: "/enes-website/samenwerking/Wittebrug.jpg"
          },
          {
            name: "Partner 3",
            logo: "/enes-website/samenwerking/logo-zz-color.webp"
          },
          {
            name: "Partner 4",
            logo: "/enes-website/samenwerking/niham-volvo (1).jpg"
          },
          {
            name: "Partner 5",
            logo: "/enes-website/samenwerking/niham-volvo (1).jpg"
          },
        ]}
      />
    </main>
  );
}

