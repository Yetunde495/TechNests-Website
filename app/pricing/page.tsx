"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Check, 
  X, 
  Zap, 
  Shield, 
  Crown,
  ArrowRight,
  Star
} from 'lucide-react';
import Link from 'next/link';

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

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for individual traders getting started",
    icon: Zap,
    color: "border-border",
    popular: false,
    features: [
      { name: "5 Trading Signals/Day", included: true },
      { name: "Basic Risk Management", included: true },
      { name: "Email Support", included: true },
      { name: "Mobile App Access", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Advanced Automation", included: false },
      { name: "Priority Support", included: false },
      { name: "Custom Strategies", included: false },
    ]
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "For serious traders who want advanced features",
    icon: Shield,
    color: "border-primary",
    popular: true,
    features: [
      { name: "25 Trading Signals/Day", included: true },
      { name: "Advanced Risk Management", included: true },
      { name: "Priority Support", included: true },
      { name: "Mobile App Access", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Advanced Automation", included: true },
      { name: "Custom Alerts", included: true },
      { name: "Custom Strategies", included: false },
    ]
  },
  {
    name: "Enterprise",
    price: "$399",
    period: "/month",
    description: "For professional fund managers and institutions",
    icon: Crown,
    color: "border-yellow-500",
    popular: false,
    features: [
      { name: "Unlimited Trading Signals", included: true },
      { name: "Institutional Risk Management", included: true },
      { name: "24/7 Dedicated Support", included: true },
      { name: "Mobile App Access", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Advanced Automation", included: true },
      { name: "Custom Alerts", included: true },
      { name: "Custom Strategies", included: true },
    ]
  }
];

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 7-day free trial for all new users. No credit card required to start."
  },
  {
    question: "What trading markets do you support?",
    answer: "We support Forex, Stocks, Commodities, and Cryptocurrencies across all major exchanges."
  },
  {
    question: "How accurate are your trading signals?",
    answer: "Our signals have an average accuracy rate of 87%, with detailed performance metrics available in your dashboard."
  },
  {
    question: "Do you provide trading education?",
    answer: "Yes, we provide comprehensive trading education, webinars, and one-on-one coaching sessions."
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees or hidden costs. You only pay the monthly subscription fee."
  }
];

export default function Pricing() {
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
              <Star className="w-4 h-4 mr-2" />
              Choose Your Plan
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start with a 7-day free trial. No credit card required. 
              Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div key={plan.name} variants={fadeInUp}>
                <Card className={`relative h-full ${plan.color} ${plan.popular ? 'border-2 shadow-lg scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-full ${plan.popular ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        <plan.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <Button 
                      className={`w-full ${plan.popular ? '' : 'variant-outline'}`} 
                      size="lg"
                      asChild
                    >
                      <Link href="/subscription">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    
                    <div className="space-y-3 pt-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          {feature.included ? (
                            <Check className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground mr-3 flex-shrink-0" />
                          )}
                          <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
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
              Ready to Start Trading Smarter?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of successful traders. Start your free trial today.
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/subscription">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}