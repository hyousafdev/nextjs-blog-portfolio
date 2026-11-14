# Next.js Blog & Portfolio

Personal portfolio and blog website built with Next.js (App Router), TypeScript and Tailwind CSS.

Live demo: coming soon

## Features

- Home, About, Projects and Contact pages
- Blog with a listing page and dynamic post pages (`/blog/[slug]`)
- Static generation for all blog posts using `generateStaticParams`
- Per-page SEO metadata, Open Graph tags, sitemap and robots.txt
- Responsive layout with Navbar, Footer and active link highlight
- Custom 404 page
- Light and dark mode based on system preference

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, Turbopack)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- ESLint

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/hyousafdev/nextjs-blog-portfolio.git
cd nextjs-blog-portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start the development server  |
| `npm run build` | Create a production build     |
| `npm run start` | Run the production build      |
| `npm run lint`  | Run ESLint                    |

## Project Structure

```
src/
├── app/
│   ├── about/
│   ├── blog/
│   │   └── [slug]/
│   ├── contact/
│   ├── projects/
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
├── lib/
└── types/
```

## Adding a Blog Post

Add a new object to the `posts` array in `src/lib/posts.ts` with a unique `slug`, a title, excerpt, date, tags and content. The new post page is generated automatically at build time.

## Author

Hassan Yousaf - [GitHub](https://github.com/hyousafdev)