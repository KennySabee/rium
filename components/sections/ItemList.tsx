import Image from "next/image";

type Item = { title: string; tag: string; text: string; image?: { src: string; alt: string } };
// Lista editorial reutilizada por Lab, Academia y Proyectos.
export default function ItemList({ items }: { items: Item[] }) {
  return (
    <section className="mx-auto max-w-7xl divide-y divide-line border-y border-line px-6 md:px-10">
      {items.map((it) => (
        <article key={it.title} className="grid gap-6 py-10 md:grid-cols-[1fr_2fr]">
          <div className="relative aspect-[4/3] bg-moss">
            {it.image ? <Image src={it.image.src} alt={it.image.alt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
              : <span className="absolute inset-0 grid place-items-center text-xs">Imagen provisional</span>}
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-mute">{it.tag}</p>
            <h2 className="mt-2 text-3xl font-bold">{it.title}</h2>
            <p className="mt-3 max-w-xl text-brown">{it.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
