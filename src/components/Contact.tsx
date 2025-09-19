"use client";

import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import { portfolioData } from "@/data.ts/portfolio";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Let&rsquo;s Work Together
        </h2>

        <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
          I&rsquo;m always interested in new opportunities and interesting projects. Let&rsquo;s
          create something amazing together!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href={`mailto:${portfolioData.personal.email}`}
            className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 font-semibold"
          >
            <Mail size={20} />
            Email Me
          </Link>

          <Link
            href={portfolioData.personal.linkedin}
            target="_blank"
            className="flex items-center gap-3 border-2 border-indigo-500 hover:bg-indigo-500 px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 font-semibold"
          >
            <Linkedin size={20} />
            LinkedIn
          </Link>

          <Link
            href={portfolioData.personal.github}
            target="_blank"
            className="flex items-center gap-3 border-2 border-purple-500 hover:bg-purple-500 px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 font-semibold"
          >
            <Github size={20} />
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
