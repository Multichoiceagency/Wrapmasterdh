import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { uploadToS3, isS3Configured, getS3PublicUrl } from "@/lib/s3"

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
    const s3FileLinks: string[] = [] // Store S3 links for email
    const useS3 = isS3Configured()

    for (const file of uploadedFiles) {
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json({ error: "Bestanden mogen maximaal 10MB zijn." }, { status: 400 })
      }

      const buffer = Buffer.from(await file.arrayBuffer())

      if (useS3) {
        // Upload to S3/Garage storage
        try {
          const { url, key } = await uploadToS3(
            buffer,
            file.name,
            file.type,
            `offerte-aanvragen/${kenteken || "geen-kenteken"}`
          )
          s3FileLinks.push(`<a href="${url}">${file.name}</a>`)
        } catch (s3Error) {
          console.error("S3 upload failed, falling back to email attachment:", s3Error)
          // Fallback to email attachment if S3 fails
          attachments.push({
            filename: file.name,
            content: buffer,
          })
        }
      } else {
        // No S3 configured, use email attachments
        attachments.push({
          filename: file.name,
          content: buffer,
        })
      }
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

    // 🔹 **Verstuur e-mail naar de klant**
    await transporter.sendMail({
      from: `"Wrapmaster" <${process.env.SMTP_FROM}>`,
      to: email,
      replyTo: process.env.SMTP_TO, // ✅ Reply gaat naar jouw admin e-mail
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

    // 🔹 **Verstuur e-mail naar de admin**
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO, // Admin e-mail uit .env
      replyTo: email, // ✅ Reply gaat nu naar de klant!
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
