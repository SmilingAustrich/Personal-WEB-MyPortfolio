import React from "react";
import BinaryRainEffect from './components/BinaryRainEffect'; // Import the binary rain effect
import Navbar from "./components/Navbar"; // Your Navbar component
import Hero from "./components/Hero"; // Your Hero component
import About from "./components/About"; // About section
import Services from "./components/Services"; // Services section
import Contact from "./components/Contact"; // Contact section
import CursorEffect from './components/CursorEffect'; // Custom cursor effect

function App() {
    return (
        <div>
            {/* Binary Rain Effect */}
            {/*<BinaryRainEffect />*/}

            {/* Custom Cursor */}
            <CursorEffect />

            {/* Other Components */}
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Contact />
        </div>
    );
}

export default App;
