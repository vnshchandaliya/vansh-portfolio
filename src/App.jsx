
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Service from "./components/ServiceSection";

import Projects from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Service />
      <FAQ />
      <Contact />
    </>
  );
}

function Work() {
  return <Projects />;
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-black">
      <Navbar />

      <main key={location.pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
