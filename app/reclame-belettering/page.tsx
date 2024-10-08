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

export default function ReclameBeletteringDiensten() {
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

      {/* Overzicht van Reclame Belettering */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8">Waarom kiezen voor Reclame Belettering?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Reclame Belettering is een effectieve manier om uw bedrijf op te laten vallen. Het personaliseren van uw voertuigen of bedrijfspand met opvallende belettering verhoogt de zichtbaarheid en biedt een professionele uitstraling aan uw merk.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-red-600">1500+</p>
              <p className="text-lg">Voertuigen Geletterd</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">25+</p>
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

      {/* Wat is Reclame Belettering? */}
      <section id="wat-is-reclame-belettering" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Reclame Belettering"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8 text-left">
                Reclame Belettering: Wat is het precies?
              </h2>
              <p className="text-lg mb-4 text-gray-700">
                Reclame Belettering houdt in dat teksten, logo's en afbeeldingen op voertuigen of gebouwen worden aangebracht met behulp van hoogwaardige folie. Het biedt een betaalbare en efficiënte manier om uw bedrijf te promoten en uw merk te versterken.
              </p>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>Professionele uitstraling voor uw voertuigen of bedrijfspand</li>
                <li>Bescherming van de originele oppervlakken</li>
                <li>Diverse afwerkingen en kleuren beschikbaar</li>
                <li>Niet-permanente oplossing; eenvoudig aan te passen of te verwijderen</li>
              </ul>
              <p className="text-lg font-semibold">
                Met reclame belettering kunt u de zichtbaarheid van uw bedrijf vergroten op een flexibele en kosteneffectieve manier.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font-bold hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe lang duurt Reclame Belettering? */}
      <section id="hoelang-duurt-reclame-belettering" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-8 text-left">Hoe lang duurt het Reclame Belettering?</h2>
              <p className="text-lg mb-4 text-gray-700">
                De tijdsduur van reclame belettering hangt af van de grootte en complexiteit van het project. Een standaard bedrijfsvoertuig kan vaak binnen 1 tot 2 dagen volledig worden geletterd.
              </p>
              <h4 className="text-2xl font-bold mb-4">Standaard Voertuig Belettering</h4>
              <p className="text-lg mb-6 text-gray-700">
                Voor een standaard voertuig met eenvoudige belettering kan het proces meestal binnen 1 dag worden afgerond.
              </p>
              <p className="text-lg font-semibold">
                Reclame belettering is een efficiënte manier om uw bedrijf snel op de weg te krijgen.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font-bold hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Reclame Belettering"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wat kost Reclame Belettering? */}
      <section id="kosten-reclame-belettering" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat kost Reclame Belettering?</h2>
          <p className="text-lg mb-6 text-gray-700 text-center">
            De kosten van reclame belettering zijn afhankelijk van diverse factoren zoals het type voertuig, de grootte van de belettering en het gebruikte materiaal.
          </p>
          <ul className="list-disc list-inside text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
            <li>
              <strong>Type Voertuig of Gebouw:</strong> Grotere voertuigen of gebouwen vereisen meer materiaal en arbeid.
            </li>
            <li>
              <strong>Complexiteit:</strong> Ontwerpen met meer details of kleurverlopen kunnen de kosten verhogen.
            </li>
            <li>
              <strong>Type Folie:</strong> Speciale folies zoals reflecterende of metallic folies zijn duurder dan standaard folies.
            </li>
            <li>
              <strong>Aanvullende Opties:</strong> Extra diensten zoals speciale snijpatronen of full-wrap designs kunnen de kosten verhogen.
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
            Bij Wrapmaster bieden we uitgebreide garanties en kwaliteitsservices voor uw reclame belettering.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Garantie op Belettering</h3>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>Voertuigen tot 3 jaar oud: 3 jaar garantie op de montage van de folie.</li>
                <li>Voertuigen ouder dan 3 jaar: 1 jaar garantie op de montage.</li>
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

      {/* Voordelen van Reclame Belettering */}
      <section id="voordelen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8 text-center">De Voordelen van Reclame Belettering</h2>
          <div className="flex flex-col items-center gap-8">
            <ul className="list-none text-lg mb-6 text-gray-700 text-center">
              <li>
                <strong>Professionele uitstraling:</strong> Uw voertuigen of pand geven een verzorgde en professionele indruk.
              </li>
              <li>
                <strong>Bescherming:</strong> Beschermt de originele lak of gevel tegen krassen en schade.
              </li>
              <li>
                <strong>Verhoogde zichtbaarheid:</strong> Uw merk is onderweg of op locatie voortdurend zichtbaar.
              </li>
              <li>
                <strong>Duurzaam:</strong> Folie is bestand tegen weersomstandigheden en UV-straling.
              </li>
              <li>
                <strong>Niet permanent:</strong> Eenvoudig aan te passen of te verwijderen zonder beschadiging.
              </li>
            </ul>
            <Image
              src="/images/brabus1.png"
              alt="Voordelen van Reclame Belettering"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg animate-fadeInUp"
            />
            <p className="mt-4 text-center text-gray-700">
              Ontdek hoe u uw merk kunt versterken met onze professionele reclame belettering.
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
                alt="Onderhoud van Reclame Belettering"
                width={600}
                height={400}
                className="rounded-lg shadow-lg hover:scale-y-100 animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8 text-left">Onderhoudstips voor Reclame Belettering</h2>
              <ol className="list-decimal list-inside text-lg mb-6 text-gray-700">
                <li>
                  <strong>Regelmatig Wassen:</strong> Houd uw voertuigen schoon om de belettering er fris uit te laten zien.
                </li>
                <li>
                  <strong>Kwalitatieve Wasstraat:</strong> Als u een wasstraat gebruikt, kies dan voor een met zachte borstels om schade te voorkomen.
                </li>
                <li>
                  <strong>Bescherming:</strong> Overweeg het gebruik van een wax of coating om de belettering te beschermen tegen weersinvloeden.
                </li>
              </ol>
              <p className="text-lg text-gray-700">
                Met deze tips blijft uw reclame belettering er als nieuw uitzien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16 text-white text-center animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Klaar om uw bedrijf op te laten vallen?</h2>
          <p className="text-lg mb-8">
            Vraag vandaag nog een offerte aan en ontdek wat Wrapmaster voor u kan betekenen met reclame belettering.
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
