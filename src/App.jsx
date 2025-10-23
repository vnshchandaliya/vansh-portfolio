import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Service from "./components/ServiceSection";
import Projects from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";





function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Hero />
     <About />
     <Skills/>
     <Service />
     <Projects />
     <Contact />
<Footer />
    </div>
     
  );
}

export default App;
