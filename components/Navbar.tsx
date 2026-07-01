import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        <Link
          href="/"
          className="text-xl font-bold tracking-[0.2em] hover:text-purple-300 transition"
        >
          HYFEE VISUALS
        </Link>

        <div className="flex items-center gap-8 text-sm">

          <Link href="/" className="hover:text-purple-300 transition">
            Home
          </Link>

          <Link
            href="/prompts"
            className="rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-purple-300 transition hover:bg-purple-600 hover:text-white"
          >
            AI Prompts
          </Link>

          <a href="#presets" className="hover:text-purple-300 transition">
            Presets
          </a>

          <a href="#portfolio" className="hover:text-purple-300 transition">
            Portfolio
          </a>

          <a href="#contact" className="hover:text-purple-300 transition">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}