export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50">
      <main className="bg-white shadow-lg rounded-2xl px-8 py-10 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">
          Happy Birthday, Pallab! 🎉
        </h1>
        <p className="text-gray-700 mb-4">
          Wishing you a day filled with joy, laughter, and all your favorite
          things.
        </p>
        <p className="text-gray-700 mb-6">
          May this year bring you:
        </p>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-1 mb-6">
          <li>New adventures and opportunities</li>
          <li>Good health and peace of mind</li>
          <li>Lots of love from friends and family</li>
        </ul>
        <p className="text-sm text-gray-500">
          Made just for you on your special day. 🥳
        </p>
      </main>
    </div>
  );
}
