import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section>
        <h1>Projetos & Sistemas</h1>
        <p className="hero-bio" style={{ marginBottom: "36px" }}>
          Sistemas e ferramentas construídos para resolver problemas reais de operação,
          finanças e automação de processos.
        </p>

        <div className="project-list">
          {projects.map((p) => (
            <article key={p.id} className="project-item-card">
              {p.image && (
                <div
                  style={{
                    width: "100%",
                    height: "260px",
                    position: "relative",
                    background: "var(--surface-elevated)",
                    borderBottom: "1px solid var(--border-subtle)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
              )}

              <div className="project-item-body">
                <div className="project-meta-row">
                  <h3 className="project-title">{p.title}</h3>
                  <span className="project-tagline">{p.category}</span>
                </div>

                <p className="project-desc">{p.description}</p>

                {p.highlights && (
                  <ul className="exp-bullets" style={{ marginBottom: "16px" }}>
                    {p.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}

                <div className="project-stack-wrap">
                  {p.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links-row">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-bento"
                    >
                      <span>Ver Código no GitHub</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-bento-subtle"
                    >
                      <span>Demo Online</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
