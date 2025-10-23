import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
import aboutImg from "../assets/vansh-img/IMG_2448.jpg"; // 🖼️ Replace with your image

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 flex justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100"
    >
      <div className="max-w-6xl w-full bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center md:items-start p-8 md:p-16">
        {/* ==== Left Image Section ==== */}
        <div className="relative flex flex-col items-center md:w-1/2">
          <div className="bg-slate-700 rounded-2xl overflow-hidden shadow-md w-64 h-64 md:w-80 md:h-80">
            <img
              src={aboutImg}
              alt="Vansh Chandaliya"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Social Icons */}
          <div className="absolute -bottom-8 bg-slate-900/80 border border-slate-700 px-6 py-3 rounded-xl shadow-lg flex gap-5 backdrop-blur-md">
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 text-xl transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            {/* <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 text-xl transition-all duration-300"
            >
              <FaDribbble />
            </a> */}
            <a
              href="https://www.instagram.com/vanshweb/"
              className="text-cyan-400 hover:text-cyan-300 text-xl transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/programing-hub-3a5952270/"
              className="text-cyan-400 hover:text-cyan-300 text-xl transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
            {/* <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 text-xl transition-all duration-300"
            >
              <FaBehance />
            </a> */}
          </div>
        </div>

        {/* ==== Right Content Section ==== */}
        <div className="mt-16 md:mt-0 md:ml-16 md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            I am Professional Frontend Developer
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            I design and develop modern, responsive, and creative web
            experiences using
            <span className="text-cyan-400 font-semibold"> React, Tailwind,</span> and
            <span className="text-cyan-400 font-semibold"> Vite.</span> My passion
            is creating digital interfaces that merge beautiful design with solid
            functionality.
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I specialize in stylish and user-centered websites for clients,
            ensuring fast performance, mobile responsiveness, and great UX.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            >
              My Projects
            </a>
            {/* <a
              href="/cv.pdf"
              download
              className="flex items-center justify-center gap-2 border border-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v12m0 0l-3-3m3 3l3-3m-9 7h12"
                />
              </svg>
              Download CV
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
