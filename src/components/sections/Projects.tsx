import { useGsapEffect } from "../../hooks/useGsapEffect";
import { gsap } from "../../lib/gsap";
import { projects } from "../../lib/content";
import { TiltCard } from "../ui/TiltCard";
import styles from "./Projects.module.css";

export function Projects() {
  const scopeRef = useGsapEffect<HTMLDivElement>((_ctx, el) => {
    const rows = el.querySelectorAll(".project-row");
    rows.forEach((row) => {
      gsap.from(row.querySelector(".project-media"), {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: row, start: "top 78%" },
      });
      gsap.from(row.querySelectorAll(".project-detail"), {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: row, start: "top 72%" },
      });
    });
  }, []);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <p className={`eyebrow ${styles.eyebrow}`}>Selected Work</p>
        <h2 className={styles.heading}>Featured Projects.</h2>
      </div>

      <div ref={scopeRef} className={styles.list}>
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`project-row ${styles.row} ${
              index % 2 === 1 ? styles.rowReverse : ""
            }`}
          >
            <div className={`project-media ${styles.media}`}>
              <TiltCard className={styles.tilt}>
                <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
              </TiltCard>
            </div>

            <div className={styles.detailCol}>
              <div className={`project-detail ${styles.metaRow}`}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.period}>{project.period}</span>
              </div>
              <h3 className={`project-detail ${styles.name}`}>{project.name}</h3>
              <p className={`project-detail ${styles.description}`}>
                {project.description}
              </p>
              <ul className={`project-detail ${styles.tags}`}>
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className={`project-detail ${styles.links}`}>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.link}>
                    Live Demo ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.link}>
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
