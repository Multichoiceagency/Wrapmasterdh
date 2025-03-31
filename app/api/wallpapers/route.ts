import { NextResponse } from "next/server"
import { getWallpapers } from "@/lib/getWallpapers"

export async function GET() {
  try {
    const wallpapers = await getWallpapers()
    return NextResponse.json(wallpapers, { status: 200 })
  } catch (error) {
    console.error("Fout bij ophalen wallpapers:", error)
    return NextResponse.json({ error: "Kan wallpapers niet laden." }, { status: 500 })
  }
}
