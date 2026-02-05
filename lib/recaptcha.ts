/**
 * Server-side reCAPTCHA v2 verification
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

    // Log detailed response for debugging
    console.log("reCAPTCHA verification response:", JSON.stringify(data, null, 2))

    if (data.success) {
      console.log("✓ reCAPTCHA verification successful")
      return { success: true }
    } else {
      const errorCodes = data["error-codes"] || []
      console.error("✗ reCAPTCHA verification failed")
      console.error("   Error codes:", errorCodes)
      console.error("   Token preview:", token.substring(0, 20) + "...")
      console.error("   Secret key preview:", secretKey.substring(0, 10) + "...")

      // Provide more specific error messages
      if (errorCodes.includes("invalid-input-secret")) {
        return { success: false, error: "reCAPTCHA secret key is ongeldig - controleer je .env" }
      } else if (errorCodes.includes("timeout-or-duplicate")) {
        return { success: false, error: "reCAPTCHA token verlopen of al gebruikt" }
      } else if (errorCodes[0]?.includes("deleted")) {
        return { success: false, error: "reCAPTCHA project is verwijderd - maak nieuwe keys aan" }
      }

      return { success: false, error: "reCAPTCHA verificatie mislukt: " + errorCodes.join(", ") }
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return { success: false, error: "Kan reCAPTCHA niet verifiëren" }
  }
}
