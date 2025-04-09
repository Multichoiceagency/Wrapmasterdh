import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    // Maak een transporter aan met jouw SMTP-instellingen
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Stel de e-mailinhoud samen met de formuliergegevens
    const emailContent = `
      <h2>Nieuwe Contact Aanvraag</h2>
      <p><strong>Naam:</strong> ${formData.naam}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Telefoonnummer:</strong> ${formData.telefoonnummer}</p>
      <p><strong>Bericht:</strong> ${formData.bericht || "Geen bericht toegevoegd."}</p>
    `;

    // Verstuur de e-mail
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: "Nieuwe Contact Aanvraag",
      html: emailContent,
    });

    return NextResponse.json({ message: "Uw bericht is succesvol verzonden!" }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { message: `Failed to send email: ${error instanceof Error ? error.message : "Unknown error"}` },
      { status: 500 }
    );
  }
}