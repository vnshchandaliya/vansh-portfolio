
import React, { useMemo, useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaInfinity,
} from "react-icons/fa6";
// import ProjectOne from "../assets/projectImg/project1.png";
// import ProjectTwo from "../assets/projectImg/project2.png";
// import ProjectThree from "../assets/projectImg/project3.png";
// import ProjectFour from "../assets/projectImg/project4.png";
// import ProjectFive from "../assets/projectImg/project5.png";
// import ProjectSix from "../assets/projectImg/project6.png";
import "./Projects.css";

// const projects = [
//   {
//     id: 1,
//     title: "Tour & Travel",
//     subtitle: "Travel experiences, thoughtfully designed.",
//     image: "/projectImg/pro5.png",
//     tags: ["React", "Tailwind", "Node.js"],
//     categories: ["Websites", "Landing Pages"],
//     link: "https://vcteam.in/",
//   },
//   // {
//   //   id: 2,
//   //   title: "Web Design Company",
//   //   subtitle: "A modern digital presence for a creative agency.",
//   //   image: ProjectTwo,
//   //   tags: ["React", "Tailwind", "MongoDB"],
//   //   categories: ["Websites", "Landing Pages"],
//   //   link: "https://digifyamerica.com/",
//   // },
//   // {
//   //   id: 3,
//   //   title: "Property Rentals",
//   //   subtitle: "A seamless experience for discovering stays.",
//   //   image: ProjectThree,
//   //   tags: ["HTML", "CSS", "JavaScript", "PHP"],
//   //   categories: ["Websites", "Landing Pages"],
//   //   link: "https://www.coastaldreamrentals.com/",
//   // },
//   // {
//   //   id: 4,
//   //   title: "Jyot Foundation",
//   //   subtitle: "A digital platform for a meaningful mission.",
//   //   image: ProjectFour,
//   //   tags: ["WordPress"],
//   //   categories: ["Websites"],
//   //   link: "https://jyotfoundation.in/",
//   // },
//   // {
//   //   id: 5,
//   //   title: "E-Commerce Website",
//   //   subtitle: "A clean storefront built around the product.",
//   //   image: ProjectFive,
//   //   tags: ["React", "Tailwind", "Node.js", "MongoDB"],
//   //   categories: ["Websites", "E-Commerce"],
//   //   link: "https://newvilla4.mydesign.blog/",
//   // },
//   // {
//   //   id: 6,
//   //   title: "Landscapers",
//   //   subtitle: "A polished website for a service business.",
//   //   image: ProjectSix,
//   //   tags: ["React", "Tailwind"],
//   //   categories: ["Websites", "Landing Pages"],
//   //   link: "https://landscapers.mydesign.blog/",
//   // },
// ];

 const projects = [
  {
    id: 1,
    title: "Tour & Travel",
    subtitle: "Travel experiences, thoughtfully designed.",
    image: "/projectImg/pro5.png",
    video: "/projectImg/travel-preview.mp4",
    mediaType: "video",
    device: "mobile",
    tags: ["React", "Tailwind", "Node.js"],
    categories: ["Websites", "Landing Pages"],
    link: "https://vcteam.in/",
  },
  {
    id: 2,
    title: "Responsive Website",
    subtitle: "A responsive experience for every screen.",
    image: "/projectImg/pro1.png",
    video: "/projectImg/landing-Video.mp4",
    mediaType: "video",
    device: "desktop",
    tags: ["React", "Responsive UI"],
    categories: ["Websites"],
    link: "https://example.com/",
  },
  {
    id: 3,
    title: "Creative Website",
    subtitle: "A modern digital experience.",
    image: "/projectImg/pro6.png",
    video: "",
    mediaType: "image",
    device: "desktop",
    tags: ["React", "Responsive UI"],
    categories: ["Websites"],
    link: "https://example.com/",
  },
  {
    id: 4,
    title: "Admin Dashboard",
    subtitle: "A dashboard built for clarity.",
    image: "/projectImg/Dashboard1.png",
    mediaType: "image",
    device: "desktop",
    tags: ["React", "Dashboard"],
    categories: ["Dashboards"],
    link: "https://example.com/",
  },
  {
    id: 5,
    title: "Business Website",
    subtitle: "A polished online presence.",
    image: "/projectImg/pro4.png",
    mediaType: "image",
    device: "desktop",
    tags: ["React", "Responsive UI"],
    categories: ["Websites"],
    link: "https://example.com/",
  },
  {
    id: 6,
    title: "Business Website",
    subtitle: "A polished online presence.",
    image: "/projectImg/pro4.png",
   video: "/projectImg/digify.mp4",
    mediaType: "video",
    device: "desktop",
    tags: ["React", "Responsive UI"],
    categories: ["Websites"],
    link: "https://example.com/",
  },
];

const filters = [
  "All",
  "Websites",
  "Landing Pages",
  "Dashboards",
  "E-Commerce",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <main className="work-page" id="projects">
      <section className="work-container">
        {/* Page heading */}
        <header className="work-header">
           
          <h1 className="work-title font-display">
            Showcase of Our
            <br />
            <span>Best Works</span>
          </h1>

          <p className="work-description font-body">
            A collection of websites and digital experiences
            designed to turn ideas into something meaningful.
          </p>

          <div className="work-count font-body">
            <span>SELECTED WORK</span>
            <span>
              {String(filteredProjects.length).padStart(2, "0")} PROJECTS
            </span>
          </div>
        </header>

        {/* Projects grid */}
        <div className="work-grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`work-card work-card-${project.id}`}
              style={{ "--card-index": index }}
            >
              <a
               
                target="_blank"
                rel="noopener noreferrer"
                className="work-card-link"
                aria-label={`Visit ${project.title} website`}
              >
                
<div
  className={`work-image-wrap ${
    project.device === "mobile" ? "is-mobile" : "is-desktop"
  }`}
>
  {project.mediaType === "video" ? (
    <video
      className="work-image work-video"
      src={project.video}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={`${project.title} website scrolling preview`}
    />
  ) : (
    <img
      src={project.image}
      alt={`${project.title} website preview`}
      className="work-image"
      loading={index < 2 ? "eager" : "lazy"}
    />
  )}

  <span className="work-image-number">
    {String(project.id).padStart(2, "0")}
  </span>
</div>

              </a>

              {/* <div className="work-card-info">
                <div className="work-card-copy">
                  <h2 className="font-display">{project.title}</h2>
                  <p className="font-body">{project.subtitle}</p>
                </div>

                <div className="work-tags font-body">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div> */}
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="work-empty font-body">
            <h2>No projects in this category yet.</h2>
            <p>Explore all projects to see the complete collection.</p>
            <button onClick={() => setActiveFilter("All")}>
              View all projects
            </button>
          </div>
        )}

        {/* Bottom breathing room for floating filters */}
        <div className="work-bottom-space" />
      </section>

      {/* Floating filter bar */}
     
    </main>
  );
};

export default Projects;
