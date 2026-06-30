import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MdWork, MdCheckCircle } from 'react-icons/md'
import { FaBrain } from 'react-icons/fa'

const responsibilities = [
  'Built and deployed machine learning models for production-grade AI applications.',
  'Performed comprehensive data preprocessing, cleaning, and feature engineering pipelines.',
  'Worked on model evaluation, hyperparameter tuning, and performance optimization.',
  'Collaborated on AI-driven business solutions that improved operational efficiency.',
]

const Experience = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="tag">Where I've Worked</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Industry exposure building real-world AI solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden sm:block" />

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative sm:pl-20"
          >
            {/* Timeline dot */}
            <div className="hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center shadow-lg shadow-purple-500/30 z-10">
              <FaBrain size={20} className="text-white" />
            </div>

            {/* Card */}
            <div className="glass rounded-2xl p-8 border border-white/5 hover:border-purple-500/20 transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      Current
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Datascientist Intern
                  </h3>
                  <p className="text-purple-400 font-semibold text-lg mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Rubixe AI
                  </p>
                </div>

                <div className="glass px-4 py-3 rounded-xl border border-white/5 text-right">
                  <div className="text-slate-400 text-xs mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Duration</div>
                  <div className="text-white font-medium text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>2026</div>
                </div>
              </div>

              <div className="h-px bg-white/5 mb-6" />

              <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Key Contributions
              </h4>

              <ul className="space-y-3">
                {responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                  >
                    <MdCheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={16} />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'Data Preprocessing', 'Model Deployment', 'Feature Engineering'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs glass border border-white/8 text-cyan-300"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
