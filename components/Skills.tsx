const SKILLS = [
  {
    title: "Web & Mobile Development",
    description:
      "Building scalable web and mobile applications with React, Next.js, React Native, and TypeScript. I focus on clean architecture, performance, and responsive UI, from front-end interfaces to cross-platform apps.",
  },
  {
    title: "Backend & APIs",
    description:
      "Designing and implementing backend systems with the MERN stack, Express, ASP.NET, PostgreSQL, MongoDB, and Prisma. Experienced in RESTful APIs, database design, and server-side logic for production-grade applications.",
  },
  {
    title: "Cloud & Systems",
    description:
      "Deploying and managing infrastructure with Docker and GCP. Strong interest in systems programming with Rust and ASP.NET, protocol design, and applied AI, using Python and modern tooling to build reliable, scalable systems.",
  },
] as const;

export function Skills() {
  return (
    <section
      className="flex min-h-screen flex-col justify-center bg-[#1A1A1A] px-[calc(1.5rem+7px)] py-[calc(3rem+7px)] md:px-[calc(3rem+7px)] lg:px-[calc(5rem+7px)] md:py-[calc(4rem+7px)]"
      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        {/* Left: Section title with bullet - aligns with left edge of content above */}
        <div className="flex shrink-0 items-center gap-3">
          <span
            className="mt-1 h-2 w-2 shrink-0 rounded-full lg:mt-2"
            style={{ backgroundColor: "#DFFF66" }}
            aria-hidden
          />
          <h2 className="text-[#FFFFFF] text-3xl font-bold md:text-4xl lg:text-5xl">
            Skills
          </h2>
        </div>

        {/* Right: Skill descriptions - block aligned to right edge of content above */}
        <div className="flex flex-col lg:ml-auto lg:max-w-xl lg:items-end lg:text-right">
          {SKILLS.map((skill, i) => (
            <div key={skill.title}>
              <h3 className="text-[#FFFFFF] text-xl font-semibold md:text-2xl">
                {skill.title}
              </h3>
              <p className="mt-2 text-[#CCCCCC] text-base leading-relaxed">
                {skill.description}
              </p>
              {i < SKILLS.length - 1 && (
                <hr
                  className="mt-6 mb-6 w-[85%] border-0 border-t border-[#999999]/60 lg:ml-auto"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
