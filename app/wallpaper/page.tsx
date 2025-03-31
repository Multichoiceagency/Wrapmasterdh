import { getWallpapers } from "@/lib/getWallpapers"
import WallpaperGallery from "@/components/wallpaper"

export default async function WallpaperPage() {
  const wallpapers = await getWallpapers() // ✅ Server-side ophalen van wallpapers

  return <WallpaperGallery wallpapers={wallpapers} />
}
