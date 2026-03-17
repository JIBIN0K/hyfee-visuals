export default function Services() {
  return (
    <section className="py-28 px-6 bg-neutral-950 text-white">

      <div className="max-w-6xl mx-auto text-center mb-16">

        <h2 className="text-5xl font-semibold mb-4">
          Services
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Professional photography and editing services crafted with a cinematic style.
        </p>

      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {/* Photography */}
        <div className="bg-neutral-900 p-8 rounded-2xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">Photography</h3>

          <p className="text-gray-400 mb-5">
            Portrait, outdoor and cinematic photoshoots.
          </p>

          <p className="text-purple-400 font-semibold">
            Starting ₹1999
          </p>
        </div>

        {/* Photo Editing */}
        <div className="bg-neutral-900 p-8 rounded-2xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">Photo Editing</h3>

          <p className="text-gray-400 mb-5">
            Professional Lightroom editing and cinematic color grading.
          </p>

          <p className="text-purple-400 font-semibold">
            ₹199 for 4 images
          </p>
        </div>

        {/* Video Editing */}
        <div className="bg-neutral-900 p-8 rounded-2xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">Video Editing</h3>

          <p className="text-gray-400 mb-5">
            Cinematic reels and professional video edits.
          </p>

          <p className="text-purple-400 font-semibold">
            Starting ₹399
          </p>
        </div>

        {/* Presets */}
        <div className="bg-neutral-900 p-8 rounded-2xl text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">Preset Packs</h3>

          <p className="text-gray-400 mb-5">
            Cinematic Lightroom presets for creators.
          </p>

          <p className="text-purple-400 font-semibold">
            From ₹249
          </p>
        </div>

      </div>

    </section>
  )
}