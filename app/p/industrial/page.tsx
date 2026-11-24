"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Copy, Terminal, Cpu, Database, Flame, Shield, Activity, Download } from "lucide-react";
import { useState } from "react";
import { PrototypeBar } from "@/components/prototype-bar";
import { personalInfo } from "@/lib/site-data";

export default function IndustrialPrototypePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="industrial-wrapper">
      <PrototypeBar />

      {/* Blueprint Header */}
      <header className="ind-topbar">
        <div className="ind-container">
          <div className="ind-header-row">
            <div className="ind-coords">
              <span className="ind-blink-sq" />
              <span>SYS.ENG // 18.9186° S, 48.2772° W // UBERLÂNDIA-MG</span>
            </div>
            <div className="ind-meta-tag">
              STATUS: DISPONÍVEL PARA CONTRATAÇÃO & FREELAS
            </div>
          </div>
        </div>
      </header>

      {/* Hero Manifesto */}
      <section className="ind-hero-section">
        <div className="ind-container">
          <div className="ind-hero-grid">
            <div className="ind-hero-main">
              <div className="ind-eyebrow-tag">ARQUITETURA DE SOFTWARE & OPERAÇÃO REAL</div>
              <h1 className="ind-big-title">
                LUIZ FELIPE<br />
                <span className="ind-highlight-text">DOS SANTOS</span>
              </h1>
              <div className="ind-role-badge">
                FULL-STACK DEVELOPER • GO • GRAPHQL • RABBITMQ • NEXT.JS • POSTGRESQL
              </div>

              <p className="ind-lead-text">
                Construo sistemas distribuídos, microsserviços de alto rendimento e automações operacionais. Trago uma bagagem rara na tecnologia: fui <strong>sócio proprietário e gerente geral</strong> de empresa (ECV), gerenciando pessoas, finanças e processos antes de me dedicar integralmente à engenharia de software.
              </p>

              <div className="ind-action-row">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ind-btn ind-btn-primary"
                >
                  <span>Chamar no WhatsApp</span>
                  <ArrowUpRight size={16} />
                </a>
                <Link href="/curriculo" className="ind-btn ind-btn-outline">
                  <Download size={15} />
                  <span>Baixar CV</span>
                </Link>
                <button onClick={handleCopy} className="ind-btn ind-btn-ghost" type="button">
                  {copied ? <Check size={14} color="#facc15" /> : <Copy size={14} />}
                  <span>{copied ? "E-mail Copiado!" : personalInfo.email}</span>
                </button>
              </div>
            </div>

            <div className="ind-hero-side">
              <div className="ind-photo-frame">
                <Image
                  src="/images/coding-cat.jpg"
                  alt="Luiz no setup"
                  width={420}
                  height={320}
                  className="ind-photo-raw"
                />
                <div className="ind-photo-caption">
                  <span>FIG 01. SETUP & MADRUGADAS DE DEPLOY</span>
                </div>
              </div>

              <div className="ind-stat-grid">
                <div className="ind-stat-cell">
                  <span className="ind-stat-k">BACKEND</span>
                  <span className="ind-stat-v">Go + GraphQL</span>
                </div>
                <div className="ind-stat-cell">
                  <span className="ind-stat-k">MENSAGERIA</span>
                  <span className="ind-stat-v">RabbitMQ</span>
                </div>
                <div className="ind-stat-cell">
                  <span className="ind-stat-k">FRONTEND</span>
                  <span className="ind-stat-v">Next.js 16 + React 19</span>
                </div>
                <div className="ind-stat-cell">
                  <span className="ind-stat-k">AUTOMAÇÃO</span>
                  <span className="ind-stat-v">Python + OpenCV OCR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Architecture Diagram */}
      <section className="ind-section ind-section-darker">
        <div className="ind-container">
          <div className="ind-section-head">
            <span className="ind-index-num">[ 01 ]</span>
            <h2>ARQUITETURA DE SISTEMAS // FLUXO OPERACIONAL</h2>
          </div>

          <div className="ind-blueprint-box">
            <div className="ind-blueprint-title">
              SCHEMATIC 01.1 // MULTI-UNIT CASH & TRANSACTION ENGINE (GO + RABBITMQ)
            </div>

            <div className="ind-arch-flow">
              <div className="ind-arch-node">
                <div className="ind-node-head">FRONT-END / CLIENT</div>
                <strong>Next.js 16 (App Router)</strong>
                <p>Apollo Client com cache em memória, tipagem estrita GraphQL e micro front-ends.</p>
              </div>

              <div className="ind-flow-arrow">────── GraphQL ──────▶</div>

              <div className="ind-arch-node ind-node-accent">
                <div className="ind-node-head">CORE ENGINE</div>
                <strong>Go Microservices (Golang)</strong>
                <p>Goroutines concorrentes, regras de negócio e endpoints GraphQL de baixa latência (&lt; 25ms).</p>
              </div>

              <div className="ind-flow-arrow">────── AMQP ──────▶</div>

              <div className="ind-arch-node">
                <div className="ind-node-head">EVENT BROKER</div>
                <strong>RabbitMQ Queues</strong>
                <p>Desacoplamento assíncrono para conciliação contábil, auditoria e notificações.</p>
              </div>
            </div>

            <div className="ind-arch-db-row">
              <div className="ind-db-node">
                <Database size={18} style={{ color: "#facc15" }} />
                <span>STORAGE: PostgreSQL Cluster (Transações ACID, Índices B-Tree, Migrations)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="ind-section">
        <div className="ind-container">
          <div className="ind-section-head">
            <span className="ind-index-num">[ 02 ]</span>
            <h2>DOSSIÊ DE PROJETOS CONSTRUÍDOS</h2>
          </div>

          <div className="ind-project-dossiers">
            {/* Dossier 1 */}
            <article className="ind-dossier-card">
              <div className="ind-dossier-left">
                <div className="ind-dossier-tag">PROJETO 01 // SISTEMA PRINCIPAL</div>
                <h3 className="ind-dossier-title">Sistema de Gestão de Caixa & Operações</h3>
                <div className="ind-dossier-sub">Plataforma Multi-Unidade com Go, GraphQL e RabbitMQ</div>

                <p className="ind-dossier-desc">
                  Desenvolvido para eliminar erros manuais e planilhas em prestadoras de serviços. Centraliza lançamentos de caixas, sangrias, conciliação e fechamento de turno em tempo real para múltiplos pontos de atendimento.
                </p>

                <div className="ind-specs-list">
                  <div className="ind-spec-row">
                    <span className="ind-spec-label">PROBLEMA:</span>
                    <span>Lançamentos divergentes e demora de 48h para conciliação bancária entre unidades.</span>
                  </div>
                  <div className="ind-spec-row">
                    <span className="ind-spec-label">SOLUÇÃO:</span>
                    <span>Backend Go de alto rendimento com mensageria assíncrona RabbitMQ e persistência transacional em PostgreSQL.</span>
                  </div>
                  <div className="ind-spec-row">
                    <span className="ind-spec-label">STACK:</span>
                    <span className="ind-mono-tag">Go • GraphQL • RabbitMQ • Next.js • PostgreSQL • Docker</span>
                  </div>
                </div>

                <div className="ind-dossier-actions">
                  <a
                    href="https://github.com/LuizApenas/sistemagestaocaixa"
                    target="_blank"
                    rel="noreferrer"
                    className="ind-btn ind-btn-primary"
                  >
                    <span>Ver Código no GitHub</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <div className="ind-dossier-right">
                <div className="ind-dossier-imgbox">
                  <Image
                    src="/images/cash-system.png"
                    alt="Interface do Sistema de Caixa"
                    width={560}
                    height={340}
                    className="ind-preview-image"
                  />
                  <div className="ind-img-spec">FIG 02.1 // DASHBOARD OPERACIONAL MULTI-UNIDADE</div>
                </div>
              </div>
            </article>

            {/* Dossier 2 */}
            <article className="ind-dossier-card">
              <div className="ind-dossier-left">
                <div className="ind-dossier-tag">PROJETO 02 // AUTOMAÇÃO & VISÃO COMPUTACIONAL</div>
                <h3 className="ind-dossier-title">Megalaudo: OCR e Automação de Laudos</h3>
                <div className="ind-dossier-sub">Python + OpenCV + Tesseract OCR</div>

                <p className="ind-dossier-desc">
                  Pipeline inteligente desenvolvido para acelerar vistorias automotivas. Identifica caracteres de placas e números de chassi a partir das fotografias da inspeção, valida o padrão Mercosul e preenche formulários oficiais instantaneamente com exportação em PDF.
                </p>

                <div className="ind-specs-list">
                  <div className="ind-spec-row">
                    <span className="ind-spec-label">IMPACTO:</span>
                    <span style={{ color: "#facc15", fontWeight: 700 }}>
                      Tempo por laudo reduzido de ~20 minutos para menos de 2 minutos (-85%).
                    </span>
                  </div>
                  <div className="ind-spec-row">
                    <span className="ind-spec-label">TECNOLOGIAS:</span>
                    <span className="ind-mono-tag">Python • OpenCV • Tesseract OCR • Selenium • ReportLab</span>
                  </div>
                </div>

                <div className="ind-dossier-actions">
                  <a
                    href="https://github.com/LuizApenas/PythonScripts"
                    target="_blank"
                    rel="noreferrer"
                    className="ind-btn ind-btn-outline"
                  >
                    <span>Repositório de Scripts</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <div className="ind-dossier-right">
                <div className="ind-dossier-imgbox">
                  <Image
                    src="/images/automation.png"
                    alt="Automação de Laudos"
                    width={560}
                    height={340}
                    className="ind-preview-image"
                  />
                  <div className="ind-img-spec">FIG 02.2 // PIPELINE DE PROCESSAMENTO E EXTRAÇÃO DE OCR</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Trajectory / Dossier of Experience */}
      <section className="ind-section ind-section-darker">
        <div className="ind-container">
          <div className="ind-section-head">
            <span className="ind-index-num">[ 03 ]</span>
            <h2>HISTÓRICO OPERACIONAL // LINHA DO TEMPO</h2>
          </div>

          <div className="ind-timeline-dossier">
            <div className="ind-time-item">
              <div className="ind-time-aside">
                <span className="ind-time-badge">2025 — ATUAL</span>
                <span className="ind-time-sub">ENGENHARIA</span>
              </div>
              <div className="ind-time-body">
                <h4>Desenvolvedor Full-Stack Junior</h4>
                <div className="ind-time-org">Sistemas Distribuídos & Microsserviços</div>
                <p>
                  Atuação em microsserviços de Go e micro front-ends em Next.js com GraphQL (Apollo Client), RabbitMQ para eventos assíncronos, PostgreSQL e Docker.
                </p>
              </div>
            </div>

            <div className="ind-time-item">
              <div className="ind-time-aside">
                <span className="ind-time-badge">2022 — 2025</span>
                <span className="ind-time-sub">GESTÃO EMPRESARIAL</span>
              </div>
              <div className="ind-time-body">
                <h4>Sócio Proprietário / Gerente Geral</h4>
                <div className="ind-time-org">ECV Uberlândia Ltda.</div>
                <p>
                  Gestão completa de equipe, finanças corporativas, rotinas de inspeção e relacionamento com clientes. Foi aqui que comecei a criar automações em Python para eliminar gargalos manuais na emissão de laudos.
                </p>
              </div>
            </div>

            <div className="ind-time-item">
              <div className="ind-time-aside">
                <span className="ind-time-badge">2019 — 2022</span>
                <span className="ind-time-sub">OPERAÇÃO & RH</span>
              </div>
              <div className="ind-time-body">
                <h4>Coordenador Administrativo / Vistoriador</h4>
                <div className="ind-time-org">Iso Prime Brasil Vistorias Ltda.</div>
                <p>
                  Atendimento, tarefas administrativas, auditoria técnica veicular e treinamento de novos funcionários em processos operacionais padrão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Banner */}
      <footer className="ind-footer">
        <div className="ind-container">
          <div className="ind-footer-inner">
            <div>
              <div className="ind-footer-title">VAMOS TRABALHAR JUNTOS?</div>
              <p className="ind-footer-desc">
                Disponível para contratação, projetos de sistemas distribuídos em Go, modernização de front-end ou automação de processos.
              </p>
            </div>
            <div className="ind-footer-cta">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="ind-btn ind-btn-primary"
              >
                <span>Chamar no WhatsApp</span>
                <ArrowUpRight size={16} />
              </a>
              <Link href="/curriculo" className="ind-btn ind-btn-outline">
                <span>Abrir Currículo</span>
              </Link>
            </div>
          </div>
          <div className="ind-footer-bottom">
            <span>© {new Date().getFullYear()} LUIZ FELIPE DOS SANTOS // UBERLÂNDIA/MG</span>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">GITHUB</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
              <a href={`mailto:${personalInfo.email}`}>EMAIL</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
