import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://itsakanksha.in'),
  title: {
    default: "Akanksha Singh | Software Developer",
    template: "%s | Akanksha Singh",
  },
  description:
    "Software developer focused on building scalable web, mobile, and backend systems. Experienced with Next.js, React Native, TypeScript, Rust, ASP.NET, and cloud-deployed architectures. Portfolio and projects.",
  keywords: ["Akanksha Singh", "Software Developer", "React", "Next.js", "TypeScript", "MERN", "India"],
  authors: [{ name: "Akanksha Singh", url: "https://github.com/akanksharizz" }],
  creator: "Akanksha Singh",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://itsakanksha.in",
    siteName: "Akanksha Singh",
    title: "Akanksha Singh | Software Developer",
    description: "Software developer focused on building scalable web, mobile, and backend systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akanksha Singh | Software Developer",
    description: "Software developer focused on building scalable web, mobile, and backend systems.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${playfair.variable} antialiased`}
      >
        <LenisProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Akanksha Singh",
                "url": "https://itsakanksha.in",
                "jobTitle": "Software Developer",
                "sameAs": [
                  "https://github.com/akanksharizz"
                ]
              })
            }}
          />
          <Header />
          <main className="pt-20">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
