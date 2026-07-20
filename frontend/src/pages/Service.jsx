import React from "react";
import BookingButton from "../components/BookingButton";
import Service1 from "../assets/service-1.jpg";
import Service2 from "../assets/service-2.jpg";
import Service3 from "../assets/service-3.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Service() {
  const services = [
    {
      id: 1,
      name: "Precision Haircut",
      category: "Cutting",
      image: Service1,
      price: "$65",
      description:
        "Custom-tailored haircuts designed to complement your face shape and personal style. Includes professional styling consultation.",
    },
    {
      id: 2,
      name: "Blowout & Style",
      category: "Styling",
      image: Service1,
      price: "$45",
      description:
        "Professional blow-dry and styling service perfect for events, dates, or everyday elegance.",
    },
    {
      id: 3,
      name: "Hair Coloring",
      category: "Coloring",
      image: Service2,
      price: "$95",
      description:
        "Full color service using premium products. From classic to bold, we create the perfect shade for you.",
    },
    {
      id: 4,
      name: "Balayage Highlights",
      category: "Coloring",
      image: Service2,
      price: "$120",
      description:
        "Hand-painted highlights for a natural, sun-kissed look with dimensional depth and movement.",
    },
    {
      id: 5,
      name: "Root Touch-up",
      category: "Coloring",
      image: Service2,
      price: "$65",
      description:
        "Refresh your look with a professional root color touch-up service between full color treatments.",
    },
    {
      id: 6,
      name: "Hair Treatment",
      category: "Treatment",
      image: Service3,
      price: "$45",
      description:
        "Deep conditioning and intensive treatments to restore shine, strength, and vitality to your hair.",
    },
    {
      id: 7,
      name: "Keratin Treatment",
      category: "Treatment",
      image: Service3,
      price: "$150",
      description:
        "Smoothing treatment for frizz control and manageability. Results last 3–4 months.",
    },
    {
      id: 8,
      name: "Scalp Massage & Therapy",
      category: "Treatment",
      image: Service3,
      price: "$55",
      description:
        "Relaxing scalp massage combined with therapeutic treatment for hair health and stress relief.",
    },
    {
      id: 9,
      name: "Updo Styling",
      category: "Styling",
      image: Service1,
      price: "$85",
      description:
        "Elegant updos for weddings, events, and special occasions. Includes consultation and preview.",
    },
  ];

  const categories = ["All", "Cutting", "Styling", "Coloring", "Treatment"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category == selectedCategory);

  return (
    <div>
      <div className="hero h-screen relative">
        {/* Pink Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(107,59,74,0.6)_100%)]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-6xl font-heading text-white leading-20 tracking-widest font-medium">
            Our Services
          </h1>

          <p className="mt-4 text-3xl  text-gray-300">
            Professional hair and beauty services tailored to your needs
          </p>
          <BookingButton />
        </div>
      </div>
      <div className="flex justify-center gap-6 py-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-36 py-3 rounded-lg font-semibold transition-all duration-300
            ${
              selectedCategory === category
                ? "bg-[#6A2957] text-white shadow-lg"
                : "bg-[#C5B8B1] hover:bg-[#E8DCC4]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="services grid grid-cols-3 gap-x-10 px-5 justify-items-center pb-20">
        {/* Card 1 */}
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="card w-full max-w-105 bg-white rounded-2xl shadow-md overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-[1.2]"
              />

              <div className="absolute inset-0 bg-[#762E61]/40 opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
            </div>

            <div className="p-5">
              <h2 className="text-2xl font-bold text-[#6A2957]">
                {service.name}
              </h2>

              <p className="mt-4 text-[#7A6B75]">{service.description}</p>

              <div className="mt-5 flex justify-between items-center">
                <span className="text-2xl font-bold text-[#BF7402]">
                  From {service.price}
                </span>

                <Link to="/booking">Book Now →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="third bg-[#F5E5E4] pt-20">
        <div className="service text-center font-body font-bold mb-10 text-6xl text-[#762E61]">
          Service Add-Ons
        </div>
        <div className="grid grid-cols-2 justify-items-center items-center gap-y-10 pb-20">
          {/* Card 1 */}
          <div className="cards rounded-xl w-2/3 px-10 py-5 bg-[#FAF5F5] shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(118,46,97,0.18)]">
            <div className="line1 text-[#762E61] text-3xl font-body font-bold">
              Express Treatment
            </div>
            <div className="line2 text-lg font-light text-[#6F5D68]">
              Quick 15-minute revitalizing treatment perfect before any service.
            </div>
            <div className="line3 font-black font-body text-xl mt-5 text-[#BF7402] ">
              +$15
            </div>
          </div>

          <div className="cards rounded-xl w-2/3 px-10 py-5 bg-[#FAF5F5] shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(118,46,97,0.18)]">
            <div className="line1 text-[#762E61] text-3xl font-body font-bold">
              Express Treatment
            </div>
            <div className="line2 text-lg font-light text-[#6F5D68]">
              Quick 15-minute revitalizing treatment perfect before any service.
            </div>
            <div className="line3 font-black font-body text-xl mt-5 text-[#BF7402] ">
              +$15
            </div>
          </div>

          <div className="cards rounded-xl w-2/3 px-10 py-5 bg-[#FAF5F5] shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(118,46,97,0.18)]">
            <div className="line1 text-[#762E61] text-3xl font-body font-bold">
              Express Treatment
            </div>
            <div className="line2 text-lg font-light text-[#6F5D68]">
              Quick 15-minute revitalizing treatment perfect before any service.
            </div>
            <div className="line3 font-black font-body text-xl mt-5 text-[#BF7402] ">
              +$15
            </div>
          </div>

          <div className="cards rounded-xl w-2/3 px-10 py-5 bg-[#FAF5F5] shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(118,46,97,0.18)]">
            <div className="line1 text-[#762E61] text-3xl font-body font-bold">
              Express Treatment
            </div>
            <div className="line2 text-lg font-light text-[#6F5D68]">
              Quick 15-minute revitalizing treatment perfect before any service.
            </div>
            <div className="line3 font-black font-body text-xl mt-5 text-[#BF7402] ">
              +$15
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Service;
