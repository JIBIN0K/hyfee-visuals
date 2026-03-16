"use client"

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"

export default function BeforeAfter() {
  return (
    <section className="bg-black text-white py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-10">
        Before & After
      </h2>

      <div className="max-w-2xl mx-auto rounded-xl overflow-hidden">

        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src="/before.jpg"
              alt="Before"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="/after.jpg"
              alt="After"
            />
          }
        />

      </div>

    </section>
  )
}