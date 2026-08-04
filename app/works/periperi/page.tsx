import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import PeriPeri from "@/components/works/PeriPeri";

export const metadata: Metadata = {
  title: "periperi | SaaS DSA Placement Platform",
  description:
    "Gamified DSA placement prep: Deep LeetCode Sync, curated sheets, AI mentor, multiplayer lobbies. Next.js, Prisma, Sentry, PostHog. Built by Akanksha  Singh.",
};

export default function periperiPage() {
  return (
    <>
      <Header />
      <PeriPeri />
      <Footer />
    </>
  );
}
