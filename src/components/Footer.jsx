import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">
            Vansh <span className="text-cyan-400">Chandaliya</span>
          </h2>
          <p className="text-sm mt-2 text-gray-400">
            Crafting modern, responsive & impactful websites with passion 🚀
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex justify-center md:justify-center">
          <ul className="flex flex-wrap justify-center gap-5 text-sm">
            <li>
              <a
                href="#home"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex justify-center md:justify-end gap-5">
          <a
            href="mailto:vanshweb73@gmail.com"
            className="text-xl hover:text-cyan-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/programing-hub-3a5952270//"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/vnshchandaliya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>
          {/* <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-cyan-400 transition duration-300"
          >
            <FaTwitter />
          </a> */}
          <a
            href="https://www.instagram.com/vanshweb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-cyan-400 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-cyan-400 font-semibold">Vansh Chandaliya</span>.
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
