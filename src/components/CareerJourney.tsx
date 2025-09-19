"use client";

import { portfolioData } from "@/data.ts/portfolio";
import React, { useEffect, useRef } from "react";
interface CareerItem {
  year: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface CareerJourneyProps {
  className?: string;
}

const CareerJourney: React.FC<CareerJourneyProps> = ({ className = "" }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const { careerJourney } = portfolioData;

  return (
    <section
      className={`py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50 ${className}`}
      id="journey"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career Growth Journey
          </h2>
          <div className="w-60 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            From intern to professional developer. Building user-centric web solutions with React,
            Vue.js, and other modern tech stack
          </p>

          {/* Call to Action */}
          <div className="text-center mt-16 -mb-14">
            <div className="inline-flex items-center space-x-2 text-gray-600">
              <span className="w-8 h-px bg-gray-300"></span>
              <span className="text-sm font-medium">Ready for the next challenge</span>
              <span className="w-8 h-px bg-gray-300"></span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          className="relative"
          ref={timelineRef}
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 rounded-full hidden lg:block"></div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 rounded-full lg:hidden"></div>

          <div className="space-y-12">
            {careerJourney.map((item: CareerItem, index: number) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`relative flex ${
                  index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                } justify-start opacity-0 transform translate-y-8 transition-all duration-700`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg z-10"></div>

                {/* Content Card */}
                <div
                  className={`ml-16 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}
                >
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                      <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-3">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.role}</h3>
                      <p className="text-blue-100 font-medium text-lg">{item.company}</p>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start"
                            >
                              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default CareerJourney;
