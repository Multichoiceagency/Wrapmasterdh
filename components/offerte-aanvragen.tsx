"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"

export default function OfferteAanvragen() {
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
    uploadedFiles: null as File | null,
  })

  const [isFormVisible, setFormVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      })
    } else if (type === "file") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).files?.[0] || null,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.privacyCheck) {
      alert("Je moet akkoord gaan met het privacybeleid om door te gaan.")
      return
    }

    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()

      // Add form fields
      formDataToSend.append("naam", formData.naam)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("telefoonnummer", formData.telefoonnummer)
      formDataToSend.append("bedrijfsnaam", formData.bedrijfsnaam)
      formDataToSend.append("kenteken", formData.kenteken)
      formDataToSend.append("bouwjaar", formData.bouwjaar)
      formDataToSend.append("huidigeKleur", formData.huidigeKleur)
      formDataToSend.append("gewensteKleur", formData.gewensteKleur)
      formDataToSend.append("bericht", formData.bericht)

      // Add file if present
      if (formData.uploadedFiles) {
        formDataToSend.append("uploadedFiles", formData.uploadedFiles)
      }

      // Add required FormSubmit field
      formDataToSend.append("_redirect", window.location.href)

      const response = await fetch("https://formsubmit.co/info@wrapmasterdh.nl", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        alert("Offerte aanvraag succesvol verzonden!")
        setFormVisible(false)
        // Reset form data
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
          uploadedFiles: null,
        })
      } else {
        const errorData = await response.text()
        throw new Error(`Formulier verzenden mislukt: ${errorData}`)
      }
    } catch (error) {
      console.error("Error sending offerte:", error)
      alert(`Er is iets misgegaan: ${error instanceof Error ? error.message : "Onbekende fout"}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative">
      <button
        onClick={() => setFormVisible(!isFormVisible)}
        className="fixed font-bold text-l bottom-4 left-4 bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        OFFERTE AANVRAGEN
      </button>

      {isFormVisible && (
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-6 z-50 overflow-y-auto h-[80vh] md:h-auto md:max-h-[700px] md:max-w-[500px] md:rounded-lg md:bottom-4 md:left-4"
        >
          <button
            className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-4xl"
            onClick={() => setFormVisible(false)}
          >
            ×
          </button>

          <h2 className="text-2xl font-bold mb-2">Vraag een offerte aan</h2>
          <p className="text-gray-700 mb-4">Vul je gegevens in en ontvang een vrijblijvende offerte.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="naam"
              value={formData.naam}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Naam"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="E-mailadres"
              required
            />
            <input
              type="tel"
              name="telefoonnummer"
              value={formData.telefoonnummer}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Telefoonnummer"
              required
            />
            <input
              type="text"
              name="bedrijfsnaam"
              value={formData.bedrijfsnaam}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Bedrijfsnaam (optioneel)"
            />
            <input
              type="text"
              name="kenteken"
              value={formData.kenteken}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Kenteken"
            />
            <input
              type="text"
              name="bouwjaar"
              value={formData.bouwjaar}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Bouwjaar"
            />
            <input
              type="text"
              name="huidigeKleur"
              value={formData.huidigeKleur}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Huidige kleur"
            />
            <input
              type="text"
              name="gewensteKleur"
              value={formData.gewensteKleur}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Gewenste kleur"
            />
            <textarea
              name="bericht"
              value={formData.bericht}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Uw bericht"
            />
            <label className="block">
              Voeg foto's toe van uw auto:
              <input
                type="file"
                name="uploadedFiles"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg mt-2"
              />
            </label>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="privacyCheck"
                checked={formData.privacyCheck}
                onCheckedChange={(checked) => setFormData({ ...formData, privacyCheck: !!checked })}
              />
              <label htmlFor="privacyCheck" className="text-gray-700">
                Ik ga akkoord met het privacybeleid
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition disabled:opacity-50"
            >
              {isSubmitting ? "Versturen..." : "Verstuur Offerte"}
            </button>
          </form>
        </motion.div>
      )}
    </main>
  )
}

