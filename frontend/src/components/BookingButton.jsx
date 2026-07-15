import React from "react";
import { Link } from "react-router-dom";

function BookingButton() {
  return (
    <div>
      <div className="bg-[#6E404B] text-white border-2 border-[#8B5D55] rounded-lg font-body px-8 py-4 text-2xl font-bold mt-12 cursor-pointer hover:-translate-y-3 hover:duration-300">
        <Link to="/booking">Book Your Appointment</Link>
      </div>
    </div>
  );
}

export default BookingButton;
