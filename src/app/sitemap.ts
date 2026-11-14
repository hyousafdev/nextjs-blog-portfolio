import type { MetadataRoute } from "next";
import { navLinks, siteConfig } from "@/lib/constants";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = navLinks.map((link) => ({
    url: `${siteConfig.url}${link.href === "/" ? "" : link.href}`,
  }));

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...pages, ...posts];
}