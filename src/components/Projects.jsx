import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import washioImage from "../assets/images/washio.png";
import geoshiftImage from "../assets/images/geoshift.png";
import shareloadImage from "../assets/images/shareload.png";
import dashboardImage from "../assets/images/dashboard.png";
import linkIcon from "../assets/images/link.png";

// Simple Icons URLs for programming languages and tools
const toolLogos = [
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/javascript.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/python.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/nodedotjs.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/html5.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/css3.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/typescript.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/react.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/vite.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/tailwindcss.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/expo.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/mysql.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/mongodb.svg"

];

const toolIcons = [
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/visualstudiocode.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/figma.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/jetbrains.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/markdown.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/framer.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/heroku.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/vercel.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/supabase.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/firebase.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/git.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/npm.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/yarn.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/aseprite.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/inkscape.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/trello.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/notion.svg"
];

// Sample project data
const projects = [
  {
    title: "Washio",
    description: "Washio is a washing machine booking app.",
    image: washioImage, // Use the imported washio image
    github: "https://github.com/KingRain/Washio",
    website: "https://washio.netlify.app/",
  },
  {
    title: "GeoShift",
    description: "GeoShift is a geographical data visualization tool.",
    image: geoshiftImage,
    github: "https://github.com/KingRain/geoshift",
    website: "https://github.com/KingRain/geoshift",
  },
  {
    title: "Shareload",
    description: "Shareload is a file-sharing application for secure transfers.",
    image: shareloadImage,
    github: "https://github.com/KingRain/shareload-client",
    website: "https://github.com/KingRain/shareload-client",
  },
  {
    title: "Fullstack Dashboard",
    description: "A comprehensive dashboard for managing full-stack projects.",
    image: dashboardImage,
    github: "https://github.com/KingRain/fullstack-dashboard",
    website: "https://github.com/KingRain/fullstack-dashboard",
  },
  
  // Add more projects as needed
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: -activeIndex * 370 });
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
      controls.start({ x: -activeIndex * 370 });
    }
  };

  return (
    <>
    
      <section
        id="projects"
        className="min-h-screen bg-gradient-to-b from-black/80 via-gray-800/80 to-black/80 text-white flex flex-col items-center justify-center relative"
      >

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Projects
          </h2>

          {/* Project Carousel */}
          <div className="overflow-hidden mb-8 relative">
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{
                right: 0,
                left: -((projects.length - 1) * 340),
              }}
              animate={controls}
              onDragEnd={handleDragEnd}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="min-w-[320px] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg m-4 flex-shrink-0 overflow-hidden border border-gray-200 border-opacity-20"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    
                    <div className="flex justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 bg-opacity-50 text-white px-4 py-2 rounded-lg hover:bg-opacity-70 transition duration-300 flex items-center space-x-2"
                      >
                        <img
                          src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg"
                          alt="GitHub"
                          className="w-5 h-5"
                        />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 bg-opacity-50 text-white px-4 py-2 rounded-lg hover:bg-opacity-70 transition duration-300 flex items-center space-x-2"
                      >
                        <img
                          src={linkIcon}
                          alt="Website"
                          className="w-5 h-5 invert"
                        />
                        <span>Website</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Card Indicator */}
          <div className="flex justify-center mb-12">
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
        <div className="relative z-10 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg">
          {/* Animated technology logo carousel */}
          <div className="overflow-hidden border-t border-b my-0 border-gray-700 py-8 relative">
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
                    className="w-14 h-14  invert"
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
                x: [-960, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 12,
                  ease: "linear",
                },
              }}
            >
              {[...toolIcons, ...toolIcons].map((icon, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <img
                    src={icon}
                    alt="Tool Icon"
                    className="w-16 h-16 invert"
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
