import useFadeIn from "../hooks/useFadeIn";

const LINKS = [
  {
    icon: "✉",
    label: "mohammadkaif1204@gmail.com",
    href: "mailto:mohammadkaif1204@gmail.com",
  },
  {
    icon: "⌥",
    label: "github.com/sheikh-kaif",
    href: "https://github.com/sheikh-kaif",
  },
  {
    icon: "in",
    label: "linkedin.com/in/mohammad-kaif",
    href: "https://linkedin.com/in/mohammad-kaif-98a06a292/",
  },
  { icon: "📍", label: "Available remotely", href: "#" },
];

export default function Contact() {
  const [ref, visible] = useFadeIn();
  return (
    <section
      id="contact"
      ref={ref}
      className={`fade-section port-section${visible ? " visible" : ""}`}
      style={styles.section}
    >
      <span style={styles.secLabel}>04 — Contact</span>
      <h2 style={styles.secTitle}>Let's work together</h2>
      <div className="contact-inner" style={styles.inner}>
        <div>
          <h3 style={styles.h3}>Say hello.</h3>
          <p style={styles.p}>
            Whether you have a project in mind, a role to fill, or just want to
            chat about tech — my inbox is always open.
          </p>
          <div style={styles.links}>
            {LINKS.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="contact-link"
                style={styles.link}
              >
                <span style={{ color: "var(--accent)", minWidth: 16 }}>
                  {icon}
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div style={styles.form}>
          <div style={styles.group}>
            <label style={styles.label}>Name</label>
            <input type="text" placeholder="Your name" style={styles.input} />
          </div>
          <div style={styles.group}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              style={styles.input}
            />
          </div>
          <div style={styles.group}>
            <label style={styles.label}>Message</label>
            <textarea
              rows={4}
              placeholder="What's on your mind?"
              style={styles.textarea}
            />
          </div>
          <button
            style={{ ...styles.btn, width: "100%", marginTop: "0.25rem" }}
          >
            Send message
          </button>
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
  inner: {
    background: "var(--bg2)",
    border: "1px solid var(--border)",
    borderRadius: 16,
    padding: "3rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "start",
  },
  h3: {
    fontFamily: "var(--serif)",
    fontSize: "1.8rem",
    fontWeight: 400,
    marginBottom: "1rem",
    letterSpacing: "-0.02em",
  },
  p: {
    color: "var(--muted)",
    fontSize: 15,
    marginBottom: "1.75rem",
    fontWeight: 300,
  },
  links: { display: "flex", flexDirection: "column", gap: "0.75rem" },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    color: "var(--muted)",
    fontSize: 14,
    textDecoration: "none",
    transition: "color 0.2s",
  },
  form: { display: "flex", flexDirection: "column", gap: "1rem" },
  group: { display: "flex", flexDirection: "column", gap: "0.4rem" },
  label: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    color: "var(--muted)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  input: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border)",
    borderRadius: 6,
    padding: "0.65rem 0.9rem",
    color: "var(--text)",
    fontFamily: "var(--sans)",
    fontSize: 14,
    outline: "none",
    transition: "border-color 0.2s",
  },
  textarea: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border)",
    borderRadius: 6,
    padding: "0.65rem 0.9rem",
    color: "var(--text)",
    fontFamily: "var(--sans)",
    fontSize: 14,
    outline: "none",
    transition: "border-color 0.2s",
    resize: "none",
  },
  btn: {
    background: "var(--accent)",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.75rem",
    borderRadius: 6,
    fontFamily: "var(--sans)",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    transition: "opacity 0.2s",
  },
};
