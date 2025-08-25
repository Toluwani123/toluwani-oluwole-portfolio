import React from 'react';
import { BookOpen, Code, Coffee, Lightbulb } from 'lucide-react';


function About() {
    const highlights = [
        { icon: BookOpen, title: 'Computer Engineering Student', desc: 'Currently pursuing my degree with focus on software development' },
        { icon: Code, title: 'Fullstack Development', desc: 'Building end-to-end web applications with modern technologies' },
        { icon: Lightbulb, title: 'Problem Solver', desc: 'Love tackling complex challenges with creative solutions' },
        { icon: Coffee, title: 'Continuous Learner', desc: 'Always exploring new technologies and best practices' }
    ];
  return (
        <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                I'm a dedicated computer engineering student with a passion for creating 
                innovative web solutions that make a difference.
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                As a computer engineering student, I've discovered my passion lies in the 
                intersection of technology and user experience. I thrive on building 
                applications that not only function flawlessly but also provide intuitive, 
                engaging experiences for users.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                My journey in software development has taught me the importance of 
                clean, maintainable code and collaborative development practices. I'm 
                actively seeking internship opportunities where I can contribute to 
                meaningful projects while continuing to grow as a developer.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or working on personal projects 
                that challenge me to learn something new.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map(({ icon: Icon, title, desc }, index) => (
                <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm">{desc}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
  )
}

export default About