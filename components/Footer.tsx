import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* Brand */}

        <div className="text-center">

          <div className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2">

            <span className="text-sm font-medium tracking-wide text-purple-300">
              HYFEE VISUALS
            </span>

          </div>

          <h3 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Cinematic Visuals
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
            Premium Photography • Lightroom Presets • Professional Editing •
            AI Prompt Library
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            Kerala • India
          </p>

        </div>

        {/* Social */}

        <div className="mt-12 flex justify-center gap-6">

          <a
            href="https://www.instagram.com/_.hyfee._"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-2xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:text-pink-500"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/918943557986"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-2xl transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-400"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:hyfeetube@gmail.com"
            aria-label="Email"
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-2xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:text-purple-400"
          >
            <MdEmail />
          </a>

        </div>

        {/* Divider */}

        <div className="my-12 h-px w-full bg-zinc-800" />

        {/* Links */}

        <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-500">

          <a
            href="/privacy-policy"
            className="transition hover:text-white"
          >
            Privacy Policy
          </a>

          <a
            href="/terms"
            className="transition hover:text-white"
          >
            Terms
          </a>

          <a
            href="/refund-policy"
            className="transition hover:text-white"
          >
            Refund Policy
          </a>

        </div>

        {/* Copyright */}

        <p className="mt-10 text-center text-sm text-zinc-500">
          © 2021 – {new Date().getFullYear()} HYFEE VISUALS.
          All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}