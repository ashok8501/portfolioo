import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Code, Server, Database, GitBranch, Monitor, SmartphoneNfc, Brain } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');
  
  const skillCategories = [
    { name: 'All', icon: <Monitor size={20} /> },
    { name: 'Languages', icon: <Code size={20} /> },
    { name: 'Web', icon: <Server size={20} /> },
    { name: 'Tools', icon: <GitBranch size={20} /> },
    { name: 'Database', icon: <Database size={20} /> },
    { name: 'Android', icon: <SmartphoneNfc size={20} /> },
    { name: 'ML/AI', icon: <Brain size={20} /> }
  ];

  const skills = [
    // Languages
    { name: 'C++', level: 75, category: 'Languages' },
    { name: 'Python', level: 80, category: 'Languages' },
    { name: 'C', level: 80, category: 'Languages' },
    { name: 'SQL', level: 70, category: 'Languages' },
    { name: 'JavaScript', level: 80, category: 'Languages' },
    
    // Web
    { name: 'HTML', level: 95, category: 'Web' },
    { name: 'CSS', level: 90, category: 'Web' },
    { name: 'Tailwind', level: 55, category: 'Web' },
    { name: 'React.js', level: 70, category: 'Web' },
    { name: 'Node.js', level: 75, category: 'Web' },
    { name: 'Express', level: 60, category: 'Web' },
    
    // Tools
    { name: 'Git', level: 45, category: 'Tools' },
    { name: 'GitHub', level: 40, category: 'Tools' },
    { name: 'Postman', level: 10, category: 'Tools' },
    
    // Database
    { name: 'MongoDB', level: 40, category: 'Database' },
    { name: 'MySQL', level: 60, category: 'Database' },
    
    // Android
    { name: 'Kotlin', level: 10, category: 'Android' },
    { name: 'Android SDK', level: 5, category: 'Android' },
    
    // ML/AI
    { name: 'Machine Learning', level: 70, category: 'ML/AI' },
    { name: 'Data Analysis', level: 80, category: 'ML/AI' },
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
              <span className="text-blue-800 dark:text-blue-300 font-medium">Skills</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Technical <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical skills and proficiency levels across various technologies and domains.
          </p>
        </div>
        
        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${activeCategory === category.name ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-600'}`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1 border border-transparent hover:border-blue-500/20 dark:hover:border-blue-400/20 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{skill.name}</h3>
              
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-2">
                <div 
                  className={`h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-1000 ease-out`}
                  style={{ 
                    width: isInView ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100 + 200}ms`
                  }}
                ></div>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300 text-sm">{skill.category}</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
