'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    bericht: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Hier zou je een POST request kunnen maken naar een API om de gegevens te verwerken
  };

  return (
    <main className=" bg-black py-16">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Google Maps Embed */}
        <div className="w-full mb-12 rounded-xl ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d78492.80962488402!2d4.364657!3d52.063339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b70ee8d89279%3A0x1b8914a2b8f83858!2sWrapmaster!5e0!3m2!1snl!2sus!4v1727819759451!5m2!1snl!2sus"
            width="100%"
            height="400"
            style={{ border: 16 }}
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex={0}
          />
        </div>

        {/* Formulier en Contactgegevens sectie */}
        <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row">
          {/* Contactformulier */}
          <div className="w-full lg:w-2/3 p-8">
            <h2 className="text-3xl font mb-4">Neem contact met ons op</h2>
            <p className="text-gray-700 mb-6">
              Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met je op.
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
                placeholder="E-mail"
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

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font py-3 rounded hover:bg-yellow-600 transition"
              >
                Verstuur Bericht
              </button>
            </form>
          </div>

          {/* Contactgegevens */}
          <div className="w-full lg:w-1/3 bg-gray-100 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font mb-4">Contactgegevens</h3>
            <p className="text-gray-700 mb-2">Westvlietweg 72-L</p>
            <p className="text-gray-700 mb-2">2495 AA, Den Haag</p>
            <a href="tel:0702250721" className="text-blue-600 hover:underline">
            070 - 225 07 21
              </a>
            <p className="text-gray-700 mb-6">
              <a href="mailto:info@wrapmasterdh.nl" className="text-blue-600 hover:underline">
                info@wrapmasterdh.nl
              </a>
            </p>
            <p className="text-gray-700 mb-2">BTW NR: NL002332891B92</p>
            <p className="text-gray-700 mb-2">KvK NR: 68374232</p>
          </div>
        </div>
      </div>
    </main>
  );
}
