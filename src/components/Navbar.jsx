import { useState } from "react";

const NAV_ITEMS = ["about", "skills", "projects", "contact"];

export default function Navbar({ onScrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    onScrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav style={styles.nav}>
      <div className="nav-inner" style={styles.inner}>
        <span style={styles.logo}>// dev.portfolio</span>

        {/* Desktop links */}
        <ul className="nav-links" style={styles.links}>
          {NAV_ITEMS.map((id) => (
            <li key={id}>
              <span
                className="nav-link"
                style={styles.link}
                onClick={() => handleNav(id)}
              >
                {id}
              </span>
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile) */}
        <button
          style={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            style={{
              ...styles.burgerLine,
              transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none",
            }}
          />
          <span style={{ ...styles.burgerLine, opacity: menuOpen ? 0 : 1 }} />
          <span
            style={{
              ...styles.burgerLine,
              transform: menuOpen
                ? "rotate(-45deg) translate(5px,-5px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={styles.dropdown}>
          {NAV_ITEMS.map((id) => (
            <span
              key={id}
              style={styles.dropItem}
              onClick={() => handleNav(id)}
            >
              {id}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "rgba(13,15,20,0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 0.5rem",
  },
  logo: {
    fontFamily: "var(--mono)",
    fontSize: 14,
    color: "var(--accent)",
    letterSpacing: "0.05em",
  },
  links: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
  },
  link: {
    color: "var(--muted)",
    fontSize: 13,
    fontWeight: 400,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "color 0.2s",
  },
  burger: {
    display: "none",
    flexDirection: "column",
    gap: 5,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 4,
  },
  burgerLine: {
    width: 22,
    height: 2,
    background: "var(--text)",
    borderRadius: 2,
    transition: "transform 0.25s, opacity 0.2s",
    display: "block",
  },
  dropdown: {
    display: "flex",
    flexDirection: "column",
    background: "rgba(13,15,20,0.98)",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    padding: "1rem 1.5rem",
    gap: "0.85rem",
  },
  dropItem: {
    color: "var(--muted)",
    fontSize: 14,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    cursor: "pointer",
    padding: "0.4rem 0",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
};

/* Inject burger visibility via a style tag */
if (typeof document !== "undefined") {
  const id = "__nav-responsive__";
  if (!document.getElementById(id)) {
    const s = document.createElement("style");
    s.id = id;
    s.textContent = `
      @media (max-width: 640px) {
        .nav-links { display: none !important; }
        button[aria-label="Toggle menu"] { display: flex !important; }
      }
    `;
    document.head.appendChild(s);
  }
}
