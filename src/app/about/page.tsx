import type { Metadata } from "next";
import { siteConfig, skills } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}, a web developer with WordPress, Shopify and Webflow experience, moving to modern frontend development.`,
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">About Me</h1>

      <div className="mt-6 space-y-4 text-foreground/80">
        <p>
          I am {siteConfig.name}, a web developer with 3 years of experience
          building websites with WordPress. I have also worked hands-on with
          Shopify and Webflow.
        </p>
        <p>
          I am now focusing on frontend development. I work with React, Redux
          Toolkit and Tailwind CSS, and I am learning Next.js and TypeScript to
          build faster and more maintainable web apps.
        </p>
        <p>
          Backend development is my next goal after I am comfortable with the
          frontend side.
        </p>
      </div>

      <h2 className="mt-10 text-xl font-semibold">Skills</h2>
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