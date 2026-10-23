import Link from "next/link";
import { nav } from "@/data/navigation";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer id="contacto" className="mt-32 bg-olive text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3 md:px-10">
        <div>
          <p className="text-5xl font-black">{site.name}</p>
          <p className="mt-4 text-sm text-moss">Contacto</p>
        </div>
        <ul className="space-y-3 text-sm">
          {site.contact.map((c) => (
            <li key={c.label}><span className="block text-moss">{c.label}</span>
              {c.href ? <a href={c.href} className="underline underline-offset-4">{c.value}</a> : c.value}</li>
          ))}
        </ul>
        <ul className="space-y-3 text-sm">
          {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:underline">{n.label}</Link></li>)}
        </ul>
      </div>
      <p className="border-t border-cream/20 px-6 py-6 text-center text-xs text-moss">© {new Date().getFullYear()} RIUM</p>
    </footer>
  );
}
