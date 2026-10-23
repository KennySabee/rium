"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

type S = { name: string; description: string; audience: string; includes: string };
export default function ServiceAccordion({ items }: { items: S[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((s, i) => {
        const isOpen = open === i;
        return (
          <li key={s.name} className="py-8">
            <h2 className="text-2xl font-bold">
              <button className="flex w-full items-start justify-between gap-6 text-left" aria-expanded={isOpen} aria-controls={`s-${i}`} id={`b-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                <span>{s.name}</span>
                <Plus className={`mt-1 h-6 w-6 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden />
                <span className="sr-only">{isOpen ? "Cerrar" : "Ver más"}</span>
              </button>
            </h2>
            <p className="mt-3 text-brown">{s.description}</p>
            <div id={`s-${i}`} role="region" aria-labelledby={`b-${i}`} hidden={!isOpen} className="mt-5 space-y-2 border-l-2 border-moss pl-4 text-sm text-brown">
              <p><strong>Dirigido a:</strong> {s.audience}</p>
              <p><strong>Incluye:</strong> {s.includes}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
