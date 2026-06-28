import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Akanksha  Singh | Software Developer",
    template: "%s | Akanksha  Singh",
  },
  description:
    "Software developer focused on building scalable web, mobile, and backend systems. Experienced with Next.js, React Native, TypeScript, Rust, ASP.NET, and cloud-deployed architectures. Portfolio and projects.",
  keywords: ["Akanksha  Singh", "Software Developer", "React", "Next.js", "TypeScript", "MERN", "India"],
  authors: [{ name: "Akanksha  Singh", url: "https://github.com/akanksharizz" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
  },
};

import { Header } from "@/components/Header";
import { LenisProvider } from "@/components/LenisProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <LenisProvider>
          <Header />
          <main className="pt-20">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
