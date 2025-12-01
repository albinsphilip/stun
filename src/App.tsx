import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { Navigation } from '@/components/Navigation'
import { ScrollToTop } from '@/components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  )
}

export default App
