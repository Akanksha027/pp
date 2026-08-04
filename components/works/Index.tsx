"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Project {
  name: string;
  image: string;
  slug: string;
  category: "development" | "branding";
  description: string;
  tag?: string;
}

export default function ProjectsShowcase() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<
    "development" | "branding"
  >("development");

  const projects: Project[] = [
    {
      name: "PeriPeri",
      image: "/periperi/header.jpg",
      slug: "periperi",
      category: "development",
      description:
        "Period support app with cycle tracking, reminders, and shared caregiver access.",
    },
    {
      name: "Sandwiches",
      image: "/works/sandwiches/3.png",
      slug: "sandwiches",
      category: "development",
      description:
        "End-to-end food delivery platform for customers and restaurant owners.",
    },
    {
      name: "GreTestPrep",
      image: "/works/gre/1.png",
      slug: "gre",
      category: "development",
      description:
        "Modern GRE prep website with courses, pricing, and trial onboarding.",
    },
    {
      name: "Nosta",
      image: "/nosta/3.jpeg",
      slug: "nosta",
      category: "branding",
      description:
        "Uber-style ride-hailing app built for freelance client Paul Martins.",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory,
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center px-3 pb-8 pt-24 sm:px-4 sm:pb-10 sm:pt-28 lg:px-5">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => setSelectedCategory("development")}
            className={`inline-flex items-center gap-3 rounded-full border-2 px-6 py-3 text-base font-semibold tracking-wide transition-all duration-300 sm:px-8 sm:py-3.5 sm:text-lg ${
              selectedCategory === "development"
                ? "border-[#DFFF66] bg-[#DFFF66] text-black"
                : "border-white/20 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white"
            }`}
          >
            <div
              className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                selectedCategory === "development" ? "bg-black" : "bg-white/50"
              }`}
            />
            <span>Recent Projects</span>
          </button>
          <button
            onClick={() => setSelectedCategory("branding")}
            className={`inline-flex items-center gap-3 rounded-full border-2 px-6 py-3 text-base font-semibold tracking-wide transition-all duration-300 sm:px-8 sm:py-3.5 sm:text-lg ${
              selectedCategory === "branding"
                ? "border-[#DFFF66] bg-[#DFFF66] text-black"
                : "border-white/20 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white"
            }`}
          >
            <div
              className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                selectedCategory === "branding" ? "bg-black" : "bg-white/50"
              }`}
            />
            <span>Recent Freelance</span>
          </button>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="px-6 py-20 text-center">
          <p className="text-lg text-white/40">No projects found in this category.</p>
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-3 px-3 pb-16 sm:gap-4 sm:px-4 lg:grid-cols-2 lg:px-5">
          {filteredProjects.map((project) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => router.push(`/works/${project.slug}`)}
              className="group relative min-h-[320px] w-full cursor-pointer overflow-hidden text-left sm:min-h-[380px] lg:min-h-[calc(100vh-16rem)]"
            >
              {project.image.endsWith(".mp4") || project.image.endsWith(".mov") ? (
                <video
                  src={project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:gap-6 sm:p-8 lg:p-10">
                <h3
                  className="max-w-[55%] text-2xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-[2.75rem]"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {project.name}
                </h3>
                <p className="max-w-[42%] text-right text-xs leading-relaxed text-white/75 sm:text-sm lg:text-[15px]">
                  {project.description}
                </p>
              </div>

              {project.tag && (
                <span className="absolute right-6 top-6 rounded-full border-2 border-black bg-[#DFFF66] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-black sm:right-8 sm:top-8 sm:text-xs">
                  {project.tag}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
