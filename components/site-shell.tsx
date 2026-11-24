"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { PrototypeBar } from "@/components/prototype-bar";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/curriculo", label: "Currículo" },
  { href: "/contato", label: "Contato" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="container">
      <header className="header">
        <Link className="brand" href="/">
          <Image
            alt="Luiz Felipe"
            className="brand-avatar"
            height={40}
            src="/images/portrait-square.jpg"
            width={40}
          />
          <div>
            <div className="brand-title">Luiz Felipe dos Santos</div>
            <div className="brand-subtitle">Desenvolvedor Full-Stack</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Navegação">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                className={isActive ? "active" : undefined}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div>Luiz Felipe dos Santos • Uberlândia, MG</div>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="https://github.com/LuizApenas" target="_blank" rel="noreferrer">
            github
          </a>
          <a href="https://linkedin.com/in/luiz-felipe-santos-95490b208" target="_blank" rel="noreferrer">
            linkedin
          </a>
          <a href="https://wa.me/5534991614690" target="_blank" rel="noreferrer">
            whatsapp
          </a>
          <a href="mailto:luizz.felipe.santos17@gmail.com">
            email
          </a>
        </div>
      </footer>
      <PrototypeBar />
    </div>
  );
}
