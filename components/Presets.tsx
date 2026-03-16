import PresetCard from "./PresetCard"

export default function Presets() {

  const presets = [
    {
      name: "Cinematic Pack",
      price: "₹199",
      image: "/photo1.jpg",
    },
    {
      name: "Moody Travel Pack",
      price: "₹249",
      image: "/photo2.jpg",
    },
    {
      name: "Golden Hour Pack",
      price: "₹199",
      image: "/photo3.jpg",
    },
    {
      name: "Portrait Pack",
      price: "₹299",
      image: "/photo4.jpg",
    },
  ]

  return (
    <section className="bg-gray-100 py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-12">
        Lightroom Presets
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {presets.map((preset, index) => (
          <PresetCard
            key={index}
            name={preset.name}
            price={preset.price}
            image={preset.image}
          />
        ))}

      </div>

    </section>
  )
}