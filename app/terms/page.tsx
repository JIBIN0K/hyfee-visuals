export default function Terms() {
  return (
    <section className="bg-black text-gray-300 min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl text-white mb-6">
          Terms & Conditions
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Last updated: {new Date().toDateString()}
        </p>

        <div className="space-y-6 text-sm leading-relaxed">

          <p>
            By using HYFEE VISUALS, you agree to the following terms.
          </p>

          <h2 className="text-white font-semibold">1. Usage</h2>
          <p>
            You agree to use this website only for lawful purposes.
          </p>

          <h2 className="text-white font-semibold">2. Digital Products</h2>
          <p>
            All preset packs are digital products delivered instantly after purchase.
          </p>

          <h2 className="text-white font-semibold">3. No Resale Policy</h2>
          <p>
            You are NOT allowed to resell, share, or distribute these presets.
          </p>

          <h2 className="text-white font-semibold">4. Payments</h2>
          <p>
            Payments are processed securely via third-party providers.
          </p>

          <h2 className="text-white font-semibold">5. Liability</h2>
          <p>
            We are not responsible for misuse of our products.
          </p>

        </div>

      </div>
    </section>
  )
}