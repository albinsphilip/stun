import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Code, Lightbulb, Users, Rocket } from '@phosphor-icons/react'

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time',
    color: 'from-accent to-cyan-400',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Always exploring new technologies and creative solutions',
    color: 'from-primary to-purple-400',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Strong communicator who thrives in team environments',
    color: 'from-secondary to-pink-400',
  },
  {
    icon: Rocket,
    title: 'Results-Driven',
    description: 'Focused on delivering tangible value and measurable impact',
    color: 'from-accent to-blue-400',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 md:py-40 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, -100, 0],
            x: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30">
              About Me
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Crafting Digital Excellence
          </h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative group">
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <Card className="relative overflow-hidden glass-effect border-border/50">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 rounded-xl flex items-center justify-center p-12">
                    <motion.div
                      className="text-9xl font-bold bg-gradient-to-br from-accent via-primary to-secondary bg-clip-text text-transparent"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      AJ
                    </motion.div>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
                Passionate about creating{' '}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  exceptional experiences
                </span>
              </h3>
              <motion.p
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                With over 5 years of experience in web development, I've had the privilege
                of working with startups and established companies to bring their visions to life.
                My journey in tech started with a curiosity about how things work, and that curiosity
                continues to drive me today.
              </motion.p>
              <motion.p
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 }}
              >
                I specialize in building modern, responsive web applications using React, TypeScript,
                and Node.js. Beyond the code, I'm passionate about user experience, performance
                optimization, and creating products that people love to use.
              </motion.p>
              <motion.p
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                When I'm not coding, you'll find me contributing to open source, writing technical
                articles, or exploring the latest developments in web technologies.
              </motion.p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="relative p-8 h-full group cursor-pointer overflow-hidden glass-effect border-border/50 hover:border-accent/50 transition-all duration-500">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <motion.div
                      className="mb-6 relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${highlight.color} opacity-10 group-hover:opacity-20 transition-opacity`}>
                        <Icon
                          size={32}
                          weight="duotone"
                          className="text-accent group-hover:text-primary transition-colors"
                        />
                      </div>
                    </motion.div>
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
