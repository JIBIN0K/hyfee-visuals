import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 text-gray-400 py-12 text-center">

      <div className="max-w-4xl mx-auto px-6">

        {/* Brand */}
        <h3 className="text-white text-lg font-semibold mb-2 tracking-wide">
          HYFEE VISUALS
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          Cinematic Photography • Lightroom Presets • Professional Editing
        </p>

        {/* Location */}
        <p className="text-xs text-gray-500 mb-8">
          Kerala • India
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-10 text-2xl mb-8">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/_.hyfee._"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-pink-500 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.7)]"
          >
            <FaInstagram />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918943557986"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-green-400 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.7)]"
          >
            <FaWhatsapp />
          </a>

          {/* Email */}
          <a
            href="mailto:hyfeetube@gmail.com"
            className="transition duration-300 hover:text-purple-400 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]"
          >
            <MdEmail />
          </a>

        </div>

        {/* Divider (subtle premium touch) */}
        <div className="w-20 h-[1px] bg-gray-800 mx-auto mb-6"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2021 – {new Date().getFullYear()} HYFEE VISUALS. All rights reserved.
        </p>

      </div>

    </footer>
  )
}