import { motion } from "framer-motion";

// Social media icons URLs
const socials = [
    {
        name: "GitHub",
        url: "https://github.com/KingRain",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/samjoe404",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg",
    },
    {
        name: "Twitter",
        url: "https://twitter.com/Rainboi15",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/twitter.svg",
    },
    {
        name: "Email",
        url: "mailto:samjoe55555@gmail.com",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/gmail.svg",
    },
    // Add more socials as needed
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
        >
            {/* Animated dots background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full animate-move-bg"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                    Contact
                </h2>

                <div className="flex flex-wrap justify-center items-center">
                    {socials.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg m-4 p-6 flex flex-col items-center justify-center w-40 h-40 border border-gray-200 border-opacity-20 hover:bg-opacity-20 transition duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img
                                src={social.icon}
                                alt={social.name}
                                className="w-16 h-16 mb-4 invert"
                            />
                            <span className="text-white font-semibold">{social.name}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}