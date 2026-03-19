export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-neutral-950 text-white">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-14">

        <h2 className="text-5xl font-semibold mb-4 tracking-wide">
          Services
        </h2>

        <p className="text-gray-400 mb-3">
          Premium photography & editing crafted for cinematic visuals.
        </p>

        <p className="text-xs text-gray-500">
          50+ clients • Fast delivery • High-end quality
        </p>

      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {/* 🔥 Photography */}
        <div className="
          bg-gradient-to-b from-purple-900/30 to-neutral-900
          p-8 rounded-2xl flex flex-col text-center
          border border-purple-500/40
          shadow-xl shadow-purple-500/10
          scale-105 relative
          hover:-translate-y-2 transition-all duration-300
        ">

          {/* Badge */}
          <span className="absolute top-4 right-4 text-[10px] bg-purple-600 px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-xl font-semibold mb-3">
            Photography
          </h3>

          <p className="text-gray-400 mb-6 flex-grow">
            Cinematic portraits & premium storytelling.
          </p>

          {/* Minimal Pricing */}
          <div className="text-lg font-semibold text-white mb-2">
            ₹2999+
          </div>

          <p className="text-xs text-gray-500 mb-6">
            Custom packages available
          </p>

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20to%20book%20a%20photoshoot"
            target="_blank"
            className="
              px-6 py-3 rounded-xl
              bg-gradient-to-r from-purple-600 to-purple-800
              text-white font-semibold
              shadow-lg shadow-purple-500/30
              hover:scale-105
              transition-all duration-300
            "
          >
            Book Shoot
          </a>

        </div>

        {/* Photo Editing */}
        <div className="
          bg-neutral-900 p-8 rounded-2xl flex flex-col text-center
          hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20
          transition-all duration-300
        ">

          <h3 className="text-xl font-semibold mb-3">
            Photo Editing
          </h3>

          <p className="text-gray-400 mb-6 flex-grow">
            Cinematic Lightroom edits with premium tones.
          </p>

          <div className="text-lg font-semibold text-white mb-6">
            ₹199+
          </div>

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20photo%20editing%20service"
            target="_blank"
            className="
              px-5 py-2 rounded-lg
              border border-purple-500
              text-purple-400
              hover:bg-purple-600 hover:text-white
              transition-all duration-300
            "
          >
            Order
          </a>

        </div>

        {/* Video Editing */}
        <div className="
          bg-neutral-900 p-8 rounded-2xl flex flex-col text-center
          hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20
          transition-all duration-300
        ">

          <h3 className="text-xl font-semibold mb-3">
            Video Editing
          </h3>

          <p className="text-gray-400 mb-6 flex-grow">
            Cinematic reels & pro color grading.
          </p>

          <div className="text-lg font-semibold text-white mb-6">
            ₹399+
          </div>

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20video%20editing%20service"
            target="_blank"
            className="
              px-5 py-2 rounded-lg
              border border-purple-500
              text-purple-400
              hover:bg-purple-600 hover:text-white
              transition-all duration-300
            "
          >
            Order
          </a>

        </div>

        {/* Presets */}
        <div className="
          bg-neutral-900 p-8 rounded-2xl flex flex-col text-center
          hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20
          transition-all duration-300
        ">

          <h3 className="text-xl font-semibold mb-3">
            Presets
          </h3>

          <p className="text-gray-400 mb-6 flex-grow">
            Signature Lightroom presets for creators.
          </p>

          <div className="text-lg font-semibold text-white mb-6">
            ₹249+
          </div>

          <a
            href="#presets"
            className="
              px-5 py-2 rounded-lg
              border border-purple-500
              text-purple-400
              hover:bg-purple-600 hover:text-white
              transition-all duration-300
            "
          >
            View
          </a>

        </div>

      </div>

    </section>
  )
}