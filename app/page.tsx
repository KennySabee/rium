import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { nav } from "@/data/navigation";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid min-h-screen max-w-7xl items-end gap-10 px-6 pb-20 pt-48 md:grid-cols-2 md:px-10">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-mute">[Categoría provisional]</p>
          <h1 className="mt-4 text-7xl font-black tracking-tight md:text-9xl">RIUM</h1>
          <p className="mt-6 max-w-md text-lg text-brown">[Subtítulo provisional] Presentación del proyecto.</p>
        </div>
        <div className="grid aspect-[4/5] place-items-center bg-moss text-sm">Imagen o composición provisional</div>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-24 text-xl leading-relaxed text-brown md:px-10">
        [Introducción provisional] Texto breve sobre el enfoque, la identidad y la metodología de RIUM.
      </section>
      <section aria-label="Secciones" className="mx-auto max-w-7xl px-6 md:px-10">
        <ul className="divide-y divide-line border-y border-line">
          {nav.map((n, i) => (
            <li key={n.href}>
              <Link href={n.href} className="group grid items-center gap-4 py-8 md:grid-cols-[4rem_1fr_2fr_2rem]">
                <span className="text-sm text-mute">0{i + 1}</span>
                <span className="text-4xl font-bold">{n.label}</span>
                <span className="text-brown">{n.desc}</span>
                <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
