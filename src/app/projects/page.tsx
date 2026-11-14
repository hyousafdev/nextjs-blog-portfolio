import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects built with React, Redux Toolkit, Next.js and TypeScript.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-foreground/80">
        Some of the things I have built while learning and working.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}