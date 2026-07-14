import Link from "next/link";
import Image from "next/image";
import { Prompt } from "@/lib/prompts";

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  return (
    <Link
      href={`/prompts/${prompt.slug}`}
      className="group block overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      {/* Preview Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={prompt.image}
          alt={prompt.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Top Badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-purple-500/30 bg-black/70 px-3 py-1 text-xs font-medium text-purple-300 backdrop-blur">
            {prompt.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <h2 className="text-xl font-bold leading-tight text-white transition group-hover:text-purple-300 md:text-2xl">
          {prompt.title}
        </h2>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-zinc-400 md:text-base">
          {prompt.description}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-5">

          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Access
            </p>

            <p className="text-sm font-medium text-green-400">
              Free Prompt
            </p>
          </div>

          <span className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-purple-500">
            Explore →
          </span>

        </div>

      </div>
    </Link>
  );
}