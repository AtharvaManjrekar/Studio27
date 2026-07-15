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
        <button className="m-auto block mt-10 px-10 py-4 bg-white text-[#762E61] font-bold font-body text-lg rounded-lg">
          <Link to="/booking">Book Your Appointment</Link>
        </button>
      </div>
      <div className="main_footer bg-[#86487A] flex justify-around">
        <div className="first w-1/5">
          <div className="studio">Studio 27</div>
          <div className="description">
            Premium salon experiences crafted with passion and expertise.
          </div>
        </div>
        <div className="first w-2/5">
          <div className="quick">Quick Links</div>
          <h6>
            <Link to="/service">Services</Link>
          </h6>
          <h6>
            <Link to="/gallery">Gallery</Link>
          </h6>
          <h6>
            <Link to="/about">About Us</Link>
          </h6>
          <h6>
            <Link to="/contact">Contact</Link>
          </h6>
        </div>
        <div className="first w-2/5">
          <div className="contact">Contact</div>

          <div className="address_set">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#762E61] text-2xl"
            />{" "}
            <span>123 Luxury Lane, Fashion District</span>
          </div>
          <div className="address_set">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-[#762E61] text-2xl"
            />
            <span>+91 9594257690</span>
          </div>

          <div className="address_set">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#762E61] text-2xl"
            />
            <span>atharvamanjrekar078@gmail.com</span>
          </div>
        </div>
        <div className="first w-2/5">
          <div className="hours">Hours</div>
          <div className="time">
            <FontAwesomeIcon icon={faClock} /> <span>Mon-Fri: 10am-7pm <br/> Sat: 10 am - 6pm <br/> Sun: Closed </span>
          </div>
          <div className="follow">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
