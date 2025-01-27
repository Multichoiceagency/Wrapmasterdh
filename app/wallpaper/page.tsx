import Image from "next/image"
import { Download } from "lucide-react"
import { getWallpapers, type Wallpaper } from "@/lib/getWallpapers"

export default async function WallpaperPage() {
  const wallpapers = await getWallpapers()

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <section className="w-full h-[50vh] bg-black flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white uppercase">Wallpapers downloaden</h1>
      </section>

      {/* Wallpapers Section */}
      <section className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center uppercase mb-16">Download Jouw Favoriete Wallpapers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wallpapers.map((wallpaper) => (
            <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
          ))}
        </div>
      </section>
    </div>
  )
}

function WallpaperCard({ wallpaper }: { wallpaper: Wallpaper }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
      {/* Preview Image */}
      <div className="relative w-full h-64">
        <Image
          src={wallpaper.imagePath || "/placeholder.svg"}
          alt={wallpaper.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        {/* Download Link */}
        <a
          href={wallpaper.imagePath}
          download
          className="absolute bottom-2 right-2 p-2 bg-white bg-opacity-75 rounded-full hover:bg-opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          aria-label={`Download ${wallpaper.title}`}
        >
          <Download className="w-6 h-6 text-black" />
        </a>
      </div>

      {/* Details */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold uppercase group-hover:text-red-600 transition-colors">
          {wallpaper.title}
        </h3>
      </div>
    </div>
  )
}

