"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { mainFont } from "@/lib/fonts";
import { RotatingHeading } from "@/components/landing/RotatingHeading";

const BAR_LABELS = ["Company", "Tenure", "Role", "Location"] as const;

const EXPERIENCE = [
  {
    company: "Ezlearn",
    period: "Mar 2025 - Jan 2026",
    role: "CTO",
    location: "India",
  },
  {
    company: "Titan Tech Investments",
    period: "Sept 2025 - Nov 2025",
    role: "Software Developer Intern",
    location: "Dubai",
  },
  {
    company: "Jara Beach Resort",
    period: "Jan 2026 - June 2026",
    role: "Freelance Developer",
    location: "South Africa",
  },
  {
    company: "SVSFood",
    period: "May 2026 - June 2026",
    role: "Freelance Developer",
    location: "Remote",
  },
] as const;

const smoothEase = [0.22, 1, 0.36, 1] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.15, ease: smoothEase },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, ease: smoothEase, delay: 0.08 },
  },
};

const barVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1, ease: smoothEase, delay: 0.14 },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.24,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.15, ease: smoothEase },
  },
};

export function LandingPractice() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.18 });

  return (
    <section
      ref={sectionRef}
      className={`bg-transparent text-white ${mainFont.className}`}
    >
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-8 sm:px-10 md:px-14 lg:px-16 lg:pb-32 lg:pt-12">
        <div className="mb-8 flex max-w-full items-start justify-between gap-4 sm:mb-10 md:mb-14">
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerVariants}
            className="max-w-full min-w-0 text-[clamp(2.5rem,11vw,10.5rem)] font-bold leading-[0.92] tracking-[-0.04em] sm:leading-[0.9]"
          >
            <RotatingHeading active={isInView} />
          </motion.h2>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
            className="hidden shrink-0 flex-col items-end md:flex"
          >
            <div className="relative h-[108px] w-[72px] overflow-hidden rounded-xl bg-white/10 md:h-[128px] md:w-[84px]">
              <img
                src="/akanksha1.jpeg"
                alt="Akanksha  Singh"
                className="h-full w-full object-cover"
              />
            </div>
            <p
              className="mt-3 text-right text-lg italic tracking-wide text-white/90 md:text-xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Akanksha
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={barVariants}
          style={{ originX: 0 }}
          className="grid grid-cols-2 gap-x-3 gap-y-2 bg-white px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.1em] text-black sm:grid-cols-4 sm:gap-0 sm:px-8 sm:py-3.5 sm:text-xs md:px-10 md:text-[13px]"
        >
          {BAR_LABELS.map((label, index) => (
            <span
              key={label}
              className={`text-center sm:text-left ${index === BAR_LABELS.length - 1 ? "sm:text-right" : ""}`}
            >
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={listVariants}
        >
          {EXPERIENCE.map((item) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              variants={rowVariants}
              className="grid grid-cols-1 gap-2 border-t border-white/20 py-5 sm:grid-cols-4 sm:items-center sm:gap-6 sm:py-7 md:py-8"
            >
              <div>
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:hidden">
                  Company
                </p>
                <p className="text-[15px] font-medium text-white sm:text-base">
                  {item.company}
                </p>
              </div>
              <div>
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:hidden">
                  Tenure
                </p>
                <p className="text-sm text-white/75 sm:text-[15px]">{item.period}</p>
              </div>
              <div>
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:hidden">
                  Role
                </p>
                <p className="text-sm text-white/75 sm:text-[15px]">{item.role}</p>
              </div>
              <div>
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:hidden">
                  Location
                </p>
                <p className="text-sm text-white/75 sm:text-left sm:text-[15px] md:text-right">
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
