import React from "react";
import { Link } from "react-router-dom";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div>
      <div className="ready_section bg-[#834376] py-20 ">
        <h2 className="text-center text-4xl mb-5 text-white font-body font-black tracking-wide">
          Ready to Transform Your Look?
        </h2>
        <h4 className="text-xl text-center text-[#EBE6EA] font-body font-light">
          Book your appointment today and experience the Studio 27 difference
        </h4>
        <button className="m-auto block mt-10 px-10 py-4 bg-white text-[#762E61] cursor-pointer font-bold font-body text-lg rounded-lg hover:-translate-y-3 hover:duration-300 hover:bg-pink-200 hover:shadow-2xl hover:shadow-black">
          <Link to="/booking">Book Your Appointment</Link>
        </button>
      </div>
      <div className="main_footer bg-[#86487A] text-white flex justify-between px-20 py-16">
        {/* Studio */}
        <div className="first w-[23%]">
          <h2 className="font-heading text-3xl font-bold mb-6">Studio 27</h2>

          <p className="font-body text-lg text-white/80 leading-8">
            Premium salon experiences crafted with passion and expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div className="first w-[18%]">
          <h3 className="font-heading text-3xl font-semibold mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4 font-body text-lg">
            <Link to="/service">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="first w-[30%]">
          <h3 className="font-heading text-3xl font-semibold mb-6">Contact</h3>

          <div className="space-y-5 font-body text-lg">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon icon={faLocationDot} className="text-xl mt-1" />
              <span>123 Luxury Lane, Fashion District</span>
            </div>

            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faPhone} className="text-xl" />
              <span>+91 9594257690</span>
            </div>

            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              <span>atharvamanjrekar078@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="first w-[22%]">
          <h3 className="font-heading text-3xl font-semibold mb-6">Hours</h3>

          <div className="flex gap-4 font-body text-lg">
            <FontAwesomeIcon icon={faClock} className="text-xl mt-1" />

            <div>
              <p>Mon-Fri: 10am - 7pm</p>
              <p>Sat: 10am - 6pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>

          <div className="flex gap-6 mt-8 text-2xl pl-10">
            <FontAwesomeIcon
              icon={faInstagram}
              className="cursor-pointer hover:text-pink-300 transition"
            />

            <FontAwesomeIcon
              icon={faFacebookF}
              className="cursor-pointer hover:text-blue-300 transition"
            />

            <FontAwesomeIcon
              icon={faXTwitter}
              className="cursor-pointer hover:text-gray-300 transition"
            />
          </div>
        </div>
      </div>


      <hr className="border-white/20 mx-20" />

      <div className="bg-[#86487A] text-center py-6 text-white/80 font-body">
        © 2026 Studio 27. All rights reserved. | Designed with elegance.
      </div>
    </div>
  );
}

export default Footer;
