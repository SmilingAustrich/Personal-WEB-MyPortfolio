import { FaLaptopCode, FaCloud } from "react-icons/fa"; // Removed Mobile App
import { motion } from 'framer-motion'; // Importing Framer Motion

export default function Services() {
    return (
        <section id="services" className="py-20 bg-spaceBlack text-white relative">
            <div className="container mx-auto text-center">
                {/* Section Title with animation */}
                <motion.h2
                    className="text-4xl font-extrabold mb-10 glow animate-neonPulse"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    My Services
                </motion.h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                    {/* Web Development Service */}
                    <motion.div
                        className="p-8 bg-spaceGray text-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-neonGlow"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.1 }}
                    >
                        <FaLaptopCode className="text-6xl mx-auto mb-4 text-white " />
                        <h3 className="text-2xl font-bold mb-2 neon-highlight ">
                            Web Development
                        </h3>
                        <p className="text-gray-300">
                            Custom web solutions tailored for businesses and individuals, ensuring sleek and responsive designs.
                        </p>
                    </motion.div>

                    {/* Cloud Hosting Service */}
                    <motion.div
                        className="p-8 bg-spaceGray text-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-neonGlow"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        <FaCloud className="text-6xl mx-auto mb-4 text-white " />
                        <h3 className="text-2xl font-bold mb-2 neon-highlight ">
                            Cloud Hosting
                        </h3>
                        <p className="text-gray-300">
                            Fast, reliable, and scalable cloud hosting solutions for your digital needs.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
