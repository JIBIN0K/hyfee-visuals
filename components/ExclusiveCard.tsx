import Link from "next/link"

export default function ExclusiveCard() {
  return (
    <section className="bg-black text-white py-16">

      <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900 to-black rounded-3xl p-12 text-center shadow-xl">

        <div className="text-sm bg-yellow-400 text-black inline-block px-4 py-1 rounded-full mb-4 font-semibold">
          🔥 LIMITED LAUNCH OFFER
        </div>

        <h2 className="text-4xl font-bold mb-4">
          HYFEE Exclusive Preset Pack
        </h2>

        <p className="text-gray-300 mb-6">
          5 Premium Lightroom Mobile Presets
        </p>

        <div className="text-3xl font-bold mb-8">
          ₹249
        </div>

        <Link
          href="/presets/exclusive"
          className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200"
        >
          Preview Presets
        </Link>

      </div>

    </section>
  )
}