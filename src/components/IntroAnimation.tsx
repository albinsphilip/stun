import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IntroAnimationProps {
  onComplete: () => void
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [audioPlayed, setAudioPlayed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(onComplete, 4000)

    if (!audioPlayed) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      
      const playNote = (frequency: number, startTime: number, duration: number, volume: number) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        
        oscillator.frequency.setValueAtTime(frequency, startTime)
        gainNode.gain.setValueAtTime(volume, startTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration)
        
        oscillator.start(startTime)
        oscillator.stop(startTime + duration)
      }

      const now = audioContext.currentTime
      playNote(261.63, now + 0.1, 0.3, 0.4)
      playNote(329.63, now + 0.35, 0.8, 0.5)
      
      setAudioPlayed(true)
    }

    return () => clearTimeout(timer)
  }, [onComplete, audioPlayed])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: 'oklch(0.08 0.01 250)' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          className="text-[20vw] font-bold tracking-tighter select-none"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 900,
            background: 'linear-gradient(180deg, oklch(0.75 0.25 180) 0%, oklch(0.65 0.22 275) 50%, oklch(0.55 0.18 320) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 80px rgba(156, 220, 254, 0.5)',
          }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ 
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
            times: [0, 1]
          }}
        >
          P
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.25 180 / 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 2],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1.2,
            times: [0, 0.5, 1],
            ease: "easeOut"
          }}
        />

        <motion.div
          className="absolute inset-0"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [0, 3, 4],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 1.5,
            times: [0, 0.4, 1],
            ease: "easeOut",
            delay: 0.1
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, oklch(0.65 0.22 275 / 0.5) 0%, transparent 60%)',
              filter: 'blur(80px)',
            }}
          />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            width: '150%',
            height: '150%',
            border: '2px solid oklch(0.75 0.25 180 / 0.3)',
            borderRadius: '50%',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 2],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.2
          }}
        />

        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: '4px',
              height: '40px',
              background: `linear-gradient(180deg, oklch(0.75 0.25 180) 0%, transparent 100%)`,
              transformOrigin: 'center center',
              left: '50%',
              top: '50%',
              rotate: `${i * 22.5}deg`,
            }}
            initial={{ 
              scale: 0,
              x: '-50%',
              y: '-50%',
              opacity: 0
            }}
            animate={{
              scale: [0, 1, 0],
              y: ['-50%', '-250%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              delay: 0.3 + (i * 0.02),
              ease: "easeOut"
            }}
          />
        ))}

        {[...Array(30)].map((_, i) => {
          const angle = (i / 30) * Math.PI * 2
          const radius = 200 + Math.random() * 100
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                background: 'oklch(0.95 0.1 180)',
                boxShadow: '0 0 10px oklch(0.75 0.25 180)',
              }}
              initial={{ 
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0
              }}
              animate={{
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                opacity: [0, 1, 0],
                scale: [0, 1, 0.5]
              }}
              transition={{
                duration: 1.2,
                delay: 0.4 + Math.random() * 0.4,
                ease: "easeOut"
              }}
            />
          )
        })}
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0] }}
        transition={{
          duration: 0.8,
          times: [0, 0.3, 1],
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle at center, oklch(0.95 0.1 180) 0%, transparent 50%)',
        }}
      />
    </motion.div>
  )
}
