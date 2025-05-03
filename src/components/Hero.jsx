import React, { useEffect, useRef } from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useTypingEffect } from '../hooks/useTypingEffect';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const text = useTypingEffect([
    "Data Enthusiast",
    "AI & ML Enthusiast",
    "Full-Stack Developer"
  ], 100, 2000);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle opacity-20 dark:opacity-30"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--duration': `${Math.random() * 20 + 10}s`,
                '--delay': `${Math.random() * 5}s`,
                '--size': `${Math.random() * 40 + 10}px`,
                '--color': i % 2 === 0 ? '#3b82f6' : '#60a5fa'
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div
            className={`md:w-1/2 text-center md:text-left transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              K. Ashok Reddy
            </h1>

            <div className="h-12 mb-6">
              <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold">
                {text}<span className="animate-blink">|</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Transforming ideas into intelligent software solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {/* View Resume */}
              <a 
                href="/resumeee.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
              >
                <FileText size={18} />
                <span>View Resume</span>
              </a>

              {/* Explore Projects */}
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 rounded-full transition-all flex items-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`md:w-5/12 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-pulse-slow opacity-70"></div>
              <div className="absolute inset-1 rounded-full overflow-hidden bg-white dark:bg-gray-800 backdrop-blur-sm">
                <img
                  src="https://res.cloudinary.com/ddkzadleu/image/upload/v1746158606/ashoki_ixrft1.jpg"
                  alt="K.Ashok"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 dark:border-gray-400 flex justify-center">
            <div className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 animate-scroll-down"></div>
          </div>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
