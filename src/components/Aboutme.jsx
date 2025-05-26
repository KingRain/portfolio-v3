import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const educationTimeline = [
    {
        year: "2028",
        degree: "Bachelor of Technology in Computer Science",
        institution: "Indian Institute of Information Technology, Kottayam",
    },
    {
        year: "2024",
        degree: "High School Education",
        institution: "Devamatha CMI Public School, Thrissur",
    },
    {
        year: "2022",
        degree: "Secondary School Education",
        institution: "Devamatha CMI Public School, Thrissur",
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
            id="AboutMe"
            className="min-h-screen bg-gradient-to-b from-black/80 via-gray-800/80 to-black/80 text-white flex flex-col items-center justify-center relative"
        >

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
                        My name is Sam Joe Chalissery, and I am an 19-year-old passionate software developer with a strong foundation in computer science and software engineering. My journey into the world of programming began when a close friend, Simon, introduced me to coding, sparking my curiosity and love for technology.
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
                        Over the years, I&apos;ve explored various domains, including game development, app development, web development, Discord bot creation, automation, and scripting. During the COVID-19 pandemic, I dedicated significant time to upskilling and deepening my expertise in these areas.
                    </motion.p>
                    <br></br>
                    <motion.p
                        ref={ref}
                        initial={{ x: -100, opacity: 0 }}
                        animate={controls}
                        variants={{
                            visible: { x: 0, opacity: 1 },
                        }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Currently, I am pursuing a Bachelor&apos;s degree in Computer Science (B.Tech). What drives me is the challenge of solving real-world problems through innovative software solutions, constantly pushing the boundaries of what’s possible.
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