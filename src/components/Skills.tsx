"use client";

import { portfolioData } from "@/data.ts/portfolio";
import React, { useEffect, useRef } from "react";

const Skills = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-60 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and growing skill set
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioData.skills.map((skillCategory, index) => (
            <div
              key={index}
              ref={(el) => {
                skillRefs.current[index] = el;
              }}
              className="opacity-0 transform translate-y-8 transition-all duration-700"
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                {/* Card Header with Gradient */}
                {/* <div className={`bg-gradient-to-r ${skillCategory.gradient} p-6`}> */}
                <div className={`bg-gradient-to-r from-blue-600 to-purple-600 p-6`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                      {skillCategory.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{skillCategory.title}</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-3">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default shadow-sm hover:shadow-md border border-gray-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Skill Count Indicator */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-end text-sm text-gray-500">
                      <span>{skillCategory.skills.length} technologies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Continuous Learning Philosophy
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I believe in constantly evolving my skill set to stay current with industry trends.
              From mastering the fundamentals to exploring cutting-edge technologies, I&rsquo;m committed
              to delivering high-quality solutions using the best tools for each project.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Skills;
