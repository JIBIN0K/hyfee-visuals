"use client"

import BeforeAfter from "@/components/BeforeAfter"

export default function MoodyTravelPreset() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Moody Travel Preset Pack
      </h1>

      {/* Before After Slider */}
      <div className="max-w-3xl mx-auto mb-16">
        <BeforeAfter />
      </div>

      {/* Preview Images */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">

        <img src="/photo2.jpg" className="rounded-xl" />
        <img src="/photo3.jpg" className="rounded-xl" />
        <img src="/photo4.jpg" className="rounded-xl" />
        <img src="/photo5.jpg" className="rounded-xl" />

      </div>

      {/* Description */}
      <div className="max-w-2xl mx-auto text-center mb-10">

        <p className="text-gray-400 mb-6">
          A moody cinematic tone perfect for travel photography. Creates deep
          shadows, dramatic colors and a cinematic feel with one click.
        </p>

        <div className="text-3xl font-semibold mb-6">
          ₹249
        </div>

        <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Buy Now
        </button>

      </div>

      {/* Features */}
      <div className="max-w-xl mx-auto text-center text-gray-400 space-y-3">

        <p>✔ Works with Lightroom Mobile</p>
        <p>✔ Works with Lightroom Desktop</p>
        <p>✔ Instant Download</p>
        <p>✔ Beginner Friendly</p>

      </div>

    </div>
  )
}