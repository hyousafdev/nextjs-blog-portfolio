export type NavLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string[];
};