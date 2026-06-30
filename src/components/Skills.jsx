import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiPython, SiScikitlearn, SiPandas, SiNumpy,
  SiGit, SiGithub, SiMysql,
  SiTensorflow, SiOpencv, SiJupyter, SiFlask,
} from 'react-icons/si'
import { FaCode } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const ProgressBar = ({ name, pct, inView, delay }) => (
  <div>
    <div className="flex justify-between mb-2 text-sm">
      <span className="text-white font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{name}</span>
      <span className="text-slate-400 font-mono">{pct}%</span>
    </div>
    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
      />
    </div>
  </div>
)

const IconCard = ({ icon: Icon, name, color }) => (
  <motion.div
    whileHover={{ scale: 1.08, y: -4 }}
    className="glass rounded-xl p-4 flex flex-col items-center gap-2 cursor-default border border-white/5 hover:border-purple-500/30 transition-colors duration-200"
  >
    <Icon size={28} style={{ color }} />
    <span className="text-xs text-slate-400 font-medium text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{name}</span>
  </motion.div>
)

const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const programmingSkills = [
    { name: 'Python', pct: 95 },
    { name: 'SQL', pct: 90 },
  ]

  const mlIcons = [
    { icon: SiScikitlearn, name: 'Scikit-Learn', color: '#F7931E' },
    { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
    { icon: SiPandas, name: 'Pandas', color: '#150458' },
    { icon: SiNumpy, name: 'NumPy', color: '#4DABCF' },
    { icon: SiOpencv, name: 'OpenCV', color: '#5C3EE8' },
    { icon: SiFlask, name: 'Flask', color: '#FFFFFF' },
  ]

  const toolIcons = [
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiGithub, name: 'GitHub', color: '#FFFFFF' },
    { icon: VscCode, name: 'VS Code', color: '#007ACC' },
    { icon: SiJupyter, name: 'Jupyter', color: '#F37626' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
  ]

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="tag">What I Work With</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit built through projects and professional experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Core Languages */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-2xl border border-white/5"
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <FaCode size={14} className="text-white" />
              </span>
              Core Languages
            </h3>
            <div className="space-y-6">
              {programmingSkills.map((s, i) => (
                <ProgressBar key={s.name} {...s} inView={inView} delay={0.4 + i * 0.15} />
              ))}
            </div>
          </motion.div>

          {/* ML / AI Libraries */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass p-8 rounded-2xl border border-white/5"
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-600 flex items-center justify-center">
                <SiScikitlearn size={14} className="text-white" />
              </span>
              ML / AI Libraries
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {mlIcons.map(item => (
                <IconCard key={item.name} {...item} />
              ))}
            </div>
          </motion.div>

          {/* Dev Tools — full width */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass p-8 rounded-2xl border border-white/5 lg:col-span-2"
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
                <VscCode size={14} className="text-white" />
              </span>
              Dev Tools
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {toolIcons.map(item => (
                <IconCard key={item.name} {...item} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills