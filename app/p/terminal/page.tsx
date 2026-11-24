"use client";

import { useState } from "react";
import Link from "next/link";
import { PrototypeBar } from "@/components/prototype-bar";
import { personalInfo, projects, experiences } from "@/lib/site-data";

export default function TerminalPrototypePage() {
  const [activeCommand, setActiveCommand] = useState<string>("projects");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="term-page">
      <PrototypeBar />

      <div className="term-window">
        {/* Window Topbar */}
        <div className="term-window-topbar">
          <div className="term-dots">
            <span className="tdot red" />
            <span className="tdot yellow" />
            <span className="tdot green" />
          </div>
          <div className="term-window-title">luiz@archlinux: ~/portfolio — bash — 80x24</div>
          <div className="term-window-actions">
            <Link href="/" className="term-link-plain">
              [sair do terminal]
            </Link>
          </div>
        </div>

        {/* Tmux Statusline */}
        <div className="term-tmux-bar">
          <span className="tmux-mode">NORMAL</span>
          <span className="tmux-path">~/luizapenas (main*)</span>
          <span className="tmux-tech">Go 1.23 • RabbitMQ • Next.js • PostgreSQL</span>
          <span className="tmux-clock">100% ACID</span>
        </div>

        {/* Terminal Body */}
        <div className="term-body">
          {/* ASCII Banner */}
          <pre className="term-ascii">
{` _     _   _ ___ _____   _____ _____ _     ___ ____  _____ 
| |   | | | |_ _|__  /  |  ___| ____| |   |_ _|  _ \| ____|
| |   | | | || |  / /   | |_  |  _| | |    | || |_) |  _|  
| |___| |_| || | / /_   |  _| | |___| |___ | ||  __/| |___ 
|_____|\___/|___/____|  |_|   |_____|_____|___|_|   |_____|`}
          </pre>

          <div className="term-intro-block">
            <span className="term-prompt">luiz@dev:~$</span> <span className="term-cmd">whoami</span>
            <p className="term-output">
              Luiz Felipe dos Santos • 22 anos • Uberlândia/MG<br />
              Desenvolvedor Full-Stack focado em microsserviços em <strong>Go</strong>,{" "}
              <strong>GraphQL</strong>, <strong>RabbitMQ</strong>, <strong>Next.js 16</strong> e{" "}
              <strong>PostgreSQL</strong>.<br />
              Ex-Sócio Proprietário e Gerente Geral (ECV) unindo visão executiva e engenharia real.
            </p>
          </div>

          {/* Interactive Navigation Commands */}
          <div className="term-nav-commands">
            <span className="term-nav-label">COMANDOS DISPONÍVEIS (CLIQUE PARA EXECUTAR):</span>
            <div className="term-cmd-buttons">
              <button
                className={`term-btn ${activeCommand === "projects" ? "active" : ""}`}
                onClick={() => setActiveCommand("projects")}
                type="button"
              >
                $ ls -la ./projetos
              </button>
              <button
                className={`term-btn ${activeCommand === "stack" ? "active" : ""}`}
                onClick={() => setActiveCommand("stack")}
                type="button"
              >
                $ cat stack.json
              </button>
              <button
                className={`term-btn ${activeCommand === "history" ? "active" : ""}`}
                onClick={() => setActiveCommand("history")}
                type="button"
              >
                $ git log --oneline --experience
              </button>
              <button
                className={`term-btn ${activeCommand === "contact" ? "active" : ""}`}
                onClick={() => setActiveCommand("contact")}
                type="button"
              >
                $ ./contact.sh
              </button>
            </div>
          </div>

          <hr className="term-divider" />

          {/* Dynamic Command Outputs */}
          {activeCommand === "projects" && (
            <div className="term-command-view">
              <div className="term-cli-line">
                <span className="term-prompt">luiz@dev:~$</span>{" "}
                <span className="term-cmd">ls -la ./projetos --verbose</span>
              </div>

              <div className="term-projects-grid">
                {projects.map((p, i) => (
                  <div key={p.id} className="term-project-block">
                    <div className="term-block-head">
                      <span className="term-block-idx">[0{i + 1}]</span>
                      <strong>{p.title}</strong>
                      <span className="term-pill-tech">{p.category}</span>
                    </div>

                    <p className="term-block-desc">{p.description}</p>

                    <div className="term-block-stack">
                      <strong>STACK:</strong> {p.stack.join(" • ")}
                    </div>

                    {p.highlights && (
                      <ul className="term-block-list">
                        {p.highlights.map((h, idx) => (
                          <li key={idx}>▸ {h}</li>
                        ))}
                      </ul>
                    )}

                    {p.githubUrl && (
                      <div style={{ marginTop: "10px" }}>
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="term-link-action"
                        >
                          → git clone {p.githubUrl}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCommand === "stack" && (
            <div className="term-command-view">
              <div className="term-cli-line">
                <span className="term-prompt">luiz@dev:~$</span>{" "}
                <span className="term-cmd">cat architecture_stack.json | jq .</span>
              </div>
              <pre className="term-code-block">
{`{
  "backend": {
    "primary": "Go (Golang)",
    "apis": ["GraphQL", "Apollo Server", "REST"],
    "concurrency": "Goroutines, Channels, Context Cancellation",
    "messaging": "RabbitMQ (AMQP) for async event-driven tasks"
  },
  "frontend": {
    "frameworks": ["Next.js 16 (App Router)", "React 19", "TypeScript"],
    "mobile": ["React Native", "Expo"],
    "data_fetching": "Apollo Client with normalized cache"
  },
  "persistence": {
    "relational": "PostgreSQL (ACID, B-Tree indexes, multi-unit schemas)",
    "cache": "Redis",
    "containers": "Docker & Docker Compose"
  },
  "automation": {
    "computer_vision": "Python, OpenCV (Adaptive filters, binarization)",
    "ocr": "Tesseract OCR (license plate & vehicle chassis reading)",
    "web": "Selenium & headless automation"
  }
}`}
              </pre>
            </div>
          )}

          {activeCommand === "history" && (
            <div className="term-command-view">
              <div className="term-cli-line">
                <span className="term-prompt">luiz@dev:~$</span>{" "}
                <span className="term-cmd">git log --all --graph --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset)'</span>
              </div>

              <div className="term-git-feed">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="term-git-entry">
                    <div className="term-git-hash">
                      commit {idx === 0 ? "8f9a2c1" : idx === 1 ? "4e7b1d9" : "1c3a8f4"} (HEAD)
                    </div>
                    <div className="term-git-author">
                      Author: Luiz Felipe &lt;luizz.felipe.santos17@gmail.com&gt;
                    </div>
                    <div className="term-git-date">Date: {exp.period}</div>
                    <div className="term-git-msg">
                      <strong>{exp.role}</strong> @ {exp.company}
                    </div>
                    <p style={{ margin: "8px 0", color: "#94a3b8" }}>{exp.summary}</p>
                    <ul className="term-block-list">
                      {exp.achievements.map((item, i) => (
                        <li key={i}>+ {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCommand === "contact" && (
            <div className="term-command-view">
              <div className="term-cli-line">
                <span className="term-prompt">luiz@dev:~$</span>{" "}
                <span className="term-cmd">./contact.sh --execute</span>
              </div>

              <div className="term-contact-box">
                <p style={{ color: "#4ade80", marginBottom: "16px" }}>
                  [OK] CANAIS DE CONTATO ESTABELECIDOS:
                </p>

                <div className="term-contact-grid">
                  <div className="term-contact-item">
                    <span className="term-ckey">WHATSAPP:</span>
                    <a
                      href={personalInfo.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="term-cval"
                    >
                      (34) 99161-4690 [abrir chat direto] ↗
                    </a>
                  </div>

                  <div className="term-contact-item">
                    <span className="term-ckey">EMAIL:</span>
                    <span className="term-cval">
                      {personalInfo.email}
                      <button onClick={handleCopy} className="term-mini-btn" type="button">
                        {copied ? "[Copiado!]" : "[Copiar]"}
                      </button>
                    </span>
                  </div>

                  <div className="term-contact-item">
                    <span className="term-ckey">LINKEDIN:</span>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="term-cval"
                    >
                      linkedin.com/in/luiz-felipe-santos-95490b208 ↗
                    </a>
                  </div>

                  <div className="term-contact-item">
                    <span className="term-ckey">GITHUB:</span>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="term-cval"
                    >
                      github.com/LuizApenas ↗
                    </a>
                  </div>

                  <div className="term-contact-item">
                    <span className="term-ckey">CURRÍCULO:</span>
                    <Link href="/curriculo" className="term-cval">
                      /curriculo [abrir para imprimir PDF] ↗
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div style={{ marginTop: "32px", fontSize: "0.85rem", color: "#64748b" }}>
            <span className="term-prompt">luiz@dev:~$</span> <span className="term-cursor">█</span>
          </div>
        </div>
      </div>
    </div>
  );
}
