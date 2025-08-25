import React from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';


function Hero() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

  

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="animate-fade-in-up">
            <div className="mb-6">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-800">TO</span>
                </div>
                </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Toluwani Oluwole
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
                Computer Engineering Student
            </p>
            <small className='text-gray-500'>Minor in Computer Science and Mathematics</small>

            <p className="py-6 text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
                Passionate fullstack developer seeking internship opportunities to build 
                innovative solutions and grow with cutting-edge technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                    href="/Resume.pdf"
                    download
                    className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                <Download className="mr-2" size={20} />
                    Download Resume
                </a>
                
                <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                >
                <Mail className="mr-2" size={20} />
                Let's Connect
                </button>
            </div>
            
            <div className="flex justify-center space-x-6">
                {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/Toluwani123' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/toluwani-oluwole-0674211aa' },
                { icon: Mail, label: 'Email', href: 'mailto:oluwoletoluwani@gmail.com' }
                ].map(({ icon: Icon, label, href }) => (
                <a
                    key={label}
                    href={href}
                    className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-gray-600 hover:text-blue-600"
                    aria-label={label}
                >
                    <Icon size={24} />
                </a>
                ))}
            </div>
            </div>
        </div>
        
        <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
            <ChevronDown size={32} className="text-gray-400" />
        </button>
        </section>
    )
}

export default Hero