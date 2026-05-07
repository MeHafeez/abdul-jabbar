"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Copy, Check, Linkedin, Globe, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abduljabbaraca@gmail.com",
    href: "mailto:abduljabbaraca@gmail.com",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8121142332",
    href: "tel:+918121142332",
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Current Location",
    value: "Guntur, Andhra Pradesh, India",
    href: "https://maps.google.com/?q=Guntur,Andhra+Pradesh",
    copyable: false,
  },
]

const availability = [
  { region: "USA (EST/PST)", timezone: "Flexible hours" },
  { region: "UAE/Gulf", timezone: "Immediate relocation" },
  { region: "Remote", timezone: "Any timezone" },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: '', email: '', company: '', subject: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Looking for a dedicated accounting professional? I&apos;m actively seeking opportunities 
            in USA, UAE, and Gulf countries. Let&apos;s discuss how I can contribute to your organization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-foreground mb-4">Contact Information</h3>
              
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                      <a 
                        href={item.href}
                        target={item.label === "Current Location" ? "_blank" : undefined}
                        rel={item.label === "Current Location" ? "noopener noreferrer" : undefined}
                        className="text-sm text-foreground hover:text-primary transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    </div>
                    {item.copyable && (
                      <button
                        onClick={() => handleCopy(item.value, index)}
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        aria-label={`Copy ${item.label}`}
                      >
                        {copiedIndex === index ? (
                          <Check className="w-4 h-4 text-accent" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5 bg-primary/5 border border-primary/10 rounded-xl"
            >
              <div className="flex items-center gap-2 text-primary mb-4">
                <Clock className="w-5 h-5" />
                <h4 className="font-medium">Availability</h4>
              </div>
              <div className="space-y-3">
                {availability.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{item.region}</span>
                    <span className="text-muted-foreground">{item.timezone}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-3">Connect</h4>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/abdul-jabbar-shaik-62469930b/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:abduljabbaraca@gmail.com", label: "Email" },
                  { icon: Globe, href: "#", label: "Portfolio" },
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? "_blank" : undefined}
                      rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="professional-card rounded-2xl p-6 sm:p-8">
              <h3 className="font-serif text-xl text-foreground mb-6">Send a Message</h3>
              
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground transition-all duration-200"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground transition-all duration-200"
                      placeholder="ABC Corporation"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground transition-all duration-200"
                      placeholder="Job Opportunity / Consultation"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground transition-all duration-200 resize-none"
                    placeholder="Tell me about the opportunity or how I can help..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-3.5 bg-primary text-primary-foreground font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-navy-deep transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : submitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
