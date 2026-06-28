import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SvsFood from "@/components/works/SvsFood";

export const metadata: Metadata = {
  title: "SVSFood Kiosk Dashboard",
  description:
    "A self-ordering kiosk app and complete console dashboard for SVSFood, developed by Akanksha  Singh.",
};

export default function SvsFoodPage() {
  return (
    <>
      <Header />
      <SvsFood />
      <Footer />
    </>
  );
}
