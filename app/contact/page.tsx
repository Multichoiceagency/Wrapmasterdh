"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    bericht: "",
    telefoonnummer: "",
    privacyCheck: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.privacyCheck) {
      alert("Je moet akkoord gaan met het privacybeleid om door te gaan.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setNotification("Uw bericht is succesvol verzonden!")
        setFormData({
          naam: "",
          email: "",
          bericht: "",
          telefoonnummer: "",
          privacyCheck: false,
        })
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
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {notification}
        </div>
      )}

      <main className="bg-black py-32 pl-8 pr-8">
        <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row">
          {/* Contactformulier */}
          <div className="w-full lg:w-2/3 p-8">
            <h2 className="text-3xl font-bold mb-4">Neem contact met ons op</h2>
            <p className="text-gray-700 mb-6">
              Vul het onderstaande formulier in en wij nemen zo snel mogelijk contact met u op.
            </p>
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
                type="telefoonnummer"
                name="telefoonnummer"
                value={formData.telefoonnummer}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Telefoonnummer"
                required
              />
              <textarea
                name="bericht"
                value={formData.bericht}
                onChange={handleChange}
                className="p-3 border rounded w-full"
                placeholder="Je bericht"
                rows={6}
                required
              ></textarea>

              <div className="flex items-center space-x-2">
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 text-white font-bold py-3 rounded hover:bg-yellow-600 transition disabled:opacity-50"
              >
                {isSubmitting ? "Versturen..." : "Verstuur bericht"}
              </button>
            </form>
          </div>

          {/* Contactgegevens */}
          <div className="w-full lg:w-1/3 bg-gray-100 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Contactgegevens</h3>
            <p className="text-gray-700 mb-2">Westvlietweg 72-L</p>
            <p className="text-gray-700 mb-2">2495 AA, Den Haag</p>
            <a
              href="https://www.google.com/maps?..."
              className="text-red-700 mb-2"
            >
              Routebeschrijving
            </a>
            <a href="tel:0702250721" className="text-red-600 hover:underline">
              070 - 225 07 21
            </a>
            <p className="text-gray-700 mb-6">
              <a href="mailto:info@wrapmasterdh.nl" className="text-red-600 hover:underline">
                info@wrapmasterdh.nl
              </a>
            </p>
            <p className="text-red-700 text-sm mb-2">
              BTW NR: <strong>NL002332891B92</strong>
            </p>
            <p className="text-red-700 text-sm mb-2">
              KvK NR: <strong>68374232</strong>
            </p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="container mx-auto mt-8">
          <div className="w-full">
            <iframe
              className="rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d78492.80962488402!2d4.364657!3d52.063339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b70ee8d89279%3A0x1b8914a2b8f83858!2sWrapmaster!5e0!3m2!1snl!2sus!4v1727819759451!5m2!1snl!2sus"
              width="100%"
              height="700"
              style={{ border: 16 }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </main>
    </>
  )
}
