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
        <footer className="relative overflow-hidden bg-gradient-to-b from-black/80 via-black/80 to-black/80 font-inter py-8">
           

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <p className="mb-4">Copyright &copy; {new Date().getFullYear()} Sam Joe Chalissery. All rights reserved.</p>
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