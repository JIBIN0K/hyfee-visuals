export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-28 px-10">

      <h2 className="text-4xl font-bold text-center mb-16">
        Let's Work Together
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Email */}
        <a
          href="mailto:hyfeetube@gmail.com"
          className="bg-gray-900 border border-gray-800 p-8 rounded-2xl text-center hover:bg-gray-800 hover:scale-105 transition duration-300"
        >
          <div className="flex justify-center mb-4">
            <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
              <path d="M12 13.5L0 6.75V18h24V6.75L12 13.5zm12-9H0l12 6.75L24 4.5z"/>
            </svg>
          </div>

          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <p className="text-gray-400 text-sm">
            hyfeetube@gmail.com
          </p>
        </a>


        {/* WhatsApp */}
        <a
          href="https://wa.me/918943557986"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 border border-gray-800 p-8 rounded-2xl text-center hover:bg-gray-800 hover:scale-105 transition duration-300"
        >
          <div className="flex justify-center mb-4">
            <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.78 11.78 0 0012.01 0C5.37 0 .01 5.37.01 12c0 2.12.55 4.2 1.6 6.04L0 24l6.14-1.6A11.9 11.9 0 0012.01 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.49-8.52zM12.01 21.8c-1.88 0-3.72-.5-5.33-1.45l-.38-.23-3.65.95.98-3.55-.25-.37A9.78 9.78 0 012.2 12c0-5.41 4.4-9.8 9.81-9.8 2.62 0 5.08 1.02 6.93 2.87A9.76 9.76 0 0121.81 12c0 5.41-4.4 9.8-9.8 9.8zm5.39-7.35c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.43-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.56-.89-2.13-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.51.07-.77.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.81 1.2 3 .15.19 2.06 3.14 5 4.4.7.3 1.25.48 1.68.62.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.38-.07-.1-.27-.17-.56-.32z"/>
            </svg>
          </div>

          <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
          <p className="text-gray-400 text-sm">
            +91 8943557986
          </p>
        </a>


        {/* Instagram */}
        <a
          href="https://www.instagram.com/_.hyfee._"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 border border-gray-800 p-8 rounded-2xl text-center hover:bg-gray-800 hover:scale-105 transition duration-300"
        >
          <div className="flex justify-center mb-4">
            <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
              <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.54 4 20 5.46 20 7.75v8.5c0 2.29-1.46 3.75-3.75 3.75h-8.5C5.46 20 4 18.54 4 16.25v-8.5C4 5.46 5.46 4 7.75 4zm9.75 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>
          </div>

          <h3 className="font-semibold text-lg mb-2">Instagram</h3>
          <p className="text-gray-400 text-sm">
            @_.hyfee._
          </p>
        </a>

      </div>

    </section>
  )
}