import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/GatewayContact';

const App = () => {
    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen bg-background transition-colors duration-300 font-inter text-primary overflow-x-hidden">
                <Navbar />

                <main className="flex-grow pt-16">
                    <section id="home">
                        <Home />
                    </section>

                    <section id="about">
                        <About />
                    </section>

                    <section id="education">
                        <Education />
                    </section>

                    <section id="skills">
                        <Skills />
                    </section>

                    <section id="projects">
                        <Projects />
                    </section>

                    <section id="contact">
                        <Contact />
                    </section>
                </main>

                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
