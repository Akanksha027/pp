import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";

export const metadata: Metadata = {
  description:
    "Portfolio of Akanksha  Singh, software developer building scalable web, mobile, and backend systems. Next.js, React Native, TypeScript, Rust, ASP.NET. Based in India.",
};

export default function Home() {
  return <LandingPage />;
}
