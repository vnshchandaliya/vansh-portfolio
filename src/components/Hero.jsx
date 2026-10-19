
import React from "react";
import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

// import ProjectOne from "../assets/projectImg/project1.png";
// import ProjectTwo from "../assets/projectImg/project2.png";
// import ProjectThree from "../assets/projectImg/project3.png";
// import ProjectFour from "../assets/projectImg/project4.png";
// import ProjectFive from "../assets/projectImg/project5.png";
// import ProjectSix from "../assets/projectImg/project6.png";

const projects = [
  {
    id: 1,
    title: "Landing Page",
    image:" /projectImg/pro1.png",
    category: "Landing Page",
    link: "https://vcteam.in/",
  },
  {
    id: 2,
    title: "Property Rentals",
    image:" /projectImg/pro2.png",
    category: "Rentals Website",
    link: "https://digifyamerica.com/",
  },
  {
    id: 3,
    title: "Property Rentals",
    image:" /projectImg/pro3.png",
    category: "Rental Website",
    link: "https://www.coastaldreamrentals.com/",
  },
  {
    id: 4,
    title: "Property Rentals",
    image:" /projectImg/pro4.png",
    category: "Property Website",
    link: "https://jyotfoundation.in/",
  },
  {
    id: 5,
    title: "Travel Website",
    image:"/projectImg/project1.png",
    category: "Tour & Travel",
    link: "https://newvilla4.mydesign.blog/",
  },
  {
    id: 6,
    title: "Dashboard ",
  image: "/projectImg/Dashboard1.png",
    category: "Admin Dashboard",
    link: "https://landscapers.mydesign.blog/",
  },
];

const MarqueeRow = ({ items, reverse = false }) => {
  const repeatedProjects = [...items, ...items];

  return (
    <div className="project-marquee overflow-hidden">
      <div
        className={`project-marquee-track ${
          reverse ? "project-marquee-reverse" : ""
        }`}
      >
        {repeatedProjects.map((project, index) => (
          <a
            key={`${project.id}-${index}`}
            
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} project`}
            tabIndex={index >= items.length ? -1 : 0}
            className="project-marquee-card group"
          >
            <div className="relative h-full overflow-hidden rounded-[18px] bg-neutral-100">
              <img
                src={project.image}
                alt={`${project.title} website preview`}
                loading={index < 3 ? "eager" : "lazy"}
                draggable="false"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white sm:p-5">
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs">
                    {project.category}
                  </p>
                  <h3 className="text-base font-semibold sm:text-lg">
                    {project.title}
                  </h3>
                </div>

                
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="portfolio-hero relative flex min-h-screen flex-col overflow-hidden  pt-28 text-black sm:pt-32"
    >
      {/* Subtle monochrome background */}
      <div className="hero-pattern pointer-events-none absolute inset-0" />

      {/* Hero Content */}
      <div className=" relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col items-center justify-center px-4 pb-10 text-center sm:px-8 sm:pb-14">
        <p className="hero-reveal mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500 sm:text-xs">
          Independent Web Developer · Available for Projects
        </p>

        <h1 className="hero-heading font-display max-w-[1200px] font-serif text-[clamp(2.5rem,6.7vw,6.5rem)] leading-[1.05] tracking-[-0.055em]">
          <span className="hero-heading-line block font-display">
            we're Design & Build
          </span>

          <span className="hero-heading-line mt-2 font-display block">
            <span className="  italic text-[#3434ff]">
              Websites,
            </span>{" "}
            <span className="  font-medium tracking-[-0.07em] text-[#3434ff]">
              Landing Pages
            </span>
          </span>

          <span className="hero-heading-line font-display mt-2 block">
            <span className="  italic">&</span>{" "}
            <span className="  font-medium tracking-[-0.07em] ">
              Dashboards.
            </span>
          </span>
        </h1>

        <p className="hero-reveal mt-6 max-w-2xl text-sm leading-7 text-neutral-600 sm:mt-8 sm:text-base sm:leading-8">
          I create modern, responsive digital experiences
          that combine thoughtful design, clean development
          and smooth interactions.
        </p>

        <div className="hero-reveal mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9">
          <Link
            to="/work"
            className="group inline-flex items-center gap-3 rounded-2xl bg-black px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800 sm:px-7"
          >
            Explore My Work
            <ArrowDownRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </Link>

          <a
            href="mailto:vanshweb73@gmail.com"
            className="inline-flex items-center gap-2 rounded-2xl border border-black/15 px-6 py-4 text-sm font-medium text-black transition-colors duration-300 hover:bg-neutral-100 sm:px-7"
          >
            Let's Talk
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="hero-reveal mt-6 flex items-center gap-2 text-xs text-neutral-500 sm:text-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-black" />
          </span>
          Open to freelance projects
        </div>
      </div>

      {/* Dual Project Marquee */}
      <div className="relative z-10 mt-auto space-y-3 pb-6 sm:space-y-4 sm:pb-8">
        <MarqueeRow items={projects} />

        <MarqueeRow
          items={[...projects].reverse()}
          reverse
        />

{/* View All Works */}
<div className="relative flex justify-center px-4 pb-10 pt-8 sm:pt-12">
  <Link
    to="/work"
    className="group relative z-10 inline-flex items-center gap-3
    rounded-2xl border border-black/5 bg-white px-7 py-4
    text-md font-medium text-black  shadow-[0_5px_20px_rgba(0,0,0,0.08)]
    transition-all duration-300 hover:-translate-y-1
    hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
  >
    View all works

    <ArrowUpRight
      size={17}
      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </Link>

  {/* Hand-drawn curved arrow */}
  <svg
    className="pointer-events-none absolute left-[calc(50%+65px)] top-[-5px]
    hidden h-[100px] w-[150px] overflow-visible sm:block"
    viewBox="0 0 150 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M 105 8 C 101 35, 85 55, 43 72"
      stroke="black"
      strokeWidth="2.7"
      strokeLinecap="round"
    />

    <path
      d="M 55 57 L 42 73 L 62 77"
      stroke="black"
      strokeWidth="2.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

      </div>
    </section>
  );
};

export default Hero;
