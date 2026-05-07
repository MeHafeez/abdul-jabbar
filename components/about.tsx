"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Target, Users, CheckCircle } from 'lucide-react'

const stats = [
  { value: "14+", label: "Years Experience", icon: Briefcase },
  { value: "50+", label: "Clients Served", icon: Users },
  { value: "CA", label: "IPCC Qualified", icon: GraduationCap },
  { value: "100%", label: "Compliance Rate", icon: Target },
]

const highlights = [
  "Expertise in International Financial Reporting Standards (IFRS)",
  "Proficient in US GAAP and local tax regulations",
  "Experience with multinational corporations",
  "Strong analytical and problem-solving skills",
  "Excellent communication and team collaboration",
  "Adaptable to diverse work environments",
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3">
            About Me
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Professional <span className="text-primary">Background</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A dedicated finance professional committed to delivering excellence in accounting and financial management.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left content - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="professional-card rounded-xl p-8 space-y-6">
              <p className="text-foreground leading-relaxed">
                I am a seasoned Senior Accountant with over <strong className="text-primary">14 years of comprehensive experience</strong> in 
                financial management, taxation, and compliance. My journey has equipped me with deep expertise in 
                maintaining books of accounts, GST compliance, and TDS operations across diverse industries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently working with Vaishnavi Group since August 2011, I have been instrumental in handling 
                complex financial operations including preparation of Financial Statements for prestigious 
                organizations like Indian Red Cross Society, The Tagore Memorial Theatre Trust, and Bharatiya Vidya Bhavan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My ability to deal with people diplomatically combined with my willingness to learn and adapt 
                makes me a valuable team facilitator. I am actively seeking international opportunities 
                in <strong className="text-foreground">USA, UAE, Saudi Arabia, and other Gulf countries</strong> where I can contribute my expertise 
                to global organizations.
              </p>
            </div>

            {/* Objective */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="professional-card rounded-xl p-6 border-accent-left"
            >
              <h3 className="font-serif text-lg text-foreground mb-3">Career Objective</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To apply my knowledge and skills in challenging assignments as part of a progressive 
                organization that provides immense opportunities to grow intellectually, technically, 
                and professionally while contributing to organizational goals and objectives.
              </p>
            </motion.div>

            {/* Highlights for International Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="professional-card rounded-xl p-6"
            >
              <h3 className="font-serif text-lg text-foreground mb-4">Why Choose Me</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Stats - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="professional-card rounded-xl p-6 text-center transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="font-serif text-3xl text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Personal Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid sm:grid-cols-3 gap-6"
        >
          {[
            { 
              title: "Team Facilitator", 
              description: "Skilled at dealing with people diplomatically and leading collaborative efforts across departments" 
            },
            { 
              title: "Adaptable Professional", 
              description: "Quick to learn new systems, technologies, and adapt to diverse cultural work environments" 
            },
            { 
              title: "Globally Flexible", 
              description: "Open to relocation, rotational shifts, and working across different time zones" 
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="p-6 border-t-2 border-primary hover:bg-secondary/50 transition-colors duration-300 rounded-b-xl"
            >
              <span className="text-accent font-mono text-sm">0{index + 1}</span>
              <h3 className="font-serif text-lg text-foreground mt-2 mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
