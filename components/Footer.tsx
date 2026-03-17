import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 text-gray-400 py-10 text-center">

      <div className="max-w-4xl mx-auto px-6">

        {/* Brand */}
        <h3 className="text-white text-lg font-semibold mb-2 tracking-wide">
          HYFEE VISUALS
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          Cinematic Photography • Lightroom Presets • Professional Editing
        </p>

        {/* Location */}
        <p className="text-xs text-gray-500 mb-6">
          Kerala • India
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 text-2xl mb-6">

          <a
            href="https://www.instagram.com/_.hyfee._"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/918943557986"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:hyfeetube@gmail.com"
            className="hover:text-white transition"
          >
            <MdEmail />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2021 – {new Date().getFullYear()} HYFEE VISUALS. All rights reserved.
        </p>

      </div>

    </footer>
  )
}