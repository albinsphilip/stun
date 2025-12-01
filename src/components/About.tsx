import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Code, Lightbulb, Users, Rocket } from '@phosphor-icons/react'

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Always exploring new technologies and creative solutions',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Strong communicator who thrives in team environments',
  },
  {
    icon: Rocket,
    title: 'Results-Driven',
    description: 'Focused on delivering tangible value and measurable impact',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-2xl" />
                <Card className="relative overflow-hidden p-8 bg-card">
                  <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl flex items-center justify-center">
                    <div className="text-8xl font-bold text-accent/20">AJ</div>
                  </div>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
                Passionate about creating exceptional digital experiences
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                With over 5 years of experience in web development, I've had the privilege 
                of working with startups and established companies to bring their visions to life. 
                My journey in tech started with a curiosity about how things work, and that curiosity 
                continues to drive me today.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I specialize in building modern, responsive web applications using React, TypeScript, 
                and Node.js. Beyond the code, I'm passionate about user experience, performance 
                optimization, and creating products that people love to use.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me contributing to open source, writing technical 
                articles, or exploring the latest developments in web technologies.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="mb-4"
                    >
                      <Icon
                        size={40}
                        weight="duotone"
                        className="text-accent group-hover:text-primary transition-colors"
                      />
                    </motion.div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
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
