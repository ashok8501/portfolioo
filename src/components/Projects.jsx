import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Tag } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'Sentiment Analysis on Restaurant Reviews',
      image: 'https://res.cloudinary.com/ddkzadleu/image/upload/v1746212217/restaurent_qgntku.jpg',
      description: [
        '• Developed a machine learning model to classify restaurant reviews as positive, negative, or neutral, effectively analyzing customer feedback.',
        '• Implemented classification techniques to assess key factors influencing customer satisfaction.',
        '• Utilized tools like MultinomialNB for model training and evaluation to enhance prediction accuracy.',
      ],
      tags: ['Python', 'NLP', 'MultinomialNB', 'Classification'],
      category: 'ML',
    },
    {
      id: 2,
      title: 'Heart Disease Predictions using TensorFlow Technology',
      image: 'https://res.cloudinary.com/ddkzadleu/image/upload/v1746212271/heart_h1vusb.jpg',
      description: [
        '• Built a predictive model to assess the risk of heart disease based on patient data using TensorFlow technology.',
        '• Applied deep learning techniques to improve the accuracy of medical predictions, assisting in early diagnosis.',
        '• Optimized model performance through data preprocessing and hyperparameter tuning, ensuring reliable results.',
      ],
      tags: ['TensorFlow', 'Deep Learning', 'Healthcare AI', 'Python'],
      category: 'AI',
    },
    {
      id: 3,
      title: 'Crop Disease Prediction using Image Classification',
      image: 'https://res.cloudinary.com/ddkzadleu/image/upload/v1746212432/crop_g6nnhc.jpg',
      description: [
        '• Built an image classification model using Keras to detect diseases in plant leaves from captured images.',
        '• Trained CNN models on custom agricultural datasets for real-time prediction of healthy vs. infected crops.',
        '• Integrated the model into a mobile app with TensorFlow Lite for offline use by farmers.',
      ],
      tags: ['Keras', 'CNN', 'Image Classification', 'TensorFlow Lite'],
      category: 'AI',
    },
    {
      id: 4,
      title: 'Doctor Booking Frontend Application',
      image: 'https://res.cloudinary.com/ddkzadleu/image/upload/v1746212515/doctirr_vl1r2o.jpg',
      description: [
        '• Developed a responsive doctor appointment booking interface using React and Tailwind CSS.',
        '• Implemented routing, form validation, and calendar integration for scheduling.',
        '• Ensured mobile-first design and smooth UI transitions for better patient experience.',
      ],
      tags: ['React', 'JavaScript', 'Tailwind CSS', 'Frontend'],
      category: 'Web',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
              <span className="text-blue-800 dark:text-blue-300 font-medium">Projects</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Featured <span className="text-blue-600 dark:text-blue-400">Work</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 transform group ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                    {project.category}
                  </span>
                </div>

                <ul className="text-gray-600 dark:text-gray-300 text-sm mb-4 list-disc list-inside space-y-1">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
