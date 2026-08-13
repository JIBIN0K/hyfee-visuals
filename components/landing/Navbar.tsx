"use client";

import Link from "next/link";
import Image from "next/image";
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
    { label: "Home", href: "/#top" },
    { label: "Services", href: "/#services" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
    { label: "Store", href: "/store" },
  ];

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-black/40 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>

        <div className="flex h-24 items-center justify-between sm:h-28">

          <Link
            href="/"
            onClick={() => {
              closeMenu();
              if (typeof window !== "undefined" && window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center"
          >
            <Image
              src="/logo.svg"
              alt="HYFEE VISUALS"
              width={791}
              height={525}
              priority
              className="h-20 w-auto sm:h-24"
            />
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center gap-10 lg:flex">

            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-block text-sm font-medium text-zinc-200 transition-all duration-300 hover:scale-110 hover:text-green-300"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/prompts"
              className="rounded-full px-6 py-2.5 font-semibold text-green-300 transition-all duration-300 hover:text-white hover:brightness-150"
              style={{
                border: "1px solid transparent",
                background:
                  "linear-gradient(#000, #000) padding-box, linear-gradient(135deg, #052e16, #16a34a, #052e16) border-box",
              }}
            >
              AI Prompts
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

    </header>

      {/* Mobile Menu - top panel that covers the navbar; full width, auto height */}

      <div
        className={`fixed inset-x-0 top-0 z-[60] bg-black pb-8 transition-all duration-500 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <Container>

          {/* Overlay top bar - matches the navbar row height so the close button lines up */}

          <div className="flex h-24 items-center justify-end sm:h-28">

            <button
              onClick={closeMenu}
              aria-label="Close Menu"
              className="rounded-lg p-2 transition hover:bg-white/10"
            >
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

          </div>

          <div className="flex flex-col pt-2">

            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-2 py-4 text-lg transition hover:bg-white/5 hover:text-green-300"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/prompts"
              onClick={closeMenu}
              className="mt-5 rounded-xl px-6 py-4 text-center font-semibold text-green-300 transition-all duration-300 hover:text-white hover:brightness-150"
              style={{
                border: "1px solid transparent",
                background:
                  "linear-gradient(#000, #000) padding-box, linear-gradient(135deg, #052e16, #16a34a, #052e16) border-box",
              }}
            >
              AI Prompts
            </Link>

          </div>

        </Container>

      </div>
    </>
  );
}
