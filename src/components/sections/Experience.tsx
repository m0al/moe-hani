import { useGsapEffect } from "../../hooks/useGsapEffect";
import { gsap } from "../../lib/gsap";
import { courses, timeline } from "../../lib/content";
import styles from "./Experience.module.css";

export function Experience() {
  const scopeRef = useGsapEffect<HTMLDivElement>((_ctx, el) => {
    gsap.from(el.querySelectorAll(".timeline-item"), {
      x: -24,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: { trigger: el, start: "top 75%" },
    });

    gsap.fromTo(
      el.querySelector(".timeline-progress"),
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    gsap.from(el.querySelectorAll(".course-chip"), {
      y: 16,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.06,
      scrollTrigger: { trigger: el.querySelector(".courses"), start: "top 85%" },
    });
  }, []);

  return (
    <section id="experience" className={styles.experience}>
      <div className="container" ref={scopeRef}>
        <p className={`eyebrow ${styles.eyebrow}`}>Experience & Education</p>
        <h2 className={styles.heading}>The path so far.</h2>

        <div className={styles.timeline}>
          <div className={styles.track}>
            <div className={`timeline-progress ${styles.progress}`} />
          </div>

          <div className={styles.items}>
            {timeline.map((entry) => (
              <div className={`timeline-item ${styles.item}`} key={entry.id}>
                <span
                  className={`${styles.badge} ${
                    entry.type === "education" ? styles.badgeEdu : styles.badgeWork
                  }`}
                >
                  {entry.type === "education" ? "Education" : "Experience"}
                </span>
                <h3 className={styles.itemTitle}>{entry.title}</h3>
                <p className={styles.itemOrg}>{entry.org}</p>
                <p className={styles.itemPeriod}>{entry.period}</p>
                <p className={styles.itemDesc}>{entry.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`courses ${styles.courses}`}>
          <p className={styles.coursesLabel}>Courses & Certifications</p>
          <ul className={styles.courseList}>
            {courses.map((course) => (
              <li key={course.url} className="course-chip">
                <a href={course.url} target="_blank" rel="noreferrer" className={styles.courseLink}>
                  {course.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
