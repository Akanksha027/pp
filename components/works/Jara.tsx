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

export default function Jara() {
  const project: ProjectDetail = {
    title: "Jara Beach Resort",
    description:
      "A high-performance booking platform for Jara Beach Resort, Nigeria's premier award-winning all-inclusive beachfront escape. Featuring a robust reservation system that manages thousands of active clients with ease.",
    client: "Jara Beach Resort",
    services: "Web Development, Booking Engine, UI/UX Design",
    image: "/jara/image.png",
    liveLink: "https://booking.jarabeachresort.com/",
  };

  const sections: ProjectSection[] = [
    {
      icon: "beach",
      title: "Award-Winning Escape",
      description:
        "Jara Beach Resort offers a unique beachfront experience. The platform was designed to reflect the resort's premium branding and provide an inviting digital gateway to this exclusive destination.",
      image: "/jara/image.png",
      number: "1",
    },
    {
      icon: "clients",
      title: "1000+ Active Clients",
      description:
        "Built to scale, the booking system features over 1000+ active clients, handling high traffic and complex reservation requirements while maintaining a smooth and responsive user experience.",
      image: "/jara/image copy.png",
      number: "2",
    },
    {
      icon: "booking",
      title: "Seamless Reservations",
      description:
        "The integrated booking engine provides real-time availability, automated confirmations, and secure payment processing, ensuring a hassle-free journey from discovery to check-in.",
      image: "/jara/image.png",
      number: "3",
    },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "beach":
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
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0A9 9 0 115.636 5.636m12.728 12.728A9 9 0 115.636 5.636"
            />
          </svg>
        );
      case "clients":
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
      case "booking":
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
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
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
