'use client'

import { portfolioData } from "@/data.ts/portfolio"

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center gap-2">
                <span className="text-2xl">{skillGroup.icon}</span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills