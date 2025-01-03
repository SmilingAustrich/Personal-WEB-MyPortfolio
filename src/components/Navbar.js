import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-scroll';
import { LanguageContext } from '../LanguageContext';
import translations from '../translations';

export default function Navbar() {
    const [navBackground, setNavBackground] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const { language, toggleLanguage } = useContext(LanguageContext);

    useEffect(() => {
        const handleScroll = () => {
            setNavBackground(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'hero', label: translations[language].navbar.home },
        { id: 'about', label: translations[language].navbar.about },
        { id: 'skills', label: translations[language].navbar.skills },
        { id: 'portfolio', label: translations[language].navbar.portfolio },
        { id: 'contact', label: translations[language].navbar.contact },
    ];

    return (
        <nav
            className={`fixed w-full top-0 z-20 transition-all duration-500 ${
                navBackground
                    ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            {/* NAVBAR CONTAINER */}
            <div className="container mx-auto flex items-center justify-between px-4 py-2 sm:px-6 sm:py-3">
                {/* LOGO */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                    <h1 className="text-lg sm:text-2xl font-bold text-neonBlue flex">
                        <span className="text-white">trk.init(</span>
                        <span className="text-neonBlue animate-pulse">Portfolio</span>
                        <span className="text-white">)</span>
                    </h1>
                    <p className="hidden sm:block text-white text-xs sm:text-sm">
                        Tarek Hireche | BsC. Computer Science
                    </p>
                </div>

                {/* DESKTOP NAV LINKS */}
                <div className="hidden md:flex space-x-5 text-white text-sm sm:text-base font-mono">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.id}
                            smooth
                            duration={500}
                            className="cursor-pointer hover:text-neonBlue hover:glow-transition transition-all duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* LANGUAGE TOGGLE (DESKTOP) */}
                    <div className="ml-2 sm:ml-4">
                        <div
                            className="relative w-24 sm:w-32 h-8 bg-gray-800 border border-gray-500
                         rounded-full flex items-center px-1 text-xs sm:text-sm font-bold
                         cursor-pointer"
                        >
                            <div
                                className={`absolute top-1 bottom-1 w-[48%] rounded-full transition-all duration-300 ${
                                    language === 'en'
                                        ? 'translate-x-[100%] bg-neonBlue'
                                        : 'translate-x-0 bg-neonGreen'
                                }`}
                            />
                            <div className="flex justify-between w-full z-10">
                <span
                    className="flex-1 text-center text-white"
                    onClick={toggleLanguage}
                >
                  FR
                </span>
                                <span
                                    className="flex-1 text-center text-white"
                                    onClick={toggleLanguage}
                                >
                  EN
                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* HAMBURGER ICON (MOBILE) */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 bg-opacity-90 border-t border-gray-700">
                    <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={link.id}
                                smooth
                                duration={500}
                                className="cursor-pointer text-white text-base font-mono hover:text-neonBlue hover:glow-transition transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        {/* LANGUAGE TOGGLE (MOBILE) */}
                        <div className="mt-2">
                            <div
                                className="relative w-24 h-8 bg-gray-800 border border-gray-500
                           rounded-full flex items-center px-1 text-xs font-bold
                           cursor-pointer"
                            >
                                <div
                                    className={`absolute top-1 bottom-1 w-[48%] rounded-full transition-all duration-300 ${
                                        language === 'en'
                                            ? 'translate-x-[100%] bg-neonBlue'
                                            : 'translate-x-0 bg-neonGreen'
                                    }`}
                                />
                                <div className="flex justify-between w-full z-10">
                  <span
                      className="flex-1 text-center text-white"
                      onClick={toggleLanguage}
                  >
                    FR
                  </span>
                                    <span
                                        className="flex-1 text-center text-white"
                                        onClick={toggleLanguage}
                                    >
                    EN
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
