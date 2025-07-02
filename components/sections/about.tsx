"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Heart } from "lucide-react"

export function About() {
  const skills = [
    "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", 
    "Framer Motion", "HTML5", "CSS3", "Node.js", "Git", "Figma", "Responsive Design"
  ]

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Bringing designs to life with pixel-perfect precision"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for lightning-fast load times and smooth interactions"
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "Creating intuitive interfaces that users love to interact with"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            I'm a passionate frontend developer with a love for creating beautiful, 
            functional web experiences. I specialize in modern React applications 
            and have a keen eye for design and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <highlight.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Experience</h3>
              <div className="space-y-3">
                <div className="glass p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary">5+ Years</h4>
                  <p className="text-sm text-muted-foreground">Frontend Development</p>
                </div>
                <div className="glass p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary">50+ Projects</h4>
                  <p className="text-sm text-muted-foreground">Successfully Delivered</p>
                </div>
                <div className="glass p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary">100% Client</h4>
                  <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}