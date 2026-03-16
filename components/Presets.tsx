export default function Presets() {
  const presets = [
    { name: "Cinematic Pack", price: "₹199" },
    { name: "Moody Travel Pack", price: "₹249" },
    { name: "Golden Hour Pack", price: "₹199" },
    { name: "Portrait Pack", price: "₹299" }
  ]

  return (
    <section className="bg-gray-100 text-black py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-12">
        Lightroom Presets
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {presets.map((preset, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-3">
              {preset.name}
            </h3>

            <p className="text-gray-600 mb-4">
              {preset.price}
            </p>

            <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
              Buy Now
            </button>
          </div>
        ))}

      </div>

    </section>
  )
}