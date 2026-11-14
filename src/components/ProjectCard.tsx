import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-foreground/10 p-6">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="mt-2 flex-1 text-foreground/80">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-full bg-foreground/5 px-3 py-1 text-xs"
          >
            {item}
          </li>
        ))}
      </ul>

      {(project.githubUrl || project.liveUrl) && (
        <div className="mt-4 flex gap-4 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}