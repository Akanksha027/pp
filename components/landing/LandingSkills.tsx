"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { mainFont } from "@/lib/fonts";

import { RotatingHeading } from "@/components/landing/RotatingHeading";

const SKILLS_HEADING_WORDS = ["Skills", "Proficiency", "Expertise"] as const;

const BAR_LABELS = ["Precise", "Structured", "Focused", "Visual Language"] as const;

const SKILLS = [
  {
    title: "App Development",
    description:
      "Building scalable, cross-platform mobile applications with React Native and modern mobile stacks. Focused on delivering seamless user experiences and robust architectures.",
  },
  {
    title: "Website Development",
    description:
      "Crafting highly performant, responsive web applications using Next.js, React, and TypeScript. Ensuring clean code, fast load times, and engaging user interfaces.",
  },
  {
    title: "Automated AI Agents",
    description:
      "Developing and deploying intelligent automated agents and AI pipelines to streamline workflows, enhance productivity, and solve complex problems using modern AI tools.",
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

const barVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1, ease: smoothEase, delay: 0.12 },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.22,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 52 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: smoothEase },
  },
};

export function LandingSkills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.22 });

  return (
    <section
      ref={sectionRef}
      className={`bg-transparent text-white ${mainFont.className}`}
    >
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-20 md:px-14 lg:px-16 lg:pb-32 lg:pt-28">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="mb-8 flex max-w-full flex-col items-start gap-1 sm:mb-10 sm:flex-row sm:gap-3 md:mb-14"
        >
          <h2 className="max-w-full text-[clamp(2.5rem,11vw,10.5rem)] font-bold leading-[0.92] tracking-[-0.04em] sm:leading-[0.9]">
            <RotatingHeading active={isInView} words={SKILLS_HEADING_WORDS} />
          </h2>
          <span className="text-[clamp(0.9rem,2vw,1.35rem)] font-normal text-white/90 sm:mt-5">
            ({SKILLS.length})
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={barVariants}
          style={{ originX: 0 }}
          className="mb-0 grid w-full grid-cols-2 gap-x-3 gap-y-2.5 bg-white px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-black sm:flex sm:items-center sm:justify-between sm:gap-0 sm:px-8 sm:py-3.5 sm:text-xs md:px-10 md:text-[13px]"
        >
          {BAR_LABELS.map((label) => (
            <span key={label} className="text-center sm:text-left">
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={listVariants}
          className="ml-auto w-full lg:w-[62%]"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={rowVariants}
              className="grid grid-cols-1 gap-4 border-t border-white/20 py-8 sm:grid-cols-[56px_minmax(140px,220px)_1fr] sm:items-start sm:gap-6 sm:py-10 md:gap-10 md:py-12"
            >
              <span className="text-sm font-semibold text-white/90 sm:pt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[clamp(1.35rem,2.2vw,2rem)] font-bold leading-tight tracking-[-0.02em]">
                {skill.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-white/75 sm:text-[15px] sm:leading-[1.7]">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
