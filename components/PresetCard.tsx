import Link from "next/link"

type Props = {
  name: string
  price: string
  image: string
}

export default function PresetCard({ name, price, image }: Props) {
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

        <Link
          href="/presets/cinematic"
          className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 inline-block"
        >
          Buy Now
        </Link>

      </div>

    </div>
  )
}