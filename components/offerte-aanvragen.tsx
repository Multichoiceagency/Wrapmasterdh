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
    afwerking: "",
    wrapType: "Full wrap",
    schade: "Nee",
    staat: "Nieuw",
    vestiging: "Amsterdam",
    datum: "",
    bericht: "",
    privacyCheck: false,
    uploadedFiles: [] as File[], // ✅ Ondersteunt meerdere bestanden
  })

  const [isFormVisible, setFormVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // ✅ Verwerken van formuliergegevens
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  // ✅ Meerdere bestanden verwerken (max 10MB per bestand)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      const validFiles = filesArray.filter((file) => file.size <= 10 * 1024 * 1024)

      if (validFiles.length !== filesArray.length) {
        alert("Sommige bestanden zijn groter dan 10 MB en zijn niet toegevoegd.")
      }

      setFormData((prev) => ({
        ...prev,
        uploadedFiles: [...prev.uploadedFiles, ...validFiles],
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

  // ✅ Formulier verzenden naar server (`route.ts`)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.privacyCheck) {
      alert("Je moet akkoord gaan met het privacybeleid om door te gaan.")
      return
    }

    setIsSubmitting(true)

    try {
      const submitData = new FormData()

      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "uploadedFiles") {
          submitData.append(key, String(value))
        }
      })

      formData.uploadedFiles.forEach((file) => {
        submitData.append("uploadedFiles", file)
      })

      const response = await fetch("/api/submit-quote", {
        method: "POST",
        body: submitData,
      })

      if (response.ok) {
        alert("Uw offerte-aanvraag is succesvol verzonden!")
        setFormVisible(false)
        setFormData({
          naam: "",
          email: "",
          telefoonnummer: "",
          bedrijfsnaam: "",
          kenteken: "",
          bouwjaar: "",
          huidigeKleur: "",
          gewensteKleur: "",
          afwerking: "",
          wrapType: "Full wrap",
          schade: "Nee",
          staat: "Nieuw",
          vestiging: "Amsterdam",
          datum: "",
          bericht: "",
          privacyCheck: false,
          uploadedFiles: [],
        })
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
      <button
        onClick={() => setFormVisible(true)}
        className="fixed font-bold text-l bottom-4 left-4 bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        >
        OFFERTE AANVRAGEN
      </button>

      {isFormVisible && (
        <div className="fixed bottom-0 right-0 bg-white shadow-lg p-6 z-50 overflow-y-auto h-[80vh] md:h-auto md:max-h-[700px] md:max-w-[500px] md:rounded-lg md:bottom-4 md:right-4">
          <button className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-4xl" onClick={() => setFormVisible(false)}>
            ×
          </button>

          <h2 className="text-2xl font-bold mb-2">Vraag een offerte aan</h2>
          <p className="text-gray-700 mb-4">Vul je gegevens in en ontvang een vrijblijvende offerte.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="naam" value={formData.naam} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="Naam" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="E-mailadres" required />
            <input type="tel" name="telefoonnummer" value={formData.telefoonnummer} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="Telefoonnummer" required />
            <input type="text" name="bedrijfsnaam" value={formData.bedrijfsnaam} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="Bedrijfsnaam (optioneel)" />
            <input type="text" name="kenteken" value={formData.kenteken} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="Kenteken" />
            <input type="text" name="bouwjaar" value={formData.bouwjaar} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="Bouwjaar" />
            <input type="text" name="huidigeKleur" value={formData.huidigeKleur} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="Huidige kleur" />
            <input type="text" name="gewensteKleur" value={formData.gewensteKleur} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="Gewenste kleur" />
            <input type="text" name="afwerking" value={formData.afwerking} onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="Afwerking" />

            {/* Wrap Type */}
            <select name="wrapType" value={formData.wrapType} onChange={handleChange} className="w-full p-3 border rounded-lg">
              <option value="Full wrap">Full wrap</option>
              <option value="Partial wrap">Partial wrap</option>
              <option value="Color change">Color change</option>
            </select>

            {/* Schade */}
            <div className="flex items-center space-x-4">
              <label>
                <input type="radio" name="schade" value="Ja" checked={formData.schade === "Ja"} onChange={handleChange} className="mr-2" />
                Ja
              </label>
              <label>
                <input type="radio" name="schade" value="Nee" checked={formData.schade === "Nee"} onChange={handleChange} className="mr-2" />
                Nee
              </label>
            </div>

            {/* Staat */}
            <select name="staat" value={formData.staat} onChange={handleChange} className="w-full p-3 border rounded-lg">
              <option value="Nieuw">Nieuw</option>
              <option value="Gebruikt">Gebruikt</option>
            </select>

            {/* Vestiging */}
            <select name="vestiging" value={formData.vestiging} onChange={handleChange} className="w-full p-3 border rounded-lg">
              <option value="Amsterdam">Amsterdam</option>
              <option value="Rotterdam">Rotterdam</option>
              <option value="Den Haag">Den Haag</option>
            </select>

            {/* Datum */}
            <input type="date" name="datum" value={formData.datum} onChange={handleChange} className="w-full p-3 border rounded-lg" />

            {/* Bestandsupload */}
            <label className="block">
              Voeg foto's toe van uw auto (max 10MB per bestand):
              <input type="file" name="uploadedFiles" onChange={handleFileChange} multiple className="w-full p-3 border rounded-lg mt-2" />
            </label>

            {/* Bestanden preview */}
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
            <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition disabled:opacity-50">
              {isSubmitting ? "Versturen..." : "Verstuur Offerte"}
            </button>
          </form>
        </div>
      )}
    </main>
  )
}
