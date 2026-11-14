import Link from "next/link";
import type { Post } from "@/types";
import { formatDate } from "@/lib/utils";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-lg border border-foreground/10 p-6 transition hover:border-foreground/30">
      <p className="text-sm text-foreground/60">{formatDate(post.date)}</p>
      <h2 className="mt-1 text-xl font-semibold">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="mt-2 text-foreground/80">{post.excerpt}</p>

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
    </article>
  );
}