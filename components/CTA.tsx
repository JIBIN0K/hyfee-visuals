export default function CTA() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        <div className="overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/40 via-zinc-950 to-black p-10 shadow-2xl shadow-purple-900/10 md:p-16">

          {/* Badge */}

          <div className="mb-6 flex justify-center">
            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-medium text-yellow-300">
              ✨ LET'S CREATE SOMETHING AMAZING
            </span>
          </div>

          {/* Heading */}

          <h2 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Ready to Create Something
            <br />
            Cinematic?
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-zinc-400 md:text-lg">
            Whether you're looking for premium photography, cinematic editing,
            or professional Lightroom presets, HYFEE VISUALS helps transform
            ordinary moments into visuals that stand out.
          </p>

          {/* Features */}

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-zinc-400">

            <span>📸 Premium Photography</span>

            <span>🎨 Professional Editing</span>

            <span>⚡ Fast Delivery</span>

            <span>⭐ High Quality</span>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <a
              href="https://wa.me/918943557986?text=Hi%20I%20would%20like%20to%20book%20a%20photoshoot"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 px-10 py-4 text-center text-base font-semibold text-white shadow-lg shadow-purple-700/30 transition duration-300 hover:scale-105 hover:shadow-purple-600/40"
            >
              📸 Book Your Shoot
            </a>

            <a
              href="https://wa.me/918943557986?text=Hi%20I%20need%20photo%20editing%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-purple-500 px-10 py-4 text-center text-base font-semibold text-purple-300 transition duration-300 hover:bg-purple-600 hover:text-white"
            >
              🎨 Editing Service
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}