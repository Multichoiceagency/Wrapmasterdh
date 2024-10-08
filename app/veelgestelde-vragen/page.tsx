'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from "next/link";

export default function VeelgesteldeVragen() {
  return (
    <main className="bg-black py-16">
      <div className="container mx-auto px-4 lg:px-16 pt-10">
        <h1 className="text-4xl font-bold text-center mb-8 bg-white px-5 py-6 rounded-xl">Veelgestelde Vragen (FAQ)</h1>

        {/* Accordion Section */}
        <Accordion type="single" collapsible className="bg-white p-8 rounded-lg shadow-lg space-y-4">
          
          {/* Auto Wrappen */}
          <AccordionItem value="auto-wrappen">
            <AccordionTrigger className="text-2xl font-bold">Auto Wrappen</AccordionTrigger>
            <AccordionContent>
              <h3 className="text-xl font-bold mb-4">Wat is auto wrappen precies?</h3>
              <p className="text-lg text-gray-700 mb-4">Auto wrappen is het proces waarbij een speciale folie wordt aangebracht op het exterieur van een voertuig om de kleur of afwerking aan te passen zonder de originele lak te veranderen.</p>

              <h3 className="text-xl font-bold mb-4">Wat zijn de voordelen van auto wrappen?</h3>
              <p className="text-lg text-gray-700 mb-4">Auto wrappen biedt voordelen zoals bescherming van de originele lak, een unieke uitstraling, en de mogelijkheid om de kleur van je auto aan te passen zonder permanente veranderingen.</p>

              <h3 className="text-xl font-bold mb-4">Hoe lang gaat een auto wrap mee?</h3>
              <p className="text-lg text-gray-700 mb-4">Een auto wrap gaat doorgaans 3 tot 5 jaar mee, afhankelijk van de kwaliteit van de wrap en hoe goed deze wordt onderhouden.</p>

              <h3 className="text-xl font-bold mb-4">Kan een auto wrap worden verwijderd?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, een auto wrap kan worden verwijderd zonder de originele lak te beschadigen, mits de wrap correct is aangebracht en binnen de aanbevolen tijd wordt verwijderd.</p>

              <h3 className="text-xl font-bold mb-4">Beschermt auto wrappen de originele lak van mijn voertuig?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, een auto wrap beschermt de originele lak tegen krassen, steenslag, en UV-schade, waardoor de lak in betere staat blijft.</p>

              <h3 className="text-xl font-bold mb-4">Hoe lang duurt het om een auto te wrappen?</h3>
              <p className="text-lg text-gray-700 mb-4">Het wrappen van een auto duurt gemiddeld 2 tot 3 dagen, afhankelijk van de grootte en complexiteit van het voertuig.</p>

              <h3 className="text-xl font-bold mb-4">Kan ik kiezen uit verschillende kleuren voor een auto wrap?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, je kunt kiezen uit een breed scala aan kleuren en afwerkingen zoals glans, mat, metallic of parelmoer.</p>

              <h3 className="text-xl font-bold mb-4">Is een matte of glanzende afwerking beter voor een auto wrap?</h3>
              <p className="text-lg text-gray-700 mb-4">De keuze tussen mat en glans hangt af van persoonlijke voorkeur en de gewenste uitstraling van je auto. Beide afwerkingen bieden dezelfde bescherming.</p>

              <h3 className="text-xl font-bold mb-4">Wat zijn de kosten voor het wrappen van een auto?</h3>
              <p className="text-lg text-gray-700 mb-4">De kosten voor auto wrappen variëren afhankelijk van het type folie en de grootte van het voertuig, maar liggen gemiddeld tussen de €1500 en €3500.</p>

              <h3 className="text-xl font-bold mb-4">Hoe onderhoud ik mijn auto wrap?</h3>
              <p className="text-lg text-gray-700 mb-4">Was je auto wrap met de hand of gebruik een borstelvrije wasstraat. Vermijd agressieve chemicaliën en gebruik een zachte doek om te drogen.</p>

              <h3 className="text-xl font-bold mb-4">Kan ik mijn auto door de wasstraat laten gaan met een wrap?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, je kunt je auto door een borstelvrije wasstraat laten gaan. Borstelwasstraten kunnen de folie beschadigen, dus deze worden niet aanbevolen.</p>

              <h3 className="text-xl font-bold mb-4">Verkleurt een auto wrap door de zon?</h3>
              <p className="text-lg text-gray-700 mb-4">Een hoogwaardige wrap zal niet snel verkleuren door de zon, maar langdurige blootstelling aan UV-straling kan uiteindelijk lichte verkleuring veroorzaken.</p>

              <h3 className="text-xl font-bold mb-4">Hoe vaak moet een auto wrap worden vervangen?</h3>
              <p className="text-lg text-gray-700 mb-4">Een auto wrap moet elke 3 tot 5 jaar worden vervangen, afhankelijk van de blootstelling aan de elementen en het onderhoud.</p>

              <h3 className="text-xl font-bold mb-4">Is auto wrappen duurder dan overspuiten?</h3>
              <p className="text-lg text-gray-700 mb-4">Auto wrappen is meestal goedkoper dan overspuiten, afhankelijk van het type wrap en de omvang van de klus. Bovendien is wrappen reversibel, wat een extra voordeel is.</p>

              <h3 className="text-xl font-bold mb-4">Kan ik een deel van mijn auto laten wrappen, zoals de motorkap?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, je kunt ervoor kiezen om alleen bepaalde delen van je auto te laten wrappen, zoals de motorkap, het dak of de spiegels.</p>

              <h3 className="text-xl font-bold mb-4">Wat gebeurt er als de auto wrap beschadigd raakt?</h3>
              <p className="text-lg text-gray-700 mb-4">Als je wrap beschadigd raakt, kan een deel van de folie worden vervangen zonder dat je de hele wrap hoeft te verwijderen. Dit maakt reparaties eenvoudig en betaalbaar.</p>

              <h3 className="text-xl font-bold mb-4">Kan ik mijn auto zelf wrappen of moet dit professioneel worden gedaan?</h3>
              <p className="text-lg text-gray-700 mb-4">Hoewel het mogelijk is om zelf een auto te wrappen, wordt het sterk aanbevolen om een professional in te schakelen. Auto wrappen vereist precisie en ervaring voor een perfect resultaat.</p>

              <h3 className="text-xl font-bold mb-4">Hoe lang duurt het om een auto wrap te verwijderen?</h3>
              <p className="text-lg text-gray-700 mb-4">Het verwijderen van een auto wrap duurt meestal 1 tot 2 dagen, afhankelijk van de grootte van het voertuig en de staat van de wrap.</p>

              <h3 className="text-xl font-bold mb-4">Welke delen van mijn auto kan ik laten wrappen?</h3>
              <p className="text-lg text-gray-700">Je kunt bijna elk deel van je auto laten wrappen, waaronder de motorkap, het dak, de spiegels, de deuren, en zelfs de ramen met speciale raamfolie.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Detail Wrappen */}
          <AccordionItem value="detail-wrappen">
            <AccordionTrigger className="text-2xl font-bold">Detail Wrappen</AccordionTrigger>
            <AccordionContent>
              <h3 className="text-xl font-bold mb-4">Wat is detail wrappen?</h3>
              <p className="text-lg text-gray-700 mb-4">Detail wrappen houdt in dat specifieke delen van je auto, zoals het dak, de spiegels of de motorkap, worden gewrapt om een unieke look te creëren.</p>

              <h3 className="text-xl font-bold mb-4">Wat zijn de voordelen van detail wrappen in vergelijking met volledige wraps?</h3>
              <p className="text-lg text-gray-700 mb-4">Detail wrappen is een kosteneffectieve manier om je auto te personaliseren zonder de volledige auto te wrappen. Het biedt subtiele, stijlvolle aanpassingen.</p>

              <h3 className="text-xl font-bold mb-4">Kan ik alleen mijn spiegels laten wrappen?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, je kunt ervoor kiezen om alleen bepaalde onderdelen zoals je spiegels te laten wrappen, voor een subtiele maar opvallende aanpassing.</p>

              <h3 className="text-xl font-bold mb-4">Wat zijn populaire delen van de auto om te detail wrappen?</h3>
              <p className="text-lg text-gray-700 mb-4">Populaire onderdelen voor detail wrappen zijn het dak, de zijspiegels, de motorkap en de grille. Deze onderdelen geven je auto een opvallende en unieke look.</p>

              <h3 className="text-xl font-bold mb-4">Hoe lang gaat een detail wrap mee?</h3>
              <p className="text-lg text-gray-700 mb-4">Een detail wrap gaat doorgaans net zo lang mee als een volledige wrap, namelijk 3 tot 5 jaar, afhankelijk van het onderhoud en de blootstelling aan de elementen.</p>

              <h3 className="text-xl font-bold mb-4">Kan ik verschillende kleuren combineren in een detail wrap?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, je kunt verschillende kleuren en afwerkingen combineren om een echt unieke look voor je voertuig te creëren.</p>

              <h3 className="text-xl font-bold mb-4">Hoe lang duurt het om een detail wrap aan te brengen?</h3>
              <p className="text-lg text-gray-700 mb-4">Het aanbrengen van een detail wrap duurt meestal 1 tot 2 dagen, afhankelijk van het aantal onderdelen dat wordt gewrapt en de complexiteit van de klus.</p>

              <h3 className="text-xl font-bold mb-4">Beschermt een detail wrap ook de lak van mijn auto?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, net als een volledige wrap beschermt een detail wrap de onderliggende lak tegen krassen, steenslag en UV-straling.</p>

              <h3 className="text-xl font-bold mb-4">Zijn er speciale onderhoudstips voor detail wraps?</h3>
              <p className="text-lg text-gray-700 mb-4">Je kunt je detail wrap onderhouden op dezelfde manier als een volledige wrap. Vermijd agressieve schoonmaakmiddelen en gebruik een zachte doek om krassen te voorkomen.</p>

              <h3 className="text-xl font-bold mb-4">Hoeveel kost het om detail wrapping toe te passen op mijn auto?</h3>
              <p className="text-lg text-gray-700">De kosten voor detail wrapping variëren afhankelijk van de grootte en het aantal onderdelen dat je wilt laten wrappen, maar de prijs ligt meestal tussen €200 en €1500.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Chrome Delete */}
          <AccordionItem value="chrome-delete">
            <AccordionTrigger className="text-2xl font-bold">Chrome Delete</AccordionTrigger>
            <AccordionContent>
              <h3 className="text-xl font-bold mb-4">Wat is Chrome Delete?</h3>
              <p className="text-lg text-gray-700 mb-4">Chrome Delete verwijdert of bedekt de chromen onderdelen van je auto, zoals raamomlijstingen en grille, met een matte of glanzende folie voor een strakkere uitstraling.</p>

              <h3 className="text-xl font-bold mb-4">Waarom zou ik kiezen voor Chrome Delete?</h3>
              <p className="text-lg text-gray-700 mb-4">Chrome Delete biedt een strakke, moderne look en helpt om het chroom te bedekken of te verwijderen, wat vaak een voorkeur is voor sportieve of luxe auto's.</p>

              <h3 className="text-xl font-bold mb-4">Welke delen van de auto kunnen worden behandeld met Chrome Delete?</h3>
              <p className="text-lg text-gray-700 mb-4">Chrome Delete kan worden toegepast op delen zoals raamomlijstingen, deurklinken, grilles en zelfs de spiegels van je auto.</p>

              <h3 className="text-xl font-bold mb-4">Is Chrome Delete permanent?</h3>
              <p className="text-lg text-gray-700 mb-4">Nee, Chrome Delete is niet permanent. Het kan op elk moment worden verwijderd zonder schade aan te brengen aan de onderliggende onderdelen.</p>

              <h3 className="text-xl font-bold mb-4">Beschermt Chrome Delete mijn auto tegen roest?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, door het chroom te bedekken met folie, beschermt Chrome Delete de onderliggende delen tegen roest en andere vormen van corrosie.</p>

              <h3 className="text-xl font-bold mb-4">Kan Chrome Delete worden verwijderd zonder schade aan te richten?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, Chrome Delete kan veilig worden verwijderd zonder schade aan de auto aan te richten, zolang de folie correct is aangebracht en onderhouden.</p>

              <h3 className="text-xl font-bold mb-4">Welke kleuren zijn beschikbaar voor Chrome Delete?</h3>
              <p className="text-lg text-gray-700 mb-4">Chrome Delete is meestal beschikbaar in matte of glanzende zwarte afwerkingen, maar andere kleuren zijn ook mogelijk, afhankelijk van je voorkeur.</p>

              <h3 className="text-xl font-bold mb-4">Hoe lang duurt het om Chrome Delete toe te passen?</h3>
              <p className="text-lg text-gray-700 mb-4">Het aanbrengen van Chrome Delete op een auto duurt meestal 1 tot 2 dagen, afhankelijk van het aantal onderdelen dat wordt behandeld.</p>

              <h3 className="text-xl font-bold mb-4">Heeft Chrome Delete invloed op de garantie van mijn auto?</h3>
              <p className="text-lg text-gray-700">Chrome Delete heeft meestal geen invloed op de garantie van je auto, omdat het een omkeerbaar proces is dat geen permanente veranderingen aanbrengt.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Reclame Belettering */}
          <AccordionItem value="reclame-belettering">
            <AccordionTrigger className="text-2xl font-bold">Reclame Belettering</AccordionTrigger>
            <AccordionContent>
              <h3 className="text-xl font-bold mb-4">Wat is reclame belettering?</h3>
              <p className="text-lg text-gray-700 mb-4">Reclame belettering is een manier om je bedrijfsinformatie, zoals logo en contactgegevens, zichtbaar te maken op voertuigen, wat een effectieve manier van mobiele reclame biedt.</p>

              <h3 className="text-xl font-bold mb-4">Kan reclame belettering op elk voertuig worden aangebracht?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, reclame belettering kan worden aangebracht op vrijwel elk type voertuig, van auto's tot vrachtwagens en zelfs boten.</p>

              <h3 className="text-xl font-bold mb-4">Wat zijn de voordelen van reclame belettering voor mijn bedrijf?</h3>
              <p className="text-lg text-gray-700 mb-4">Reclame belettering biedt een effectieve manier om je bedrijf op de weg zichtbaar te maken, waardoor je een groter bereik hebt en constant wordt gepromoot.</p>

              <h3 className="text-xl font-bold mb-4">Is reclame belettering waterbestendig?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, reclame belettering is meestal waterbestendig en bestand tegen weersomstandigheden zoals regen, sneeuw en UV-straling.</p>

              <h3 className="text-xl font-bold mb-4">Hoe lang blijft reclame belettering op een voertuig zitten?</h3>
              <p className="text-lg text-gray-700 mb-4">Reclame belettering kan 5 tot 7 jaar meegaan, afhankelijk van de kwaliteit van de folie en de blootstelling aan de elementen.</p>

              <h3 className="text-xl font-bold mb-4">Kan ik elk ontwerp laten printen als reclame belettering?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, je kunt vrijwel elk ontwerp laten printen, van eenvoudige logo's en teksten tot complexe graphics en afbeeldingen.</p>

              <h3 className="text-xl font-bold mb-4">Wat kost reclame belettering voor een voertuig?</h3>
              <p className="text-lg text-gray-700 mb-4">De kosten voor reclame belettering variëren afhankelijk van de grootte van het voertuig en het ontwerp, maar liggen meestal tussen de €500 en €2000.</p>

              <h3 className="text-xl font-bold mb-4">Hoe lang duurt het om reclame belettering aan te brengen?</h3>
              <p className="text-lg text-gray-700 mb-4">Het aanbrengen van reclame belettering duurt meestal 1 tot 2 dagen, afhankelijk van de grootte en complexiteit van het ontwerp.</p>

              <h3 className="text-xl font-bold mb-4">Kan reclame belettering ook op boten worden aangebracht?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, reclame belettering kan ook op boten en andere waterbestendige oppervlakken worden aangebracht.</p>

              <h3 className="text-xl font-bold mb-4">Hoe onderhoud ik mijn voertuig met reclame belettering?</h3>
              <p className="text-lg text-gray-700">Was je voertuig met reclame belettering met de hand of gebruik een borstelvrije wasstraat. Vermijd agressieve chemicaliën die de folie kunnen beschadigen.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Scooter Wrappen */}
          <AccordionItem value="scooter-wrappen">
            <AccordionTrigger className="text-2xl font-bold">Scooter Wrappen</AccordionTrigger>
            <AccordionContent>
              <h3 className="text-xl font-bold mb-4">Kan ik mijn scooter laten wrappen?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, scooters kunnen ook gewrapt worden. Het proces is vergelijkbaar met auto wrappen, maar vereist meer precisie vanwege de kleinere oppervlakken.</p>

              <h3 className="text-xl font-bold mb-4">Wat zijn de voordelen van scooter wrappen?</h3>
              <p className="text-lg text-gray-700 mb-4">Scooter wrappen biedt bescherming tegen krassen en UV-straling, en geeft je scooter een unieke, persoonlijke uitstraling.</p>

              <h3 className="text-xl font-bold mb-4">Beschermt scooter wrappen mijn scooter tegen krassen?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, een wrap beschermt de originele lak van je scooter tegen krassen, vuil en steenslag.</p>

              <h3 className="text-xl font-bold mb-4">Kan ik mijn scooter in verschillende kleuren laten wrappen?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, je kunt je scooter in verschillende kleuren en afwerkingen laten wrappen, van glanzend en mat tot metallic of speciale ontwerpen.</p>

              <h3 className="text-xl font-bold mb-4">Hoeveel kost het om een scooter te laten wrappen?</h3>
              <p className="text-lg text-gray-700 mb-4">De kosten voor het wrappen van een scooter variëren, maar liggen meestal tussen de €300 en €800, afhankelijk van de grootte en het gekozen ontwerp.</p>

              <h3 className="text-xl font-bold mb-4">Hoe lang gaat een scooter wrap mee?</h3>
              <p className="text-lg text-gray-700 mb-4">Een scooterwrap kan 3 tot 5 jaar meegaan, afhankelijk van hoe goed deze wordt onderhouden en de blootstelling aan weersomstandigheden.</p>

              <h3 className="text-xl font-bold mb-4">Kan ik mijn scooter door de wasstraat laten gaan met een wrap?</h3>
              <p className="text-lg text-gray-700 mb-4">Het is beter om je scooter met de hand te wassen om de wrap te beschermen. Vermijd sterke reinigingsmiddelen die de wrap kunnen beschadigen.</p>

              <h3 className="text-xl font-bold mb-4">Is scooter wrappen duurder dan overspuiten?</h3>
              <p className="text-lg text-gray-700 mb-4">Nee, scooter wrappen is vaak goedkoper dan overspuiten, en biedt bovendien de flexibiliteit om de wrap op een later moment te verwijderen of te vervangen.</p>

              <h3 className="text-xl font-bold mb-4">Hoe lang duurt het om een scooter te wrappen?</h3>
              <p className="text-lg text-gray-700 mb-4">Het wrappen van een scooter duurt meestal 1 tot 2 dagen, afhankelijk van de grootte van de scooter en de complexiteit van het ontwerp.</p>

              <h3 className="text-xl font-bold mb-4">Kan ik mijn scooter wrap laten verwijderen zonder de lak te beschadigen?</h3>
              <p className="text-lg text-gray-700">Ja, een scooterwrap kan veilig worden verwijderd zonder schade aan de originele lak, mits deze correct is aangebracht en binnen de aanbevolen tijd wordt verwijderd.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Motor Wrappen */}
          <AccordionItem value="motor-wrappen">
            <AccordionTrigger className="text-2xl font-bold">Motor Wrappen</AccordionTrigger>
            <AccordionContent>
              <h3 className="text-xl font-bold mb-4">Is het mogelijk om een motor te wrappen?</h3>
              <p className="text-lg text-gray-700 mb-4">Ja, motorwrapping is een populaire optie om je motor een nieuwe look te geven zonder permanente spuitverf. Het beschermt de lak en geeft een unieke uitstraling.</p>

              <h3 className="text-xl font-bold mb-4">Wat zijn de voordelen van motor wrappen in vergelijking met spuiten?</h3>
              <p className="text-lg text-gray-700 mb-4">Motor wrappen is goedkoper dan overspuiten en is volledig omkeerbaar. Bovendien biedt een wrap extra bescherming tegen krassen en UV-straling.</p>

    <h3 className="text-xl font-bold mb-4">Kan ik mijn motor in meerdere kleuren laten wrappen?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, je kunt je motor in meerdere kleuren laten wrappen, inclusief unieke patronen en speciale afwerkingen zoals metallic of mat.</p>

    <h3 className="text-xl font-bold mb-4">Hoe lang duurt het om een motor te wrappen?</h3>
    <p className="text-lg text-gray-700 mb-4">Het wrappen van een motor duurt meestal 1 tot 2 dagen, afhankelijk van de grootte van de motor en het ontwerp.</p>

    <h3 className="text-xl font-bold mb-4">Hoe lang blijft een motor wrap goed?</h3>
    <p className="text-lg text-gray-700 mb-4">Een motorwrap kan 3 tot 5 jaar meegaan, afhankelijk van de blootstelling aan weersomstandigheden en hoe goed deze wordt onderhouden.</p>

    <h3 className="text-xl font-bold mb-4">Is motor wrappen bestand tegen weersomstandigheden?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, een motorwrap is ontworpen om bestand te zijn tegen verschillende weersomstandigheden, inclusief regen, zon en kou.</p>

    <h3 className="text-xl font-bold mb-4">Beschermt motor wrappen de lak van mijn motor?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, motor wrappen beschermt de originele lak tegen krassen, steenslag en UV-schade.</p>

    <h3 className="text-xl font-bold mb-4">Hoeveel kost het om een motor te wrappen?</h3>
    <p className="text-lg text-gray-700 mb-4">De kosten variëren afhankelijk van de grootte van de motor en het gekozen ontwerp, maar liggen meestal tussen de €500 en €1500.</p>

    <h3 className="text-xl font-bold mb-4">Kan ik mijn motor wrap zelf verwijderen?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, de wrap kan veilig worden verwijderd zonder schade aan de originele lak, maar het is aan te raden om dit door een professional te laten doen.</p>

    <h3 className="text-xl font-bold mb-4">Wat gebeurt er als mijn motor wrap beschadigd raakt?</h3>
    <p className="text-lg text-gray-700">Als je motorwrap beschadigd raakt, kan het beschadigde deel vaak worden vervangen zonder dat de hele wrap hoeft te worden verwijderd.</p>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="koplampen-tinten">
  <AccordionTrigger className="text-2xl font-bold">Koplampen Tinten</AccordionTrigger>
  <AccordionContent>
    <h3 className="text-xl font-bold mb-4">Waarom zou ik mijn koplampen laten tinten?</h3>
    <p className="text-lg text-gray-700 mb-4">Het tinten van je koplampen geeft je auto een sportieve uitstraling en beschermt de koplampen tegen schade door vuil, steenslag en UV-straling.</p>

    <h3 className="text-xl font-bold mb-4">Zijn getinte koplampen legaal?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, zolang de tint voldoet aan de wettelijke voorschriften en de zichtbaarheid van de koplampen niet vermindert, zijn getinte koplampen toegestaan.</p>

    <h3 className="text-xl font-bold mb-4">Welke kleuren zijn beschikbaar voor koplamp tinten?</h3>
    <p className="text-lg text-gray-700 mb-4">Je kunt kiezen voor verschillende tinten zoals licht zwart, donker zwart, geel of blauw, afhankelijk van je voorkeur en wat legaal is in jouw regio.</p>

    <h3 className="text-xl font-bold mb-4">Hoe lang duurt het om koplampen te tinten?</h3>
    <p className="text-lg text-gray-700 mb-4">Het tinten van koplampen duurt meestal minder dan een dag, afhankelijk van de complexiteit van het werk.</p>

    <h3 className="text-xl font-bold mb-4">Kan koplampen tinten de zichtbaarheid beïnvloeden?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, het is belangrijk om een tint te kiezen die de zichtbaarheid niet te veel vermindert, vooral 's nachts. Professionele tinten worden aangebracht met de juiste balans tussen esthetiek en veiligheid.</p>

    <h3 className="text-xl font-bold mb-4">Beschermt tinten de koplampen tegen schade?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, een getinte folie beschermt de koplampen tegen kleine steenslag, vuil en UV-straling, waardoor ze langer helder blijven.</p>

    <h3 className="text-xl font-bold mb-4">Hoeveel kost het om mijn koplampen te tinten?</h3>
    <p className="text-lg text-gray-700 mb-4">De kosten voor het tinten van koplampen variëren, maar liggen meestal tussen de €100 en €300, afhankelijk van de complexiteit en de gekozen folie.</p>

    <h3 className="text-xl font-bold mb-4">Hoe onderhoud ik getinte koplampen?</h3>
    <p className="text-lg text-gray-700 mb-4">Getinte koplampen kunnen net zoals normale koplampen worden gereinigd met een zachte doek en milde zeep. Vermijd schurende reinigingsmiddelen die de folie kunnen beschadigen.</p>

    <h3 className="text-xl font-bold mb-4">Kan ik de tint van mijn koplampen later verwijderen?</h3>
    <p className="text-lg text-gray-700">Ja, de folie op de koplampen kan worden verwijderd zonder schade aan te richten aan de lampen zelf, mits deze correct is aangebracht.</p>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="velgen-remklauwen-spuiten">
  <AccordionTrigger className="text-2xl font-bold">Velgen & Remklauwen Spuiten</AccordionTrigger>
  <AccordionContent>
    <h3 className="text-xl font-bold mb-4">Wat zijn de voordelen van het spuiten van velgen en remklauwen?</h3>
    <p className="text-lg text-gray-700 mb-4">Gespoten velgen en remklauwen geven je auto een sportieve look en beschermen tegen corrosie en vuilopbouw.</p>

    <h3 className="text-xl font-bold mb-4">Welke kleuren kan ik kiezen voor velgen en remklauwen?</h3>
    <p className="text-lg text-gray-700 mb-4">Je kunt kiezen uit vrijwel elke kleur, inclusief metallic, mat en glanzend. Populaire kleuren zijn rood, geel, blauw en zwart voor remklauwen, en zilver of zwart voor velgen.</p>

    <h3 className="text-xl font-bold mb-4">Hoe lang blijft de kleur op mijn velgen en remklauwen zitten?</h3>
    <p className="text-lg text-gray-700 mb-4">De verf op velgen en remklauwen kan jaren meegaan, afhankelijk van het onderhoud en de omstandigheden waaraan ze worden blootgesteld.</p>

    <h3 className="text-xl font-bold mb-4">Hoeveel kost het om velgen en remklauwen te laten spuiten?</h3>
    <p className="text-lg text-gray-700 mb-4">De kosten variëren afhankelijk van de grootte van de velgen en het aantal remklauwen, maar liggen gemiddeld tussen de €300 en €800 voor een volledige behandeling.</p>

    <h3 className="text-xl font-bold mb-4">Hoe lang duurt het om mijn velgen en remklauwen te spuiten?</h3>
    <p className="text-lg text-gray-700 mb-4">Het spuiten van velgen en remklauwen duurt meestal 1 tot 2 dagen, afhankelijk van de voorbereiding en droogtijd van de verf.</p>

    <h3 className="text-xl font-bold mb-4">Beschermt het spuiten van velgen en remklauwen tegen corrosie?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, het spuiten van velgen en remklauwen biedt bescherming tegen roest en corrosie, vooral als er hoogwaardige verf of coating wordt gebruikt.</p>

    <h3 className="text-xl font-bold mb-4">Kan ik mijn velgen en remklauwen zelf laten spuiten?</h3>
    <p className="text-lg text-gray-700 mb-4">Hoewel het mogelijk is om dit zelf te doen, wordt het aanbevolen om een professional in te schakelen voor het beste resultaat en een langdurige afwerking.</p>

    <h3 className="text-xl font-bold mb-4">Is spuiten beter dan het aanbrengen van folie op velgen?</h3>
    <p className="text-lg text-gray-700 mb-4">Spuiten geeft een duurzamere en langdurige afwerking, terwijl folie sneller kan worden aangebracht en verwijderd. Het hangt af van je persoonlijke voorkeur en het beoogde gebruik.</p>

    <h3 className="text-xl font-bold mb-4">Moet ik mijn velgen en remklauwen regelmatig laten bijwerken?</h3>
    <p className="text-lg text-gray-700 mb-4">Dit hangt af van de rijomstandigheden en het onderhoud. Velgen en remklauwen die regelmatig aan zout of zware omstandigheden worden blootgesteld, kunnen na verloop van tijd een opknapbeurt nodig hebben.</p>

    <h3 className="text-xl font-bold mb-4">Verkleurt de verf op remklauwen door hitte?</h3>
    <p className="text-lg text-gray-700">Remklauwen kunnen heet worden tijdens het rijden, maar als hittebestendige verf wordt gebruikt, zal de kleur niet snel vervagen of verkleuren.</p>
  </AccordionContent>
