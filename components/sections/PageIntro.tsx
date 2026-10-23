export default function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-40 md:px-10">
      <p className="text-sm font-medium uppercase tracking-widest text-mute">{eyebrow}</p>
      <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brown">{text}</p>
    </section>
  );
}
