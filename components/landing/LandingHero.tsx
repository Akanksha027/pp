"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { FEATURED_PROJECTS } from "@/lib/projects";
import { GRID_HALF, GRID_INNER_PAD, GRID_OUTER_MARGIN } from "@/lib/grid";
import { useIsMobile } from "@/lib/use-media-query";

const S_W = 530;
const S_H = 370;
const G_W = 455;
const G_H = 320;
const G_GAP = 16;

const GRID_W = G_W * 3 + G_GAP * 2;
const GRID_H = G_H;

const STACK = [
  { tx: 0, ty: 0, rot: -2, scale: 1.0, z: 3 },
  { tx: 28, ty: -16, rot: 5, scale: 0.97, z: 2 },
  { tx: -20, ty: -28, rot: -7, scale: 0.94, z: 1 },
];

const GRID_TARGETS = [
  { tx: -(G_W + G_GAP), ty: 0 },
  { tx: 0, ty: 0 },
  { tx: G_W + G_GAP, ty: 0 },
];

const SCROLL_RANGE = 2400;
const HEADER_OFFSET = 80;
const BOTTOM_BUFFER = 180;

const TECH_LOGOS = [
  "Next.js",
  "React Native",
  "TypeScript",
  "PostgreSQL",
  "GCP",
  "Next.js",
  "React Native",
  "TypeScript",
  "PostgreSQL",
  "GCP",
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, v));
const remap = (v: number, in0: number, in1: number, out0: number, out1: number) =>
  lerp(out0, out1, clamp((v - in0) / (in1 - in0)));

function easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

function ExploreLink({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`px-4 text-center md:px-0 ${className}`} style={style}>
      <Link
        href="/works"
        className="inline-flex items-center gap-3 rounded-full border-2 border-white bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-opacity hover:opacity-90"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        Explore other projects
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}

function ProjectMedia({
  src,
  alt,
  className,
  style,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
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
        style={{ ...style, objectFit: "cover", width: "100%", height: "100%" }}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ ...style, objectFit: "cover", width: "100%", height: "100%" }}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
    />
  );
}

