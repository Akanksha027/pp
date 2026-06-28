"use client";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-20 mt-12 w-full">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl sm:text-7xl font-light tracking-tight mb-4">
              Freelance Reach
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
              A world map of every country and region where I've delivered freelance projects, from South Africa to the Middle East, West Africa, and across India.
            </p>
          </div>
          <MapComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
}
