import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-blue-500">A</span>shok
            </a>
            <p className="text-gray-400 mt-2 max-w-xs">
              Building smart solutions with clean, scalable code.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Ashok Reddy Kuchipudi. All Rights Reserved.
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/ashok8501" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ashok-reddy-kuchipudi-3762aa291/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:ashokreddykuchipudi@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-all absolute right-6 bottom-6 shadow-lg hover:shadow-xl"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
