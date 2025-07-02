"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Smartphone, Zap, Palette, Code, Search } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "SEO Optimized"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive designs that work beautifully on all devices",
      features: ["Mobile Optimization", "Touch Interactions", "Progressive Web Apps", "Cross-Platform"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast websites that provide exceptional user experience",
      features: ["Core Web Vitals", "Bundle Optimization", "Image Optimization", "Caching Strategies"]
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Converting designs into pixel-perfect, interactive interfaces",
      features: ["Figma to Code", "Animation", "Micro-interactions", "Accessibility"]
    },
    {
      icon: Code,
      title: "Code Review & Consulting",
      description: "Expert guidance on code quality, architecture, and best practices",
      features: ["Code Audits", "Architecture Review", "Performance Analysis", "Team Training"]
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      description: "Optimizing websites for search engines and tracking performance",
      features: ["Technical SEO", "Google Analytics", "Core Web Vitals", "Performance Monitoring"]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive frontend development services to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}