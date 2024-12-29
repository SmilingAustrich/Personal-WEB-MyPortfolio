import { motion } from 'framer-motion';
import { useState } from 'react'; // Import useState hook for managing state

export default function Hero() {
    const [showConsole, setShowConsole] = useState(false); // State to control the console visibility

    const handleClick = () => {
        const messageElement = document.getElementById('stalking-message');

        // Show the console and hide the secret message initially
        setShowConsole(true);
        messageElement.classList.add('hidden');

        // Simulate the fake process (trigger message after 1 second for faster animation)
        setTimeout(() => {
            // Show the secret (fun) message
            messageElement.classList.remove('hidden');

            // Keep it visible for 1.5 seconds
            setTimeout(() => {
                // Scroll smoothly to the About section after a faster scroll duration (700ms)
                document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Hide the console and message after 1.5 seconds
                setShowConsole(false);
                messageElement.classList.add('hidden');
            }, 1000); // Keep secret message visible for 1.5 seconds
        }, 1000); // Simulate process for 1 second (faster)
    };

    return (
        <section
            id="hero"
            className="h-screen bg-gradient-radial text-white flex items-center justify-center flex-col relative"
        >
            {/* Fake console */}
            <motion.div
                id="fake-console"
                initial={{ opacity: 0, x: '100%' }} // Start off-screen to the right
                animate={{
                    opacity: showConsole ? 1 : 0, // Show console only after button click
                    x: showConsole ? 0 : '100%', // Move the console from the right
                }}
                transition={{ duration: 0.3 }} // Faster transition for the slide
                className="absolute top-1/2 transform -translate-y-1/2 right-0 w-1/4 bg-spaceGray text-white p-4 border-2 border-neonBlue z-50"
            >
                <div className="text-left text-white">
                    {/* Process text without glitch */}
                    <div className="text-xl mb-4 font-bold neon-highlight-white">Injecting Hook...</div>
                    <div className="text-lg font-mono">
                        <span>Running function...</span>
                    </div>
                    {/* Fun message after process */}
                    <div
                        id="stalking-message"
                        className="mt-6 hidden text-xl font-bold neon-highlight-red"
                    >
                        Happy stalking time!
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="text-center max-w-2xl z-10 relative"
            >
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Hi, I am <span className="font-extrabold mb-6 glow">Tarek.</span>
                </h1>

                {/* Text with typing effect in fixed width container */}
                <div className="text-lg md:text-xl mb-8 relative inline-block w-full">
                    <span className="inline-block w-full">
                        aka <span className="text-neonGreen glow animate-neonPulse">trk </span>and this... is my{' '}
                        <span className="text-neonBlue glow animate-neonPulse">portfolio.</span>
                    </span>
                </div>

                {/* Button with smooth scroll functionality */}
                <motion.button
                    onClick={handleClick}
                    className="bg-neonBlue text-deepSpace px-6 py-3 rounded-md shadow-neon hover:shadow-neon hover:bg-neonGreen transition duration-300 ease-in-out mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <span className="font-extrabold">
                        trk.Show(
                        <span
                            className="text-white text-xl animate-pulse"
                            style={{
                                textShadow: '0 0 4px rgba(0, 255, 255, 0.5), 0 0 8px rgba(0, 255, 255, 0.5)',
                            }}
                        >
                            AboutMe
                        </span>
                        )
                    </span>
                </motion.button>
            </motion.div>
        </section>
    );
}
