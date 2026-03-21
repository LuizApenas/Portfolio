/* app/projetos/page.tsx - Projects page (dark theme via globals.css) */

import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { projectGallery } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <SiteShell pathname="/projetos">
      <PageIntro
        description="Aqui o foco está em sistemas mais maduros, com autenticação, banco, backend, dashboards, automação e preocupação real com operação."
        eyebrow="Projetos"
        title="Selecionei os trabalhos que melhor mostram meu momento atual."
      />

      <section className="section">
        <article className="case-study">
          <div className="case-study-copy">
            <div className="project-tag-row">
              <span className="tag">Case principal</span>
              <span className="tag tag-muted">React + Node + Supabase + n8n</span>
            </div>
            <h2>VexoCrm</h2>
            <p>
              CRM voltado para operação e relacionamento com clientes, com uma arquitetura
              que centraliza dados no Supabase e usa n8n + Edge Functions para o fluxo de
              atendimento e qualificação.
            </p>
            <ul className="bullet-list">
              <li>Frontend React/Vite para CRM interno e portal de clientes</li>
              <li>Backend Node.js/Express para consultas, dashboard e notificações</li>
              <li>Memória de conversa, webhooks e automações conectadas ao workflow</li>
              <li>Estrutura pensada para sair da dependência de planilhas</li>
            </ul>
          </div>

          <div className="case-study-side">
            <div className="stack-panel">
              <h3>Stack</h3>
              <p>React 18, TypeScript, Vite, Node.js, Supabase, Firebase Auth e n8n.</p>
            </div>
            <div className="stack-panel">
              <h3>Valor entregue</h3>
              <p>Centralização operacional, rastreabilidade do atendimento e visão mais clara do funil.</p>
            </div>
          </div>
        </article>
      </section>

      <section className="section">
        <article className="case-study">
          <div className="case-study-copy">
            <div className="project-tag-row">
              <span className="tag">Case complementar</span>
              <span className="tag tag-muted">Next.js + Go + Supabase</span>
            </div>
            <h2>KORIS / Sistema de Gestão de Caixa</h2>
            <p>
              Sistema multiunidade com controle por perfis, autenticação via Firebase,
              frontend moderno em Next.js e backend em Go para operação de caixa,
              unidades e relatórios.
            </p>
            <ul className="bullet-list">
              <li>Arquitetura com separação clara entre frontend, backend e banco</li>
              <li>Perfis como admin, gestor, gerente e operador</li>
              <li>Uso de PostgreSQL no Supabase para persistência</li>
              <li>Fluxo autenticado com regras de acesso por unidade</li>
            </ul>
          </div>

          <div className="case-study-side">
            <div className="stack-panel">
              <h3>Stack</h3>
              <p>Next.js 16, React 19, TypeScript, Go, Firebase Auth, PostgreSQL e Tailwind.</p>
            </div>
            <div className="stack-panel">
              <h3>Escopo</h3>
              <p>Produto estruturado para gestão financeira e controle operacional multiunidade.</p>
            </div>
          </div>
        </article>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Outras frentes"
          title="Também sigo explorando projetos menores com aplicação prática."
        />

        <div className="project-grid">
          {projectGallery.map((project) => (
            <ProjectCard
              description={project.description}
              image={project.image}
              key={project.title}
              title={project.title}
            />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
