"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Project {
  name: string;
  image: string;
  slug: string;
  category: "development" | "branding";
  tag?: string;
}

export default function ProjectsShowcase() {
  const router = useRouter();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState<
    "development" | "branding"
  >("branding");

  const projects: Project[] = [
    // Recent Projects (development)
    {
      name: "PeriPeri",
      image: "/periperi/header.jpg",
      slug: "periperi",
      category: "development",
    },
    {
      name: "sandwiches",
      image: "/works/sandwiches/3.png",
      slug: "sandwiches",
      category: "development",
    },


    {
      name: "gre",
      image: "/works/gre/1.png",
      slug: "gre",
      category: "development",
    },
    // Recent Freelance (branding)
    {
      name: "SVSFood",
      image: "/svsfood/screenrecordingdashboard.mov",
      slug: "svsfood",
      category: "branding",
      tag: "₹5L+ / mo · Enterprise",
    },
    {
      name: "TitanTech Investments",
      image: "/works/titan/1.jpeg",
      slug: "titantech",
      category: "branding",
    },


    {
      name: "Ezlearn",
      image: "/works/ezlearn.jpeg",
      slug: "ezlearn",
      category: "branding",
    },

  ];

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory,
  );

  const handleMouseMove = (e: React.MouseEvent, slug: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center pt-20 pb-16 px-4">
        <div className="mb-14 flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => setSelectedCategory("development")}
            className={`inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full border-2 transition-all duration-300 font-semibold tracking-wide text-base sm:text-lg ${selectedCategory === "development"
              ? "bg-[#DFFF66] border-[#DFFF66] text-black"
              : "bg-white/5 border-white/20 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30"
              }`}
          >
            <div
              className={`w-2.5 h-2.5 rounded-full shrink-0 ${selectedCategory === "development" ? "bg-black" : "bg-white/50"}`}
            ></div>
            <span>Recent Projects</span>
          </button>
          <button
            onClick={() => setSelectedCategory("branding")}
            className={`inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full border-2 transition-all duration-300 font-semibold tracking-wide text-base sm:text-lg ${selectedCategory === "branding"
              ? "bg-[#DFFF66] border-[#DFFF66] text-black"
              : "bg-white/5 border-white/20 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30"
              }`}
          >
            <div
              className={`w-2.5 h-2.5 rounded-full shrink-0 ${selectedCategory === "branding" ? "bg-black" : "bg-white/50"}`}
            ></div>
            <span>Recent Freelance</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg">
              No projects found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="group relative bg-white/10 rounded-3xl aspect-video cursor-pointer transition-all duration-500 hover:bg-white/15 border border-white/10 hover:border-white/20"
                onMouseEnter={() => setHoveredProject(project.slug)}
                onMouseLeave={() => setHoveredProject(null)}
                onMouseMove={(e) => handleMouseMove(e, project.slug)}
                onClick={() => router.push(`/works/${project.slug}`)}
              >
                <div className="relative w-full h-full p-4 sm:p-6">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/20">
                    {project.image.endsWith('.mp4') || project.image.endsWith('.mov') ? (
                      <video
                        src={project.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoadedMetadata={(e) => {
                          e.currentTarget.currentTime = 1;
                        }}
                        onTimeUpdate={(e) => {
                          const video = e.currentTarget;
                          if (video.currentTime < 1) {
                            video.currentTime = 1;
                          } else if (video.duration && video.currentTime >= video.duration - 1) {
                            video.currentTime = 1;
                            video.play().catch(() => { });
                          }
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow-lg">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {project.tag && (
                  <div className="absolute -top-3 right-6 sm:right-8 z-30">
                    <span className="inline-block px-4 py-1.5 bg-[#DFFF66] text-black text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-widest shadow-xl border-2 border-black">
                      {project.tag}
                    </span>
                  </div>
                )}

                {hoveredProject === project.slug && (
                  <div
                    className="absolute pointer-events-none z-10"
                    style={{
                      left: `${cursorPosition.x}px`,
                      top: `${cursorPosition.y}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="px-5 py-3 bg-[#DFFF66] text-black rounded-full text-sm font-semibold whitespace-nowrap shadow-lg">
                      View project →
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
