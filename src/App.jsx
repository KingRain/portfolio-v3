import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/Aboutme";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const heroRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavItemClick = (sectionId) => {
    let ref;
    switch (sectionId) {
      case "home":
        ref = heroRef;
        break;
      // Add cases for other sections...
      default:
        ref = null;
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-10">
        <div
          className="w-full h-full animate-move-bg"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>
      <div className="relative z-20">
        <Navbar onNavItemClick={handleNavItemClick} />
        <HeroSection ref={heroRef} />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
}

export default App;
