import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { MdEmail, MdPhone, MdSend } from 'react-icons/md'
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

const contactInfo = [
  {
    icon: MdEmail,
    label: 'Email',
    value: 'srikanthchitteti36@gmail.com',
    href: 'mailto:srikanthchitteti36@gmail.com',
    color: 'text-blue-400',
  },
  {
    icon: MdPhone,
    label: 'Phone',
    value: '+91 7396836269',
    href: 'tel:+917396836269',
    color: 'text-purple-400',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/chittetisrikanth',
    href: 'https://www.linkedin.com/in/srikanth-chitteti-a3485a2b0/',
    color: 'text-cyan-400',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Srikanth48436',
    href: 'https://github.com/Srikanth48436',
    color: 'text-green-400',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Bangalore, India',
    href: null,
    color: 'text-red-400',
  },
]

const Contact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()

    const serviceId = 'service_xxxxx'
    const templateId = 'template_xxxxx'
    const publicKey = 'YOUR_PUBLIC_KEY'

    emailjs.send(serviceId, templateId, form, publicKey)
      .then(() => {
        setSent(true)
        setTimeout(() => setSent(false), 4000)
        setForm({ name: '', email: '', message: '' })
      })
      .catch(error => {
        console.error('EmailJS send error:', error)
        alert('Sorry, something went wrong. Please try again later or email me directly.')
      })
  }

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="tag">Let's Talk</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open to new opportunities, collaborations, and interesting projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Let's build something great together
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Whether it's a job opportunity, freelance project, collaboration, or
              just a conversation about AI — I'm always happy to connect.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                const inner = (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 glass p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all duration-200 group"
                  >
                    <div className={`w-10 h-10 rounded-lg glass flex items-center justify-center ${item.color}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{item.label}</div>
                      <div className="text-sm text-white font-medium group-hover:text-purple-300 transition-colors">{item.value}</div>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {inner}
                  </a>
                ) : inner
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass p-8 rounded-2xl border border-white/5 space-y-5"
            >
              <div>
                <label className="block text-sm text-slate-400 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Chitteti Srikanth"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 transition-colors text-sm"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 transition-colors text-sm"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 transition-colors text-sm resize-none"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center text-base py-4"
              >
                {sent ? '✅ Message Sent!' : <><MdSend size={18} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
