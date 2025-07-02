"use client"

import { motion } from "framer-motion"

const technologies = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "JavaScript", "HTML5", "CSS3", "Git", "Figma", "Vite"
]

export function TechMarquee() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies I Love</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building with the latest and greatest tools in the frontend ecosystem
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="mx-8 px-6 py-3 glass rounded-full border border-primary/20 flex-shrink-0"
            >
              <span className="text-lg font-medium bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}