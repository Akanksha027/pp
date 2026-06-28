"use client";

import Link from "next/link";
import { mainFont } from "@/lib/fonts";
import { useIsMobile } from "@/lib/use-media-query";

const MARQUEE_TEXT = "Testimonials© · Reviews";
const HEADER_OFFSET = 80;

const TESTIMONIALS = [
  {
    quote:
      "Akanksha elevated every layer of our food-tech platform. From kiosk flow to admin dashboards, every piece felt crafted and intentional. The product not only looked polished but performed reliably in production, and the entire collaboration was smooth.",
    company: "SVSFood",
  },
  {
    quote:
      "He approaches every project with deep purpose. His work is never surface-level; it's about how each element functions, connects, and flows. He brings logic, sharpness, and confidence to every sprint we ran together.",
    company: "Jara Beach Resort",
  },
  {
    quote:
      "As CTO on Ezlearn, Akanksha shipped features fast without sacrificing architecture. He owned the stack end to end, mobile, web, and backend, and kept the team moving with clear milestones and zero drama.",
    company: "Ezlearn",
  },
  {
    quote:
      "Our Dubai internship turned into real shipping velocity. Akanksha integrated quickly, improved our codebase, and delivered production-ready modules ahead of schedule. Exactly the kind of developer you want on a lean team.",
    company: "Titan Tech Investments",
  },
  {
    quote:
      "SharpOrders needed reliability at scale. Akanksha rebuilt critical flows, tightened the mobile experience, and left us with documentation the whole team could follow. Professional, fast, and genuinely skilled.",
    company: "SharpOrders",
  },
  {
    quote:
      "From brand site to booking flows, Akanksha made LuxenEdge feel premium without bloating the stack. Clean code, sharp eye for layout, and responsive communication across time zones.",
    company: "LuxenEdge",
  },
] as const;

function TestimonialCard({
  quote,
  company,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <article className="rounded-2xl border border-white/12 bg-[#0a0a0a] p-5 sm:p-7 md:p-8">
      <p className="text-[15px] leading-[1.75] text-white/78 sm:text-base">
        {quote}
      </p>
      <div className="mt-6 border-t border-white/8 pt-5 sm:mt-8 sm:pt-6">
        <span className="text-sm font-bold tracking-wide text-white/90 sm:text-base">
          {company}
        </span>
      </div>
    </article>
  );
}

function MarqueeStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`landing-testimonials-marquee-wrap pointer-events-none w-full overflow-hidden ${className}`}
    >
      <div className="landing-testimonials-marquee-track">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="landing-testimonials-marquee-item"
            aria-hidden={i > 0}
          >
            {MARQUEE_TEXT}
            <span className="mx-4 opacity-40 sm:mx-6">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function LandingTestimonials() {
  const isMobile = useIsMobile();
  const viewport = `calc(100vh - ${HEADER_OFFSET}px)`;
  const cardsScroll = `${TESTIMONIALS.length * 20 + 8}vh`;
  const tailSpace = "24vh";
  const scrollHeight = `calc(${viewport} + ${cardsScroll} + ${tailSpace})`;

  if (isMobile) {
    return (
      <section
        className={`relative bg-transparent px-5 pb-16 pt-10 text-white sm:px-8 ${mainFont.className}`}
      >
        <MarqueeStrip />
        <Link
          href="/#lets-connect"
          className="relative z-[5] mx-auto mt-8 flex w-fit rounded-full border border-white px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-75"
        >
          Get in touch
        </Link>

        <div className="mx-auto mt-10 grid max-w-[1200px] grid-cols-1 gap-8">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.company} {...item} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative z-10 bg-transparent pb-20 text-white md:pb-32 ${mainFont.className}`}
    >
      <div className="relative" style={{ height: scrollHeight }}>
        <div
          className="sticky z-0 flex flex-col items-center justify-center overflow-hidden bg-transparent px-4"
          style={{ top: HEADER_OFFSET, height: viewport }}
        >
          <MarqueeStrip />

          <Link
            href="/#lets-connect"
            className="relative z-[5] mt-10 rounded-full border border-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-75 sm:mt-12 sm:text-sm"
          >
            Get in touch
          </Link>
        </div>

        <div
          className="relative z-10 px-5 sm:px-8 md:px-12 lg:px-16"
          style={{ marginTop: `calc(-1 * ${viewport})` }}
        >
          <div style={{ height: viewport }} aria-hidden />

          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-14">
            {TESTIMONIALS.map((item, index) => (
              <div
                key={item.company}
                className={index % 2 === 1 ? "md:mt-24" : undefined}
              >
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>

          <div style={{ height: tailSpace }} aria-hidden />
        </div>
      </div>
    </section>
  );
}
