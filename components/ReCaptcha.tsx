"use client"

import { useEffect, useRef, forwardRef, useImperativeHandle } from "react"

interface ReCaptchaProps {
  onChange: (token: string | null) => void
  onExpired?: () => void
  onError?: () => void
  action?: string
}

interface ReCaptchaHandle {
  reset: () => void
  execute: () => void
  getValue: () => string | null
}

const ReCaptcha = forwardRef<ReCaptchaHandle, ReCaptchaProps>(
  ({ onChange, onExpired, onError, action = "SUBMIT" }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const widgetIdRef = useRef<number | null>(null)
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (widgetIdRef.current !== null && window.grecaptcha) {
          window.grecaptcha.enterprise.reset(widgetIdRef.current)
        }
      },
      execute: () => {
        if (widgetIdRef.current !== null && window.grecaptcha) {
          window.grecaptcha.enterprise.execute(widgetIdRef.current)
        }
      },
      getValue: () => {
        if (widgetIdRef.current !== null && window.grecaptcha) {
          return window.grecaptcha.enterprise.getResponse(widgetIdRef.current)
        }
        return null
      },
    }))

    useEffect(() => {
      if (!siteKey) {
        console.error("reCAPTCHA site key is not configured")
        return
      }

      // Load reCAPTCHA Enterprise script
      const script = document.createElement("script")
      script.src = "https://www.google.com/recaptcha/enterprise.js?hl=nl"
      script.async = true
      script.defer = true

      script.onload = () => {
        if (containerRef.current && window.grecaptcha) {
          try {
            widgetIdRef.current = window.grecaptcha.enterprise.render(containerRef.current, {
              sitekey: siteKey,
              action: action,
              callback: (token: string) => {
                onChange(token)
              },
              "expired-callback": () => {
                onChange(null)
                if (onExpired) onExpired()
              },
              "error-callback": () => {
                onChange(null)
                if (onError) onError()
              },
            })
          } catch (error) {
            console.error("Error rendering reCAPTCHA:", error)
            if (onError) onError()
          }
        }
      }

      script.onerror = () => {
        console.error("Failed to load reCAPTCHA Enterprise script")
        if (onError) onError()
      }

      // Check if script is already loaded
      const existingScript = document.querySelector('script[src*="recaptcha/enterprise.js"]')
      if (!existingScript) {
        document.head.appendChild(script)
      } else if (containerRef.current && window.grecaptcha) {
        // Script already loaded, just render
        try {
          widgetIdRef.current = window.grecaptcha.enterprise.render(containerRef.current, {
            sitekey: siteKey,
            action: action,
            callback: onChange,
            "expired-callback": () => {
              onChange(null)
              if (onExpired) onExpired()
            },
            "error-callback": () => {
              onChange(null)
              if (onError) onError()
            },
          })
        } catch (error) {
          console.error("Error rendering reCAPTCHA:", error)
        }
      }

      return () => {
        // Cleanup
        if (widgetIdRef.current !== null && window.grecaptcha) {
          try {
            window.grecaptcha.enterprise.reset(widgetIdRef.current)
          } catch (error) {
            // Ignore cleanup errors
          }
        }
      }
    }, [siteKey, onChange, onExpired, onError, action])

    if (!siteKey) {
      return null
    }

    return <div ref={containerRef} />
  }
)

ReCaptcha.displayName = "ReCaptcha"

export default ReCaptcha

// Extend Window interface for TypeScript
declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        render: (
          container: HTMLElement,
          options: {
            sitekey: string
            action?: string
            callback: (token: string) => void
            "expired-callback"?: () => void
            "error-callback"?: () => void
          }
        ) => number
        reset: (widgetId: number) => void
        execute: (widgetId: number) => void
        getResponse: (widgetId: number) => string
      }
    }
  }
}
