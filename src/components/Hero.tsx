'use client'

import { portfolioData } from '@/data.ts/portfolio'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/50 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: '6s'
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          {portfolioData.personal.name}
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in-up animation-delay-200">
          {portfolioData.personal.title}
        </p>
        <p className="text-lg mb-8 opacity-80 animate-fade-in-up animation-delay-400">
          {portfolioData.personal.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <Link
            href="#projects"
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:-translate-y-1"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.3; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  )
}

export default Hero