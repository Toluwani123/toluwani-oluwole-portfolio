import React from 'react'

function Skills() {
    const skillCategories = [
        {
        title: 'Frontend',
        skills: [
            { name: 'React', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'Next.js', level: 75 }
        ]
        },
        {
        title: 'Backend',
        skills: [
            { name: 'Django', level: 95 },
            { name: 'Express', level: 85 },
            { name: 'SpringBoot', level: 75 },
            { name: 'PostgreSQL', level: 70 }
        ]
        },
        {
        title: 'Tools & Others',
        skills: [
            { name: 'Git', level: 85 },
            { name: 'Solidity', level: 65 },
            { name: 'AWS', level: 60 },
            { name: 'ScikitLearn', level: 85 }
        ]
        }
    ];
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through academic projects, personal development, 
            and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <span className="text-gray-600 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full transition-all duration-700 ease-out group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Always learning and expanding my skillset
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Machine Learning', 'Dart', 'React Native', 'Java', 'Rust'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills