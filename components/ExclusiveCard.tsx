import Link from "next/link";

export default function ExclusiveCard() {
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-zinc-900 via-purple-950/30 to-black p-8 md:p-14 shadow-2xl shadow-purple-500/10">

          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}

            <div className="inline-flex rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2">

              <span className="text-sm font-semibold tracking-wide text-yellow-300">
                🔥 LIMITED LAUNCH OFFER
              </span>

            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              HYFEE Exclusive Preset Pack
            </h2>

            {/* Description */}

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              Get our signature collection of professionally crafted Lightroom
              Mobile presets designed to give your photos a cinematic look in
              just one tap.
            </p>

            {/* Features */}

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-zinc-400">

              <span>🎨 5 Premium Presets</span>

              <span>•</span>

              <span>⚡ Instant Download</span>

              <span>•</span>

              <span>📱 Mobile Friendly</span>

            </div>

            {/* Price */}

            <div className="mt-10">

              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Launch Price
              </p>

              <h3 className="mt-3 text-5xl font-bold text-white">
                ₹249
              </h3>

            </div>

            {/* CTA */}

            <div className="mt-10">

              <Link
                href="/presets/exclusive"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/50"
              >
                Preview Presets
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}