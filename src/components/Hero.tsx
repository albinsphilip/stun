import { motion } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
      
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, oklch(0.75 0.15 200 / 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, oklch(0.75 0.15 200 / 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, oklch(0.75 0.15 200 / 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              className="text-accent font-medium mb-4 tracking-wide uppercase text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient">
                Alex Johnson
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl text-secondary font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Full Stack Developer & Creative Problem Solver
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              I craft beautiful, functional web experiences that solve real problems.
              Specializing in React, TypeScript, and modern web technologies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-medium"
                onClick={handleScrollToProjects}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 px-8 py-6 text-lg font-medium"
                onClick={handleScrollToContact}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={32} className="text-muted-foreground" />
      </motion.div>
    </section>
  )
}
