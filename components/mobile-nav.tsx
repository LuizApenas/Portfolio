"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre Mim" },
  { href: "/curriculo", label: "Currículo" },
  { href: "/contato", label: "Contato" },
];

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        aria-controls="mobile-site-nav"
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="mobile-nav-toggle"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="mobile-menu-drawer" id="mobile-site-nav">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                className={`nav-link ${isActive ? "is-active" : ""}`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            className="btn btn-primary btn-sm"
            href="/curriculo"
            style={{ marginTop: "12px", width: "100%" }}
          >
            Acessar Currículo
          </Link>
        </div>
      )}
    </>
  );
}
