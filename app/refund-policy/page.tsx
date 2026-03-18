export default function RefundPolicy() {
  return (
    <section className="bg-black text-gray-300 min-h-screen px-6 py-20">
      
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-semibold text-white mb-6">
          Cancellation & Refund Policy
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Last updated: {new Date().toDateString()}
        </p>

        <div className="space-y-6 text-sm leading-relaxed">

          <p>
            HYFEE VISUALS believes in providing high-quality digital products.
            Since our products are delivered digitally, we follow a strict no-refund policy.
          </p>

          <h2 className="text-white font-semibold">1. Digital Product Policy</h2>
          <p>
            All preset packs are delivered as downloadable files (DNG format).
            Once the product is delivered, it cannot be returned or refunded.
          </p>

          <h2 className="text-white font-semibold">2. Refund Eligibility</h2>
          <p>
            Refunds will only be considered if:
            <br />• You did not receive the download link
            <br />• The file is corrupted or not working
          </p>

          <h2 className="text-white font-semibold">3. Cancellation</h2>
          <p>
            Orders can only be cancelled before the product is delivered.
            Once delivered, cancellation is not possible.
          </p>

          <h2 className="text-white font-semibold">4. Contact</h2>
          <p>
            For any issues, contact:
            <br />📧 hyfeetube@gmail.com
            <br />📱 WhatsApp: +91 8943557986
          </p>

        </div>

      </div>

    </section>
  )
}