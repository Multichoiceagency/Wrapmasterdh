import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    // ✅ Helper-functie om alleen strings op te halen
    const getString = (value: FormDataEntryValue | null) => (typeof value === "string" ? value : "")

    // 📌 Klantinformatie ophalen
    const naam = getString(formData.get("naam"))
    const email = getString(formData.get("email")) // ✅ Klant e-mail gebruiken voor reply-to
    const telefoonnummer = getString(formData.get("telefoonnummer"))
    const bedrijfsnaam = getString(formData.get("bedrijfsnaam"))
    const kenteken = getString(formData.get("kenteken"))
    const bouwjaar = getString(formData.get("bouwjaar"))
    const huidigeKleur = getString(formData.get("huidigeKleur"))
    const gewensteKleur = getString(formData.get("gewensteKleur"))
    const bericht = getString(formData.get("bericht"))

    // 📌 Bestanden ophalen
    const uploadedFiles = formData.getAll("uploadedFiles") as File[]
    const attachments: any[] = []

    for (const file of uploadedFiles) {
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json({ error: "Bestanden mogen maximaal 10MB zijn." }, { status: 400 })
      }

      const buffer = Buffer.from(await file.arrayBuffer())
      attachments.push({
        filename: file.name,
        content: buffer,
      })
    }

    // 📌 Nodemailer Configureren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // 📌 E-mailinhoud
    const emailContent = `
      <h2>Nieuwe Offerte Aanvraag</h2>
      <p><strong>Naam:</strong> ${naam}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefoonnummer:</strong> ${telefoonnummer}</p>
      <p><strong>Bedrijfsnaam:</strong> ${bedrijfsnaam || "N/A"}</p>
      <p><strong>Kenteken:</strong> ${kenteken || "N/A"}</p>
      <p><strong>Bouwjaar:</strong> ${bouwjaar || "N/A"}</p>
      <p><strong>Huidige Kleur:</strong> ${huidigeKleur || "N/A"}</p>
      <p><strong>Gewenste Kleur:</strong> ${gewensteKleur || "N/A"}</p>
      <p><strong>Bericht:</strong> ${bericht || "Geen bericht toegevoegd."}</p>
    `

    // 🔹 **Verstuur e-mail naar de klant**
    await transporter.sendMail({
      from: `"Wrapmaster" <${process.env.SMTP_FROM}>`,
      to: email,
      replyTo: process.env.SMTP_TO, // ✅ Reply gaat naar jouw admin e-mail
      subject: "🎉 Bedankt voor je offerteaanvraag – Wrapmaster",
      html: `<p>Beste ${naam},</p>
        <p>Bedankt voor je aanvraag voor een wrap-offerte! 🎨🚗</p>
        <p>We hebben je gegevens goed ontvangen en gaan hiermee aan de slag.</p>
        <p>Ons team bekijkt je aanvraag zorgvuldig en neemt binnen <strong>2 werkdagen</strong> contact met je op met een op maat gemaakte offerte.</p>
        <p>Je kunt ons bereiken via <a href="mailto:info@wrapmasterdh.nl">info@wrapmasterdh.nl</a> of <a href="tel:0702250721">070 - 225 07 21</a>.</p>
        <br/>
        <p>Met vriendelijke groet,</p>
        <p><strong>Wrapmaster Den Haag</strong></p>`,
      attachments,
    })

    // 🔹 **Verstuur e-mail naar de admin**
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO, // Admin e-mail uit .env
      replyTo: email, // ✅ Reply gaat nu naar de klant!
      subject: "📩 Nieuwe offerte aanvraag ontvangen!",
      html: emailContent,
      attachments,
    })

    return NextResponse.json({ success: true, message: "E-mails verzonden met bijlagen!" })
  } catch (error) {
    console.error("Fout bij verzenden van e-mails:", error)
    return NextResponse.json({ success: false, message: "Er is een fout opgetreden." }, { status: 500 })
  }
}
