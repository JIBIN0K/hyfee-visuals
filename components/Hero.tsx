export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto">

        {/* Brand */}
        <h1 className="
          text-4xl md:text-6xl 
          font-semibold 
          tracking-[0.2em] 
          mb-4
        ">
          HYFEE VISUALS
        </h1>

        {/* Main Headline */}
        <h2 className="
          text-2xl md:text-4xl 
          font-medium 
          leading-tight 
          mb-4
        ">
          Cinematic Photography <br className="hidden md:block" />
          & Visual Storytelling 🎬
        </h2>

        {/* Subtext */}
        <p className="
          text-sm md:text-base 
          text-gray-300 
          mb-6 
          max-w-xl 
          mx-auto
        ">
          Turning your moments into premium cinematic visuals.
        </p>

        {/* Trust Line */}
        <p className="
          text-xs md:text-sm 
          text-gray-400 
          mb-10
        ">
          Trusted by creators • Fast delivery • Premium quality
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">

          {/* Primary CTA */}
          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20to%20book%20a%20photoshoot"
            target="_blank"
            className="
              px-8 py-3
              rounded-xl
              bg-gradient-to-r from-purple-600 to-purple-800
              text-white
              font-semibold
              shadow-lg shadow-purple-500/30
              hover:scale-105
              transition-all duration-300
            "
          >
            Book Your Shoot
          </a>

          {/* Secondary */}
          <a
            href="#portfolio"
            className="
              px-8 py-3
              rounded-xl
              border border-purple-500
              text-purple-400
              font-semibold
              hover:bg-purple-600
              hover:text-white
              transition-all duration-300
            "
          >
            View Portfolio
          </a>

          {/* Tertiary */}
          <a
            href="#presets"
            className="
              px-8 py-3
              rounded-xl
              border border-gray-600
              text-gray-300
              font-semibold
              hover:border-purple-500
              hover:text-white
              transition-all duration-300
            "
          >
            Explore Presets
          </a>

        </div>

        {/* Urgency */}
        <p className="text-xs text-gray-500 mt-8">
          Limited bookings available each week — secure your slot now
        </p>

      </div>
    </section>
  )
}