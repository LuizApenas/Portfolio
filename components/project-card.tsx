import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { ProjectItem } from "@/lib/site-data";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="project-featured-card">
      <div className="project-featured-body">
        <div>
          <div className="project-meta-row">
            <span className="tag-pill cyan">{project.category}</span>
            {project.featured && <span className="tag-pill emerald">Destaque</span>}
          </div>

          <h3 className="project-title">{project.title}</h3>
          <p className="project-tagline">{project.tagline}</p>
        </div>

        <p className="project-desc">{project.description}</p>

        {project.highlights && (
          <ul className="project-bullets">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="project-bullet-item">
                <CheckCircle2 size={16} className="bullet-check" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="project-stack-wrap">
          {project.stack.map((tech) => (
            <span key={tech} className="tag-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <GithubIcon style={{ width: "15px", height: "15px" }} />
              <span>Ver Código</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              <ExternalLink size={15} />
              <span>Acessar Demo</span>
            </a>
          )}
        </div>
      </div>

      <div className="project-featured-visual">
        {project.image ? (
          <div className="project-image-frame">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={640}
              height={400}
              priority={project.featured}
            />
          </div>
        ) : (
          <div
            style={{
              padding: "40px",
              textAlign: "center",
              color: "var(--ink-muted)",
              background: "rgba(0,0,0,0.2)",
              borderRadius: "12px",
              width: "100%",
            }}
          >
            <code>{project.title}</code>
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <div className="project-metrics-grid">
            {project.metrics.map((m, i) => (
              <div key={i} className="project-metric-box">
                <div className="project-metric-val">{m.value}</div>
                <div className="project-metric-lbl">{m.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
