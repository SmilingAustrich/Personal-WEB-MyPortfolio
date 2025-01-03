import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaPlay } from 'react-icons/fa';

export default function ProjectCard({ title, description, techs, videoLink, features, language }) {
    return (
        <motion.div
            className="p-6 bg-spaceGray rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-neonGlow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h3 className="text-2xl font-bold mb-3 neon-highlight-green">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="mb-4">
                {techs.map((tech, index) => (
                    <span key={index} className="text-sm px-2 py-1 bg-g-800 text-neonPurple rounded-lg mr-2">
                        {tech}
                    </span>
                ))}
            </div>
            {features && (
                <ul className="list-disc text-gray-400 pl-5 mb-4">
                    {features.map((feature, index) => (
                        <li key={index} className="mb-1">{feature}</li>
                    ))}
                </ul>
            )}
            {videoLink && (
                <a href={videoLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-neonBlue text-black px-4 py-2 rounded-lg shadow-md flex items-center space-x-2 hover:bg-neonGreen transition duration-300">
                        <FaPlay />
                        <span>{language === 'en' ? 'Watch Video' : 'Regarder la Vidéo'}</span>
                    </button>
                </a>
            )}
        </motion.div>
    );
}
