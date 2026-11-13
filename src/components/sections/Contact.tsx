import { useState, type FormEvent } from "react";
import { useGsapEffect } from "../../hooks/useGsapEffect";
import { gsap } from "../../lib/gsap";
import { profile } from "../../lib/content";
import { Magnetic } from "../ui/Magnetic";
import styles from "./Contact.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const scopeRef = useGsapEffect<HTMLDivElement>((_ctx, el) => {
    gsap.from(el.querySelectorAll(".contact-reveal"), {
      y: 24,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: { trigger: el, start: "top 75%" },
    });
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Mailto fallback keeps the form functional without a backend endpoint.
      const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
      const body = encodeURIComponent(String(data.get("message") ?? ""));
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.inner}`} ref={scopeRef}>
        <div className={styles.left}>
          <p className="eyebrow contact-reveal">Contact</p>
          <h2 className={`contact-reveal ${styles.heading}`}>
            Let's build something worth remembering.
          </h2>
          <p className={`contact-reveal ${styles.description}`}>
            Open to new opportunities, collaborations, and conversations about
            software engineering.
          </p>

          <div className={`contact-reveal ${styles.links}`}>
            <a href={`mailto:${profile.email}`} className={styles.linkRow}>
              <span>Email</span>
              <strong>{profile.email}</strong>
            </a>
            <a href={`mailto:${profile.emailSecondary}`} className={styles.linkRow}>
              <span>Alt. Email</span>
              <strong>{profile.emailSecondary}</strong>
            </a>
            <a href={`tel:${profile.phone}`} className={styles.linkRow}>
              <span>Phone</span>
              <strong>{profile.phone}</strong>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.linkRow}>
              <span>LinkedIn</span>
              <strong>Connect with me</strong>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={styles.linkRow}>
              <span>GitHub</span>
              <strong>View my code</strong>
            </a>
          </div>
        </div>

        <form
          className={`contact-reveal ${styles.form}`}
          onSubmit={handleSubmit}
          aria-label="Contact form"
        >
          <label className={styles.field}>
            <span>Name</span>
            <input type="text" name="name" required autoComplete="name" />
          </label>
          <label className={styles.field}>
            <span>Email</span>
            <input type="email" name="email" required autoComplete="email" />
          </label>
          <label className={styles.field}>
            <span>Message</span>
            <textarea name="message" rows={5} required />
          </label>
          <Magnetic>
            <button type="submit" className={styles.submit} disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>
          </Magnetic>
          {status === "success" && (
            <p className={styles.statusMsg}>
              Your email client should open shortly — thank you for reaching out.
            </p>
          )}
          {status === "error" && (
            <p className={styles.statusMsg}>Something went wrong. Please email me directly.</p>
          )}
        </form>
      </div>
    </section>
  );
}
