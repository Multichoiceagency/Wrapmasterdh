/* eslint-disable react/no-unescaped-entities */
'use client';

import SwiperCore from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function AutoWrappenDiensten() {
  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <SwiperSlide>
          <div className="relative w-full h-[90vh] bg-black"> {/* Full height */}
            <video
              className="w-full h-[90vh] object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/video/carwrapping.mp4" // Ensure this video path is correct
            ></video>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font tracking-widest">
                AUTO WRAPPEN BIJ
              </h1>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 bg-black text-white font-semibold border border-white hover:bg-white hover:text-black transition-all">
                WRAPMASTER
              </button>
            </div>
          </div>
        </SwiperSlide>
            {/* Logo Section */}
            <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font mb-8">Wij gebruiken</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  gap-8 items-center">
            {/* 3M Logo */}
            <div className="flex justify-center">
              <Image
                src="/images/3m-wrap.png" // Replace with your actual image path
                alt="3M Logo"
                width={120}
                height={60}
                className="hover:scale-110 transform transition-transform duration-300"
              />
            </div>
            {/* Avery Dennison Logo */}
            <div className="flex justify-center">
              <Image
                src="/images/avery-logo.png" // Replace with your actual image path
                alt="Avery Dennison Logo"
                width={300}
                height={60}
                className="hover:scale-110 transform transition-transform duration-300"
              />
            </div>
            {/* Xpel Logo */}
            <div className="flex justify-center">
              <Image
                src="/images/xpel-logo.jpg" // Replace with your actual image path
                alt="Xpel Logo"
                width={300}
                height={60}
                className="hover:scale-110 transform transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Overzicht van Car Wrapping */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto animate-fadeInUp">
          <h2 className="text-3xl font mb-8">Waarom kiezen voor Car Wrapping?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Car wrapping biedt een unieke manier om de uitstraling van uw voertuig volledig te personaliseren, zonder permanente veranderingen aan te brengen aan de originele lak. Met hoogwaardige folie kunt u kiezen uit een breed scala aan kleuren en afwerkingen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font text-red-600">500+</p>
              <p className="text-lg">Auto's Gewrapt</p>
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

      {/* Wat is Auto Wrappen? */}
      <section id="wat-is-wrappen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Auto Wrappen"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font mb-8 text-left">
                Auto Wrappen: Wat is het precies?
              </h2>
              <p className="text-lg mb-4 text-gray-700">
                Auto wrappen is een moderne techniek waarbij een speciale, hoogwaardige folie nauwkeurig over de buitenkant van de auto wordt aangebracht. Dit geeft u de mogelijkheid om het uiterlijk van uw voertuig volledig aan te passen, zonder permanente wijzigingen aan de originele lak.
              </p>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>Keuze uit diverse kleuren en afwerkingen</li>
                <li>Bescherming van de originele lak tegen krassen en UV-straling</li>
                <li>Niet-permanente oplossing; de folie is eenvoudig te verwijderen</li>
                <li>Verhoogde restwaarde van uw auto</li>
              </ul>
              <p className="text-lg font-semibold">
                Met auto wrappen geeft u uw auto een unieke en persoonlijke uitstraling die volledig aan uw wensen voldoet.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe lang duurt het wrappen? */}
      <section id="hoelang-duurt-auto-wrappen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-3xl font mb-8 text-left">Hoe lang duurt het wrappen?</h2>
              <p className="text-lg mb-4 text-gray-700">
                Bij Wrapmaster begrijpen we dat u benieuwd bent naar de tijdsduur van het wrapproces. Dit kan variëren afhankelijk van uw specifieke wensen.
              </p>
              <h4 className="text-2xl font mb-4">Standaard Auto Wrappen</h4>
              <p className="text-lg mb-6 text-gray-700">
                Het wrappen van een standaard personenauto duurt gemiddeld 2 tot 3 dagen.
              </p>
              <h4 className="text-2xl font mb-4">Inclusief Deuren en Sponningen</h4>
              <p className="text-lg mb-6 text-gray-700">
                Als u ervoor kiest om ook de binnenkant van de deuren en sponningen te laten wrappen, duurt het proces ongeveer 4 extra dagen.
              </p>
              <p className="text-lg font-semibold">
                Met auto wrappen geeft u uw auto een unieke en persoonlijke uitstraling die volledig aan uw wensen voldoet.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3  w-56 bg-red-700 rounded-xl text-white font hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Auto Wrappen"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wat kost een auto wrappen? */}
      <section id="kosten-wrappen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font mb-8 text-center">Wat kost een auto wrappen?</h2>
          <p className="text-lg mb-6 text-gray-700 text-center">
            De kosten van het wrappen van een auto zijn afhankelijk van verschillende factoren.
          </p>
          <ul className="list-disc list-inside text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
            <li>
              <strong>Type Auto:</strong> Grotere voertuigen vereisen meer materiaal en arbeid.
            </li>
            <li>
              <strong>Complexiteit:</strong> Auto's met ingewikkelde vormen of details vereisen meer tijd en expertise.
            </li>
            <li>
              <strong>Type Folie:</strong> Speciale folies zoals carbon of metallic kunnen duurder zijn dan standaard folies.
            </li>
            <li>
              <strong>Aanvullende Opties:</strong> Extra services zoals chrome delete of het spuiten van remklauwen verhogen de kosten.
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
            Bij Wrapmaster bieden we uitgebreide garanties en kwaliteitsservices voor uw gewrapte auto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Garantie op Wrapping</h3>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>Auto's tot 3 jaar oud: 3 jaar garantie op de montage van de folie.</li>
                <li>Auto's ouder dan 3 jaar: 1 jaar garantie op de montage.</li>
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

      {/* Voordelen van Auto Wrappen */}
      <section id="voordelen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font mb-8 text-center">De Voordelen van Auto Wrappen</h2>
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
                <strong>Snelle transformatie:</strong> Verander de look van uw auto in korte tijd.
              </li>
              <li>
                <strong>Unieke kleuren:</strong> Keuze uit meer dan 500 verschillende kleuren en prints.
              </li>
              <li>
                <strong>Niet permanent:</strong> Anders dan spuiten, is wrappen niet permanent en gemakkelijk te verwijderen.
              </li>
            </ul>
            <Image
              src="/images/brabus1.png"
              alt="Voordelen van Wrappen"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg animate-fadeInUp"
            />
            <p className="mt-4 text-center text-gray-700">
              Ontdek hoe u uw auto kunt personaliseren met onze professionele wrapservices.
            </p>
          </div>
        </div>
      </section>

      {/* Onderhoudstips */}
      <section id="onderhoud" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <div>
              <Image
                src="/images/poetsen-glascoating.jpeg"
                alt="Onderhoud van Gewrapte Auto"
                width={600}
                height={400}
                className="rounded-lg shadow-lg hover:scale-y-100 animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font mb-8 text-left">Onderhoudstips voor Gewrapte Auto's</h2>
              <ol className="list-decimal list-inside text-lg mb-6 text-gray-700">
                <li>
                  <strong>Regelmatig Wassen:</strong> Was uw auto minimaal twee keer per maand met de hand.
                </li>
                <li>
                  <strong>Kwalitatieve Wasstraat:</strong> Als u een wasstraat gebruikt, kies dan voor een met zachte borstels.
                </li>
                <li>
                  <strong>Keramische Coating:</strong> Bescherm uw wrap met een keramische coating voor langdurige glans en bescherming.
                </li>
              </ol>
              <p className="text-lg text-gray-700">
                Met deze tips blijft uw gewrapte auto er als nieuw uitzien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16 text-white text-center animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-4xl font mb-6">Klaar om uw auto te transformeren?</h2>
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
