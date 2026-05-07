"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Calculator, 
  FileSpreadsheet, 
  Receipt, 
  Building2, 
  FileCheck, 
  BarChart3,
  Database,
  Monitor,
  BookOpen,
  Scale,
  Globe,
  Landmark
} from 'lucide-react'

const skillCategories = [
  {
    title: "Accounting Software",
    icon: Calculator,
    skills: [
      { name: "Tally Prime", level: 95 },
      { name: "Tally ERP 9", level: 95 },
      { name: "SAP (Basic)", level: 70 },
      { name: "QuickBooks", level: 75 },
    ]
  },
  {
    title: "Tax & Compliance",
    icon: Receipt,
    skills: [
      { name: "GST Returns & Filing", level: 95 },
      { name: "TDS Management", level: 95 },
      { name: "VAT Compliance", level: 85 },
      { name: "Tax Planning", level: 85 },
    ]
  },
  {
    title: "Financial Operations",
    icon: BarChart3,
    skills: [
      { name: "Financial Statements", level: 90 },
      { name: "Bank Reconciliation", level: 95 },
      { name: "Audit Preparation", level: 90 },
      { name: "Budgeting & Forecasting", level: 85 },
    ]
  },
  {
    title: "Tools & Technology",
    icon: Monitor,
    skills: [
      { name: "MS Excel (Advanced)", level: 90 },
      { name: "MS Office Suite", level: 90 },
      { name: "ERP Systems", level: 80 },
      { name: "Cloud Accounting", level: 75 },
    ]
  },
]

const coreCompetencies = [
  { name: "IFRS Compliance", icon: Globe },
  { name: "Financial Analysis", icon: BarChart3 },
  { name: "Ledger Management", icon: BookOpen },
  { name: "Debtors & Creditors", icon: Database },
  { name: "Bank Statements", icon: Landmark },
  { name: "Statutory Compliance", icon: Scale },
  { name: "Audit Coordination", icon: FileCheck },
  { name: "Non-Profit Accounts", icon: Building2 },
  { name: "MIS Reporting", icon: FileSpreadsheet },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 section-alt relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3">
            Expertise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Skills & <span className="text-primary">Proficiencies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Comprehensive expertise in accounting software, financial operations, and regulatory compliance 
            built over 14 years of professional experience.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="professional-card rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 0.8, delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3, ease: "easeOut" }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-serif text-xl text-foreground text-center mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((competency, index) => {
              const Icon = competency.icon
              return (
                <motion.div
                  key={competency.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-default"
                >
                  <Icon className="w-4 h-4" />
                  <span>{competency.name}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* International Standards Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-primary/5 border border-primary/10 rounded-xl">
            <Globe className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground">
              Familiar with <strong>IFRS</strong>, <strong>US GAAP</strong>, and <strong>GCC VAT</strong> regulations
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
