import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import PDFDocument from "pdfkit"
import { uploadToS3, isS3Configured } from "@/lib/s3"
import { saveOfferteSubmission } from "@/lib/db"

// Generate PDF for offerte aanvraag
async function generateOffertePDF(data: {
  naam: string
  email: string
  telefoonnummer: string
  bedrijfsnaam: string
  kenteken: string
  bouwjaar: string
  huidigeKleur: string
  gewensteKleur: string
  bericht: string
  datum: string
  fileUrls: string[]
}): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50 })
    const chunks: Buffer[] = []

    doc.on("data", (chunk) => chunks.push(chunk))
    doc.on("end", () => resolve(Buffer.concat(chunks)))
    doc.on("error", reject)

    // Brand colors
    const primaryRed = "#DC2626"
    const darkGray = "#1F2937"
    const lightGray = "#F3F4F6"

    // Header with brand styling
    doc.rect(0, 0, doc.page.width, 120).fill(darkGray)

    // Company name
    doc.fillColor("#FFFFFF")
       .fontSize(28)
       .font("Helvetica-Bold")
       .text("WRAPMASTER", 50, 40)

    doc.fillColor(primaryRed)
       .fontSize(12)
       .font("Helvetica")
       .text("Premium Car Wrapping & Detailing", 50, 75)

    // Title
    doc.fillColor(darkGray)
       .fontSize(22)
       .font("Helvetica-Bold")
       .text("Offerte Aanvraag", 50, 150)

    // Date line
    doc.fillColor("#6B7280")
       .fontSize(10)
       .font("Helvetica")
       .text(`Aanvraagdatum: ${data.datum}`, 50, 180)

    // Divider
    doc.strokeColor(primaryRed)
       .lineWidth(3)
       .moveTo(50, 200)
       .lineTo(200, 200)
       .stroke()

    // Contact Info Section
    doc.fillColor(darkGray)
       .fontSize(14)
       .font("Helvetica-Bold")
       .text("Contactgegevens", 50, 230)

    doc.fontSize(11).font("Helvetica")
    let yPos = 255

    const contactFields = [
      { label: "Naam", value: data.naam },
      { label: "E-mail", value: data.email },
      { label: "Telefoon", value: data.telefoonnummer || "Niet opgegeven" },
      { label: "Bedrijf", value: data.bedrijfsnaam || "Particulier" },
    ]

    contactFields.forEach((field) => {
      doc.fillColor("#6B7280").text(`${field.label}:`, 50, yPos, { continued: true })
      doc.fillColor(darkGray).text(` ${field.value}`, { continued: false })
      yPos += 20
    })

    // Vehicle Info Section
    yPos += 20
    doc.fillColor(darkGray)
       .fontSize(14)
       .font("Helvetica-Bold")
       .text("Voertuiggegevens", 50, yPos)

    yPos += 25
    doc.fontSize(11).font("Helvetica")

    const vehicleFields = [
      { label: "Kenteken", value: data.kenteken || "Niet opgegeven" },
      { label: "Bouwjaar", value: data.bouwjaar || "Niet opgegeven" },
      { label: "Huidige kleur", value: data.huidigeKleur || "Niet opgegeven" },
      { label: "Gewenste kleur", value: data.gewensteKleur || "Niet opgegeven" },
    ]

    vehicleFields.forEach((field) => {
      doc.fillColor("#6B7280").text(`${field.label}:`, 50, yPos, { continued: true })
      doc.fillColor(darkGray).text(` ${field.value}`, { continued: false })
      yPos += 20
    })

    // Message Section
    if (data.bericht) {
      yPos += 20
      doc.fillColor(darkGray)
         .fontSize(14)
         .font("Helvetica-Bold")
         .text("Bericht van klant", 50, yPos)

      yPos += 25

      // Message box
      doc.rect(50, yPos, doc.page.width - 100, 80)
         .fill(lightGray)

      doc.fillColor(darkGray)
         .fontSize(10)
         .font("Helvetica")
         .text(data.bericht, 60, yPos + 10, {
           width: doc.page.width - 120,
           height: 70,
         })

      yPos += 100
    }

    // Uploaded files section
    if (data.fileUrls.length > 0) {
      yPos += 20
      doc.fillColor(darkGray)
         .fontSize(14)
         .font("Helvetica-Bold")
         .text("Bijlagen", 50, yPos)

      yPos += 25
      doc.fontSize(10).font("Helvetica").fillColor("#6B7280")

      data.fileUrls.forEach((url, index) => {
        doc.text(`${index + 1}. ${url}`, 50, yPos, {
          width: doc.page.width - 100,
          link: url,
          underline: true,
        })
        yPos += 15
      })
    }

    // Footer
    const footerY = doc.page.height - 80

    doc.rect(0, footerY, doc.page.width, 80).fill(darkGray)

    doc.fillColor("#FFFFFF")
       .fontSize(9)
       .font("Helvetica")
       .text("Wrapmaster Den Haag", 50, footerY + 15)
       .text("Westvlietweg 72-L, 2495 AA Den Haag", 50, footerY + 28)
       .text("Tel: 070 225 0721 | WhatsApp: +31 6 38718893", 50, footerY + 41)
       .text("info@wrapmasterdh.nl | www.wrapmasterdh.nl", 50, footerY + 54)

    doc.fillColor(primaryRed)
       .fontSize(9)
       .text("KvK: 68374232 | BTW: NL002332891B92", doc.page.width - 200, footerY + 28)

    doc.end()
  })
}

