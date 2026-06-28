import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import TitanTech from "@/components/works/TitanTech";

export const metadata: Metadata = {
  title: "TitanTech Investments",
  description:
    "Professional investment platform for TitanTech Investments, Dubai. Website development, UI/UX design, corporate branding. By Akanksha  Singh.",
};

export default function TitanTechPage() {
  return (
    <>
      <Header />
      <TitanTech />
      <Footer />
    </>
  );
}
