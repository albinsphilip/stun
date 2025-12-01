import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IntroAnimationProps {
  onComplete: () => void
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [audioPlayed, setAudioPlayed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(onComplete, 5000)

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
      playNote(261.63, now + 0.1, 0.4, 0.3)
      playNote(329.63, now + 0.4, 1.0, 0.4)
      
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
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          className="text-[18vw] font-bold tracking-tight select-none flex"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 900,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            style={{
              background: 'linear-gradient(135deg, oklch(0.75 0.25 180) 0%, oklch(0.65 0.22 275) 50%, oklch(0.55 0.18 320) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px oklch(0.75 0.25 180 / 0.5))',
            }}
            initial={{ opacity: 0, scale: 0.5, x: -50 }}
            animate={{ 
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            A
          </motion.span>
          <motion.span
            style={{
              background: 'linear-gradient(135deg, oklch(0.65 0.22 275) 0%, oklch(0.55 0.18 320) 50%, oklch(0.75 0.25 180) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px oklch(0.65 0.22 275 / 0.5))',
            }}
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            animate={{ 
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            P
          </motion.span>
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.25 180 / 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 2, 2.5, 2.5],
            opacity: [0, 0.6, 0.4, 0],
          }}
          transition={{
            duration: 4.5,
            times: [0, 0.3, 0.7, 1],
            ease: "easeOut"
          }}
        />

        <motion.div
          className="absolute inset-0"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [0, 3.5, 4, 4],
            opacity: [0, 0.5, 0.3, 0],
          }}
          transition={{
            duration: 4.5,
            times: [0, 0.3, 0.7, 1],
            ease: "easeOut",
            delay: 0.1
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, oklch(0.65 0.22 275 / 0.4) 0%, transparent 60%)',
              filter: 'blur(100px)',
            }}
          />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            width: '200%',
            height: '200%',
            border: '3px solid oklch(0.75 0.25 180 / 0.2)',
            borderRadius: '50%',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 1.5, 2],
            opacity: [0, 0.8, 0.4, 0],
          }}
          transition={{
            duration: 4.2,
            ease: "easeOut",
            delay: 0.3
          }}
        />

        <motion.div
          className="absolute"
          style={{
            width: '250%',
            height: '250%',
            border: '2px solid oklch(0.65 0.22 275 / 0.15)',
            borderRadius: '50%',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 1.5, 2.5],
            opacity: [0, 0.6, 0.3, 0],
          }}
          transition={{
            duration: 4.5,
            ease: "easeOut",
            delay: 0.5
          }}
        />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: '3px',
              height: '60px',
              background: `linear-gradient(180deg, oklch(0.75 0.25 180) 0%, oklch(0.65 0.22 275) 50%, transparent 100%)`,
              transformOrigin: 'center center',
              left: '50%',
              top: '50%',
              rotate: `${i * 18}deg`,
            }}
            initial={{ 
              scale: 0,
              x: '-50%',
              y: '-50%',
              opacity: 0
            }}
            animate={{
              scale: [0, 1.2, 0],
              y: ['-50%', '-300%'],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 3.2,
              delay: 0.6 + (i * 0.03),
              ease: "easeOut"
            }}
          />
        ))}

        {[...Array(40)].map((_, i) => {
          const angle = (i / 40) * Math.PI * 2
          const radius = 250 + Math.random() * 150
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${3 + Math.random() * 4}px`,
                height: `${3 + Math.random() * 4}px`,
                background: i % 2 === 0 ? 'oklch(0.75 0.25 180)' : 'oklch(0.65 0.22 275)',
                boxShadow: `0 0 15px ${i % 2 === 0 ? 'oklch(0.75 0.25 180)' : 'oklch(0.65 0.22 275)'}`,
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
                opacity: [0, 1, 0.6, 0],
                scale: [0, 1.2, 0.8, 0]
              }}
              transition={{
                duration: 3.2,
                delay: 0.8 + Math.random() * 0.6,
                ease: "easeOut"
              }}
            />
          )
        })}
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0.1, 0] }}
        transition={{
          duration: 4.5,
          times: [0, 0.2, 0.6, 1],
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle at center, oklch(0.95 0.1 180) 0%, transparent 50%)',
        }}
      />
    </motion.div>
  )
}
