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
    value: 'alex.johnson@email.com',
    href: 'mailto:alex.johnson@email.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
]

const socialLinks = [
  {
    icon: GithubLogo,
    label: 'GitHub',
    href: 'https://github.com',
    color: 'hover:text-foreground',
  },
  {
    icon: LinkedinLogo,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    color: 'hover:text-[#0077b5]',
  },
  {
    icon: TwitterLogo,
    label: 'Twitter',
    href: 'https://twitter.com',
    color: 'hover:text-[#1da1f2]',
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="inline-block mb-4"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                        <Icon
                          size={24}
                          className="text-accent group-hover:text-primary transition-colors"
                        />
                      </div>
                    </motion.div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">
                      {method.label}
                    </h3>
                    <a
                      href={method.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {method.value}
                    </a>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Let's Work Together
                </h3>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision.
                </p>
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-medium"
                  onClick={() => window.location.href = 'mailto:alex.johnson@email.com'}
                >
                  <EnvelopeSimple size={24} className="mr-2" />
                  Send Me an Email
                </Button>
              </div>

              <div className="border-t pt-8">
                <p className="text-center text-sm text-muted-foreground mb-6">
                  Connect with me on social media
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
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                      >
                        <Icon size={24} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 text-sm text-muted-foreground"
        >
          <p>© 2024 Alex Johnson. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}
