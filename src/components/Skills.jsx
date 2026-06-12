import useFadeIn from '../hooks/useFadeIn'
import { SKILLS } from '../data/portfolioData'

function SkillCard({ icon, name, desc, level, animate }) {
  return (
    <div className="skill-card" style={styles.card}>
      <span style={styles.icon}>{icon}</span>
      <div style={styles.name}>{name}</div>
      <div style={styles.desc}>{desc}</div>
      <div style={styles.barWrap}>
        <div className={`skill-bar${animate ? ' animate' : ''}`} style={{ width:`${level*100}%` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, visible] = useFadeIn()
  return (
    <section id="skills" ref={ref} className={`fade-section port-section${visible ? ' visible' : ''}`} style={styles.section}>
      <span style={styles.secLabel}>02 — Skills</span>
      <h2 style={styles.secTitle}>What I work with</h2>
      <div className="skills-grid" style={styles.grid}>
        {SKILLS.map((s) => <SkillCard key={s.name} {...s} animate={visible} />)}
      </div>
    </section>
  )
}

const styles = {
  section: { padding:'5rem 2.5rem' },
  secLabel: { fontFamily:'var(--mono)', fontSize:11, color:'var(--accent)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:'0.5rem', display:'block' },
  secTitle: { fontFamily:'var(--serif)', fontSize:'clamp(1.7rem,4vw,2.2rem)', fontWeight:400, color:'var(--text)', marginBottom:'3rem', letterSpacing:'-0.02em' },
  grid: { display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1rem' },
  card: { background:'var(--card)', border:'1px solid var(--border)', borderRadius:10, padding:'1.25rem 1.5rem', transition:'border-color .25s,transform .2s', cursor:'default' },
  icon: { fontSize:20, marginBottom:'0.75rem', display:'block' },
  name: { fontWeight:500, fontSize:14, color:'var(--text)', marginBottom:'0.4rem' },
  desc: { fontSize:12, color:'var(--muted)', lineHeight:1.5 },
  barWrap: { marginTop:'0.75rem', height:2, background:'rgba(255,255,255,0.06)', borderRadius:2, overflow:'hidden' },
}
