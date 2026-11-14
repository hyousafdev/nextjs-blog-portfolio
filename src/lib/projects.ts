import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "TaskFlow",
    description:
      "A task management app where you can create, organize and track tasks, with state managed by Redux Toolkit.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Portfolio and Blog",
    description:
      "This website: a personal portfolio and blog built with the Next.js App Router, with dynamic routes and static generation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/hyousafdev/nextjs-blog-portfolio",
  },
];