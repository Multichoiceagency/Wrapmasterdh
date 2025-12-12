import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { uploadToS3, isS3Configured } from "@/lib/s3"
import { saveOfferteSubmission } from "@/lib/db"

// In-memory rate limiting
const rateLimitMap = new Map<string, { count: number; lastRequest: number }>()
const RATE_LIMIT_WINDOW = 60000 // 1 minute
const MAX_REQUESTS = 5 // Max 5 requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record) {
    rateLimitMap.set(ip, { count: 1, lastRequest: now })
    return false
  }

  if (now - record.lastRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastRequest: now })
    return false
  }

  record.count++
  record.lastRequest = now

  return record.count > MAX_REQUESTS
}

export async function POST(req: Request) {
  try {
    // Get IP and user agent for tracking
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown"
    const userAgent = req.headers.get("user-agent") || "unknown"

    // Rate limit check
    if (checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Te veel aanvragen. Probeer het later opnieuw." },
        { status: 429 }
      )
    }

    const formData = await req.formData()

    // Helper function to get strings only
    const getString = (value: FormDataEntryValue | null) => (typeof value === "string" ? value : "")

    // Get form data
    const naam = getString(formData.get("naam"))
    const email = getString(formData.get("email"))
    const telefoonnummer = getString(formData.get("telefoonnummer"))
    const bedrijfsnaam = getString(formData.get("bedrijfsnaam"))
    const kenteken = getString(formData.get("kenteken"))
    const bouwjaar = getString(formData.get("bouwjaar"))
    const huidigeKleur = getString(formData.get("huidigeKleur"))
    const gewensteKleur = getString(formData.get("gewensteKleur"))
    const bericht = getString(formData.get("bericht"))

    // Validate required fields
    if (!naam || !email) {
      return NextResponse.json(
        { success: false, message: "Naam en e-mailadres zijn verplicht." },
        { status: 400 }
      )
    }

    // Process file uploads
    const uploadedFiles = formData.getAll("uploadedFiles") as File[]
    const attachments: { filename: string; content: Buffer }[] = []
    const s3FileLinks: string[] = []
    const s3FileUrls: string[] = [] // For database storage
    const useS3 = isS3Configured()

    for (const file of uploadedFiles) {
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json({ success: false, message: "Bestanden mogen maximaal 10MB zijn." }, { status: 400 })
      }

      const buffer = Buffer.from(await file.arrayBuffer())

      if (useS3) {
        try {
          const { url } = await uploadToS3(
            buffer,
            file.name,
            file.type,
            `offerte-aanvragen/${kenteken || "geen-kenteken"}`
          )
          s3FileLinks.push(`<a href="${url}">${file.name}</a>`)
          s3FileUrls.push(url)
        } catch (s3Error) {
          console.error("S3 upload failed, falling back to email attachment:", s3Error)
          attachments.push({
            filename: file.name,
            content: buffer,
          })
        }
      } else {
        attachments.push({
          filename: file.name,
          content: buffer,
        })
      }
    }

    // Save to database (don't fail if this fails)
    try {
      const dbResult = await saveOfferteSubmission({
        naam,
        email,
        telefoonnummer,
        bedrijfsnaam,
        kenteken,
        bouwjaar,
        huidige_kleur: huidigeKleur,
        gewenste_kleur: gewensteKleur,
        bericht,
        bijlagen: s3FileUrls,
        ip_address: ip,
        user_agent: userAgent,
      })

      if (!dbResult.success) {
        console.warn("Failed to save to database:", dbResult.error)
      }
    } catch (dbError) {
      console.warn("Database save error:", dbError)
    }

    // Configure nodemailer
    const port = Number(process.env.SMTP_PORT)
    const isSecure = port === 465

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Email content
    const fileLinksHtml = s3FileLinks.length > 0
      ? `<p><strong>Geüploade bestanden:</strong><br>${s3FileLinks.join("<br>")}</p>`
      : ""

    const emailContent = `
      <h2>Offerte aanvraag Wrapmaster</h2>
      <p><strong>Naam:</strong> ${naam}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefoonnummer:</strong> ${telefoonnummer}</p>
      <p><strong>Bedrijfsnaam:</strong> ${bedrijfsnaam || "N/A"}</p>
      <p><strong>Kenteken:</strong> ${kenteken || "N/A"}</p>
      <p><strong>Bouwjaar:</strong> ${bouwjaar || "N/A"}</p>
      <p><strong>Huidige Kleur:</strong> ${huidigeKleur || "N/A"}</p>
      <p><strong>Gewenste Kleur:</strong> ${gewensteKleur || "N/A"}</p>
      <p><strong>Bericht:</strong> ${bericht || "Geen bericht toegevoegd."}</p>
      ${fileLinksHtml}
    `

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"Wrapmaster" <${process.env.SMTP_FROM}>`,
      to: email,
      replyTo: process.env.SMTP_TO,
      subject: "Offerte Aanvraag Wrapmaster",
      html: `<p>Beste ${naam},</p>
              <p>Bedankt voor je aanvraag.</p>
              <p>Ons team bekijkt je aanvraag zorgvuldig en neemt direct contact met u op.</p>
            Met vriendelijke groet,<br>
            Team Wrapmaster<br>
          </p>
            <p>
              T: <a href="tel:0702250721" style="color: #333; text-decoration: none;">070 225 0721</a><br>
              M: <a href="tel:+31638718893" style="color: #333; text-decoration: none;">+31 6 38718893</a><br>
              E: <a href="mailto:info@wrapmasterdh.nl" style="color: #333; text-decoration: none;">info@wrapmasterdh.nl</a><br>
              W: <a href="https://www.wrapmasterdh.nl" style="color: #333; text-decoration: none;">www.wrapmasterdh.nl</a><br>
            </p>

            <!-- Social media links inline -->
            <p>
              <a href="https://www.instagram.com/wrapmasterdh/" style="color: #333; text-decoration: none;">Instagram</a>&nbsp;|&nbsp;
              <a href="https://www.facebook.com/WrapmasterDH" style="color: #333; text-decoration: none;">Facebook</a>&nbsp;|&nbsp;
              <a href="https://www.tiktok.com/@wrapmasterdh" style="color: #333; text-decoration: none;">TikTok</a>&nbsp;|&nbsp;
              <a href="https://www.youtube.com/@wrapmasterdh/videos" style="color: #333; text-decoration: none;">YouTube</a>
            </p>
          <!-- Website logo -->
          <p style="margin-top: 20px;">
            <img src="https://wrapmasterdh.nl/_next/image?url=%2Flogos%2Fhandtekening-zwart.png&w=256&q=75" alt="Wrapmaster Logo" width="150" height="50" style="vertical-align: middle;">
          </p>`,
      attachments,
    })

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: "Offerte aanvraag Wrapmaster",
      html: emailContent,
      attachments,
    })

    return NextResponse.json({ success: true, message: "E-mails verzonden met bijlagen!" })
  } catch (error) {
    console.error("Fout bij verzenden van e-mails:", error)
    return NextResponse.json({ success: false, message: "Er is een fout opgetreden." }, { status: 500 })
  }
}
