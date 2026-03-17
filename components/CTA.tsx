export default function CTA() {
  return (
    <section className="py-28 px-6 bg-gradient-to-r from-purple-700 to-purple-500 text-white text-center">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Ready to Create Something Cinematic?
        </h2>

        {/* Description */}
        <p className="text-lg text-purple-100 mb-10 leading-relaxed">
          Book a professional photography session or editing service and bring
          your vision to life. From cinematic portraits to professional edits,
          HYFEE VISUALS helps you create visuals that stand out.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">

          {/* Book Shoot */}
          <a
            href="https://wa.me/918943557986?text=Hi%20I%20would%20like%20to%20book%20a%20photoshoot"
            target="_blank"
            className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Book a Shoot
          </a>

          {/* Editing Service */}
          <a
            href="https://wa.me/918943557986?text=Hi%20I%20need%20photo%20editing%20service"
            target="_blank"
            className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            Editing Service
          </a>

        </div>

      </div>

    </section>
  )
}