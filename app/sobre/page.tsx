import Link from "next/link";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { personalInfo, education } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <SiteShell>
      <section>
        <h1>Sobre mim</h1>

        <div style={{ margin: "24px 0", maxWidth: "260px" }}>
          <Image
            alt="Luiz Felipe"
            height={320}
            src="/images/portrait.jpg"
            style={{ width: "100%", height: "auto", borderRadius: "8px", border: "1px solid var(--border)" }}
            width={260}
          />
        </div>

        <p className="hero-bio">
          Tenho 22 anos, sou de Uberlândia/MG e estou no 7º período de{" "}
          <strong>Bacharelado em Sistemas de Informação</strong>.
        </p>

        <p className="hero-bio">
          Minha formação prática começou na operação de uma empresa: entre 2022 e 2025 fui{" "}
          <strong>sócio proprietário e gerente geral</strong> da ECV Uberlândia Ltda. Lá eu
          lidava todos os dias com equipe, atendimento ao cliente, fluxo de caixa e gargalos
          operacionais.
        </p>

        <p className="hero-bio">
          Para resolver a ineficiência que vivíamos na rotina, comecei a programar automações em{" "}
          <strong>Python</strong> com <strong>OpenCV</strong> e <strong>Tesseract OCR</strong> para
          ler fotos de vistorias e preencher laudos automaticamente. Essa necessidade prática
          me puxou com força para a engenharia de software.
        </p>

        <p className="hero-bio">
          Hoje atuo como <strong>Desenvolvedor Full-Stack</strong>, construindo microsserviços em{" "}
          <strong>Go</strong> com <strong>GraphQL</strong> e mensageria assíncrona via{" "}
          <strong>RabbitMQ</strong>, persistência relacional no <strong>PostgreSQL</strong> e
          interfaces ágeis e tipadas com <strong>Next.js</strong>, <strong>React</strong> e{" "}
          <strong>TypeScript</strong>.
        </p>

        <div style={{ marginTop: "32px", display: "flex", gap: "16px" }}>
          <Link href="/curriculo">Ver currículo completo →</Link>
          <a href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer">
            Chamar no WhatsApp →
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
