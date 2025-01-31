import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;

  // Controleer of de URL een afbeeldingsbestand is (.jpg, .jpeg, .png)
  if (/\.(jpg|jpeg|png)$/i.test(pathname)) {
    // Vervang de extensie door .webp
    const webpPath = pathname.replace(/\.(jpg|jpeg|png)$/i, ".webp");

    // Redirect naar het webp-bestand als het bestaat
    return NextResponse.rewrite(new URL(webpPath, req.url));
  }

  return NextResponse.next();
}

// **Middleware toepassen op alle pagina's**
export const config = {
  matcher: "/:path*",
};
