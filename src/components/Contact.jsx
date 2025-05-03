import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Send, Github, Linkedin, FileText, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);

        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
              <span className="text-blue-800 dark:text-blue-300 font-medium">Contact</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div 
            className={`lg:w-5/12 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h4>
                    <a href="mailto: kuchipudiashokreddy@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                     kuchipudiashokreddy@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">Available on request</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Visakhapatnam, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/ashok8501" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-gray-100 dark:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-all" 
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/ashok-reddy-kuchipudi-3762aa291/"  // Replace with your LinkedIn URL
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-gray-100 dark:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-all" 
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>

                  <a 
                    href="/project/resume.pdf"  // Replace with the actual link to your resume
                    className="p-3 bg-gray-100 dark:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-all" 
                    aria-label="Resume"
                  >
                    <FileText size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`lg:w-7/12 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Send Me a Message
              </h3>

              {submitSuccess ? (
                <div className="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 p-4 mb-6 rounded">
                  <p className="text-green-700 dark:text-green-300">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`} placeholder="Your name" />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`} placeholder="Your email" />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`w-full px-4 py-2 rounded-lg border ${errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`} placeholder="Subject" />
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400`} placeholder="Your message"></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <div className="text-center">
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400">
                      {isSubmitting ? <span>Sending...</span> : <span>Send Message</span>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
