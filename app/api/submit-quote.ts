import type { NextApiRequest, NextApiResponse } from "next"
import formidable from "formidable"
import fs from "fs"

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const form = new formidable.IncomingForm()
  form.uploadDir = "./public/uploads"
  form.keepExtensions = true

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err)
      return res.status(500).json({ message: "Error processing form data" })
    }

    // Process the form data
    const quoteData = {
      ...fields,
      uploadedFile: files.uploadedFiles ? (files.uploadedFiles as formidable.File).newFilename : null,
    }

    // Here you would typically save the data to a database
    // For this example, we'll just log it
    console.log("Received quote request:", quoteData)

    // Send a confirmation email (simulated)
    await sendConfirmationEmail(fields.email as string, fields.voornaam as string)

    res.status(200).json({ message: "Quote request received successfully" })
  })
}

async function sendConfirmationEmail(email: string, name: string) {
  // This is a placeholder for sending an actual email
  console.log(`Sending confirmation email to ${email} for ${name}`)
  // In a real application, you would use a service like SendGrid or AWS SES to send emails
}

