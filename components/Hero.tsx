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
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>

      <div className="relative z-10 px-6 max-w-3xl mx-auto">

        {/* Brand */}
        <h1 className="
          text-3xl md:text-5xl 
          font-semibold 
          tracking-[0.3em] 
          mb-6
        ">
          HYFEE VISUALS
        </h1>

        {/* Sub Headline (REFINED) */}
        <h4 className="
          text-base md:text-xl 
          font-light 
          text-gray-400 
          tracking-wide 
          leading-relaxed 
          mb-4
        ">
          Cinematic Photography & Visual Storytelling
        </h4>

        {/* Value Line */}
        <p className="
          text-sm md:text-base 
          text-gray-400 
          mb-8 
          max-w-lg 
          mx-auto
        ">
          Turning your moments into premium cinematic visuals.
        </p>

        {/* Trust */}
        <p className="
          text-xs md:text-sm 
          text-gray-500 
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
              shadow-lg shadow-purple-500/40
              hover:shadow-purple-500/70
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
              border border-purple-500/60
              text-purple-300
              font-semibold
              shadow-md shadow-purple-500/10
              hover:bg-purple-600/20
              hover:text-white
              hover:border-purple-400
              hover:shadow-purple-500/30
              transition-all duration-300
            "
          >
            View Portfolio
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