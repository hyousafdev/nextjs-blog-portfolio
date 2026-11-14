import { siteConfig } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-sm">
        <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}