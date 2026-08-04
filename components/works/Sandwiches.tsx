"use client";

import React from "react";
import SandwichesDownloadButton from "./SandwichesDownloadButton";
import ProjectDetailLayout, {
  type ProjectDetailData,
  type ProjectSectionData,
} from "./ProjectDetailLayout";

const project: ProjectDetailData = {
  title: "Sandwiched",
  description:
    "A complete end-to-end food delivery solution — for customers who want fast, fresh meals and restaurant owners who want total control. Built by Akanksha.",
  client: "App . Personal",
  services: "React Native , Supabase Auth",
  image: "/works/sandwiches/3.png",
  links: [
    { label: "live Preview", href: "https://sandwiches-web.vercel.app/" },
  ],
};

const sections: ProjectSectionData[] = [
  {
    icon: "photo",
    title: "Admin Pannel Images ",
    description:
      "These are some interfaces of Admin Pannel!",
    images: ["/works/sandwiches/adm1.jpeg", "/works/sandwiches/adm2.jpeg", "/works/sandwiches/adm3.jpeg"],
    number: "2",
  },
  {
    icon: "photo",
    title: "Customer Interface Photos",
    description:
      "There are some images of the interface of PeriPeri!",
    images: ["/works/sandwiches/4.jpeg", "/works/sandwiches/5.jpeg", "/works/sandwiches/6.jpeg"],
    number: "2",
  },
];

export default function Sandwiches() {
  return <ProjectDetailLayout project={project} sections={sections} customAction={<SandwichesDownloadButton />} />;
}
