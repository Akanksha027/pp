import Link from "next/link";

export function About() {
  return (
    <section
      className="flex min-h-[65vh] flex-col justify-center bg-[#000000] px-6 py-20 md:px-12 lg:px-20"
      style={{ fontFamily: "var(--font-montser), sans-serif" }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        {/* Left: Title with bullet - aligns with left edge of content above */}
        <div className="flex shrink-0 lg:ml-6 items-center gap-3">
          <span
            className="mt-1.5 h-2 w-2 shrink-0 rounded-full lg:mt-2"
            style={{ backgroundColor: "#DFFF66" }}
            aria-hidden
          />
          <h2 className="text-[#FFFFFF] text-3xl font-bold md:text-4xl lg:text-5xl">
            About
          </h2>
        </div>

        {/* Right: Description and button - block aligned to right edge of content above */}
        <div className="flex flex-col gap-6 lg:ml-auto lg:max-w-xl lg:items-end lg:text-right">
          <p className="text-[#FFFFFF] text-base leading-relaxed md:text-lg">
            Software developer focused on building scalable web, mobile, and
            backend systems. Experienced with Next.js, React Native, TypeScript,
            Rust, ASP.NET, and cloud-deployed architectures. Strong interest in systems
            programming, protocol design, and applied AI.
          </p>
          <Link
            href="/about-me"
            className="inline-flex w-fit items-center justify-center rounded-lg bg-[#2d2d2d] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#FFFFFF] transition-opacity hover:opacity-90 lg:self-end"
          >
            More about me
          </Link>
        </div>
      </div>
    </section>
  );
}
