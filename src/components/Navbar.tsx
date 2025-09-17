'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#home" className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            RE
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium relative group"
              >
                {item}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar