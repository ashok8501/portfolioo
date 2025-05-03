import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image or illustration */}
          <div
            className={`md:w-5/12 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-xl bg-blue-600/20 dark:bg-blue-500/20"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-blue-600/20 dark:bg-blue-500/20"></div>
              <div className="relative rounded-xl overflow-hidden aspect-square max-w-md">
                <img
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="About V. Pavan Kalyan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div
            className={`md:w-7/12 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                <span className="text-blue-800 dark:text-blue-300 font-medium">About Me</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Passionate about tech <span className="text-blue-600 dark:text-blue-400">& innovation</span>
            </h2>

            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl shadow-sm mb-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
  I'm a Data Science student with a 9.27 CGPA, skilled in Python, C++, and web development. My projects include sentiment analysis and heart disease prediction using TensorFlow.
</p>

<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
  I interned with AICTE-Google AI/ML, building scalable ML models. I’m passionate about solving real-world problems through Data Science and continuous learning.
</p>

            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-gray-700 dark:text-gray-300">Problem Solver</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-gray-700 dark:text-gray-300">Creative Thinker</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-gray-700 dark:text-gray-300">AI Enthusiast</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-gray-700 dark:text-gray-300">Full-Stack Developer</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
