import React, { useRef } from "react";
import { motion } from "framer-motion";
import avatarImg from "../assets/images/avatar.jpg" // Import framer-motion

export default function HeroSection() {
  const handleResumeClick = (e) => {
    e.preventDefault();
    alert("Sorry, the resume is not yet made.");
  };

  const sectionRef = useRef(null);

  // Animation variants for sliding in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="min-h-screen bg-gradient-to-b from-black/80 via-gray-800/80 to-black/80 text-white flex flex-col items-center justify-center relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Avatar */}
      <motion.div
        className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-white"
        variants={itemVariants}
      >
        <img
          src={avatarImg}
          alt="Avatar"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>

      {/* Greeting */}
      <motion.p
        className="text-lg font-medium text-gray-200 flex items-center mb-4"
        variants={itemVariants}
      >
        Hi, I'm Sam Joe Chalissery
        <motion.span
          className="ml-2"
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
        >
          👋
        </motion.span>
      </motion.p>

      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center mb-6"
        variants={itemVariants}
      >
        Designing and developing <br />
        with{" "}
        <span className="italic bg-clip-text text-transparent bg-blue-gradient">
          purpose
        </span>{" "}
        and <br />
        <span className="italic bg-clip-text text-transparent bg-blue-gradient">
          precision
        </span>
        .
      </motion.h1>

      {/* Resume Button */}
      <motion.a
        href="#resume"
        onClick={handleResumeClick}
        className="inline-block bg-transparent border border-white px-6 py-2 text-lg rounded-md hover:bg-white hover:text-black transition duration-300"
        variants={itemVariants}
      >
        Resume ↗
      </motion.a>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 text-white animate-bounce flex items-center"
        variants={itemVariants}
      >
        <span className="mr-2 text-sm">Scroll Down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.section>
  );
}
