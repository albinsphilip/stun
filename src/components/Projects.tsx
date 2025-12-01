import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import { useKV } from '@github/spark/hooks'

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team features, and productivity analytics. Supports drag-and-drop, due dates, and file attachments.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with hourly and weekly forecasts, interactive maps, and location-based alerts. Features smooth animations and dark mode.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'Framer Motion'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '4',
    title: 'AI Content Generator',
    description: 'AI-powered content creation tool that helps marketers and writers generate engaging copy. Integrated with GPT-4 API for high-quality output.',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'TailwindCSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '5',
    title: 'Portfolio CMS',
    description: 'Headless CMS for creatives to manage and showcase their work. Features custom content types, media library, and RESTful API.',
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    tags: ['Node.js', 'Express', 'MongoDB', 'React Admin'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '6',
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking app with workout plans, nutrition logging, and progress visualization. Includes social features and achievement system.',
    image: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group perspective-1000"
    >
      <Card className="relative overflow-hidden h-full flex flex-col hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm">
        <motion.div
          className="relative h-64 overflow-hidden"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0" style={{ background: project.image }} />
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: isHovered ? 0.9 : 0.6 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="absolute top-4 right-4 flex gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : -20,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.liveUrl && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  size="icon"
                  className="bg-accent/90 hover:bg-accent text-accent-foreground backdrop-blur-sm"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ArrowUpRight size={20} weight="bold" />
                </Button>
              </motion.div>
            )}
            {project.githubUrl && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  size="icon"
                  className="bg-foreground/90 hover:bg-foreground text-background backdrop-blur-sm"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <GithubLogo size={20} weight="bold" />
                </Button>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <div className="p-6 flex flex-col flex-grow">
          <motion.h3
            className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge
                  variant="secondary"
                  className="text-xs bg-muted/50 hover:bg-accent/20 hover:text-accent transition-colors border border-border/50"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [projects] = useKV<Project[]>('portfolio-projects', defaultProjects)

  return (
    <section id="projects" className="py-24 md:py-40 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
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
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-accent/20 to-primary/20 text-accent border border-accent/30">
              Portfolio
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-accent via-primary to-secondary mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated selection of my recent work, showcasing innovation, creativity, and technical excellence
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
