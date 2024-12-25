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

export default function VelgenbeschermingDiensten() {
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

      {/* Overzicht van Velgenbescherming */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto animate-fadeInUp">
          <h2 className="text-3xl font mb-8">Waarom kiezen voor Velgenbescherming?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Velgenbescherming biedt uw velgen bescherming tegen schade door bijvoorbeeld stoepranden, steentjes en andere invloeden van buitenaf. Het verlengt de levensduur van uw velgen en behoudt hun oorspronkelijke uitstraling, terwijl uw auto er tegelijkertijd stijlvol uitziet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font text-red-600">1000+</p>
              <p className="text-lg">Velgen Beschermd</p>
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

      {/* Wat is Velgenbescherming? */}
      <section id="wat-is-velgenbescherming" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Velgenbescherming"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font mb-8 text-left">
                Velgenbescherming: Wat is het precies?
              </h2>
              <p className="text-lg mb-4 text-gray-700">
                Velgenbescherming bestaat uit het aanbrengen van een beschermende folie of coating op uw velgen. Deze beschermt de velgen tegen beschadigingen zoals krassen, stoeprandschade en roest, zonder de esthetiek van de velgen aan te tasten. U kunt kiezen uit transparante of gekleurde beschermfolies om de look van uw auto te behouden of verbeteren.
              </p>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>Bescherming tegen krassen en stoeprandschade</li>
                <li>Verhoogde duurzaamheid van uw velgen</li>
                <li>Keuze uit transparante en gekleurde folies</li>
                <li>Behoud van de originele uitstraling van uw velgen</li>
              </ul>
              <p className="text-lg font-semibold">
                Houd uw velgen in perfecte staat met professionele velgenbescherming.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe lang duurt Velgenbescherming? */}
      <section id="hoelang-duurt-velgenbescherming" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-3xl font mb-8 text-left">Hoe lang duurt het om velgenbescherming aan te brengen?</h2>
              <p className="text-lg mb-4 text-gray-700">
                Het aanbrengen van velgenbescherming is een snel proces dat meestal binnen enkele uren voltooid kan worden, afhankelijk van het type bescherming en het aantal velgen. 
              </p>
              <h4 className="text-2xl font mb-4">Standaard Velgenbescherming</h4>
              <p className="text-lg mb-6 text-gray-700">
                Een standaard installatie van transparante folie kan meestal binnen een halve dag worden uitgevoerd, terwijl meer complexe opties zoals gekleurde folies iets langer kunnen duren.
              </p>
              <p className="text-lg font-semibold">
                Velgenbescherming is een snelle en effectieve manier om uw velgen te beschermen en er tegelijk stijlvol uit te laten zien.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Velgenbescherming"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wat kost Velgenbescherming? */}
      <section id="kosten-velgenbescherming" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font mb-8 text-center">Wat kost velgenbescherming?</h2>
          <p className="text-lg mb-6 text-gray-700 text-center">
            De kosten van velgenbescherming hangen af van het type bescherming (folie of coating), de afwerking en het aantal velgen. 
          </p>
          <ul className="list-disc list-inside text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
            <li>
              <strong>Type Bescherming:</strong> Transparante of gekleurde folie, of keramische coating heeft invloed op de prijs.
            </li>
            <li>
              <strong>Aantal Velgen:</strong> De kosten stijgen met het aantal velgen dat beschermd moet worden.
            </li>
            <li>
              <strong>Afwerking:</strong> Speciale afwerkingen zoals matte of glanzende coating kunnen de kosten verhogen.
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
            Bij Wrapmaster bieden we uitgebreide garanties en kwaliteitsservices voor uw velgenbescherming.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Garantie op Velgenbescherming</h3>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>3 jaar garantie op de beschermfolie, inclusief bescherming tegen verkleuring en loslaten.</li>
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

      {/* Voordelen van Velgenbescherming */}
      <section id="voordelen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font mb-8 text-center">De Voordelen van Velgenbescherming</h2>
          <div className="flex flex-col items-center gap-8">
            <ul className="list-none text-lg mb-6 text-gray-700 text-center">
              <li>
                <strong>Duurzame bescherming:</strong> Beschermt uw velgen tegen krassen en stoeprandschade.
              </li>
              <li>
                <strong>Stijlvolle uitstraling:</strong> Transparante of gekleurde folies kunnen de uitstraling van uw auto verbeteren.
              </li>
              <li>
                <strong>Verhoogde waarde:</strong> Beschermde velgen behouden hun waarde beter en blijven langer in nieuwstaat.
              </li>
              <li>
                <strong>Niet permanent:</strong> Beschermfolie kan worden verwijderd of aangepast als u een andere look wilt.
              </li>
            </ul>
            <Image
              src="/images/brabus1.png"
              alt="Voordelen van Velgenbescherming"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg animate-fadeInUp"
            />
            <p className="mt-4 text-center text-gray-700">
              Ontdek hoe u uw auto kunt personaliseren en beschermen met onze professionele velgenbescherming services.
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
                alt="Onderhoud van Velgenbescherming"
                width={600}
                height={400}
                className="rounded-lg shadow-lg hover:scale-y-100 animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font mb-8 text-left">Onderhoudstips voor Velgenbescherming</h2>
              <ol className="list-decimal list-inside text-lg mb-6 text-gray-700">
                <li>
                  <strong>Regelmatig Reinigen:</strong> Houd uw velgen schoon door ze regelmatig af te spoelen met water en een zachte doek om remstof en vuil te verwijderen.
                </li>
                <li>
                  <strong>Vermijd Bijtende Reinigers:</strong> Gebruik geen agressieve chemicaliën die de beschermfolie kunnen aantasten.
                </li>
                <li>
                  <strong>Periodieke Controle:</strong> Controleer de bescherming regelmatig op schade en breng indien nodig een nieuwe laag aan.
                </li>
              </ol>
              <p className="text-lg text-gray-700">
                Met deze tips blijft uw velgenbescherming langdurig effectief en behouden uw velgen hun perfecte staat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16 text-white text-center animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-4xl font mb-6">Klaar om uw velgen te beschermen?</h2>
          <p className="text-lg mb-8">
            Vraag vandaag nog een offerte aan en ontdek wat Wrapmaster voor u kan betekenen met velgenbescherming.
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