</AccordionItem>


<AccordionItem value="wrapfolie-verwijderen">
  <AccordionTrigger className="text-2xl font-bold">Wrapfolie Verwijderen</AccordionTrigger>
  <AccordionContent>
    <h3 className="text-xl font-bold mb-4">Hoe wordt wrapfolie veilig verwijderd?</h3>
    <p className="text-lg text-gray-700 mb-4">Wrapfolie wordt verwijderd met behulp van speciale technieken om te voorkomen dat de lak van de auto wordt beschadigd. Eventuele lijmresten worden ook zorgvuldig schoongemaakt.</p>

    <h3 className="text-xl font-bold mb-4">Kan wrapfolie worden verwijderd zonder schade aan de lak?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, wrapfolie kan worden verwijderd zonder de lak te beschadigen, mits de folie correct is aangebracht en binnen de aanbevolen periode wordt verwijderd.</p>

    <h3 className="text-xl font-bold mb-4">Hoe lang duurt het om wrapfolie te verwijderen?</h3>
    <p className="text-lg text-gray-700 mb-4">Het verwijderen van wrapfolie duurt meestal 1 tot 2 dagen, afhankelijk van de grootte van het voertuig en de staat van de folie.</p>

    <h3 className="text-xl font-bold mb-4">Wat gebeurt er als er lijmresten achterblijven na het verwijderen van wrapfolie?</h3>
    <p className="text-lg text-gray-700 mb-4">Eventuele lijmresten kunnen veilig worden verwijderd met speciale reinigingsmiddelen die de lak van het voertuig niet beschadigen.</p>

    <h3 className="text-xl font-bold mb-4">Kan ik zelf mijn wrapfolie verwijderen?</h3>
    <p className="text-lg text-gray-700 mb-4">Hoewel het mogelijk is om zelf folie te verwijderen, wordt het aanbevolen om een professional in te schakelen om schade te voorkomen en een perfect resultaat te bereiken.</p>

    <h3 className="text-xl font-bold mb-4">Is het verwijderen van wrapfolie duurder dan het aanbrengen ervan?</h3>
    <p className="text-lg text-gray-700 mb-4">Nee, het verwijderen van wrapfolie is over het algemeen goedkoper dan het aanbrengen ervan, hoewel de kosten variëren afhankelijk van de moeilijkheidsgraad.</p>

    <h3 className="text-xl font-bold mb-4">Hoe vaak kan ik wrapfolie vervangen op mijn auto?</h3>
    <p className="text-lg text-gray-700 mb-4">Je kunt wrapfolie zo vaak vervangen als je wilt, zolang het correct wordt aangebracht en verwijderd, zal het geen schade toebrengen aan je auto.</p>

    <h3 className="text-xl font-bold mb-4">Beschadigt het verwijderen van wrapfolie mijn lak als deze al oud is?</h3>
    <p className="text-lg text-gray-700 mb-4">Als de lak van je voertuig ouder is of beschadigd, kan het verwijderen van wrapfolie sommige zwakke plekken blootleggen. In dit geval is het verstandig om vooraf een professional te raadplegen.</p>

    <h3 className="text-xl font-bold mb-4">Kan wrapfolie ook van ramen worden verwijderd?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, wrapfolie die op ramen is aangebracht kan worden verwijderd zonder de ramen te beschadigen.</p>

    <h3 className="text-xl font-bold mb-4">Moet ik mijn auto opnieuw laten polijsten na het verwijderen van wrapfolie?</h3>
    <p className="text-lg text-gray-700">Na het verwijderen van wrapfolie kan polijsten helpen om eventuele lijmresten te verwijderen en de lak weer te laten glanzen, vooral als de folie er lange tijd op heeft gezeten.</p>
  </AccordionContent>
