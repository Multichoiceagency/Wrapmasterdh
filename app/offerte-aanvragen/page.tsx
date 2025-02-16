"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

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
  })

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState("") // state voor notificatie

  // ✅ Bestanden uploaden (max 10MB per bestand)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)

      const validFiles = filesArray.filter((file) => file.size <= 10 * 1024 * 1024) // Max 10MB
      if (validFiles.length !== filesArray.length) {
        alert("Sommige bestanden zijn te groot! Max 10MB per bestand.")
      }

      setUploadedFiles((prev) => [...prev, ...validFiles])
    }
  }

  // ✅ Bestanden verwijderen uit de lijst
  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  // ✅ Input wijzigingen verwerken
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  // ✅ Formulier indienen
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.privacyCheck) {
      alert("Je moet akkoord gaan met het privacybeleid om door te gaan.")
      return
    }

    setIsSubmitting(true)

    try {
      const submitData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, String(value))
      })

      uploadedFiles.forEach((file) => {
        submitData.append("uploadedFiles", file)
      })

      const response = await fetch("/api/send-offerte", {
        method: "POST",
        body: submitData,
      })

      if (response.ok) {
        // Toon notificatie en reset formulier
        setNotification("Uw offerte-aanvraag is succesvol verzonden!")
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
        })
        setUploadedFiles([])

        // Verberg de notificatie na 3 seconden
        setTimeout(() => setNotification(""), 3000)
      } else {
        throw new Error("Verzending mislukt.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Er is een fout opgetreden. Probeer het later opnieuw.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Floating notificatie */}
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {notification}
        </div>
      )}

      <main className="bg-black py-32">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-start justify-center px-4 lg:px-16">
          {/* Formulier sectie */}
          <div className="bg-white shadow-lg rounded-lg w-full lg:w-1/2 p-8 space-y-6">
            <h2 className="text-3xl font-bold mb-4">Vraag een offerte aan</h2>
            <p className="text-gray-700 mb-6">Vul je gegevens in en ontvang een vrijblijvende offerte!</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="naam"
                value={formData.naam}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Naam"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="E-mailadres"
                required
              />
              <input
                type="tel"
                name="telefoonnummer"
                value={formData.telefoonnummer}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Telefoonnummer"
                required
              />
              <input
                type="text"
                name="bedrijfsnaam"
                value={formData.bedrijfsnaam}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Bedrijfsnaam (optioneel)"
              />
              <input
                type="text"
                name="kenteken"
                value={formData.kenteken}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Kenteken"
              />
              <input
                type="text"
                name="bouwjaar"
                value={formData.bouwjaar}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Bouwjaar"
              />
              <input
                type="text"
                name="huidigeKleur"
                value={formData.huidigeKleur}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Huidige kleur"
              />
              <input
                type="text"
                name="gewensteKleur"
                value={formData.gewensteKleur}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Gewenste kleur"
              />
              <textarea
                name="bericht"
                value={formData.bericht}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Uw bericht"
              />

              {/* Bestand upload veld */}
              <label className="block">
                <span className="font-semibold">Voeg foto's toe:</span>
                <input
                  type="file"
                  name="uploadedFiles"
                  onChange={handleFileChange}
                  multiple
                  className="p-3 border rounded w-full mt-2"
                />
              </label>

              {/* Bestanden preview */}
              <div className="flex flex-wrap gap-4 mt-4">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="relative">
                    <p className="text-sm">{file.name}</p>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 text-sm ml-2"
                    >
                      ❌ Verwijderen
                    </button>
                  </div>
                ))}
              </div>

              {/* Privacy Check */}
              <div className="mt-4 flex items-center space-x-2">
                <Checkbox
                  id="privacyCheck"
                  checked={formData.privacyCheck}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, privacyCheck: checked === true }))
                  }
                />
                <label htmlFor="privacyCheck" className="text-gray-700">
                  Ik ga akkoord met het privacybeleid
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 text-white font-bold py-3 rounded hover:bg-yellow-600 transition disabled:opacity-50"
              >
                {isSubmitting ? "Versturen..." : "Verstuur Offerte"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
