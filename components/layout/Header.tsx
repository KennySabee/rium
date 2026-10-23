"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/navigation";

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  const compact = scrolled || path !== "/";
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${compact ? "border-b border-line bg-cream/95 py-3 backdrop-blur" : "py-8"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        {/* TODO: sustituir por <Image src="/logo/rium.svg" /> cuando se añada el logotipo */}
        <Link href="/" aria-label="RIUM, ir al inicio" className={`font-black tracking-tight transition-all duration-300 ${compact ? "text-2xl" : "text-4xl"}`}>RIUM</Link>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={path.startsWith(n.href) ? "page" : undefined}
                  className={`pb-1 hover:border-b hover:border-olive ${path.startsWith(n.href) ? "border-b border-olive" : ""}`}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="menu-movil" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="menu-movil" aria-label="Principal móvil" className="border-t border-line bg-cream px-6 py-6 md:hidden">
          <ul className="space-y-4 text-2xl font-bold">
            {nav.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}
          </ul>
        </nav>
      )}
    </header>
  );
}
