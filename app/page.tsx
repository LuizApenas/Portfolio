"use client";

import { useState, useRef, type ReactNode, type KeyboardEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal as TerminalIcon,
  Printer,
  ExternalLink,
  ChevronRight,
  Cpu,
  Layers,
  Database,
  Briefcase,
  Bike,
  Sparkles,
  Check,
  Copy,
  MessageCircle,
  FolderGit2,
  X,
  Eye,
} from "lucide-react";
import { personalInfo, projects, experiences, trajectoryMilestones } from "@/lib/site-data";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/icons";
import { CyberCore3D } from "@/components/cyber-core-3d";

const ASCII_BANNER = `
┌──────────────────────────────────────────────────────────────────────────────┐
│  LUIZ FELIPE DOS SANTOS // FULL-STACK DEVELOPER & DISTRIBUTED SYSTEMS        │
│  Microsserviços em Go • GraphQL • RabbitMQ • Next.js 16 • PostgreSQL • Docker │
└──────────────────────────────────────────────────────────────────────────────┘
`;

type ActiveDisplayType = "project" | "help" | "trajetoria" | "curriculo" | "contato" | "custom";

interface ActiveDisplayState {
  type: ActiveDisplayType;
  projectId?: string;
  commandText: string;
  customOutput?: ReactNode;
}

