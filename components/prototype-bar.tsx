"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, LayoutGrid, Flame } from "lucide-react";

export function PrototypeBar() {
  const pathname = usePathname();

  const prototypes = [
    { href: "/p/industrial", label: "01. Industrial Brutalist", icon: Flame, tag: "Mais Ousado" },
    { href: "/p/terminal", label: "02. Terminal Hacker CLI", icon: Terminal, tag: "Puro Dev" },
    { href: "/", label: "03. Bento Minimal", icon: LayoutGrid, tag: "Equilibrado" },
  ];

  return (
    <aside className="proto-bar-wrapper" aria-label="Seletor de Protótipos">
      <div className="proto-bar">
        <span className="proto-label">PROTÓTIPOS:</span>
        <div className="proto-buttons">
          {prototypes.map((proto) => {
            const isActive =
              pathname === proto.href || (proto.href === "/" && pathname === "/p/bento");
            const Icon = proto.icon;
            return (
              <Link
                key={proto.href}
                href={proto.href}
                className={`proto-btn ${isActive ? "active" : ""}`}
              >
                <Icon size={14} />
                <span>{proto.label}</span>
                <span className="proto-tag">{proto.tag}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
