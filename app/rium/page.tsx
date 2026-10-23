import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import StickyImageLayout from "@/components/sections/StickyImageLayout";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: pages.rium.title, description: pages.rium.text };
const blocks = ["Identidad", "Enfoque", "Filosofía y metodología", "Información institucional"];
export default function Page() {
  return (
    <>
      <PageIntro {...pages.rium} />
      <StickyImageLayout>
        {blocks.map((b) => (
          <section key={b}><h2 className="text-3xl font-bold">{b}</h2>
            <p className="mt-3 text-brown">[Texto provisional] Contenido definitivo pendiente.</p></section>
        ))}
      </StickyImageLayout>
    </>
  );
}
