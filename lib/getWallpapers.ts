import fs from "fs/promises"
import path from "path"

export interface Wallpaper {
  id: string
  title: string
  imagePath: string
}

export async function getWallpapers(): Promise<Wallpaper[]> {
  const wallpapersDirectory = path.join(process.cwd(), "public", "wallpapers")
  const fileNames = await fs.readdir(wallpapersDirectory)

  const wallpapers: Wallpaper[] = fileNames
    .filter((fileName) => {
      const extension = path.extname(fileName).toLowerCase()
      return [".jpg", ".jpeg", ".png", ".webp"].includes(extension)
    })
    .map((fileName) => ({
      id: fileName.replace(/\.[^/.]+$/, ""),
      title: fileName
        .replace(/\.[^/.]+$/, "")
        .split("-")
        .join(" "),
      imagePath: `/wallpapers/${fileName}`,
    }))

  return wallpapers
}

