import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBrain, FaCode, FaRocket, FaGraduationCap } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const Counter = ({ end, suffix = '', label, icon: Icon, color }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = end / 50
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 30)
    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <div ref={ref} className="glass glass-hover p-6 rounded-2xl text-center gradient-border">
      <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${color}`}>
        <Icon size={22} className="text-white" />
      </div>
      <div className="text-4xl font-bold gradient-text mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        {count}{suffix}
      </div>
      <div className="text-slate-400 text-sm font-medium">{label}</div>
    </div>
  )
}

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag">Who I Am</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Passionate engineer bridging the gap between data and intelligence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5 text-slate-300 text-base leading-relaxed">
              <p>
                I'm a <span className="text-white font-semibold">B.Tech graduate</span> in
                Electronics & Communication Engineering from{' '}
                <span className="text-purple-400 font-medium">NBKR Institute of Science and Technology</span>{' '}
                with a CGPA of <span className="text-cyan-400 font-semibold">8.05</span>.
              </p>
              <p>
                Deeply passionate about{' '}
                <span className="gradient-text font-semibold">Artificial Intelligence</span>,{' '}
                Machine Learning, Data Science, and Python Development. I love solving
                complex problems and turning raw data into actionable insights.
              </p>
              <p>
                My journey spans from building classical ML models to deep learning
                systems. I've gained hands-on industry experience as an{' '}
                <span className="text-blue-400 font-medium">AI/ML Intern at Rubixe AI</span>,
                working on real-world AI-driven business solutions.
              </p>
              <p>
                Focused on engineering systems that don't just work — but create{' '}
                <span className="text-white font-semibold">meaningful impact</span> at scale.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {['Python', 'TensorFlow', 'Scikit-Learn', 'NLP', 'Computer Vision', 'Flask'].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full text-sm font-medium glass border border-purple-500/20 text-purple-300"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 gap-5"
          >
            <Counter
              end={3}
              suffix="+"
              label="ML Projects Built"
              icon={FaRocket}
              color="bg-gradient-to-br from-blue-500 to-blue-700"
            />
            <Counter
              end={1}
              suffix=""
              label="Industry Internship"
              icon={FaBrain}
              color="bg-gradient-to-br from-purple-500 to-purple-700"
            />
            <Counter
              end={8.05}
              suffix=""
              label="CGPA (×100)"
              icon={FaGraduationCap}
              color="bg-gradient-to-br from-cyan-500 to-cyan-700"
            />
            <Counter
              end={5}
              suffix="+"
              label="Tech Stacks"
              icon={FaCode}
              color="bg-gradient-to-br from-violet-500 to-violet-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
