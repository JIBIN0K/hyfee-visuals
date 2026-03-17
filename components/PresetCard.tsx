import Link from "next/link"

interface PresetCardProps {
  name: string
  price: string
  image: string
  slug: string
  badge?: string
  featured?: boolean
  subtitle?: string
}

export default function PresetCard({
  name,
  price,
  image,
  slug,
  badge,
  featured,
  subtitle,
}: PresetCardProps) {

  return (
    <div
      className={`relative bg-neutral-900 rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105
      ${featured ? "border border-purple-500" : ""}`}
    >

      {/* Badge */}
      {badge && (
        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
          {badge}
        </span>
      )}

      {/* Image */}
      <div className="h-[220px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center">

        <h3 className="text-lg font-semibold text-white mb-1">
          {name}
        </h3>

        {subtitle && (
          <p className="text-gray-400 text-sm mb-2">
            {subtitle}
          </p>
        )}

        <p className="text-purple-400 text-xl font-semibold mb-4">
          {price}
        </p>

        {slug === "exclusive" ? (
          <Link
            href={`/presets/${slug}`}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
          >
            Get Presets
          </Link>
        ) : (
          <button className="bg-gray-700 text-gray-300 px-6 py-2 rounded-lg cursor-not-allowed">
            Coming Soon
          </button>
        )}

      </div>
    </div>
  )
}