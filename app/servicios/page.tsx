import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import StickyImageLayout from "@/components/sections/StickyImageLayout";
import ServiceAccordion from "@/components/sections/ServiceAccordion";
import { pages } from "@/data/pages";
import { services } from "@/data/services";

export const metadata: Metadata = { title: pages.servicios.title, description: pages.servicios.text };
export default function Page() {
  return (
    <>
      <PageIntro {...pages.servicios} />
      <StickyImageLayout><ServiceAccordion items={services} /></StickyImageLayout>
    </>
  );
}
