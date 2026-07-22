import React from 'react'
import BookingButton from '../components/BookingButton'

function Contact() {
  return (
    <div>
      <div className="hero h-screen relative">
          {/* Pink Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(107,59,74,0.6)_100%)]"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-6xl font-heading text-white leading-20 tracking-widest font-medium">
              Get In Touch
            </h1>

            <p className="mt-4 text-3xl text-white text-gray-300">
              We'd love to hear from you. Reach out anytime.
            </p>
            <BookingButton />
          </div>
        </div>
    </div>
  )
}

export default Contact
