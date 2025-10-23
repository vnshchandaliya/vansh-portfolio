import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/vansh-img/WhatsApp Image 2025-10-23 at 2.42.56 AM.jpeg"; // 🖼️ replace with your image name

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* ===== Left Text Section ===== */}
      <motion.div
        className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Hi, I'm{" "}
          <span className="text-cyan-400 drop-shadow-lg"></span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
          Frontend Developer | React | Tailwind | Node.js
        </h2>

        <p className="text-gray-400 mb-8 leading-relaxed">
          I build modern, responsive, and creative websites that help businesses
          stand out online. I love turning ideas into interactive digital
          experiences.
        </p>

        <motion.a
          href="#projects"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* ===== Right Image Section ===== */}
      <motion.div
        className="relative group"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Glowing Circle Background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>

        {/* Profile Image */}
        <div className="relative w-64 h-64 md:w-90 md:h-90 rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl">
          <img
            src={heroImg}
            alt="Vansh Chandaliya"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
