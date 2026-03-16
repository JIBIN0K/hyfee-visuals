export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center text-white relative"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">

        <h1 className="text-7xl font-bold tracking-widest mb-6">
          HYFEE VISUALS
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Cinematic Photography • Lightroom Presets • Professional Editing
        </p>

        <div className="flex gap-5 justify-center">

          <button className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Explore Presets
          </button>

          <button className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-black transition">
            View Portfolio
          </button>

        </div>

      </div>

    </section>
  )
}