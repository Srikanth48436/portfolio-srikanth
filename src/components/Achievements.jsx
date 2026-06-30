import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaRocket, FaBriefcase, FaPuzzlePiece, FaBook } from 'react-icons/fa'

const achievements = [
  {
    icon: FaRocket,
    gradient: 'from-blue-500 to-blue-700',
    glow: 'rgba(59,130,246,0.3)',
    title: 'ML Projects Built',
    description:
      'Developed 3+ end-to-end machine learning applications covering regression, deep learning, and NLP — each deployed with a complete data pipeline.',
    stat: '3+',
    statLabel: 'Projects',
  },
  {
    icon: FaBriefcase,
    gradient: 'from-purple-500 to-violet-700',
    glow: 'rgba(139,92,246,0.3)',
    title: 'AI/ML Internship',
    description:
      'Gained professional experience at Rubixe AI, contributing to production-grade model development and AI-driven business solutions.',
    stat: '1',
    statLabel: 'Internship',
  },
  {
    icon: FaPuzzlePiece,
    gradient: 'from-cyan-500 to-cyan-700',
    glow: 'rgba(6,182,212,0.3)',
    title: 'Problem Solver',
    description:
      'Passionate about algorithmic thinking and competitive problem-solving. Regularly tackle data structure challenges to sharpen engineering instincts.',
    stat: '∞',
    statLabel: 'Problems',
  },
  {
    icon: FaBook,
    gradient: 'from-green-500 to-emerald-700',
    glow: 'rgba(16,185,129,0.3)',
    title: 'Continuous Learner',
    description:
      'Committed to staying at the frontier of AI/ML. Actively pursuing courses, reading research papers, and experimenting with state-of-the-art techniques.',
    stat: '∞',
    statLabel: 'Learning',
  },
]

const Achievements = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="tag">Milestones</span>
          <h2 className="section-title">
            <span className="gradient-text">Achievements</span> & Highlights
          </h2>
          <p className="section-subtitle">
            Defining moments that shaped my journey in AI and engineering
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-all duration-300 flex flex-col"
                style={{ boxShadow: `0 0 0 0 ${item.glow}` }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 40px ${item.glow}`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon size={24} className="text-white" />
                </div>

                {/* Stat */}
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-4xl font-bold gradient-text leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {item.stat}
                  </span>
                  <span className="text-xs text-slate-500 mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {item.statLabel}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements
