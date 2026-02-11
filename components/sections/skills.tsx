"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  Database,
  Code2,
  BarChart3,
  Cloud,
  Wrench,
  Rocket,
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const skillCategories = [
  {
    title: "Programming & Data",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Scikit-Learn"],
  },
  {
    title: "Data Science",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    skills: ["Statistics", "Data Cleaning", "Feature Engineering", "EDA", "Machine Learning"],
  },
  {
    title: "Visualization",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: ["Power BI", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    color: "from-green-500 to-emerald-500",
    skills: ["AWS (Basic)", "Azure (Basic)", "Cloud Deployment"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "from-yellow-500 to-orange-500",
    skills: ["Kaggle", "HuggingFace", "GitHub", "Jupyter"],
  },
  {
    title: "Deployment",
    icon: Rocket,
    color: "from-indigo-500 to-purple-500",
    skills: ["Streamlit", "Model Deployment", "API Development"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building data-driven solutions and machine learning applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group"
              >
                <div className="glass-effect rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.3,
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="skill"
                          className="hover:scale-110 transition-transform cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Skills Display */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-semibold mb-6">All Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "Python",
                "SQL",
                "Pandas",
                "NumPy",
                "Scikit-Learn",
                "Statistics",
                "Data Cleaning",
                "Feature Engineering",
                "Power BI",
                "AWS",
                "Azure",
                "Kaggle",
                "HuggingFace",
                "GitHub",
                "Streamlit",
                "Machine Learning",
                "EDA",
                "Data Visualization",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                  }}
                  className="px-4 py-2 rounded-full glass-effect text-sm font-medium cursor-default hover:border-primary/50 transition-all"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
