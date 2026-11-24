import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, MapPin, Briefcase, Zap } from "lucide-react";

export function BentoGrid() {
  return (
    <div className="bento-container">
      {/* Bento Item 1: Main Project Feature (Wide) */}
      <div className="bento-card bento-wide">
        <div className="bento-card-inner">
          <div className="bento-card-copy">
            <div className="bento-tag-row">
              <span className="badge-live">Sistema em Uso</span>
              <span className="tag-mono">Go • RabbitMQ • Next.js</span>
            </div>
            <h3 className="bento-title">Sistema de Gestão de Caixa & Operações</h3>
            <p className="bento-text">
              Plataforma multi-unidade desenvolvida para controle financeiro, fechamento de turno
              e conciliação bancária em tempo real com microsserviços em Go e interface em Next.js.
            </p>
            <div className="bento-actions">
              <a
                href="https://github.com/LuizApenas/sistemagestaocaixa"
                target="_blank"
                rel="noreferrer"
                className="btn-bento"
              >
                <span>Ver no GitHub</span>
                <ArrowUpRight size={15} />
              </a>
              <Link href="/projetos" className="btn-bento-subtle">
                Ver detalhes
              </Link>
            </div>
          </div>

          <div className="bento-image-wrapper">
            <Image
              src="/images/cash-system.png"
              alt="Sistema de Gestão de Caixa"
              width={520}
              height={320}
              className="bento-img"
            />
          </div>
        </div>
      </div>

      {/* Bento Item 2: Real Life / Behind the Scenes (Cat Photo) */}
      <div className="bento-card bento-half">
        <div className="bento-photo-frame">
          <Image
            src="/images/coding-cat.jpg"
            alt="Luiz programando com o gato"
            width={400}
            height={280}
            className="bento-photo"
          />
          <div className="bento-photo-overlay">
            <span className="bento-photo-tag">Bastidores</span>
            <div className="bento-photo-caption">
              Companhia oficial nos deploys e madrugadas estudando concorrência em Go.
            </div>
          </div>
        </div>
      </div>

      {/* Bento Item 3: OCR & Visão Computacional */}
      <div className="bento-card bento-half">
        <div className="bento-card-content">
          <div className="bento-tag-row">
            <span className="badge-highlight">Visão Computacional</span>
            <span className="tag-mono">Python • OpenCV • OCR</span>
          </div>

          <h3 className="bento-title">Automação de Laudos & OCR</h3>
          <p className="bento-text">
            Extração automática de placas e decalques de chassi a partir de fotos de veículos,
            preenchendo laudos e gerando relatórios em PDF automaticamente.
          </p>

          <div className="bento-stat-banner">
            <div className="bento-stat-num">De 20 min → 2 min</div>
            <div className="bento-stat-lbl">Tempo de emissão por veículo</div>
          </div>

          <div style={{ marginTop: "16px" }}>
            <a
              href="https://github.com/LuizApenas/PythonScripts"
              target="_blank"
              rel="noreferrer"
              className="btn-bento-subtle"
            >
              <span>Ver Scripts no GitHub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bento Item 4: Real Business Background */}
      <div className="bento-card bento-half">
        <div className="bento-photo-frame">
          <Image
            src="/images/company.jpg"
            alt="Luiz na empresa"
            width={400}
            height={280}
            className="bento-photo"
          />
          <div className="bento-photo-overlay">
            <span className="bento-photo-tag">Vivência Real</span>
            <div className="bento-photo-caption">
              3 anos como sócio e gerente geral de uma ECV antes de migrar integralmente para software.
            </div>
          </div>
        </div>
      </div>

      {/* Bento Item 5: Status / Agora */}
      <div className="bento-card bento-half bento-highlight-card">
        <div className="bento-card-content">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <span className="pulse-dot" />
            <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#34d399" }}>
              Disponível para Oportunidades
            </span>
          </div>

          <h3 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>
            Procurando somar em times de tecnologia
          </h3>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
            Aberto para posições de Desenvolvedor Full-Stack / Backend (Go, Node, React) e projetos
            de automação inteligente.
          </p>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/5534991614690"
              target="_blank"
              rel="noreferrer"
              className="btn-bento"
            >
              Conversar no WhatsApp
            </a>
            <Link href="/curriculo" className="btn-bento-subtle">
              Abrir Currículo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
