export const runtime = "nodejs"

import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import PDFDocument from "pdfkit"
import fs from "fs"
import path from "path"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    // ✅ Helper-functie om alleen strings op te halen
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

    // 📌 Upload bestand ophalen
    const uploadedFile = formData.get("uploadedFiles") as File | null
    let fileBuffer: Buffer | null = null
    let fileName = ""

    if (uploadedFile) {
      const fileArrayBuffer = await uploadedFile.arrayBuffer()
      fileBuffer = Buffer.from(fileArrayBuffer)
      fileName = uploadedFile.name
    }

    // 📌 Laad lettertypes & logo
    const fontRegular = path.join(process.cwd(), "public/fonts/DIN.ttf")
    const fontBold = path.join(process.cwd(), "public/fonts/DIN-Bold.ttf")

    // ✅ 📌 PDF Genereren
    const doc = new PDFDocument({ size: "A4", margin: 50, font: fontRegular })

    let pdfBuffer: Buffer

    // 📌 PDF Buffer Stream
    const pdfStream = new Promise<Buffer>((resolve, reject) => {
      const chunks: Uint8Array[] = []
      doc.on("data", (chunk) => chunks.push(chunk as Uint8Array))
      doc.on("end", () => resolve(Buffer.concat(chunks)))
      doc.on("error", (err) => reject(err))
    })

    // 📌 Titel
    doc.font(fontBold).fontSize(20).text("Wrapofferte Aanvraag", { align: "center" })
    doc.moveDown(2)

    // 📌 Start tabel
    const tableTop = doc.y
    const col1 = 50
    const col2 = 250

    doc.font(fontBold).fontSize(12).text("Klantgegevens", col1, tableTop)
    doc.moveDown(0.5)
    doc.font(fontRegular).fontSize(12)

    const klantData = [
      ["Naam", naam],
      ["E-mail", email],
      ["Telefoonnummer", telefoonnummer],
      ["Bedrijfsnaam", bedrijfsnaam],
    ]

    klantData.forEach(([label, value], i) => {
      doc.text(label, col1, tableTop + 20 + i * 20)
      doc.text(value, col2, tableTop + 20 + i * 20)
    })

    doc.moveDown(2)

    // 📌 Autogegevens
    doc.font(fontBold).text("Autogegevens", col1)
    doc.moveDown(0.5)
    doc.font(fontRegular)

    const autoData = [
      ["Kenteken", kenteken],
      ["Bouwjaar", bouwjaar],
      ["Huidige kleur", huidigeKleur],
      ["Gewenste kleur", gewensteKleur],
    ]

    autoData.forEach(([label, value], i) => {
      doc.text(label, col1, doc.y + 5)
      doc.text(value, col2, doc.y - 15)
    })

    doc.moveDown(2)

    // 📌 Bericht
    doc.font(fontBold).text("Opmerkingen", col1)
    doc.moveDown(0.5)
    doc.font(fontRegular).text(bericht || "Geen opmerkingen", col1, doc.y + 5, { width: 400 })

    doc.moveDown(2)

    doc.moveDown(4)

    // 📌 Bedrijfsgegevens onder logo
    doc.font(fontBold).text("Met vriendelijke groet,", { align: "center" })
    doc.text("Wrapmaster Den Haag", { align: "center" })
    doc.font(fontRegular).text("Westvlietweg 72-L, 2495 AA, Den Haag", { align: "center" })
    doc.text("E-mail: info@wrapmasterdh.nl", { align: "center" })
    doc.text("Tel: 070 - 225 07 21", { align: "center" })
    doc.text("Website: www.wrapmasterdh.nl", { align: "center", link: "https://wrapmasterdh.nl" })

    doc.end()
    pdfBuffer = await pdfStream

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

    // 📌 E-mailbijlagen voorbereiden
    const attachments: any[] = [
      {
        filename: `offerte-aanvraag-${naam}.pdf`,
        content: pdfBuffer,
      },
    ]

    if (fileBuffer) {
      attachments.push({
        filename: fileName,
        content: fileBuffer,
      })
    }

    // 🔹 **Verstuur e-mail naar de klant**
    await transporter.sendMail({
      from: `"🎉 Bedankt voor je offerteaanvraag – We nemen snel contact met u op" <${process.env.SMTP_FROM}>`, // ✅ Zorgt ervoor dat de naam correct wordt weergegeven
      to: email,
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
      to: process.env.OFFERTE_EMAIL, // Admin e-mail uit .env
      subject: "📩 Nieuwe offerte aanvraag ontvangen!",
      html: `<p><strong>Nieuwe offerte aanvraag van:</strong> ${naam}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${telefoonnummer}</p>
        <p><strong>Kenteken:</strong> ${kenteken}</p>
        <p><strong>Gewenste kleur:</strong> ${gewensteKleur}</p>
        <br/>
        <p>Bekijk de aanvraag in de bijlage.</p>`,
      attachments,
    })

    return NextResponse.json({ success: true, message: "E-mails verzonden met bijlagen!" })
  } catch (error) {
    console.error("Fout bij verzenden van e-mails:", error)
    return NextResponse.json({ success: false, message: "Er is een fout opgetreden." }, { status: 500 })
  }
}
