export default function Services() {
  return (
    <section className="py-28 px-6 bg-neutral-950 text-white">

      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">

        <h2 className="text-5xl font-semibold mb-4">
          Services
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Professional photography and editing services crafted with a cinematic style.
        </p>

      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {/* Photography */}
        <div className="bg-neutral-900 p-8 rounded-2xl text-center hover:scale-105 transition">

          <h3 className="text-xl font-semibold mb-3">
            Photography
          </h3>

          <p className="text-gray-400 mb-5">
            Portrait, outdoor and cinematic photoshoots.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            Starting ₹1999
          </p>

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20to%20book%20a%20photoshoot"
            target="_blank"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-sm font-semibold"
          >
            Book Shoot
          </a>

        </div>


        {/* Photo Editing */}
        <div className="bg-neutral-900 p-8 rounded-2xl text-center hover:scale-105 transition">

          <h3 className="text-xl font-semibold mb-3">
            Photo Editing
          </h3>

          <p className="text-gray-400 mb-5">
            Professional Lightroom editing and cinematic color grading.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            ₹199 / 4 images
          </p>

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20photo%20editing%20service"
            target="_blank"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-sm font-semibold"
          >
            Order Editing
          </a>

        </div>


        {/* Video Editing */}
        <div className="bg-neutral-900 p-8 rounded-2xl text-center hover:scale-105 transition">

          <h3 className="text-xl font-semibold mb-3">
            Video Editing
          </h3>

          <p className="text-gray-400 mb-5">
            Cinematic reels and professional video edits.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            Starting ₹399
          </p>

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20video%20editing%20service"
            target="_blank"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-sm font-semibold"
          >
            Order Video Edit
          </a>

        </div>


        {/* Presets */}
        <div className="bg-neutral-900 p-8 rounded-2xl text-center hover:scale-105 transition">

          <h3 className="text-xl font-semibold mb-3">
            Preset Packs
          </h3>

          <p className="text-gray-400 mb-5">
            Cinematic Lightroom presets for creators.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            From ₹249
          </p>

          <a
            href="#presets"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-sm font-semibold"
          >
            View Presets
          </a>

        </div>

      </div>

    </section>
  )
}