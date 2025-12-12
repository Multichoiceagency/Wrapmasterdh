"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronRight, ChevronLeft, Upload, X, Car, User, Mail, Phone, Building, Palette, MessageSquare, FileImage, Loader2 } from "lucide-react"

// Stap configuratie
const steps = [
  { id: 1, title: "Contactgegevens", icon: User },
  { id: 2, title: "Voertuig", icon: Car },
  { id: 3, title: "Details & Foto's", icon: FileImage },
  { id: 4, title: "Bevestiging", icon: Check },
]

export default function OfferteAanvragen() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoonnummer: "",
    bedrijfsnaam: "",
    kenteken: "",
    bouwjaar: "",
    huidigeKleur: "",
    gewensteKleur: "",
    bericht: "",
    privacyCheck: false,
    // Honeypot veld (onzichtbaar voor gebruikers)
    website: "",
  })

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Timestamp voor rate limiting (wordt gezet bij laden van pagina)
  const [formLoadTime] = useState(Date.now())

  // Bestanden uploaden (max 10MB per bestand)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      const validFiles = filesArray.filter((file) => file.size <= 10 * 1024 * 1024)

      if (validFiles.length !== filesArray.length) {
        setErrorMessage("Sommige bestanden zijn te groot! Max 10MB per bestand.")
        setTimeout(() => setErrorMessage(""), 3000)
      }

      setUploadedFiles((prev) => [...prev, ...validFiles])
    }
  }

  // Bestand verwijderen
  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  // Input wijzigingen verwerken
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  // Validatie per stap
  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!formData.naam.trim()) {
          setErrorMessage("Vul je naam in")
          return false
        }
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setErrorMessage("Vul een geldig e-mailadres in")
          return false
        }
        if (!formData.telefoonnummer.trim()) {
          setErrorMessage("Vul je telefoonnummer in")
          return false
        }
        return true
      case 2:
        // Voertuiggegevens zijn optioneel
        return true
      case 3:
        // Details zijn optioneel
        return true
      case 4:
        if (!formData.privacyCheck) {
          setErrorMessage("Je moet akkoord gaan met het privacybeleid")
          return false
        }
        return true
      default:
        return true
    }
  }

  // Naar volgende stap
  const nextStep = () => {
    setErrorMessage("")
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
    }
  }

  // Naar vorige stap
  const prevStep = () => {
    setErrorMessage("")
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  // Formulier indienen
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Spam check 1: Honeypot veld
    if (formData.website) {
      // Bot heeft het honeypot veld ingevuld
      setSubmitStatus("success") // Fake success
      return
    }

    // Spam check 2: Tijd check (formulier te snel ingevuld)
    const timeSinceLoad = Date.now() - formLoadTime
    if (timeSinceLoad < 3000) {
      // Minder dan 3 seconden
      setSubmitStatus("success") // Fake success
      return
    }

    if (!validateStep(4)) return

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const submitData = new FormData()

      // Alleen echte velden toevoegen (niet honeypot)
      const { website, ...cleanFormData } = formData
      Object.entries(cleanFormData).forEach(([key, value]) => {
        submitData.append(key, String(value))
      })

      uploadedFiles.forEach((file) => {
        submitData.append("uploadedFiles", file)
      })

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 seconden timeout

      const response = await fetch("/api/send-offerte", {
        method: "POST",
        body: submitData,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus("success")
        // Reset formulier
        setFormData({
          naam: "",
          email: "",
          telefoonnummer: "",
          bedrijfsnaam: "",
          kenteken: "",
          bouwjaar: "",
          huidigeKleur: "",
          gewensteKleur: "",
          bericht: "",
          privacyCheck: false,
          website: "",
        })
        setUploadedFiles([])
      } else {
        throw new Error(data.message || "Verzending mislukt")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          setErrorMessage("Verzending duurde te lang. Controleer je internetverbinding en probeer opnieuw.")
        } else {
          setErrorMessage(error.message || "Er is een fout opgetreden. Probeer het later opnieuw.")
        }
      } else {
        setErrorMessage("Er is een fout opgetreden. Probeer het later opnieuw.")
      }
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Render stap content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Je contactgegevens</h3>

            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="naam"
                  value={formData.naam}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="Volledige naam *"
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

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="telefoonnummer"
                  value={formData.telefoonnummer}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="Telefoonnummer *"
                  required
                />
              </div>

              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="bedrijfsnaam"
                  value={formData.bedrijfsnaam}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="Bedrijfsnaam (optioneel)"
                />
              </div>
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
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Voertuiggegevens</h3>

            <div className="space-y-4">
              <div className="relative">
                <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="kenteken"
                  value={formData.kenteken}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white uppercase"
                  placeholder="Kenteken"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="bouwjaar"
                  value={formData.bouwjaar}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="Bouwjaar (bijv. 2020)"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Palette className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="huidigeKleur"
                    value={formData.huidigeKleur}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Huidige kleur"
                  />
                </div>

                <div className="relative">
                  <Palette className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="gewensteKleur"
                    value={formData.gewensteKleur}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Gewenste kleur"
                  />
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-4">
              <p className="text-sm text-red-700">
                <strong>Tip:</strong> Met je kenteken kunnen wij de exacte specificaties van je voertuig opzoeken voor een nauwkeurigere offerte.
              </p>
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Extra details & foto's</h3>

            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <textarea
                name="bericht"
                value={formData.bericht}
                onChange={handleChange}
                rows={5}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
                placeholder="Beschrijf je wensen, vraag of specifieke eisen..."
              />
            </div>

            {/* File upload area */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Upload foto's van je voertuig (optioneel)
              </label>

              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-red-400 hover:bg-red-50 transition-all"
              >
                <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 font-medium">Klik om bestanden te uploaden</p>
                <p className="text-gray-400 text-sm mt-1">of sleep bestanden hierheen</p>
                <p className="text-gray-400 text-xs mt-2">Max 10MB per bestand</p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                multiple
                accept="image/*"
                className="hidden"
              />

              {/* Uploaded files preview */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">{uploadedFiles.length} bestand(en) geselecteerd:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <FileImage className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="text-sm text-gray-600 truncate">{file.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Bevestig je aanvraag</h3>

            {/* Samenvatting */}
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <h4 className="font-semibold text-gray-800">Overzicht van je aanvraag:</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Naam</p>
                  <p className="font-medium">{formData.naam || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-500">E-mail</p>
                  <p className="font-medium">{formData.email || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Telefoon</p>
                  <p className="font-medium">{formData.telefoonnummer || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Bedrijf</p>
                  <p className="font-medium">{formData.bedrijfsnaam || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Kenteken</p>
                  <p className="font-medium uppercase">{formData.kenteken || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Bouwjaar</p>
                  <p className="font-medium">{formData.bouwjaar || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Huidige kleur</p>
                  <p className="font-medium">{formData.huidigeKleur || "-"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Gewenste kleur</p>
                  <p className="font-medium">{formData.gewensteKleur || "-"}</p>
                </div>
              </div>

              {formData.bericht && (
                <div>
                  <p className="text-gray-500 text-sm">Bericht</p>
                  <p className="font-medium text-sm mt-1">{formData.bericht}</p>
                </div>
              )}

              {uploadedFiles.length > 0 && (
                <div>
                  <p className="text-gray-500 text-sm">Bijlagen</p>
                  <p className="font-medium text-sm">{uploadedFiles.length} bestand(en)</p>
                </div>
              )}
            </div>

            {/* Privacy checkbox */}
            <label className="flex items-start space-x-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  name="privacyCheck"
                  checked={formData.privacyCheck}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className={`w-6 h-6 rounded-md border-2 transition-all ${
                  formData.privacyCheck
                    ? "bg-red-500 border-red-500"
                    : "border-gray-300 group-hover:border-red-400"
                }`}>
                  {formData.privacyCheck && (
                    <Check className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
              </div>
              <span className="text-sm text-gray-600 leading-relaxed">
                Ik ga akkoord met het{" "}
                <a href="/privacy" className="text-red-500 hover:underline">
                  privacybeleid
                </a>{" "}
                en geef toestemming voor het verwerken van mijn gegevens voor deze offerte-aanvraag. *
              </span>
            </label>
          </motion.div>
        )

      default:
        return null
    }
  }

  // Success state
  if (submitStatus === "success") {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12 text-center shadow-2xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Aanvraag verzonden!</h2>
            <p className="text-gray-600 mb-8">
              Bedankt voor je offerte-aanvraag. We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.
            </p>
            <div className="space-y-3">
              <a
                href="/"
                className="inline-block bg-red-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-red-600 transition-colors"
              >
                Terug naar home
              </a>
              <p className="text-sm text-gray-500">
                Je ontvangt ook een bevestiging per e-mail op {formData.email || "je e-mailadres"}
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vraag een <span className="text-red-500">offerte</span> aan
            </h1>
            <p className="text-gray-400 text-lg">
              Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between relative">
              {/* Progress line background */}
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-700 -translate-y-1/2 z-0" />

              {/* Progress line active */}
              <motion.div
                className="absolute left-0 top-1/2 h-1 bg-red-500 -translate-y-1/2 z-0"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              />

              {steps.map((step) => {
                const Icon = step.icon
                const isActive = currentStep === step.id
                const isCompleted = currentStep > step.id

                return (
                  <div
                    key={step.id}
                    className="relative z-10 flex flex-col items-center"
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                          : isCompleted
                          ? "bg-green-500 text-white"
                          : "bg-gray-700 text-gray-400"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {isCompleted ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </motion.div>
                    <span
                      className={`text-xs mt-2 font-medium hidden sm:block ${
                        isActive ? "text-red-400" : isCompleted ? "text-green-400" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <form onSubmit={handleSubmit}>
              {/* Form Content */}
              <div className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {renderStepContent()}
                </AnimatePresence>

                {/* Error message */}
                <AnimatePresence>
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="bg-gray-50 px-8 py-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    currentStep === 1
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Vorige</span>
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center space-x-2 bg-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
                  >
                    <span>Volgende</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center space-x-2 bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Verzenden...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Verstuur aanvraag</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center text-gray-400 text-sm"
          >
            <p>
              Liever direct contact?{" "}
              <a href="tel:0702250721" className="text-red-400 hover:text-red-300 font-medium">
                Bel 070 225 0721
              </a>{" "}
              of stuur een WhatsApp naar{" "}
              <a href="https://wa.me/31638718893" className="text-red-400 hover:text-red-300 font-medium">
                +31 6 38718893
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
