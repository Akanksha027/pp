"use client";

import React from "react";
import NostaDownloadButton from "./NostaDownloadButton";
import ProjectDetailLayout, {
  type ProjectDetailData,
  type ProjectSectionData,
} from "./ProjectDetailLayout";

const project: ProjectDetailData = {
  title: "Nosta",
  description:
    "An on-demand ride-hailing mobile app built for freelance client Paul Martins. Nosta connects riders with nearby drivers in real time — with live trip tracking, fare estimates, driver matching, and a fast booking experience similar to Uber.",
  client: "Paul Martins · Freelance",
  services: "React Native, Real-time Tracking, Maps & Geolocation, Mobile UI/UX",
  image: "/nosta/3.jpeg",
  verticalHero: true,
};

const sections: ProjectSectionData[] = [
  {
    icon: "app",
    title: "App Preview",
    description:
      "A walkthrough of the Nosta rider experience — finding nearby drivers, booking a ride, tracking trips live on the map, and completing payments through a clean, mobile-first interface.",
    video: "/nosta/nostavideo.mp4",
    vertical: true,
    videoAutoplay: true,
    number: "1",
  },
  {
    icon: "photo",
    title: "App Screens",
    description:
      "Key screens from the Nosta app — onboarding, home map view, ride booking flow, and live driver tracking designed for speed, clarity, and everyday use.",
    images: ["/nosta/2.jpeg", "/nosta/1.jpeg", "/nosta/4.jpeg"],
    number: "2",
  },
];

export default function Nosta() {
  return (
    <ProjectDetailLayout
      project={project}
      sections={sections}
      customAction={<NostaDownloadButton />}
    />
  );
}
