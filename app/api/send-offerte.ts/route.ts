import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    // ✅ Helper-functie om strings op te halen
    const getString = (value: FormDataEntryValue | null) => (typeof value === "string" ? value : "")

    // 📌 Klantinformatie ophalen
    const naam = getString(formData.get("naam"))
    const email = getString(formData.get("email"))
    const telefoonnummer = getString(formData.get("telefoonnummer"))
    const bedrijfsnaam = getString(formData.get("bedrijfsnaam"))
    const kenteken = getString(formData.get("kenteken"))
    const bouwjaar = getString(formData.get("bouwjaar"))
    const huidigeKleur = getString(formData.get("huidigeKleur"))
    const gewensteKleur = getString(formData.get("gewensteKleur"))
    const bericht = getString(formData.get("bericht"))

    if (!email) {
      return NextResponse.json({ success: false, message: "E-mailadres is verplicht." }, { status: 400 })
    }

    // ✅ 📌 Nodemailer Configureren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // True voor SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // ✅ 📌 E-mailinhoud
    const mailOptions = {
      from: `"Wrapmaster" <${process.env.SMTP_FROM}>`,
      to: email, // Klant
      subject: "✅ Uw offerte aanvraag is ontvangen!",
      html: `
        <p>Beste ${naam},</p>
        <p>Bedankt voor uw offerteaanvraag! 🎨🚗</p>
        <p>We nemen binnen <strong>2 werkdagen</strong> contact met u op.</p>
        <br/>
        <p>Met vriendelijke groet,</p>
        <p><strong>Wrapmaster Den Haag</strong></p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "E-mail verzonden!" })
  } catch (error) {
    console.error("Fout bij verzenden van e-mail:", error)
    return NextResponse.json({ success: false, message: "Er is een fout opgetreden." }, { status: 500 })
  }
}
