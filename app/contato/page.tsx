import { SiteShell } from "@/components/site-shell";
import { personalInfo } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <SiteShell>
      <section>
        <h1>Contato</h1>
        <p className="hero-bio" style={{ marginBottom: "32px" }}>
          Estou disponível para novas oportunidades profissionais como desenvolvedor Full-Stack / Backend
          (Go, React, Node), além de projetos de automação e engenharia de software.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
              WhatsApp (Direto)
            </div>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "1.1rem", fontWeight: 600 }}
            >
              {personalInfo.phone} ↗
            </a>
          </div>

          <div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
              E-mail
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{ fontSize: "1.1rem", fontWeight: 600 }}
            >
              {personalInfo.email} ↗
            </a>
          </div>

          <div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
              LinkedIn
            </div>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "1.1rem", fontWeight: 600 }}
            >
              linkedin.com/in/luiz-felipe-santos-95490b208 ↗
            </a>
          </div>

          <div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
              GitHub
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "1.1rem", fontWeight: 600 }}
            >
              github.com/{personalInfo.githubUser} ↗
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