</AccordionItem>


<AccordionItem value="velgenbescherming">
  <AccordionTrigger className="text-2xl font-bold">Velgenbescherming</AccordionTrigger>
  <AccordionContent>
    <h3 className="text-xl font-bold mb-4">Wat is velgenbescherming?</h3>
    <p className="text-lg text-gray-700 mb-4">Velgenbescherming is een beschermende folie die op je velgen wordt aangebracht om schade door krassen en stoepranden te voorkomen.</p>

    <h3 className="text-xl font-bold mb-4">Waarom zou ik mijn velgen laten beschermen?</h3>
    <p className="text-lg text-gray-700 mb-4">Velgenbescherming voorkomt dure reparaties door stoeprandschade en houdt je velgen in topconditie, vooral bij intensief dagelijks gebruik.</p>

    <h3 className="text-xl font-bold mb-4">Hoe wordt velgenbescherming aangebracht?</h3>
    <p className="text-lg text-gray-700 mb-4">Velgenbescherming wordt aangebracht door een dunne laag folie op de randen van je velgen te plaatsen, waar de meeste schade optreedt.</p>

    <h3 className="text-xl font-bold mb-4">Hoeveel kost velgenbescherming?</h3>
    <p className="text-lg text-gray-700 mb-4">De kosten variëren afhankelijk van het type voertuig en de grootte van de velgen, maar liggen gemiddeld tussen de €150 en €400 voor een volledige set velgen.</p>

    <h3 className="text-xl font-bold mb-4">Beschermt velgenbescherming tegen stoeprandschade?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, velgenbescherming is speciaal ontworpen om de randen van de velgen te beschermen tegen stoeprandschade en andere kleine beschadigingen.</p>

    <h3 className="text-xl font-bold mb-4">Is velgenbescherming zichtbaar op de velgen?</h3>
    <p className="text-lg text-gray-700 mb-4">De meeste velgenbeschermingsproducten zijn subtiel en nauwelijks zichtbaar, maar ze kunnen in verschillende kleuren worden aangebracht om een contrasterend of bijpassend effect te creëren.</p>

    <h3 className="text-xl font-bold mb-4">Kan ik velgenbescherming laten verwijderen?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, velgenbescherming kan eenvoudig worden verwijderd zonder schade aan de velgen, zodat je velgen er weer als nieuw uitzien.</p>

    <h3 className="text-xl font-bold mb-4">Verkleurt velgenbescherming door zonlicht?</h3>
    <p className="text-lg text-gray-700 mb-4">Nee, hoogwaardige velgenbescherming is UV-bestendig en zal niet verkleuren door blootstelling aan zonlicht.</p>

    <h3 className="text-xl font-bold mb-4">Hoe lang duurt het om velgenbescherming aan te brengen?</h3>
    <p className="text-lg text-gray-700 mb-4">Het aanbrengen van velgenbescherming duurt meestal minder dan een uur per wiel, afhankelijk van de grootte van de velgen en het type bescherming.</p>

    <h3 className="text-xl font-bold mb-4">Is velgenbescherming ook geschikt voor aluminium velgen?</h3>
    <p className="text-lg text-gray-700">Ja, velgenbescherming is geschikt voor alle soorten velgen, inclusief aluminium, stalen en gesmede velgen.</p>
  </AccordionContent>
