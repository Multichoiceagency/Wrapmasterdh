"use client"

import ReCAPTCHA from "react-google-recaptcha"
import { forwardRef } from "react"

interface ReCaptchaProps {
  onChange: (token: string | null) => void
  onExpired?: () => void
  onError?: () => void
}

const ReCaptcha = forwardRef<ReCAPTCHA, ReCaptchaProps>(
  ({ onChange, onExpired, onError }, ref) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

    if (!siteKey) {
      console.error("reCAPTCHA site key is not configured")
      return null
    }

    return (
      <ReCAPTCHA
        ref={ref}
        sitekey={siteKey}
        onChange={onChange}
        onExpired={onExpired}
        onErrored={onError}
        hl="nl"
      />
    )
  }
)

ReCaptcha.displayName = "ReCaptcha"

export default ReCaptcha
