import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import {
  FramerLogo,
  GitBranch,
  Database,
  CloudArrowUp,
  DeviceMobile,
  PaintBrush,
  Code,
  Sparkle,
} from '@phosphor-icons/react'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: Code, level: 95 },
      { name: 'TypeScript', icon: Code, level: 90 },
      { name: 'Tailwind CSS', icon: PaintBrush, level: 90 },
      { name: 'Next.js', icon: Code, level: 85 },
      { name: 'Framer Motion', icon: FramerLogo, level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: Code, level: 90 },
      { name: 'Express', icon: Code, level: 85 },
      { name: 'PostgreSQL', icon: Database, level: 80 },
      { name: 'MongoDB', icon: Database, level: 85 },
      { name: 'REST APIs', icon: CloudArrowUp, level: 90 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: GitBranch, level: 90 },
      { name: 'Docker', icon: CloudArrowUp, level: 75 },
      { name: 'Figma', icon: PaintBrush, level: 80 },
      { name: 'React Native', icon: DeviceMobile, level: 70 },
      { name: 'Three.js', icon: Sparkle, level: 65 },
    ],
  },
]

const techStack = [
  { name: 'React', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Node.js', icon: Code },
  { name: 'Tailwind', icon: PaintBrush },
  { name: 'Next.js', icon: Code },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Git', icon: GitBranch },
  { name: 'Docker', icon: CloudArrowUp },
  { name: 'Figma', icon: PaintBrush },
  { name: 'Framer Motion', icon: FramerLogo },
  { name: 'REST API', icon: CloudArrowUp },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = skill.icon
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{
                            duration: 0.3,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <Icon size={20} className="text-accent" />
                            <span className="text-sm font-medium text-foreground flex-grow">
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-accent to-primary"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{
                                duration: 1,
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                                ease: 'easeOut',
                              }}
                            />
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group"
                >
                  <Card className="px-6 py-4 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Icon
                        size={24}
                        className="text-muted-foreground group-hover:text-accent transition-colors"
                      />
                      <span className="text-sm font-medium text-foreground">
                        {tech.name}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
