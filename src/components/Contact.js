import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../LanguageContext'; // Adjust path if needed
import translations from '../translations';           // Adjust path if needed

export default function Contact() {
    // 1) Grab the language from context
    const { language } = useContext(LanguageContext);

    // 2) Access the "contact" portion of your translations
    const t = translations[language].contact;

    return (
        <section
            id="contact"
            className="
        py-16 sm:py-20 md:py-24
        bg-spaceBlack
        text-white
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
                {/* Section Title with animation */}
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

                {/* Form Container */}
                <form
                    className="
            space-y-6
            mt-8
            mx-auto
            max-w-lg
          "
                >
                    <motion.input
                        type="text"
                        placeholder={t.namePlaceholder}
                        className="
              w-full p-3 sm:p-4
              rounded-lg
              border-2 border-neonBlue
              text-white
              bg-transparent
              focus:ring-2 focus:ring-neonPurple
              outline-none
              transition-all duration-300
              hover:border-neonPurple
            "
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    />

                    <motion.input
                        type="email"
                        placeholder={t.emailPlaceholder}
                        className="
              w-full p-3 sm:p-4
              rounded-lg
              border-2 border-neonBlue
              text-white
              bg-transparent
              focus:ring-2 focus:ring-neonPink
              outline-none
              transition-all duration-300
              hover:border-neonPink
            "
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    />

                    <motion.textarea
                        placeholder={t.messagePlaceholder}
                        className="
              w-full p-3 sm:p-4
              rounded-lg
              border-2 border-neonBlue
              text-white
              bg-transparent
              focus:ring-2 focus:ring-neonYellow
              outline-none
              transition-all duration-300
              hover:border-neonYellow
              min-h-[120px] sm:min-h-[150px]
            "
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    />

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="
              bg-neonBlue
              text-black
              px-6 py-3 sm:px-8 sm:py-4
              rounded-lg
              shadow-lg
              transform
              transition duration-300
              hover:scale-110
              hover:shadow-neonGlow
              hover:bg-neonGreen
              font-bold
            "
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        {t.submitButton}
                    </motion.button>
                </form>
            </div>
        </section>
    );
}
