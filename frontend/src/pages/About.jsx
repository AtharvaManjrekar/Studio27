import React from "react";
import BookingButton from "../components/BookingButton";
import Image_1 from "../assets/gallery-1.jpg";
import { LuSparkles } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import Team1 from "../assets/team-1.jpg";
import Team2 from "../assets/team-2.jpg";
import Team3 from "../assets/team-3.jpg";

function About() {
  return (
    <div>
      {/* hero screen */}
      <div className="hero h-screen relative">
        {/* Pink Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(107,59,74,0.6)_100%)]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-6xl font-heading text-white leading-20 tracking-widest font-medium">
            About Studio 27
          </h1>

          <p className="mt-4 text-3xl text-white text-gray-300">
            Where passion, skill, and luxury meet to transform your look
          </p>
          <BookingButton />
        </div>
      </div>
      {/* Second layer white */}

      <div className="our flex flex-1 px-20 py-40 gap-x-10">
        <div className="side_1 w-3/6 ">
          <img
            src={Image_1}
            alt="image_1"
            className="w-3/4 mt-30"
            style={{ borderRadius: "40px" }}
          />
        </div>
        <div className="side_2 w-3/6 pl-10">
          <div className="ourstory text-center font-body text-5xl font-semibold tracking-wide text-[#762E61] mb-10">
            Our Story
          </div>

          <h3 className=" text-left text-[#64525D] text-2xl font-body font-medium my-8 tracking-wider">
            Studio 27 was born from a simple vision: to create a sanctuary where
            beauty, luxury, and expertise converge. Founded in 2013, we began as
            a small, intimate salon with a commitment to personalized service
            and exceptional results.
          </h3>
          <h3 className="text-2xl text-left text-[#64525D] font-body font-medium my-8 tracking-wider">
            Over the years, we've grown from a neighborhood favorite to one of
            the city's premier salons, but our core values remain unchanged. We
            believe that true beauty comes from feeling confident, cared for,
            and understood.
          </h3>
          <h3 className=" text-left text-[#64525D] text-2xl font-body font-medium my-8 tracking-wider">
            Every team member at Studio 27 is handpicked for their expertise,
            passion, and commitment to client satisfaction. We continuously
            train and stay updated with the latest techniques and trends to
            deliver world-class service.
          </h3>
        </div>
      </div>
      {/* Third Pink Layer */}

      <div className="pink_layer bg-[#F5E5E4] ">
        <div className="our text-center text-[#762E61] text-6xl pt-10 font-body font-bold ">
          Our Values
        </div>

        <div className="cards mt-20 mx-20">
          <div className="grid grid-cols-3 gap-10 ">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white mb-20">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-400 flex items-center justify-center">
                <LuSparkles className="text-3xl text-yellow-300" />
              </div>

              <h3 className="mt-6 text-4xl font-heading font-bold text-[#762E61]">
                Excellence
              </h3>

              <p className="mt-4 font-body text-gray-600 leading-7 text-xl">
                We pursue perfection in every service, using premium products
                and advanced techniques to deliver exceptional results.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white mb-20">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-400 flex items-center justify-center">
                <FaHeart className="text-3xl text-white" />
              </div>

              <h3 className="mt-6 text-4xl font-heading font-bold text-[#762E61]">
                Passion
              </h3>

              <p className="mt-4 font-body text-gray-600 leading-7 text-xl">
                Every haircut, color, and treatment is delivered with
                dedication, creativity, and genuine care for our clients.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300  bg-white mb-20">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-400 flex items-center justify-center">
                <FaRocket className="text-3xl text-white" />
              </div>

              <h3 className="mt-6 text-4xl font-heading font-bold text-[#762E61]">
                Innovation
              </h3>

              <p className="mt-4 font-body text-gray-600 leading-7 text-xl">
                We embrace the latest beauty trends, modern technology, and
                advanced techniques to provide a world-class salon experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-[#FBF8F5] ">
        <div className="meet text-center text-6xl font-bold text-[#7B3B69] font-body pt-20">Meet Our Team</div>
        <div className="cards_about flex gap-x-10 justify-around py-20">
          {/* Card 1 */}
          <div className="group w-[350px] bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Image Container */}
            <div className="overflow-hidden">
              <img
                src={Team1}
                alt="Alexandra Monroe"
                className="w-full h-[430px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="font-heading text-4xl font-bold text-[#7B3B69]">
                Alexandra Monroe
              </h3>

              <h4 className="mt-3 text-2xl font-semibold text-[#D17A00]">
                Founder & Creative Director
              </h4>

              <p className="mt-6 text-lg leading-9 text-gray-600 font-body">
                With 15+ years in luxury salons, Alex founded Studio 27 with a
                vision of creating the ultimate styling experience.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group w-[350px] bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Image Container */}
            <div className="overflow-hidden">
              <img
                src={Team2}
                alt="Marcus Thompson"
                className="w-full h-[430px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="font-heading text-4xl font-bold text-[#7B3B69]">
                Marcus Thompson
              </h3>

              <h4 className="mt-3 text-2xl font-semibold text-[#D17A00]">
                Lead Stylist
              </h4>

              <p className="mt-6 text-lg leading-9 text-gray-600 font-body">
                Award-winning colorist specializing in creative transformations
                and personalized color work.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group w-[350px] bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Image Container */}
            <div className="overflow-hidden">
              <img
                src={Team3}
                alt="Jessica Lee"
                className="w-full h-[430px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="font-heading text-4xl font-bold text-[#7B3B69]">
                Jessica Lee
              </h3>

              <h4 className="mt-3 text-2xl font-semibold text-[#D17A00]">
                Head Stylist
              </h4>

              <p className="mt-6 text-lg leading-9 text-gray-600 font-body">
                Expert in precision cuts and styling with a passion for helping
                clients discover their best look.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Journey Section  */}

      
    </div>
  );
}

export default About;
