"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Sparkles, Code } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const projects = [
  {
    title: "Farmer Bot",
    description:
      "An intelligent agricultural assistant that predicts crop yield and provides personalized farming suggestions based on soil and weather conditions.",
    image: "/images/projects/farmers-bot.png",
    emoji: "🌾",
    tags: ["Machine Learning", "Streamlit", "Agriculture", "NLP"],
    link: "https://huggingface.co/spaces/Wake-el601/FarmersBot",
    github: "https://github.com/wakeeldaoula/Farmers-Bot",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "hover:border-green-500/50",
  },
  {
    title: "WhatsApp Chat Analyzer",
    description:
      "A comprehensive tool to analyze WhatsApp group chats, providing insights on messaging patterns, activity statistics, and word cloud visualizations.",
    image: "/images/projects/whatsapp-analyzer.png",
    emoji: "💬",
    tags: ["NLP", "Data Analysis", "Visualization", "Python"],
    link: "https://huggingface.co/spaces/Wake-el601/WhatsappChatAnalyzer",
    github: "https://github.com/wakeeldaoula/Whatsapp-Chat-Analyzer",
    gradient: "from-green-400/20 to-teal-500/20",
    borderColor: "hover:border-teal-500/50",
  },
  {
    title: "Car Price Predictor",
    description:
      "A machine learning model that predicts used car prices based on various features like brand, model year, mileage, and condition.",
    image: "/images/projects/car-price.png",
    emoji: "🚗",
    tags: ["Regression", "Scikit-Learn", "Feature Engineering", "Streamlit"],
    link: "https://huggingface.co/spaces/Wake-el601/CarPricePredictor",
    github: "https://github.com/wakeeldaoula/CarPricePredictor",
    gradient: "from-blue-500/20 to-indigo-500/20",
    borderColor: "hover:border-blue-500/50",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "A classification model that detects fraudulent credit card transactions using advanced ML techniques and handles imbalanced datasets.",
    image: "/images/projects/fraud-detection.png",
    emoji: "💳",
    tags: ["Classification", "Fraud Detection", "Imbalanced Data", "ML"],
    link: "https://huggingface.co/spaces/Wake-el601/Credit_Card_Fraud_Detection",
    github: "https://github.com/wakeeldaoula/Credit-Card-Fraud-Detection",
    gradient: "from-red-500/20 to-orange-500/20",
    borderColor: "hover:border-red-500/50",
  },
  {
    title: "House Price Prediction",
    description:
      "A regression model predicting house prices using various property features, with comprehensive data preprocessing and feature selection.",
    image: "/images/projects/house-price.png",
    emoji: "🏠",
    tags: ["Regression", "Real Estate", "Data Preprocessing", "Python"],
    link: "https://huggingface.co/spaces/Wake-el601/FakeNewsPredictor",
    github: "https://github.com/wakeeldaoula/HousePricePrediction",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "hover:border-purple-500/50",
  },
]

// Component to handle project image with fallback to emoji
function ProjectImage({ src, alt, emoji }: { src: string; alt: string; emoji: string }) {
  const [imageError, setImageError] = useState(false)

  if (imageError || !src.startsWith('/')) {
    return (
      <motion.span
        className="text-7xl"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {emoji}
      </motion.span>
    )
  }

  return (
    <motion.div
      className="relative w-full h-full"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setImageError(true)}
      />
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore my data science projects showcasing machine learning models, data analysis, and real-world applications.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card
                  className={`h-full overflow-hidden transition-all duration-500 ${project.borderColor} hover:shadow-2xl hover:shadow-primary/10`}
                >
                  {/* Project Image/Icon */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <ProjectImage 
                      src={project.image} 
                      alt={project.title} 
                      emoji={project.emoji} 
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Sparkle effect */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0 flex gap-2">
                    <Button
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="group/code"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Source Code"
                      >
                        <Code className="w-4 h-4 mr-1" />
                        <span>Code</span>
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/wakeeldaoula"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
