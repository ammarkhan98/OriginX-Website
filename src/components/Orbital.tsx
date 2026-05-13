'use client'

import { motion } from 'framer-motion'

export default function Orbital() {
  const ringVariants = {
    rotate1: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
    rotate2: {
      rotate: -360,
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: 'linear',
      },
    },
    rotate3: {
      rotate: 360,
      transition: {
        duration: 45,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  }

  const satelliteVariants = {
    pulse: {
      scale: [1, 1.3, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow effect */}
      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-orange-500/20 to-transparent blur-3xl" />
      
      {/* SVG Container */}
      <svg
        viewBox="0 0 400 400"
        className="w-96 h-96 absolute"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8c00" />
            <stop offset="100%" stopColor="#ff6b00" />
          </linearGradient>
        </defs>

        {/* Ring 1 - Outermost, Fast */}
        <motion.g variants={ringVariants} animate="rotate1">
          <circle
            cx="200"
            cy="200"
            r="120"
            fill="none"
            stroke="url(#orangeGradient)"
            strokeWidth="2"
            opacity="0.6"
            filter="url(#glow)"
          />
          {/* Satellite dot 1 */}
          <motion.circle
            cx="200"
            cy="80"
            r="6"
            fill="#ff8c00"
            filter="url(#glow)"
            variants={satelliteVariants}
            animate="pulse"
          />
        </motion.g>

        {/* Ring 2 - Middle, Medium speed */}
        <motion.g variants={ringVariants} animate="rotate2">
          <circle
            cx="200"
            cy="200"
            r="85"
            fill="none"
            stroke="url(#orangeGradient)"
            strokeWidth="2"
            opacity="0.5"
            filter="url(#glow)"
          />
          {/* Satellite dot 2 */}
          <motion.circle
            cx="200"
            cy="115"
            r="5"
            fill="#ff8c00"
            filter="url(#glow)"
            variants={satelliteVariants}
            animate="pulse"
            transition={{ delay: 0.5 }}
          />
        </motion.g>

        {/* Ring 3 - Inner, Slow */}
        <motion.g variants={ringVariants} animate="rotate3">
          <circle
            cx="200"
            cy="200"
            r="50"
            fill="none"
            stroke="url(#orangeGradient)"
            strokeWidth="2"
            opacity="0.7"
            filter="url(#glow)"
          />
          {/* Satellite dot 3 */}
          <motion.circle
            cx="200"
            cy="150"
            r="4"
            fill="#ff8c00"
            filter="url(#glow)"
            variants={satelliteVariants}
            animate="pulse"
            transition={{ delay: 1 }}
          />
        </motion.g>

        {/* Center X mark */}
        <motion.g
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <text
            x="200"
            y="220"
            fontSize="80"
            fontWeight="700"
            fill="url(#orangeGradient)"
            textAnchor="middle"
            filter="url(#glow)"
            className="font-syne"
          >
            X
          </text>
        </motion.g>
      </svg>
    </div>
  )
}
