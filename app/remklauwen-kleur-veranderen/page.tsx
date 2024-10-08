/* eslint-disable react/no-unescaped-entities */
'use client';

import HeroSection from '@/app/components/hero/Hero'; // Importeer de hero section component
import SwiperCore from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function RemklauwenKleurVeranderenDiensten() {
  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <HeroSection />
      {/* Logo Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Wij gebruiken</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 items-center">
            {/* 3M Logo */}
            <div className="flex justify-center">
              <Image
                src="/images/3m-wrap.png"
                alt="3M Logo"
                width={120}
                height={60}
                className="hover:scale-110 transform transition-transform duration-300"
              />
            </div>
            {/* Avery Dennison Logo */}
            <div className="flex justify-center">
              <Image
                src="/images/avery-logo.png"
                alt="Avery Dennison Logo"
                width={300}
                height={60}
                className="hover:scale-110 transform transition-transform duration-300"
              />
            </div>
            {/* Xpel Logo */}
            <div className="flex justify-center">
              <Image
                src="/images/xpel-logo.jpg"
                alt="Xpel Logo"
                width={300}
                height={60}
                className="hover:scale-110 transform transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overzicht van Remklauwen Kleur Veranderen */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8">Waarom kiezen voor Remklauwen Kleur Veranderen?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Het veranderen van de kleur van uw remklauwen is een populaire manier om uw auto een sportieve en persoonlijke uitstraling te geven. Het biedt niet alleen esthetische voordelen, maar kan ook de uitstraling van uw velgen en voertuig verbeteren.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-red-600">1000+</p>
              <p className="text-lg">Remklauwen Gespoten</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">15+</p>
              <p className="text-lg">Jaren Ervaring</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">100%</p>
              <p className="text-lg">Tevreden Klanten</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">Premium</p>
              <p className="text-lg">Materialen & Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is Remklauwen Kleur Veranderen? */}
      <section id="wat-is-remklauwen-kleur-veranderen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Remklauwen Kleur Veranderen"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8 text-left">
                Remklauwen Kleur Veranderen: Wat is het precies?
              </h2>
              <p className="text-lg mb-4 text-gray-700">
                Bij het veranderen van de kleur van uw remklauwen wordt een speciale hittebestendige verf aangebracht die bestand is tegen de hoge temperaturen en omstandigheden die remmen kunnen veroorzaken. Hiermee kunt u uw remklauwen een sportieve of unieke kleur geven die past bij uw voertuig.
              </p>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>Keuze uit een breed scala aan kleuren</li>
                <li>Hitte- en corrosiebestendige afwerking</li>
                <li>Sportieve uitstraling voor uw voertuig</li>
                <li>Verhoogde waarde en uitstraling van uw auto</li>
              </ul>
              <p className="text-lg font-semibold">
                Geef uw remklauwen een opvallende look die perfect past bij uw voertuig.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font-bold hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe lang duurt Remklauwen Kleur Veranderen? */}
      <section id="hoelang-duurt-remklauwen-kleur-veranderen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-8 text-left">Hoe lang duurt het om de remklauwen te kleuren?</h2>
              <p className="text-lg mb-4 text-gray-700">
                Het kleuren van uw remklauwen is een snel proces dat meestal binnen 1 tot 2 dagen voltooid kan worden. Dit omvat het schoonmaken, voorbereiden en aanbrengen van de hittebestendige verf op de remklauwen.
              </p>
              <h4 className="text-2xl font-bold mb-4">Standaard Remklauwen Kleuren</h4>
              <p className="text-lg mb-6 text-gray-700">
                Een standaard procedure voor het kleuren van remklauwen kan vaak binnen een dag worden afgerond.
              </p>
              <p className="text-lg font-semibold">
                Het veranderen van de kleur van uw remklauwen is een eenvoudige manier om uw voertuig een persoonlijke en sportieve uitstraling te geven.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font-bold hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Remklauwen Kleur Veranderen"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wat kost Remklauwen Kleur Veranderen? */}
      <section id="kosten-remklauwen-kleur-veranderen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat kost het om remklauwen te kleuren?</h2>
          <p className="text-lg mb-6 text-gray-700 text-center">
            De kosten van het veranderen van de kleur van remklauwen kunnen variëren, afhankelijk van het type voertuig, het aantal remklauwen en de gewenste afwerking.
          </p>
          <ul className="list-disc list-inside text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
            <li>
              <strong>Type Voertuig:</strong> Grotere voertuigen met grotere remklauwen vereisen mogelijk meer materiaal en arbeid.
            </li>
            <li>
              <strong>Kleur en Afwerking:</strong> Speciale afwerkingen zoals metallic of matte kleuren kunnen duurder zijn.
            </li>
            <li>
              <strong>Bescherming:</strong> Een optionele keramische coating kan de duurzaamheid van de afwerking verbeteren, maar verhoogt de kosten.
            </li>
            <li>
              <strong>Aanvullende Opties:</strong> Mogelijke extra opties zoals het aanbrengen van logo's of tekst op de remklauwen kunnen de kosten verhogen.
            </li>
          </ul>
          <div className="text-center">
            <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 bg-red-700 rounded-xl text-white font-bold hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
              OFFERTE AANVRAGEN
            </button>
          </div>
          <p className="text-lg text-gray-700 text-center">
            Neem contact met ons op voor een op maat gemaakte offerte.
          </p>
        </div>
      </section>

      {/* Garanties */}
      <section id="garanties" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8 text-center">Onze Garanties</h2>
          <p className="text-lg mb-6 text-gray-700 text-center">
            Bij Wrapmaster bieden we uitgebreide garanties en kwaliteitsservices voor het kleuren van remklauwen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Garantie op Remklauwen Kleuren</h3>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>3 jaar garantie op het verven van de remklauwen, inclusief bescherming tegen verkleuring en afbladderen.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Tevredenheidsgarantie</h3>
              <p className="text-lg mb-6 text-gray-700">
                Wij streven naar 100% klanttevredenheid. Als u niet volledig tevreden bent, doen we er alles aan om dit te verhelpen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen van Remklauwen Kleur Veranderen */}
      <section id="voordelen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8 text-center">De Voordelen van Remklauwen Kleur Veranderen</h2>
          <div className="flex flex-col items-center gap-8">
            <ul className="list-none text-lg mb-6 text-gray-700 text-center">
              <li>
                <strong>Sportieve look:</strong> Een opvallende kleur geeft uw voertuig een sportievere en esthetisch aantrekkelijke uitstraling.
              </li>
              <li>
                <strong>Bescherming:</strong> De hittebestendige verf biedt bescherming tegen vuil, stof en corrosie.
              </li>
              <li>
                <strong>Personalisatie:</strong> Maak uw auto uniek met een persoonlijke kleurkeuze voor de remklauwen.
              </li>
              <li>
                <strong>Duurzaam:</strong> De verf is bestand tegen extreme temperaturen en slijtage.
              </li>
              <li>
                <strong>Niet-permanent:</strong> U kunt de kleur later aanpassen indien gewenst.
              </li>
            </ul>
            <Image
              src="/images/brabus1.png"
              alt="Voordelen van Remklauwen Kleur Veranderen"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg animate-fadeInUp"
            />
            <p className="mt-4 text-center text-gray-700">
              Ontdek hoe u uw auto kunt personaliseren met onze professionele remklauwen kleur services.
            </p>
          </div>
        </div>
      </section>

      {/* Onderhoudstips */}
      <section id="onderhoud" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/poetsen-glascoating.jpeg"
                alt="Onderhoud van Gekleurde Remklauwen"
                width={600}
                height={400}
                className="rounded-lg shadow-lg hover:scale-y-100 animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8 text-left">Onderhoudstips voor Gekleurde Remklauwen</h2>
              <ol className="list-decimal list-inside text-lg mb-6 text-gray-700">
                <li>
                  <strong>Regelmatig Reinigen:</strong> Reinig uw remklauwen regelmatig om remstof en vuil te verwijderen, wat de levensduur van de verf verlengt.
                </li>
                <li>
                  <strong>Gebruik Zachte Borstels:</strong> Gebruik bij het schoonmaken altijd een zachte borstel of doek om de verf niet te beschadigen.
                </li>
                <li>
                  <strong>Vermijd Bijtende Reinigers:</strong> Gebruik geen agressieve chemicaliën of reinigingsmiddelen die de afwerking kunnen aantasten.
                </li>
              </ol>
              <p className="text-lg text-gray-700">
                Met deze tips blijft de kleur van uw remklauwen lang mooi en beschermt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16 text-white text-center animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Klaar om uw remklauwen te transformeren?</h2>
          <p className="text-lg mb-8">
            Vraag vandaag nog een offerte aan en ontdek wat Wrapmaster voor u kan betekenen met remklauwen kleur services.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Vraag Offerte Aan
          </a>
        </div>
      </section>
    </main>
  );
}
