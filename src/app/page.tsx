// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

// 'use client'

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
//               AC
//             </div>
//             <div className="hidden md:flex space-x-8">
//               <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">About</a>
//               <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Skills</a>
//               <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Projects</a>
//               <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Contact</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white relative overflow-hidden">
//         {/* Floating particles */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/50 rounded-full animate-float"></div>
//           <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/50 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
//           <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/50 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
//           <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/50 rounded-full animate-float" style={{animationDelay: '6s'}}></div>
//         </div>

//         <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
//             Alex Chen
//           </h1>
//           <p className="text-lg md:text-xl lg:text-2xl mb-4 opacity-90 animate-fade-in-up animation-delay-200">
//             Frontend Developer & UI/UX Enthusiast
//           </p>
//           <p className="text-base md:text-lg mb-8 opacity-80 animate-fade-in-up animation-delay-400 max-w-2xl mx-auto">
//             Crafting beautiful, responsive web experiences with modern technologies
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
//             <a href="#projects" className="bg-white text-indigo-600 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-lg">
//               View My Work
//             </a>
//             <a href="#contact" className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:-translate-y-1">
//               Get In Touch
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="section py-16 md:py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
//             About Me
//           </h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div className="order-2 lg:order-1 space-y-6">
//               <p className="text-lg text-gray-600">
//                 I'm a passionate frontend developer with 3+ years of experience creating engaging digital experiences. I love turning complex problems into simple, beautiful designs that users enjoy interacting with.
//               </p>
//               <p className="text-lg text-gray-600">
//                 When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through blog posts and mentoring.
//               </p>
//               <p className="text-lg text-gray-600">
//                 I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
//               </p>
//             </div>
//             <div className="order-1 lg:order-2 text-center">
//               <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl md:text-8xl shadow-2xl hover:scale-105 transition-transform duration-300">
//                 👨‍💻
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="section py-16 md:py-20">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
//             Skills & Technologies
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//             {/* Frontend Frameworks */}
//             <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//               <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center gap-3">
//                 <span className="text-2xl">🚀</span>
//                 Frontend Frameworks
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {['React', 'Next.js', 'Vue.js', 'Angular', 'Nuxt.js'].map((skill) => (
//                   <span key={skill} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:scale-105 transition-transform">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             {/* Languages & Core */}
//             <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//               <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center gap-3">
//                 <span className="text-2xl">💻</span>
//                 Languages & Core
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SASS'].map((skill) => (
//                   <span key={skill} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:scale-105 transition-transform">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Styling & UI */}
//             <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//               <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center gap-3">
//                 <span className="text-2xl">🎨</span>
//                 Styling & UI
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {['Tailwind CSS', 'Bootstrap', 'Material-UI', 'Styled Components', 'Figma'].map((skill) => (
//                   <span key={skill} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:scale-105 transition-transform">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Tools & Others */}
//             <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//               <h3 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center gap-3">
//                 <span className="text-2xl">🛠️</span>
//                 Tools & Others
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {['Git', 'Webpack', 'Vite', 'Jest', 'Cypress'].map((skill) => (
//                   <span key={skill} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:scale-105 transition-transform">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="section py-16 md:py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
//             Featured Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {[
//               { 
//                 title: 'E-Commerce Dashboard', 
//                 icon: '🛒', 
//                 desc: 'A modern admin dashboard for e-commerce platforms built with React, Redux, and Chart.js. Features real-time analytics, inventory management, and responsive design.',
//                 tech: ['React', 'Redux', 'Chart.js', 'Tailwind CSS']
//               },
//               { 
//                 title: 'Task Management App', 
//                 icon: '📱', 
//                 desc: 'A collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features. Built with Vue.js and Firebase.',
//                 tech: ['Vue.js', 'Firebase', 'Vuex', 'CSS3']
//               },
//               { 
//                 title: 'Music Streaming Interface', 
//                 icon: '🎵', 
//                 desc: 'A beautiful music streaming interface with advanced audio controls, playlist management, and social features. Implemented using React and Web Audio API.',
//                 tech: ['React', 'Web Audio API', 'Node.js', 'MongoDB']
//               }
//             ].map((project, index) => (
//               <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
//                 <div className="h-40 md:h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl md:text-6xl text-white relative overflow-hidden">
//                   {project.icon}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//                 </div>
//                 <div className="p-4 md:p-6">
//                   <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-800">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
//                     {project.desc}
//                   </p>
//                   <div className="flex flex-wrap gap-1.5 mb-4">
//                     {project.tech.map((tech, techIndex) => (
//                       <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex gap-3">
//                     <button className="flex-1 bg-indigo-600 text-white py-2 px-3 md:px-4 rounded-lg hover:bg-indigo-700 transition-colors text-sm md:text-base">
//                       Live Demo
//                     </button>
//                     <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 md:px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm md:text-base">
//                       GitHub
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="section py-16 md:py-20 bg-gray-900 text-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
//             Let's Work Together
//           </h2>
//           <p className="text-lg md:text-xl mb-8 md:mb-12 text-gray-300 max-w-2xl mx-auto">
//             I'm always interested in new opportunities and interesting projects. Let's create something amazing together!
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
//             <a href="mailto:alex@example.com" className="bg-indigo-600 hover:bg-indigo-700 px-6 md:px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 font-semibold flex items-center justify-center gap-2">
//               <span>📧</span>
//               Email Me
//             </a>
//             <a href="#" className="border-2 border-indigo-500 hover:bg-indigo-500 px-6 md:px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 font-semibold flex items-center justify-center gap-2">
//               <span>💼</span>
//               LinkedIn
//             </a>
//             <a href="#" className="border-2 border-purple-500 hover:bg-purple-500 px-6 md:px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 font-semibold flex items-center justify-center gap-2">
//               <span>🐙</span>
//               GitHub
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }