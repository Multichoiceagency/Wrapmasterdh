import CollaborationSection from "@/components/CollaborationSection"

// You can make this an async function if you need to fetch data
export default function SamenwerkingPage() {
  // If you need to fetch data, you can do it here
  // const data = await fetchData()

  // For now, using the static data
  const pageData = {
    heroImage: "http://localhost:3010/uploads/enes-website/samenwerking/Lamborghini Urus18.jpg",
    brands: [
      {
        name: "Brand 1",
        logo: "http://localhost:3010/uploads/enes-website/logosmerken/3m-04.png",
      },
      {
        name: "Brand 2",
        logo: "http://localhost:3010/uploads/enes-website/logosmerken/arlon-06.png",
      },
      {
        name: "Brand 3",
        logo: "http://localhost:3010/uploads/enes-website/logosmerken/Avery-01.png",
      },
      {
        name: "Brand 4",
        logo: "http://localhost:3010/uploads/enes-website/logosmerken/gswf-05.png",
      },
      {
        name: "Brand 5",
        logo: "http://localhost:3010/uploads/enes-website/logosmerken/hexis-03.png",
      },
      {
        name: "Brand 5",
        logo: "http://localhost:3010/uploads/enes-website/logosmerken/Xpel-02.png",
      },
      {
        name: "Brand 6",
        logo: "http://localhost:3010/uploads/enes-website/samenwerking/kpmf-800x800.jpg",
      },
      {
        name: "Brand 6",
        logo: "http://localhost:3010/uploads/enes-website/samenwerking/flexi_logo_paint.png",
      },
    ],
    partners: [
      {
        name: "Partner 1",
        logo: "http://localhost:3010/uploads/enes-website/samenwerking/niham-volvo (1).jpg",
      },
      {
        name: "Partner 2",
        logo: "http://localhost:3010/uploads/enes-website/samenwerking/Wittebrug.jpg",
      },
      {
        name: "Partner 3",
        logo: "http://localhost:3010/uploads/enes-website/samenwerking/logo-zz-color.webp",
      },
      {
        name: "Partner 4",
        logo: "http://localhost:3010/uploads/enes-website/samenwerking/agam.png",
      },
      {
        name: "Partner 5",
        logo: "http://localhost:3010/uploads/enes-website/samenwerking/romijn.jpeg",
      },
      {
        name: "Partner 5",
        logo: "http://localhost:3010/uploads/enes-website/samenwerking/Motorhuis-opel.jpeg",
      },
    ],
  }

  return (
    <main>
      <CollaborationSection heroImage={pageData.heroImage} brands={pageData.brands} partners={pageData.partners} />
    </main>
  )
}
