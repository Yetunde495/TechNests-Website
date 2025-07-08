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
  Users,
  Target,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  ChevronRight,
  CircleCheckBig,
  LucideRocket,
  X,
  Bot,
  WalletCards,
  Clock,
  ThumbsUp,
  Star,
  Quote,
  Brain,
  Circle,
  User,
  CircleUser,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { cn } from "@/lib/utils";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { OverlayCopy, StickyDiv } from "@/components/ui/testScroll";
import { Timeline } from "@/components/ui/timeline";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "@/components/ui/avatar";
import { blogPosts, faqData } from "@/data/mockdata";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const stats = [
  {
    label: "Bots deployed",
    value: "1100+",
    icon: Bot,
    sublabel: "Across Apex, Topstep, Elite, and more",
  },
  {
    label: "Success rate",
    value: "78%",
    icon: CircleCheckBig,
    sublabel: "Funded account retention vs. 12% industry avg.",
  },
  {
    label: "Faster payout",
    value: "2.7x",
    icon: WalletCards,
    sublabel: "Time to first withdrawal",
  },
  {
    label: "Hrs saved daily",
    value: "6+",
    icon: Clock,
    sublabel: "Per trader",
  },
  {
    label: "Satisfaction",
    value: "94%",
    icon: ThumbsUp,
    sublabel: 'With "hands-off" mode',
  },
  {
    label: "Countries",
    value: "14+",
    icon: Clock,
    sublabel: "100% trader-owned accounts",
  },
];

