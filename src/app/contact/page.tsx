import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-foreground/80">
        Have a project in mind or just want to say hello? Reach out.
      </p>

      <ul className="mt-8 space-y-3">
        <li>
          Email:{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {siteConfig.githubUrl}
          </a>
        </li>
      </ul>
    </section>
  );
}