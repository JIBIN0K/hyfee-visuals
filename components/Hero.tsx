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
      {/* Cinematic dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      <div className="relative z-10 px-6 max-w-3xl">

        {/* Title */}
        <h1 className="text-7xl md:text-8xl font-semibold tracking-[0.3em] mb-6">
          HYFEE VISUALS
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-12 tracking-wide">
          Cinematic Photography • Lightroom Presets • Professional Editing
        </p>

        {/* Buttons */}
        <div className="flex gap-6 justify-center flex-wrap">

          {/* Explore Presets */}
          <a
            href="#presets"
            className="
            px-8 py-3
            rounded-xl
            border border-purple-500
            text-purple-400
            font-semibold
            transition duration-300
            hover:bg-purple-600
            hover:text-white
            hover:border-purple-600
            hover:scale-105
            "
          >
            Explore Presets
          </a>

          {/* View Portfolio */}
          <a
            href="#portfolio"
            className="
            px-8 py-3
            rounded-xl
            border border-purple-500
            text-purple-400
            font-semibold
            transition duration-300
            hover:bg-purple-600
            hover:text-white
            hover:border-purple-600
            hover:scale-105
            "
          >
            View Portfolio
          </a>

        </div>

      </div>
    </section>
  )
}