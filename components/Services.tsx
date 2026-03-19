export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-neutral-950 text-white">

      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">

        <h2 className="text-5xl font-semibold mb-4 tracking-wide">
          Services
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-4">
          Premium photography and editing services crafted to elevate your content.
        </p>

        {/* Trust Line */}
        <p className="text-xs text-gray-500">
          50+ happy clients • Fast delivery • High-end cinematic quality
        </p>

      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {/* 🔥 Photography (Highlighted) */}
        <div className="
          bg-gradient-to-b from-purple-900/30 to-neutral-900
          p-8 rounded-2xl flex flex-col text-center
          border border-purple-500/40
          shadow-xl shadow-purple-500/10
          scale-105
          relative
          hover:-translate-y-2 transition-all duration-300
        ">

          {/* Badge */}
          <span className="absolute top-4 right-4 text-xs bg-purple-600 px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-xl font-semibold mb-3">
            Photography
          </h3>

          <p className="text-gray-400 mb-5 flex-grow">
            Cinematic portraits & premium storytelling visuals.
          </p>

          <div className="text-sm text-gray-300 mb-4 space-y-1">
            <p>Basic — ₹2999</p>
            <p>Standard — ₹5999</p>
            <p>Premium — ₹9999+</p>
          </div>

          <p className="text-xs text-gray-500 mb-6">
            Custom packages available
          </p>

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20to%20book%20a%20photoshoot"
            target="_blank"
            className="
              mt-2 px-6 py-3
              rounded-xl
              bg-gradient-to-r from-purple-600 to-purple-800
              text-white font-semibold
              shadow-lg shadow-purple-500/30
              hover:scale-105
              transition-all duration-300
            "
          >
            Book Premium Shoot
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

          <p className="text-gray-400 mb-5 flex-grow">
            Cinematic Lightroom editing with premium finishing.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            Starting ₹199 / 4 images
          </p>

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
            Order Editing
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

          <p className="text-gray-400 mb-5 flex-grow">
            Cinematic reels & professional color grading.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            Starting ₹399
          </p>

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
            Order Video Edit
          </a>

        </div>

        {/* Presets */}
        <div className="
          bg-neutral-900 p-8 rounded-2xl flex flex-col text-center
          hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20
          transition-all duration-300
        ">

          <h3 className="text-xl font-semibold mb-3">
            Preset Packs
          </h3>

          <p className="text-gray-400 mb-5 flex-grow">
            Cinematic Lightroom presets for creators.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            From ₹249
          </p>

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
            View Presets
          </a>

        </div>

      </div>

    </section>
  )
}