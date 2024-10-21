import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const educationTimeline = [
    {
        year: "2023",
        degree: "Master of Science in Computer Science",
        institution: "University of Technology",
    },
    {
        year: "2020",
        degree: "Bachelor of Science in Software Engineering",
        institution: "Institute of Information Technology",
    },
    {
        year: "2017",
        degree: "High School Diploma",
        institution: "City High School",
    },
];

export default function AboutMe() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section
            id="aboutme"
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
                    About Me
                </h2>
                <div className="text-white text-lg mb-8">
                    <motion.p
                        ref={ref}
                        initial={{ x: -100, opacity: 0 }}
                        animate={controls}
                        variants={{
                            visible: { x: 0, opacity: 1 },
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        Hello! I'm Sam, a passionate software developer with a strong
                        background in computer science and software engineering. I love
                        creating innovative solutions and working on exciting projects that
                        make a difference.
                    </motion.p>
                    <br></br>
                    <motion.p
                        ref={ref}
                        initial={{ x: -100, opacity: 0 }}
                        animate={controls}
                        variants={{
                            visible: { x: 0, opacity: 1 },
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        My journey in the tech world started with a fascination for
                        computers and programming, which led me to pursue formal education
                        in this field. Over the years, I've honed my skills in various
                        programming languages and tools, and I'm always eager to learn more
                        and take on new challenges.
                    </motion.p>
                </div>

                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                    Education
                </h3>
                <div className="space-y-8">
                    {educationTimeline.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-200 border-opacity-20"
                            initial={{ x: -100, opacity: 0 }}
                            animate={controls}
                            variants={{
                                visible: { x: 0, opacity: 1 },
                            }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h4 className="text-xl font-bold text-white">{item.year}</h4>
                            <p className="text-lg text-gray-300">{item.degree}</p>
                            <p className="text-md text-gray-400">{item.institution}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}