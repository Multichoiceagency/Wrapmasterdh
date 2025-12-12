import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { saveContactSubmission } from "@/lib/db"
import { verifyRecaptcha } from "@/lib/recaptcha"

export async function POST(req: Request) {
  try {
    // Get IP and user agent for tracking
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown"
    const userAgent = req.headers.get("user-agent") || "unknown"

    const formData = await req.json()

    // Honeypot check - if 'website' field is filled, it's a bot
    if (formData.website) {
      // Pretend success to confuse bots
      return NextResponse.json({ success: true, message: "Bericht verzonden!" }, { status: 200 })
    }

    // Time check - if form was submitted too fast (< 2 seconds), likely a bot
    if (formData.formLoadTime) {
      const timeSinceLoad = Date.now() - formData.formLoadTime
      if (timeSinceLoad < 2000) {
        return NextResponse.json({ success: true, message: "Bericht verzonden!" }, { status: 200 })
      }
    }

    // Validate required fields
    if (!formData.naam || !formData.email || !formData.bericht) {
      return NextResponse.json(
        { success: false, message: "Vul alle verplichte velden in." },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, message: "Vul een geldig e-mailadres in." },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA
    if (formData.recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(formData.recaptchaToken)
      if (!recaptchaResult.success) {
        return NextResponse.json(
          { success: false, message: recaptchaResult.error || "reCAPTCHA verificatie mislukt" },
          { status: 400 }
        )
      }
    } else if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA verificatie is verplicht" },
        { status: 400 }
      )
    }

    // Save to database (don't fail if this fails)
    try {
      const dbResult = await saveContactSubmission({
        naam: formData.naam,
        email: formData.email,
        telefoonnummer: formData.telefoonnummer,
        bericht: formData.bericht,
        ip_address: ip,
        user_agent: userAgent,
      })

      if (!dbResult.success) {
        console.warn("Failed to save contact to database:", dbResult.error)
      }
    } catch (dbError) {
      console.warn("Database save error:", dbError)
    }

    // Configure SMTP transporter
    const port = Number(process.env.SMTP_PORT)
    const isSecure = port === 465 // true for 465 (SSL), false for 587 (STARTTLS)

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Date for emails
    const datum = new Date().toLocaleDateString("nl-NL", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    // Branded admin email content
    const adminEmailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #F3F4F6;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF;">
        <!-- Header with Logo -->
        <tr>
          <td style="background-color: #1F2937; padding: 30px; text-align: center;">
            <img src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/logos/handtekening-wit.png" alt="Wrapmaster" width="180" style="margin-bottom: 10px;">
          </td>
        </tr>

        <!-- Alert Banner -->
        <tr>
          <td style="background-color: #3B82F6; padding: 15px 30px; text-align: center;">
            <p style="margin: 0; color: #FFFFFF; font-size: 16px; font-weight: 600;">💬 Nieuw Contact Bericht</p>
          </td>
        </tr>

        <!-- Date -->
        <tr>
          <td style="padding: 20px 30px 10px 30px;">
            <p style="margin: 0; color: #6B7280; font-size: 12px;">Ontvangen op: ${datum}</p>
          </td>
        </tr>

        <!-- Contact Info -->
        <tr>
          <td style="padding: 10px 30px;">
            <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #F9FAFB; border-radius: 8px; border-left: 4px solid #DC2626;">
              <tr>
                <td style="padding: 20px;">
                  <h2 style="margin: 0 0 15px 0; color: #1F2937; font-size: 16px; font-weight: 600;">👤 Contactgegevens</h2>
                  <table width="100%" cellspacing="0" cellpadding="5">
                    <tr>
                      <td width="120" style="color: #6B7280; font-size: 14px;">Naam:</td>
                      <td style="color: #1F2937; font-size: 14px; font-weight: 600;">${formData.naam}</td>
                    </tr>
                    <tr>
                      <td style="color: #6B7280; font-size: 14px;">E-mail:</td>
                      <td style="color: #1F2937; font-size: 14px;"><a href="mailto:${formData.email}" style="color: #DC2626; text-decoration: none;">${formData.email}</a></td>
                    </tr>
                    <tr>
                      <td style="color: #6B7280; font-size: 14px;">Telefoon:</td>
                      <td style="color: #1F2937; font-size: 14px;"><a href="tel:${formData.telefoonnummer}" style="color: #DC2626; text-decoration: none;">${formData.telefoonnummer || "Niet opgegeven"}</a></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding: 10px 30px;">
            <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #FEF3C7; border-radius: 8px;">
              <tr>
                <td style="padding: 20px;">
                  <h2 style="margin: 0 0 10px 0; color: #1F2937; font-size: 16px; font-weight: 600;">💬 Bericht</h2>
                  <p style="margin: 0; color: #1F2937; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${formData.bericht}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Action Buttons -->
        <tr>
          <td style="padding: 20px 30px;">
            <table width="100%" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center">
                  <a href="mailto:${formData.email}?subject=Re: Contact Aanvraag Wrapmaster"
                     style="display: inline-block; background-color: #DC2626; color: #FFFFFF; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                    ✉️ Beantwoord Bericht
                  </a>
                  ${formData.telefoonnummer ? `
                  <a href="tel:${formData.telefoonnummer}"
                     style="display: inline-block; background-color: #1F2937; color: #FFFFFF; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; margin-left: 10px;">
                    📞 Bel Klant
                  </a>
                  ` : ""}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color: #1F2937; padding: 20px 30px; text-align: center;">
            <p style="margin: 0 0 5px 0; color: #9CA3AF; font-size: 12px;">Wrapmaster Den Haag</p>
            <p style="margin: 0 0 5px 0; color: #9CA3AF; font-size: 12px;">Westvlietweg 72-L, 2495 AA Den Haag</p>
            <p style="margin: 0; color: #6B7280; font-size: 11px;">Deze e-mail is automatisch gegenereerd</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `

    // Branded customer confirmation email
    const customerEmailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #F3F4F6;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF;">
        <!-- Header with Logo -->
        <tr>
          <td style="background-color: #1F2937; padding: 30px; text-align: center;">
            <img src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/logos/handtekening-wit.png" alt="Wrapmaster" width="180" style="margin-bottom: 10px;">
          </td>
        </tr>

        <!-- Success Banner -->
        <tr>
          <td style="background-color: #10B981; padding: 20px 30px; text-align: center;">
            <p style="margin: 0; color: #FFFFFF; font-size: 18px; font-weight: 600;">✓ Bericht Ontvangen!</p>
          </td>
        </tr>

        <!-- Main Content -->
        <tr>
          <td style="padding: 40px 30px;">
            <h2 style="margin: 0 0 20px 0; color: #1F2937; font-size: 22px;">Beste ${formData.naam},</h2>

            <p style="margin: 0 0 20px 0; color: #4B5563; font-size: 15px; line-height: 1.7;">
              Bedankt voor je bericht! We hebben je vraag in goede orde ontvangen en ons team bekijkt het zo snel mogelijk.
            </p>

            <p style="margin: 0 0 25px 0; color: #4B5563; font-size: 15px; line-height: 1.7;">
              We reageren meestal binnen <strong style="color: #DC2626;">24 uur</strong> op werkdagen.
            </p>

            <!-- What's Next Box -->
            <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #F9FAFB; border-radius: 12px; border-left: 4px solid #DC2626;">
              <tr>
                <td style="padding: 25px;">
                  <h3 style="margin: 0 0 15px 0; color: #1F2937; font-size: 16px; font-weight: 600;">📋 Wat kun je verwachten?</h3>
                  <table width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="padding: 8px 0; color: #4B5563; font-size: 14px;">
                        <span style="color: #10B981; font-weight: bold;">1.</span> We lezen je bericht zorgvuldig
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #4B5563; font-size: 14px;">
                        <span style="color: #10B981; font-weight: bold;">2.</span> We bereiden een passend antwoord voor
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #4B5563; font-size: 14px;">
                        <span style="color: #10B981; font-weight: bold;">3.</span> We nemen contact met je op via e-mail of telefoon
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Your Message Summary -->
        <tr>
          <td style="padding: 0 30px 30px 30px;">
            <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #1F2937; border-radius: 12px;">
              <tr>
                <td style="padding: 25px;">
                  <h3 style="margin: 0 0 15px 0; color: #FFFFFF; font-size: 16px; font-weight: 600;">💬 Jouw bericht</h3>
                  <p style="margin: 0; color: #D1D5DB; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${formData.bericht.length > 200 ? formData.bericht.substring(0, 200) + "..." : formData.bericht}</p>
                  <p style="margin: 15px 0 0 0; color: #9CA3AF; font-size: 12px;">Verzonden op: ${datum}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- CTA Button -->
        <tr>
          <td style="padding: 0 30px 30px 30px; text-align: center;">
            <p style="margin: 0 0 15px 0; color: #6B7280; font-size: 14px;">Dringend? Neem direct contact op!</p>
            <a href="https://wa.me/31638718893"
               style="display: inline-block; background-color: #25D366; color: #FFFFFF; padding: 14px 35px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px;">
              💬 WhatsApp Ons
            </a>
          </td>
        </tr>

        <!-- Contact Info -->
        <tr>
          <td style="padding: 0 30px 30px 30px;">
            <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #F9FAFB; border-radius: 12px;">
              <tr>
                <td style="padding: 25px; text-align: center;">
                  <p style="margin: 0 0 5px 0; color: #6B7280; font-size: 13px;">Westvlietweg 72-L, 2495 AA Den Haag</p>
                  <p style="margin: 0; color: #6B7280; font-size: 13px;">
                    <a href="tel:0702250721" style="color: #DC2626; text-decoration: none;">070 225 0721</a>
                    &nbsp;|&nbsp;
                    <a href="mailto:info@wrapmasterdh.nl" style="color: #DC2626; text-decoration: none;">info@wrapmasterdh.nl</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Social Media -->
        <tr>
          <td style="padding: 0 30px 30px 30px; text-align: center;">
            <p style="margin: 0 0 15px 0; color: #6B7280; font-size: 13px;">Volg ons voor inspiratie</p>
            <a href="https://www.instagram.com/wrapmasterdh/" style="display: inline-block; margin: 0 8px; color: #1F2937; text-decoration: none; font-size: 13px; font-weight: 500;">Instagram</a>
            <a href="https://www.facebook.com/WrapmasterDH" style="display: inline-block; margin: 0 8px; color: #1F2937; text-decoration: none; font-size: 13px; font-weight: 500;">Facebook</a>
            <a href="https://www.tiktok.com/@wrapmasterdh" style="display: inline-block; margin: 0 8px; color: #1F2937; text-decoration: none; font-size: 13px; font-weight: 500;">TikTok</a>
            <a href="https://www.youtube.com/@wrapmasterdh/videos" style="display: inline-block; margin: 0 8px; color: #1F2937; text-decoration: none; font-size: 13px; font-weight: 500;">YouTube</a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color: #1F2937; padding: 25px 30px; text-align: center;">
            <img src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/logos/handtekening-wit.png" alt="Wrapmaster" width="140" style="margin-bottom: 15px;">
            <p style="margin: 0 0 5px 0; color: #9CA3AF; font-size: 11px;">© ${new Date().getFullYear()} Wrapmaster Den Haag. Alle rechten voorbehouden.</p>
            <p style="margin: 0; color: #6B7280; font-size: 10px;">KvK: 68374232 | BTW: NL002332891B92</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo: formData.email,
      subject: `💬 Contact Bericht: ${formData.naam}`,
      html: adminEmailContent,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"Wrapmaster" <${process.env.SMTP_FROM}>`,
      to: formData.email,
      replyTo: process.env.SMTP_TO,
      subject: "✓ Bericht Ontvangen - Wrapmaster",
      html: customerEmailContent,
    })

    return NextResponse.json({ success: true, message: "Bericht succesvol verzonden!" }, { status: 200 })
  } catch (error) {
    console.error("Failed to send email:", error)
    return NextResponse.json(
      { success: false, message: "Er is een fout opgetreden bij het verzenden." },
      { status: 500 }
    )
  }
}
