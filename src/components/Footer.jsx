
import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import "./Footer.css";


const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#service" },
    { label: "Work", href: "/work" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* <div className="footer-top-label">
          <span className="footer-status-dot" />
          AVAILABLE FOR SELECT PROJECTS
        </div> */}

        {/* <h2 className="font-display footer-big-title">
          Let's make
          <br />
          <span className="italic">something great.</span>
        </h2> */}

        {/* <p className="font-body footer-description">
          Thoughtful design. Clean development.
          <br className="hidden sm:block" />
          Digital experiences built with purpose.
        </p> */}

        {/* <a
          href="mailto:vanshweb73@gmail.com?subject=Project%20Inquiry"
          className="footer-cta font-body"
        >
          Start a project
          <ArrowUpRight size={19} />
        </a> */}

        {/* <a
          href="mailto:vanshweb73@gmail.com"
          className="footer-email font-body"
        >
          or email me at vanshweb73@gmail.com
        </a> */}

        {/* <div className="footer-wordmark-wrap" aria-hidden="true">
          <span className="font-display footer-wordmark">
            Vansh.
          </span>
        </div> */}
      </div>

      {/* Bottom navigation with frosted blur */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <Link to="/" className="footer-brand font-body">
         <img
                        src="/Logo.png"
                        alt="VanCode Logo"
                        className="w-28 h-auto object-contain sm:w-36 md:w-44 lg:w-20 z-9999"
                    />
          </Link>

          <nav className="footer-nav font-body" aria-label="Footer navigation">
            {links.map((link) => (
              <React.Fragment key={link.label}>
                {link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link to={link.href}>{link.label}</Link>
                ) : (
                  <a href={link.href}>{link.label}</a>
                )}
              </React.Fragment>
            ))}
          </nav>

         
<div className="footer-socials">
  <a
    href="https://www.linkedin.com/in/programing-hub-3a5952270/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn size={17} />
  </a>

  <a
    href="https://github.com/vnshchandaliya"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub size={17} />
  </a>

  <a
    href="https://www.instagram.com/vanshweb/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram size={17} />
  </a>

  <a
    href="mailto:vanshweb73@gmail.com"
    aria-label="Email"
  >
    <FaEnvelope size={17} />
  </a>
</div>

        </div>

        <div className="footer-copyright font-body">
          <span>© {year} Vansh Chandaliya</span>
          <span>Designed & built with care.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
