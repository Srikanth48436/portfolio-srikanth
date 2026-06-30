import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiDownload, HiArrowRight } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import profileImage from '../assets/profile.jpg'

<div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-purple-500/30 glass flex items-center justify-center animate-float">
  <img
    src={profileImage}
    alt="Srikanth"
    className="object-cover w-full h-full"
  />
</div>

const Particle = ({ style }) => (
  <div
    className="absolute w-1 h-1 rounded-full bg-purple-400/60"
    style={{
      ...style,
      animation: `particleFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 3}s`,
    }}
  />
)

const Hero = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }))

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob-1 absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="blob-2 absolute top-1/3 right-0 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="blob-3 absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Particles */}
        {particles.map((p, i) => (
          <Particle key={i} style={{ left: p.left, top: p.top }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="tag">👋 Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-white">Chitteti</span>
              <br />
              <span className="gradient-text">Srikanth</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-5 text-xl sm:text-2xl text-slate-300 font-medium flex items-center gap-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-slate-500">{'>'}</span>
              <TypeAnimation
                sequence={[
                  'AI/ML Engineer',
                  2000,
                  'Data Scientist',
                  2000,
                  'Python Developer',
                  2000,
                  'Machine Learning Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              />
              <span className="w-0.5 h-6 bg-blue-400 animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl"
            >
              Transforming Data into Intelligent Solutions. Building AI systems
              that solve real-world problems and create meaningful impact through
              technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}>
                Contact Me <HiArrowRight />
              </a>
              <a href="#projects" className="btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }) }}>
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="btn-outline"
                download
              >
                <HiDownload /> Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center gap-5"
            >
              <span className="text-slate-600 text-sm" style={{ fontFamily: 'JetBrains Mono, monospace' }}>find me on</span>
              {[
                { icon: FaGithub, href: 'https://github.com/Srikanth48436', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/srikanth-chitteti-a3485a2b0/', label: 'LinkedIn' },
                { icon: MdEmail, href: 'mailto:srikanthchitteti36@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 transition-all duration-200 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Side — Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 blur-2xl opacity-30 scale-110 animate-pulse-slow" />

              {/* Spinning ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)',
                  animation: 'spin 8s linear infinite',
                  padding: '2px',
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0A0A0A]" />
              </div>

              {/* Profile container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-purple-500/30 glass flex items-center justify-center animate-float">
                <img
                  src={profileImage}
                  alt="Srikanth"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -left-8 top-1/4 glass px-4 py-2 rounded-xl border border-blue-500/30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-white font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Open to Work</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 bottom-1/4 glass px-4 py-2 rounded-xl border border-purple-500/30"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>8.05</div>
                  <div className="text-xs text-slate-400">CGPA</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-xl border border-cyan-500/30"
              >
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 text-lg">🤖</span>
                  <span className="text-sm text-white font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>AI/ML Intern @ Rubixe</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-600 text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
