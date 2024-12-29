export default function About() {
    return (
        <section
            id="about"
            className="py-20 bg-gradient-radial from-spaceGray via-deepSpace to-spaceBlack text-white relative"
        >
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold mb-6 glow animate-neonPulse">
                    About Me
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    I am a <span className="neon-highlight-blue">Computer Science</span> student at the University of Montreal with a passion for <span className="neon-highlight-blue">technology</span> and a keen interest in <span className="neon-highlight-blue">hardware</span>. I enjoy exploring how systems work from the inside out and find great satisfaction in solving <span className="neon-highlight-blue">complex problems</span>. I'm dedicated to creating sleek, responsive designs and applications while constantly learning new technologies and approaches. My experience spans <span className="neon-highlight-blue">software engineering</span>, system architecture, and web development, and I am always eager to apply my skills in real-world projects.
                </p>
            </div>
        </section>
    );
}
