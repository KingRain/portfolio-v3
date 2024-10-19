import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// URL links to white programming language icons
const toolLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
];

// URL links to white tool icons
const toolIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg",
];

// Sample project data
const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1.",
    image: "https://via.placeholder.com/300x200",
    github: "https://github.com/yourusername/project1",
    website: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    image: "https://via.placeholder.com/300x200",
    github: "https://github.com/yourusername/project2",
    website: "https://project2.com",
  },
  // Add more projects as needed
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: -activeIndex * 320 });
  }, [activeIndex, controls]);

  const handleDragEnd = (event, info) => {
    const threshold = 100; // Minimum drag distance to trigger a change
    const draggedDistance = info.offset.x;
    const direction = draggedDistance > 0 ? -1 : 1;

    if (Math.abs(draggedDistance) > threshold) {
      const newIndex = activeIndex + direction;
      setActiveIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
    } else {
      // If the drag distance is less than the threshold, snap back to the current project
      controls.start({ x: -activeIndex * 320 });
    }
  };

  return (
    <>
      <section
        id="projects"
        className="min-h-screen relative overflow-hidden bg-black"
      >
        {/* Animated dots background */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full animate-move-bg"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Projects
          </h2>

          {/* Project Carousel */}
          <div className="overflow-hidden mb-4 relative">
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{
                right: 0,
                left: -((projects.length - 1) * 320),
              }}
              animate={controls}
              onDragEnd={handleDragEnd}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="min-w-[300px] bg-[#545454] rounded-lg shadow-lg m-4 flex-shrink-0"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500"
                      >
                        Website
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Card Indicator */}
          <div className="flex justify-center mb-8">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeIndex ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Technologies & Tools
          </h3>
        </div>

        {/* Carousels Container */}
        <div className="relative z-10 bg-[#545454]">
          {/* Animated technology logo carousel */}
          <div className="overflow-hidden border-t border-b border-gray-700 py-8 relative">
            <motion.div
              className="flex"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...toolLogos, ...toolLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <img
                    src={logo}
                    alt="Programming Language Logo"
                    className="w-16 h-16 filter invert"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Animated tools carousel */}
          <div className="overflow-hidden border-t border-b border-gray-700 py-8 relative">
            <motion.div
              className="flex"
              animate={{
                x: [0, -960],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...toolIcons, ...toolIcons].map((icon, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <img
                    src={icon}
                    alt="Tool Icon"
                    className="w-16 h-16 filter invert"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
