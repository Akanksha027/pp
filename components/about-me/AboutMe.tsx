"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainFont } from "@/lib/fonts";

const techStack = [
  "HTML | CSS | JS",
  "React",
  "React Native",
  "TypeScript",
  "MERN Stack",
  "Next.js",
  "PostgreSQL | MongoDB",
  "Docker",
  "Git | Github",
  "GCP",
  "Python",
];

const employment = [
  {
    role: "CTO",
    company: "Ezlearn",
    period: "Feb 2025 - May 2025",
    description:
      "Led end-to-end development of EzLearn's web platform, including architecture, backend services, and deployment. Handling 1,000+ monthly active users with 99.9% uptime.",
  },
];

const internships = [
  {
    role: "Dev Intern",
    company: "TitanTech Investments, Dubai",
    period: "Jun 2025 - Aug 2025",
    bullets: [
      "Built a custom CRM system tailored for client and investment management.",
      "Developed investment automation tools to streamline portfolio execution.",
      "Managed multi-level infrastructure, integrating stock market data and client investment pipelines into the company's systems.",
    ],
  },
];

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SocialButton({
  href,
  label,
  children,
  external = true,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label} className={className}>
      {children}
    </Link>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="h-2 w-2 shrink-0 rounded-[2px]"
        style={{ backgroundColor: "#DFFF66" }}
        aria-hidden
      />
      <span className="text-sm font-medium tracking-wide text-white/50">
        {children}
      </span>
    </div>
  );
}

export default function AboutMe() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const period = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      setCurrentTime(`${displayHours}:${minutes} ${period}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden bg-black text-white ${mainFont.className}`}>
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[min(100%,1520px)] items-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Left — Profile card */}
          <div className="flex w-full justify-center lg:justify-start">
            <div className="w-full max-w-[420px] rounded-[20px] border border-white/10 bg-[#141414]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-md lg:max-w-[460px]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#1a1a1a] px-3.5 py-1.5 text-[13px] font-medium text-white/70">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#DFFF66] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#DFFF66]" />
                </span>
                SOFTWARE DEVELOPER @ INDIA
              </div>

              <div className="relative mb-5 overflow-hidden rounded-2xl aspect-square w-full">
                <Image
                  src="/akanksha1.jpeg"
                  alt="Akanksha  Singh"
                  fill
                  className="object-cover object-bottom"
                />
              </div>

              <div className="mb-5 space-y-1">
                <a
                  href="mailto:akanksharizz0@gmail.com"
                  className="block text-[15px] font-semibold text-white transition-colors hover:text-white/80"
                >
                  akankshasingh0085@gmail.com
                </a>
                <p className="text-sm text-white/45">Based in India · 9810433989</p>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <SocialButton href="https://github.com/Akanksha027" label="Github">
                  <GithubIcon />
                </SocialButton>
                <SocialButton
                  href="https://www.linkedin.com/in/akanksha---singh/"
                  label="Linkedin"
                >
                  <LinkedinIcon />
                </SocialButton>
                <SocialButton href="/" label="Portfolio" external={false}>
                  <PortfolioIcon />
                </SocialButton>
              </div>

              <Link
                href="/"
                className="flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.18)]"
              >
                Portfolio
              </Link>
            </div>
          </div>

          {/* Right — Introduction & details */}
          <div className="flex w-full flex-col justify-center gap-8 sm:gap-10 lg:pl-6 xl:pl-10">
            {/* <p className="text-right text-sm text-white/40 lg:-mt-1">
              India, {currentTime || "—"}
            </p> */}

            <div className="space-y-6 sm:space-y-8">
              <SectionLabel>Introduction</SectionLabel>

              <div className="space-y-4">
                <h1 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
                  About Me
                </h1>
                <p className="text-xl font-medium text-white/85 sm:text-2xl">
                  Akanksha  Singh
                </p>
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/45 sm:text-base">
                  SOFTWARE DEVELOPER @ INDIA &amp; 9810433989
                </p>
                <p className="max-w-2xl text-base leading-relaxed text-white/55 sm:text-[17px] sm:leading-[1.75]">
                  Software developer focused on building scalable web, mobile Applications.
                  Experienced with Next.js, React Native, TypeScript, and cloud-deployed
                  architectures.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <SectionLabel>© TECH STACK ©</SectionLabel>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/8 bg-[#1c1c1c] px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white/15 hover:bg-[#242424]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* <div className="space-y-4 border-t border-white/10 pt-8">
              <SectionLabel>© LINKS °</SectionLabel>
              <ul className="flex flex-col gap-2 text-white/65 sm:flex-row sm:flex-wrap sm:gap-x-8">
                <li>
                  <a
                    href="https://github.com/Akanksha027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-white sm:text-base"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/akanksha---singh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-white sm:text-base"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <Link href="/" className="text-sm transition-colors hover:text-white sm:text-base">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* Employment */}
            {/* Internships */}
            {/* <div className="space-y-6">
              <h2 className="text-white/40 text-xs uppercase tracking-widest">
                INTERNSHIPS
              </h2>
              {internships.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-white/60">
                    <div className="font-medium text-white/80">
                      {exp.role} at {exp.company}
                    </div>
                    <div className="sm:col-span-2 sm:text-right text-white/40">
                      {exp.period}
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
