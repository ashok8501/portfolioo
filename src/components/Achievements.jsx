import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Award, ExternalLink, Code, BookOpen, Trophy } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const achievements = [
    {
      id: 1,
      title: 'Python Certification',
      issuer: 'Infosys',
      date: 'May 2024',
      description: 'Completed the Python certification program by Infosys, demonstrating proficiency in Python programming and data structures.',
      icon: <Code className="text-yellow-500 dark:text-yellow-400" />,
      link: '/assets/pythonforbeginners.pdf'
    },
    {
      id: 2,
      title: 'Java Certification',
      issuer: 'IBM edX',
      date: 'March 2024',
      description: 'Earned certification in Java programming from IBM through edX, mastering object-oriented concepts and application development.',
      icon: <Code className="text-blue-500 dark:text-blue-400" />,
      link: '/assets/java.pdf'
    },
    {
      id: 3,
      title: 'Ethical Hacking',
      issuer: 'NPTEL',
      date: 'Jul-Oct 2024',
      description: 'Completed the Ethical Hacking course from NPTEL, gaining knowledge in network security, penetration testing, and ethical hacking techniques.',
      icon: <BookOpen className="text-green-500 dark:text-green-400" />,
      link: '/assets/nptelcerttificate.pdf'
    },
    {
      id: 4,
      title: 'Html5',
      issuer: 'Infosys',
      date: 'March 11, 2025',
      description: 'Achieved certification in HTML5 from Infosys, demonstrating proficiency in building modern, responsive web pages using HTML5 features and best practices.',
      icon: <Award className="text-purple-500 dark:text-purple-400" />,
      link: '/assets/html5.pdf'
    },
    {
      id: 5,
      title: 'Css3',
      issuer: 'Infosys',
      date: 'March 11, 2025',
      description: 'Certified in CSS3 by Infosys, acquiring expertise in designing responsive and visually appealing web pages with advanced styling techniques.',
      icon: <Trophy className="text-orange-500 dark:text-orange-400" />,
      link: '/assets/css3.pdf'
    },
    {
      id: 6,
      title: 'JavaScript',
      issuer: 'Infosys',
      date: 'March 11, 2025',
      description: 'Earned JavaScript certification from Infosys, mastering core programming concepts, DOM manipulation, and creating interactive web applications.',
      icon: <Trophy className="text-red-500 dark:text-red-400" />,
      link: 'https://www.codechef.com/users/yourprofile'
    },
    {
      id: 7,
      title: 'Power BI Certification',
      issuer: 'SimpliLearn',
      date: 'April 2025',
      description: 'Certified in Power BI, mastering data visualization, business intelligence, and interactive report building for effective data-driven decision making.',
      icon: <BookOpen className="text-blue-500 dark:text-blue-400" />,
      link: '/assets/pbi.pdf'
    },
    {
      id: 8,
      title: 'Cybersecurity Certification',
      issuer: 'CyberTreya',
      date: 'Jan 2025',
      description: 'Completed the Cybersecurity certification, gaining expertise in network defense, ethical hacking, and securing information systems from potential threats.',
      icon: <Award className="text-green-500 dark:text-green-400" />,
      link: '/assets/cybersecurity.pdf'
    },
    {
      id: 9,
      title: 'Internship Certificate',
      issuer: 'AICTE',
      date: 'Feb 2025',
      description: 'Successfully completed a professional internship, gaining hands-on experience in AI/ML technologies and contributing to real-world projects.',
      icon: <Trophy className="text-yellow-500 dark:text-yellow-400" />,
      link: '/assets/interncertificate.pdf'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
              <span className="text-blue-800 dark:text-blue-300 font-medium">Achievements</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Awards & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognitions and certifications that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 group ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {achievement.icon}
                </div>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-full shadow hover:shadow-md transition-all flex items-center gap-1"
                    aria-label={`View ${achievement.title} Certificate`}
                  >
                    <ExternalLink size={14} />
                    <span>View Certificate</span>
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {achievement.title}
              </h3>

              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">{achievement.issuer}</span>
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                  {achievement.date}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
