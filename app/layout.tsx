import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["400", "500", "700", "900"] });
export const metadata: Metadata = {
  title: { default: "RIUM", template: "%s · RIUM" },
  description: "Descripción provisional del sitio de RIUM.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-cream focus:p-2">Saltar al contenido</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
