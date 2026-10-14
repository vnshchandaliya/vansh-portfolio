
import React, { useEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  LayoutTemplate,
  PanelsTopLeft,
  Code2,
  Smartphone,
} from "lucide-react";

const services = [
  { number: "01", title: "Website Design", icon: LayoutTemplate },
  { number: "02", title: "Landing Pages", icon: PanelsTopLeft },
  { number: "03", title: "Dashboard Development", icon: Code2 },
  { number: "04", title: "Responsive Development", icon: Smartphone },
];

const About = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (event) => {
    if (!previewRef.current) return;

    const rect = previewRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 5;
    const rotateX = (0.5 - y) * 5;

    previewRef.current.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-3px)
    `;
  };

  const resetTilt = () => {
    if (previewRef.current) {
      previewRef.current.style.transform =
        "perspective(1200px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section scroll-mt-20 px-4 py-20 sm:px-8 md:py-28"
    >
        <div className=" relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col items-center justify-center px-4 pb-10 text-center sm:px-8 sm:pb-14">
        {/* Section introduction */}
        <div className="about-intro">
           

          <h2 className="font-display about-heading">
           What We Stand For
            <br />
            {/* <span className="italic">DIGITAL EXPERIENCES.</span> */}
          </h2>
        </div>

        {/* Two-column content */}
        <div className="about-grid">
          {/* Left: featured project video */}
          <div className="about-feature">
            <div
              ref={previewRef}
              className="about-video-frame"
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
            >
              <div className="about-browser-bar">
                <div className="about-browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                
                
              </div>

              <div className="about-video-window">
                <video
                  ref={videoRef}
                  src="/videos/featured-project.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="about-project-video"
                  aria-label="Scrolling preview of my featured website project"
                />
              </div>
            </div>

            <div className="about-project-caption">
              <div>
                 
                <h3 className="font-display">
                  Built with purpose.
                </h3>
              </div>

              <a href="/work" className="about-arrow-link">
                <ArrowDownRight size={21} />
              </a>
            </div>

            <p className="about-feature-description">
              From the first visual concept to the final responsive
              experience, every detail has a purpose.
            </p>
          </div>

          {/* Right: introduction and services */}
          <div className="about-services">
            

            <h3 className="about-services-heading font-display">
              Thoughtful design.
              <br />
              Reliable development.
            </h3>

            <p className="about-services-description">
              I help businesses bring their ideas online with
              visually polished, user-friendly digital experiences.
            </p>

            <div className="about-service-list">
              {services.map(({ number, title, icon: Icon }) => (
                <div className="about-service-item" key={number}>
                  <span className="about-service-number">
                    {number}
                  </span>

                  <span className="about-service-title">
                    {title}
                  </span>

                  <Icon
                    className="about-service-icon"
                    size={19}
                    strokeWidth={1.5}
                  />
                </div>
              ))}
            </div>

            <div className="about-bottom">
              <div>
                <span className="about-bottom-title">
                  HAVE A PROJECT IN MIND?
                </span>
                <p>Let's make it happen.</p>
              </div>

              <a
                href="mailto:vanshweb73@gmail.com"
                className="about-contact-link"
                aria-label="Contact me about a project"
              >
                <ArrowUpRight size={21} />
              </a>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default About;
