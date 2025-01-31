"use client"

import Image from "next/image"
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
    uploadedFiles: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked })
    } else if (type === "file") {
      setFormData({ ...formData, uploadedFiles: (e.target as HTMLInputElement).files?.[0] || null })
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
        if (key === "uploadedFiles" && value instanceof File) {
          submitData.append(key, value, value.name)
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
          uploadedFiles: null,
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
    <main className="bg-black py-32">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-start justify-center px-4 lg:px-16">
        {/* Formulier sectie */}
        <div className="bg-white shadow-lg rounded-lg w-full lg:w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font-bold mb-4">Vraag een offerte aan</h2>
          <p className="text-gray-700 mb-6">
            Vul je gegevens in en ontvang een vrijblijvende offerte voor een carwrap.
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
              <input type="file" name="uploadedFiles" onChange={handleChange} className="p-3 border rounded w-full mt-2" />
            </label>

            {/* Privacy Check */}
            <div className="mt-4 flex items-center space-x-2">
              <Checkbox id="privacyCheck" checked={formData.privacyCheck} onCheckedChange={(checked) => setFormData({ ...formData, privacyCheck: !!checked })} />
              <label htmlFor="privacyCheck" className="text-gray-700">
                Ik ga akkoord met het privacybeleid
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-500 text-white font-bold py-3 rounded hover:bg-yellow-600 transition disabled:opacity-50">
              {isSubmitting ? "Versturen..." : "Verstuur Offerte"}
            </button>
          </form>
        </div>

        {/* Contactgegevens sectie */}
        <div className="flex flex-col items-center justify-center w-full bg-white shadow-lg rounded-lg p-8 lg:w-1/2 lg:ml-8 mb-10 lg:mb-0">
          <Image src="/logos/logo-zwart.png" alt="Wrapmaster Logo" width={200} height={100} className="mb-6" />
          <div className="text-center text-gray-700 space-y-2">
            <h3 className="text-2xl font-bold">Contact</h3>
            <p>Westvlietweg 72-L, 2495 AA, Den Haag</p>
            <p>070 - 225 07 21</p>
            <p><a href="mailto:info@wrapmasterdh.nl" className="text-blue-600 hover:underline">info@wrapmasterdh.nl</a></p>
            <p>BTW NR: NL0023328992</p>
            <p>KvK NR: 68374232</p>
          </div>
        </div>
      </div>
    </main>
  )
}
