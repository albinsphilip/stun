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
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="relative w-16 h-16 rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 shadow-2xl shadow-accent/30 glass-effect border-2 border-accent/20"
          >
            <svg className="absolute inset-0 w-full h-full -rotate-90 rounded-2xl overflow-hidden">
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-accent-foreground"
                strokeDasharray={176}
                strokeDashoffset={176 - (176 * scrollProgress) / 100}
                strokeLinecap="round"
              />
            </svg>
            <ArrowUp size={28} weight="bold" className="relative z-10" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
