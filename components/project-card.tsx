import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  tags?: string[];
  featured?: boolean;
  bullets?: string[];
};

export function ProjectCard({
  title,
  description,
  image,
  tags,
  featured,
  bullets,
}: ProjectCardProps) {
  return (
    <article className={`project-card${featured ? " project-card-featured" : ""}`}>
      {image ? (
        <div className="project-image-wrap">
          <Image
            alt={image.alt}
            className="project-thumb"
            height={320}
            src={image.src}
            width={520}
          />
        </div>
      ) : null}

      {tags?.length ? (
        <div className="project-tag-row">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <h3>{title}</h3>
      <p>{description}</p>

      {bullets?.length ? (
        <ul className="bullet-list">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
