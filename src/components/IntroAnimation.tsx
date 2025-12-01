import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IntroAnimationProps {
  onComplete: () => void
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const controls = useAnimation()
  const [audioPlayed, setAudioPlayed] = useState(false)

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: { duration: 1.5, ease: [0.6, 0.01, 0.05, 0.95] }
      })
      
      await controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.8, ease: "easeInOut" }
      })
      
      await controls.start({
        scale: 1.5,
        opacity: 0,
        transition: { duration: 0.7, ease: "easeIn" }
      })
      
      setTimeout(onComplete, 100)
    }

    sequence()

    if (!audioPlayed) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.setValueAtTime(220, audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(440, audioContext.currentTime + 0.3)
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 1)
      
      setAudioPlayed(true)
    }
  }, [controls, onComplete, audioPlayed])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          animate={controls}
          className="relative"
        >
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="oklch(0.75 0.25 275)" />
                <stop offset="50%" stopColor="oklch(0.65 0.22 275)" />
                <stop offset="100%" stopColor="oklch(0.75 0.25 180)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <motion.path
              d="M 50 50 L 50 250 L 100 250 L 100 150 L 150 250 L 200 250 L 200 50 L 150 50 L 150 150 L 100 50 Z"
              fill="url(#logoGradient)"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          <motion.div
            className="absolute inset-0 -z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 1.5, 2],
              opacity: [0, 0.6, 0.4, 0],
              rotate: [0, 0, 180, 360]
            }}
            transition={{ 
              duration: 4,
              times: [0, 0.3, 0.6, 1],
              ease: "easeOut"
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-3xl" />
          </motion.div>

          <motion.div
            className="absolute inset-0 -z-20"
            initial={{ scale: 0 }}
            animate={{ 
              scale: [0, 2, 2.5, 3],
              opacity: [0, 0.4, 0.2, 0]
            }}
            transition={{ 
              duration: 4,
              times: [0, 0.4, 0.7, 1],
              ease: "easeOut"
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent via-primary to-secondary blur-3xl" />
          </motion.div>
        </motion.div>

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full"
            initial={{ scale: 0, x: '-50%', y: '-50%' }}
            animate={{
              scale: [0, 1, 0],
              x: ['-50%', `${Math.cos((i * 30 * Math.PI) / 180) * 200 - 50}%`],
              y: ['-50%', `${Math.sin((i * 30 * Math.PI) / 180) * 200 - 50}%`],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              delay: 1 + (i * 0.05),
              ease: "easeOut"
            }}
          />
        ))}

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute top-1/2 left-1/2 border-2 border-primary/30 rounded-full"
            style={{
              width: `${150 + i * 40}px`,
              height: `${150 + i * 40}px`,
              marginLeft: `${-(150 + i * 40) / 2}px`,
              marginTop: `${-(150 + i * 40) / 2}px`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 1.5],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 2,
              delay: 0.8 + (i * 0.1),
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.5, 0.3, 0],
          scale: [1, 1.1, 1.2, 1.3]
        }}
        transition={{ 
          duration: 4,
          ease: "easeInOut"
        }}
      />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            y: [0, -100],
          }}
          transition={{
            duration: 2,
            delay: 1 + Math.random() * 2,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  )
}
