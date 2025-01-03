import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import CursorEffect from "./components/CursorEffect";
import { LanguageProvider } from "./LanguageContext";


function App() {
    return (
        <LanguageProvider>
            {/*
        "relative" ensures that z-index stacking works properly for children.
        Keep "overflow-x-hidden" if you want to prevent horizontal scroll,
        e.g. in case any child overflows horizontally.
      */}
            <div className="relative overflow-x-hidden font-sans">
                {/* Add our BinarySnow background */}
                {/* Other effects/components */}
                <CursorEffect />
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Contact />
            </div>
        </LanguageProvider>
    );
}

export default App;
