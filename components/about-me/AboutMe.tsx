"use client";

import React from "react";

const techStack = [
  "HTML | CSS | JS",
  "React",
  "React Native",
  "TypeScript",
  "MERN Stack",
  "Next.js",
  "PostgreSQL | MongoDB",
  "Docker",
  "Git | Github",
  "GCP",
  "Python",
];

const employment = [
  {
    role: "CTO",
    company: "Ezlearn",
    period: "Feb 2025 - May 2025",
    description:
      "Led end-to-end development of EzLearn's web platform, including architecture, backend services, and deployment. Handling 1,000+ monthly active users with 99.9% uptime.",
  },
];

const internships = [
  {
    role: "Dev Intern",
    company: "TitanTech Investments, Dubai",
    period: "Jun 2025 - Aug 2025",
    bullets: [
      "Built a custom CRM system tailored for client and investment management.",
      "Developed investment automation tools to streamline portfolio execution.",
      "Managed multi-level infrastructure, integrating stock market data and client investment pipelines into the company's systems.",
    ],
  },
];

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-black pt-16 sm:pt-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left side - Content */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-4 sm:mb-6 lg:mb-8 tracking-tight">
                About Me
              </h1>
              <p className="text-white/80 text-lg sm:text-xl font-medium mb-2">
                Akanksha  Singh
              </p>
              <p className="text-white/60 text-base sm:text-lg mb-4">
                SOFTWARE DEVELOPER @ INDIA & 9810433989
              </p>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                Software developer focused on building scalable web, mobile Applications. Experienced with Next.js, React Native,
                TypeScript, and cloud-deployed architectures.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10"></div>

            {/* Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/70 text-sm sm:text-base">
              <p>India</p>
              <p>9810433989</p>
              <p className="sm:col-span-2">
                <a
                  href="mailto:akanksharizz0@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  akankshasingh0085@gmail.com
                </a>
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                © LINKS °
              </p>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a
                    href="https://github.com/Akanksha027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/akanksha---singh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                © TECH STACK ©
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 bg-white/5 rounded-full text-xs sm:text-sm text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10"></div>

            {/* Employment */}


            {/* Internships */}
            {/* <div className="space-y-6">
              <h2 className="text-white/40 text-xs uppercase tracking-widest">
                INTERNSHIPS
              </h2>
              {internships.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-white/60">
                    <div className="font-medium text-white/80">
                      {exp.role} at {exp.company}
                    </div>
                    <div className="sm:col-span-2 sm:text-right text-white/40">
                      {exp.period}
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right side - Image */}
          <div className="lg:sticky lg:top-16 order-first lg:order-last">
            <div className="aspect-square bg-white/10 rounded-xl sm:rounded-2xl overflow-hidden max-w-md mx-auto lg:max-w-none">
              <img
                src="/akanksha1.jpeg"
                alt="Akanksha  Singh"
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
