import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import translations from '../translations';

export default function About() {
    const { language } = useContext(LanguageContext);

    // Define words to highlight and their translations
    const highlightMap = {
        en: ['Computer Science', 'technology', 'hardware', 'complex problems', 'software engineering'],
        fr: ['informatique', 'technologie', 'matériel', 'problèmes complexes', 'ingénierie logicielle'],
    };

    const highlightedWords = highlightMap[language];

    return (
        <section
            id="about"
            className="
        py-16 sm:py-20 md:py-24
        bg-gradient-radial
        from-spaceGray via-deepSpace to-spaceBlack
        text-white relative
      "
        >
            <div
                className="
          container mx-auto
          px-4 sm:px-6 md:px-8
          max-w-3xl
          text-center
        "
            >
                <h2
                    className="
            text-3xl sm:text-4xl md:text-5xl
            font-extrabold
            mb-6
            glow animate-neonPulse
          "
                >
                    {translations[language].about.title}
                </h2>

                <p
                    className="
            text-base sm:text-lg md:text-xl
            text-gray-300 leading-relaxed
          "
                >
                    {translations[language].about.description.split(' ').map((word, index) => {
                        // Check if the current word is in the highlightedWords array
                        if (highlightedWords.includes(word.replace(/[.,]/g, ''))) {
                            return (
                                <span key={index} className="neon-highlight-blue">
                  {word}{' '}
                </span>
                            );
                        }
                        return word + ' ';
                    })}
                </p>
            </div>
        </section>
    );
}
