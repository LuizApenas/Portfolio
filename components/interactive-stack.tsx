"use client";

import { useState } from "react";
import { Terminal, Cpu, Database, Code2, Layers } from "lucide-react";

const stackItems = [
  {
    id: "go",
    title: "Go (Golang)",
    category: "Backend & Concorrência",
    icon: Cpu,
    snippet: `// Handler com concorrência e context
func (s *CaixaService) ProcessarTransacao(ctx context.Context, t Transacao) error {
    select {
    case <-ctx.Done():
        return ctx.Err()
    default:
        return s.rabbitMQ.PublicarEvento("transacoes.criadas", t)
    }
}`,
    desc: "Goroutines, canais e baixo consumo de memória. APIs GraphQL tipadas com resolvers ágeis e arquitetura modular orientada a regras de negócio.",
  },
  {
    id: "rabbitmq",
    title: "RabbitMQ & Mensageria",
    category: "Arquitetura Distribuída",
    icon: Layers,
    snippet: `// Mensageria assíncrona desacoplada
Queue: "caixa.fechamento.notificacoes"
Exchange: "eventos.operacionais" (direct)
Durable: true | Ack manual garantindo entrega exata`,
    desc: "Desacoplamento de rotinas pesadas (fechamentos, relatórios contábeis e e-mails) da rota síncrona HTTP.",
  },
  {
    id: "nextjs",
    title: "Next.js 16 & React 19",
    category: "Front-end & SSR",
    icon: Code2,
    snippet: `// App Router + Server Components + Apollo
export default async function DashboardPage() {
  const { data } = await getClient().query({ query: GET_METRICAS_CAIXA });
  return <PainelOperacional metricas={data.metricas} />;
}`,
    desc: "TypeScript com tipagem estrita, Apollo Client para consultas GraphQL em cache, Turbopack e Server-Side Rendering de alta velocidade.",
  },
  {
    id: "python",
    title: "Python, OpenCV & OCR",
    category: "Visão Computacional & Automação",
    icon: Terminal,
    snippet: `# Pré-processamento e extração de caracteres
img_gray = cv2.cvtColor(crop_chassi, cv2.COLOR_BGR2GRAY)
thresh = cv2.adaptiveThreshold(img_gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, ...)
texto_chassi = pytesseract.image_to_string(thresh, config='--psm 7')`,
    desc: "Pipelines que leem fotos de inspeção veicular, localizam numerações de placas e chassi e exportam laudos em PDF automaticamente.",
  },
  {
    id: "postgres",
    title: "PostgreSQL & Docker",
    category: "Dados & Infra",
    icon: Database,
    snippet: `-- Índices e auditoria de transações
CREATE INDEX idx_transacoes_unidade_data 
ON transacoes (unidade_id, criado_em DESC);
-- Transações ACID completas para fechamento de caixa`,
    desc: "Modelagem relacional sólida, queries indexadas, transações ACID para segurança financeira e ambientes reproduzíveis com Docker Compose.",
  },
];

export function InteractiveStack() {
  const [activeTab, setActiveTab] = useState(stackItems[0].id);
  const current = stackItems.find((s) => s.id === activeTab) || stackItems[0];
  const Icon = current.icon;

  return (
    <div className="interactive-stack-card">
      <div className="stack-tabs-header">
        <span className="stack-label">Stack Interativa</span>
        <div className="stack-tabs-row">
          {stackItems.map((item) => (
            <button
              key={item.id}
              className={`stack-tab-btn ${activeTab === item.id ? "active" : ""}`}
              onClick={() => setActiveTab(item.id)}
              type="button"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      <div className="stack-content-panel">
        <div className="stack-info-head">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className="stack-icon-pill">
              <Icon size={18} />
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: "1.05rem" }}>{current.title}</h4>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {current.category}
              </span>
            </div>
          </div>
        </div>

        <p style={{ margin: "14px 0 16px", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
          {current.desc}
        </p>

        <div className="terminal-code-box">
          <div className="terminal-topbar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="terminal-filename">{current.id}.snippet</span>
          </div>
          <pre className="terminal-code">
            <code>{current.snippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
