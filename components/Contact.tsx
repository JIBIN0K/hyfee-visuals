export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-28 px-10">

      <h2 className="text-4xl font-bold text-center mb-16">
        Get In Touch
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Email */}
        <a
          href="mailto:hyfeetube@gmail.com"
          className="bg-gray-900 p-8 rounded-2xl text-center hover:bg-gray-800 transition"
        >
          <div className="text-3xl mb-3">📧</div>
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <p className="text-gray-400 text-sm">
            hyfeetube@gmail.com
          </p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918943557986"
          target="_blank"
          className="bg-gray-900 p-8 rounded-2xl text-center hover:bg-gray-800 transition"
        >
          <div className="text-3xl mb-3">📱</div>
          <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
          <p className="text-gray-400 text-sm">
            +91 8943557986
          </p>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/_hyfee._"
          target="_blank"
          className="bg-gray-900 p-8 rounded-2xl text-center hover:bg-gray-800 transition"
        >
          <div className="text-3xl mb-3">📸</div>
          <h3 className="font-semibold text-lg mb-2">Instagram</h3>
          <p className="text-gray-400 text-sm">
            @_hyfee._
          </p>
        </a>

      </div>

      <p className="text-center text-gray-500 text-sm mt-12">
        For preset support, collaborations, or custom editing.
      </p>

    </section>
  )
}