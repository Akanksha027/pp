import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Nosta from "@/components/works/Nosta";

export const metadata: Metadata = {
  title: "Nosta",
  description:
    "Nosta — freelance ride-hailing app for Paul Martins by Akanksha Singh. Uber-style mobile experience with real-time tracking, driver matching, and trip booking.",
};

export default function NostaPage() {
  return (
    <>
      <Header />
      <Nosta />
      <Footer />
    </>
  );
}
