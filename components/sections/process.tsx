"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Palette, Code, Rocket, TestTube, Handshake } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Discovery & Planning",
      description: "We start with understanding your needs, goals, and target audience to create a solid foundation.",
      duration: "1-2 weeks"
    },
    {
      icon: Palette,
      title: "Design & Prototyping",
      description: "Creating wireframes and prototypes to visualize the user experience and interface design.",
      duration: "2-3 weeks"
    },
    {
      icon: Code,
      title: "Development",
      description: "Building the application with clean, maintainable code using modern technologies.",
      duration: "4-8 weeks"
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description: "Rigorous testing across devices and browsers to ensure perfect functionality.",
      duration: "1-2 weeks"
    },
    {
      icon: Rocket,
      title: "Launch & Deployment",
      description: "Deploying your application to production with proper optimization and monitoring.",
      duration: "1 week"
    },
    {
      icon: Handshake,
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your application running smoothly.",
      duration: "Ongoing"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Process</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A proven methodology to deliver exceptional results, from initial concept to successful launch
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-primary hidden md:block" />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center glass border-2 border-primary/20 z-10">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-full animate-ping" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}