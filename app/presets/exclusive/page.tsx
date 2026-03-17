"use client"

import BeforeAfter from "@/components/BeforeAfter"

export default function ExclusivePreset() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-5xl font-semibold tracking-wide mb-4">
          HYFEE Exclusive Preset Pack
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mb-8">
          5 Premium Lightroom Mobile Presets
        </p>

        {/* Price */}
        <div className="text-5xl font-bold text-purple-400 mb-12">
          ₹249
        </div>

        {/* Preview title */}
        <h2 className="text-3xl mb-8 tracking-wide">
          Preset Preview
        </h2>

        {/* Before After Slider */}
        <div className="mb-16">
          <BeforeAfter />
        </div>

      </div>


      {/* What you get section */}
      <div className="max-w-3xl mx-auto mb-16">

        <h3 className="text-2xl text-center mb-8">
          What You Get
        </h3>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-300">

          <li>✔ 5 Cinematic Lightroom Mobile Presets</li>
          <li>✔ Perfect for Portrait Photography</li>
          <li>✔ Designed for Outdoor & Nature Shots</li>
          <li>✔ Easy One-Click Installation</li>
          <li>✔ Works on Lightroom Mobile</li>
          <li>✔ Instant Access After Purchase</li>

        </ul>

      </div>


      {/* Buy section */}
      <div className="text-center">

        <a
          href="https://wa.me/918943557986?text=Hi%20I%20want%20to%20buy%20the%20HYFEE%20Exclusive%20Preset%20Pack%20for%20₹249"
          target="_blank"
          className="
          inline-block
          bg-green-500
          hover:bg-green-600
          text-white
          px-10 py-4
          rounded-xl
          text-lg
          font-semibold
          transition
          "
        >
          Buy on WhatsApp
        </a>

        <p className="text-gray-500 text-sm mt-4">
          Instant delivery after purchase
        </p>

      </div>

    </section>
  )
}