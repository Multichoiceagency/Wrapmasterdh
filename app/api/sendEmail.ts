import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.your-imap-server.com', // Vervang door je IMAP-server
  port: 587,  // Poort voor IMAP
  secure: false, // true voor 465, false voor andere poorten
  auth: {
    user: 'info@wrapmasterdh.nl', // Jouw e-mailadres
    pass: 'your-email-password',  // Wachtwoord
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { voornaam, achternaam, email, diensten, datum } = req.body;

    try {
      // Verzend een e-mail naar het bedrijf
      await transporter.sendMail({
        from: 'info@wrapmasterdh.nl',
        to: 'info@wrapmasterdh.nl', // Bedrijfse-mailadres
        subject: `Nieuwe offerte aanvraag van ${voornaam} ${achternaam}`,
        text: `
          Er is een nieuwe offerte aanvraag ontvangen van:
          Naam: ${voornaam} ${achternaam}
          Email: ${email}
          Diensten: ${diensten.join(', ')}
          Gewenste datum: ${datum}
        `,
      });

      // Verzend bevestiging naar de klant
      await transporter.sendMail({
        from: 'info@wrapmasterdh.nl',
        to: email,  // Klant-e-mailadres
        subject: 'Bevestiging van je offerte aanvraag',
        text: `Bedankt ${voornaam} voor je aanvraag. We hebben het volgende ontvangen:
        Diensten: ${diensten.join(', ')}
        Gewenste datum: ${datum}
        
        We nemen snel contact met je op.`,
      });

      res.status(200).json({ message: 'E-mails succesvol verzonden!' });
    } catch (error) {
      res.status(500).json({ error: 'Er ging iets mis bij het verzenden van de e-mails.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
