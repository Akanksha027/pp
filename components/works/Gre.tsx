"use client";

import React from "react";
import ProjectDetailLayout, {
  type ProjectDetailData,
  type ProjectSectionData,
} from "./ProjectDetailLayout";

const project: ProjectDetailData = {
  title: "GreTestPrep",
  description:
    "Designed and developed a modern, responsive web platform for GRE exam preparation, featuring an intuitive user interface, course and pricing sections, student success metrics, testimonials, and free trial onboarding. Focused on creating an engaging user experience through clean layouts, interactive components, clear call-to-actions, and performance-optimized design to improve student engagement and course conversions. Built with responsive design principles to ensure seamless accessibility across desktop and mobile devices.",
  client: "Personal",
  services: "Web App , NextJs , Spring boot",
  image: "/works/gre/1.png",
  links: [
    { label: "live Preview", href: "https://gre-prep.vercel.app/" }
  ],
};

const sections: ProjectSectionData[] = [
  {
    icon: "users",
    title: "Home Interface",
    description:
      "Developed a fully responsive GRE coaching website for a client in Delhi using Next.js, TypeScript, Tailwind CSS, and React. Built reusable components, optimized performance, and implemented a modern, mobile-first design to deliver a fast, scalable, and user-friendly experience across all devices.",
    image: "/works/gre/2.png",
    number: "1",
  },
];

export default function Gre() {
  return <ProjectDetailLayout project={project} sections={sections} />;
}
