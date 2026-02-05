/**
 * Server-side reCAPTCHA Enterprise verification
 */

interface RecaptchaEnterpriseResponse {
  tokenProperties: {
    valid: boolean
    hostname?: string
    action?: string
    createTime?: string
  }
  riskAnalysis: {
    score: number
    reasons?: string[]
  }
  event?: {
    token: string
    siteKey: string
    userAgent?: string
  }
  name?: string
  error?: {
    code: number
    message: string
    status: string
  }
}

export async function verifyRecaptcha(
  token: string,
  expectedAction?: string
): Promise<{ success: boolean; error?: string; score?: number }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  const projectId = process.env.RECAPTCHA_PROJECT_ID
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  // In development, allow submission without reCAPTCHA if not configured
  if (process.env.NODE_ENV === "development" && (!secretKey || !projectId)) {
    console.warn("Skipping reCAPTCHA verification in development mode")
    return { success: true }
  }

  if (!secretKey || !projectId) {
    console.error("RECAPTCHA_SECRET_KEY or RECAPTCHA_PROJECT_ID is not configured")
    return { success: false, error: "reCAPTCHA is niet geconfigureerd" }
  }

  if (!token) {
    return { success: false, error: "reCAPTCHA token ontbreekt" }
  }

  try {
    // reCAPTCHA Enterprise API endpoint
    const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${secretKey}`

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: {
          token: token,
          siteKey: siteKey,
          expectedAction: expectedAction || "SUBMIT",
        },
      }),
    })

    const data: RecaptchaEnterpriseResponse = await response.json()

    // Check for API errors
    if (data.error) {
      console.error("reCAPTCHA Enterprise API error:", data.error)
      return { success: false, error: "reCAPTCHA verificatie mislukt" }
    }

    // Check token validity
    if (!data.tokenProperties?.valid) {
      console.error("reCAPTCHA token is invalid")
      return { success: false, error: "reCAPTCHA token is ongeldig" }
    }

    // Check expected action if provided
    if (expectedAction && data.tokenProperties.action !== expectedAction) {
      console.error(
        `reCAPTCHA action mismatch. Expected: ${expectedAction}, Got: ${data.tokenProperties.action}`
      )
      return { success: false, error: "reCAPTCHA actie komt niet overeen" }
    }

    // Get risk score (0.0 - 1.0, where 1.0 is very likely a good interaction)
    const score = data.riskAnalysis?.score ?? 0

    // Set threshold - reject if score is below 0.5
    const threshold = 0.5
    if (score < threshold) {
      console.warn(`reCAPTCHA score too low: ${score} (threshold: ${threshold})`)
      return { success: false, error: "reCAPTCHA verificatie mislukt", score }
    }

    console.log(`reCAPTCHA verification successful. Score: ${score}`)
    return { success: true, score }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return { success: false, error: "Kan reCAPTCHA niet verifiëren" }
  }
}
