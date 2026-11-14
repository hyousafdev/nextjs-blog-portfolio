import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/blog" className="text-sm hover:underline">
        &larr; Back to blog
      </Link>

      <h1 className="mt-6 text-3xl font-bold">{post.title}</h1>
      <p className="mt-2 text-sm text-foreground/60">{formatDate(post.date)}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-foreground/5 px-3 py-1 text-xs"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-8 space-y-4 text-foreground/80">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}