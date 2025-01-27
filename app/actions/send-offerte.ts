import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const formData = await req.json()

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Prepare email content
    const emailContent = `
      <h2>Nieuwe Offerte Aanvraag</h2>
      <p><strong>Naam:</strong> ${formData.naam}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Telefoonnummer:</strong> ${formData.telefoonnummer}</p>
      <p><strong>Bedrijfsnaam:</strong> ${formData.bedrijfsnaam || "N/A"}</p>
      <p><strong>Kenteken:</strong> ${formData.kenteken || "N/A"}</p>
      <p><strong>Bouwjaar:</strong> ${formData.bouwjaar || "N/A"}</p>
      <p><strong>Huidige Kleur:</strong> ${formData.huidigeKleur || "N/A"}</p>
      <p><strong>Gewenste Kleur:</strong> ${formData.gewensteKleur || "N/A"}</p>
      <p><strong>Bericht:</strong> ${formData.bericht || "Geen bericht toegevoegd."}</p>
    `

    // Send mail
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: "Nieuwe Offerte Aanvraag",
      html: emailContent,
    })

    return NextResponse.json({ message: "Offerte aanvraag verzonden" }, { status: 200 })
  } catch (error) {
    console.error("Failed to send email:", error)
    return NextResponse.json(
      { message: `Failed to send email: ${error instanceof Error ? error.message : "Unknown error"}` },
      { status: 500 },
    )
  }
}

