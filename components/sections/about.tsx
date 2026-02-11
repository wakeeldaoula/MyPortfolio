"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Brain, Cloud, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const education = [
  {
    degree: "BS Computer Science",
    institution: "UET Lahore",
    status: "Continued, 6th Semester",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate (Engineering)",
    institution: "Superior College Vehari Campus",
    status: "Completed",
    icon: BookOpen,
  },
]

const interests = [
  {
    title: "Machine Learning",
    description: "Building predictive models and implementing ML algorithms",
    icon: Brain,
  },
  {
    title: "Cloud Technologies",
    description: "Deploying solutions on AWS and Azure platforms",
    icon: Cloud,
  },
  {
    title: "Data-Driven Solutions",
    description: "Creating impactful insights from complex datasets",
    icon: Code,
  },
]

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know more about my background, education, and what drives my passion for data science.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Developer Image */}
              <div className="glass-effect rounded-2xl p-6 flex justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                  <Image
                    src="/developer.jpg"
                    alt="Muhammad Wakeel - Junior Data Scientist"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    👨‍💻
                  </span>
                  Who I Am
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I&apos;m Muhammad Wakeel, a passionate Junior Data Scientist currently pursuing my 
                  Bachelor&apos;s degree in Computer Science at UET Lahore. My journey in tech is driven 
                  by a deep curiosity for understanding data and building intelligent solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in transforming raw data into actionable insights using machine learning, 
                  statistical analysis, and modern deployment practices. Whether it&apos;s building 
                  predictive models or deploying end-to-end ML pipelines, I&apos;m always eager to 
                  tackle new challenges.
                </p>
              </div>

              {/* Interests */}
              <div className="grid gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:border-primary/50 transition-colors">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                          <interest.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{interest.title}</h4>
                          <p className="text-sm text-muted-foreground">{interest.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  🎓
                </span>
                Education
              </h3>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <Card className="overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
                      <CardContent className="p-6 pl-8">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                            <edu.icon className="w-7 h-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                            <p className="text-primary font-medium">{edu.institution}</p>
                            <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                              {edu.status}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 mt-8"
              >
                {[
                  { value: "5+", label: "Projects" },
                  { value: "3+", label: "ML Models" },
                  { value: "1+", label: "Years Learning" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="glass-effect rounded-xl p-4 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
