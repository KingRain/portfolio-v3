import { motion } from "framer-motion"; // Import framer-motion

export default function HeroSection() {
  const handleResumeClick = (e) => {
    e.preventDefault();
    alert("Sorry, the resume is not yet made.");
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-black/80 via-gray-800/80 to-black/80 text-white flex flex-col items-center justify-center relative"
    >
      {/* Avatar */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-white">
        <img
          src="./src/assets/images/avatar.jpg"
          alt="Avatar"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Greeting */}
      <p className="text-lg font-medium text-gray-200 mb-2 flex items-center">
        Hi, I'm Sam Joe Chalissery
        <motion.span
          className="ml-2"
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
        >
          👋
        </motion.span>
      </p>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
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
      </h1>

      {/* Resume Button */}
      <a
        href="#resume"
        onClick={handleResumeClick}
        className="inline-block bg-transparent border border-white px-6 py-2 text-lg rounded-md hover:bg-white hover:text-black transition duration-300"
      >
        Resume ↗
      </a>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 text-sm text-gray-400 animate-bounce">
        <p>Scroll down ⬇️</p>
      </div>
    </section>
  );
}
