import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Container from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-20">

      <Container>

        <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-3">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold tracking-[0.2em] text-white">
              HYFEE VISUALS
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-zinc-400">
              Cinematic photography, Lightroom presets and premium AI prompts
              built for creators who want visuals that stand out.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <nav className="mt-6 flex flex-col gap-4">

              <Link
                href="/"
                className="text-zinc-400 transition hover:text-purple-300"
              >
                Home
              </Link>

              <Link
                href="/prompts"
                className="text-zinc-400 transition hover:text-purple-300"
              >
                AI Prompt Library
              </Link>

              <Link
                href="/presets/exclusive"
                className="text-zinc-400 transition hover:text-purple-300"
              >
                Lightroom Presets
              </Link>

              <Link
                href="/privacy-policy"
                className="text-zinc-400 transition hover:text-purple-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-zinc-400 transition hover:text-purple-300"
              >
                Terms
              </Link>

              <Link
                href="/refund-policy"
                className="text-zinc-400 transition hover:text-purple-300"
              >
                Refund Policy
              </Link>

            </nav>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Connect
            </h3>

            <div className="mt-6 flex gap-5">

              <a
                href="https://www.instagram.com/hyfee.visuals"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-xl border border-white/10 p-3 text-2xl transition hover:border-pink-500 hover:text-pink-500"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/918943557986"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-xl border border-white/10 p-3 text-2xl transition hover:border-green-500 hover:text-green-500"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:hyfeetube@gmail.com"
                aria-label="Email"
                className="rounded-xl border border-white/10 p-3 text-2xl transition hover:border-purple-500 hover:text-purple-400"
              >
                <MdEmail />
              </a>

            </div>

            <p className="mt-8 text-zinc-400">
              Kerala, India
            </p>

          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} HYFEE VISUALS. All Rights Reserved.
          </p>

          <p>
            Designed & Built by HYFEE VISUALS
          </p>

        </div>

      </Container>

    </footer>
  );
}