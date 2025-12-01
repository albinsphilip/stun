import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { Navigation } from '@/components/Navigation'
import { ScrollToTop } from '@/components/ScrollToTop'
import { IntroAnimation } from '@/components/IntroAnimation'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [hasSeenIntro, setHasSeenIntro] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('intro-seen')
    if (seen) {
      setShowIntro(false)
      setHasSeenIntro(true)
    }
  }, [])

  const handleIntroComplete = () => {
    sessionStorage.setItem('intro-seen', 'true')
    setShowIntro(false)
    setHasSeenIntro(true)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && !hasSeenIntro && (
          <IntroAnimation onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
      
      {(hasSeenIntro || !showIntro) && (
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
      )}
    </>
  )
}

export default App
