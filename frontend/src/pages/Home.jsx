import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../pages/Home.css";
import BookingButton from "../components/BookingButton";
import Service_1 from "../assets/service-1.jpg";
import Service_2 from "../assets/service-2.jpg";
import Service_3 from "../assets/service-3.jpg";
import Gallery_1 from "../assets/gallery-1.jpg";
import Gallery_2 from "../assets/gallery-2.jpg";
import Gallery_3 from "../assets/gallery-3.jpg";
import Gallery_4 from "../assets/gallery-4.jpg";
import Gallery_5 from "../assets/gallery-5.jpg";
import Gallery_6 from "../assets/gallery-6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="hero h-screen relative">
        {/* Pink Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(107,59,74,0.6)_100%)]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-6xl font-heading text-white leading-20 tracking-widest font-medium">
            Welcome to Studio 27
          </h1>

          <p className="mt-4 text-3xl text-white text-gray-300">
            Experience luxury hair styling in an elegant atmosphere designed for
            you
          </p>
          <BookingButton />
        </div>
      </div>

      <div className="hello bg-[radial-gradient(circle_at_center,_#fdf7f7_0%,_#f8ecec_45%,_#f3e4e5_100%)] pt-20 pb-10">
        <div className="text-center font-body text-4xl font-semibold tracking-wide text-[#762E61]">
          Our Featured Service
        </div>
        <div className="text-center text-[#624C58] text-xl font-body font-medium mt-5 mb-10">
          Discover our range of premium salon services designed to enhance your
          natural <br /> beauty
        </div>
        <div className="sections flex justify-center gap-x-10">
          {/* Card 1 */}
          <div className="cards group w-1/4 border-white border-2 rounded-lg mb-12 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative">
            {/* Image Container */}
            <div className="relative overflow-hidden h-3/5 pb-5">
              <img
                src={Service_1}
                alt="service 1"
                className="rounded-t-lg  w-full transition-transform duration-500 group-hover:scale-110"
              />

              {/* Light Pink Overlay */}
              <div className="absolute inset-0 bg-pink-200/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>

            <h3 className="pl-4 font-body text-2xl font-semibold text-[#762E61] mt-5">
              Hair Styling & Cuts
            </h3>

            <p className="pl-4 font-body text-sm mt-4 mb-5 font-medium">
              Expert cuts and styling tailored to your features and preferences.
              From classic to contemporary looks.
            </p>

            <div className="flex justify-between mt-12">
              <h4 className="text-[#BE7200] font-bold font-body text-xl pl-4">
                From $65
              </h4>

              <button
                type="button"
                className="px-5 bg-[#89626E] text-white font-body text-[14px] py-2 mr-5 rounded-lg transition-colors duration-300 hover:bg-[#762E61]"
              >
                <Link to="/booking">Book Now</Link>
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="cards group w-1/4 border-white border-2 rounded-lg mb-12 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative">
            {/* Image Container */}
            <div className="relative overflow-hidden h-3/5 pb-5">
              <img
                src={Service_2}
                alt="service 2"
                className="rounded-t-lg  w-full transition-transform duration-500 group-hover:scale-110"
              />

              {/* Light Pink Overlay */}
              <div className="absolute inset-0 bg-pink-200/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>

            <h3 className="pl-4 font-body text-2xl font-semibold text-[#762E61] mt-5">
              Hair Color & Treatments
            </h3>

            <p className="pl-4 font-body text-sm mt-4 mb-5 font-medium">
              Professional color services, balayage, highlights, and intensive
              treatments for healthy, vibrant hair.
            </p>

            <div className="flex justify-between mt-12">
              <h4 className="text-[#BE7200] font-bold font-body text-xl pl-4">
                From $85
              </h4>

              <button
                type="button"
                className="px-5 bg-[#89626E] text-white font-body text-[14px] py-2 mr-5 rounded-lg transition-colors duration-300 hover:bg-[#762E61]"
              >
                <Link to="/booking">Book Now</Link>
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="cards group w-1/4 border-white border-2 rounded-lg mb-12 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative">
            {/* Image Container */}
            <div className="relative overflow-hidden h-3/5 pb-5">
              <img
                src={Service_3}
                alt="service 3"
                className="rounded-t-lg  w-full transition-transform duration-500 group-hover:scale-110"
              />

              {/* Light Pink Overlay */}
              <div className="absolute inset-0 bg-pink-200/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>

            <h3 className="pl-4 font-body text-2xl font-semibold text-[#762E61] mt-5">
              Spa & Wellness
            </h3>

            <p className="pl-4 font-body text-sm mt-4 mb-5 font-medium">
              Relax and rejuvenate with our luxury spa treatments and scalp
              therapies for ultimate pampering.
            </p>

            <div className="flex justify-between mt-12">
              <h4 className="text-[#BE7200] font-bold font-body text-xl pl-4">
                From $45
              </h4>

              <button
                type="button"
                className="px-5 bg-[#89626E] text-white font-body text-[14px] py-2 mr-5 rounded-lg transition-colors duration-300 hover:bg-[#762E61]"
              >
                <Link to="/booking">Book Now</Link>
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="block m-auto mt-10 mb-10 text-white bg-[#8B4F81] px-10 py-5 font-body text-xl rounded-lg cursor-pointer hover:-translate-y-3 hover:duration-300"
        >
          <Link to="/service">View All Services</Link>
        </button>
      </div>

      <div className="third_section bg-[#FAF7F4] px-16 py-20">
        <div className="inner_box bg-white px-10 py-16 shadow-2xl shadow-gray-900 inset-shadow-black rounded-xl">
          <div className="why text-center text-[#762E61] font-body text-5xl font-black tracking-widest mb-10">
            Why Studio 27?
          </div>
          <div className="description text-2xl tracking-wider text-[#65535F] text-center mb-10">
            At Studio 27, we believe that beauty is personal. Our team of expert
            stylists combines technical excellence with creative vision to
            deliver transformative results. We use only premium products,
            maintain the highest hygiene standards, and create an atmosphere
            where you can truly relax and feel pampered. Every client receives
            personalized attention and leaves feeling confident and beautiful.
          </div>
          <div className="cards flex justify-center gap-x-28 ">
            <div className="card1 text-center p-10 bg-[#F8F0ED] w-1/4 rounded-lg">
              <h3 className="text-[#BE7200] font-black font-body text-3xl mb-3">
                10+
              </h3>
              <h5 className="font-body text-xl text-[#64515C]">
                Years of Excellence
              </h5>
            </div>
            <div className="card2 text-center p-10 bg-[#F8F0ED] w-1/4 rounded-lg">
              <h3 className="text-[#BE7200] font-black font-body text-3xl mb-3">
                500+
              </h3>
              <h5 className="font-body text-xl text-[#64515C]">
                Happy Clients
              </h5>
            </div>
            <div className="card3 text-center p-10 bg-[#F8F0ED] w-1/4 rounded-lg">
              <h3 className="text-[#BE7200] font-black font-body text-3xl mb-3">
                100%
              </h3>
              <h5 className="font-body text-xl text-[#64515C]">
                Satisfaction Guaranteed
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="our_work_main_section bg-[#F5E5E4] p-10">
        <div className="our_work_text text-6xl text-[#762E61] text-center font-bold font-body tracking-wider">
          Our Work
        </div>
        <div className="browse text-center font-body font-light text-[#624C58] text-2xl mt-10">
          Browse through our portfolio of beautiful transformations and styling
          work
        </div>
        <div className="button_view_gallery text-white text-center p-5 bg-gradient-to-r from-[#C97700] to-[#D98E93] w-1/4 block m-auto my-10 cursor-pointer rounded-lg hover:-translate-y-3 hover:duration-300">
          <Link to="/gallery"> View Full Gallery</Link>
        </div>
        <div className="cards grid grid-cols-2 gap-8 px-8 mt-10">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-xl cursor-pointer">
            <img
              src={Gallery_1}
              alt=""
              className="w-full transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#762e61]/40 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-xl cursor-pointer">
            <img
              src={Gallery_2}
              alt=""
              className="w-full transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#762e61]/40 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-xl cursor-pointer">
            <img
              src={Gallery_3}
              alt=""
              className="w-full transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#762e61]/40 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden rounded-xl cursor-pointer">
            <img
              src={Gallery_4}
              alt=""
              className="w-full transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#762e61]/40 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
          </div>

          {/* Card 5 */}
          <div className="group relative overflow-hidden rounded-xl cursor-pointer">
            <img
              src={Gallery_5}
              alt=""
              className="w-full transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#762e61]/40 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
          </div>

          {/* Card 6 */}
          <div className="group relative overflow-hidden rounded-xl cursor-pointer">
            <img
              src={Gallery_6}
              alt=""
              className="w-full transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#762e61]/40 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
          </div>
        </div>
      </div>

      {/* Client Section */}

      <div className="client_section py-10 px-20 bg-[#FBF8F5] ">
        <div className="what text-center mb-6 font-body text-6xl tracking-wide font-bold text-[#762E61]">
          What Our Client Say
        </div>
        <div className="hear text-center text-[#64525D] text-2xl font-body font-medium my-10 tracking-wider">
          Hear from our satisfied clients about their Studio 27 experience
        </div>
        <div className="review_cards grid grid-cols-3 gap-10 justify-items-center">
          <div className="card1 bg-[#FEFDFC] rounded-xl shadow-[0_20px_50px_rgba(118,46,97,0.25)]">
            <div className="star_line my-8 mx-8">
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
            </div>
            <div className="msg font-heading text-2xl text-[#4D3B47] my-4 mx-8 text-left italic font-medium">
              "Studio 27 completely transformed my look. The stylists truly
              understand modern elegance and personal style."
            </div>
            <div className="line_3 flex my-8 mx-8 ">
              <img
                src={Gallery_1}
                alt=""
                srcset=""
                className="w-16 rounded-full"
              />
              <div className="name">
                <div className="name ml-5 font-body text-xl font-semibold text-[#4D3B47] tracking-wider">
                  Sarah Mitchell
                </div>
                <div className="profession ml-5 text-[#7F6F79] font-medium">
                  Fashion Designer
                </div>
              </div>
            </div>
          </div>

          <div className="card1 bg-[#FEFDFC] rounded-xl shadow-[0_20px_50px_rgba(118,46,97,0.25)]">
            <div className="star_line my-8 mx-8">
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
            </div>
            <div className="msg font-heading text-2xl text-[#4D3B47] my-4 mx-8 text-left italic font-medium">
              "Every visit is a luxurious experience. The attention to detail
              and professionalism is unmatched."
            </div>
            <div className="line_3 flex my-8 mx-8 ">
              <img
                src={Gallery_2}
                alt=""
                srcset=""
                className="w-16 rounded-full"
              />
              <div className="name">
                <div className="name ml-5 font-body text-xl font-semibold text-[#4D3B47] tracking-wider">
                  Jessica Chen
                </div>
                <div className="profession ml-5 text-[#7F6F79] font-medium">
                  Marketing Executive
                </div>
              </div>
            </div>
          </div>

          <div className="card1 bg-[#FEFDFC] rounded-xl shadow-[0_20px_50px_rgba(118,46,97,0.25)]">
            <div className="star_line my-8 mx-8">
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#BE7200] text-sm"
              />
            </div>
            <div className="msg font-heading text-2xl text-[#4D3B47] my-4 mx-8 text-left italic font-medium">
              "I trust Studio 27 with my hair completely. They delivered the
              exact vision I had in mind."
            </div>
            <div className="line_3 flex my-8 mx-8 ">
              <img
                src={Gallery_3}
                alt=""
                srcset=""
                className="w-16 rounded-full"
              />
              <div className="name">
                <div className="name ml-5 font-body text-xl font-semibold text-[#4D3B47] tracking-wider">
                  Emma Rodriguez
                </div>
                <div className="profession ml-5 text-[#7F6F79] font-medium">
                  Artist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;
