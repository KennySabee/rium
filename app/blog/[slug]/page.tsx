
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

type P = { params: Promise<{ slug: string }> };

export const generateStaticParams = () =>
  articles.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);

  return a ? { title: a.title, description: a.excerpt } : {};
}

export default async function Article({ params }: P) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);

  if (!a) notFound();

  const others = articles.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-2xl px-6 pb-16 pt-40 md:px-10">
      <Link
        href="/blog"
        className="text-sm text-mute underline underline-offset-4"
      >
        ← Volver al blog
      </Link>

      <p className="mt-8 text-sm uppercase tracking-widest text-mute">
        {a.category}
      </p>

      <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
        {a.title}
      </h1>

      <p className="mt-4 text-xl text-brown">{a.excerpt}</p>

      <p className="mt-4 text-sm text-mute">
        {a.author} ·{" "}
        {new Date(a.date).toLocaleDateString("es", {
          dateStyle: "long",
        })}
      </p>

      {a.cover && (
        <Image
          src={a.cover.src}
          alt={a.cover.alt}
          width={1200}
          height={800}
          className="mt-10 h-auto w-full"
        />
      )}

      <div className="mt-12 space-y-6 text-lg leading-8">
        {a.content.map((b, i) =>
          b.type === "h2" ? (
            <h2 key={i} className="pt-6 text-2xl font-bold">
              {b.text}
            </h2>
          ) : (
            <p key={i}>{b.text}</p>
          )
        )}
      </div>

      <aside className="mt-20 border-t border-line pt-8">
        <h2 className="text-sm uppercase tracking-widest text-mute">
          Seguir leyendo
        </h2>

        <ul className="mt-4 space-y-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/blog/${o.slug}`}
                className="text-xl font-bold hover:underline"
              >
                {o.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}
