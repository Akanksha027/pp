import Link from "next/link";

const PROJECTS = [
  {
    title: "PeriPeri",
    category: "App · Personal Product",
    image: "/periperi/header.jpg",
    href: "/works/periperi",
  },
  {
    title: "Sandwiches",
    category: "App · Personal Product",
    image: "/works/sandwiches/3.png",
    href: "/works/sandwiches",
  },
  {
    title: "GreTestPrep",
    category: "Web App · Freelance",
    image: "/works/gre/1.png",
    href: "/works/gre",
  },
] as const;

function ProjectCard({
  title,
  category,
  image,
  href,
}: {
  title: string;
  category: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl"
      style={{ height: "52vh" }}
    >
      <div className="relative min-h-0 flex-1 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="shrink-0 bg-[#202020] px-5 py-4">
        <h3 className="text-[#FFFFFF] text-lg font-bold">{title}</h3>
        <p className="text-sm text-[#B0B0B0]">{category}</p>
      </div>
    </Link>
  );
}

export function RecentWork() {
  return (
    <section
      id="recent-work"
      className="bg-[#1A1A1A] px-6 py-16 md:px-12 lg:px-20"
      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="mt-1 h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: "#DFFF66" }}
              aria-hidden
            />
            <h2 className="text-[#FFFFFF] text-3xl font-bold md:text-4xl">
              Recent Work
            </h2>
          </div>
          <span className="text-[#B0B0B0] text-sm md:text-base">2024-2026</span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.href}
              title={project.title}
              category={project.category}
              image={project.image}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
