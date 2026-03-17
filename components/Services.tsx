export default function Services() {
  return (
    <section
      id="services"
      className="py-32 px-6 bg-neutral-950 text-white"
    >
      <div className="max-w-6xl mx-auto text-center mb-20">

        <h2 className="text-5xl font-semibold mb-6">
          Services
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Professional photography and editing services crafted with a cinematic
          storytelling style. From capturing moments to enhancing visuals,
          HYFEE VISUALS helps bring your ideas to life.
        </p>

      </div>

      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

        {/* Photography */}
        <div className="bg-neutral-900 p-8 rounded-2xl text-center hover:scale-105 transition duration-300">

          <h3 className="text-xl font-semibold mb-3">
            Photography
          </h3>

          <p className="text-gray-400 mb-6">
            Portrait, outdoor and cinematic photoshoots crafted with
            professional storytelling and lighting.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            Starting ₹1999
          </p>

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20want%20to%20book%20a%20photoshoot"
            target="_blank"
            className="inline-block border border-purple-500 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
          >
            Book Shoot
          </a>

        </div>

        {/* Photo Editing */}
        <div className="bg-neutral-900 p-8 rounded-2xl text-center hover:scale-105 transition duration-300">

          <h3 className="text-xl font-semibold mb-3">
            Photo Editing
          </h3>

          <p className="text-gray-400 mb-6">
            Cinematic Lightroom editing and professional color grading
            designed to elevate your photos.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            ₹199 / 4 Images
          </p>

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20need%20photo%20editing"
            target="_blank"
            className="inline-block border border-purple-500 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
          >
            Send Photos
          </a>

        </div>

        {/* Video Editing */}
        <div className="bg-neutral-900 p-8 rounded-2xl text-center hover:scale-105 transition duration-300">

          <h3 className="text-xl font-semibold mb-3">
            Video Editing
          </h3>

          <p className="text-gray-400 mb-6">
            Cinematic reels and professional video editing for
            creators, brands and social media content.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            Starting ₹399
          </p>

          <a
            href="https://wa.me/918943557986?text=Hi%20I%20need%20video%20editing"
            target="_blank"
            className="inline-block border border-purple-500 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
          >
            Start Project
          </a>

        </div>

        {/* Presets */}
        <div className="bg-neutral-900 p-8 rounded-2xl text-center hover:scale-105 transition duration-300">

          <h3 className="text-xl font-semibold mb-3">
            Preset Packs
          </h3>

          <p className="text-gray-400 mb-6">
            Cinematic Lightroom presets designed for creators,
            photographers and mobile editors.
          </p>

          <p className="text-purple-400 font-semibold mb-6">
            From ₹249
          </p>

          <a
            href="#presets"
            className="inline-block border border-purple-500 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
          >
            Explore Presets
          </a>

        </div>

      </div>
    </section>
  )
}