export async function POST(req: Request) {
  try {
    // Check SMTP configuration first
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("SMTP configuration missing:", {
        host: !!process.env.SMTP_HOST,
        user: !!process.env.SMTP_USER,
        password: !!process.env.SMTP_PASSWORD,
      })
      return NextResponse.json(
        { success: false, message: "E-mail configuratie ontbreekt. Neem contact op via telefoon." },
        { status: 500 }
      )
    }

    // Get IP and user agent for tracking
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown"
    const userAgent = req.headers.get("user-agent") || "unknown"

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
          s3FileLinks.push(`<a href="${url}" style="color: #DC2626;">${file.name}</a>`)
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

    // Generate PDF
    const datum = new Date().toLocaleDateString("nl-NL", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    let pdfBuffer: Buffer | null = null
    try {
      pdfBuffer = await generateOffertePDF({
        naam,
        email,
        telefoonnummer,
        bedrijfsnaam,
        kenteken,
        bouwjaar,
        huidigeKleur,
        gewensteKleur,
        bericht,
        datum,
        fileUrls: s3FileUrls,
      })
    } catch (pdfError) {
      console.error("PDF generation failed:", pdfError)
      // Continue without PDF - email is more important
    }

    // Configure nodemailer
    const port = Number(process.env.SMTP_PORT) || 587
    const isSecure = port === 465 // true for 465 (SSL), false for 587 (STARTTLS)

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
        ciphers: "SSLv3",
      },
      requireTLS: !isSecure, // Require STARTTLS for port 587
    })

    // Branded admin email content
    const fileLinksHtml = s3FileLinks.length > 0
      ? `
        <tr>
          <td style="padding: 20px 30px; background-color: #FEF2F2; border-radius: 8px;">
            <p style="margin: 0 0 10px 0; font-weight: 600; color: #1F2937;">📎 Bijlagen</p>
            ${s3FileLinks.map(link => `<p style="margin: 5px 0;">${link}</p>`).join("")}
          </td>
        </tr>
        <tr><td style="height: 20px;"></td></tr>
      `
      : ""

    const adminEmailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #F3F4F6;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF;">
        <!-- Header with Logo -->
        <tr>
          <td style="background-color: #1F2937; padding: 30px; text-align: center;">
            <img src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/logos/handtekening-wit.png" alt="Wrapmaster" width="180" style="margin-bottom: 10px;">
          </td>
        </tr>

        <!-- Alert Banner -->
        <tr>
          <td style="background-color: #DC2626; padding: 15px 30px; text-align: center;">
            <p style="margin: 0; color: #FFFFFF; font-size: 16px; font-weight: 600;">🚗 Nieuwe Offerte Aanvraag</p>
          </td>
        </tr>

        <!-- Date -->
        <tr>
          <td style="padding: 20px 30px 10px 30px;">
            <p style="margin: 0; color: #6B7280; font-size: 12px;">Ontvangen op: ${datum}</p>
          </td>
        </tr>

        <!-- Contact Info -->
        <tr>
          <td style="padding: 10px 30px;">
            <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #F9FAFB; border-radius: 8px; border-left: 4px solid #DC2626;">
              <tr>
                <td style="padding: 20px;">
                  <h2 style="margin: 0 0 15px 0; color: #1F2937; font-size: 16px; font-weight: 600;">👤 Contactgegevens</h2>
                  <table width="100%" cellspacing="0" cellpadding="5">
                    <tr>
                      <td width="120" style="color: #6B7280; font-size: 14px;">Naam:</td>
                      <td style="color: #1F2937; font-size: 14px; font-weight: 600;">${naam}</td>
                    </tr>
                    <tr>
                      <td style="color: #6B7280; font-size: 14px;">E-mail:</td>
                      <td style="color: #1F2937; font-size: 14px;"><a href="mailto:${email}" style="color: #DC2626; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="color: #6B7280; font-size: 14px;">Telefoon:</td>
                      <td style="color: #1F2937; font-size: 14px;"><a href="tel:${telefoonnummer}" style="color: #DC2626; text-decoration: none;">${telefoonnummer || "Niet opgegeven"}</a></td>
                    </tr>
                    <tr>
                      <td style="color: #6B7280; font-size: 14px;">Bedrijf:</td>
                      <td style="color: #1F2937; font-size: 14px;">${bedrijfsnaam || "Particulier"}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Vehicle Info -->
        <tr>
          <td style="padding: 10px 30px;">
            <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #F9FAFB; border-radius: 8px; border-left: 4px solid #1F2937;">
              <tr>
                <td style="padding: 20px;">
                  <h2 style="margin: 0 0 15px 0; color: #1F2937; font-size: 16px; font-weight: 600;">🚘 Voertuiggegevens</h2>
                  <table width="100%" cellspacing="0" cellpadding="5">
                    <tr>
                      <td width="120" style="color: #6B7280; font-size: 14px;">Kenteken:</td>
                      <td style="color: #1F2937; font-size: 14px; font-weight: 600; text-transform: uppercase;">${kenteken || "Niet opgegeven"}</td>
                    </tr>
                    <tr>
                      <td style="color: #6B7280; font-size: 14px;">Bouwjaar:</td>
                      <td style="color: #1F2937; font-size: 14px;">${bouwjaar || "Niet opgegeven"}</td>
                    </tr>
                    <tr>
                      <td style="color: #6B7280; font-size: 14px;">Huidige kleur:</td>
                      <td style="color: #1F2937; font-size: 14px;">${huidigeKleur || "Niet opgegeven"}</td>
                    </tr>
                    <tr>
                      <td style="color: #6B7280; font-size: 14px;">Gewenste kleur:</td>
                      <td style="color: #DC2626; font-size: 14px; font-weight: 600;">${gewensteKleur || "Niet opgegeven"}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Message -->
        ${bericht ? `
        <tr>
          <td style="padding: 10px 30px;">
            <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #FEF3C7; border-radius: 8px;">
              <tr>
                <td style="padding: 20px;">
                  <h2 style="margin: 0 0 10px 0; color: #1F2937; font-size: 16px; font-weight: 600;">💬 Bericht</h2>
                  <p style="margin: 0; color: #1F2937; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${bericht}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        ` : ""}

        <!-- Files -->
        ${fileLinksHtml}

        <!-- Action Buttons -->
        <tr>
          <td style="padding: 20px 30px;">
            <table width="100%" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center">
                  <a href="mailto:${email}?subject=Re: Offerte Aanvraag Wrapmaster"
                     style="display: inline-block; background-color: #DC2626; color: #FFFFFF; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                    ✉️ Beantwoord Aanvraag
                  </a>
                  ${telefoonnummer ? `
                  <a href="tel:${telefoonnummer}"
                     style="display: inline-block; background-color: #1F2937; color: #FFFFFF; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; margin-left: 10px;">
                    📞 Bel Klant
                  </a>
                  ` : ""}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color: #1F2937; padding: 20px 30px; text-align: center;">
            <p style="margin: 0 0 5px 0; color: #9CA3AF; font-size: 12px;">Wrapmaster Den Haag</p>
            <p style="margin: 0 0 5px 0; color: #9CA3AF; font-size: 12px;">Westvlietweg 72-L, 2495 AA Den Haag</p>
            <p style="margin: 0; color: #6B7280; font-size: 11px;">Deze e-mail is automatisch gegenereerd</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `

    // Branded customer confirmation email
    const customerEmailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #F3F4F6;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF;">
        <!-- Header with Logo -->
        <tr>
          <td style="background-color: #1F2937; padding: 30px; text-align: center;">
            <img src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/logos/handtekening-wit.png" alt="Wrapmaster" width="180" style="margin-bottom: 10px;">
          </td>
        </tr>

        <!-- Success Banner -->
        <tr>
          <td style="background-color: #10B981; padding: 20px 30px; text-align: center;">
            <p style="margin: 0; color: #FFFFFF; font-size: 18px; font-weight: 600;">✓ Aanvraag Ontvangen!</p>
          </td>
        </tr>

        <!-- Main Content -->
        <tr>
          <td style="padding: 40px 30px;">
            <h2 style="margin: 0 0 20px 0; color: #1F2937; font-size: 22px;">Beste ${naam},</h2>

            <p style="margin: 0 0 20px 0; color: #4B5563; font-size: 15px; line-height: 1.7;">
              Bedankt voor je offerte aanvraag! We hebben je verzoek in goede orde ontvangen en ons team gaat er direct mee aan de slag.
            </p>

            <p style="margin: 0 0 25px 0; color: #4B5563; font-size: 15px; line-height: 1.7;">
              Je ontvangt binnen <strong style="color: #DC2626;">24 uur</strong> een persoonlijke offerte van ons.
            </p>

            <!-- What's Next Box -->
            <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #F9FAFB; border-radius: 12px; border-left: 4px solid #DC2626;">
              <tr>
                <td style="padding: 25px;">
                  <h3 style="margin: 0 0 15px 0; color: #1F2937; font-size: 16px; font-weight: 600;">📋 Wat kun je verwachten?</h3>
                  <table width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="padding: 8px 0; color: #4B5563; font-size: 14px;">
                        <span style="color: #10B981; font-weight: bold;">1.</span> We bekijken je aanvraag zorgvuldig
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #4B5563; font-size: 14px;">
                        <span style="color: #10B981; font-weight: bold;">2.</span> We stellen een passende offerte op
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #4B5563; font-size: 14px;">
                        <span style="color: #10B981; font-weight: bold;">3.</span> We nemen contact met je op voor details
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Your Request Summary -->
        <tr>
          <td style="padding: 0 30px 30px 30px;">
            <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #1F2937; border-radius: 12px;">
              <tr>
                <td style="padding: 25px;">
                  <h3 style="margin: 0 0 15px 0; color: #FFFFFF; font-size: 16px; font-weight: 600;">🚗 Jouw aanvraag</h3>
                  <table width="100%" cellspacing="0" cellpadding="5">
                    ${kenteken ? `
                    <tr>
                      <td width="120" style="color: #9CA3AF; font-size: 13px;">Kenteken:</td>
                      <td style="color: #FFFFFF; font-size: 13px; font-weight: 600; text-transform: uppercase;">${kenteken}</td>
                    </tr>
                    ` : ""}
                    ${gewensteKleur ? `
                    <tr>
                      <td style="color: #9CA3AF; font-size: 13px;">Gewenste kleur:</td>
                      <td style="color: #DC2626; font-size: 13px; font-weight: 600;">${gewensteKleur}</td>
                    </tr>
                    ` : ""}
                    <tr>
                      <td style="color: #9CA3AF; font-size: 13px;">Aanvraagdatum:</td>
                      <td style="color: #FFFFFF; font-size: 13px;">${datum}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- CTA Button -->
        <tr>
          <td style="padding: 0 30px 30px 30px; text-align: center;">
            <p style="margin: 0 0 15px 0; color: #6B7280; font-size: 14px;">Vragen? Neem gerust contact met ons op!</p>
            <a href="https://wa.me/31638718893"
               style="display: inline-block; background-color: #25D366; color: #FFFFFF; padding: 14px 35px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px;">
              💬 WhatsApp Ons
            </a>
          </td>
        </tr>

        <!-- Contact Info -->
        <tr>
          <td style="padding: 0 30px 30px 30px;">
            <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #F9FAFB; border-radius: 12px;">
              <tr>
                <td style="padding: 25px; text-align: center;">
                  <p style="margin: 0 0 5px 0; color: #6B7280; font-size: 13px;">Westvlietweg 72-L, 2495 AA Den Haag</p>
                  <p style="margin: 0; color: #6B7280; font-size: 13px;">
                    <a href="tel:0702250721" style="color: #DC2626; text-decoration: none;">070 225 0721</a>
                    &nbsp;|&nbsp;
                    <a href="mailto:info@wrapmasterdh.nl" style="color: #DC2626; text-decoration: none;">info@wrapmasterdh.nl</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Social Media -->
        <tr>
          <td style="padding: 0 30px 30px 30px; text-align: center;">
            <p style="margin: 0 0 15px 0; color: #6B7280; font-size: 13px;">Volg ons voor inspiratie</p>
            <a href="https://www.instagram.com/wrapmasterdh/" style="display: inline-block; margin: 0 8px; color: #1F2937; text-decoration: none; font-size: 13px; font-weight: 500;">Instagram</a>
            <a href="https://www.facebook.com/WrapmasterDH" style="display: inline-block; margin: 0 8px; color: #1F2937; text-decoration: none; font-size: 13px; font-weight: 500;">Facebook</a>
            <a href="https://www.tiktok.com/@wrapmasterdh" style="display: inline-block; margin: 0 8px; color: #1F2937; text-decoration: none; font-size: 13px; font-weight: 500;">TikTok</a>
            <a href="https://www.youtube.com/@wrapmasterdh/videos" style="display: inline-block; margin: 0 8px; color: #1F2937; text-decoration: none; font-size: 13px; font-weight: 500;">YouTube</a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color: #1F2937; padding: 25px 30px; text-align: center;">
            <img src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/logos/handtekening-wit.png" alt="Wrapmaster" width="140" style="margin-bottom: 15px;">
            <p style="margin: 0 0 5px 0; color: #9CA3AF; font-size: 11px;">© ${new Date().getFullYear()} Wrapmaster Den Haag. Alle rechten voorbehouden.</p>
            <p style="margin: 0; color: #6B7280; font-size: 10px;">KvK: 68374232 | BTW: NL002332891B92</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"Wrapmaster" <${process.env.SMTP_FROM}>`,
      to: email,
      replyTo: process.env.SMTP_TO,
      subject: "✓ Offerte Aanvraag Ontvangen - Wrapmaster",
      html: customerEmailContent,
      attachments,
    })

    // Send branded email to admin with PDF (if generated)
    const adminAttachments: { filename: string; content: Buffer; contentType?: string }[] = [...attachments]
    if (pdfBuffer) {
      adminAttachments.push({
        filename: `Offerte-Aanvraag-${kenteken || naam.replace(/\s+/g, "-")}-${new Date().toISOString().split("T")[0]}.pdf`,
        content: pdfBuffer,
        contentType: "application/pdf",
      })
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `🚗 Offerte Aanvraag: ${naam}${kenteken ? ` - ${kenteken.toUpperCase()}` : ""}`,
      html: adminEmailContent,
      attachments: adminAttachments,
    })

    return NextResponse.json({ success: true, message: "E-mails verzonden met bijlagen!" })
  } catch (error) {
    console.error("Fout bij verzenden van e-mails:", error)
    
    // Provide more detailed error message for debugging
    let errorMessage = "Er is een fout opgetreden bij het verzenden."
    
    if (error instanceof Error) {
      // Check for common SMTP errors
      if (error.message.includes("ECONNREFUSED")) {
        errorMessage = "Kan geen verbinding maken met de e-mailserver."
      } else if (error.message.includes("EAUTH") || error.message.includes("535") || error.message.includes("authentication")) {
        errorMessage = "E-mail authenticatie mislukt. Controleer SMTP instellingen."
      } else if (error.message.includes("ETIMEDOUT")) {
        errorMessage = "Timeout bij verbinden met e-mailserver."
      } else if (error.message.includes("self signed certificate")) {
        errorMessage = "SSL certificaat probleem met e-mailserver."
      } else {
        // Log the full error for debugging but show generic message to user
        console.error("Full error details:", error.message)
      }
    }
    
    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 })
  }
}
