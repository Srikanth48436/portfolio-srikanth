import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaStar, FaMedal, FaSchool, FaUniversity } from 'react-icons/fa'

const educations = [
  {
    icon: FaSchool,
    iconGradient: 'from-cyan-500 to-blue-600',
    shadowColor: 'shadow-cyan-500/30',
    borderHover: 'hover:border-cyan-500/20',
    badgeBorder: 'border-cyan-500/30',
    tagBg: 'bg-cyan-500/15',
    tagText: 'text-cyan-400',
    tagBorder: 'border-cyan-500/20',
    year: '2018 – 2019',
    degree: '10th Standard (SSC)',
    institution: 'AUDISANKARA E.M SCHOOL',
    score: '10',
    scoreLabel: 'GPA',
    stars: 5,
    badge: 'Passed with Full Distinction',
    subjects: {
      left: { title: 'Core Subjects', list: ['Mathematics', 'Science', 'Social Studies', 'English'] },
      right: { title: 'Focus Areas', list: ['Mathematics', 'Physical Sciences', 'Biology', 'Telugu'] },
    },
    dotBulletLeft: 'bg-cyan-400',
    dotBulletRight: 'bg-blue-400',
  },
  {
    icon: FaGraduationCap,
    iconGradient: 'from-violet-500 to-purple-700',
    shadowColor: 'shadow-purple-500/30',
    borderHover: 'hover:border-purple-500/20',
    badgeBorder: 'border-purple-500/30',
    tagBg: 'bg-purple-500/15',
    tagText: 'text-purple-400',
    tagBorder: 'border-purple-500/20',
    year: '2019 – 2021',
    degree: 'Intermediate (MPC)',
    institution: 'SRI VEMA JUNIOR COLLEGE',
    score: '9.5',
    scoreLabel: 'GPA',
    stars: 5,
    badge: 'Passed with Full Distinction',
    subjects: {
      left: { title: 'Core Subjects', list: ['Mathematics', 'Physics', 'Chemistry', 'English'] },
      right: { title: 'Focus Areas', list: ['Calculus', 'Mechanics', 'Organic Chemistry', 'Problem Solving'] },
    },
    dotBulletLeft: 'bg-purple-400',
    dotBulletRight: 'bg-violet-400',
  },
  {
    icon: FaUniversity,
    iconGradient: 'from-purple-500 to-cyan-600',
    shadowColor: 'shadow-purple-500/30',
    borderHover: 'hover:border-cyan-500/20',
    badgeBorder: 'border-cyan-500/30',
    tagBg: 'bg-purple-500/15',
    tagText: 'text-purple-400',
    tagBorder: 'border-purple-500/20',
    year: '2021 – 2025',
    degree: 'B.Tech – Electronics & Communication Engineering',
    institution: 'NBKR Institute of Science and Technology',
    score: '8.05',
    scoreLabel: 'CGPA',
    stars: 4,
    badge: 'Graduated with Distinction — CGPA 8.05/10',
    subjects: {
      left: { title: 'Core Subjects', list: ['Signal Processing', 'Embedded Systems', 'Digital Communications', 'VLSI Design'] },
      right: { title: 'Electives & Focus', list: ['Machine Learning', 'Python Programming', 'Data Structures', 'AI Fundamentals'] },
    },
    dotBulletLeft: 'bg-cyan-400',
    dotBulletRight: 'bg-purple-400',
  },
]

const EducationCard = ({ edu, index, inView }) => {
  const Icon = edu.icon

  return (
    <div className="relative sm:pl-20 mb-10 last:mb-0">
      {/* Timeline Icon */}
      <div
        className={`hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-xl bg-gradient-to-br ${edu.iconGradient} items-center justify-center shadow-lg ${edu.shadowColor} z-10`}
      >
        <Icon size={20} className="text-white" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
        className={`glass rounded-2xl p-8 border border-white/5 ${edu.borderHover} transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <span
              className={`text-xs px-3 py-1 rounded-full ${edu.tagBg} ${edu.tagText} border ${edu.tagBorder}`}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {edu.year}
            </span>
            <h3
              className="text-xl sm:text-2xl font-bold text-white mt-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {edu.degree}
            </h3>
            <p
              className={`${edu.tagText} font-semibold text-base sm:text-lg mt-2`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {edu.institution}
            </p>
          </div>

          {/* Score Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.5 + index * 0.15, type: 'spring', bounce: 0.4 }}
            className={`glass px-5 py-4 rounded-2xl border ${edu.badgeBorder} text-center flex-shrink-0`}
          >
            <div
              className="text-3xl font-bold gradient-text"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {edu.score}
            </div>
            <div className="text-xs text-slate-400 mt-1">{edu.scoreLabel}</div>
            <div className="flex justify-center mt-2 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={10}
                  className={i < edu.stars ? 'text-yellow-400' : 'text-slate-600'}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="h-px bg-white/5 mb-6" />

        {/* Subjects Grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          <div>
            <h4
              className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {edu.subjects.left.title}
            </h4>
            <ul className="space-y-2">
              {edu.subjects.left.list.map(s => (
                <li key={s} className="flex items-center gap-2 text-sm text-slate-300">
                  <div className={`w-1.5 h-1.5 rounded-full ${edu.dotBulletLeft} flex-shrink-0`} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {edu.subjects.right.title}
            </h4>
            <ul className="space-y-2">
              {edu.subjects.right.list.map(s => (
                <li key={s} className="flex items-center gap-2 text-sm text-slate-300">
                  <div className={`w-1.5 h-1.5 rounded-full ${edu.dotBulletRight} flex-shrink-0`} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Badge */}
        <div className="p-4 rounded-xl bg-white/3 border border-white/5 flex items-center gap-3">
          <FaMedal className="text-yellow-400 flex-shrink-0" size={18} />
          <p className="text-sm text-slate-300">{edu.badge}</p>
        </div>
      </motion.div>
    </div>
  )
}

const Education = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="tag">Academic Background</span>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            The foundation that powers my engineering mindset
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="hidden sm:block absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-400 opacity-40" />

            {educations.map((edu, i) => (
              <EducationCard key={edu.degree} edu={edu} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education