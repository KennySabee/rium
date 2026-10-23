import Link from "next/link";
export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-40 md:px-10">
      <p className="text-sm uppercase tracking-widest text-mute">Error 404</p>
      <h1 className="mt-4 text-6xl font-black">Página no encontrada</h1>
      <Link href="/" className="mt-8 inline-block underline underline-offset-4">Volver al inicio</Link>
    </section>
  );
}
