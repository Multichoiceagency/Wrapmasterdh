import fs from "fs/promises"
import path from "path"

export interface Wallpaper {
  id: string
  title: string
  imagePath: string
}

// ✅ Server-only functie voor ophalen wallpapers
export async function getWallpapers(): Promise<Wallpaper[]> {
  const wallpapersDirectory = path.join(process.cwd(), "public", "wallpapers")
  const fileNames = await fs.readdir(wallpapersDirectory)

  return fileNames
    .filter((fileName) => [".jpg", ".jpeg", ".png", ".webp"].includes(path.extname(fileName).toLowerCase()))
    .map((fileName) => ({
      id: fileName.replace(/\.[^/.]+$/, ""),
      title: fileName.replace(/\.[^/.]+$/, "").split("-").join(" "),
      imagePath: `/wallpapers/${fileName}`,
    }))
}
