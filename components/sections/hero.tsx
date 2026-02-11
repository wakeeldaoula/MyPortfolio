"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react"

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div
        className="container-custom relative z-10 text-center"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm font-medium text-primary">
            <Sparkles className="w-4 h-4" />
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Muhammad Wakeel</span>
        </motion.h1>

        {/* Role with Typing Animation */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Junior Data Scientist
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A passionate data scientist specializing in{" "}
          <span className="text-primary font-medium">machine learning</span>,{" "}
          <span className="text-accent font-medium">data analysis</span>, and{" "}
          <span className="text-primary font-medium">end-to-end model deployment</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="xl" asChild>
            <a href="/resume.pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
          <Button size="xl" variant="outline" asChild>
            <a href="#contact">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
          </Button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 hidden lg:block"
          animate={floatingAnimation}
        >
          <div className="w-20 h-20 rounded-2xl glass-effect flex items-center justify-center">
            <span className="text-3xl">🐍</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 hidden lg:block"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        >
          <div className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 hidden lg:block"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        >
          <div className="w-14 h-14 rounded-xl glass-effect flex items-center justify-center">
            <span className="text-xl">🤖</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
