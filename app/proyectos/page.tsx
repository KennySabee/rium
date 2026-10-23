import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import ItemList from "@/components/sections/ItemList";
import { pages } from "@/data/pages";
import { projects } from "@/data/items";

export const metadata: Metadata = { title: pages.proyectos.title, description: pages.proyectos.text };
export default function Page() {
  return (<><PageIntro {...pages.proyectos} /><ItemList items={projects} /></>);
}
