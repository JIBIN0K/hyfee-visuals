"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Container from "@/components/common/Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "AI Prompts", href: "/prompts" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/75 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <Container>

        <div className="flex h-20 items-center justify-between">

          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-[0.28em] text-white transition hover:text-purple-300"
          >
            HYFEE VISUALS
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center gap-10 lg:flex">

            {navLinks.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-zinc-200 transition hover:text-purple-300"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-zinc-200 transition hover:text-purple-300"
                >
                  {item.label}
                </a>
              )
            )}

            <Link
              href="/presets/exclusive"
              className="rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
              Presets
            </Link>

          </nav>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="rounded-lg p-2 transition hover:bg-white/10 lg:hidden"
          >
            <svg
              className="h-7 w-7 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
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

        </div>

      </Container>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-2xl">

          <Container>

            <div className="flex flex-col py-6">

              {navLinks.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-2 py-4 text-lg transition hover:bg-white/5 hover:text-purple-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-2 py-4 text-lg transition hover:bg-white/5 hover:text-purple-300"
                  >
                    {item.label}
                  </a>
                )
              )}

              <Link
                href="/presets/exclusive"
                onClick={closeMenu}
                className="mt-5 rounded-xl bg-purple-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-purple-700"
              >
                View Presets
              </Link>

            </div>

          </Container>

        </div>

      </div>

    </header>
  );
}