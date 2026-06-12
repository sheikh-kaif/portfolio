import { useState } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { PROJECTS } from "../data/portfolioData";

function ProjectCard({ tag, title, desc, stack, link }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="project-card"
      style={{
        ...styles.card,
        borderColor: hovered ? "rgba(79,142,247,0.25)" : "var(--border)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onClick={() => {
        if (link) {
          window.open(link, "_blank");
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="project-accent-line"
        style={{ ...styles.accentLine, opacity: hovered ? 1 : 0 }}
      />
      <span
        className="project-arrow"
        style={{
          ...styles.arrow,
          color: hovered ? "var(--accent)" : "var(--muted)",
          transform: hovered ? "translate(2px,-2px)" : "none",
        }}
      >
        ↗
      </span>
      <span style={styles.tag}>{tag}</span>
      <div style={styles.title}>{title}</div>
      <div style={styles.desc}>{desc}</div>
      <div style={styles.stack}>
        {stack.map((t) => (
          <span key={t} style={styles.pill}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, visible] = useFadeIn();
  return (
    <section
      id="projects"
      ref={ref}
      className={`fade-section port-section${visible ? " visible" : ""}`}
      style={styles.section}
    >
      <span style={styles.secLabel}>03 — Projects</span>
      <h2 style={styles.secTitle}>Selected work</h2>
      <div className="projects-grid" style={styles.grid}>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: "5rem 2.5rem" },
  secLabel: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    color: "var(--accent)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
    display: "block",
  },
  secTitle: {
    fontFamily: "var(--serif)",
    fontSize: "clamp(1.7rem,4vw,2.2rem)",
    fontWeight: 400,
    color: "var(--text)",
    marginBottom: "3rem",
    letterSpacing: "-0.02em",
  },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" },
  card: {
    background: "var(--bg2)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    padding: "1.75rem",
    transition: "border-color .25s,transform .2s",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  },
  accentLine: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    background: "linear-gradient(90deg,var(--accent),transparent)",
    transition: "opacity .3s",
  },
  arrow: {
    position: "absolute",
    top: "1.5rem",
    right: "1.5rem",
    fontSize: 16,
    transition: "color .2s,transform .2s",
  },
  tag: {
    display: "inline-block",
    fontFamily: "var(--mono)",
    fontSize: 10,
    color: "var(--accent)",
    background: "rgba(79,142,247,0.1)",
    border: "1px solid rgba(79,142,247,0.2)",
    borderRadius: 4,
    padding: "2px 8px",
    marginBottom: "1rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  title: {
    fontFamily: "var(--serif)",
    fontSize: "1.25rem",
    fontWeight: 400,
    color: "var(--text)",
    marginBottom: "0.6rem",
    letterSpacing: "-0.01em",
  },
  desc: {
    fontSize: 13,
    color: "var(--muted)",
    lineHeight: 1.6,
    marginBottom: "1.25rem",
    fontWeight: 300,
  },
  stack: { display: "flex", flexWrap: "wrap", gap: "0.4rem" },
  pill: {
    fontFamily: "var(--mono)",
    fontSize: 10,
    color: "var(--muted)",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border)",
    borderRadius: 3,
    padding: "2px 8px",
  },
};
