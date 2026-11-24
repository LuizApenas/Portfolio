import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  badge,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  badge?: string;
}) {
  return (
    <div className="section-header">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span className="eyebrow">{eyebrow}</span>
        {badge && <span className="tag-pill cyan">{badge}</span>}
      </div>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-desc">{description}</p> : null}
    </div>
  );
}
