"use client";

import Link from "next/link";
import Image from "next/image";
import { FEATURED_PROJECTS } from "@/lib/projects";

function ProjectMedia({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  if (src.endsWith(".mov") || src.endsWith(".mp4")) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className || ""}`}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}

function InlinePill({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="relative mx-1 inline-block h-[1.15em] w-[2.4em] translate-y-[0.1em] overflow-hidden rounded-full align-middle sm:h-[1.2em] sm:w-[2.6em]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="100px" priority />
    </span>
  );
}

function HeroCopy() {
  return (
    <>
      <h1
        className="text-[clamp(1.85rem,3.8vw,3.25rem)] font-normal leading-[1.18] tracking-[-0.02em] text-neutral-400"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        <span>Hey, I&apos;m </span>
        <InlinePill src="/akanksha1.jpeg" alt="Akanksha Singh" />
        <span className="font-medium text-black"> Akanksha </span>
        <br />
        <span className="font-medium text-black">Software Developer </span>
        <InlinePill src="/works/sandwiches/3.png" alt="Project work" />
        <br />
        <span>building scalable </span>
        <span className="font-medium text-black">web &amp; mobile Applications.</span>
      </h1>

      <p
        className="mt-6 max-w-md text-[15px] leading-relaxed text-neutral-500 sm:mt-8 sm:text-base"
        style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
      >
        <strong className="font-semibold text-neutral-700">Full-stack developer</strong>{" "}
        focused on production-grade apps with Next.js, React Native, TypeScript, Rust,
        ASP.NET, and cloud-deployed backends.
      </p>

      <Link
        href="/#lets-connect"
        className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.22)] sm:mt-10"
        style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
      >
        Let&apos;s work together
        <span aria-hidden className="text-base leading-none">
          ↗
        </span>
      </Link>
    </>
  );
}

export function LandingHero() {
  return (
    <section className="bg-black pb-10 sm:pb-14 lg:pb-16">
      {/* Hero intro — full-width white section, flush to top under navbar */}
      <div
        id="landing-hero-white"
        className="relative -mt-20 w-full overflow-hidden bg-[#f2f2f2] lg:min-h-[min(68vh,680px)]"
      >
        {/* Desktop video — full height from top of screen */}
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            aria-label="Hero showcase video"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 lg:min-h-[inherit]">
          <div className="flex flex-col items-start justify-center px-6 pb-10 pt-24 sm:px-10 sm:pb-12 sm:pt-28 lg:px-14 lg:pb-12 lg:pt-24 lg:pr-10 xl:px-20">
            <HeroCopy />
          </div>

          <div className="hidden lg:block" aria-hidden />
        </div>
      </div>

      {/* Static project cards — 3 in one row */}
      <div className="mx-auto mt-8 w-full px-4 sm:mt-10 sm:px-6 lg:mt-12 lg:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {FEATURED_PROJECTS.map((project, i) => (
            <Link
              key={project.href}
              href={project.href}
              className="landing-project-card group relative block aspect-[541.95/508.08] h-auto w-full overflow-hidden rounded-[13px] bg-[#111] sm:h-[508.08px] sm:max-h-none"
            >
              <ProjectMedia
                src={project.image}
                alt={project.title}
                className="landing-project-card-img h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority={i < 2}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent px-5 pb-4 pt-10 sm:px-6 sm:pb-5">
                <div className="flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <div
                      className="truncate text-sm font-bold text-white sm:text-base"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                    >
                      {project.title}
                    </div>
                    <div className="mt-1 truncate text-xs text-white/60 sm:text-sm">
                      {project.category}
                    </div>
                  </div>
                  <div className="shrink-0 text-xs tracking-wide text-white sm:text-sm">
                    ↗ View
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/works"
            className="inline-flex items-center gap-3 rounded-full border-2 border-white bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-opacity hover:opacity-90"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Explore other projects
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
