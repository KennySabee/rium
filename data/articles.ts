export type Block = { type: "h2" | "p"; text: string };
export type Article = { slug: string; title: string; excerpt: string; author: string; date: string; category: string; cover?: { src: string; alt: string }; content: Block[] };
const body: Block[] = [
  { type: "p", text: "Texto provisional del artículo. Sustituir por el contenido real." },
  { type: "h2", text: "Subtítulo provisional" },
  { type: "p", text: "Segundo párrafo provisional. La plantilla admite contenido extenso con párrafos y encabezados." },
];
const a = (slug: string, title: string, category: string, date: string): Article => ({
  slug, title, category, date, author: "Autor por definir", excerpt: "Extracto provisional del artículo.", content: body,
});
export const articles: Article[] = [
  a("articulo-provisional-1", "Artículo provisional uno", "Reflexión", "2026-10-01"),
  a("articulo-provisional-2", "Artículo provisional dos", "Territorio", "2026-09-15"),
  a("articulo-provisional-3", "Artículo provisional tres", "Método", "2026-09-01"),
  a("articulo-provisional-4", "Artículo provisional cuatro", "Reflexión", "2026-08-12"),
  a("articulo-provisional-5", "Artículo provisional cinco", "Territorio", "2026-07-20"),
];
