"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-[0.25em] transition hover:text-purple-300 lg:text-2xl"
        >
          HYFEE VISUALS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">

          <Link
            href="/"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/prompts"
            className="rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-300 transition hover:border-purple-500 hover:bg-purple-600 hover:text-white"
          >
            AI Prompts
          </Link>

          <a
            href="#presets"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Presets
          </a>

          <a
            href="#portfolio"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Portfolio
          </a>

          <a
            href="#contact"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Contact
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      </nav>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="space-y-2 bg-black px-6 py-6">

          <Link
            href="/"
            onClick={closeMenu}
            className="block rounded-lg px-4 py-3 hover:bg-white/10"
          >
            Home
          </Link>

          <Link
            href="/prompts"
            onClick={closeMenu}
            className="block rounded-lg bg-purple-600 px-4 py-3 text-white"
          >
            AI Prompts
          </Link>

          <a
            href="#presets"
            onClick={closeMenu}
            className="block rounded-lg px-4 py-3 hover:bg-white/10"
          >
            Presets
          </a>

          <a
            href="#portfolio"
            onClick={closeMenu}
            className="block rounded-lg px-4 py-3 hover:bg-white/10"
          >
            Portfolio
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="block rounded-lg px-4 py-3 hover:bg-white/10"
          >
            Contact
          </a>

        </div>
      </div>

    </header>
  );
}