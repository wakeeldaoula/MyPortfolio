"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/wakeeldaoula",
    color: "hover:text-white hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-w-125545280/",
    color: "hover:text-white hover:bg-blue-600",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:muhammadwakeel@example.com",
    color: "hover:text-white hover:bg-red-500",
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container-custom py-12 relative">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold gradient-text mb-2">
              Muhammad Wakeel
            </h3>
            <p className="text-sm text-muted-foreground">
              Junior Data Scientist
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full glass-effect flex items-center justify-center transition-all duration-300 ${link.color}`}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-muted-foreground"
        >
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()} Muhammad Wakeel. Built with
            <Heart className="w-4 h-4 text-red-500 inline mx-1" />
            using Next.js, TypeScript & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
