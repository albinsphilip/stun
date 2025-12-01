import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  MapPin,
  Phone,
} from '@phosphor-icons/react'

const contactMethods = [
  {
    icon: EnvelopeSimple,
    label: 'Email',
    value: 'albin.philip@email.com',
    href: 'mailto:albin.philip@email.com',
    color: 'from-accent to-cyan-400',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    color: 'from-primary to-purple-400',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
    color: 'from-secondary to-pink-400',
  },
]

const socialLinks = [
  {
    icon: GithubLogo,
    label: 'GitHub',
    href: 'https://github.com',
    color: 'hover:bg-foreground/10',
  },
  {
    icon: LinkedinLogo,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    color: 'hover:bg-[#0077b5]/20',
  },
  {
    icon: TwitterLogo,
    label: 'Twitter',
    href: 'https://twitter.com',
    color: 'hover:bg-[#1da1f2]/20',
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 md:py-40 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
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
              Get In Touch
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-accent via-primary to-secondary mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's create something extraordinary together
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="relative p-8 text-center group cursor-pointer h-full glass-effect border-border/50 hover:border-accent/50 transition-all duration-500 overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <motion.div
                      className="inline-block mb-6"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${method.color} opacity-10 group-hover:opacity-20 rounded-2xl flex items-center justify-center mx-auto transition-opacity`}>
                        <Icon
                          size={32}
                          weight="duotone"
                          className="text-accent group-hover:text-primary transition-colors"
                        />
                      </div>
                    </motion.div>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                      {method.label}
                    </h3>
                    <a
                      href={method.href}
                      className="text-base font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      {method.value}
                    </a>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card className="relative p-12 md:p-16 glass-effect border-border/50 overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary/10 to-accent/10 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Ready to start your project?
                </h3>
                <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision. Let's create something amazing together.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="relative bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-7 text-lg font-bold overflow-hidden group"
                    onClick={() => window.location.href = 'mailto:albin.philip@email.com'}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <EnvelopeSimple size={24} weight="bold" />
                      Send Me an Email
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>

                <div className="mt-12 pt-8 border-t border-border/50">
                  <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider font-semibold">
                    Connect with me
                  </p>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                          transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                          whileHover={{ scale: 1.2, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                          className={`w-14 h-14 glass-effect border-border/50 rounded-xl flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent/50 transition-all ${social.color}`}
                        >
                          <Icon size={28} weight="fill" />
                        </motion.a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20 text-sm text-muted-foreground"
        >
          <p className="flex items-center justify-center gap-2">
            © 2024 Albin Philip. Crafted with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            and code
          </p>
        </motion.div>
      </div>
    </section>
  )
}
