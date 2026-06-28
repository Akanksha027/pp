"use client";

import React from "react";

interface ProjectDetail {
  title: string;
  description: string;
  client: string;
  services: string;
  image: string;
  liveLink?: string;
}

interface ProjectSection {
  icon: string;
  title: string;
  description: string;
  image: string;
  number: string;
}

export default function Ezlearn() {
  const project: ProjectDetail = {
    title: "Ezlearn Platform",
    description:
      "Subscribe Once. Learn Always. An all-in-one learning platform providing access to engineering and tech courses with personalized roadmaps and Hindi language support.",
    client: "Ezlearn",
    services: "Platform Development, UI/UX Design, Branding",
    image: "/works/ezlearn.jpeg",
    liveLink: "https://ezlearn.in/",
  };

  const sections: ProjectSection[] = [
    {
      icon: "subscription",
      title: "All-in-One Subscription",
      description:
        "Access all engineering and tech courses with a single, affordable subscription starting at just ₹499 for 6 months.",
      image: "/works/ezlearn1.jpeg",
      number: "1",
    },
    {
      icon: "roadmap",
      title: "Personalized Learning Roadmaps",
      description:
        "AI-generated, tailored roadmaps to guide your learning journey based on your career goals.",
      image: "/works/ezlearn2.jpeg",
      number: "2",
    },
    {
      icon: "certificate",
      title: "Hands-on Projects and Certifications",
      description:
        "Practical learning experience with real-world projects and industry-recognized certifications to boost your career.",
      image: "/works/ezlearn1.jpeg",
      number: "3",
    },
    {
      icon: "language",
      title: "Hindi Language Courses",
      description:
        "All courses are delivered in Hindi for a deeper understanding, ensuring accessibility for learners across India.",
      image: "/works/ezlearn2.jpeg",
      number: "4",
    },
    {
      icon: "job",
      title: "Job Assistance & Resume Builder",
      description:
        "Integrated job portal and resume-making tools to help you land your dream job effortlessly.",
      image: "/works/ezlearn1.jpeg",
      number: "5",
    },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "subscription":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "roadmap":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
        );
      case "certificate":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        );
      case "language":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
        );
      case "job":
        return (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl sm:text-7xl font-light tracking-tight">
              {project.title}
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              {project.description}
            </p>
            {project.liveLink && (
              <div className="pt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors border border-white/20"
                >
                  Live Site Preview
                </a>
              </div>
            )}
            <div className="pt-8 space-y-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-white/40 text-sm mb-2">Client</p>
                  <p className="text-white/70 text-base">{project.client}</p>
                </div>
                <div>
                  <p className="text-white/40 text-sm mb-2">Service Provided</p>
                  <p className="text-white/70 text-base">{project.services}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/90 rounded-3xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="border-t border-white/10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="space-y-24">
          {sections.map((section, index) => (
            <div key={index} className="relative">
              <div className="absolute -top-4 right-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/40 text-sm font-light border border-white/10">
                {section.number}
              </div>
              <div className="bg-white/5 rounded-3xl p-8 sm:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-white/80">
                    {renderIcon(section.icon)}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-light">
                    {section.title}
                  </h2>
                </div>
                <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-8 max-w-4xl">
                  {section.description}
                </p>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/10">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
