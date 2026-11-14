import Link from "next/link";
import { siteConfig, skills } from "@/lib/constants";

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <p className="text-sm text-foreground/60">Hello, I am</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{siteConfig.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground/80">
        Web developer with 3 years of WordPress experience and hands-on work on
        Shopify and Webflow, now building modern web apps with React and
        Next.js.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-foreground/20 px-5 py-2.5 text-sm font-medium hover:bg-foreground/5"
        >
          Contact Me
        </Link>
      </div>

      <h2 className="mt-16 text-xl font-semibold">Tech I work with</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-foreground/20 px-3 py-1 text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}