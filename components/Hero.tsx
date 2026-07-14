export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center sm:px-8 lg:px-12">

        {/* Small Badge */}
        <div className="mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2">
          <span className="text-sm font-medium tracking-wide text-purple-300">
            ✨ CINEMATIC PHOTOGRAPHY
          </span>
        </div>

        {/* Main Title */}
        <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          HYFEE
          <br />
          <span className="text-white">VISUALS</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
          Premium cinematic photography, professional editing and AI-powered
          creative resources designed for creators who want visuals that stand
          out.
        </p>

        {/* Trust */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-zinc-400">
          <span>🎥 Cinematic Editing</span>
          <span>•</span>
          <span>⚡ Fast Delivery</span>
          <span>•</span>
          <span>⭐ Premium Quality</span>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20to%20book%20a%20photoshoot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-600/50"
          >
            📸 Book Your Shoot
          </a>

          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-xl border border-purple-500/50 bg-black/20 px-8 py-4 text-base font-semibold text-purple-200 backdrop-blur transition-all duration-300 hover:border-purple-400 hover:bg-purple-600/20 hover:text-white"
          >
            View Portfolio
          </a>

        </div>

        {/* Bottom Note */}
        <p className="mt-8 text-sm text-zinc-500">
          Limited bookings available this month • Reserve your slot today
        </p>

      </div>
    </section>
  );
}