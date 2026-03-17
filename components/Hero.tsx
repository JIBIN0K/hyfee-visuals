export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center text-white relative"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-6">

        {/* Title */}
        <h1 className="text-7xl font-semibold tracking-widest mb-6">
          HYFEE VISUALS
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-10 tracking-wide">
          Cinematic Photography • Lightroom Presets • Professional Editing
        </p>

        {/* Buttons */}
        <div className="flex gap-6 justify-center">

        <a
            href="#presets"
            className="px-8 py-3 rounded-xl font-semibold transition
            bg-purple-600 hover:bg-purple-700 text-white"
        >
            Explore Presets
        </a>

        <a
            href="#portfolio"
            className="px-8 py-3 rounded-xl border border-purple-500
            text-purple-400 hover:bg-purple-600 hover:text-white transition"
        >
            View Portfolio
        </a>

        </div>

      </div>
    </section>
  )
}