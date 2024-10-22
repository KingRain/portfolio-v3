import { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onNavItemClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = (sectionId) => {
    setIsOpen(false); // Close the navbar
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
    } else {
      onNavItemClick(sectionId); // Scroll to the section
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Home Icon */}
        <HomeIcon className="h-6 w-6 cursor-pointer" onClick={() => handleNavItemClick("home")} />

        {/* Section Text */}
        <div className="text-lg font-semibold">Home</div>

        {/* Hamburger Menu */}
        <button className="block sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-1 relative">
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Responsive menu for mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden fixed top-[60px] left-0 w-full bg-black text-white"
            >
              <ul className="flex flex-col items-center p-4">
                <li className="w-full">
                  <a
                    href="#home"
                    className="p-2 block text-center hover:bg-gray-800"
                    onClick={() => handleNavItemClick("home")}
                  >
                    Home
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="#projects"
                    className="p-2 block text-center hover:bg-gray-800"
                    onClick={() => handleNavItemClick("projects")}
                  >
                    Projects
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="#aboutme"
                    className="p-2 block text-center hover:bg-gray-800"
                    onClick={() => handleNavItemClick("aboutme")}
                  >
                    About
                  </a>
                </li>
                <li className="w-full">
                  <a
                    href="#contact"
                    className="p-2 block text-center hover:bg-gray-800"
                    onClick={() => handleNavItemClick("contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
