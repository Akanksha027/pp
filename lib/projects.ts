export type FeaturedProject = {
  title: string;
  category: string;
  image: string;
  href: string;
  kind: "project" | "freelance";
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "PeriPeri",
    category: "App · Personal Product",
    image: "/periperi/header.jpg",
    href: "/works/periperi",
    kind: "project",
  },
  {
    title: "Sandwiches",
    category: "App · Personal Product",
    image: "/works/sandwiches/3.png",
    href: "/works/sandwiches",
    kind: "project",
  },
  {
    title: "GreTestPrep",
    category: "Web App · Freelance",
    image: "/works/gre/1.png",
    href: "/works/gre",
    kind: "project",
  },
];

