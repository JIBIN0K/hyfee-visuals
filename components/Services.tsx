export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-neutral-950 text-white">

      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">

        <h2 className="text-5xl font-semibold mb-4 tracking-wide">
          Services
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Professional photography, editing and cinematic visual services crafted to elevate your content.
        </p>

      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {/* Photography */}
        <div className="bg-neutral-900 p-8 rounded-2xl flex flex-col text-center 
        hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">

          <h3 className="text-xl font-semibold mb-3">
            Photography
          </h3>

          <p className="text-gray-400 mb-5 flex-grow">
            Cinematic portraits, outdoor shoots and premium visual storytelling.
          </p>

          {/* Premium Pricing Structure */}
          <div className="text-sm text-gray-400 mb-4 space-y-1">
            <p>Basic – ₹2999</p>
            <p>Standard – ₹5999</p>
            <p>Premium – ₹9999+</p>
          </div>

          <p className="text-xs text-gray-500 mb-6">
            Custom packages available based on requirements
          </p>

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20to%20book%20a%20photoshoot"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg 
            text-sm font-semibold w-fit mx-auto transition-all duration-300"
          >
            Book Shoot
          </a>

        </div>


        {/* Photo Editing */}
        <div className="bg-neutral-900 p-8 rounded-2xl flex flex-col text-center 
        hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">

          <h3 className="text-xl font-semibold mb-3">
            Photo Editing
          </h3>

          <p className="text-gray-400 mb-5 flex-grow">
            Professional Lightroom editing with cinematic tones, balanced colors and premium finishing.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            Starting ₹199 / 4 images
          </p>

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20photo%20editing%20service"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg 
            text-sm font-semibold w-fit mx-auto transition-all duration-300"
          >
            Order Editing
          </a>

        </div>


        {/* Video Editing */}
        <div className="bg-neutral-900 p-8 rounded-2xl flex flex-col text-center 
        hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">

          <h3 className="text-xl font-semibold mb-3">
            Video Editing
          </h3>

          <p className="text-gray-400 mb-5 flex-grow">
            Cinematic reels, storytelling edits and professional color grading for engaging visuals.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            Starting ₹399
          </p>

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20video%20editing%20service"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg 
            text-sm font-semibold w-fit mx-auto transition-all duration-300"
          >
            Order Video Edit
          </a>

        </div>


        {/* Presets */}
        <div className="bg-neutral-900 p-8 rounded-2xl flex flex-col text-center 
        hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">

          <h3 className="text-xl font-semibold mb-3">
            Preset Packs
          </h3>

          <p className="text-gray-400 mb-5 flex-grow">
            Cinematic Lightroom presets designed for photographers, creators and storytellers.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            From ₹249
          </p>

          <a
            href="#presets"
            className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg 
            text-sm font-semibold w-fit mx-auto transition-all duration-300"
          >
            View Presets
          </a>

        </div>

      </div>

    </section>
  )
}