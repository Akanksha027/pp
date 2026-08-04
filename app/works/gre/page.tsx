import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Gre from "@/components/works/Gre";

export const metadata: Metadata = {
  title: "gre",
  description:
    "College-only dating app. Real-time chat (Supabase), swipes, matches. Internal testing. By Akanksha  Singh.",
};

export default function CampusCupidPage() {
  return (
    <>
      <Header />
      <Gre />
      <Footer />
    </>
  );
}
