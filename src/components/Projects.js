import React from "react";
import { motion } from "framer-motion";

const projects = [
    { title: "Project A", description: "An AI-based application." },
    { title: "Project B", description: "A space exploration simulation." },
    { title: "Project C", description: "A futuristic UI design system." },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="
        py-16 sm:py-20 md:py-24
        px-4 sm:px-6 md:px-8
        bg-spaceGray
        text-white
      "
        >
            <h2
                className="
          text-3xl sm:text-4xl md:text-5xl
          font-bold
          text-center
          text-neonGreen
          mb-8
        "
            >
                Projects
            </h2>

            <div
                className="
          mt-6 sm:mt-8
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6 sm:gap-8 lg:gap-10
        "
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="
              p-6
              border border-gray-700
              rounded-lg
              shadow-lg
              bg-spaceBlack
              transform
              transition-transform
            "
                        whileHover={{ scale: 1.04 }}
                    >
                        <h3
                            className="
                text-xl sm:text-2xl
                font-semibold
                text-neonPink
              "
                        >
                            {project.title}
                        </h3>
                        <p
                            className="
                mt-2
                text-sm sm:text-base
                text-gray-400
              "
                        >
                            {project.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
