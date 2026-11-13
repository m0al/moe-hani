import { useGsapEffect } from "../../hooks/useGsapEffect";
import { gsap } from "../../lib/gsap";
import { profile } from "../../lib/content";
import { Magnetic } from "../ui/Magnetic";
import { SplitText } from "../ui/SplitText";
import { InteractiveGrid } from "../ui/InteractiveGrid";
import styles from "./Hero.module.css";

export function Hero() {
  const scopeRef = useGsapEffect<HTMLDivElement>((_ctx, el) => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.set(el, { opacity: 1 })
      .from(el.querySelectorAll(".hero-eyebrow"), {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
      .from(
        el.querySelectorAll(".split-word"),
        {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.035,
        },
        "-=0.2"
      )
      .from(
        el.querySelectorAll(".hero-desc"),
        { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" },
        "-=0.5"
      )
      .from(
        el.querySelectorAll(".hero-actions"),
        { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" },
        "-=0.5"
      )
      .from(
        el.querySelectorAll(".hero-frame"),
        { scale: 1.08, opacity: 0, duration: 1.1, ease: "power3.out" },
        "-=0.8"
      );

    // Subtle parallax: the visual drifts slower than scroll as the hero exits.
    gsap.to(el.querySelector(".hero-frame"), {
      yPercent: 14,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <InteractiveGrid />
      <div className={styles.glowLine} aria-hidden="true" />
      <div ref={scopeRef} className={`container ${styles.inner}`} style={{ opacity: 0 }}>
        <div className={styles.copy}>
          <p className={`eyebrow hero-eyebrow ${styles.eyebrow}`}>
            Software Engineering • Kuala Lumpur
          </p>
          <h1 className={styles.heading}>
            <SplitText as="span" text="Hi, I'm Mohammed Hani." className={styles.headingLine} />
          </h1>
          <p className={styles.subtitle}>{profile.title}</p>
          <p className={`hero-desc ${styles.description}`}>
            I build digital experiences and software solutions by combining
            engineering, creativity, and problem-solving.
          </p>
          <div className={`hero-actions ${styles.actions}`}>
            <Magnetic>
              <a href="#projects" className={styles.primaryBtn}>
                View My Work
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.cvUrl} className={styles.secondaryBtn} download>
                Download CV
              </a>
            </Magnetic>
            <div className={styles.socials}>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                GitHub
              </a>
              <span className={styles.dot} />
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className={`hero-frame ${styles.visual}`}>
          <div className={styles.visualInner}>
            <img
              src={profile.heroPortraitUrl}
              alt={`Portrait of ${profile.name}`}
              className={styles.visualImg}
            />
          </div>
          <div className={styles.visualCaption}>
            <span className={styles.visualCaptionDot} />
            Available for opportunities
          </div>
        </div>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
