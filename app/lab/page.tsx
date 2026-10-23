import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import ItemList from "@/components/sections/ItemList";
import { pages } from "@/data/pages";
import { lab } from "@/data/items";

export const metadata: Metadata = { title: pages.lab.title, description: pages.lab.text };
export default function Page() {
  return (<><PageIntro {...pages.lab} /><ItemList items={lab} /></>);
}