</AccordionItem>


<AccordionItem value="sterrenhemel">
  <AccordionTrigger className="text-2xl font-bold">Sterrenhemel</AccordionTrigger>
  <AccordionContent>
    <h3 className="text-xl font-bold mb-4">Wat is een sterrenhemel in een auto?</h3>
    <p className="text-lg text-gray-700 mb-4">Een sterrenhemel is een installatie van honderden kleine LED-lampjes op het dak van je auto, die een sterrenachtige uitstraling creëren.</p>

    <h3 className="text-xl font-bold mb-4">Hoe wordt een sterrenhemel geïnstalleerd in een auto?</h3>
    <p className="text-lg text-gray-700 mb-4">Een sterrenhemel wordt geïnstalleerd door kleine LED-lampjes in het dak van je auto te verwerken. Dit proces kan een dag of twee duren, afhankelijk van de complexiteit van het ontwerp.</p>

    <h3 className="text-xl font-bold mb-4">Kan ik de kleur van de sterrenhemel aanpassen?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, veel sterrenhemel-installaties zijn uitgerust met kleurveranderende LED's, zodat je de kleur kunt aanpassen naar je persoonlijke voorkeur.</p>

    <h3 className="text-xl font-bold mb-4">Hoeveel kost het om een sterrenhemel te laten installeren?</h3>
    <p className="text-lg text-gray-700 mb-4">De kosten voor een sterrenhemel variëren, maar liggen meestal tussen de €1000 en €3000, afhankelijk van het aantal lichtpunten en het type LED's.</p>

    <h3 className="text-xl font-bold mb-4">Hoe lang duurt het om een sterrenhemel te installeren?</h3>
    <p className="text-lg text-gray-700 mb-4">Het installeren van een sterrenhemel duurt meestal 1 tot 2 dagen, afhankelijk van de grootte van het dak en het aantal LED-lampjes dat wordt gebruikt.</p>

    <h3 className="text-xl font-bold mb-4">Is de sterrenhemel energiezuinig?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, LED-verlichting is zeer energiezuinig en zal geen grote invloed hebben op het energieverbruik van je auto.</p>

    <h3 className="text-xl font-bold mb-4">Kan de sterrenhemel worden verwijderd zonder schade?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, een sterrenhemel kan worden verwijderd zonder schade aan de auto aan te richten, hoewel het een tijdrovend proces kan zijn.</p>

    <h3 className="text-xl font-bold mb-4">Hoe onderhoud ik een sterrenhemel in mijn auto?</h3>
    <p className="text-lg text-gray-700 mb-4">Een sterrenhemel vereist weinig onderhoud. Als een LED-lampje uitvalt, kan dit eenvoudig worden vervangen door een professional.</p>

    <h3 className="text-xl font-bold mb-4">Kan ik de intensiteit van de sterrenhemel aanpassen?</h3>
    <p className="text-lg text-gray-700 mb-4">Ja, de meeste sterrenhemels hebben dimmers waarmee je de helderheid van de LED&apos;s kunt aanpassen voor de gewenste sfeer in je auto.</p>

    <h3 className="text-xl font-bold mb-4">Is een sterrenhemel alleen geschikt voor luxe auto&apos;s?</h3>
    <p className="text-lg text-gray-700">Nee, een sterrenhemel kan in bijna elk type voertuig worden geïnstalleerd, van luxe auto&apos;s tot kleinere voertuigen, afhankelijk van de beschikbare ruimte in het dak.</p>
  </AccordionContent>
</AccordionItem>

        </Accordion>

        {/* Call to Action */}
        <div className="bg-red-600 text-white text-center py-8 mt-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Heb je nog vragen?</h2>
          <p className="text-lg mb-4">
            Neem contact met ons op of vraag vandaag nog een offerte aan. Wij helpen je graag verder met al je vragen over carwrapping.
          </p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition">
            Neem Contact Op
          </Link>
        </div>
      </div>
    </main>
  );
}
