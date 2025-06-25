"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  Shield,
  Zap,
  Globe,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We believe in complete transparency with our trading performance and methodologies."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly pushing the boundaries of what's possible in automated trading technology."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to delivering exceptional results and exceeding our clients' expectations."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive community of traders who learn and grow together."
  }
];

const stats = [
  { label: "Years in Business", value: "8+" },
  { label: "Active Traders", value: "25,000+" },
  { label: "Countries Served", value: "50+" },
  { label: "Total Trades Executed", value: "2M+" }
];

const team = [
  {
    name: "Michael Chen",
    role: "CEO & Founder",
    bio: "Former Goldman Sachs quantitative analyst with 15+ years in algorithmic trading.",
    avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "MIT PhD in Computer Science, specializing in machine learning and financial markets.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "David Rodriguez",
    role: "Head of Trading",
    bio: "20+ years of trading experience across multiple asset classes and market conditions.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Emily Parker",
    role: "Head of Research",
    bio: "Former hedge fund researcher with expertise in quantitative analysis and risk management.",
    avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

const milestones = [
  {
    year: "2016",
    title: "Company Founded",
    description: "Started with a vision to democratize professional-grade trading tools."
  },
  {
    year: "2018",
    title: "First 1,000 Users",
    description: "Reached our first major milestone with traders from 15 countries."
  },
  {
    year: "2020",
    title: "AI Integration",
    description: "Launched our proprietary AI-powered signal generation system."
  },
  {
    year: "2022",
    title: "Mobile Platform",
    description: "Released award-winning mobile apps for iOS and Android."
  },
  {
    year: "2024",
    title: "25,000+ Traders",
    description: "Celebrating our growing community of successful traders worldwide."
  }
];

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              About TradePro
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionizing Trading
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Through Technology
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded in 2016, TradePro has grown from a small startup to a global leader 
              in automated trading solutions, serving over 25,000 traders worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                TradePro was born from a simple observation: retail traders deserved access 
                to the same sophisticated tools and strategies that institutional investors 
                had been using for decades.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our founder, Michael Chen, spent over a decade at Goldman Sachs developing 
                quantitative trading algorithms. Frustrated by the lack of accessible, 
                professional-grade tools for individual traders, he set out to change the industry.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we're proud to serve thousands of traders worldwide, helping them 
                achieve consistent profitability through our advanced AI-powered platform.
              </p>
              <Button size="lg" asChild>
                <Link href="/subscription">
                  Join Our Community
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 p-1">
                <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                  <TrendingUp className="h-32 w-32 text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we serve our community.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced team combines decades of trading expertise with cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to transform trading.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div key={milestone.year} variants={fadeInUp}>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="text-lg px-4 py-2">
                      {milestone.year}
                    </Badge>
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
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
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Become part of our growing community of successful traders.
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/subscription">
                Start Your Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}