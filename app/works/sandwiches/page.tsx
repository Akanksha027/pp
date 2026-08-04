import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Sandwiches from "@/components/works/Sandwiches";

export const metadata: Metadata = {
  title: "sandwiches - akanksha's Secure Transfer Protocol",
  description:
    "Custom binary protocol over TCP/UDP, Rust, TLS. Lower latency, 100+ users. Docs at sandwiches-teal.vercel.app. By Akanksha  Singh.",
};

export default function sandwichesPage() {
  return (
    <>
      <Header />
      <Sandwiches />
      <Footer />
    </>
  );
}
