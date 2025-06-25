"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Zap,
  Shield,
  Target,
  BarChart3,
  Clock,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Signals",
    description:
      "Get real-time trading signals with 99.9% uptime and millisecond precision.",
    color: "text-yellow-500",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Advanced risk assessment with automated stop-loss and take-profit levels.",
    color: "text-emerald-500",
  },
  {
    icon: Target,
    title: "Precision Automation",
    description:
      "AI-powered automation that executes trades with institutional-grade accuracy.",
    color: "text-blue-500",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Comprehensive analytics and reporting to track your trading performance.",
    color: "text-purple-500",
  },
];

const stats = [
  { label: "Active Traders", value: "25,000+", icon: Users },
  { label: "Win Rate", value: "87%", icon: Target },
  { label: "Avg. Monthly Return", value: "23%", icon: TrendingUp },
  { label: "Response Time", value: "<1ms", icon: Clock },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Professional Trader",
    content:
      "TradePro's signals have transformed my trading. The precision and speed are unmatched.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Fund Manager",
    content:
      "The automation features save me hours daily while maintaining excellent performance.",
    avatar:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Day Trader",
    content:
      "Best investment I've made for my trading career. ROI was immediate.",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2.5">
              <Badge variant="outline" className="mb-4 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Trading Platform
              </Badge>{" "}
              <Badge variant="outline" className="mb-4 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Trading Platform
              </Badge>{" "}
              <Badge variant="outline" className="mb-4 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Trading Platform
              </Badge>
            </div>

            <h1 className="text-center lg:text-6xl sm:text-5xl font-bold text-4xl text-slate-900 dark:text-white tracking-tight mb-6">
              Precision Automation for Serious{" "}
              <span className="py-2 gradient-text !bg-clip-text text-transparent inline-block">
                Prop-Traders
              </span>
            </h1>

            <p className="text-base text-[#374758] dark:text-zinc-100 mb-8 max-w-3xl mx-auto">
              TechNests is the next-generation platform for serious traders and
              trading communities. Get premium prop trading signals and unleash
              automated content that builds authority and drives traffic — all
              from one powerful system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/subscription">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Professional Traders Choose TradePro
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with proven
              trading strategies to deliver consistent, profitable results.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4`}
                    >
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Trusted by Thousands of Traders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our community of professional traders has to say about
              TradePro.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of successful traders who trust TradePro for their
              daily trading needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/subscription">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
