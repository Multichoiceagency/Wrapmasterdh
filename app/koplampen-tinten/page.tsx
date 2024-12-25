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

export default function KoplampenTintenDiensten() {
  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <HeroSection />
      {/* Logo Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font mb-8">Wij gebruiken</h2>
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

      {/* Overzicht van Koplampen Tinten */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto animate-fadeInUp">
          <h2 className="text-3xl font mb-8">Waarom kiezen voor Koplampen Tinten?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Koplampen tinten is een stijlvolle manier om de uitstraling van uw auto te verbeteren. Het biedt een sportieve, unieke look en beschermt tegelijkertijd uw koplampen tegen kleine beschadigingen en UV-straling. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font text-red-600">500+</p>
              <p className="text-lg">Koplampen Getint</p>
            </div>
            <div>
              <p className="text-4xl font text-red-600">10+</p>
              <p className="text-lg">Jaren Ervaring</p>
            </div>
            <div>
              <p className="text-4xl font text-red-600">100%</p>
              <p className="text-lg">Tevreden Klanten</p>
            </div>
            <div>
              <p className="text-4xl font text-red-600">Premium</p>
              <p className="text-lg">Materialen & Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is Koplampen Tinten? */}
      <section id="wat-is-koplampen-tinten" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Koplampen Tinten"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font mb-8 text-left">
                Koplampen Tinten: Wat is het precies?
              </h2>
              <p className="text-lg mb-4 text-gray-700">
                Koplampen tinten houdt in dat er een speciale folie wordt aangebracht op de koplampen van uw voertuig. Dit zorgt voor een strakke, donkere look en biedt extra bescherming tegen beschadigingen. U kunt kiezen uit verschillende tinten en kleuren om de look van uw voertuig te personaliseren.
              </p>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>Sportieve, luxe uitstraling voor uw auto</li>
                <li>Bescherming tegen krassen en UV-straling</li>
                <li>Volledig aanpasbare tinten en afwerkingen</li>
                <li>Niet-permanent; de folie kan gemakkelijk worden verwijderd of aangepast</li>
              </ul>
              <p className="text-lg font-semibold">
                Geef uw koplampen een opvallende en stijlvolle look die bij uw voertuig past.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe lang duurt Koplampen Tinten? */}
      <section id="hoelang-duurt-koplampen-tinten" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-3xl font mb-8 text-left">Hoe lang duurt het koplampen tinten?</h2>
              <p className="text-lg mb-4 text-gray-700">
                Het tinten van koplampen is een snel proces dat doorgaans binnen een paar uur voltooid kan worden. Afhankelijk van het gewenste tintniveau en de complexiteit kan dit tot 1 dag duren.
              </p>
              <h4 className="text-2xl font mb-4">Standaard Koplamp Tinten</h4>
              <p className="text-lg mb-6 text-gray-700">
                Een standaard koplamp tint kan meestal binnen een paar uur worden afgerond. Meer complexe tinten of speciale afwerkingen kunnen iets langer duren.
              </p>
              <p className="text-lg font-semibold">
                Het tinten van uw koplampen is een eenvoudige en snelle manier om uw auto een sportieve en verfijnde uitstraling te geven.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Koplampen Tinten"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wat kost Koplampen Tinten? */}
      <section id="kosten-koplampen-tinten" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font mb-8 text-center">Wat kost koplampen tinten?</h2>
          <p className="text-lg mb-6 text-gray-700 text-center">
            De kosten van koplampen tinten zijn afhankelijk van het type folie, de complexiteit van de installatie en het aantal koplampen dat getint moet worden.
          </p>
          <ul className="list-disc list-inside text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
            <li>
              <strong>Type Folie:</strong> Speciale folies zoals donkere tinten of kleuren kunnen duurder zijn dan standaard folies.
            </li>
            <li>
              <strong>Aantal Koplampen:</strong> Meerdere koplampen of extra lichtunits verhogen de kosten.
            </li>
            <li>
              <strong>Complexiteit:</strong> Auto's met ingewikkelde koplampvormen kunnen meer tijd en precisie vereisen, wat de prijs kan verhogen.
            </li>
          </ul>
          <div className="text-center">
            <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 bg-red-700 rounded-xl text-white font hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
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
          <h2 className="text-3xl font mb-8 text-center">Onze Garanties</h2>
          <p className="text-lg mb-6 text-gray-700 text-center">
            Bij Wrapmaster bieden we uitgebreide garanties en kwaliteitsservices voor uw koplamp tinten.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Garantie op Koplamp Tinten</h3>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>3 jaar garantie op de folie, inclusief bescherming tegen verkleuring en afbladderen.</li>
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

      {/* Voordelen van Koplampen Tinten */}
      <section id="voordelen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font mb-8 text-center">De Voordelen van Koplampen Tinten</h2>
          <div className="flex flex-col items-center gap-8">
            <ul className="list-none text-lg mb-6 text-gray-700 text-center">
              <li>
                <strong>Stijlvolle uitstraling:</strong> Tinten geeft uw voertuig een sportieve en luxe look.
              </li>
              <li>
                <strong>Bescherming:</strong> Beschermt uw koplampen tegen krassen, steenslag en UV-straling.
              </li>
              <li>
                <strong>Personalisatie:</strong> Kies een tint of kleur die past bij uw persoonlijke stijl.
              </li>
              <li>
                <strong>Duurzaam:</strong> De folie biedt langdurige bescherming zonder de koplampen te beschadigen.
              </li>
              <li>
                <strong>Niet permanent:</strong> De tintfolie kan gemakkelijk worden verwijderd of aangepast als u een andere look wilt.
              </li>
            </ul>
            <Image
              src="/images/brabus1.png"
              alt="Voordelen van Koplampen Tinten"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg animate-fadeInUp"
            />
            <p className="mt-4 text-center text-gray-700">
              Ontdek hoe u uw auto kunt personaliseren met onze professionele koplamp tinten services.
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
                alt="Onderhoud van Getinte Koplampen"
                width={600}
                height={400}
                className="rounded-lg shadow-lg hover:scale-y-100 animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font mb-8 text-left">Onderhoudstips voor Getinte Koplampen</h2>
              <ol className="list-decimal list-inside text-lg mb-6 text-gray-700">
                <li>
                  <strong>Regelmatig Reinigen:</strong> Reinig uw koplampen regelmatig om stof en vuil te verwijderen, wat de levensduur van de tintfolie verlengt.
                </li>
                <li>
                  <strong>Gebruik Zachte Borstels:</strong> Gebruik bij het schoonmaken altijd een zachte borstel of doek om de folie niet te beschadigen.
                </li>
                <li>
                  <strong>Vermijd Bijtende Reinigers:</strong> Gebruik geen agressieve chemicaliën of reinigingsmiddelen die de afwerking kunnen aantasten.
                </li>
              </ol>
              <p className="text-lg text-gray-700">
                Met deze tips blijft de tint van uw koplampen lang mooi en beschermd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16 text-white text-center animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-4xl font mb-6">Klaar om uw koplampen te transformeren?</h2>
          <p className="text-lg mb-8">
            Vraag vandaag nog een offerte aan en ontdek wat Wrapmaster voor u kan betekenen met koplamp tinten services.
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
