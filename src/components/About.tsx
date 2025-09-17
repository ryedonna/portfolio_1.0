'use client'

import { portfolioData } from '@/data.ts/portfolio'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center order-1 lg:order-1">
            <div className="relative inline-block">
              <Image
                src="/images/profile.webp" // Add your profile image to public/images/
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7+H9v4D6v0wMcg==" />
            </div>
          </div>
          <div className="text-center lg:text-left order-2 lg:order-1">
            {portfolioData.about.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 mb-6">
                {paragraph}
              </p>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About