"use client"

import BeforeAfter from "@/components/BeforeAfter"

export default function ExclusivePreset() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      <h1 className="text-4xl font-bold text-center mb-4">
        HYFEE Exclusive Preset Pack
      </h1>

      <p className="text-gray-400 text-center mb-6">
        5 Premium Lightroom Mobile Presets
      </p>

      <div className="text-3xl font-semibold text-center mb-10">
        ₹249
      </div>

      {/* Preview */}
      <h2 className="text-2xl text-center mb-8">
        Preset Preview
      </h2>

      <BeforeAfter />

      {/* Buy button */}
      <div className="text-center mt-12">

        <a
          href="https://wa.me/918943557986?text=Hi%20I%20want%20to%20buy%20the%20HYFEE%20Exclusive%20Preset%20Pack%20for%20₹249"
          target="_blank"
          className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600"
        >
          Buy on WhatsApp
        </a>

      </div>

    </div>
  )
}