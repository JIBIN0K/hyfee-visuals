export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-black text-white">

      <h1 className="text-xl font-bold tracking-wide">
        HYFEE VISUALS
      </h1>

      <div className="space-x-6 text-sm">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Presets</a>
        <a href="#" className="hover:text-gray-300">Portfolio</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>

    </nav>
  )
}