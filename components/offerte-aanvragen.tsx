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
    uploadedFiles: [] as File[],
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isFormVisible, setFormVisible] = useState(false) // ✅ Toggle voor formulier

  // ✅ Handle file selection (Meerdere bestanden)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setFormData((prev) => ({
        ...prev,
        uploadedFiles: [...prev.uploadedFiles, ...filesArray],
      }))
    }
  }

  // ✅ Bestanden verwijderen
  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index),
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

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
        if (key === "uploadedFiles" && Array.isArray(value)) {
          value.forEach((file) => submitData.append("uploadedFiles", file))
        } else {
          submitData.append(key, String(value))
        }
      })

      const response = await fetch("/api/submit-quote", {
        method: "POST",
        body: submitData,
      })

      if (response.ok) {
        alert("Uw offerte-aanvraag is succesvol verzonden!")
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
          uploadedFiles: [],
        })
        setFormVisible(false) // ✅ Formulier sluiten na verzenden
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
    <main className="relative">
      {/* ✅ Knop om het formulier te openen */}
      <button
        onClick={() => setFormVisible(true)}
        className="fixed font-bold text-l bottom-4 left-4 bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        OFFERTE AANVRAGEN
      </button>

      {isFormVisible && (
        <div className="fixed bottom-0 right-0 bg-white shadow-lg p-6 z-50 overflow-y-auto h-[80vh] md:h-auto md:max-h-[700px] md:max-w-[500px] md:rounded-lg md:bottom-4 md:right-4">
          {/* ✅ Sluitknop */}
          <button className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-4xl" onClick={() => setFormVisible(false)}>
            ×
          </button>

          <h2 className="text-3xl font-bold mb-4">Vraag een offerte aan</h2>
          <p className="text-gray-700 mb-6">
            Vul je gegevens in en ontvang een vrijblijvende offerte!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="naam" value={formData.naam} onChange={handleChange} className="p-3 border rounded w-full" placeholder="Naam" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="p-3 border rounded w-full" placeholder="E-mailadres" required />
            <input type="tel" name="telefoonnummer" value={formData.telefoonnummer} onChange={handleChange} className="p-3 border rounded w-full" placeholder="Telefoonnummer" required />
            <input type="text" name="bedrijfsnaam" value={formData.bedrijfsnaam} onChange={handleChange} className="p-3 border rounded w-full" placeholder="Bedrijfsnaam (optioneel)" />
            <input type="text" name="kenteken" value={formData.kenteken} onChange={handleChange} className="p-3 border rounded w-full" placeholder="Kenteken" />
            <input type="text" name="bouwjaar" value={formData.bouwjaar} onChange={handleChange} className="p-3 border rounded w-full" placeholder="Bouwjaar" />
            <input type="text" name="huidigeKleur" value={formData.huidigeKleur} onChange={handleChange} className="p-3 border rounded w-full" placeholder="Huidige kleur" />
            <input type="text" name="gewensteKleur" value={formData.gewensteKleur} onChange={handleChange} className="p-3 border rounded w-full" placeholder="Gewenste kleur" />
            <textarea name="bericht" value={formData.bericht} onChange={handleChange} className="p-3 border rounded w-full" placeholder="Uw bericht" />

            {/* File Upload */}
            <label className="block">
              Voeg foto's toe van uw auto:
              <input type="file" name="uploadedFiles" onChange={handleFileChange} multiple className="p-3 border rounded w-full mt-2" />
            </label>

            {/* ✅ Thumbnails van geüploade afbeeldingen */}
            <div className="flex flex-wrap gap-4 mt-4">
              {formData.uploadedFiles.map((file, index) => (
                <div key={index} className="relative">
                  <img src={URL.createObjectURL(file)} alt="Upload Preview" className="w-24 h-24 object-cover rounded-lg shadow" />
                  <button type="button" onClick={() => removeFile(index)} className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs">
                    ❌
                  </button>
                </div>
              ))}
            </div>

            {/* Privacy Check */}
            <div className="mt-4 flex items-center space-x-2">
              <Checkbox id="privacyCheck" checked={formData.privacyCheck} onCheckedChange={(checked) => setFormData({ ...formData, privacyCheck: !!checked })} />
              <label htmlFor="privacyCheck" className="text-gray-700">Ik ga akkoord met het privacybeleid</label>
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-500 text-white font-bold py-3 rounded hover:bg-yellow-600 transition disabled:opacity-50">
              {isSubmitting ? "Versturen..." : "Verstuur Offerte"}
            </button>
          </form>
        </div>
      )}
    </main>
  )
}
