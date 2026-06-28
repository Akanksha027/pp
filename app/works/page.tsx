import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ProjectsShowcase from "@/components/works/Index";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Selected projects by Akanksha  Singh: SharpOrders, LuxenEdge, Jara Beach Resort, Lufasi Lodges, Ezlearn, YogaFlow. Web and mobile development, logistics, hospitality, EdTech, wellness.",
};

export default function WorksPage() {
  return (
    <>
      <Header />
      <ProjectsShowcase />
      <Footer />
    </>
  );
}
