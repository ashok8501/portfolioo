import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Additional Info', href: '#additional-info' },
    { name: 'Contact', href: '#contact' },
  ];
  

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-2 shadow-lg'
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">
          <span className="text-blue-600 dark:text-blue-400">A</span>shok
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/ashok8501"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashok-reddy-kuchipudi-3762aa291/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="/project/resumeee.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Resume"
            >
              <FileText size={20} />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm" onClick={toggleMenu} />}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-64 z-40 bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-16 px-6">
          <div className="flex flex-col space-y-6 mt-4">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center mt-8 space-x-4">
            <a
              href="https://github.com/ashok8501"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashok-reddy-kuchipudi-3762aa291/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="/project/resumeee.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Resume"
            >
              <FileText size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
