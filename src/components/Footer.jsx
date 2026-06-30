import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiOutlineRobot } from 'react-icons/ai'

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <AiOutlineRobot className="text-white text-lg" />
              </div>
              <span className="font-bold text-xl gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Chitteti Srikanth
              </span>
            </div>
            <p className="text-slate-500 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              AI/ML Engineer · Data Scientist
            </p>
            <p className="text-slate-600 text-xs mt-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Transforming Data into Intelligent Solutions
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center">
            <nav className="flex gap-6 text-sm text-slate-400">
              {['Home', 'About', 'Projects', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={e => {
                    e.preventDefault()
                    const target = document.querySelector(`#${item.toLowerCase()}`)
                    if (target) target.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-white transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social + Back to top */}
          <div className="flex items-center justify-end gap-4">
            <div className="flex gap-3">
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
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 ml-2"
              aria-label="Back to top"
            >
              <FaArrowUp size={14} />
            </motion.button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            © {new Date().getFullYear()} Chitteti Srikanth. Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
