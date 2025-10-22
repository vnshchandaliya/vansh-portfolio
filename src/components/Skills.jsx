import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaBootstrap,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import { SiVite, SiTailwindcss, SiCanva } from "react-icons/si";

const skillsLeft = [
  { title: "React", percent: 90 },
  { title: "Vite", percent: 85 },
  { title: "Tailwind CSS", percent: 88 },
  { title: "JavaScript", percent: 80 },
  { title: "SQL", percent: 70 },
];

const skillsRight = [
  { title: "Node.js", percent: 75 },
  { title: "WordPress", percent: 85 },
  { title: "Canva", percent: 95 },
  { title: "Bootstrap", percent: 78 },
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-6 md:px-16 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">

        {/* ==== Left Section ==== */}
        <div className="md:w-1/2 space-y-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            My <span className="text-cyan-400">Professional</span> <br />
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-lg">
            I specialize in creating responsive, high-performance web apps using
            modern technologies like React, Tailwind, and Vite — combining
            creativity with efficiency for seamless user experiences.
          </p>

          {/* Circle Icons */}
          <div className="flex justify-center md:justify-start gap-10 mt-10 flex-wrap">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full border border-cyan-500 flex items-center justify-center bg-[#0f172a]"
            >
              <FaReact className="text-4xl text-cyan-400" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full border border-cyan-500 flex items-center justify-center bg-[#0f172a]"
            >
              <SiVite className="text-4xl text-yellow-400" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full border border-cyan-500 flex items-center justify-center bg-[#0f172a]"
            >
              <SiTailwindcss className="text-4xl text-sky-400" />
            </motion.div>
          </div>
        </div>

        {/* ==== Right Section ==== */}
        <div className="md:w-1/2 grid md:grid-cols-2 gap-10 w-full">

          {/* Left column bars */}
          <div className="space-y-6">
            {skillsLeft.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2 text-gray-300 text-sm">
                  <span>{skill.title}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full h-[6px] bg-slate-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: inView ? `${skill.percent}%` : 0,
                    }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column bars */}
          <div className="space-y-6">
            {skillsRight.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2 text-gray-300 text-sm">
                  <span>{skill.title}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full h-[6px] bg-slate-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: inView ? `${skill.percent}%` : 0,
                    }}
                    transition={{ duration: 1.5, delay: i * 0.3 }}
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}

            {/* Tool Icons */}
            <div className="flex gap-6 mt-6 justify-center md:justify-start flex-wrap">
              <FaWordpress className="text-3xl text-cyan-400 hover:text-cyan-300 transition" />
              <FaBootstrap className="text-3xl text-cyan-400 hover:text-cyan-300 transition" />
              <SiCanva className="text-3xl text-cyan-400 hover:text-cyan-300 transition" />
              <FaNodeJs className="text-3xl text-cyan-400 hover:text-cyan-300 transition" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
