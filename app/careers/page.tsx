"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Heart,
  Coffee,
  Zap,
  Shield,
  Target,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, vision, and wellness programs"
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Professional development, training, and clear career advancement paths"
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours, remote work options, and unlimited PTO"
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description: "Work with the latest technologies and trading platforms"
  }
];

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "New York, NY / Remote",
    type: "Full-time",
    description: "Build and maintain our trading platform using React, Node.js, and modern technologies.",
    requirements: ["5+ years experience", "React/Node.js", "Financial systems experience preferred"],
    salary: "$120k - $180k"
  },
  {
    title: "Quantitative Analyst",
    department: "Trading",
    location: "New York, NY",
    type: "Full-time", 
    description: "Develop and optimize trading algorithms and risk management systems.",
    requirements: ["PhD in Math/Physics/CS", "Python/R", "Financial modeling experience"],
    salary: "$150k - $250k"
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Manage our cloud infrastructure and deployment pipelines.",
    requirements: ["AWS/GCP experience", "Kubernetes", "CI/CD pipelines"],
    salary: "$100k - $160k"
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "New York, NY / Remote",
    type: "Full-time",
    description: "Drive product strategy and roadmap for our trading platform.",
    requirements: ["5+ years PM experience", "Fintech background", "Data-driven approach"],
    salary: "$130k - $200k"
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Design intuitive interfaces for complex trading workflows.",
    requirements: ["Portfolio required", "Figma/Sketch", "Financial UI experience preferred"],
    salary: "$90k - $140k"
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "New York, NY / Remote",
    type: "Full-time",
    description: "Help our clients succeed with our trading platform and services.",
    requirements: ["3+ years CS experience", "Trading knowledge", "Excellent communication"],
    salary: "$70k - $110k"
  }
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with the highest ethical standards in everything we do."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence and continuous improvement in our work."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe great things happen when talented people work together."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace new ideas and technologies to stay ahead of the curve."
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build the Future of Trading
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join a team of passionate professionals revolutionizing financial markets 
              through cutting-edge technology and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide how we work, make decisions, and treat each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Work at TradePro?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer competitive benefits and a culture that supports your growth and well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your next opportunity and help us shape the future of trading.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                              <Badge variant="outline">{position.department}</Badge>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {position.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {position.type}
                              </span>
                              <span className="font-medium text-primary">{position.salary}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{position.description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Key Requirements:</h4>
                          <div className="flex flex-wrap gap-2">
                            {position.requirements.map((req, reqIndex) => (
                              <Badge key={reqIndex} variant="secondary" className="text-xs">
                                {req}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 lg:ml-6">
                        <Button>
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Don't see a position that fits? We're always looking for talented people.
            </p>
            <Button variant="outline" size="lg">
              Send Us Your Resume
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of a team that's transforming how people trade and invest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}