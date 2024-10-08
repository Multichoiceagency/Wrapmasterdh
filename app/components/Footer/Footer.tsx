import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative h-auto bg-cover bg-bottom parallax-bg" style={{ backgroundImage: "url('/images/brabus900-rocket-r.jpg')" }}>
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Footer content */}
      <div className="relative z-10 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10 text-white">
        {/* Column 1: Logo and Company Information */}
        <div className="flex flex-col items-left space-y-4">
          <Image src="/logos/logo-wit.png" alt="Wrapmaster Logo" width={200} height={100} />
          <h3 className="text-1xl font-bold">Contact</h3>
          <p>Westvlietweg 72-L</p>
          <p>2495 AA, Den Haag</p>
          <Link href="tel:0702250721">070 - 225 07 21</Link>
          <Link href="mailto:info@wrapmasterdh.nl">info@wrapmasterdh.nl</Link>
          <p>BTW NR: NL0023328992</p>
          <p>KvK NR: 68374232</p>
        </div>

        {/* Column 2: Services */}
        <div className="flex flex-col space-y-2 items-left">
          <h3 className="text-1xl font-bold">Diensten</h3>
          <Link href="/auto-wrappen">Auto Wrappen</Link>
          <Link href="/detail-wrappen">Detail Wrappen</Link>
          <Link href="/chrome-delete">Chrome Delete</Link>
          <Link href="/scooter-wrappen">Scooter Wrappen</Link>
          <Link href="/motor-wrappen">Motor Wrappen</Link>
          <Link href="/reclame-belettering">Reclame Belettering</Link>
          <Link href="/koplampen-tinten">Koplampen Tinten</Link>
          <Link href="/velgen-remklauwen-spuiten">Velgen & Remklauwen Spuiten</Link>
          <Link href="/remklauwen-kleur-veranderen">Remklauwen Kleur Veranderen</Link>
          <Link href="/wrapfolie-verwijderen">Wrapfolie Verwijderen</Link>
          <Link href="/gordelkleur-vervangen">Gordelkleur Vervangen</Link>
          <Link href="/poetsen-glascoating">Poetsen & Glascoating</Link>
          <Link href="/velgenbescherming">Velgenbescherming</Link>
          <Link href="/sterrenhemel">Sterrenhemel</Link>
          <Link href="/veelgestelde-vragen">Veelgestelde vragen</Link>
        </div>

        {/* Column 3: Opening Times */}
        <div className="flex flex-col items-left">
          <h3 className="text-1xl font-bold">Openingstijden</h3>
          <table className="mt-4 bg-transparent border border-white">
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-white">Maandag</td>
                <td className="px-4 py-2 border border-white">09:00 - 18:00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-white">Dinsdag</td>
                <td className="px-4 py-2 border border-white">09:00 - 18:00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-white">Woensdag</td>
                <td className="px-4 py-2 border border-white">09:00 - 18:00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-white">Donderdag</td>
                <td className="px-4 py-2 border border-white">09:00 - 18:00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-white">Vrijdag</td>
                <td className="px-4 py-2 border border-white">09:00 - 18:00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-white">Zaterdag</td>
                <td className="px-4 py-2 border border-white">09:00 - 18:00</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-white">Zondag</td>
                <td className="px-4 py-2 border border-white">Gesloten</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Column 4: Google Maps Embed */}
        <div className="flex justify-center items-center w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d78492.80962488402!2d4.364657!3d52.063339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b70ee8d89279%3A0x1b8914a2b8f83858!2sWrapmaster!5e0!3m2!1snl!2sus!4v1727819759451!5m2!1snl!2sus"
            width="100%" /* Adjust iframe width for responsiveness */
            height="300"
            style={{ border: 0 }}
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>

      {/* Bottom Section: Website Credit */}
      <div className="w-full text-center py-4 mt-10 text-sm text-white relative z-20 bg-black">
      Website gerealiseerd door{' '}
        <Link href="https://multichoiceagency.nl/" target="_blank" className="font-semibold underline hover:text-gray-400">
          Multichoiceagency.nl - Webdesign Studio
        </Link>{' '}
        | Copyright 2024 © by Wrapmaster
      </div>
    </footer>
  );
}
