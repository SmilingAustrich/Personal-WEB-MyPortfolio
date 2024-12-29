import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-spaceBlack text-white relative">
            <div className="container mx-auto text-center">
                {/* Section Title with animation */}
                <motion.h2
                    className="text-4xl font-extrabold mb-10 glow animate-neonPulse"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contact Me
                </motion.h2>

                {/* Form Container */}
                <form className="space-y-6 mt-8 mx-auto max-w-2xl">
                    <motion.input
                        type="text"
                        placeholder="Name"
                        className="w-full p-4 rounded-lg border-2 border-neonBlue text-white bg-transparent focus:ring-2 focus:ring-neonPurple outline-none transition-all duration-300 hover:border-neonPurple"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    />
                    <motion.input
                        type="email"
                        placeholder="Email"
                        className="w-full p-4 rounded-lg border-2 border-neonBlue text-white bg-transparent focus:ring-2 focus:ring-neonPink outline-none transition-all duration-300 hover:border-neonPink"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    />
                    <motion.textarea
                        placeholder="Message"
                        className="w-full p-4 rounded-lg border-2 border-neonBlue text-white bg-transparent focus:ring-2 focus:ring-neonYellow outline-none transition-all duration-300 hover:border-neonYellow"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    ></motion.textarea>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="bg-neonBlue text-black px-8 py-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-neonGlow hover:bg-neonGreen"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        Submit
                    </motion.button>
                </form>
            </div>
        </section>
    );
}
