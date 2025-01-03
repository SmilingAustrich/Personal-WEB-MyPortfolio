import { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTree, FaMemory, FaStackOverflow } from 'react-icons/fa';

import { LanguageContext } from '../LanguageContext';
import translations from '../translations';

export default function Skills() {
    const { language } = useContext(LanguageContext);
    const t = translations[language].skills;

    return (
        <section
            id="skills"
            className="
        py-12 sm:py-16 md:py-20
        bg-spaceBlack text-white
        relative
      "
        >
            <div
                className="
          container mx-auto
          px-4 sm:px-6 md:px-8
          text-center
        "
            >
                {/* Section Title (with animation) */}
                <motion.h2
                    className="
            text-3xl sm:text-4xl md:text-5xl
            font-extrabold
            mb-6 sm:mb-10
            glow animate-neonPulse
          "
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {t.title}
                </motion.h2>

                {/* Skills Grid */}
                <div
                    className="
            grid grid-cols-1 md:grid-cols-2
            gap-6 sm:gap-8 md:gap-10
            mt-6 sm:mt-8
          "
                >
                    {/* Skill 1: Data Structures */}
                    <motion.div
                        className="
              p-6 sm:p-8
              bg-spaceGray text-white
              rounded-lg shadow-lg
              transform transition duration-300
              hover:scale-105 hover:shadow-neonGlow
            "
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.1 }}
                    >
                        <FaTree
                            className="
                text-4xl sm:text-6xl
                mx-auto mb-4
                text-white
              "
                        />
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 neon-highlight-purple">
                            {t.dataStructures.title}
                        </h3>
                        <p
                            className="text-sm sm:text-base md:text-lg text-gray-300"
                            dangerouslySetInnerHTML={{
                                __html: t.dataStructures.description,
                            }}
                        />
                    </motion.div>

                    {/* Skill 2: Assembly & Registers */}
                    <motion.div
                        className="
              p-6 sm:p-8
              bg-spaceGray text-white
              rounded-lg shadow-lg
              transform transition duration-300
              hover:scale-105 hover:shadow-neonGlow
            "
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        <FaMemory
                            className="
                text-4xl sm:text-6xl
                mx-auto mb-4
                text-white
              "
                        />
                        <h3
                            className="
                text-xl sm:text-2xl font-bold
                mb-2 neon-highlight-green
              "
                            dangerouslySetInnerHTML={{
                                __html: t.assembly.title,
                            }}
                        />
                        <p
                            className="text-sm sm:text-base md:text-lg text-gray-300"
                            dangerouslySetInnerHTML={{
                                __html: t.assembly.description,
                            }}
                        />
                    </motion.div>

                    {/* Skill 3: Programming Languages */}
                    <motion.div
                        className="
              p-6 sm:p-8
              bg-spaceGray text-white
              rounded-lg shadow-lg
              transform transition duration-300
              hover:scale-105 hover:shadow-neonGlow
            "
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    >
                        <FaCode
                            className="
                text-4xl sm:text-6xl
                mx-auto mb-4
                text-white
              "
                        />
                        <h3
                            className="
                text-xl sm:text-2xl font-bold
                mb-2 neon-highlight-red
              "
                        >
                            {t.programmingLanguages.title}
                        </h3>
                        <p
                            className="text-sm sm:text-base md:text-lg text-gray-300"
                            dangerouslySetInnerHTML={{
                                __html: t.programmingLanguages.description,
                            }}
                        />
                    </motion.div>

                    {/* Skill 4: Problem Solving & Algorithms */}
                    <motion.div
                        className="
              p-6 sm:p-8
              bg-spaceGray text-white
              rounded-lg shadow-lg
              transform transition duration-300
              hover:scale-105 hover:shadow-neonGlow
            "
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                    >
                        <FaStackOverflow
                            className="
                text-4xl sm:text-6xl
                mx-auto mb-4
                text-white
              "
                        />
                        <h3
                            className="
                text-xl sm:text-2xl font-bold
                mb-2 neon-highlight-yellow
              "
                        >
                            {t.algorithms.title}
                        </h3>
                        <p
                            className="text-sm sm:text-base md:text-lg text-gray-300"
                            dangerouslySetInnerHTML={{
                                __html: t.algorithms.description,
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
