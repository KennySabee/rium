"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import type { Article } from "@/data/articles";

const PER_PAGE = 4;
const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
export const fmt = (d: string) => new Date(d).toLocaleDateString("es", { dateStyle: "long" });

export default function BlogList({ articles }: { articles: Article[] }) {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const results = useMemo(() => {
    const t = norm(q.trim());
    if (!t) return articles;
    return articles.filter((a) => norm([a.title, a.excerpt, a.category, ...a.content.map((b) => b.text)].join(" ")).includes(t));
  }, [q, articles]);
  const pages = Math.max(1, Math.ceil(results.length / PER_PAGE));
  const current = Math.min(page, pages);
  const shown = results.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  return (
    <section className="mx-auto max-w-3xl px-6 md:px-10">
      <div role="search" className="relative mb-10">
        <label htmlFor="q" className="sr-only">Buscar artículos</label>
        <Search className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2" aria-hidden />
        <input id="q" type="search" value={q} placeholder="Buscar por palabra clave"
          onChange={(e) => { setQ(e.target.value); setPage(1); }}
          className="w-full border-b border-line bg-transparent py-3 pl-8 placeholder:text-mute focus:border-olive focus:outline-none" />
      </div>
      <p className="sr-only" aria-live="polite">{results.length} resultados</p>
      {shown.length === 0 ? (
        <p className="py-16 text-center text-brown">No hay artículos que coincidan con “{q}”.</p>
      ) : (
        <ul className="divide-y divide-line">
          {shown.map((a) => (
            <li key={a.slug} className="py-8">
              <p className="text-sm text-mute">{a.category} · {fmt(a.date)} · {a.author}</p>
              <h2 className="mt-2 text-3xl font-bold"><Link href={`/blog/${a.slug}`} className="hover:underline">{a.title}</Link></h2>
              <p className="mt-2 text-brown">{a.excerpt}</p>
            </li>
          ))}
        </ul>
      )}
      <nav aria-label="Paginación" className="mt-10 flex items-center justify-between text-sm">
        <button onClick={() => setPage(current - 1)} disabled={current <= 1} aria-label="Página anterior" className="flex items-center gap-1 disabled:opacity-30"><ChevronLeft className="h-4 w-4" />Anterior</button>
        <span>Página {current} de {pages}</span>
        <button onClick={() => setPage(current + 1)} disabled={current >= pages} aria-label="Página siguiente" className="flex items-center gap-1 disabled:opacity-30">Siguiente<ChevronRight className="h-4 w-4" /></button>
      </nav>
    </section>
  );
}
