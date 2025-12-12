"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Mail, Phone, MessageSquare, Check, Loader2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    bericht: "",
    telefoonnummer: "",
    privacyCheck: false,
    // Honeypot veld (onzichtbaar voor gebruikers)
    website: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Timestamp voor spam detectie
  const [formLoadTime] = useState(Date.now())

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Spam check 1: Honeypot veld
    if (formData.website) {
      setSubmitStatus("success") // Fake success voor bots
      return
    }

    // Spam check 2: Tijd check
    const timeSinceLoad = Date.now() - formLoadTime
    if (timeSinceLoad < 2000) {
      setSubmitStatus("success") // Fake success
      return
    }

    if (!formData.privacyCheck) {
      setErrorMessage("Je moet akkoord gaan met het privacybeleid om door te gaan.")
      return
    }

    // Validatie
    if (!formData.naam.trim()) {
      setErrorMessage("Vul je naam in")
      return
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Vul een geldig e-mailadres in")
      return
    }
    if (!formData.bericht.trim()) {
      setErrorMessage("Vul een bericht in")
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const { website, ...cleanFormData } = formData

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 30000)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...cleanFormData,
          formLoadTime,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus("success")
        setFormData({
          naam: "",
          email: "",
          bericht: "",
          telefoonnummer: "",
          privacyCheck: false,
          website: "",
        })
      } else {
        throw new Error(data.message || "Verzending mislukt")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      if (error instanceof Error && error.name === "AbortError") {
        setErrorMessage("Verzending duurde te lang. Probeer het opnieuw.")
      } else {
        setErrorMessage("Er is een fout opgetreden. Probeer het later opnieuw.")
      }
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success state
  if (submitStatus === "success") {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-12 text-center shadow-2xl"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bericht verzonden!</h2>
            <p className="text-gray-600 mb-8">
              Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.
            </p>
            <a
              href="/"
              className="inline-block bg-red-500 text-white font-semibold px-8 py-3 rounded-xl hover:bg-red-600 transition-colors"
            >
              Terug naar home
            </a>
          </motion.div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Neem <span className="text-red-500">contact</span> op
            </h1>
            <p className="text-gray-400 text-lg">
              Heb je vragen? Wij helpen je graag verder!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Stuur een bericht</h2>
                <p className="text-gray-600 mb-6">Vul het formulier in en wij reageren zo snel mogelijk.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="naam"
                      value={formData.naam}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                      placeholder="Je naam *"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                      placeholder="E-mailadres *"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="telefoonnummer"
                    value={formData.telefoonnummer}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Telefoonnummer (optioneel)"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    name="bericht"
                    value={formData.bericht}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="Je bericht *"
                    required
                  />
                </div>

                {/* Honeypot veld - onzichtbaar voor gebruikers */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="absolute -left-[9999px] opacity-0 h-0 w-0"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Privacy checkbox */}
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input
                      type="checkbox"
                      name="privacyCheck"
                      checked={formData.privacyCheck}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 transition-all ${
                      formData.privacyCheck
                        ? "bg-red-500 border-red-500"
                        : "border-gray-300 group-hover:border-red-400"
                    }`}>
                      {formData.privacyCheck && (
                        <Check className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">
                    Ik ga akkoord met het{" "}
                    <a href="/privacy" className="text-red-500 hover:underline">
                      privacybeleid
                    </a>{" "}
                    *
                  </span>
                </label>

                {/* Error message */}
                <AnimatePresence>
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-red-500 text-white font-semibold py-4 rounded-xl hover:bg-red-600 transition-all shadow-lg shadow-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Verzenden...</span>
                    </>
                  ) : (
                    <span>Verstuur bericht</span>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Contact details card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contactgegevens</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 text-sm">Adres</p>
                    <p className="font-medium">Westvlietweg 72-L</p>
                    <p className="font-medium">2495 AA Den Haag</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Telefoon</p>
                    <a href="tel:0702250721" className="font-medium text-red-500 hover:text-red-600">
                      070 225 0721
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">WhatsApp</p>
                    <a href="https://wa.me/31638718893" className="font-medium text-red-500 hover:text-red-600">
                      +31 6 38718893
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">E-mail</p>
                    <a href="mailto:info@wrapmasterdh.nl" className="font-medium text-red-500 hover:text-red-600">
                      info@wrapmasterdh.nl
                    </a>
                  </div>
                </div>
              </div>

              {/* Business info card */}
              <div className="bg-gray-800 rounded-2xl p-6 shadow-xl text-white">
                <h3 className="text-lg font-bold mb-4">Bedrijfsgegevens</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-gray-400">KvK:</span> 68374232</p>
                  <p><span className="text-gray-400">BTW:</span> NL002332891B92</p>
                </div>
              </div>

              {/* Quick contact */}
              <a
                href="https://wa.me/31638718893"
                className="block bg-green-500 text-white text-center font-semibold py-4 rounded-2xl hover:bg-green-600 transition-colors shadow-lg"
              >
                Direct WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d78492.80962488402!2d4.364657!3d52.063339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b70ee8d89279%3A0x1b8914a2b8f83858!2sWrapmaster!5e0!3m2!1snl!2sus!4v1727819759451!5m2!1snl!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
