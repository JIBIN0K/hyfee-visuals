import Image from "next/image";
import Link from "next/link";

interface PresetCardProps {
  name: string;
  price: string;
  image: string;
  slug: string;
  badge?: string;
  featured?: boolean;
  subtitle?: string;
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
  const isAvailable = slug === "exclusive";

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
        featured
          ? "border-purple-500/60 bg-gradient-to-b from-purple-900/20 to-zinc-900 shadow-xl shadow-purple-500/20"
          : "border-zinc-800 bg-zinc-900 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10"
      }`}
    >
      {/* Badge */}

      {badge && (
        <div className="absolute left-4 top-4 z-10">

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              featured
                ? "bg-purple-600 text-white"
                : "bg-zinc-800 text-zinc-300"
            }`}
          >
            {badge}
          </span>

        </div>
      )}

      {/* Image */}

      <div className="relative aspect-[4/5] overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">

        <h3 className="text-xl font-bold text-white">
          {name}
        </h3>

        {subtitle && (
          <p className="mt-2 text-sm text-zinc-400">
            {subtitle}
          </p>
        )}

        <div className="mt-6">

          <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
            Price
          </p>

          <p className="mt-2 text-3xl font-bold text-purple-400">
            {price}
          </p>

        </div>

        <div className="mt-auto pt-8">

          {isAvailable ? (
            <Link
              href={`/presets/${slug}`}
              className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/40"
            >
              Get Presets
            </Link>
          ) : (
            <button
              disabled
              className="w-full cursor-not-allowed rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-3 font-semibold text-zinc-400"
            >
              Coming Soon
            </button>
          )}

        </div>

      </div>
    </div>
  );
}