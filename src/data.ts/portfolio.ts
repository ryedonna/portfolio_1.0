export const portfolioData = {
  personal: {
    name: "Ryedonna Epin",
    title: "Frontend Developer & UI/UX Enthusiast",
    subtitle: "Crafting beautiful, responsive web experiences with modern technologies",
    email: "ryedonnae@gmail.com",
    linkedin: "https://www.linkedin.com/in/ryedonna-e-103931121/",
    github: "https://github.com/ryedonna",
    profileImage: "/images/profile.webp",
  },
  about: {
    description: [
      "I'm a passionate frontend developer with 3+ years of experience creating engaging digital experiences. I love turning complex problems into simple, beautiful designs that users enjoy interacting with.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through blog posts and mentoring.",
      "I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.",
    ],
  },
  skills: [
    {
      category: "Frontend Frameworks",
      icon: "🚀",
      skills: ["React", "Next.js", "Vue.js"],
    },
    {
      category: "Languages & Core",
      icon: "💻",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SASS"],
    },
    {
      category: "Styling & UI",
      icon: "🎨",
      skills: ["Tailwind CSS", "Bootstrap", "Material-UI", "Styled Components"],
    },
    {
      category: "Tools & Others",
      icon: "🛠️",
      skills: ["Git", "SVN", "trello"],
    },
  ],
  projects: [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js 14 and TypeScript. Features a clean design with smooth animations, optimized images, contact form, and showcases projects and skills. Deployed with modern web development best practices.",
      icon: "💼",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "React", "Vercel"],
      liveUrl: "#", 
      githubUrl: "#", 
      image: "/images/project-portfolio.jpg",
    },
    {
      title: "Aeon Bank Assessment Project",
      description:
        "A Next.js application demonstrating a responsive navbar, a secure multi-step login flow with password encryption, and a transaction history dashboard. Features SHA-256 password hashing, mock API endpoints, and responsive UI with Tailwind CSS.",
      icon: "🏦",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Web Crypto API"],
      liveUrl: "#",
      githubUrl: "https://github.com/ryedonna/aeon-bank-assessment",
      image: "/images/project-aeon-bank.jpg",
    },
    {
      title: "Lattice Mobile Developer Assessment",
      description:
        "A React Native + TypeScript mobile app featuring AI-powered chat (Google Gemini integration) with streaming responses, conversation thread management, and an interactive dashboard with customizable widgets and real-time charts.",
      icon: "📱🤖",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Google Gemini API",
        "Tailwind (NativeWind)",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/ryedonna/lattice-assessment",
      image: "/images/project-lattice.jpg",
    },
  ],
};
