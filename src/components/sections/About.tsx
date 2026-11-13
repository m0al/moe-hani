import { useGsapEffect } from "../../hooks/useGsapEffect";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { aboutParagraphs, profile } from "../../lib/content";
import styles from "./About.module.css";

export function About() {
  const scopeRef = useGsapEffect<HTMLDivElement>((_ctx, el) => {
    gsap.from(el.querySelectorAll(".about-photo"), {
      clipPath: "inset(100% 0% 0% 0%)",
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
      },
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.from(el.querySelectorAll(".about-line"), {
      y: 24,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: el.querySelector(".about-text"),
        start: "top 78%",
      },
    });

    ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        gsap.set(el.querySelector(".about-photo-inner"), {
          yPercent: (self.progress - 0.5) * 10,
        });
      },
    });
  }, []);

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`} ref={scopeRef}>
        <div className={`about-photo ${styles.photoWrap}`}>
          <div className={`about-photo-inner ${styles.photoInner}`}>
            <img
              src={profile.portraitUrl}
              alt={`Portrait of ${profile.name}`}
              className={styles.photoImg}
              loading="lazy"
            />
          </div>
        </div>

        <div className={`about-text ${styles.text}`}>
          <p className={`eyebrow ${styles.eyebrow}`}>About</p>
          <h2 className={styles.heading}>
            Engineering thoughtful software, with intent.
          </h2>
          <div className={styles.paragraphs}>
            {aboutParagraphs.map((p, i) => (
              <p className={`about-line ${styles.paragraph}`} key={i}>
                {p}
              </p>
            ))}
          </div>
          <div className={styles.meta}>
            <div className="about-line">
              <span className={styles.metaLabel}>Based in</span>
              <span className={styles.metaValue}>{profile.location}</span>
            </div>
            <div className="about-line">
              <span className={styles.metaLabel}>Roots</span>
              <span className={styles.metaValue}>{profile.heritage}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