const data = [
  {
    title: "Choose your prop firm and rules",
    content: (
      <div>
        <p className="mb-8 font-medium sm:text-lg text-base text-neutral-800 dark:text-neutral-200">
          Select your evaluation or funded prop firm (like Apex or Topstep),
          then input your trading rules — including daily loss limits, targets,
          and max positions.
        </p>
      </div>
    ),
  },
  {
    title: "Configure your preferences",
    content: (
      <div>
        <p className="mb-8 font-medium sm:text-lg text-base text-neutral-800 dark:text-neutral-200">
          Customize how your bot behaves: define entry signals, risk levels,
          trade sessions, and preferred instruments. Make it yours.{" "}
        </p>
      </div>
    ),
  },
  {
    title: "Plug into NinjaTrader",
    content: (
      <div>
        <p className="mb-8 font-medium sm:text-lg text-base text-neutral-800 dark:text-neutral-200">
          Connect the Technests automation engine to NinjaTrader on your local
          machine. No cloud, no delays — just direct execution.{" "}
        </p>
      </div>
    ),
  },
  {
    title: "Trade with precision — hands-free",
    content: (
      <div>
        <p className="mb-8 font-medium sm:text-lg text-base text-neutral-800 dark:text-neutral-200">
          Let the bot manage entries, exits, cooldowns, and rules without
          emotion or fatigue. Your strategy, automated.{" "}
        </p>
      </div>
    ),
  },
  {
    title: "Collect, review logs, optimize — repeat",
    content: (
      <div>
        <p className="mb-8 font-medium sm:text-lg text-base text-neutral-800 dark:text-neutral-200">
          Access detailed trading logs, performance stats, and session
          summaries. Refine your approach and scale confidently.{" "}
        </p>
      </div>
    ),
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Professional Trader",
    content:
      "Technests's signals have transformed my trading. The precision and speed are unmatched.",
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

export default function About() {
  const words = ["winning", "trading"];
  return (
    <div className="min-h-screen pt-24 lg:px-[5%]">
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
              About Technests
            </Badge>
            <motion.h1
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              className={cn(
                "relative mb-6 text-center text-4xl leading-normal font-bold tracking-tight md:text-7xl"
              )}
              layout
            >
              <div className="inline-block">
                We Build Bots. You Focus on <ContainerTextFlip words={words} />
                {/* <Blips /> */}
              </div>
            </motion.h1>
            <p className="md:text-xl text-base text-muted-foreground mb-8">
              Technests is the mission-driven, trader-first AI automation
              company empowering evaluation and funded traders to win —
              consistently, confidently, and without burnout.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-6 px-2 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center gap-4"
          >
            <LucideRocket className="mx-auto mb-4 text-[#08B0FF]" size={40} />
            <h2 className="md:text-2xl text-lg font-bold mb-2">OUR MISSION</h2>
            <p className="md:text-lg pb-4 text-muted-foreground">
              To unlock sustainable success for prop firm traders through
              intelligent automation, <br /> removing guesswork, enhancing
              discipline, and enabling payouts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why TechNests Exists Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#F6F7F8] dark:bg-[#151515BF] rounded-3xl gap-6 items-center max-w-full">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-5 px-[5%] py-28 max-sm:pt-4 max-sm:pb-10 max-sm:order-last"
            >
              <h2 className="text-xl md:text-3xl font-bold">
                WHY TECHNESTS EXISTS
              </h2>
              <p className="text-muted-foreground">
                Today, over 90% of traders fail prop firm evaluations.{" "}
                <strong>Not</strong> because they’re undisciplined.{""}
                <strong>Not</strong> because they lack edge.
              </p>
              <p className="text-muted-foreground">
                But because the evaluation process demands precision,
                consistency, and emotional control — every single day.
              </p>
              <p className="text-muted-foreground mb-4">
                We’ve walked this path. That’s why we built Technests: a
                full-stack automation system engineered for the{" "}
                <em>real-world chaos</em> of prop trading.
              </p>
              <Button size="lg" asChild>
                <Link href="/pricing">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full h-full flex items-center justify-center max-sm:order-1 max-sm:rounded-t-3xl sm:rounded-r-3xl py-20 md:py-28 px-[5%] overflow-hidden"
              style={{
                backgroundImage: `url('/assets/technest-bot.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></motion.div>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <div className="py-[12%] relative">
        <StickyDiv imgUrl={"/assets/technest-bot.png"} />
        <OverlayCopy>
          <p className="text-[#08B0FF] text-center my-1">
            WHAT MAKES US DIFFERENT
          </p>
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-2">
            We’re your trading brain — in a box.
          </h2>
          <p className="text-center md:text-lg mb-5">
            No Copy trading. No central signal farm. No cloud execution. Just
            1:1 automation <br /> that works exactly like <strong>you</strong>,
            only better{" "}
          </p>
          <section className="w-full flex flex-col justify-center items-center px-3 mt-5">
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl">
              <div className="flex-1 p-6 backdrop-blur-lg bg-white/30 dark:bg-black/30 text-zinc-200 rounded-lg shadow md:text-lg ">
                <p>
                  Technests is not just another trading tool. We’re not a signal
                  provider, marketplace, or brokerage. We’re your{" "}
                  <strong>personal trading assistant</strong> — built to enhance
                  your edge, discipline, and performance.
                </p>
              </div>
              <div className="flex-1 p-6 backdrop-blur-lg bg-white/30 dark:bg-black/30 text-zinc-200 rounded-lg shadow md:text-lg ">
                <p>
                  Our bots are designed to run locally, follow your firm’s
                  rules, and execute trades without ego or exhaustion. They
                  adapt to your unique style and preferences, ensuring you stay
                  in control at all times.
                </p>
              </div>
            </div>
          </section>
        </OverlayCopy>
      </div>

      {/* How Technest Works Section */}
      <section className="relative w-full bg-muted/50 overflow-clip ">
        <div className="max-w-6xl mx-auto">
          <Timeline data={data} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-center lg:text-5xl sm:text-4xl font-bold text-4xl mb-3 text-slate-900 dark:text-white tracking-tight ">
              Impact By The Numbers
            </h1>
            <p className="text-base text-[#374758] dark:text-zinc-100 mb-6 max-w-3xl mx-auto">
              Real results. Real traders. Proven performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pb-[9%] flex flex-col w-full justify-center items-center text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center flex flex-col justify-center items-center"
                >
                  <div className="flex justify-center items-center h-14 w-14 rounded-xl p-2 button-gradient text-white mb-2">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="md:text-3xl text-xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                  <p className="text-[#08B0FF] text-center my-1">
                    {stat.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <p className="text-[#08B0FF] text-center my-1 uppercase">
              The Technests Ecosystem
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Trade Smarter, Grow Faster
            </h2>
            <p className="md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete AI trading system that runs locally on your computer.
              No API required. No data shared. Just pure trading
              intelligence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className=""
          >
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center mb-12"
            >
              <div className="h-full">
                <CardHeader>
                  <div className={`flex items-center gap-2 mb-4`}>
                    <Brain className={`h-6 w-6 text-[#EE06DB]`} />
                    <CardTitle className="md:text-xl text-lg">
                      Dr. Markets
                    </CardTitle>
                    <span className="bg-[#08B0FF] rounded-full max-sm:text-sm text-center py-1 px-2 text-white">
                      Analysis Engine
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Generates pre-market outlooks, daily bias, and setups using
                    real indicators and professional logic.
                  </CardDescription>

                  <div className="flex flex-col mt-4">
                    <div className="flex items-center gap-2 mt-2">
                      <Circle className="h-3 w-3 text-[#08B0FF]" />
                      <span className="text-muted-foreground">
                        Multi-timeframe analysis
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Circle className="h-3 w-3 text-[#08B0FF]" />
                      <span className="text-muted-foreground">
                        Risk assessment and position sizing
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Circle className="h-3 w-3 text-[#08B0FF]" />
                      <span className="text-muted-foreground">
                        Market condition detection
                      </span>
                    </div>
                  </div>
                </CardContent>
              </div>
              <div className="bg-[#F6F7F8] p-6 rounded-xl shadow-sm ">
                <img
                  src={"/assets/tool-1.png"}
                  alt="Dr. Markets"
                  className="w-full object-cover rounded-lg"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center mb-12"
            >
              <div className="bg-[#F6F7F8] p-6 rounded-xl shadow-sm ">
                <img
                  src={"/assets/tool-2.png"}
                  alt="Dr. Markets"
                  className="w-full object-cover rounded-lg"
                />
              </div>
              <div className="h-full">
                <CardHeader>
                  <div className={`flex items-center gap-2 mb-4`}>
                    <Zap className={`h-6 w-6 text-[#22D3EE]`} />
                    <CardTitle className="md:text-xl text-lg">
                      TradeRx
                    </CardTitle>
                    <span className="bg-[#08B0FF] max-sm:text-sm rounded-full text-center py-1 px-2 text-white">
                      Execution Engine
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Emotion-free execution engine that respects rules, manages
                    trades, and never chases.
                  </CardDescription>

                  <div className="flex flex-col mt-4">
                    <div className="flex items-center gap-2 mt-2">
                      <Circle className="h-3 w-3 text-[#08B0FF]" />
                      <span className="text-muted-foreground">
                        Automated trade execution
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Circle className="h-3 w-3 text-[#08B0FF]" />
                      <span className="text-muted-foreground">
                        Emotion-free decision making
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Circle className="h-3 w-3 text-[#08B0FF]" />
                      <span className="text-muted-foreground">
                        Strict adherence to trading plan
                      </span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center mb-12"
            >
              <div className="h-full">
                <CardHeader>
                  <div className={`flex items-center gap-2 mb-4`}>
                    <User className={`h-6 w-6 text-[#EE06DB]`} />
                    <CardTitle className="md:text-xl text-lg">You</CardTitle>
                    <span className="bg-[#08B0FF] max-sm:text-sm rounded-full text-center py-1 px-2 text-white">
                      The human in control
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    You define your edge and risk. Our bots handle the rest.
                  </CardDescription>

                  <div className="flex flex-col mt-4">
                    <div className="flex items-center gap-2 mt-2">
                      <Circle className="h-3 w-3 text-[#08B0FF]" />
                      <span className="text-muted-foreground">
                        Multi-timeframe analysis
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Circle className="h-3 w-3 text-[#08B0FF]" />
                      <span className="text-muted-foreground">
                        Risk assessment and position sizing
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Circle className="h-3 w-3 text-[#08B0FF]" />
                      <span className="text-muted-foreground">
                        Market condition detection
                      </span>
                    </div>
                  </div>
                </CardContent>
              </div>
              <div className="bg-[#F6F7F8] p-6 rounded-xl shadow-sm ">
                <img
                  src={"/assets/human-trader.jpg"}
                  alt="Dr. Markets"
                  height={400}
                  className="w-full max-h-[300px] object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who is Technests For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#08B0FF] text-center my-1 uppercase">
              who is Technests for?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Build for focused, rule-driven traders
            </h2>
            <p className="md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're just starting out or a seasoned pro, Technests is
              designed to help you automate your trading strategies and achieve
              consistent results. Our platform is perfect for:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="gap-y-6 gap-x-4 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2"
          >
            {[
              "Beginner & intermediate traders",
              "Apex, Topstep, Earn2Trade users",
              "Funded account holders needing risk automation",
              "Traders running multiple evaluations",
              "Options traders switching to futures",
              "Professionals seeking passive income",
            ].map((val, index) => (
              <motion.div key={index} variants={fadeInUp} className="h-25">
                <div className="bg-white dark:bg-black/90ss p-4 rounded-lg h-full shadow text-left">
                  <User className=" text-[#08B0FF]" />
                  {val}
                </div>
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
            <p className="text-[#08B0FF] text-center my-1">REVIEWS</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Success Stories from Real Traders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what traders are saying
              about their journey with Technests.ai and their prop firm success.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="py-6 flex flex-col h-full justify-between">
                    <p className="text-muted-foreground mb-4 flex items-start">
                      <span>
                        <Quote className="h-6 w-6 mr-3 text-[#60A5FA]" />{" "}
                      </span>{" "}
                      "{testimonial.content}"
                    </p>
                    <div className="flex justify-between relative -bottom-3 mb-5 items-center flex-wrap gap-3">
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
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-[7%]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl text-center font-bold mb-5">
              Latest Blog Posts
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.slice(0, 3).map((post, index) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg">
                      <Link
                        href={`/blog/${post.id}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex w-full justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={post.authorAvatar}
                            alt={post.author}
                          />
                          <AvatarFallback>
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{post.author}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-[7%]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="md:text-xl text-lg text-muted-foreground max-w-3xl mx-auto">
              Our FAQ area is the best place to look to find answers to your
              questions. Our community and support team constantly updates the
              questions and answers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex w-full justify-center items-center max-w-5xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-2.5">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-[#F6F7F8] dark:bg-[#151515BF]  py-[7%] px-[5%] rounded-2xl border dark:border-zinc-800 border-zinc-300">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Want to join Technests?
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              We’re always looking to partner with funded traders, influencers,
              prop firms, and agencies.
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/pricing">
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
