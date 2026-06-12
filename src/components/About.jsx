import useFadeIn from "../hooks/useFadeIn";

const STATS = [
  ["1+", "Years exp."],
  ["8", "Projects"],
  ["2", "Happy clients"],
  ["∞", "Curiosity"],
];

export default function About() {
  const [ref, visible] = useFadeIn();
  return (
    <section
      id="about"
      ref={ref}
      className={`fade-section port-section${visible ? " visible" : ""}`}
      style={styles.section}
    >
      <span style={styles.secLabel}>01 — About</span>
      <h2 style={styles.secTitle}>A little about me</h2>
      <div className="about-grid" style={styles.grid}>
        <div>
          <p style={styles.p}>
            Hey! my name is <strong style={styles.strong}>Mohammad Kaif</strong>
            , I'm a{" "}
            <strong style={styles.strong}>
              full-stack developer &amp; engineer
            </strong>{" "}
            with a deep love for building digital products that are both
            performant and beautiful.
          </p>
          <p style={styles.p}>
            I specialize in{" "}
            <strong style={styles.strong}>
              React, Node.js, and cloud infrastructure
            </strong>{" "}
            — with an eye for design and obsessive attention to the details most
            people skip.
          </p>
          <p style={styles.p}>
            When I'm not coding, you'll find me reading about distributed
            systems, contributing to open-source, or exploring new tech stacks.
          </p>
        </div>
        <div style={styles.statsGrid}>
          {STATS.map(([num, lbl]) => (
            <div key={lbl} style={styles.statBox}>
              <span style={styles.statNum}>{num}</span>
              <span style={styles.statLbl}>{lbl}</span>
            </div>
          ))}
        </div>
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
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "start",
  },
  p: {
    color: "var(--muted)",
    fontWeight: 300,
    marginBottom: "1rem",
    fontSize: 16,
  },
  strong: { color: "var(--text)", fontWeight: 500 },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 1,
    background: "var(--border)",
    border: "1px solid var(--border)",
    borderRadius: 10,
    overflow: "hidden",
  },
  statBox: { background: "var(--bg2)", padding: "1.5rem", textAlign: "center" },
  statNum: {
    fontFamily: "var(--serif)",
    fontSize: "2rem",
    color: "var(--text)",
    display: "block",
  },
  statLbl: {
    fontSize: 11,
    color: "var(--muted)",
    fontFamily: "var(--mono)",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginTop: "0.25rem",
    display: "block",
  },
};
