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

          {/* Explore Presets */}
          <a
            href="#presets"
            className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 hover:scale-105 transition duration-300"
          >
            Explore Presets
          </a>

          {/* View Portfolio */}
          <a
            href="#portfolio"
            className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-black hover:scale-105 transition duration-300"
          >
            View Portfolio
          </a>

        </div>

      </div>
    </section>
  )
}