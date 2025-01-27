import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Bedankt voor uw aanvraag!</h1>
          <p className="text-gray-600 mb-8">
            We hebben uw offerte aanvraag ontvangen en nemen zo spoedig mogelijk contact met u op.
          </p>
          <Link
            href="/"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Terug naar home
          </Link>
        </div>
      </div>
    </div>
  )
}

