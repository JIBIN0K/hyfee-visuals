import Link from "next/link"

export default function ExclusiveCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg text-center p-6">

      <h3 className="text-2xl font-bold mb-3">
        HYFEE Exclusive Preset Pack
      </h3>

      <p className="text-gray-500 mb-4">
        5 Premium Lightroom Mobile Presets
      </p>

      <div className="text-xl font-semibold mb-6">
        ₹249
      </div>

      <Link
        href="/presets/exclusive"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
      >
        Preview Presets
      </Link>

    </div>
  )
}