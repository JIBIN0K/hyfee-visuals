export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-black text-white sticky top-0 z-50">

      {/* Logo → scroll to top */}
      <a href="#" className="text-xl font-bold tracking-wide hover:text-gray-300">
        HYFEE VISUALS
      </a>

      <div className="space-x-6 text-sm">

        <a href="#" className="hover:text-gray-300">
          Home
        </a>

        <a href="#presets" className="hover:text-gray-300">
          Presets
        </a>

        <a href="#portfolio" className="hover:text-gray-300">
          Portfolio
        </a>

        <a href="#contact" className="hover:text-gray-300">
          Contact
        </a>

      </div>

    </nav>
  )
}