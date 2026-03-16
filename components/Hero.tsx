export default function Hero() {
  return (
    <section className="h-[90vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-black to-gray-900 text-white px-6">

      <h1 className="text-6xl font-bold mb-6 tracking-wide">
        HYFEE VISUALS
      </h1>

      <p className="text-lg text-gray-300 max-w-xl mb-8">
        Cinematic Photography • Lightroom Presets • Professional Editing
      </p>

      <div className="flex gap-4">

        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
          Explore Presets
        </button>

        <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
          View Portfolio
        </button>

      </div>

    </section>
  )
}