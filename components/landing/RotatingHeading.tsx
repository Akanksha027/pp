"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DEFAULT_WORDS = ["Tenure", "Experience", "Work"] as const;

const LETTER_STAGGER = 0.036;
const ENTER_DURATION = 0.36;
const EXIT_DURATION = 0.32;
const HOLD_MS = 800;
const smoothEase = [0.22, 1, 0.36, 1] as const;
const exitEase = [0.55, 0, 0.25, 1] as const;

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: LETTER_STAGGER,
      delayChildren: 0.02,
    },
  },
  exit: {
    transition: {
      staggerChildren: LETTER_STAGGER,
      staggerDirection: 1 as const,
    },
  },
};

const letterVariants = {
  initial: {
    y: "125%",
    x: -8,
    opacity: 0,
  },
  animate: {
    y: "0%",
    x: 0,
    opacity: 1,
    transition: {
      duration: ENTER_DURATION,
      ease: smoothEase,
    },
  },
  exit: {
    y: "-125%",
    x: 10,
    opacity: 0,
    transition: {
      duration: EXIT_DURATION,
      ease: exitEase,
    },
  },
};

function AnimatedWord({ word }: { word: string }) {
  const letters = word.split("");

  return (
    <motion.span
      className="inline-flex items-end pr-[0.12em]"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {letters.map((char, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden"
          style={{
            lineHeight: 1.08,
            paddingRight: i === letters.length - 1 ? "0.08em" : "0.02em",
          }}
        >
          <motion.span className="inline-block" variants={letterVariants}>
            {char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function RotatingHeading({
  active = true,
  className = "",
  words = DEFAULT_WORDS,
}: {
  active?: boolean;
  className?: string;
  words?: readonly string[];
}) {
  const [index, setIndex] = useState(0);
  const word = words[index % words.length];
  const maxLetters = Math.max(...words.map((w) => w.length));
  const sizerWord = words.reduce((longest, current) =>
    current.length > longest.length ? current : longest,
  words[0]);
  const cycleMs =
    HOLD_MS +
    maxLetters * LETTER_STAGGER * 1000 * 2 +
    (ENTER_DURATION + EXIT_DURATION) * 1000;

  useEffect(() => {
    if (!active) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, cycleMs);

    return () => window.clearInterval(id);
  }, [active, cycleMs, words.length]);

  return (
    <span
      className={`relative inline-grid max-w-full overflow-hidden ${className}`}
      style={{ gridTemplateAreas: '"heading"' }}
      aria-live="polite"
    >
      <span
        className="invisible col-start-1 row-start-1 whitespace-nowrap pr-[0.12em]"
        style={{ gridArea: "heading" }}
        aria-hidden
      >
        {sizerWord}
      </span>

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={word}
          className="col-start-1 row-start-1 inline-flex items-end whitespace-nowrap will-change-transform"
          style={{ gridArea: "heading" }}
        >
          <AnimatedWord word={word} />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
