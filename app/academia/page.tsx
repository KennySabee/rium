import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import ItemList from "@/components/sections/ItemList";
import { pages } from "@/data/pages";
import { academia } from "@/data/items";

export const metadata: Metadata = { title: pages.academia.title, description: pages.academia.text };
export default function Page() {
  return (<><PageIntro {...pages.academia} /><ItemList items={academia} /></>);
}
