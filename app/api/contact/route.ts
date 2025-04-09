import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { naam, email, telefoonnummer, bericht } = await req.json()

    const transporter = nodemailer.createTransport({
      host: 'mail.wrapmasterdh.nl',
      port: 465,
      secure: true,
      auth: {
        user: 'info@wrapmasterdh.nl',
        pass: process.env.SMTP_PASS,
      },
    })

    // Admin ontvangt e-mail
    await transporter.sendMail({
      from: {
        name: `${naam} (${email})`,
        address: 'info@wrapmasterdh.nl',
      },
      to: 'info@wrapmasterdh.nl',
      replyTo: email,
      subject: `Nieuwe contactaanvraag van ${naam}`,
      html: `
        <h2>Nieuwe Contactaanvraag</h2>
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Telefoonnummer:</strong> ${telefoonnummer}</p>
        <p><strong>Bericht:</strong><br />${bericht}</p>
        <hr />
        <p>Je kunt direct op deze e-mail antwoorden om contact op te nemen met de klant.</p>
      `,
    })

    // Klant krijgt bevestiging
    await transporter.sendMail({
      from: {
        name: 'Wrapmaster',
        address: 'info@wrapmasterdh.nl',
      },
      to: email,
      replyTo: 'info@wrapmasterdh.nl',
      subject: 'Bevestiging van je contactaanvraag',
      html: `
        <p>Beste ${naam},</p>
        <p>Bedankt dat je contact met ons hebt opgenomen.</p>
        <p>We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.</p>
        <hr />
        <p><strong>Je bericht:</strong></p>
        <p>${bericht}</p>
        <p><strong>Telefoonnummer:</strong> ${telefoonnummer}</p>
        <br />
        <p>Met vriendelijke groet,<br>Wrapmaster DH</p>
      `,
    })

    return NextResponse.json({ message: 'E-mails succesvol verzonden!' }, { status: 200 })
  } catch (error) {
    console.error('E-mail fout:', error)
    return NextResponse.json(
      { error: 'Er ging iets mis bij het verzenden van de e-mails.' },
      { status: 500 }
    )
  }
}
