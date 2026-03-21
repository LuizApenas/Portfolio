/* app/sobre/page.tsx - About page (dark theme via globals.css) */

import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell pathname="/sobre">
      <section className="page-hero page-hero-with-image">
        <div>
          <span className="eyebrow">Sobre mim</span>
          <h1>Minha base mistura tecnologia, gestão e rotina operacional.</h1>
          <p>
            Isso influencia diretamente a forma como penso produto: gosto de software
            que resolve gargalo, organiza processo e melhora a vida de quem usa.
          </p>
        </div>

        <Image
          alt="Retrato de Luiz Felipe Santos"
          className="portrait"
          height={900}
          src="/images/portrait.jpg"
          width={720}
        />
      </section>

      <section className="section">
        <div className="two-column">
          <article className="panel">
            <h2>Trajetória</h2>
            <p>
              Sou estudante de Sistemas de Informação e venho migrando cada vez mais
              para uma atuação focada em desenvolvimento de software, automação e sistemas web.
            </p>
            <p>
              A experiência com rotina empresarial, atendimento e gestão me deu repertório
              para enxergar software como ferramenta de operação, não apenas como código.
            </p>
          </article>

          <article className="panel">
            <h2>Como penso</h2>
            <p>
              Gosto de entender contexto, restrição e impacto. Quando projeto uma solução,
              penso em fluxo, permissões, dados, confiabilidade e clareza de interface.
            </p>
            <p>
              Tenho interesse especial por CRM, dashboards, integrações, backend e
              automações que reduzam trabalho manual.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Competências"
          title="O que venho aplicando nos projetos mais recentes."
        />

        <div className="feature-grid">
          <article className="feature-card">
            <h3>Frontend</h3>
            <p>Next.js, React, TypeScript, Tailwind, interfaces orientadas a painel e experiência responsiva.</p>
          </article>
          <article className="feature-card">
            <h3>Backend</h3>
            <p>Node.js, Express, Go, autenticação com Firebase, APIs REST e integração com banco.</p>
          </article>
          <article className="feature-card">
            <h3>Dados e infraestrutura</h3>
            <p>Supabase, PostgreSQL, Edge Functions, organização de schema e visão operacional.</p>
          </article>
          <article className="feature-card">
            <h3>Automação</h3>
            <p>n8n, scripts em Python e fluxos para reduzir tarefas repetitivas e conectar sistemas.</p>
          </article>
        </div>
      </section>

      <section className="section section-accent">
        <SectionHeading
          eyebrow="Contexto real"
          title="Minha experiência fora do código também molda meu trabalho."
        />

        <div className="gallery-grid">
          <figure className="gallery-card">
            <Image alt="Luiz Felipe programando" height={640} src="/images/coding-cat.jpg" width={900} />
            <figcaption>Rotina de estudo, construção e iteração constante.</figcaption>
          </figure>
          <figure className="gallery-card">
            <Image alt="Luiz Felipe na empresa" height={640} src="/images/company.jpg" width={900} />
            <figcaption>Vivência com gestão e operação no ambiente empresarial.</figcaption>
          </figure>
          <figure className="gallery-card">
            <Image alt="Luiz Felipe trabalhando" height={640} src="/images/daily-work.jpg" width={900} />
            <figcaption>Disciplina, esforço e contato direto com a realidade do dia a dia.</figcaption>
          </figure>
        </div>
      </section>
    </SiteShell>
  );
}
