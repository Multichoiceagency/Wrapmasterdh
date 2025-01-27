/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export default function OfferteAanvragen() {
  const [formData, setFormData] = useState({
    bedrijf: "",
    voornaam: "",
    achternaam: "",
    email: "",
    telefoonnummer: "",
    merk: "",
    type: "",
    uitvoering: "",
    kleur: "",
    afwerking: "",
    wrapType: "Full wrap",
    schade: "Nee",
    staat: "Nieuw",
    vestiging: "Amsterdam",
    datum: "",
    privacyCheck: false,
    uploadedFiles: null as File | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      })
    } else if (type === "radio") {
      setFormData({
        ...formData,
        [name]: value,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        uploadedFiles: e.target.files[0], // Store the first uploaded file
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create a new FormData object
    const submitData = new FormData()

    // Append all form fields to the FormData object
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "uploadedFiles" && value instanceof File) {
        submitData.append(key, value, value.name)
      } else if (typeof value !== "object") {
        submitData.append(key, String(value))
      }
    })

    try {
      const response = await fetch("/api/submit-quote", {
        method: "POST",
        body: submitData,
      })

      if (response.ok) {
        const result = await response.json()
        console.log("Form submitted successfully:", result)
        // You can add logic here to show a success message to the user
        alert("Uw offerte-aanvraag is succesvol verzonden!")
      } else {
        console.error("Form submission failed")
        // You can add logic here to show an error message to the user
        alert("Er is een fout opgetreden bij het verzenden van uw aanvraag. Probeer het later opnieuw.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Er is een fout opgetreden bij het verzenden van uw aanvraag. Probeer het later opnieuw.")
    }
  }

  return (
    <main className="bg-black py-32">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-start justify-center px-4 lg:px-16">
        {/* Formulier sectie */}
        <div className="bg-white shadow-lg rounded-lg w-full lg:w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font mb-4">Vraag een offerte aan.</h2>
          <p className="text-gray-700 mb-6">
            Vul je gegevens in en wij zorgen ervoor dat je een vrijblijvende, op maat gemaakte offerte ontvangt voor een
            carwrap.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="bedrijf"
              value={formData.bedrijf}
              onChange={handleChange}
              className="p-3 border rounded w-full"
              placeholder="Bedrijfsnaam (optioneel)"
            />
            <input
              type="text"
              name="voornaam"
              value={formData.voornaam}
              onChange={handleChange}
              className="p-3 border rounded w-full"
              placeholder="Voornaam"
              required
            />
            <input
              type="text"
              name="achternaam"
              value={formData.achternaam}
              onChange={handleChange}
              className="p-3 border rounded w-full"
              placeholder="Achternaam"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded w-full"
              placeholder="E-mail"
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

            {/* Auto Informatie */}
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                name="merk"
                value={formData.merk}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Merk"
              />
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Type"
              />
              <input
                type="text"
                name="uitvoering"
                value={formData.uitvoering}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Uitvoering"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="kleur"
                value={formData.kleur}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Kleur"
              />
              <input
                type="text"
                name="afwerking"
                value={formData.afwerking}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Afwerking"
              />
            </div>

            {/* Wrap Type */}
            <select
              name="wrapType"
              value={formData.wrapType}
              onChange={handleChange}
              className="p-3 border rounded w-full"
            >
              <option value="Full wrap">Full wrap</option>
              <option value="Partial wrap">Partial wrap</option>
              <option value="Color change">Color change</option>
            </select>

            {/* Schade */}
            <div>
              <p className="mb-2">Is er schade aan de auto?</p>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="schade"
                    value="Ja"
                    checked={formData.schade === "Ja"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Ja
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="schade"
                    value="Nee"
                    checked={formData.schade === "Nee"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Nee
                </label>
              </div>
            </div>

            {/* Staat */}
            <select name="staat" value={formData.staat} onChange={handleChange} className="p-3 border rounded w-full">
              <option value="Nieuw">Nieuw</option>
              <option value="Gebruikt">Gebruikt</option>
            </select>

            {/* Vestiging */}
            <select
              name="vestiging"
              value={formData.vestiging}
              onChange={handleChange}
              className="p-3 border rounded w-full"
            >
              <option value="Amsterdam">Amsterdam</option>
              <option value="Rotterdam">Rotterdam</option>
              <option value="Den Haag">Den Haag</option>
            </select>

            {/* Datum */}
            <input
              type="date"
              name="datum"
              value={formData.datum}
              onChange={handleChange}
              className="p-3 border rounded w-full"
            />

            {/* File Upload */}
            <label className="block mt-4">
              Voeg foto's toe van je huidige auto:
              <input type="file" onChange={handleFileChange} className="p-3 border rounded w-full mt-2" />
              {formData.uploadedFiles && (
                <p className="text-sm text-gray-500 mt-1">Bestand: {formData.uploadedFiles.name}</p>
              )}
            </label>

            {/* Privacy Check */}
            <div className="mt-4">
              <Checkbox
                id="privacyCheck"
                checked={!!formData.privacyCheck} // Zorg ervoor dat het een boolean is
                onCheckedChange={(checked: boolean) => setFormData({ ...formData, privacyCheck: checked })}
              />
              <label htmlFor="privacyCheck" className="ml-2 text-sm text-gray-700">
                Ik heb het privacybeleid gelezen en ga ermee akkoord
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font py-3 rounded hover:bg-yellow-600 transition"
            >
              Verstuur Offerte
            </button>
          </form>
        </div>

        {/* Contactgegevens sectie */}
        <div className="flex flex-col items-center justify-center w-full bg-white shadow-lg rounded-lg p-8 lg:w-1/2 lg:ml-8 mb-10 lg:mb-0">
          <Image src="/logos/logo-zwart.png" alt="Wrapmaster Logo" width={200} height={100} className="mb-6" />
          <div className="text-center text-gray-700 space-y-2">
            <h3 className="text-2xl font">Contact</h3>
            <p>Westvlietweg 72-L</p>
            <p>2495 AA, Den Haag</p>
            <p>070 - 225 07 21</p>
            <p>
              <a href="mailto:info@wrapmasterdh.nl" className="text-blue-600 hover:underline">
                info@wrapmasterdh.nl
              </a>
            </p>
            <p>BTW NR: NL0023328992</p>
            <p>KvK NR: 68374232</p>
          </div>
        </div>
      </div>
    </main>
  )
}

