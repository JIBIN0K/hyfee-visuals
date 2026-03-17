import PresetCard from "./PresetCard"

export default function Presets() {

  const presets = [
    {
      name: "HYFEE Exclusive Pack",
      price: "₹249",
      image: "/premium.jpg",
      slug: "exclusive",
      badge: "BEST SELLER",
      featured: true,
      subtitle: "Launch Price",
    },
    {
      name: "Cinematic Pack",
      price: "₹399",
      image: "/cinematic.jpg",
      slug: "cinematic",
      badge: "Coming Soon",
      featured: false,
      subtitle: "Premium Pack",
    },
    {
      name: "Moody Travel Pack",
      price: "₹449",
      image: "/moody.jpg",
      slug: "moody-travel",
      badge: "Coming Soon",
      featured: false,
      subtitle: "Premium Pack",
    },
    {
      name: "Golden Hour Pack",
      price: "₹399",
      image: "/golden.jpg",
      slug: "golden-hour",
      badge: "Coming Soon",
      featured: false,
      subtitle: "Premium Pack",
    },
    {
      name: "Portrait Pack",
      price: "₹499",
      image: "/portrait.jpg",
      slug: "portrait",
      badge: "Coming Soon",
      featured: false,
      subtitle: "Premium Pack",
    },
  ]

  return (
    <section id="presets" className="bg-black py-28 px-6">

      <div className="text-center mb-16">

        <h2 className="text-5xl font-semibold text-white tracking-wide">
          Lightroom Preset Packs
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Professional cinematic Lightroom presets designed for photographers,
          creators and mobile editors. Transform your photos instantly.
        </p>

      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {presets.map((preset, index) => (
          <PresetCard
            key={index}
            name={preset.name}
            price={preset.price}
            image={preset.image}
            slug={preset.slug}
            badge={preset.badge}
            featured={preset.featured}
            subtitle={preset.subtitle}
          />
        ))}

      </div>

    </section>
  )
}