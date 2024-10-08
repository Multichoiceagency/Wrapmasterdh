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

export default function ScooterWrappenDiensten() {
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

      {/* Overzicht van Scooter Wrappen */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8">Waarom kiezen voor Scooter Wrappen?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Scooter Wrappen is een populaire manier om het uiterlijk van uw scooter volledig te personaliseren, zonder permanente veranderingen aan te brengen. Of u nu kiest voor een opvallende kleur, matte afwerking, of bescherming van de lak, scooter wrappen biedt eindeloze mogelijkheden.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-red-600">1000+</p>
              <p className="text-lg">Scooters Gewrapt</p>
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

      {/* Wat is Scooter Wrappen? */}
      <section id="wat-is-scooter-wrappen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Scooter Wrappen"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8 text-left">
                Scooter Wrappen: Wat is het precies?
              </h2>
              <p className="text-lg mb-4 text-gray-700">
                Scooter wrappen is een techniek waarbij een hoogwaardige folie over de buitenkant van de scooter wordt aangebracht. Dit geeft u de vrijheid om de look van uw scooter volledig naar eigen wens aan te passen. Of het nu gaat om bescherming of esthetiek, de mogelijkheden zijn eindeloos.
              </p>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>Keuze uit diverse kleuren en afwerkingen</li>
                <li>Bescherming van de originele lak tegen krassen en UV-straling</li>
                <li>Niet-permanente oplossing; de folie is eenvoudig te verwijderen</li>
                <li>Verhoogde restwaarde van uw scooter</li>
              </ul>
              <p className="text-lg font-semibold">
                Met scooter wrappen kunt u uw voertuig een unieke en persoonlijke uitstraling geven.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font-bold hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe lang duurt scooter wrappen? */}
      <section id="hoelang-duurt-scooter-wrappen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-8 text-left">Hoe lang duurt het scooter wrappen?</h2>
              <p className="text-lg mb-4 text-gray-700">
                Het wrappen van een scooter is een snel proces dat meestal binnen 1 tot 2 dagen voltooid kan worden, afhankelijk van de complexiteit van de wrap.
              </p>
              <h4 className="text-2xl font-bold mb-4">Standaard Scooter Wrappen</h4>
              <p className="text-lg mb-6 text-gray-700">
                Een standaard scooter wrap duurt gemiddeld 1 dag. Als er meer details nodig zijn, zoals het wrappen van extra onderdelen, kan dit iets langer duren.
              </p>
              <p className="text-lg font-semibold">
                Scooter wrappen is de perfecte manier om uw voertuig snel en efficiënt een nieuwe look te geven.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font-bold hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Scooter Wrappen"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wat kost scooter wrappen? */}
      <section id="kosten-scooter-wrappen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat kost scooter wrappen?</h2>
          <p className="text-lg mb-6 text-gray-700 text-center">
            De kosten van het wrappen van een scooter hangen af van verschillende factoren.
          </p>
          <ul className="list-disc list-inside text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
            <li>
              <strong>Type Scooter:</strong> Grotere scooters of scooters met meer details vereisen meer materiaal en tijd.
            </li>
            <li>
              <strong>Complexiteit:</strong> Scooters met ingewikkelde vormen of extra onderdelen kunnen meer werk vergen.
            </li>
            <li>
              <strong>Type Folie:</strong> Speciale folies zoals matte, metallic, of glanzende afwerkingen kunnen duurder zijn.
            </li>
            <li>
              <strong>Aanvullende Opties:</strong> Extra diensten zoals het wrappen van spiegels of andere onderdelen verhogen de kosten.
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
            Bij Wrapmaster bieden we uitgebreide garanties en kwaliteitsservices voor uw scooter wrap.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Garantie op Scooter Wrappen</h3>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>Scooters tot 3 jaar oud: 3 jaar garantie op de montage van de folie.</li>
                <li>Scooters ouder dan 3 jaar: 1 jaar garantie op de montage.</li>
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

      {/* Voordelen van Scooter Wrappen */}
      <section id="voordelen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8 text-center">De Voordelen van Scooter Wrappen</h2>
          <div className="flex flex-col items-center gap-8">
            <ul className="list-none text-lg mb-6 text-gray-700 text-center">
              <li>
                <strong>Eenvoudig te verwijderen:</strong> De wrap kan gemakkelijk worden verwijderd of vervangen.
              </li>
              <li>
                <strong>Bescherming:</strong> Beschermt de originele lak tegen krassen en schade.
              </li>
              <li>
                <strong>Geen verkleuring:</strong> Voorkomt verkleuring door UV-straling.
              </li>
              <li>
                <strong>Snelle transformatie:</strong> Verander de look van uw scooter in korte tijd.
              </li>
              <li>
                <strong>Unieke kleuren:</strong> Keuze uit verschillende kleuren en prints.
              </li>
              <li>
                <strong>Niet permanent:</strong> Anders dan spuiten, is scooter wrappen niet permanent en gemakkelijk te verwijderen.
              </li>
            </ul>
            <Image
              src="/images/brabus1.png"
              alt="Voordelen van Scooter Wrappen"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg animate-fadeInUp"
            />
            <p className="mt-4 text-center text-gray-700">
              Ontdek hoe u uw scooter kunt personaliseren met onze wrapservices.
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
                alt="Onderhoud van Gewrapte Scooter"
                width={600}
                height={400}
                className="rounded-lg shadow-lg hover:scale-y-100 animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8 text-left">Onderhoudstips voor Gewrapte Scooters</h2>
              <ol className="list-decimal list-inside text-lg mb-6 text-gray-700">
                <li>
                  <strong>Regelmatig Wassen:</strong> Was uw scooter minimaal twee keer per maand met de hand.
                </li>
                <li>
                  <strong>Kwalitatieve Wasstraat:</strong> Als u een wasstraat gebruikt, kies dan voor een met zachte borstels.
                </li>
                <li>
                  <strong>Keramische Coating:</strong> Bescherm uw wrap met een keramische coating voor langdurige glans en bescherming.
                </li>
              </ol>
              <p className="text-lg text-gray-700">
                Met deze tips blijft uw gewrapte scooter er als nieuw uitzien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16 text-white text-center animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Klaar om uw scooter te transformeren?</h2>
          <p className="text-lg mb-8">
            Vraag vandaag nog een offerte aan en ontdek wat Wrapmaster voor u kan betekenen.
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
