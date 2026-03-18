export default function PrivacyPolicy() {
  return (
    <section className="bg-black text-gray-300 min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl text-white mb-6">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Last updated: {new Date().toDateString()}
        </p>

        <div className="space-y-6 text-sm leading-relaxed">

          <p>
            HYFEE VISUALS respects your privacy. This policy explains how we collect and use your data.
          </p>

          <h2 className="text-white font-semibold">1. Information We Collect</h2>
          <p>
            We may collect your name, email, phone number, and usage data when you use our website.
          </p>

          <h2 className="text-white font-semibold">2. How We Use Data</h2>
          <p>
            We use your data to provide services, improve user experience, and communicate updates.
          </p>

          <h2 className="text-white font-semibold">3. Analytics</h2>
          <p>
            We use analytics tools (like Vercel Analytics) to understand user behavior.
          </p>

          <h2 className="text-white font-semibold">4. Data Protection</h2>
          <p>
            We do not sell your data. Your information is kept secure.
          </p>

          <h2 className="text-white font-semibold">5. Contact</h2>
          <p>
            📧 hyfeetube@gmail.com <br />
            📱 +91 8943557986
          </p>

        </div>

      </div>
    </section>
  )
}