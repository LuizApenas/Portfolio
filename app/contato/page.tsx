/* app/contato/page.tsx - Contact page (dark theme via globals.css) */

import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell pathname="/contato">
      <PageIntro
        description="Se você precisa de alguém com visão de operação, vontade de construir e capacidade de evoluir rápido, podemos conversar."
        eyebrow="Contato"
        title="Aberto a oportunidades, projetos e conversas sérias sobre produto e tecnologia."
      />

      <section className="section">
        <div className="contact-grid">
          <article className="contact-card">
            <span className="tag">WhatsApp</span>
            <h2>Contato rápido</h2>
            <p>Para iniciar uma conversa direta sobre projeto, parceria ou serviço.</p>
            <Link
              className="button button-primary"
              href="https://wa.me/5534991614690?text=Olá%2C+vi+seu+portfólio+e+quero+conversar."
              target="_blank"
            >
              Chamar no WhatsApp
            </Link>
          </article>

          <article className="contact-card">
            <span className="tag">LinkedIn</span>
            <h2>Rede profissional</h2>
            <p>Perfil para networking, histórico profissional e novas conexões.</p>
            <Link
              className="button button-secondary"
              href="https://www.linkedin.com/in/luiz-felipe-santos-95490b208/"
              target="_blank"
            >
              Abrir LinkedIn
            </Link>
          </article>

          <article className="contact-card">
            <span className="tag">GitHub</span>
            <h2>Código e projetos</h2>
            <p>Repositórios, experimentos e evolução técnica contínua.</p>
            <Link
              className="button button-secondary"
              href="https://github.com/LuizApenas"
              target="_blank"
            >
              Ver GitHub
            </Link>
          </article>

          <article className="contact-card">
            <span className="tag">Email</span>
            <h2>Propostas formais</h2>
            <p>Canal melhor para convites profissionais e alinhamentos mais detalhados.</p>
            <Link className="button button-secondary" href="mailto:luizz.felipe.santos17@gmail.com">
              Enviar email
            </Link>
          </article>
        </div>
      </section>

      <section className="section section-accent">
        <SectionHeading
          eyebrow="Interesses"
          title="Onde consigo gerar mais valor hoje."
        />

        <div className="feature-grid">
          <article className="feature-card">
            <h3>CRM e operações internas</h3>
            <p>Sistemas voltados para atendimento, qualificação, acompanhamento e gestão.</p>
          </article>
          <article className="feature-card">
            <h3>Automação de fluxo</h3>
            <p>Integrações com n8n, scripts e processos que eliminam trabalho repetitivo.</p>
          </article>
          <article className="feature-card">
            <h3>Dashboards e produtos web</h3>
            <p>Painéis com autenticação, métricas, regras de acesso e visão operacional.</p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
