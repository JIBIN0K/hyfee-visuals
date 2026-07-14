interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mx-auto mb-20 max-w-5xl text-center ${className}`}>

      {badge && (
        <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-medium tracking-wide text-purple-300">
          {badge}
        </span>
      )}

      <h2 className="mt-6 mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}

    </div>
  );
}