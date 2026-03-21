/* components/mobile-nav.tsx - Dark hamburger button and glassmorphism panel (styling in globals.css) */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="mobile-nav">
      <button
        aria-controls="site-nav"
        aria-expanded={open}
        aria-label="Abrir navegação"
        className="menu-toggle"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span />
        <span />
      </button>

      <nav className={`nav-panel${open ? " is-open" : ""}`} id="site-nav">
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
    </div>
  );
}
