"use client";

import React from "react";
import DownloadButton from "./DownloadButton";
import ProjectDetailLayout, {
  type ProjectDetailData,
  type ProjectSectionData,
} from "./ProjectDetailLayout";

const project: ProjectDetailData = {
  title: "PeriPeri",
  description:
    "A period support app that helps track cycles, symptoms, phase-based reminders, and offers two roles: 'self' for personal tracking and 'other' for loved ones (friend, sister, mother, etc.) to view and support. Features include period logging, symptom diary, personalized reminders, and shared access for caregivers.",
  client: "App · Personal Product",
  services:
    "React Native Supabase Auth, Gemini/Groq AI, Multi-layer caching, ",
  image: "/periperi/main.jpeg",
  // liveLink: "https://periperi.vercel.app",
  // links: [
  //   { label: "Sheets (Guest)", href: "https://periperi.vercel.app/sheets" },
  //   { label: "Patterns (Guest)", href: "https://periperi.vercel.app/patterns" },
  //   { label: "Analytics (Guest)", href: "https://periperi.vercel.app/analytics" },
  // ],
};

const sections: ProjectSectionData[] = [
  {
    icon: "video",
    title: "Idea Intro Video",
    description:
      "Designed and developed a minimalist, user-centric period tracking application focused on simplicity, comfort, and everyday usability. Unlike feature-heavy period tracker apps, Peri Peri prioritizes its core purpose—helping users track their menstrual cycle through a clean, distraction-free experience. The app features two dedicated interfaces: one for users to manage their cycle, moods, and symptoms, and another for trusted companions (such as a friend, mother, or sister) to receive shared updates and reminders, enabling them to provide thoughtful support while respecting the user's privacy.",
    video: "/periperi/video.mp4",
    number: "1",
  },
  {
    icon: "photo",
    title: "App Photos",
    description:
      "There are some images of the interface of PeriPeri!",
    images: ["/periperi/ss3.jpeg", "/periperi/ss1.jpeg", "/periperi/ss2.jpeg"],
    number: "2",
  },



];

export default function periperi() {
  return (
    <ProjectDetailLayout
      project={project}
      sections={sections}
      customAction={<DownloadButton />}
    />
  );
}
