import PresetCard from "./PresetCard"

export default function Presets() {

  const presets = [
    {
      name: "HYFEE Exclusive Pack 🔥",
      price: "₹249",
      image: "/premium.jpg",
      slug: "exclusive",
    },
    {
      name: "Cinematic Pack",
      price: "₹199",
      image: "/photo1.jpg",
      slug: "cinematic",
    },
    {
      name: "Moody Travel Pack",
      price: "₹249",
      image: "/photo2.jpg",
      slug: "moody-travel",
    },
    {
      name: "Golden Hour Pack",
      price: "₹199",
      image: "/photo3.jpg",
      slug: "golden-hour",
    },
    {
      name: "Portrait Pack",
      price: "₹299",
      image: "/photo4.jpg",
      slug: "portrait",
    },
  ]

  return (
    <section id="presets" className="bg-black py-24 px-10">

      <h2 className="text-5xl font-semibold text-center mb-14 tracking-wide text-white">
        Lightroom Preset Packs
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {presets.map((preset, index) => (
          <PresetCard
            key={index}
            name={preset.name}
            price={preset.price}
            image={preset.image}
            slug={preset.slug}
          />
        ))}

      </div>

    </section>
  )
}