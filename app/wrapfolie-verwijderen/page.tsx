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

export default function WrapfolieVerwijderenDiensten() {
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
                src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/images/3m-wrap.png"
                alt="3M Logo"
                width={120}
                height={60}
                className="hover:scale-110 transform transition-transform duration-300"
              />
            </div>
            {/* Avery Dennison Logo */}
            <div className="flex justify-center">
              <Image
                src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/images/avery-logo.png"
                alt="Avery Dennison Logo"
                width={300}
                height={60}
                className="hover:scale-110 transform transition-transform duration-300"
              />
            </div>
            {/* Xpel Logo */}
            <div className="flex justify-center">
              <Image
                src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/images/xpel-logo.jpg"
                alt="Xpel Logo"
                width={300}
                height={60}
                className="hover:scale-110 transform transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overzicht van Wrapfolie Verwijderen */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto animate-fadeInUp">
          <h2 className="text-3xl font mb-8">Waarom kiezen voor Wrapfolie Verwijderen?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Het verwijderen van wrapfolie is een delicaat proces dat zorgvuldig moet worden uitgevoerd om schade aan de originele lak van uw voertuig te voorkomen. Met professionele technieken en tools zorgen wij ervoor dat de folie snel en effectief wordt verwijderd, zonder lijmresten of beschadigingen achter te laten.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font text-red-600">1000+</p>
              <p className="text-lg">Voertuigen Ontwrapt</p>
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
              <p className="text-4xl font text-red-600">Schadevrij</p>
              <p className="text-lg">Verwijdering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is Wrapfolie Verwijderen? */}
      <section id="wat-is-wrapfolie-verwijderen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Wrapfolie Verwijderen"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font mb-8 text-left">
                Wrapfolie Verwijderen: Wat is het precies?
              </h2>
              <p className="text-lg mb-4 text-gray-700">
                Het verwijderen van wrapfolie vereist speciale technieken en gereedschappen om ervoor te zorgen dat de originele lak van de auto onbeschadigd blijft. Dit proces omvat het voorzichtig losmaken van de folie en het schoonmaken van eventuele lijmresten om de auto in zijn oorspronkelijke staat te herstellen. 
              </p>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>Snelle en veilige verwijdering van wrapfolie</li>
                <li>Schadevrij proces met behoud van originele lak</li>
                <li>Geen lijmresten of verkleuring achtergelaten</li>
                <li>Geschikt voor auto's, motoren en boten</li>
              </ul>
              <p className="text-lg font-semibold">
                Herstel de originele look van uw voertuig zonder risico op schade met professionele wrapfolie verwijdering.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe lang duurt Wrapfolie Verwijderen? */}
      <section id="hoelang-duurt-wrapfolie-verwijderen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-3xl font mb-8 text-left">Hoe lang duurt het verwijderen van wrapfolie?</h2>
              <p className="text-lg mb-4 text-gray-700">
                Het verwijderen van wrapfolie kan variëren afhankelijk van het voertuig en de staat van de folie. Een standaard verwijdering duurt meestal 1 tot 2 dagen, afhankelijk van de complexiteit en grootte van het voertuig.
              </p>
              <h4 className="text-2xl font mb-4">Standaard Verwijdering</h4>
              <p className="text-lg mb-6 text-gray-700">
                Een basisverwijdering van wrapfolie kan vaak binnen één dag worden afgerond, terwijl oudere of beschadigde folies meer tijd kunnen vergen vanwege de extra zorg die nodig is om de lijmresten volledig te verwijderen.
              </p>
              <p className="text-lg font-semibold">
                Onze professionele verwijderingsservice zorgt ervoor dat uw voertuig snel wordt ontwrapt, zonder beschadiging van de originele lak.
              </p>
              <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 w-56 bg-red-700 rounded-xl text-white font hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
                BEKIJK PORTFOLIO
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/images/audi-s3-hexis-blue.jpeg"
                alt="Voorbeeld van Wrapfolie Verwijderen"
                width={800}
                height={600}
                className="rounded-lg shadow-lg animate-fadeInUp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wat kost Wrapfolie Verwijderen? */}
      <section id="kosten-wrapfolie-verwijderen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font mb-8 text-center">Wat kost wrapfolie verwijderen?</h2>
          <p className="text-lg mb-6 text-gray-700 text-center">
            De kosten voor het verwijderen van wrapfolie zijn afhankelijk van het type voertuig, de grootte en de staat van de folie. Oudere of beschadigde folie kan meer tijd kosten om te verwijderen, wat de kosten kan verhogen.
          </p>
          <ul className="list-disc list-inside text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
            <li>
              <strong>Type Voertuig:</strong> Grotere voertuigen of voertuigen met complexe vormen kunnen de kosten verhogen.
            </li>
            <li>
              <strong>Staat van de Folie:</strong> Oude of beschadigde folie kan meer werk vergen om te verwijderen.
            </li>
            <li>
              <strong>Verwijderingsopties:</strong> Eventuele aanvullende schoonmaakdiensten zoals lijmrestenverwijdering of polijsten kunnen de kosten verhogen.
            </li>
          </ul>
          <div className="text-center">
            <button className="mt-4 px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-3 bg-red-700 rounded-xl text-white font hover:font-regular border-white hover:bg-black hover:text-white transition-all animate-fadeInUp">
              OFFERTE AANVRAGEN
            </button>
          </div>
          <p className="text-lg text-gray-700 text-center">
            Neem contact met ons op voor een op maat gemaakte offerte voor het veilig verwijderen van wrapfolie.
          </p>
        </div>
      </section>

      {/* Garanties */}
      <section id="garanties" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font mb-8 text-center">Onze Garanties</h2>
          <p className="text-lg mb-6 text-gray-700 text-center">
            Bij Wrapmaster bieden we uitgebreide garanties en kwaliteitsservices voor het veilig verwijderen van wrapfolie.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Garantie op Schadevrij Verwijderen</h3>
              <ul className="list-disc list-inside text-lg mb-6 text-gray-700">
                <li>3 jaar garantie op het verwijderen van de folie zonder schade aan de originele lak.</li>
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

      {/* Voordelen van Wrapfolie Verwijderen */}
      <section id="voordelen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <h2 className="text-3xl font mb-8 text-center">De Voordelen van Wrapfolie Verwijderen</h2>
          <div className="flex flex-col items-center gap-8">
            <ul className="list-none text-lg mb-6 text-gray-700 text-center">
              <li>
                <strong>Schadevrij:</strong> Wrapfolie wordt zonder schade of lijmresten verwijderd.
              </li>
              <li>
                <strong>Bescherming van de lak:</strong> De originele lak van uw voertuig blijft intact en wordt niet aangetast.
              </li>
              <li>
                <strong>Volledige reiniging:</strong> Wij zorgen ervoor dat de auto na verwijdering vrij is van resten en vlekken.
              </li>
              <li>
                <strong>Hernieuwde uitstraling:</strong> Uw voertuig krijgt zijn originele uitstraling terug, of u kunt het opnieuw laten wrappen.
              </li>
            </ul>
            <Image
              src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/images/brabus1.png"
              alt="Voordelen van Wrapfolie Verwijderen"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg animate-fadeInUp"
            />
            <p className="mt-4 text-center text-gray-700">
              Ontdek hoe wij u kunnen helpen met het veilig en effectief verwijderen van wrapfolie.
            </p>
          </div>
        </div>
      </section>

      {/* Onderhoudstips na Verwijdering */}
      <section id="onderhoud" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16 animate-fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Image
                src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/images/poetsen-glascoating.jpeg"
                alt="Onderhoud na Verwijdering van Wrapfolie"
                width={600}
                height={400}
                className="rounded-lg shadow-lg hover:scale-y-100 animate-fadeInUp"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font mb-8 text-left">Onderhoudstips na Verwijdering van Wrapfolie</h2>
              <ol className="list-decimal list-inside text-lg mb-6 text-gray-700">
                <li>
                  <strong>Grondige Reiniging:</strong> Laat uw voertuig grondig reinigen en polijsten na de verwijdering om het oppervlak in optimale conditie te houden.
                </li>
                <li>
                  <strong>Bescherming aanbrengen:</strong> Overweeg een wax of keramische coating om de originele lak van uw voertuig te beschermen.
                </li>
                <li>
                  <strong>Periodiek Onderhoud:</strong> Houd de lak in goede staat door regelmatig te poetsen en schoon te houden.
                </li>
              </ol>
              <p className="text-lg text-gray-700">
                Met deze tips blijft uw voertuig in topconditie na het verwijderen van wrapfolie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16 text-white text-center animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-4xl font mb-6">Klaar om de wrapfolie te verwijderen?</h2>
          <p className="text-lg mb-8">
            Vraag vandaag nog een offerte aan en ontdek hoe Wrapmaster u kan helpen met het veilig verwijderen van wrapfolie.
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
