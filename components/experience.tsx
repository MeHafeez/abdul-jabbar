"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react'

const experiences = [
  {
    company: "Vaishnavi Group",
    position: "Senior Accountant",
    location: "Guntur, Andhra Pradesh, India",
    period: "August 2011 - Present",
    duration: "14+ Years",
    description: "Leading comprehensive financial operations and accounting processes for a diversified business group, ensuring accuracy, compliance, and timely reporting across all financial functions.",
    responsibilities: [
      "Day-to-day maintenance of Books of Accounts in Computerized Environment",
      "Complete maintenance of books of Accounts up to finalization",
      "Monthly Ledger Scrutiny for accuracy and compliance verification",
      "Filing of GST returns and timely payment of respective taxes",
      "Reconciliation of Banks, Debtors, and Creditors accounts",
      "Monthly TDS payments and Quarterly TDS Return filing",
      "Generation of TDS Certificates for all stakeholders",
      "Preparation of Financial Statements for Non-trading concerns",
      "Quarterly audit coordination with Chartered Accountants",
    ],
    achievements: [
      { title: "Indian Red Cross Society", desc: "Managed complete financial statements" },
      { title: "The Tagore Memorial Theatre Trust", desc: "Handled audit and compliance" },
      { title: "RCR Orchid & Bharatiya Vidya Bhavan", desc: "Prepared annual financial reports" },
    ]
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3">
            Career Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A proven track record of delivering excellence in financial management and accounting operations.
          </p>
        </motion.div>

        {/* Experience Cards */}
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="professional-card rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-primary p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-2">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-primary-foreground mb-2">
                      {exp.position}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-primary-foreground/70 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-2xl font-serif text-primary-foreground font-semibold">{exp.duration}</p>
                    <p className="text-xs text-primary-foreground/70 uppercase tracking-wider">Tenure</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                <p className="text-muted-foreground mb-8 leading-relaxed">{exp.description}</p>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
                      <span className="w-8 h-px bg-primary" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
                      <span className="w-8 h-px bg-primary" />
                      Notable Achievements
                    </h4>
                    <div className="space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                          className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg"
                        >
                          <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{achievement.title}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{achievement.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Ready for New Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 bg-accent/5 border border-accent/20 rounded-xl">
            <div className="flex items-center gap-2 text-accent">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="font-medium">Open to Opportunities</span>
            </div>
            <span className="text-sm text-muted-foreground">
              Actively seeking Senior Accountant / Finance Manager roles in USA, UAE, Saudi Arabia & Gulf
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
