import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar flex items-center justify-between px-10 py-5 bg-white/20 backdrop-blur-md sticky top-0 z-20 h-20">
        <div className="text-2xl font-black text-[#762e61] font-body cursor-pointer">
          <Link to="/">Studio 27</Link>
        </div>
        <div className="middle flex gap-7 font-body">
          <div className="home cursor-pointer">
            {" "}
            <Link to="/">Home</Link>
          </div>
          <div className="about cursor-pointer">
            {" "}
            <Link to="/about">About</Link>{" "}
          </div>
          <div className="services cursor-pointer">
            {" "}
            <Link to="service">Service</Link>
          </div>
          <div className="gallery cursor-pointer">
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="booking cursor-pointe">
            <Link to="/booking">Booking</Link>
          </div>
          <div className="contacts cursor-pointer">
            <Link to="/contact  ">Contacts</Link>
          </div>
        </div>
        <div className="right p-3 bg-[#762e61] rounded-lg">
          <button className="text-white font-bold cursor-pointer">
            <Link to="/booking">Book Now</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
