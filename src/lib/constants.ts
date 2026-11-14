import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Hassan Yousaf",
  title: "Portfolio and Blog",
  description:
    "Personal portfolio and blog about web development with Next.js, React, and TypeScript.",
  url: "https://your-site.vercel.app",
  githubUrl: "https://github.com/hyousafdev",
  email: "hassanyousaf.dev@gmail.com",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const skills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "WordPress",
  "Shopify",
  "Webflow",
  "React",
  "Redux Toolkit",
  "Tailwind CSS",
  "Next.js",
  "TypeScript",
];