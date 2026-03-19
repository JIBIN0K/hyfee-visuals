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
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      <div className="relative z-10 px-6 max-w-3xl">

        {/* Brand */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-[0.25em] mb-6">
          HYFEE VISUALS
        </h1>

        {/* Main Positioning (NEW - VERY IMPORTANT) */}
        <h2 className="text-xl md:text-2xl font-medium mb-4 text-white">
          Cinematic Photography & Visual Storytelling 🎬
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          Turning your moments into premium cinematic visuals.  
          Professional photoshoots, editing & Lightroom presets.
        </p>

        {/* Trust Line (NEW) */}
        <p className="text-sm text-gray-400 mb-10">
          Trusted by creators • Fast delivery • Premium editing quality
        </p>

        {/* Buttons */}
        <div className="flex gap-5 justify-center flex-wrap">

          {/* Book Shoot (HIGH VALUE CTA) */}
          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20to%20book%20a%20photoshoot"
            target="_blank"
            className="
            px-8 py-3
            rounded-xl
            bg-purple-600
            text-white
            font-semibold
            transition duration-300
            hover:bg-purple-700
            hover:scale-105
            "
          >
            Book Your Shoot
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

          {/* Explore Presets */}
          <a
            href="#presets"
            className="
            px-8 py-3
            rounded-xl
            border border-gray-600
            text-gray-300
            font-semibold
            transition duration-300
            hover:bg-white
            hover:text-black
            hover:scale-105
            "
          >
            Explore Presets
          </a>

        </div>

        {/* Urgency Line (NEW) */}
        <p className="text-xs text-gray-500 mt-8">
          Limited bookings available each week – secure your slot now
        </p>

      </div>
    </section>
  )
}