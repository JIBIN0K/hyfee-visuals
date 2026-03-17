export default function MoodyTravelPreset() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-4xl font-bold mb-6">
        Moody Travel Preset Pack
      </h1>

      <img
        src="/photo2.jpg"
        alt="Moody preset"
        className="w-full max-w-xl rounded-xl mb-6"
      />

      <p className="text-gray-400 max-w-xl text-center mb-6">
        A moody cinematic tone perfect for travel photography. Creates deep
        shadows and dramatic colors instantly.
      </p>

      <div className="text-2xl font-semibold mb-6">
        ₹249
      </div>

      <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
        Buy Now
      </button>

    </div>
  )
}