import { useGsapEffect } from "../../hooks/useGsapEffect";
import { gsap } from "../../lib/gsap";
import { skillCategories } from "../../lib/content";
import styles from "./Skills.module.css";

export function Skills() {
  const scopeRef = useGsapEffect<HTMLDivElement>((_ctx, el) => {
    gsap.from(el.querySelectorAll(".skill-col"), {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: { trigger: el, start: "top 75%" },
    });

    gsap.from(el.querySelectorAll(".skill-chip"), {
      opacity: 0,
      y: 8,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.03,
      scrollTrigger: { trigger: el, start: "top 65%" },
    });
  }, []);

  return (
    <section id="skills" className={styles.skills}>
      <div className="container" ref={scopeRef}>
        <p className="eyebrow">Technical Skills</p>
        <h2 className={styles.heading}>Tools I build with.</h2>

        <div className={styles.grid}>
          {skillCategories.map((cat) => (
            <div className={`skill-col ${styles.column}`} key={cat.category}>
              <h3 className={styles.columnTitle}>{cat.category}</h3>
              <ul className={styles.chipList}>
                {cat.skills.map((skill) => (
                  <li className={`skill-chip ${styles.chip}`} key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
