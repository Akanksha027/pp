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
  image?: string;
  video?: string;
  number: string;
}

export default function TitanTech() {
  const project: ProjectDetail = {
    title: "TitanTech Investments",
    description:
      "A professional investment platform for TitanTech Investments, a Dubai-based investment firm. Showcasing organizational hierarchy, team structure, and investment opportunities with a sophisticated digital presence.",
    client: "TitanTech Investments",
    services: "Website Development, UI/UX Design, Corporate Branding",
    image: "/works/titan/1.jpeg",
    liveLink: "https://testoftitan.vercel.app/",
  };

  const sections: ProjectSection[] = [
    {
      icon: "video",
      title: "Dynamic Visual Presentation",
      description:
        "Engaging video content integrated into the platform to showcase the company's vision, investment strategies, and success stories in an immersive and compelling format.",
      video: "/works/titan/vid.mov",
      number: "1",
    },
    {
      icon: "organization",
      title: "Organizational Hierarchy",
      description:
        "Clear and professional display of the company's organizational structure, showcasing leadership and team members to build trust and transparency with potential investors and partners.",
      image: "/works/titan/2.jpeg",
      number: "2",
    },
    {
      icon: "professional",
      title: "Professional Corporate Design",
      description:
        "Sophisticated and elegant design language reflecting the premium nature of the investment firm, with attention to detail and user experience for high-net-worth individuals and institutional investors.",
      image: "/works/titan/3.jpeg",
      number: "3",
    },
    {
      icon: "global",
      title: "Dubai-Based Global Reach",
      description:
        "Platform designed to represent a Dubai-based investment company with international appeal, combining Middle Eastern business sophistication with global investment standards.",
      image: "/works/titan/2.jpeg",
      number: "4",
    },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "organization":
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        );
      case "video":
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
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        );
      case "professional":
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
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        );
      case "global":
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
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
                  {section.video ? (
                    <video
                      src={section.video}
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