export default function VitrineTerminalPage() {
  const [filter, setFilter] = useState<string>("todos");
  const [theme, setTheme] = useState<"cyan" | "green" | "amber">("cyan");
  const [copied, setCopied] = useState(false);

  // Active display in inspector (Clean single-screen buffer — NO endless stacking!)
  const [activeDisplay, setActiveDisplay] = useState<ActiveDisplayState>({
    type: "project",
    projectId: "koris",
    commandText: "koris",
  });

  // Terminal input state
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  const scrollToProject = (projectId: string) => {
    const el = document.getElementById(`proj-${projectId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.remove("pulse-target");
      void el.offsetWidth; // trigger reflow
      el.classList.add("pulse-target");
      setTimeout(() => el.classList.remove("pulse-target"), 2000);
    }
  };

  const executeCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    setCommandHistory((prev) => [...prev, raw]);
    setHistoryIdx(-1);

    const parts = raw.toLowerCase().split(" ");
    const primary = parts[0];

    switch (primary) {
      case "help":
      case "comandos":
      case "?":
        setActiveDisplay({
          type: "help",
          commandText: raw,
        });
        break;

      case "koris":
        setActiveDisplay({
          type: "project",
          projectId: "koris",
          commandText: raw,
        });
        break;

      case "documentos":
      case "laudos":
        setActiveDisplay({
          type: "project",
          projectId: "sistema-documentos",
          commandText: raw,
        });
        break;

      case "padaria":
      case "pao-fresquim":
        setActiveDisplay({
          type: "project",
          projectId: "padaria-pao-fresquim",
          commandText: raw,
        });
        break;

      case "megalaudo":
      case "automacao":
        setActiveDisplay({
          type: "project",
          projectId: "megalaudo-automacao",
          commandText: raw,
        });
        break;

      case "financas":
      case "financas-casal":
        setActiveDisplay({
          type: "project",
          projectId: "financas-casal",
          commandText: raw,
        });
        break;

      case "trajetoria":
      case "origens":
      case "historia":
        setActiveDisplay({
          type: "trajetoria",
          commandText: raw,
        });
        break;

      case "curriculo":
      case "cv":
        setActiveDisplay({
          type: "curriculo",
          commandText: raw,
        });
        break;

      case "contato":
      case "email":
        setActiveDisplay({
          type: "contato",
          commandText: raw,
        });
        break;

      case "clear":
      case "cls":
        setActiveDisplay({
          type: "project",
          projectId: "koris",
          commandText: "koris",
        });
        setInputVal("");
        return;

      default:
        setActiveDisplay({
          type: "custom",
          commandText: raw,
          customOutput: (
            <div style={{ color: "#ef4444", padding: "10px 0" }}>
              bash: {primary}: comando não encontrado. Digite <code style={{ color: "var(--term-accent)", fontWeight: 700 }}>help</code> ou clique nos atalhos acima.
            </div>
          ),
        });
    }

    setInputVal("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIdx < commandHistory.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal("");
      }
    }
  };

  // Filtered projects for the Vitrine gallery
  const filteredProjects = projects.filter((p) => {
    if (filter === "todos") return true;
    if (filter === "producao") return p.category.includes("Produção");
    if (filter === "micro") return p.stack.includes("Go (Golang)") || p.stack.includes("GraphQL");
    if (filter === "automacao") return p.id.includes("automacao") || p.stack.includes("Python");
    if (filter === "academico") return p.category.includes("Acadêmico") || p.id.includes("padaria");
    return true;
  });

  const activeProjectData = activeDisplay.projectId
    ? projects.find((p) => p.id === activeDisplay.projectId)
    : null;

  return (
    <div className={`cli-terminal-page theme-${theme}`}>
      {/* Top Navbar */}
      <header className="cli-system-nav">
        <div className="cli-nav-left">
          <TerminalIcon size={16} className="cli-icon-main" />
          <span className="cli-nav-user">luiz@koris-engine</span>
          <span className="cli-nav-sep">:</span>
          <span className="cli-nav-path">~/portfolio</span>
          <span className="cli-branch">(vitrine-3d)</span>
        </div>

        <div className="cli-nav-right">
          <nav style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            <a href="#vitrine-section" className="cli-nav-link" style={{ color: "var(--term-accent)", fontWeight: 700 }}>
              ✦ Vitrine de Projetos
            </a>
            <a href="#trajetoria-section" className="cli-nav-link">
              ◈ Trajetória & Origens
            </a>
            <a href="#terminal-section" className="cli-nav-link">
              &gt;_ Terminal Interativo
            </a>
            <Link href="/curriculo" className="cli-top-btn">
              <Printer size={13} />
              <span>Currículo PDF</span>
            </Link>
          </nav>

          <div className="cli-theme-toggles">
            <button
              onClick={() => setTheme("cyan")}
              className={`cli-theme-dot c-cyn ${theme === "cyan" ? "active" : ""}`}
              title="Tema Cyan"
              type="button"
            />
            <button
              onClick={() => setTheme("green")}
              className={`cli-theme-dot c-grn ${theme === "green" ? "active" : ""}`}
              title="Tema Matrix Green"
              type="button"
            />
            <button
              onClick={() => setTheme("amber")}
              className={`cli-theme-dot c-ylw ${theme === "amber" ? "active" : ""}`}
              title="Tema Amber Fosfórico"
              type="button"
            />
          </div>
        </div>
      </header>

      {/* Main Terminal Shell Window */}
      <main className="cli-terminal-window">
        {/* Tmux Statusline */}
        <div className="cli-tmux-bar">
          <span className="cli-tmux-pill">VITRINE ATIVA 3D</span>
          <span className="cli-tmux-item">Go 1.23.4</span>
          <span className="cli-tmux-item">RabbitMQ: Online</span>
          <span className="cli-tmux-item">PostgreSQL: ACID</span>
          <span className="cli-tmux-item">KORIS: Domínio Próprio</span>
          <span className="cli-tmux-item">Laudos: Em Produção</span>
          <span className="cli-tmux-clock">Uberlândia/MG</span>
        </div>

        {/* Screen */}
        <div className="cli-screen">
          {/* Header Banner */}
          <pre className="cli-ascii-banner">{ASCII_BANNER}</pre>

          {/* ==============================================================
              HERO SPLIT: NEOFETCH PROFILE (LEFT) + 3D CYBER CORE (RIGHT)
             ============================================================== */}
          <div className="vitrine-hero-split">
            {/* Left: Neofetch Profile */}
            <div className="cli-neofetch-grid" style={{ padding: "4px 0" }}>
              <div className="cli-neofetch-avatar">
                <Image
                  src="/images/portrait-clean.jpg"
                  alt="Luiz Felipe dos Santos"
                  width={180}
                  height={220}
                  className="cli-avatar-img"
                  priority
                />
                <div className="cli-avatar-caption">luiz@koris-engine</div>
              </div>

              <div className="cli-neofetch-info">
                <div className="cli-nf-title">
                  <span className="cli-user">luiz</span>@<span className="cli-host">koris-core</span>
                </div>
                <div className="cli-nf-bar">-----------------------------------------</div>

                <div className="cli-nf-row">
                  <span className="cli-nf-k">Desenvolvedor:</span> Luiz Felipe dos Santos (22 anos)
                </div>
                <div className="cli-nf-row">
                  <span className="cli-nf-k">Formação:</span> Sistemas de Informação (7º Período)
                </div>
                <div className="cli-nf-row">
                  <span className="cli-nf-k">Posição Atual:</span> Full-Stack Junior (Go & Next.js)
                </div>
                <div className="cli-nf-row">
                  <span className="cli-nf-k">Projeto Destaque:</span> KORIS (Go + GraphQL + RabbitMQ)
                </div>
                <div className="cli-nf-row">
                  <span className="cli-nf-k">Em Produção:</span> KORIS & Sistema de Documentos
                </div>
                <div className="cli-nf-row">
                  <span className="cli-nf-k">Trajetória Real:</span> Entregador ➔ Sócio/Gestor ECV ➔ Dev Full-Stack
                </div>
                <div className="cli-nf-row">
                  <span className="cli-nf-k">Status:</span>{" "}
                  <span style={{ color: "#34d399", fontWeight: 700 }}>
                    ● Disponível para novas oportunidades
                  </span>
                </div>

                <div className="cli-color-palette">
                  <span className="cpalette c-blk" />
                  <span className="cpalette c-red" />
                  <span className="cpalette c-grn" />
                  <span className="cpalette c-ylw" />
                  <span className="cpalette c-blu" />
                  <span className="cpalette c-mag" />
                  <span className="cpalette c-cyn" />
                  <span className="cpalette c-wht" />
                </div>

                <div style={{ display: "flex", gap: "8px", marginTop: "14px", flexWrap: "wrap" }}>
                  <a href="#vitrine-section" className="cli-btn-link" style={{ background: "var(--term-accent)", color: "#000", fontWeight: 800 }}>
                    <span>✦ Ver Vitrine Completa</span>
                  </a>
                  <a href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer" className="cli-btn-link">
                    <WhatsAppIcon size={12} />
                    <span>WhatsApp</span>
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="cli-btn-link">
                    <GithubIcon size={12} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive 3D Cyber Core & Architecture Engine (Three.js) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <CyberCore3D
                theme={theme}
                activeSystem={activeDisplay.projectId || activeDisplay.commandText}
              />
              <div style={{ display: "flex", gap: "8px", justifyContent: "space-between", fontSize: "0.72rem", color: "var(--term-muted)", padding: "0 4px" }}>
                <span>◈ Mova o mouse para interagir com o Core 3D</span>
                <span style={{ color: "var(--term-accent)", fontWeight: 700 }}>Interactive WebGL</span>
              </div>
            </div>
          </div>

          {/* ==============================================================
              INSPECTOR RÁPIDO INTERATIVO (SEM EMPILHAMENTO INFINITO!)
             ============================================================== */}
          <div className="cli-quick-panel" style={{ marginTop: "12px", marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
              <span className="cli-quick-label" style={{ margin: 0 }}>
                ATALHOS DE INSPEÇÃO (CLIQUE PARA ALTERNAR O SISTEMA ATIVO):
              </span>
              <span style={{ fontSize: "0.72rem", color: "var(--term-muted)" }}>
                Mostrando: <strong style={{ color: "var(--term-accent)" }}>{activeDisplay.commandText}</strong>
              </span>
            </div>

            <div className="cli-quick-buttons">
              <button
                onClick={() => executeCommand("koris")}
                className={`cli-qbtn ${activeDisplay.projectId === "koris" ? "highlight" : ""}`}
                type="button"
              >
                $ koris (produção)
              </button>
              <button
                onClick={() => executeCommand("documentos")}
                className={`cli-qbtn ${activeDisplay.projectId === "sistema-documentos" ? "highlight" : ""}`}
                type="button"
              >
                $ documentos (laudos)
              </button>
              <button
                onClick={() => executeCommand("padaria")}
                className={`cli-qbtn ${activeDisplay.projectId === "padaria-pao-fresquim" ? "highlight" : ""}`}
                type="button"
              >
                $ padaria (interdisciplinar)
              </button>
              <button
                onClick={() => executeCommand("megalaudo")}
                className={`cli-qbtn ${activeDisplay.projectId === "megalaudo-automacao" ? "highlight" : ""}`}
                type="button"
              >
                $ megalaudo (automação)
              </button>
              <button
                onClick={() => executeCommand("financas")}
                className={`cli-qbtn ${activeDisplay.projectId === "financas-casal" ? "highlight" : ""}`}
                type="button"
              >
                $ financas-casal
              </button>
              <button
                onClick={() => executeCommand("trajetoria")}
                className={`cli-qbtn ${activeDisplay.type === "trajetoria" ? "highlight" : ""}`}
                type="button"
              >
                $ cat trajetoria.txt
              </button>
              <button
                onClick={() => executeCommand("curriculo")}
                className={`cli-qbtn ${activeDisplay.type === "curriculo" ? "highlight" : ""}`}
                type="button"
              >
                $ cat cv.pdf
              </button>
              <button
                onClick={() => executeCommand("contato")}
                className={`cli-qbtn ${activeDisplay.type === "contato" ? "highlight" : ""}`}
                type="button"
              >
                $ ./contato.sh
              </button>
            </div>

            {/* Clean Single-Screen Inspector Panel (AnimatePresence / Motion) */}
            <AnimatePresence mode="wait">
              {activeDisplay.type === "project" && activeProjectData && (
                <motion.div
                  key={activeProjectData.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="cli-inspector-panel"
                >
                  <div className="cli-inspector-header">
                    <div className="cli-inspector-title-wrap">
                      <span className="cli-tag-live">{activeProjectData.statusBadge || activeProjectData.category}</span>
                      <h3 className="cli-inspector-title">{activeProjectData.title}</h3>
                    </div>

                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <span className="cli-inspector-prompt">
                        <span>luiz@koris-engine</span>:~$ inspect {activeProjectData.id}
                      </span>
                    </div>
                  </div>

                  <p className="cli-inspector-desc">{activeProjectData.description}</p>

                  <div className="cli-inspector-grid">
                    <div className="cli-inspector-box">
                      <div className="cli-inspector-box-title">TECNOLOGIAS & STACK:</div>
                      <div style={{ color: "var(--term-accent)", fontSize: "0.82rem", fontWeight: 600 }}>
                        {activeProjectData.stack.join(" • ")}
                      </div>
                    </div>

                    {activeProjectData.architecture && (
                      <div className="cli-inspector-box">
                        <div className="cli-inspector-box-title">FLUXO DE ARQUITETURA:</div>
                        <div style={{ color: "#34d399", fontSize: "0.78rem", fontFamily: "var(--term-font)" }}>
                          {activeProjectData.architecture[0]}
                        </div>
                      </div>
                    )}
                  </div>

                  <ul className="vitrine-bullets-list">
                    {activeProjectData.highlights.map((h, i) => (
                      <li key={i}>▸ {h}</li>
                    ))}
                  </ul>

                  <div className="cli-inspector-actions">
                    {activeProjectData.githubUrl && (
                      <a
                        href={activeProjectData.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cli-btn-link"
                      >
                        <FolderGit2 size={13} />
                        <span>$ git clone {activeProjectData.githubUrl}</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <button
                      onClick={() => scrollToProject(activeProjectData.id)}
                      className="cli-btn-link"
                      type="button"
                      style={{ background: "var(--term-accent-dim)", borderColor: "var(--term-accent)" }}
                    >
                      <Eye size={13} />
                      <span>✦ Rolar até o Card na Vitrine</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {activeDisplay.type === "trajetoria" && (
                <motion.div
                  key="trajetoria-panel"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="cli-inspector-panel"
                >
                  <div className="cli-inspector-header">
                    <div className="cli-inspector-title-wrap">
                      <span className="cli-tag-live">TRAJETÓRIA REAL</span>
                      <h3 className="cli-inspector-title">Origens: Entregador ➔ Sócio ECV ➔ Dev Full-Stack</h3>
                    </div>
                  </div>
                  <div className="cli-about-block" style={{ border: "none", padding: 0, background: "transparent" }}>
                    <p>
                      <strong>1. Entregas & Trabalho Operacional (2018–2019):</strong> O dinamismo das ruas, senso estrito de urgência e resiliência diária. A base de caráter e disciplina inegociável.
                    </p>
                    <p>
                      <strong>2. Sócio Proprietário & Gerente Geral de ECV (2022–2025):</strong> Gestão real de fluxo de caixa, precificação, equipe e auditorias de órgãos de trânsito. O despertar para o código nasceu da dor do negócio: criei os primeiros softwares e automações com filas em Python para reduzir laudos de 20 para 2 minutos.
                    </p>
                    <p>
                      <strong>3. Engenharia de Software Full-Stack (2025–Presente):</strong> Graduando em Sistemas de Informação (7º período). Desenvolvimento de microsserviços de alta concorrência em Go, mensageria com RabbitMQ, GraphQL e interfaces em Next.js.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeDisplay.type === "curriculo" && (
                <motion.div
                  key="curriculo-panel"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="cli-inspector-panel"
                >
                  <div className="cli-inspector-header">
                    <div className="cli-inspector-title-wrap">
                      <span className="cli-tag-live">CURRÍCULO ATS</span>
                      <h3 className="cli-inspector-title">Luiz Felipe dos Santos — Full-Stack Junior</h3>
                    </div>
                    <Link href="/curriculo" className="cli-btn-link" style={{ background: "var(--term-accent)", color: "#000", fontWeight: 800 }}>
                      <Printer size={13} />
                      <span>Abrir Versão PDF para Impressão</span>
                    </Link>
                  </div>
                  <p style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: "1.6" }}>
                    Especialista em microsserviços com Go, GraphQL, RabbitMQ e Next.js. 7º período de Sistemas de Informação com bagagem comprovada de liderança e gestão financeira.
                  </p>
                </motion.div>
              )}

              {activeDisplay.type === "contato" && (
                <motion.div
                  key="contato-panel"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="cli-inspector-panel"
                >
                  <div className="cli-inspector-header">
                    <div className="cli-inspector-title-wrap">
                      <span className="cli-tag-live">CONTATO DIRETO</span>
                      <h3 className="cli-inspector-title">Canais de Contato com Luiz Felipe</h3>
                    </div>
                  </div>
                  <div className="cli-contact-table">
                    <div className="cli-contact-row">
                      <span className="cli-c-label">E-mail:</span>
                      <span className="cli-c-val">{personalInfo.email}</span>
                      <button onClick={handleCopyEmail} className="cli-mini-btn" type="button">
                        {copied ? "Copiado!" : "Copiar"}
                      </button>
                    </div>
                    <div className="cli-contact-row">
                      <span className="cli-c-label">WhatsApp:</span>
                      <span className="cli-c-val">
                        <a href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer">
                          (34) 99161-4690 (Abrir WhatsApp)
                        </a>
                      </span>
                    </div>
                    <div className="cli-contact-row">
                      <span className="cli-c-label">GitHub:</span>
                      <span className="cli-c-val">
                        <a href={personalInfo.github} target="_blank" rel="noreferrer">
                          github.com/LuizApenas
                        </a>
                      </span>
                    </div>
                    <div className="cli-contact-row">
                      <span className="cli-c-label">LinkedIn:</span>
                      <span className="cli-c-val">
                        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                          linkedin.com/in/luiz-felipe-santos-95490b208
                        </a>
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeDisplay.type === "help" && (
                <motion.div
                  key="help-panel"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="cli-inspector-panel"
                >
                  <div className="cli-inspector-header">
                    <div className="cli-inspector-title-wrap">
                      <span className="cli-tag-live">MANUAL DO SISTEMA</span>
                      <h3 className="cli-inspector-title">Comandos e Atalhos Disponíveis</h3>
                    </div>
                  </div>
                  <div className="cli-help-grid">
                    <div><span className="cli-cmd-name">koris</span> : Plataforma de Gestão de Caixa & Conciliação em Go + RabbitMQ</div>
                    <div><span className="cli-cmd-name">documentos</span> : Sistema de Laudos em PDF em parceria com Cayke Nakazone</div>
                    <div><span className="cli-cmd-name">padaria</span> : Sistema interdisciplinar Pão Fresquim (POO 2 + Web 2 + Bot)</div>
                    <div><span className="cli-cmd-name">megalaudo</span> : Automação com Python e filas assíncronas (2-3 min por laudo)</div>
                    <div><span className="cli-cmd-name">trajetoria</span> : Linha do tempo: Entregador ➔ Sócio ECV ➔ Dev Full-Stack</div>
                    <div><span className="cli-cmd-name">curriculo</span> : Resumo de qualificações para recrutadores e ATS</div>
                    <div><span className="cli-cmd-name">contato</span> : E-mail, WhatsApp, LinkedIn e GitHub direto</div>
                  </div>
                </motion.div>
              )}

              {activeDisplay.type === "custom" && activeDisplay.customOutput && (
                <motion.div
                  key="custom-panel"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="cli-inspector-panel"
                >
                  {activeDisplay.customOutput}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Interactive CLI Input Field */}
          <div className="cli-active-prompt" onClick={handleFocusInput}>
            <span className="cli-prompt-user">luiz@koris-engine</span>
            <span className="cli-prompt-symbol">:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="cli-input-field"
              placeholder="Digite um comando (ex: koris, documentos, padaria, megalaudo, trajetoria)..."
              spellCheck={false}
              autoComplete="off"
            />
          </div>

          <hr style={{ border: 0, borderTop: "2px solid var(--term-border)", margin: "40px 0 32px" }} />

          {/* ==============================================================
              A GRANDE VITRINE DE PROJETOS (CLEAN ARCHITECTURE CARDS)
             ============================================================== */}
          <section id="vitrine-section" className="vitrine-showcase-section">
            <div className="vitrine-section-head">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="vitrine-badge-live">VITRINE OFICIAL</span>
                <h2 className="vitrine-title">Vitrine de Projetos & Engenharia</h2>
              </div>
              <span className="vitrine-counter">{projects.length} PROJETOS CATALOGADOS</span>
            </div>

            <p className="vitrine-subtitle">
              Sistemas reais em produção, microsserviços concorrentes em Go, mensageria via RabbitMQ e projetos interdisciplinares.
            </p>

            {/* Filter buttons */}
            <div className="vitrine-filter-bar">
              <button
                onClick={() => setFilter("todos")}
                className={`vitrine-filter-btn ${filter === "todos" ? "active" : ""}`}
                type="button"
              >
                Todos os Projetos ({projects.length})
              </button>
              <button
                onClick={() => setFilter("producao")}
                className={`vitrine-filter-btn ${filter === "producao" ? "active" : ""}`}
                type="button"
              >
                Em Produção (2)
              </button>
              <button
                onClick={() => setFilter("micro")}
                className={`vitrine-filter-btn ${filter === "micro" ? "active" : ""}`}
                type="button"
              >
                Microsserviços & Go
              </button>
              <button
                onClick={() => setFilter("automacao")}
                className={`vitrine-filter-btn ${filter === "automacao" ? "active" : ""}`}
                type="button"
              >
                Automação & Processos
              </button>
              <button
                onClick={() => setFilter("academico")}
                className={`vitrine-filter-btn ${filter === "academico" ? "active" : ""}`}
                type="button"
              >
                Acadêmico Interdisciplinar
              </button>
            </div>

            {/* Vitrine Cards Grid (Clean, Architecture & Code Driven — Zero Noisy Images!) */}
            <div className="vitrine-cards-grid">
              {filteredProjects.map((p) => {
                const isHighlight = p.id === "koris";

                return (
                  <motion.article
                    key={p.id}
                    id={`proj-${p.id}`}
                    whileHover={{ y: -4, transition: { duration: 0.16 } }}
                    className={`vitrine-card ${isHighlight ? "vitrine-card-highlight" : ""}`}
                  >
                    {/* Simulated window topbar */}
                    <div className="vitrine-card-topbar">
                      <div className="vitrine-topbar-dots">
                        <span className="v-dot red" />
                        <span className="v-dot ylw" />
                        <span className="v-dot grn" />
                      </div>
                      <span style={{ color: "var(--term-muted)", fontWeight: 700 }}>
                        {p.category.toUpperCase()}
                      </span>
                      <span className="cli-tag">{p.statusBadge || "SHOWCASE"}</span>
                    </div>

                    {/* Card Content - Pure Clean Technical Craft */}
                    <div className="vitrine-card-body">
                      <div className="vitrine-card-meta">
                        <span className="vitrine-mono-tag">{p.stack.slice(0, 4).join(" • ")}</span>
                        {p.collaborator && (
                          <a
                            href={p.collaborator.github}
                            target="_blank"
                            rel="noreferrer"
                            className="vitrine-mono-tag"
                            style={{ color: "#34d399", borderColor: "#22c55e" }}
                          >
                            Parceria: @{p.collaborator.name}
                          </a>
                        )}
                      </div>

                      <h3 className="vitrine-card-h3">{p.title}</h3>
                      <p className="vitrine-card-desc">{p.description}</p>

                      {/* Architecture Flow Box */}
                      {p.architecture && p.architecture.length > 0 && (
                        <div className="vitrine-arch-box">
                          <div className="vitrine-arch-title">FLUXO ARQUITETURAL:</div>
                          <code>{p.architecture.join(" ➔ ")}</code>
                        </div>
                      )}

                      {/* Highlights */}
                      <ul className="vitrine-bullets-list">
                        {p.highlights.map((h, i) => (
                          <li key={i}>▸ {h}</li>
                        ))}
                      </ul>

                      {/* Actions */}
                      <div className="vitrine-card-actions">
                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="cli-btn-link"
                          >
                            <FolderGit2 size={13} />
                            <span>$ git clone {p.githubUrl}</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                        <button
                          onClick={() => {
                            executeCommand(p.id.split("-")[0]);
                            const term = document.getElementById("terminal-section");
                            term?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="cli-btn-link"
                          type="button"
                          style={{ marginLeft: "auto" }}
                        >
                          <span>&gt;_ inspecionar no terminal</span>
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          {/* ==============================================================
              TRAJETÓRIA & ORIGENS (HUMAN GRIT & REAL EXPERIENCE)
             ============================================================== */}
          <section id="trajetoria-section" className="trajetoria-section">
            <div className="vitrine-section-head">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="vitrine-badge-live">TRAJETÓRIA REAL</span>
                <h2 className="vitrine-title">Origens, Empreendedorismo & Engenharia</h2>
              </div>
              <span className="vitrine-counter">SEM ATALHOS • VIVÊNCIA PRÁTICA</span>
            </div>

            <p className="vitrine-subtitle">
              A união de resiliência operacional (trabalho nas entregas), liderança e gestão executiva de empresa real (ECV) com a engenharia técnica de microsserviços.
            </p>

            <div className="trajetoria-timeline-grid">
              {trajectoryMilestones.map((m, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, transition: { duration: 0.16 } }}
                  className="trajetoria-card"
                >
                  <span className="trajetoria-badge">{m.badge}</span>
                  <div className="trajetoria-card-period">{m.period}</div>
                  <h3 className="trajetoria-card-title">{m.role}</h3>
                  <div className="trajetoria-card-tagline">{m.tagline}</div>
                  <p className="trajetoria-card-desc">{m.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="cli-footer">
          <div>
            <span>luiz@koris-engine // Desenvolvido por Luiz Felipe dos Santos</span>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href={personalInfo.github} target="_blank" rel="noreferrer">
              github.com/LuizApenas
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <Link href="/curriculo">Currículo PDF</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
