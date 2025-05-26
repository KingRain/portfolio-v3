import { useEffect, useRef, useState } from "react";
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
        name: "Instagram",
        url: "https://instagram.com/samjoe.png",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/instagram.svg",
    },
    {
        name: "Email",
        url: "mailto:samjoe55555@gmail.com",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/gmail.svg",
    },
    // Add more socials as needed
];

export default function Contact() {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="min-h-screen bg-gradient-to-b from-black/80 via-gray-800/80 to-black/80 text-white flex flex-col items-center justify-center relative"
        >

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-16">
                <motion.h2
                    className="text-4xl font-bold text-white mb-12 text-center"
                    initial={{ y: 100, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    Get in Touch
                </motion.h2>
                <motion.p
                    className="text-white text-lg mb-8 text-center"
                    initial={{ y: 100, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    I'm always open to new opportunities and collaborations. Feel free to reach out to me on any of the following platforms :D
                </motion.p>

                <div className="flex flex-wrap justify-center items-center">
                    {socials.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg m-4 p-6 flex flex-col items-center justify-center w-36 h-36 border border-gray-200 border-opacity-20 hover:bg-opacity-20 transition duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ y: 100, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
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