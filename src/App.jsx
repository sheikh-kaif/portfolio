import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/global.css'

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ background: '#0d0f14', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar onScrollTo={scrollTo} />
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <Hero onScrollTo={scrollTo} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
