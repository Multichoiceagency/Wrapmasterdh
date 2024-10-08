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

export default function SterrenhemelDiensten() {
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

      {/* Overzicht van Sterrenhemel */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8">Waarom kiezen voor een Sterrenhemel?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Een sterrenhemel-installatie in uw auto biedt een luxe en betoverende uitstraling. Het creëert een uniek visueel effect op het plafond van uw voertuig door honderden of duizenden kleine lichtjes die een sterrenhemel simuleren. Ideaal voor autoliefhebbers die een verfijnde, gepersonaliseerde ervaring willen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-red-600">500+</p>
              <p className="text-lg">Sterrenhemels Geïnstalleerd</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">10+</p>
              <p className="text-lg">Jaren Ervaring</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">100%</p>
              <p className="text-lg">Tevreden Klanten</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">Premium</p>
              <p className="text-lg">Materialen & Installatie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is een Sterrenhemel? */}
      <section id="wat-is-sterrenhemel" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Sterrenhemel"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8 text-left">
                Sterrenhemel: Wat is het precies?
              </h2>
              <p className="text-lg mb-4 text-gray-700">
                Een sterrenhemel-installatie creëert een prachtige, sfeervolle ambiance in uw auto. De kleine LED-lichtjes worden subtiel in het plafond van uw voertuig verwerkt, waardoor een prachtig sterrenpatroon ontstaat. U kunt de kleur, helderheid en het knipperpatroon van de sterren aanpassen voor een persoonlijke ervaring.
              </p>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>Unieke, luxe uitstraling voor uw auto</li>
                <li>Volledige aanpasbaarheid van lichtkleur en intensiteit</li>
                <li>Beschikbaar voor alle voertuigmodellen</li>
                <li>Duurzame LED-technologie</li>
              </ul>
              <p className="text-lg font-semibold">
                Maak uw rijervaring betoverend met een gepersonaliseerde sterrenhemel in uw voertuig.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font-bold hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe lang duurt een Sterrenhemel-installatie? */}
      <section id="hoelang-duurt-sterrenhemel" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-8 text-left">Hoe lang duurt het om een sterrenhemel te installeren?</h2>
              <p className="text-lg mb-4 text-gray-700">
                Het installeren van een sterrenhemel in uw auto kan variëren afhankelijk van het model en het aantal lichtpunten dat u wilt. Een standaard installatie duurt meestal 1 tot 2 dagen.
              </p>
              <h4 className="text-2xl font-bold mb-4">Standaard Sterrenhemel</h4>
              <p className="text-lg mb-6 text-gray-700">
                Een basis sterrenhemel met honderden lichtpunten kan binnen één dag worden voltooid. Complexere installaties met duizenden lichtpunten of speciale effecten kunnen 2 dagen in beslag nemen.
              </p>
              <p className="text-lg font-semibold">
                Sterrenhemels zijn een geweldige manier om uw auto luxe en uniek te maken met een korte installatieperiode.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font-bold hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Sterrenhemel"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wat kost een Sterrenhemel? */}
      <section id="kosten-sterrenhemel" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat kost een sterrenhemel?</h2>
          <p className="text-lg mb-6 text-gray-700 text-center">
            De kosten voor een sterrenhemel-installatie variëren afhankelijk van het aantal lichtpunten, de complexiteit van de installatie en eventuele extra functies zoals kleurverandering of sterrenpatronen.
          </p>
          <ul className="list-disc list-inside text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
            <li>
              <strong>Aantal Lichtpunten:</strong> Meer lichtpunten betekenen een complexere installatie en hogere kosten.
            </li>
            <li>
              <strong>Kleur en Patronen:</strong> Installaties met meerdere kleuren of speciale knipperpatronen kunnen duurder zijn.
            </li>
            <li>
              <strong>Aanvullende Opties:</strong> Optionele toevoegingen zoals afstandsbediening of geïntegreerde muziekbesturing kunnen de prijs verhogen.
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
            Bij Wrapmaster bieden we uitgebreide garanties en kwaliteitsservices voor uw sterrenhemel-installatie.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Garantie op Sterrenhemel</h3>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>3 jaar garantie op de installatie, inclusief bescherming tegen defecten en uitval van lichtpunten.</li>
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

      {/* Voordelen van een Sterrenhemel */}
      <section id="voordelen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8 text-center">De Voordelen van een Sterrenhemel</h2>
          <div className="flex flex-col items-center gap-8">
            <ul className="list-none text-lg mb-6 text-gray-700 text-center">
              <li>
                <strong>Luxe uitstraling:</strong> Een sterrenhemel geeft uw auto een exclusieve en elegante uitstraling.
              </li>
              <li>
                <strong>Volledige aanpasbaarheid:</strong> Pas de kleur, helderheid en knipperpatronen aan naar uw voorkeur.
              </li>
              <li>
                <strong>Duurzaam:</strong> De LED-technologie is energiezuinig en duurzaam, waardoor de installatie lang meegaat.
              </li>
              <li>
                <strong>Niet-permanent:</strong> U kunt de verlichting gemakkelijk aanpassen of uitschakelen wanneer u wilt.
              </li>
            </ul>
            <Image
              src="/images/brabus1.png"
              alt="Voordelen van een Sterrenhemel"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg animate-fadeInUp"
            />
            <p className="mt-4 text-center text-gray-700">
              Ontdek hoe u uw auto kunt transformeren met onze professionele sterrenhemel-installaties.
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
                alt="Onderhoud van Sterrenhemel"
                width={600}
                height={400}
                className="rounded-lg shadow-lg hover:scale-y-100 animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8 text-left">Onderhoudstips voor Sterrenhemels</h2>
              <ol className="list-decimal list-inside text-lg mb-6 text-gray-700">
                <li>
                  <strong>Regelmatig Stofvrij Maken:</strong> Houd het interieur en plafond van uw voertuig schoon om de lichtpunten helder te houden.
                </li>
                <li>
                  <strong>Vermijd Scherpe Objecten:</strong> Voorkom beschadigingen aan het plafond door scherpe voorwerpen weg te houden van de installatie.
                </li>
                <li>
                  <strong>Juiste Elektrische Zorg:</strong> Zorg ervoor dat de bedrading van de sterrenhemel niet wordt blootgesteld aan overmatige hitte of druk.
                </li>
              </ol>
              <p className="text-lg text-gray-700">
                Met deze tips blijft uw sterrenhemel helder en probleemloos werken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16 text-white text-center animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Klaar om uw auto te transformeren met een sterrenhemel?</h2>
          <p className="text-lg mb-8">
            Vraag vandaag nog een offerte aan en ontdek wat Wrapmaster voor u kan betekenen met sterrenhemel-installaties.
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
