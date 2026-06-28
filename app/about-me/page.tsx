import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import AboutMe from "@/components/about-me/AboutMe";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Akanksha  Singh, software developer based in India. CTO at Ezlearn, Dev Intern at TitanTech Investments. Tech stack: React, Next.js, TypeScript, Rust, ASP.NET, MERN, Docker, GCP, Python.",
};

export default function AboutMePage() {
  return (
    <>
      <Header />
      <AboutMe />
      <Footer />
    </>
  );
}
