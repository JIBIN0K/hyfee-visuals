import PresetCard from "./PresetCard";

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
  ];

  return (
    <section
      id="presets"
      className="bg-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2">

            <span className="text-sm font-medium tracking-wide text-purple-300">
              🎨 LIGHTROOM PRESETS
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Professional Preset Collection
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Premium Lightroom presets crafted for photographers,
            creators and mobile editors. Achieve a cinematic look
            in just one tap.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {presets.map((preset) => (
            <PresetCard
              key={preset.slug}
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

      </div>
    </section>
  );
}