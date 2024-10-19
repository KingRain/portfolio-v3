import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";

function App() {
  const [activeSection, setActiveSection] = useState("home");

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
        <Navbar activeSection={activeSection} />
        <HeroSection />
        <Projects />
      </div>
    </div>
  );
}

export default App;
