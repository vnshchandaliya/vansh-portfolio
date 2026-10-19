
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaArrowUpRightFromSquare, FaInfinity } from "react-icons/fa6";
import "./Projects.css";

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

// Optimized video: load only when the card approaches the viewport.
function ProjectVideo({ project }) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Fallback for browsers without IntersectionObserver.
    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px 0px",
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad) return;

    const playVideo = () => {
      video.play().catch(() => {
        // Autoplay may be restricted by the browser.
      });
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo, { once: true });
    }

    return () => {
      video.removeEventListener("loadeddata", playVideo);
    };
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      className="work-image work-video"
      poster={project.image}
      muted
      loop
      playsInline
      autoPlay
      preload="none"
      aria-label={`${project.title} website preview`}
    >
      {shouldLoad && (
        <source src={project.video} type="video/mp4" />
      )}
    </video>
  );
}

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

          

       
        </header>

        <div className="work-grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`work-card work-card-${project.id}`}
              style={{ "--card-index": index }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="work-card-link"
                aria-label={`Visit ${project.title} website`}
              >
                <div
                  className={`work-image-wrap ${
                    project.device === "mobile"
                      ? "is-mobile"
                      : "is-desktop"
                  }`}
                >
                  {project.mediaType === "video" && project.video ? (
                    <ProjectVideo project={project} />
                  ) : (
                    <img
                      src={project.image}
                      alt={`${project.title} website preview`}
                      className="work-image"
                      loading="lazy"
                      decoding="async"
                    />
                  )}

                  <span className="work-image-number">
                    {String(project.id).padStart(2, "0")}
                  </span>

                  {/* <span className="work-card-arrow" aria-hidden="true">
                    <FaArrowUpRightFromSquare />
                  </span> */}
                </div>
              </a>

              {/* Uncomment if you want titles and tags below each card. */}
              {/*
              <div className="work-card-info">
                <div className="work-card-copy">
                  <h2 className="font-display">{project.title}</h2>
                  <p className="font-body">{project.subtitle}</p>
                </div>

                <div className="work-tags font-body">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              */}
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="work-empty font-body">
            <h2>No projects in this category yet.</h2>
            <p>Explore all projects to see the complete collection.</p>
            <button
              type="button"
              onClick={() => setActiveFilter("All")}
            >
              View all projects
            </button>
          </div>
        )}

        <div className="work-bottom-space" />
      </section>
    </main>
  );
};

export default Projects;
