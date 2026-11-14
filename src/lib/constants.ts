import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Hassan Yousaf",
  title: "Portfolio and Blog",
  description:
    "Personal portfolio and blog about web development with Next.js, React, and TypeScript.",
  githubUrl: "https://github.com/hyousafdev",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];