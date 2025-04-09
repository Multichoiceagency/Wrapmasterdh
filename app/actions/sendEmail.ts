import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mail.wrapmasterdh.nl',
  port: 993,
  secure: true,
  auth: {
    user: 'info@wrapmasterdh.nl',
    pass: 'Wrapmaster2025//',
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { voornaam, achternaam, email, diensten, datum } = req.body;

    try {
      // 1. E-mail naar admin: replyen moet naar klant
      await transporter.sendMail({
        from: {
          name: `${voornaam} ${achternaam} (${email})`,
          address: 'info@wrapmasterdh.nl', // jouw domein voor SPF
        },
        to: 'info@wrapmasterdh.nl', // jij ontvangt
        replyTo: email, // reply = naar klant
        subject: `Nieuwe contactaanvraag van ${voornaam} ${achternaam}`,
        text: `
Er is een nieuwe contactaanvraag ontvangen:

Naam: ${voornaam} ${achternaam}
E-mailadres: ${email}
Diensten: ${diensten.join(', ')}
Gewenste datum: ${datum}

Je kunt direct antwoorden op deze e-mail om contact op te nemen met de klant.
        `,
      });

      // 2. Bevestiging naar klant
      await transporter.sendMail({
        from: {
          name: 'Wrapmaster DH',
          address: 'info@wrapmasterdh.nl',
        },
        to: email,
        replyTo: 'info@wrapmasterdh.nl',
        subject: 'Bevestiging van je contactaanvraag',
        text: `Bedankt dat je contact met ons hebt opgenomen, ${voornaam}!

We hebben je aanvraag goed ontvangen met de volgende details:

Diensten: ${diensten.join(', ')}
Gewenste datum: ${datum}

We nemen zo snel mogelijk contact met je op.

Met vriendelijke groet,  
Wrapmaster DH`,
      });

      res.status(200).json({ message: 'E-mails succesvol verzonden!' });
    } catch (error) {
      console.error('E-mail fout:', error);
      res.status(500).json({ error: 'Er ging iets mis bij het verzenden van de e-mails.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
