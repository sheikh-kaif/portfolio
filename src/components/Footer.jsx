export default function Footer() {
  return (
    <footer style={styles.footer} className="footer-inner">
      <p style={styles.text}>© 2026 — Crafted with care</p>
      <div className="footer-dot" />
    </footer>
  )
}

const styles = {
  footer: {
    borderTop: '1px solid rgba(255,255,255,0.07)',
    padding: '1.75rem 2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 900,
    margin: '0 auto',
  },
  text: {
    fontFamily: 'var(--mono)',
    fontSize: 11,
    color: 'var(--muted)',
    letterSpacing: '0.06em',
  },
}
