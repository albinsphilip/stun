import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [projects] = useKV<Project[]>('portfolio-projects', defaultProjects)

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, showcasing diverse skills and creative solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300">
                <motion.div
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: project.image }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <Button
                        size="icon"
                        className="bg-background/90 hover:bg-background text-foreground"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ArrowUpRight size={20} />
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="icon"
                        className="bg-background/90 hover:bg-background text-foreground"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <GithubLogo size={20} />
                      </Button>
                    )}
                  </div>
                </motion.div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