export function LandingHero() {
  const [prog, setProg] = useState(0);
  const rafRef = useRef<number | null>(null);
  const isMobile = useIsMobile();

  useLenis((lenis) => {
    if (isMobile) return;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const raw = clamp(lenis.scroll / SCROLL_RANGE);
      setProg(easeInOutQuart(raw));
      rafRef.current = null;
    });
  });

  const copySlideY = lerp(0, -420, prog);
  const spSlideY = lerp(0, 130, prog);
  const labelOpacity = remap(prog, 0.68, 0.9, 0, 1);
  const containerDX = lerp(260, 0, prog);
  const containerDY = lerp(-40, 120, prog);
  const socialProofOpacity = remap(prog, 0.45, 0.65, 1, 0);
  const exploreOpacity = remap(prog, 0.4, 0.65, 0, 1);

  const renderHeroCopy = () => (
    <>
      <div className="landing-availability-badge">
        <span className="landing-availability-dot" />
        The Best Developer
      </div>
      <h1
        className="landing-hero-heading"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        <span className="landing-hero-heading-light">I build scalable </span>
        <br />
        <span className="landing-hero-heading-bold text-white">
          web &amp; mobile systems.
        </span>
      </h1>
      <p
        className="landing-hero-subtitle"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        <strong>Full-stack developer</strong> focused on production-grade apps with
        Next.js, React Native, TypeScript, Rust, ASP.NET, and cloud-deployed backends.
      </p>
      <Link href="/#lets-connect" className="landing-cta-button">
        <div className="landing-cta-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
        Let&apos;s work together
      </Link>
    </>
  );

  const renderSocialProof = () => (
    <div className="landing-social-proof-inner">
      <div className="landing-clients-info">
        <div className="landing-clients-meta">
          <div className="landing-stars">★★★★★</div>
          <span className="landing-clients-count">
            35+ projects · 8 countries
          </span>
        </div>
      </div>
      <div className="landing-logos-marquee-wrapper">
        <div className="landing-logos-track">
          {TECH_LOGOS.map((logo, i) => (
            <div key={i} className="landing-logo-item">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjectCards = () =>
    FEATURED_PROJECTS.map((project, i) => {
      const s = STACK[i];
      const g = GRID_TARGETS[i];
      const tx = lerp(s.tx, g.tx, prog);
      const ty = lerp(s.ty, g.ty, prog);
      const rot = lerp(s.rot, 0, prog);
      const sc = lerp(s.scale, 1, prog);
      const w = lerp(S_W, G_W, prog);
      const h = lerp(S_H, G_H, prog);
      const br = lerp(20, 13, prog);
      const shadowY = lerp(24, 8, prog);
      const shadowBlur = lerp(72, 20, prog);
      const shadowA = lerp(0.35, 0.2, prog);

      return (
        <Link
          key={project.href}
          href={project.href}
          className="landing-project-card group"
          style={{
            position: "absolute",
            width: w,
            height: h,
            borderRadius: br,
            overflow: "hidden",
            zIndex: s.z,
            transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(${sc})`,
            boxShadow: `0 ${shadowY}px ${shadowBlur}px rgba(0,0,0,${shadowA})`,
            willChange: "transform, width, height",
          }}
        >
          <ProjectMedia
            src={project.image}
            alt={project.title}
            className="landing-project-card-img"
            sizes="560px"
            priority={i < 2}
          />
          <div
            className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent"
            style={{
              opacity: labelOpacity,
              pointerEvents: "none",
              padding: "16px 14px 12px",
            }}
          >
            <div className="flex items-end justify-between">
              <div>
                <div
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {project.title}
                </div>
                <div className="mt-0.5 text-[11px] text-white/60">
                  {project.category}
                </div>
              </div>
              <div className="text-[11px] tracking-wide text-white">
                ↗ View
              </div>
            </div>
          </div>
        </Link>
      );
    });

  const stickyHeight = `calc(100vh - ${HEADER_OFFSET}px)`;

  if (isMobile) {
    return (
      <div className="landing-hero-mobile">
        <div className="landing-hero-mobile-intro">{renderHeroCopy()}</div>

        <div className="landing-hero-mobile-grid">
          {FEATURED_PROJECTS.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="landing-hero-mobile-card group"
            >
              <ProjectMedia
                src={project.image}
                alt={project.title}
                className="landing-project-card-img"
                sizes="50vw"
              />
              <div className="landing-hero-mobile-card-label">
                <div
                  className="text-xs font-bold text-white"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {project.title}
                </div>
                <div className="mt-0.5 text-[10.5px] text-white/60">
                  {project.category}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <ExploreLink className="mt-6 mb-2" />

        <div className="landing-social-proof-bar landing-hero-mobile-social">
          {renderSocialProof()}
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          height: `calc(${stickyHeight} + ${SCROLL_RANGE + BOTTOM_BUFFER}px)`,
          position: "relative",
          zIndex: 5,
          paddingBottom: BOTTOM_BUFFER,
        }}
      >
        <div
          style={{
            position: "sticky",
            top: HEADER_OFFSET,
            height: stickyHeight,
            backgroundColor: "#000000",
            overflow: "visible",
          }}
        >
          {/* Background Video */}
          <video
            src="/bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
              opacity: 0.6, // Dim the video slightly so text remains readable
              pointerEvents: "none",
            }}
          />

          <div
            className="landing-hero-copy"
            style={{
              left: `max(${GRID_OUTER_MARGIN + GRID_INNER_PAD}px, calc(50% - ${GRID_HALF}px + ${GRID_INNER_PAD}px))`,
              top: "50%",
              transform: `translateY(calc(-50% - 72px + ${copySlideY}px))`,
              width: 460,
              zIndex: 10,
            }}
          >
            {renderHeroCopy()}
          </div>

          <div
            className="landing-hero-card-stage"
            style={{
              width: GRID_W,
              height: GRID_H,
              transform: `translate(calc(-50% + ${containerDX}px), calc(-50% + ${containerDY}px))`,
              zIndex: 10,
            }}
          >
            {renderProjectCards()}
          </div>

          <ExploreLink
            className="absolute"
            style={{
              left: `calc(50% + ${containerDX}px)`,
              top: `calc(50% + ${GRID_H / 2 + containerDY + 28}px)`,
              transform: "translateX(-50%)",
              opacity: exploreOpacity,
              pointerEvents: prog > 0.35 ? "auto" : "none",
              zIndex: 30,
            }}
          />

          <div
            className="landing-social-proof-bar"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              transform: `translateY(${spSlideY}px)`,
              opacity: socialProofOpacity,
              pointerEvents: prog > 0.5 ? "none" : "auto",
              zIndex: 20,
            }}
          >
            {renderSocialProof()}
          </div>
        </div>
      </div>
    </>
  );
}
