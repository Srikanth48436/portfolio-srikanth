import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaBrain, FaLeaf, FaFileAlt } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'

const projects = [
  {
    icon: FaBrain,
    iconColor: 'from-blue-500 to-blue-700',
    tag: 'Regression Model',
    title: 'House Price Prediction System',
    description:
      'Built end-to-end ML pipeline to predict house prices. Extensive feature engineering and model evaluation across multiple regression algorithms.',
    features: ['Data Preprocessing', 'Feature Engineering', 'Model Evaluation', 'Regression Analysis'],
    stack: ['Python', 'Pandas', 'Scikit-Learn'],
    github: 'https://github.com/Srikanth48436/House-price-prediction',
    demo: 'https://house-price-prediction-2-r8bn.onrender.com/',
    accentFrom: '#3B82F6',
    accentTo: '#6366F1',
  },
  {
    icon: FaLeaf,
    iconColor: 'from-green-500 to-emerald-700',
    tag: 'Deep Learning Model',
    title: 'Rice Leaf Disease Detection',
    description:
      'CNN-based deep learning model that classifies rice plant diseases from leaf images. Enables early detection to minimize crop loss.',
    features: ['Image Processing', 'CNN Architecture', 'Disease Classification', 'OpenCV Pipeline'],
    stack: ['Python', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/Srikanth48436/rice_leaf_disease',
    accentFrom: '#10B981',
    accentTo: '#3B82F6',
  },
  {
    icon: FaFileAlt,
    iconColor: 'from-purple-500 to-violet-700',
    tag: 'Classification Model',
    title: 'Credit Risk Prediction using Machine Learning',
    description:
      'Developed an end-to-end Credit Risk Prediction model using Python, Pandas, Scikit-learn, LightGBM, and SMOTE by integrating customer demographics, account, and enquiry datasets to identify potential loan defaulters.',
    features: ['Data Preprocessing', 'Feature Engineering', 'Imbalance Handling', 'Model Evaluation'],
    stack: ['Python', 'GradientBoosting', 'SMOTE'],
    github: 'https://github.com/Srikanth48436/credit-card-risk-project',
    demo: 'https://credit-card-risk-project.onrender.com',
    accentFrom: '#8B5CF6',
    accentTo: '#06B6D4',
  },
]

const ProjectCard = ({ project, index, inView }) => {
  const { icon: Icon, iconColor, tag, title, description, features, stack, github, demo, accentFrom, accentTo } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-300 group flex flex-col"
      whileHover={{ y: -6 }}
    >
      {/* Card header gradient bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})` }}
      />

      <div className="p-7 flex flex-col flex-1">
        {/* Icon + Tag */}
        <div className="flex items-center justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconColor} flex items-center justify-center shadow-lg`}>
            <Icon size={20} className="text-white" />
          </div>
          <span
            className="text-xs font-medium px-3 py-1 rounded-full glass border border-white/10 text-slate-400"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {tag}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6 flex-1">
          {features.map(f => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map(s => (
            <span
              key={s}
              className="px-3 py-1 rounded-lg text-xs font-medium glass border border-white/8 text-cyan-300"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-1 justify-center text-sm py-2.5"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 justify-center text-sm py-2.5"
          >
            <FaExternalLinkAlt size={12} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="tag">What I've Built</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world AI/ML applications — from data to deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Srikanth48436"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FaGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
