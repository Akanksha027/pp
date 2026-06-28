"use client";

import Image from "next/image";
import { useState } from "react";
import { mainFont } from "@/lib/fonts";

const FAQS = [
  {
    q: "What kind of projects do you take on?",
    a: "I build full-stack web and mobile products: SaaS platforms, booking systems, dashboards, and freelance brand sites.",
  },
  {
    q: "What's your typical tech stack?",
    a: "Next.js and React for web, React Native for mobile, TypeScript throughout, Node/Express for APIs.",
  },
  {
    q: "How long does a typical project take?",
    a: "A focused MVP usually takes 4-8 weeks. Larger platforms or multi-module systems can run 2-4 months. I scope timelines upfront and break work into shippable milestones.",
  },
  {
    q: "How do we get started?",
    a: "Book a short call via the footer CTA or email me directly. We'll discuss your goals, timeline, and budget, then I'll send a clear proposal before any work begins.",
  },
];

function PlusIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

export function LandingFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={`relative z-0 bg-black pt-8 text-white md:pt-12 ${mainFont.className}`}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 md:px-14 lg:px-16">
        <div className="flex flex-col gap-2 border-b border-white/20 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-white/75 sm:flex-row sm:items-center sm:justify-between sm:text-[11px]">
          <span className="truncate">© HELP CENTER ヘルプ</span>
          <span className="hidden sm:inline">[WDX® · 11]</span>
          <span>CLARIFICATIONS</span>
        </div>

        <div className="grid grid-cols-1 gap-10 py-10 sm:gap-12 sm:py-12 lg:grid-cols-[minmax(280px,42%)_1fr] lg:gap-20 lg:py-16 xl:gap-28">
          <div>
            <div className="relative mb-10 h-[148px] w-[108px] overflow-hidden rounded-2xl bg-white/10 sm:h-[168px] sm:w-[122px]">
              <img
                src="/akanksha1.jpeg"
                alt="Akanksha  Singh"
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="max-w-md text-[clamp(1.65rem,6.5vw,3.35rem)] font-normal leading-[1.15] tracking-[-0.03em] text-white sm:leading-[1.12]">
              Clarifying Deliverable&apos;s Before They Begin with Real Process
              and Honest アンサー.
            </h2>
          </div>

          <div>
            {FAQS.map((faq, i) => {
              const isOpen = open === i;

              return (
                <div key={faq.q} className="border-t border-white/20">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-start gap-4 border-none bg-transparent py-5 text-left sm:items-center sm:gap-10 sm:py-7"
                  >
                    <span className="w-7 shrink-0 pt-0.5 text-sm text-white/80 sm:w-8 sm:pt-0 sm:text-[15px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[15px] leading-snug text-white sm:text-base md:text-[17px]">
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-white">
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="m-0 pb-6 pl-11 pr-2 text-sm leading-relaxed text-white/55 sm:pb-7 sm:pl-[4.5rem] sm:pr-8 sm:text-[15px] sm:leading-[1.7]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
