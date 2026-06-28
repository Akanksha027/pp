"use client";

import React from "react";

export interface ProjectDetailData {
  title: string;
  description: string;
  client: string;
  services: string;
  image: string;
  liveLink?: string;
  links?: { label: string; href: string }[];
}

export interface ProjectSectionData {
  icon: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  images?: string[];
  number: string;
}

function renderIcon(icon: string) {
  const iconClass = "w-8 h-8";
  const pathProps = {
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: "2",
  };
  switch (icon) {
    case "code":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path {...pathProps} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "lock":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            {...pathProps}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      );
    case "document":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            {...pathProps}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "database":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            {...pathProps}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      );
    case "api":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            {...pathProps}
            d="M8 9l3 3-3 3m5 0l3-3-3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "chart":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            {...pathProps}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      );
    case "app":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            {...pathProps}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    case "users":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            {...pathProps}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "lightbulb":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            {...pathProps}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      );
    case "target":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" strokeWidth="2" fill="currentColor" />
        </svg>
      );
    case "building":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            {...pathProps}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    default:
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            {...pathProps}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
  }
}

interface ProjectDetailLayoutProps {
  project: ProjectDetailData;
  sections: ProjectSectionData[];
  customAction?: React.ReactNode;
}

export default function ProjectDetailLayout({
  project,
  sections,
  customAction,
}: ProjectDetailLayoutProps) {
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
            <div className="flex flex-wrap gap-3 items-center">
              {customAction}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors border border-white/20"
                >
                  Live Site Preview
                </a>
              )}
              {project.links?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors border border-white/20"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-8 space-y-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-white/40 text-sm mb-2">Client / Type</p>
                  <p className="text-white/70 text-base">{project.client}</p>
                </div>
                <div>
                  <p className="text-white/40 text-sm mb-2">Stack / Services</p>
                  <p className="text-white/70 text-base">{project.services}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/10 rounded-3xl overflow-hidden">
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
                {section.images ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {section.images.map((img, i) => (
                      <div
                        key={i}
                        className="relative aspect-[9/19] rounded-2xl overflow-hidden bg-white/10"
                      >
                        <img
                          src={img}
                          alt={`${section.title} ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/10">
                    {section.video ? (
                      <video
                        src={section.video}
                        controls
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
