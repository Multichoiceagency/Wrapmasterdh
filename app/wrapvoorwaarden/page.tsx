'use client';

import Image from 'next/image';

export default function VeelgesteldeVragen() {
  return (
    <main className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 lg:px-16">
        <h1 className="text-4xl font-bold text-center mb-8">Veelgestelde Vragen (FAQ)</h1>

        {/* FAQ Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Algemene Vragen over Carwrappen</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Kan ik zelf mijn auto wrappen?</h3>
            <p className="text-lg text-gray-700">
              Nee, je kan je auto niet zelf wrappen omdat dit bepaalde vaardigheden vereist. Wij hebben jarenlange ervaring met het wrappen van voertuigen om een perfect resultaat te garanderen.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Hoelang gaat mijn carwrap mee?</h3>
            <p className="text-lg text-gray-700">
              Als je wrap op de juiste manier geplaatst en onderhouden is, zal die gegarandeerd 3 jaar of 50.000 km meegaan, wat er ook eerst komt. Binnen die periode is er ook garantie op verwijdering zonder schade.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Hoe maak ik mijn carwrap schoon?</h3>
            <p className="text-lg text-gray-700">
              Was de auto met de hand met een pH-neutrale zeep zonder wax. Of gebruik een wasstraat zonder borstels en zonder waxoptie. Droog de auto grondig af om vlekken te voorkomen.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Beschadigt de carwrap mijn autolak?</h3>
            <p className="text-lg text-gray-700">
              Wanneer de carwrap binnen de garantieperiode wordt verwijderd, is beschadiging zeer onwaarschijnlijk. In feite kan de lak levendiger overkomen doordat de wrap de originele lak beschermt tegen de elementen.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Zal de kleur van mijn geprinte carwrap er precies hetzelfde uitzien als op mijn beeldscherm?</h3>
            <p className="text-lg text-gray-700">
              In de meeste gevallen zul je geen verschil zien. Door variaties in monitorinstellingen kunnen we een exacte kleurweergave echter niet garanderen. Voor geprinte wraps raden we aan om een kleurreferentie aan te leveren.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Kan ik delen van mijn auto wrappen in plaats van de volledige auto?</h3>
            <p className="text-lg text-gray-700">
              Jazeker. Je kunt bijvoorbeeld het dak, de motorkap, zijspiegels of grille wrappen voor een unieke look, zonder de kosten van een volledige wrap.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Welke grafische mogelijkheden zijn er?</h3>
            <p className="text-lg text-gray-700">
              Je kunt elke tekst of elk ontwerp laten printen, of kiezen voor een effen gekleurde folie in een specifieke vorm. Onze partners van 3M helpen je om jouw unieke ontwerp te realiseren.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Hoe kan ik mijn auto wassen nadat de folie is aangebracht?</h3>
            <p className="text-lg text-gray-700">
              Je kunt je auto gewoon in een automatische wasstraat wassen of met de hand volgens de voorschriften van de folie. Vermijd de eerste week wassen om een goede hechting van de folie te garanderen.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6">Technische Vragen</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Kan de folie de lak van mijn auto beschadigen?</h3>
            <p className="text-lg text-gray-700">
              Carwrapping folies van merken zoals Avery Dennison en 3M zijn uitgebreid getest op compatibiliteit met autolak. Correct aangebrachte folie beschermt de lak juist tegen UV-stralen, vuil en mechanische invloeden.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Welke merken gebruiken jullie?</h3>
            <p className="text-lg text-gray-700">
              Wij gebruiken merken zoals 3M en Avery Dennison voor hun uitstekende duurzaamheid en kwaliteit.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Wie voert de carwrap uit en waar?</h3>
            <p className="text-lg text-gray-700">
              Wrapmaster verzorgt hoogwaardige wrapping en ons netwerk is verspreid over het hele land. Je kunt gemakkelijk een partner bij jou in de buurt vinden.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-red-600 text-white text-center py-8 mt-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Heb je nog vragen?</h2>
            <p className="text-lg mb-4">
              Neem contact met ons op of vraag vandaag nog een offerte aan. Wij helpen je graag verder met al je vragen over carwrapping.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Neem Contact Op
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
