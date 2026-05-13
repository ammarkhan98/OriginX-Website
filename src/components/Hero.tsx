'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary via-dark to-primary">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="1" />
              </filter>
            </defs>
            <rect width="100%" height="100%" fill="url(#gradient-mesh)" filter="url(#noise)" opacity="0.1" />
          </svg>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 140, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 140, 0, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Headline with outline stroke effect */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-syne font-bold leading-tight">
                <span className="text-white">Transform</span>
                <br />
                <span className="text-white">Your Business</span>
                <br />
                <span className="text-white">with </span>
                <span style={{ color: '#ff8c00' }}>Cutting-</span>
                <br />
                <span style={{ color: '#ff8c00' }}>Edge</span>
                <br />
                <span
                  className="inline-block"
                  style={{
                    WebkitTextStroke: '2px #ff8c00',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Technology
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-lg max-w-lg font-dm-sans" style={{ color: '#ffffff' }}>
              Enterprise-grade solutions for <span className="font-semibold">cloud, AI, security,</span> and digital transformation. Let us start your journey toward a smarter future.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-4 py-8 pt-12"
            >
              {[
                { number: '500+', label: 'Companies Served' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '12+', label: 'Years Experience' },
              ].map((stat, i) => {
                const numPart = stat.number.slice(0, -1);
                const symbolPart = stat.number.slice(-1);
                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={statVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                  >
                    <div className="text-3xl font-bold font-syne">
                      <span className="text-white">{numPart}</span>
                      <span className="text-secondary">{symbolPart}</span>
                    </div>
                    <div className="text-sm font-dm-sans" style={{ color: '#ffffff' }}>{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-black text-white font-dm-sans font-semibold rounded-lg transition-colors hover:bg-gray-800"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 text-white font-dm-sans font-semibold rounded-lg transition-colors hover:bg-orange-400/10"
                style={{ borderColor: '#ff8c00' }}
              >
                View Case Studies →
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Shooting star animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden md:flex items-center justify-center relative h-screen overflow-hidden"
          >
            <div className="relative w-full h-full">
              {/* Background for shooting stars */}
              {[0, 2, 4].map((delay) => (
                <motion.div
                  key={delay}
                  className="absolute"
                  initial={{ x: '-20%', y: '80%', opacity: 0, rotate: 45 }}
                  animate={{ x: '120%', y: '10%', opacity: [0, 1, 1, 0], rotate: 45 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: delay,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Orange streak/trail */}
                  <div className="absolute inset-0 w-96 h-1 bg-gradient-to-r from-orange-500 to-transparent blur-sm" />

                  {/* White shooting star */}
                  <div className="absolute -inset-1 w-6 h-6 rounded-full bg-white shadow-lg"
                    style={{
                      boxShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 140, 0, 0.4)',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-secondary"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
