import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Sparkle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { ParticleField } from '@/components/ParticleField'
import { useRef } from 'react'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      <ParticleField />
      
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, oklch(0.75 0.25 180 / 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, oklch(0.65 0.22 275 / 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, oklch(0.55 0.18 320 / 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, oklch(0.75 0.25 180 / 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div style={{ y }} className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkle size={16} weight="fill" className="text-accent animate-glow" />
              <span className="text-sm font-medium text-foreground">Available for hire</span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient">
                  Albin Philip
                </span>
                <motion.span
                  className="absolute -inset-2 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 blur-2xl -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl lg:text-4xl text-foreground/80 font-medium mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Full Stack Developer & Creative Problem Solver
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Crafting stunning digital experiences with cutting-edge technology.
              Transforming ideas into reality through elegant code and innovative design.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="relative bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg font-semibold overflow-hidden group"
                  onClick={handleScrollToProjects}
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent/50 hover:border-accent hover:bg-accent/10 px-10 py-7 text-lg font-semibold"
                  onClick={handleScrollToContact}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-16 flex justify-center gap-8 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-glow" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
                <span>50+ Projects Completed</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
        <ArrowDown size={24} className="text-accent" weight="bold" />
      </motion.div>
    </section>
  )
}
