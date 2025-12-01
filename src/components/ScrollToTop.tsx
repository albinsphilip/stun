import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / totalHeight) * 100

      setIsVisible(scrolled > 300)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="relative w-14 h-14 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
          >
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="26"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-accent-foreground/20"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="26"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-accent-foreground"
                strokeDasharray={163}
                strokeDashoffset={163 - (163 * scrollProgress) / 100}
                strokeLinecap="round"
              />
            </svg>
            <ArrowUp size={24} weight="bold" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
