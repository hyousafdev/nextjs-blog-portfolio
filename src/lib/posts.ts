import type { Post } from "@/types";

const posts: Post[] = [
  {
    slug: "why-i-am-moving-from-wordpress-to-nextjs",
    title: "Why I Am Moving from WordPress to Next.js",
    excerpt:
      "After years of building sites with WordPress, here is why I started learning React and Next.js.",
    date: "2026-11-15",
    tags: ["Next.js", "WordPress", "Career"],
    content: [
      "I have spent years building websites with WordPress, and it taught me a lot about real client work: themes, plugins, content structure and deadlines.",
      "At some point I wanted more control over performance, code structure and the developer experience. That is what pushed me towards React and then Next.js.",
      "Next.js gives me routing, server rendering and static generation out of the box, so I can build fast websites without wiring everything myself.",
      "This blog is where I will share what I learn along the way.",
    ],
  },
  {
    slug: "why-i-use-redux-toolkit",
    title: "Why I Use Redux Toolkit for State Management",
    excerpt:
      "Redux Toolkit removes most of the boilerplate of classic Redux. Here is what makes it easier to work with.",
    date: "2026-11-16",
    tags: ["React", "Redux Toolkit"],
    content: [
      "Classic Redux needed a lot of setup code: action types, action creators and long reducers.",
      "Redux Toolkit simplifies this with createSlice, which generates actions and reducers together in one place.",
      "It also configures the store with sensible defaults, so I can focus on the logic of my app instead of the setup.",
    ],
  },
  {
    slug: "nextjs-app-router-basics",
    title: "Next.js App Router Basics",
    excerpt:
      "A quick overview of how folders become routes in the Next.js App Router.",
    date: "2026-11-17",
    tags: ["Next.js", "TypeScript"],
    content: [
      "In the App Router, every folder inside the app directory becomes a route, and a page.tsx file inside it makes that route public.",
      "A layout.tsx file wraps its pages and stays the same while you move between them, which is perfect for things like a Navbar and Footer.",
      "Dynamic routes use square brackets in the folder name, like [slug], so one file can render many pages.",
    ],
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}