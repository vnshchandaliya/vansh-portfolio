import React from "react";
import {
  FiMonitor,
  FiImage,
  FiTrendingUp,
  FiShare2,
  FiShoppingCart,
  FiLayers,
} from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Responsive Website",
    icon: <FiMonitor size={26} />,
    desc: "Fully responsive, SEO-friendly, and fast-loading websites for all devices.",

  },
  {
    id: 2,
    title: "Graphic Design",
    icon: <FiImage size={26} />,
    desc: "Creative designs for branding, marketing, and digital presence.",
 
  },
  {
    id: 3,
    title: "SEO Optimization",
    icon: <FiTrendingUp size={26} />,
    desc: "Boost your online visibility and rank higher on search engines.",
 
  },
  {
    id: 4,
    title: "Social Media Marketing",
    icon: <FiShare2 size={26} />,
    desc: "Grow your audience and engagement with strategic social media marketing.",
   
  },
  {
    id: 5,
    title: "E-Commerce Website",
    icon: <FiShoppingCart size={26} />,
    desc: "Build powerful and secure online stores that convert visitors into buyers.",
    
  },
  {
    id: 6,
    title: "Brand Strategy & Identity",
    icon: <FiLayers size={26} />,
    desc: "Develop a strong brand presence with consistent and creative design elements.",
   
  },
];

const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_Analytics_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/31/CreativeMarket_logo.png",
];

const Service = () => {
  return (
    <section className="py-20  text-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="mt-4 text-white max-w-2xl mx-auto">
            We provide top-notch digital solutions to help your business grow — from
            websites and branding to marketing and eCommerce.
          </p>
        </div>

        {/* Responsive Scroll/Grid Layout */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible">
          
         {services.map((item) => (
  <div
    key={item.id}
    className="min-w-[260px] sm:min-w-0 snap-center rounded-2xl p-6 transition-all duration-300 
               hover:-translate-y-2 hover:shadow-2xl 
               hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500"
  >
    <div className="flex items-center gap-4 mb-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-violet-600">
        {item.icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
    </div>
    <p className="text-sm opacity-80 leading-relaxed text-white">{item.desc}</p>
  </div>
))}

        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-10">
          <a
            href="#projects"
            className="inline-block px-6 py-3 rounded-full bg-violet-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            View All Services
          </a>
        </div> */}

        {/* Brand Logos */}
        {/* <div className="flex flex-wrap justify-center items-center gap-10 mt-14 opacity-80">
          {brands.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="brand logo"
              className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Service;
