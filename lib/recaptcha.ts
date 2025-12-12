/**
 * Server-side reCAPTCHA verification
 */

interface RecaptchaResponse {
  success: boolean
  challenge_ts?: string
  hostname?: string
  "error-codes"?: string[]
}

export async function verifyRecaptcha(token: string): Promise<{ success: boolean; error?: string }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY is not configured")
    // In development, allow submission without reCAPTCHA if not configured
    if (process.env.NODE_ENV === "development") {
      console.warn("Skipping reCAPTCHA verification in development mode")
      return { success: true }
    }
    return { success: false, error: "reCAPTCHA is niet geconfigureerd" }
  }

  if (!token) {
    return { success: false, error: "reCAPTCHA token ontbreekt" }
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    })

    const data: RecaptchaResponse = await response.json()

    if (data.success) {
      return { success: true }
    } else {
      console.error("reCAPTCHA verification failed:", data["error-codes"])
      return { success: false, error: "reCAPTCHA verificatie mislukt" }
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return { success: false, error: "Kan reCAPTCHA niet verifiëren" }
  }
}
