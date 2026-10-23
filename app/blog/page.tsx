import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import BlogList from "@/components/blog/BlogList";
import { pages } from "@/data/pages";
import { articles } from "@/data/articles";

export const metadata: Metadata = { title: pages.blog.title, description: pages.blog.text };
export default function Page() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  return (<><PageIntro {...pages.blog} /><BlogList articles={sorted} /></>);
}
