import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AdditionalInfo from './components/AdditionalInfo'; // ✅ Changed name here
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AdditionalInfo /> {/* ✅ Replaced Experience with AdditionalInfo */}
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
