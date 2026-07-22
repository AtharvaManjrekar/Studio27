import React from "react";
import BookingButton from "../components/BookingButton";
import Gallery_1 from "../assets/gallery-1.jpg";
import Gallery_2 from "../assets/gallery-2.jpg";
import Gallery_3 from "../assets/gallery-3.jpg";
import Gallery_4 from "../assets/gallery-4.jpg";
import Gallery_5 from "../assets/gallery-5.jpg";
import Gallery_6 from "../assets/gallery-6.jpg";

import { useState } from "react";

function Gallery() {
  const categories = ["All", "Cutting", "Color", "Styling"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const gallery = [
    { id: 1, image: Gallery_1, category: "Styling" },
    { id: 2, image: Gallery_2, category: "Cutting" },
    { id: 3, image: Gallery_3, category: "Color" },
    { id: 4, image: Gallery_4, category: "Cutting" },
    { id: 5, image: Gallery_5, category: "Styling" },
    { id: 6, image: Gallery_6, category: "Color" },

    // Repeat first three
    { id: 7, image: Gallery_1, category: "Styling" },
    { id: 8, image: Gallery_2, category: "Cutting" },
    { id: 9, image: Gallery_3, category: "Color" },
  ];

  const filteredGallery =
    selectedCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <div className="upperbody">
        <div className="hero h-screen relative">
          {/* Pink Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(107,59,74,0.6)_100%)]"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-6xl font-heading text-white leading-20 tracking-widest font-medium">
              Our Gallery
            </h1>

            <p className="mt-4 text-3xl text-white text-gray-300">
              Browse our portfolio of stunning transformations and styling work
            </p>
            <BookingButton />
          </div>
        </div>
      </div>
      <div className="lowerbody">
        <div className="pink_body flex justify-evenly gap-x-40 bg-[#F5E5E4] py-30 px-16">
          <div className="1">
            <span className="text-[#762E61] font-body font-black text-5xl">
              500+
            </span>{" "}
            <br />
            <span className="text-[#624C58] font-body font-extralight text-xl relative top-2">
              Happy Clients
            </span>
          </div>
          <div className="2">
            <span className="text-[#762E61] font-body font-black text-5xl">
              1000+
            </span>{" "}
            <br />
            <span className="text-[#624C58] font-body font-extralight text-xl relative top-2">
              Transformations
            </span>
          </div>
          <div className="3">
            <span className="text-[#762E61] font-body font-black text-5xl">
              15+{" "}
            </span>{" "}
            <br />
            <span className="text-[#624C58] font-body font-extralight text-xl relative top-2">
              Years Experience
            </span>
          </div>
        </div>
        <div className="white_section_for_photos flex justify-center gap-6 py-10 ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-36 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#762E61] text-white"
                  : "bg-[#C5B8B1] text-black hover:bg-[#D8CAC3]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 py-10 mb-25">
          {filteredGallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={`Gallery ${index + 1}`}
                className={`w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110
                }`}
              />

              <div className="absolute inset-0 bg-[#762E61]/0 group-hover:bg-[#762E61]/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>
        <div className="customer_reaction bg-[#F5E5E4] ">
          <div className="clients text-center font-body text-4xl text-[#762E61] leading-18 tracking-wider font-bold py-10">
            Clients Stories
          </div>
          <div className="clients grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 ">
            <div className="bg-[#FCF7F7] rounded-2xl p-8 shadow-[0_15px_35px_rgba(0,0,0,0.10)] hover:shadow-[0_20px_45px_rgba(118,46,97,0.18)] hover:-translate-y-2 transition-all duration-300 border border-[#F2EAEA]">
              <p className="text-[#6F5D68] text-lg leading-8 italic">
                "Studio 27 transformed my hair completely. The team is
                professional, warm, and so talented. I've never felt better
                about my look!"
              </p>

              <div className="w-16 h-[2px] bg-[#BF7402] my-6"></div>

              <h3 className="text-[#762E61] text-xl font-bold tracking-wide">
                Sarah M.
              </h3>

              <p className="text-[#9B8D95] text-sm mt-1">Client since 2021</p>
            </div>

            <div className="bg-[#FCF7F7] rounded-2xl p-8 shadow-[0_15px_35px_rgba(0,0,0,0.10)] hover:shadow-[0_20px_45px_rgba(118,46,97,0.18)] hover:-translate-y-2 transition-all duration-300 border border-[#F2EAEA]">
              <p className="text-[#6F5D68] text-lg leading-8 italic">
                "Absolutely love my balayage! Every appointment feels luxurious
                and the staff always make me feel welcome."
              </p>

              <div className="w-16 h-[2px] bg-[#BF7402] my-6"></div>

              <h3 className="text-[#762E61] text-xl font-bold tracking-wide">
                Emily R.
              </h3>

              <p className="text-[#9B8D95] text-sm mt-1">Client since 2020</p>
            </div>

            <div className="bg-[#FCF7F7] rounded-2xl p-8 shadow-[0_15px_35px_rgba(0,0,0,0.10)] hover:shadow-[0_20px_45px_rgba(118,46,97,0.18)] hover:-translate-y-2 transition-all duration-300 border border-[#F2EAEA]">
              <p className="text-[#6F5D68] text-lg leading-8 italic">
                "The best salon experience I've ever had. Professional stylists,
                relaxing atmosphere, and beautiful results every time."
              </p>

              <div className="w-16 h-[2px] bg-[#BF7402] my-6"></div>

              <h3 className="text-[#762E61] text-xl font-bold tracking-wide">
                Jessica L.
              </h3>

              <p className="text-[#9B8D95] text-sm mt-1">Client since 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
