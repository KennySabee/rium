import Image from "next/image";

type Img = { src: string; alt: string };
// Imagen fija a la izquierda (solo ≥lg) y contenido que se desplaza a la derecha.
export default function StickyImageLayout({ image, children }: { image?: Img; children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-2">
      <div className="self-start lg:sticky lg:top-24">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-moss lg:max-h-[calc(100vh-8rem)]">
          {image ? <Image src={image.src} alt={image.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" priority />
            : <span className="absolute inset-0 grid place-items-center text-sm text-olive">Imagen provisional · public/images</span>}
        </div>
      </div>
      <div className="min-h-[120vh] space-y-10">{children}</div>
    </div>
  );
}
