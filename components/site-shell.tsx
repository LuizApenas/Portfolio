/* components/site-shell.tsx - Dark background layers, gradient header, footer watermark */

import type { ReactNode } from "react";
import Link from "next/link";

import { MobileNav } from "@/components/mobile-nav";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export function SiteShell({
  children,
  pathname,
}: {
  children: ReactNode;
  pathname: string;
}) {
  return (
    <>
      {/* Fixed dark background layers: red glow orb, grid overlay */}
      <div className="red-glow-orb" aria-hidden />
      <div className="grid-overlay" aria-hidden />

      <div className="site-shell">
        <header className="site-header">
          <Link className="brand" href="/">
            <span className="brand-mark">
              <span>LF</span>
            </span>
            <span className="brand-text">Luiz Felipe Santos</span>
          </Link>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  className={isActive ? "is-active" : undefined}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <MobileNav />
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Luiz Felipe Santos</p>
        </footer>
      </div>
    </>
  );
}
