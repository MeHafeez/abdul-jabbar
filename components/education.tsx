"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, BookOpen, Medal, Shield } from 'lucide-react'

const education = [
  {
    title: "CA IPCC (Intermediate)",
    institution: "Institute of Chartered Accountants of India (ICAI)",
    description: "Successfully cleared the Intermediate level of the prestigious Chartered Accountancy program, demonstrating expertise in accounting principles, auditing, taxation, and business laws.",
    icon: Award,
    highlight: true,
  },
  {
    title: "CA Foundation (CPT)",
    institution: "Institute of Chartered Accountants of India (ICAI)",
    description: "Completed the Common Proficiency Test, establishing foundational knowledge in accounting, mercantile law, economics, and quantitative aptitude.",
    icon: Medal,
    highlight: false,
  },
  {
    title: "Bachelor of Science (B.Sc.)",
    institution: "University Graduate",
    description: "Graduated with a Bachelor of Science degree, building a strong foundation in analytical thinking, logical reasoning, and scientific methodology.",
    icon: GraduationCap,
    highlight: false,
  },
]

const certifications = [
  {
    title: "Information Technology Training (ITT)",
    issuer: "Institute of Chartered Accountants of India",
    description: "Certified in IT applications for accounting and auditing, covering computerized accounting systems, spreadsheet applications, and accounting software.",
    icon: BookOpen,
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 section-alt relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3">
            Academic Background
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A solid academic foundation from India&apos;s most prestigious accounting institution.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {education.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative professional-card rounded-xl p-6 transition-all duration-300 ${
                  item.highlight ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {/* Highlight badge */}
                {item.highlight && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Professional Qualification
                  </div>
                )}

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                  item.highlight 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-primary mb-3">{item.institution}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="font-serif text-xl text-foreground text-center mb-6">
            Professional Certifications
          </h3>
          
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-6 professional-card rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-1">{cert.title}</h4>
                  <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ICAI Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-xl shadow-sm">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Registered with <span className="text-foreground font-medium">Institute of Chartered Accountants of India</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
