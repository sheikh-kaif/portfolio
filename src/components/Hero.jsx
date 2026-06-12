import { useState } from "react";
import CursorCharacter from "./CursorCharacter";

export default function Hero({ onScrollTo }) {
  const [cvLabel, setCvLabel] = useState("Download CV");
  const [cvAccent, setCvAccent] = useState(false);

  const handleDownloadCV = () => {
    setCvLabel("✓ Downloaded!");
    setCvAccent(true);
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "kaif_Resume.pdf";
    link.click();
    setTimeout(() => {
      setCvLabel("Download CV");
      setCvAccent(false);
    }, 2000);
  };

  return (
    <section className="hero-wrap" style={styles.hero}>
      {/* ── Left ── */}
      <div className="hero-left" style={styles.left}>
        <span
          style={{
            ...styles.label,
            animation: "fadeUp 0.6s 0.2s forwards",
            opacity: 0,
          }}
        >
          Available for work
        </span>
        <h1
          style={{
            ...styles.h1,
            animation: "fadeUp 0.7s 0.35s forwards",
            opacity: 0,
          }}
        >
          Building things for
          <br />
          the <em style={styles.em}>modern web.</em>
        </h1>
        <p
          style={{
            ...styles.sub,
            animation: "fadeUp 0.7s 0.5s forwards",
            opacity: 0,
          }}
        >
          A developer &amp; engineer who turns complex problems into clean,
          elegant solutions. Fast, maintainable, and joyful to use.
        </p>
        <div
          className="hero-actions"
          style={{
            ...styles.actions,
            animation: "fadeUp 0.7s 0.65s forwards",
            opacity: 0,
          }}
        >
          <button
            style={styles.btnPrimary}
            onClick={() => onScrollTo("projects")}
          >
            View my work
          </button>
          <button
            style={{
              ...styles.btnGhost,
              borderColor: cvAccent
                ? "rgba(79,142,247,0.5)"
                : "rgba(255,255,255,0.07)",
              color: cvAccent ? "#7eb3ff" : "#e8eaf0",
            }}
            onClick={handleDownloadCV}
          >
            ⬇ {cvLabel}
          </button>
        </div>

        <div
          className="hero-scroll"
          style={{
            ...styles.scrollHint,
            animation: "fadeIn 1s 1.2s forwards",
            opacity: 0,
          }}
        >
          <div style={styles.scrollLine}>
            <div className="scroll-line-inner" />
          </div>
          scroll to explore
        </div>
      </div>

      {/* ── Right: character ── */}
      <div className="hero-right" style={styles.right}>
        <div style={styles.ringOuter} />
        <div style={styles.ringInner} />
        <span
          className="floating-tag"
          style={{
            ...styles.tag,
            top: "15%",
            right: -10,
            animationDelay: "1s",
          }}
        >
          React.dev
        </span>
        <span
          className="floating-tag"
          style={{
            ...styles.tag,
            bottom: "22%",
            right: -14,
            animationDelay: "1.3s",
          }}
        >
          Node.js
        </span>
        <span
          className="floating-tag"
          style={{
            ...styles.tag,
            top: "55%",
            left: -18,
            animationDelay: "1.6s",
          }}
        >
          Python
        </span>
        <div className="hero-character">
          <CursorCharacter />
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "88vh",
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    padding: "6rem 2.5rem 4rem",
    position: "relative",
  },
  left: {
    flex: 1,
    maxWidth: 480,
    zIndex: 2,
  },
  label: {
    fontFamily: "var(--mono)",
    fontSize: 12,
    color: "var(--accent)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "1.25rem",
    display: "block",
  },
  h1: {
    fontFamily: "var(--serif)",
    fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
    fontWeight: 400,
    lineHeight: 1.12,
    letterSpacing: "-0.02em",
    color: "var(--text)",
    marginBottom: "1.4rem",
  },
  em: { fontStyle: "italic", color: "var(--accent2)" },
  sub: {
    fontSize: "clamp(14px, 2vw, 16px)",
    color: "var(--muted)",
    maxWidth: 420,
    marginBottom: "2.25rem",
    fontWeight: 300,
  },
  actions: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: "var(--accent)",
    color: "#fff",
    border: "none",
    padding: "0.72rem 1.6rem",
    borderRadius: 6,
    fontFamily: "var(--sans)",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    transition: "opacity 0.2s, transform 0.15s",
  },
  btnGhost: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.07)",
    padding: "0.72rem 1.6rem",
    borderRadius: 6,
    fontFamily: "var(--sans)",
    fontSize: 14,
    cursor: "pointer",
    transition: "border-color 0.2s, color 0.2s, transform 0.15s",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  scrollHint: {
    position: "absolute",
    bottom: "2.5rem",
    left: "2.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    fontFamily: "var(--mono)",
    fontSize: 11,
    color: "var(--muted)",
    letterSpacing: "0.08em",
  },
  scrollLine: {
    width: 40,
    height: 1,
    background: "var(--muted)",
    position: "relative",
    overflow: "hidden",
  },
  right: {
    flex: "0 0 360px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
  },
  ringOuter: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: "50%",
    border: "1px solid rgba(79,142,247,0.12)",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    pointerEvents: "none",
  },
  ringInner: {
    position: "absolute",
    width: 240,
    height: 240,
    borderRadius: "50%",
    border: "1px solid rgba(79,142,247,0.08)",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    pointerEvents: "none",
  },
  tag: {
    position: "absolute",
    fontFamily: "var(--mono)",
    fontSize: 10,
    color: "var(--accent)",
    background: "rgba(79,142,247,0.1)",
    border: "1px solid rgba(79,142,247,0.2)",
    borderRadius: 4,
    padding: "3px 8px",
    letterSpacing: "0.06em",
    whiteSpace: "nowrap",
  },
};
