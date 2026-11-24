"use client";

import Link from "next/link";
import { ArrowLeft, Printer, MessageCircle } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
import { personalInfo } from "@/lib/site-data";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div style={{ background: "#0b0d13", minHeight: "100vh", padding: "40px 20px 80px", color: "#f8fafc" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Toolbar superior */}
        <div className="resume-toolbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px", paddingBottom: "16px", borderBottom: "1px solid #1e2433", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/" className="cli-btn-link">
            <ArrowLeft size={14} />
            <span>Voltar a Vitrine</span>
          </Link>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
            <CopyButton text={personalInfo.email} label="Copiar E-mail" />
            <button className="cli-top-btn" onClick={handlePrint} type="button" style={{ background: "#38bdf8", color: "#000", borderColor: "#38bdf8", fontWeight: 700 }}>
              <Printer size={15} />
              <span>Imprimir / Salvar em PDF</span>
            </button>
            <a
              className="cli-top-btn"
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Folha do Curriculo */}
        <article className="resume-paper" style={{ background: "#11141d", border: "1px solid #1e2538", borderRadius: "8px", padding: "48px" }}>
          {/* Header */}
          <header style={{ borderBottom: "2px solid #28334a", paddingBottom: "20px", marginBottom: "24px" }}>
            <h1 style={{ fontSize: "2.1rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "4px" }}>
              LUIZ FELIPE DOS SANTOS
            </h1>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#38bdf8", marginBottom: "12px" }}>
              Desenvolvedor Full-Stack | Microsserviços em Go, GraphQL, RabbitMQ, Next.js e PostgreSQL
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "0.88rem", color: "#94a3b8" }}>
              <span>Uberlândia, MG</span>
              <span>•</span>
              <span>(34) 99161-4690</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} style={{ color: "#38bdf8" }}>{personalInfo.email}</a>
              <span>•</span>
              <a href="https://github.com/LuizApenas" target="_blank" rel="noreferrer" style={{ color: "#38bdf8" }}>
                github.com/LuizApenas
              </a>
              <span>•</span>
              <a href="https://linkedin.com/in/luiz-felipe-santos-95490b208" target="_blank" rel="noreferrer" style={{ color: "#38bdf8" }}>
                LinkedIn
              </a>
            </div>
          </header>

          {/* Perfil */}
          <section style={{ marginBottom: "28px" }}>
            <div className="resume-section-title" style={{ fontSize: "0.85rem", fontWeight: 800, color: "#38bdf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px", borderBottom: "1px solid #222d42", paddingBottom: "4px" }}>
              PERFIL PROFISSIONAL
            </div>
            <p style={{ color: "#cbd5e1", lineHeight: "1.65" }}>
              Desenvolvedor Full-Stack focado em microsserviços e arquiteturas distribuídas com <strong>Go (Golang)</strong>, <strong>GraphQL</strong>, <strong>RabbitMQ</strong>, <strong>Next.js 16</strong> e <strong>PostgreSQL</strong>. Graduando em Sistemas de Informação (7º período) e <strong>Sócio Proprietário de empresa (ECV Uberlândia / 2022 a Presente)</strong> com início de carreira no trabalho de entregas operacionais. Uno a vivência de fluxo de caixa, gestão e dores reais de negócio à capacidade técnica de construir ferramentas e softwares robustos para automação e gestão operacional. Criador da plataforma <strong>KORIS</strong> e de sistemas em produção ativa.
            </p>
          </section>

          {/* Experiencia */}
          <section style={{ marginBottom: "28px" }}>
            <div className="resume-section-title" style={{ fontSize: "0.85rem", fontWeight: 800, color: "#38bdf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px", borderBottom: "1px solid #222d42", paddingBottom: "4px" }}>
              EXPERIÊNCIA PROFISSIONAL
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                <strong style={{ fontSize: "1.05rem", color: "#ffffff" }}>Desenvolvedor Full-Stack Junior</strong>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#38bdf8", fontFamily: "var(--font-mono)" }}>2025 a Presente</span>
              </div>
              <div style={{ fontSize: "0.88rem", color: "#94a3b8", fontStyle: "italic", marginBottom: "8px" }}>
                Posição Atual: Microsserviços e Sistemas Distribuídos
              </div>
              <ul style={{ paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px", color: "#cbd5e1", fontSize: "0.92rem" }}>
                <li>Desenvolvimento e refatoração de microsserviços em Go (Golang) de alta concorrência e baixo consumo de memória.</li>
                <li>Construção de APIs GraphQL unificadas e mensageria assíncrona desacoplada via RabbitMQ.</li>
                <li>Desenvolvimento de interfaces em TypeScript e Next.js integradas via Apollo Client com cache normalizado.</li>
                <li>Modelagem relacional e queries no PostgreSQL com transações ACID e containerização Docker.</li>
                <li>Evolução da plataforma KORIS (gestão de caixa em produção com domínio próprio) e sistemas distribuídos.</li>
              </ul>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                <strong style={{ fontSize: "1.05rem", color: "#ffffff" }}>Sócio Proprietário / Gestão e Desenvolvimento de Ferramentas</strong>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#38bdf8", fontFamily: "var(--font-mono)" }}>2022 a Presente</span>
              </div>
              <div style={{ fontSize: "0.88rem", color: "#94a3b8", fontStyle: "italic", marginBottom: "8px" }}>
                ECV Uberlândia Ltda. / Gestão e Engenharia de Processos
              </div>
              <ul style={{ paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px", color: "#cbd5e1", fontSize: "0.92rem" }}>
                <li>Proprietário da empresa com gestão direta de equipe técnica, contratações e cultura operacional.</li>
                <li>Supervisão direta das finanças, fluxo de caixa, precificação de serviços e relacionamento com órgãos fiscalizadores de trânsito.</li>
                <li>Identificação de gargalos operacionais e desenvolvimento de softwares e automações em Python com filas assíncronas para montagem de laudos, reduzindo o tempo de 20 minutos para 2 a 3 minutos por veículo.</li>
                <li>Aplicação direta da vivência de dono e gestor na concepção de ferramentas de software para controle financeiro e processos.</li>
              </ul>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                <strong style={{ fontSize: "1.05rem", color: "#ffffff" }}>Coordenador Administrativo / Vistoriador</strong>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#38bdf8", fontFamily: "var(--font-mono)" }}>2019 a 2022</span>
              </div>
              <div style={{ fontSize: "0.88rem", color: "#94a3b8", fontStyle: "italic", marginBottom: "8px" }}>
                Iso Prime Brasil Vistorias Ltda.
              </div>
              <ul style={{ paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px", color: "#cbd5e1", fontSize: "0.92rem" }}>
                <li>Atendimento a clientes e despachantes, rotinas administrativas e inspeção técnica veicular regulatória.</li>
                <li>Treinamento de novos colaboradores e mapeamento de gargalos em fluxos de laudos.</li>
              </ul>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                <strong style={{ fontSize: "1.05rem", color: "#ffffff" }}>Entregador e Atendimento Operacional</strong>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#38bdf8", fontFamily: "var(--font-mono)" }}>2018 a 2019</span>
              </div>
              <div style={{ fontSize: "0.88rem", color: "#94a3b8", fontStyle: "italic", marginBottom: "8px" }}>
                Trabalho Autônomo e Serviços de Entrega
              </div>
              <ul style={{ paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px", color: "#cbd5e1", fontSize: "0.92rem" }}>
                <li>Atuação com pontualidade rigorosa, dinamismo e resolução ágil de imprevistos nas rotas de rua.</li>
                <li>Desenvolvimento da base de disciplina, resiliência física e mental e disposição inegociável para o trabalho duro.</li>
              </ul>
            </div>
          </section>

          {/* Projetos Técnicos de Engenharia */}
          <section style={{ marginBottom: "28px" }}>
            <div className="resume-section-title" style={{ fontSize: "0.85rem", fontWeight: 800, color: "#38bdf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px", borderBottom: "1px solid #222d42", paddingBottom: "4px" }}>
              PROJETOS EM PRODUÇÃO E DESTAQUE TÉCNICO
            </div>

            {/* KORIS */}
            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
                <strong style={{ fontSize: "1rem", color: "#38bdf8" }}>KORIS: Sistema de Gestão de Caixa e Operações (Em Produção / Domínio Próprio)</strong>
                <span style={{ fontSize: "0.82rem", color: "#94a3b8" }}>GoLang • GraphQL • RabbitMQ • Next.js 16 • PostgreSQL • Docker</span>
              </div>
              <p style={{ color: "#cbd5e1", fontSize: "0.9rem", marginTop: "4px" }}>
                Plataforma corporativa multi-unidade com domínio próprio. Fechamento de caixa e conciliação em tempo real com backend em Go de alta concorrência, mensageria via RabbitMQ para desacoplamento assíncrono e relatórios gerenciais com Next.js.
              </p>
            </div>

            {/* Sistema de Documentos */}
            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
                <strong style={{ fontSize: "1rem", color: "#4ade80" }}>Sistema de Documentos e Laudos Veiculares (Em Produção)</strong>
                <span style={{ fontSize: "0.82rem", color: "#94a3b8" }}>TypeScript • Node.js • PostgreSQL • Docker • Geração de PDFs</span>
              </div>
              <div style={{ fontSize: "0.8rem", color: "#38bdf8", marginTop: "2px" }}>
                Co-desenvolvido em parceria técnica com Cayke Nakazone (github.com/caykenakazone)
              </div>
              <p style={{ color: "#cbd5e1", fontSize: "0.9rem", marginTop: "4px" }}>
                Aplicação corporativa em produção ativa para gestão eletrônica de documentos, emissão e exportação em lote de laudos e vistorias veiculares com controle fiscal, anexação de fotos e auditoria digital.
              </p>
            </div>

            {/* Padaria Pão Fresquim */}
            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
                <strong style={{ fontSize: "1rem", color: "#c084fc" }}>Padaria Pão Fresquim (Projeto Interdisciplinar Universitário)</strong>
                <span style={{ fontSize: "0.82rem", color: "#94a3b8" }}>POO 2 • Programação Web 2 • Chatbot Integrado • TypeScript • Docker</span>
              </div>
              <p style={{ color: "#cbd5e1", fontSize: "0.9rem", marginTop: "4px" }}>
                Trabalho integrador de Sistemas de Informação unindo modelagem avançada com princípios SOLID (POO 2), aplicação web dinâmica (Web 2) e módulo de Chatbot interativo para simulação e triagem de pedidos.
              </p>
            </div>

            {/* Megalaudo Automação */}
            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
                <strong style={{ fontSize: "1rem", color: "#ffffff" }}>Megalaudo: Automação do Processo de Montagem de Laudos com Filas</strong>
                <span style={{ fontSize: "0.82rem", color: "#94a3b8" }}>Python • Selenium • Filas Assíncronas • Tkinter • ReportLab</span>
              </div>
              <p style={{ color: "#cbd5e1", fontSize: "0.9rem", marginTop: "4px" }}>
                Automação do fluxo de coleta e montagem de laudos de vistoria veicular integrado a portais de fiscalização. Esteira com melhorias recentes de filas assíncronas permitindo emissão e geração de PDFs em apenas 2 a 3 minutos por laudo pelo sistema.
              </p>
            </div>
          </section>

          {/* Formação */}
          <section style={{ marginBottom: "28px" }}>
            <div className="resume-section-title" style={{ fontSize: "0.85rem", fontWeight: 800, color: "#38bdf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px", borderBottom: "1px solid #222d42", paddingBottom: "4px" }}>
              FORMAÇÃO ACADÊMICA
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <strong style={{ color: "#ffffff" }}>Bacharelado em Sistemas de Informação</strong>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#38bdf8", fontFamily: "var(--font-mono)" }}>7º Período em andamento</span>
            </div>
            <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
              Centro Universitário Anhanguera (Uberlândia/MG) / 2022 a 2026
            </div>
          </section>

          {/* Habilidades Técnicas */}
          <section>
            <div className="resume-section-title" style={{ fontSize: "0.85rem", fontWeight: 800, color: "#38bdf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px", borderBottom: "1px solid #222d42", paddingBottom: "4px" }}>
              HABILIDADES TÉCNICAS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.9rem", color: "#cbd5e1" }}>
              <div>
                <strong style={{ color: "#ffffff" }}>Linguagens e Frameworks:</strong> Go (Golang), TypeScript, React 19, Next.js 16, Node.js, Python, React Native (Expo).
              </div>
              <div>
                <strong style={{ color: "#ffffff" }}>Arquitetura e Mensageria:</strong> GraphQL (Apollo Server/Client), RabbitMQ (AMQP), Microsserviços, REST APIs.
              </div>
              <div>
                <strong style={{ color: "#ffffff" }}>Banco de Dados e Infra:</strong> PostgreSQL (ACID), Redis, Docker, Docker Compose, Git.
              </div>
              <div>
                <strong style={{ color: "#ffffff" }}>Automação e Processos:</strong> Python, Filas Assíncronas, Selenium, Geração de PDFs (ReportLab), Chatbots.
              </div>
              <div>
                <strong style={{ color: "#ffffff" }}>Idiomas:</strong> Português (Nativo), Inglês (Intermediário) • <strong>Idade:</strong> 22 anos • <strong>CNH:</strong> AB
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
