export default function GoldenHourPreset() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-4xl font-bold mb-6">
        Golden Hour Preset Pack
      </h1>

      <img
        src="/photo3.jpg"
        alt="Golden hour preset"
        className="w-full max-w-xl rounded-xl mb-6"
      />

      <p className="text-gray-400 max-w-xl text-center mb-6">
        Warm golden tones that enhance sunsets and natural light photos.
        Perfect for lifestyle and portrait photography.
      </p>

      <div className="text-2xl font-semibold mb-6">
        ₹199
      </div>

      <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
        Buy Now
      </button>

    </div>
  )
}