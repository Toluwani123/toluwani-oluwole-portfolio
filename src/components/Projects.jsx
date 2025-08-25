import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Hammer, DollarSign, Home } from 'lucide-react';


function Projects() {

    const projects = [
        {
            title: 'MangaMorph AI',
            description: 'A full-stack platform that translates Japanese manga into English using OCR and AI translation while preserving original layouts and designs.',
            image: 'https://brand.github.com/_next/static/media/logo-09.74e790e1.png',
            technologies: ['Django REST', 'React', 'Google Vision API', 'Google Translation NMT'],
            category: 'AI/Translation',
            icon: Globe,
            github: 'https://github.com/Toluwani123/MangaMorph',
            live: 'https://example.com/mangamorph'
        },
        {
            title: 'Samthafs Construction',
            description: 'A modern construction company site with a Django REST backend powering a custom CMS (projects, services, inquiries) and a responsive React/Next.js frontend.',
            image: 'https://brand.github.com/_next/static/media/logo-09.74e790e1.png',
            technologies: ['Django REST', 'Next.js/React', 'PostgreSQL', 'TailwindCSS', 'Docker', 'Nginx'],
            category: 'Business Website',
            // If you use lucide-react, you can import { Hammer } and use that here:
            icon: Hammer,
            github: 'https://github.com/Toluwani123/Samthafs-Construction',
            live: 'https://samthafsapp.onrender.com/'
        },
        
        {
            title: 'SprintBudgetPro',
            description: 'An AI-assisted micro-budgeting tool that helps users manage weekly spending sprints with real-time transaction tracking and categorization.',
            image: 'https://brand.github.com/_next/static/media/logo-09.74e790e1.png',
            technologies: ['Django REST', 'React Native', 'OpenAI API', 'Postgres'],
            category: 'FinTech',
            icon: DollarSign,
            github: 'https://github.com/yourhandle/sprintbudgetpro',
            live: 'https://github.com/Toluwani123/SprintBudget'
        },
        {
            title: 'RateMyApartments',
            description: 'A campus-specific apartment review site where students can leave ratings, comments, and access housing data with advanced filters.',
            image: 'https://brand.github.com/_next/static/media/logo-09.74e790e1.png',
            technologies: ['Django', 'React', 'PostgreSQL', 'TailwindCSS'],
            category: 'Web App',
            icon: Home,
            github: 'https://github.com/Toluwani123/RateMyAparments',
            live: 'https://example.com/ratemyapartments'
        },
    ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of projects that showcase my technical skills and passion 
            for creating meaningful applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex space-x-3">
                    <a
                      href={project.github}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} className="text-gray-800" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} className="text-gray-800" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <project.icon size={20} className="text-blue-600" />
                    <span className="text-sm text-gray-500 font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/Toluwani123"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects