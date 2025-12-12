import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { saveContactSubmission } from "@/lib/db"

// In-memory rate limiting
const rateLimitMap = new Map<string, { count: number; lastRequest: number }>()
const RATE_LIMIT_WINDOW = 60000 // 1 minute
const MAX_REQUESTS = 3 // Max 3 requests per minute per IP

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

    const formData = await req.json()

    // Honeypot check - if 'website' field is filled, it's a bot
    if (formData.website) {
      // Pretend success to confuse bots
      return NextResponse.json({ success: true, message: "Bericht verzonden!" }, { status: 200 })
    }

    // Time check - if form was submitted too fast (< 2 seconds), likely a bot
    if (formData.formLoadTime) {
      const timeSinceLoad = Date.now() - formData.formLoadTime
      if (timeSinceLoad < 2000) {
        return NextResponse.json({ success: true, message: "Bericht verzonden!" }, { status: 200 })
      }
    }

    // Validate required fields
    if (!formData.naam || !formData.email || !formData.bericht) {
      return NextResponse.json(
        { success: false, message: "Vul alle verplichte velden in." },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, message: "Vul een geldig e-mailadres in." },
        { status: 400 }
      )
    }

    // Save to database (don't fail if this fails)
    try {
      const dbResult = await saveContactSubmission({
        naam: formData.naam,
        email: formData.email,
        telefoonnummer: formData.telefoonnummer,
        bericht: formData.bericht,
        ip_address: ip,
        user_agent: userAgent,
      })

      if (!dbResult.success) {
        console.warn("Failed to save contact to database:", dbResult.error)
      }
    } catch (dbError) {
      console.warn("Database save error:", dbError)
    }

    // Configure SMTP transporter
    const port = Number(process.env.SMTP_PORT)
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
      },
    })

    // Email content
    const emailContent = `
      <h2>Nieuwe Contact Aanvraag</h2>
      <p><strong>Naam:</strong> ${formData.naam}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Telefoonnummer:</strong> ${formData.telefoonnummer || "Niet opgegeven"}</p>
      <p><strong>Bericht:</strong></p>
      <p>${formData.bericht.replace(/\n/g, "<br>")}</p>
    `

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo: formData.email,
      subject: "Nieuwe Contact Aanvraag - Wrapmaster",
      html: emailContent,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"Wrapmaster" <${process.env.SMTP_FROM}>`,
      to: formData.email,
      replyTo: process.env.SMTP_TO,
      subject: "Bedankt voor je bericht - Wrapmaster",
      html: `
        <p>Beste ${formData.naam},</p>
        <p>Bedankt voor je bericht. We hebben je aanvraag ontvangen en nemen zo snel mogelijk contact met je op.</p>
        <p>Met vriendelijke groet,<br>Team Wrapmaster</p>
        <p>
          T: <a href="tel:0702250721">070 225 0721</a><br>
          E: <a href="mailto:info@wrapmasterdh.nl">info@wrapmasterdh.nl</a><br>
          W: <a href="https://www.wrapmasterdh.nl">www.wrapmasterdh.nl</a>
        </p>
      `,
    })

    return NextResponse.json({ success: true, message: "Bericht succesvol verzonden!" }, { status: 200 })
  } catch (error) {
    console.error("Failed to send email:", error)
    return NextResponse.json(
      { success: false, message: "Er is een fout opgetreden bij het verzenden." },
      { status: 500 }
    )
  }
}
