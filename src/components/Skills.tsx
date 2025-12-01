import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import {
  Code,
  Database,
  CloudArrowUp,
  DeviceMobile,
  PaintBrush,
  Sparkle,
  GitBranch,
} from '@phosphor-icons/react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    skills: [
      { name: 'React', level: 95, color: 'from-cyan-400 to-blue-500' },
      { name: 'TypeScript', level: 90, color: 'from-blue-400 to-indigo-500' },
      { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-teal-400' },
      { name: 'Next.js', level: 85, color: 'from-slate-400 to-slate-600' },
      { name: 'Framer Motion', level: 80, color: 'from-pink-400 to-purple-500' },
    ],
  },
  {
    title: 'Backend',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 90, color: 'from-green-400 to-emerald-500' },
      { name: 'Express', level: 85, color: 'from-gray-400 to-gray-600' },
      { name: 'PostgreSQL', level: 80, color: 'from-blue-500 to-cyan-600' },
      { name: 'MongoDB', level: 85, color: 'from-green-500 to-teal-600' },
      { name: 'REST APIs', level: 90, color: 'from-orange-400 to-red-500' },
    ],
  },
  {
    title: 'Tools & Others',
    icon: CloudArrowUp,
    skills: [
      { name: 'Git', level: 90, color: 'from-orange-500 to-red-600' },
      { name: 'Docker', level: 75, color: 'from-blue-400 to-cyan-500' },
      { name: 'Figma', level: 80, color: 'from-purple-400 to-pink-500' },
      { name: 'React Native', level: 70, color: 'from-blue-500 to-cyan-400' },
      { name: 'Three.js', level: 65, color: 'from-black to-gray-700' },
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
  { name: 'Framer Motion', icon: Sparkle },
  { name: 'REST API', icon: CloudArrowUp },
  { name: 'GraphQL', icon: CloudArrowUp },
  { name: 'AWS', icon: CloudArrowUp },
  { name: 'React Native', icon: DeviceMobile },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 md:py-40 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

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
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary border border-secondary/30">
              Expertise
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Skills & Technologies
          </h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-secondary via-accent to-primary mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="relative p-8 h-full glass-effect border-border/50 hover:border-accent/50 transition-all duration-500 overflow-hidden group">
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="flex items-center gap-3 mb-8">
                      <motion.div
                        className="p-3 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <CategoryIcon size={28} className="text-accent" weight="duotone" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{
                            duration: 0.4,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-foreground">
                              {skill.name}
                            </span>
                            <motion.span
                              className="text-xs font-bold text-accent"
                              initial={{ opacity: 0 }}
                              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                              transition={{
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{
                                duration: 1.5,
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                                ease: 'easeOut',
                              }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                animate={{
                                  x: ['-100%', '200%'],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: 'linear',
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.03 }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Card className="relative px-6 py-4 glass-effect border-border/50 hover:border-accent/50 transition-all duration-300 cursor-pointer overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative z-10 flex items-center gap-3">
                      <Icon
                        size={24}
                        className="text-muted-foreground group-hover:text-accent transition-colors"
                        weight="duotone"
                      />
                      <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
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
