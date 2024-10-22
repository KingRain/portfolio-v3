import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black font-inter py-8">
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
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <p className="mb-4">&copy; {new Date().getFullYear()} Sam Joe Chalissery. All rights reserved.</p>
                {isVisible && (
                    <motion.button
                        onClick={scrollToTop}
                        className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full shadow-lg p-4 border border-gray-200 border-opacity-20 hover:bg-opacity-20 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Back to top ↑
                    </motion.button>
                )}
            </div>
        </footer>
    );
}