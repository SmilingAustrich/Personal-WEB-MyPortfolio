import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

export default function FilterBar({ onFilterChange }) {
    const { language } = useContext(LanguageContext);

    // Define filters for both languages
    const filters =
        language === 'en'
            ? ['All', 'Java', 'MIPS', 'VHDL', 'Assembly', 'Object-Oriented Programming', 'Algorithms']
            : ['Tous', 'Java', 'MIPS', 'VHDL', 'Assembleur', 'Programmation Orientée Objet', 'Algorithmes'];

    return (
        <div
            className="
        flex flex-wrap items-center justify-center
        gap-2
        mb-8
        px-4 sm:px-0
      "
        >
            {filters.map((filter, index) => (
                <button
                    key={index}
                    onClick={() => onFilterChange(filter === 'Tous' ? 'All' : filter)} // Map 'Tous' back to 'All'
                    className="
            px-4 py-2
            rounded-lg
            bg-spaceGray hover:bg-neonBlue
            text-white text-sm
            transition-all duration-300
            whitespace-nowrap
          "
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
