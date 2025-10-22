import React, { useRef } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import ProjectOne from "../assets/projectImg/project1.png";
import ProjectTwo from "../assets/projectImg/project2.png";
import ProjectThree from "../assets/projectImg/project3.png";
import ProjectFour from "../assets/projectImg/project4.png";
import ProjectFive from "../assets/projectImg/project5.png";

const projects = [
  {
    id: 1,
    title: "Tour & Travel",
    image: ProjectOne,
    tags: ["React", "Tailwind", "Node"],
    link: "https://vcteam.in/",
  },
  {
    id: 2,
    title: "Web Design Company",
    image: ProjectTwo,
    tags: ["React", "Tailwind", "Node", "MongoDB"],
    link: "https://digifyamerica.com/",
  },
  {
    id: 3,
    title: "Property Rentals",
    image: ProjectThree,
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://www.coastaldreamrentals.com/",
  },
  {
    id: 4,
    title: "Foundation",
    image: ProjectFour,
    tags: ["WordPress"],
    link: "https://jyotfoundation.in/",
  },
  {
    id: 5,
    title: "E-Commerce Website",
    image: ProjectFive,
    tags: ["React", "Tailwind", "Node", "MongoDB"],
    link: "https://newvilla4.mydesign.blog/",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === "left"
          ? -scrollRef.current.offsetWidth / 2
          : scrollRef.current.offsetWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-8xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-3">
            My <span className="text-cyan-400">Works</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Showcasing my creative and technical expertise through diverse digital projects.
          </p>
        </div>

        {/* Arrows */}
        <div className="absolute left-6 top-1/9 -translate-y-1/2 z-10 hidden md:block">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full shadow hover:bg-gray-900 transition"
          >
            <FaLongArrowAltLeft className="text-[50px] cursor-pointer" />
          </button>
        </div>
        <div className="absolute right-6 top-1/9 -translate-y-1/2 z-10 hidden md:block">
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full shadow hover:bg-gray-900 transition"
          >
            <FaLongArrowAltRight className="text-[50px] cursor-pointer" />
          </button>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[300px] sm:min-w-[350px] lg:min-w-[800px] rounded-3xl relative snap-center group shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[440px] object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-6 text-white transition-all duration-500 group-hover:from-black/80">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-white/20 rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
