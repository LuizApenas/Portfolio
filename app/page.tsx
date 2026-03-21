/* app/page.tsx - Home page with animated badge, gradient hero, shiny CTA */

import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { featuredProjects } from "@/lib/site-data";

export default function HomePage() {
  return (
    <SiteShell pathname="/">
      <section className="hero">
        <div className="hero-copy">
          {/* Animated ping badge */}
          <span className="hero-badge fade-in-up">Next.js, CRM e automação</span>
          <h1 className="hero-title">
            Transformo operação real em{" "}
            <span className="hero-accent">
              sistemas mais claros, modernos e escaláveis
              <svg className="hero-underline" aria-hidden viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 150 4 198 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>
          <p className="hero-text">
            Sou Luiz Felipe Santos, estudante de Sistemas de Informação e desenvolvedor
            com foco em CRM, fluxos automatizados, dashboards e produtos internos
            pensados para uso no dia a dia.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary shiny-cta" href="/projetos">
              Ver projetos
            </Link>
            <Link className="button button-secondary" href="/contato">
              Falar comigo
            </Link>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="metric-card">
            <span className="metric-label">Foco atual</span>
            <strong>CRM web, automação e sistemas operacionais</strong>
          </div>
          <div className="metric-grid">
            <article className="metric-card">
              <span className="metric-number">2</span>
              <span className="metric-label">Cases mais fortes em produto e operação</span>
            </article>
            <article className="metric-card">
              <span className="metric-number">4</span>
              <span className="metric-label">Frentes centrais: frontend, backend, dados e automação</span>
            </article>
          </div>
        </aside>
      </section>

      <section className="section">
        <SectionHeading
          description="Minha experiência com gestão e operação influencia diretamente a forma como eu construo software."
          eyebrow="Posicionamento"
          title="Hoje meu portfólio representa produto, fluxo e decisão técnica mais madura."
        />

        <div className="feature-grid">
          <article className="feature-card">
            <h3>Visão de negócio + técnica</h3>
            <p>Penso em software como ferramenta de operação, produtividade e tomada de decisão.</p>
          </article>
          <article className="feature-card">
            <h3>Sistemas para uso real</h3>
            <p>Tenho trabalhado em painéis, autenticação, automações e fluxos com persistência de dados.</p>
          </article>
          <article className="feature-card">
            <h3>Stack atual</h3>
            <p>Next.js, React, TypeScript, Go, Node.js, Supabase, Firebase, PostgreSQL e n8n.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Projetos recentes"
          title="Os trabalhos que melhor mostram minha evolução."
        />

        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              bullets={project.bullets}
              description={project.description}
              featured={index === 0}
              key={project.title}
              tags={project.tags}
              title={project.title}
            />
          ))}
        </div>
      </section>

      <section className="section section-accent">
        <SectionHeading
          eyebrow="Hoje"
          title="Construo com foco em produto utilizável, não só em visual."
        />

        <div className="timeline">
          <article className="timeline-item">
            <span className="timeline-step">01</span>
            <div>
              <h3>Entendo a operação</h3>
              <p>O primeiro filtro é sempre o problema real que precisa ser resolvido.</p>
            </div>
          </article>
          <article className="timeline-item">
            <span className="timeline-step">02</span>
            <div>
              <h3>Estruturo fluxo e dados</h3>
              <p>Banco, permissões, integrações e interface precisam conversar entre si.</p>
            </div>
          </article>
          <article className="timeline-item">
            <span className="timeline-step">03</span>
            <div>
              <h3>Entrego clareza</h3>
              <p>Meu objetivo é simplificar a operação para quem usa o sistema no dia a dia.</p>
            </div>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
