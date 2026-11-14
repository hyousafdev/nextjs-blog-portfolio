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