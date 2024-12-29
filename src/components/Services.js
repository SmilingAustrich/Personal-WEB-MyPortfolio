import { motion } from 'framer-motion'; // For smooth animations
import { FaCode, FaTree, FaDatabase, FaMemory, FaStackOverflow } from 'react-icons/fa'; // Icons for tech stacks

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-spaceBlack text-white relative">
            <div className="container mx-auto text-center">
                {/* Section Title with animation */}
                <motion.h2
                    className="text-4xl font-extrabold mb-10 glow animate-neonPulse"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    My Technical Skills
                </motion.h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                    {/* Skill 1: Data Structures */}
                    <motion.div
                        className="p-8 bg-spaceGray text-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-neonGlow"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.1 }}
                    >
                        <FaTree className="text-6xl mx-auto mb-4 text-white " />
                        <h3 className="text-2xl font-bold mb-2 neon-highlight-purple">
                            Data Structures
                        </h3>
                        <p className="text-gray-300">
                            Proficient in advanced <span className="neon-highlight-purple">data structures</span> such as <span className="neon-highlight-purple">trees</span>, <span className="neon-highlight-purple">splay trees</span>, <span className="neon-highlight-purple">heaps</span>, and <span className="neon-highlight-purple">stacks</span>. Knowledge of algorithms for balancing trees and heap operations.
                            Skilled in optimizing <span className="neon-highlight-purple">data access</span> and <span className="neon-highlight-purple">manipulation</span>, ensuring efficient problem-solving and resource management. Familiar with tech stacks like <span className="neon-highlight-purple">Java</span>, <span className="neon-highlight-purple">C++</span>, and <span className="neon-highlight-purple">Python</span> to implement these structures.
                        </p>
                    </motion.div>

                    {/* Skill 2: Assembly & Registers */}
                    <motion.div
                        className="p-8 bg-spaceGray text-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-neonGlow"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        <FaMemory className="text-6xl mx-auto mb-4 text-white " />
                        <h3 className="text-2xl font-bold mb-2 neon-highlight-green ">
                            <span className="neon-highlight-white" > Assembly & Registers (64-bit) </span>  <span className="text-white bg-green-500 px-2 py-1 rounded-full text-sm">Learning Currently</span>
                        </h3>
                        <p className="text-gray-300">
                            Familiar with <span className="neon-highlight-white">low-level programming</span> and <span className="neon-highlight-white">assembly language</span>, focusing on <span className="neon-highlight-white">64-bit registers</span> and <span className="neon-highlight-white">memory management</span>.
                            Exploring advanced assembly topics such as <span className="neon-highlight-white">stack frames</span> and <span className="neon-highlight-white">function calls</span>. I got very interested in this subject after a class
                            on <span className="neon-highlight-white">Computer Architecture</span>. The class name was <span className="neon-highlight-white">IFT1227 </span>
                            at the University of Montreal.
                        </p>
                    </motion.div>

                    {/* Skill 3: Programming Languages */}
                    <motion.div
                        className="p-8 bg-spaceGray text-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-neonGlow"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    >
                        <FaCode className="text-6xl mx-auto mb-4 text-white " />
                        <h3 className="text-2xl font-bold mb-2 neon-highlight-red">
                            Programming Languages
                        </h3>
                        <p className="text-gray-300">
                            Skilled in <span className="neon-highlight-red">C++</span>, <span className="neon-highlight-red">Java</span>, <span className="neon-highlight-red">Python</span>, and lastly <span className="neon-highlight-red">JavaScript (my least favourite haha)</span>. Planning on developing projects emphasizing <span className="neon-highlight-red">performance optimization</span> and <span className="neon-highlight-red">design patterns</span> (e.g. <span className="">Ma ville for the class in software engineering IFT2255 and OOP projects</span>).
                        </p>
                    </motion.div>

                    {/* Skill 4: Problem Solving & Algorithms */}
                    <motion.div
                        className="p-8 bg-spaceGray text-black rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-neonGlow"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                    >
                        <FaStackOverflow className="text-6xl mx-auto mb-4 text-white " />
                        <h3 className="text-2xl font-bold mb-2 neon-highlight-yellow">
                            Algorithms & Problem Solving
                        </h3>
                        <p className="text-gray-300">
                            Proficient in solving problems using key <span className="neon-highlight-yellow">algorithms</span> such as <span className="neon-highlight-yellow">binary search</span>, a fundamental technique for searching sorted arrays with a time complexity of O(log n). Additionally skilled in <span className="neon-highlight-yellow">divide and conquer</span> strategies, particularly for sorting algorithms like <span className="neon-highlight-yellow">merge sort</span> (O(n log n)) and <span className="neon-highlight-yellow">quick sort</span> (average O(n log n)).
                            <br />
                            Familiar with <span className="neon-highlight-yellow">dynamic programming</span> and <span className="neon-highlight-yellow">greedy algorithms</span> for optimizing complex problems. My implementation experience includes techniques for solving problems like <span className="neon-highlight-yellow">knapsack</span>, <span className="neon-highlight-yellow">longest common subsequence</span>, and finding optimal solutions for resource allocation problems.
                            <br />
                            Additionally, I've worked with time and space complexities to ensure efficient problem-solving, optimizing algorithms for both <span className="neon-highlight-yellow">memory</span> and <span className="neon-highlight-yellow">execution time</span>. My approach integrates both theoretical and practical knowledge to enhance the performance and scalability of algorithms in real-world scenarios.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
