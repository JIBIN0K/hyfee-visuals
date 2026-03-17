"use client"

import Link from "next/link"

type Props = {
  name: string
  price: string
  image: string
  slug: string
}

export default function PresetCard({ name, price, image, slug }: Props) {

  const showComingSoon = () => {
    const message = document.createElement("div")

    message.innerText = "Presets coming soon 🚀"

    message.className =
      "fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50"

    document.body.appendChild(message)

    setTimeout(() => {
      message.remove()
    }, 3000)
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5 text-center">

        <h3 className="text-xl font-semibold mb-2">
          {name}
        </h3>

        <p className="text-gray-500 mb-4">
          {price}
        </p>

        {/* If exclusive → go to page */}
        {slug === "exclusive" ? (

          <Link
            href={`/presets/${slug}`}
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 inline-block"
          >
            Buy Now
          </Link>

        ) : (

          <button
            onClick={showComingSoon}
            className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
          >
            Coming Soon
          </button>

        )}

      </div>

    </div>
  )
}