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
} from "lucide-react";
import Link from "next/link";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { cn } from "@/lib/utils";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { OverlayCopy, StickyDiv } from "@/components/ui/testScroll";

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

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We believe in complete transparency with our trading performance and methodologies.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Constantly pushing the boundaries of what's possible in automated trading technology.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Committed to delivering exceptional results and exceeding our clients' expectations.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building a supportive community of traders who learn and grow together.",
  },
];

const stats = [
  { label: "Years in Business", value: "8+" },
  { label: "Active Traders", value: "25,000+" },
  { label: "Countries Served", value: "50+" },
  { label: "Total Trades Executed", value: "2M+" },
];

const milestones = [
  {
    year: "2016",
    title: "Company Founded",
    description:
      "Started with a vision to democratize professional-grade trading tools.",
  },
  {
    year: "2018",
    title: "First 1,000 Users",
    description:
      "Reached our first major milestone with traders from 15 countries.",
  },
  {
    year: "2020",
    title: "AI Integration",
    description:
      "Launched our proprietary AI-powered signal generation system.",
  },
  {
    year: "2022",
    title: "Mobile Platform",
    description: "Released award-winning mobile apps for iOS and Android.",
  },
  {
    year: "2024",
    title: "25,000+ Traders",
    description:
      "Celebrating our growing community of successful traders worldwide.",
  },
];

const content = [
  {
    title: "Dr Markets",
    description:
      "Your In-house strategist generates pre-market outlooks, daily bias, and high-probability setups using real indicators and professional logic. Think of it as your 6 AM clarity pill",
    content: (
      <div className="flex w-full h-full justify-center p-[6%] max-sm:px-1.5 bg-[#F6F7F8] dark:bg-[#151515BF] text-white">
        <div className="flex w-full flex-col py-8 rounded-xl sm:px-6 px-1 text-sm sm:text-base border bg-[#011D3A] border-[#00DCF1]">
          <h4 className="text-[#08B0FF] text-lg mb-3">Daily Operations</h4>
          <div className="flex items-center gap-2 mt-2">
            <CircleCheckBig className="h-3 w-3 text-[#17C964]" />
            <span className="text-muted-foreground">
              Scans trades and performance trends
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <CircleCheckBig className="h-3 w-3 text-[#17C964]" />
            <span className="text-muted-foreground">
              Analyzes market behavior patterns
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <CircleCheckBig className="h-3 w-3 text-[#17C964]" />
            <span className="text-muted-foreground">
              Refines signal selection and prioritization
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <CircleCheckBig className="h-3 w-3 text-[#17C964]" />
            <span className="text-muted-foreground">
              Adapts underperforming signals
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <CircleCheckBig className="h-3 w-3 text-[#17C964]" />
            <span className="text-muted-foreground">
              Recalibrates for volatility changes
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <CircleCheckBig className="h-3 w-3 text-[#17C964]" />
            <span className="text-muted-foreground">
              Delivers focused Plan of Action (POA)
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "TradeRx",
    description:
      "Your emotion-free execution engine. Reads signals, manages trades, enforces firm rules, respects cooldowns, and never chases no matter what",
    content: (
      <div className="flex w-full h-full justify-center p-[6%] bg-[#F6F7F8] dark:bg-[#151515BF] text-white">
        <div className="flex flex-col w-full py-8 px-6 rounded-xl text-sm border bg-[#011D3A] border-[#00DCF1]">
          <h4 className="text-[#08B0FF] text-lg mb-3">
            Diagnostic Capabilities
          </h4>
          <div className="flex items-center gap-2 mt-2">
            <CircleCheckBig className=" text-[#17C964]" />
            <span className="text-muted-foreground">Risk drift detection</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <CircleCheckBig className=" text-[#17C964]" />
            <span className="text-muted-foreground">
              SL/TP inefficiency analysis
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <CircleCheckBig className=" text-[#17C964]" />
            <span className="text-muted-foreground">Overtrading patterns</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <CircleCheckBig className=" text-[#17C964]" />
            <span className="text-muted-foreground">
              Time-of-day performance
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <CircleCheckBig className=" text-[#17C964]" />
            <span className="text-muted-foreground">
              Signal reliability assessment
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <CircleCheckBig className=" text-[#17C964]" />
            <span className="text-muted-foreground">
              Data-driven calibration
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "You-The human in control",
    description:
      "Define your edges. Set your risk rules, then let our bots do the heavy lifting, day in day out.",
    content: (
      <div className="flex w-full h-full justify-center p-[6%] bg-[#F6F7F8] dark:bg-[#151515BF] text-white">
        <div className="flex flex-col w-full py-8 px-6 text-sm rounded-xl border bg-[#011D3A] border-[#00DCF1]">
          <img
            src="/assets/trading.png"
            alt=""
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
      </div>
    ),
  },
];

export default function About() {
  const words = ["winning", "trading"];
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
            <p className="text-xl text-muted-foreground mb-8">
              TechNests is the mission-driven, trader-first AI automation
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
            <p className="md:text-lg text-sm pb-4">
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
              className="space-y-4 px-[5%] py-28 max-sm:pt-4 max-sm:pb-10 max-sm:order-last"
            >
              <h2 className="text-xl md:text-3xl font-bold">
                WHY TECHNESTS EXISTS
              </h2>
              <p className="text-sm text-muted-foreground">
                Today, over 90% of traders fail prop firm evaluations.{" "}
                <strong>Not</strong> because they’re undisciplined.{""}
                <strong>Not</strong> because they lack edge.
              </p>
              <p className="text-sm text-muted-foreground">
                But because the evaluation process demands precision,
                consistency, and emotional control — every single day.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                We’ve walked this path. That’s why we built TechNests: a
                full-stack automation system engineered for the{" "}
                <em>real-world chaos</em> of prop trading.
              </p>
              <Button size="lg" asChild>
                <Link href="/subscription">
                  Join Our Community
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full h-full flex items-center justify-center max-sm:order-1 max-sm:rounded-t-xl sm:rounded-r-xl py-20 md:py-28 px-[5%] overflow-hidden"
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
          <h2 className="text-lg text-center md:text-3xl font-bold mb-2">
            We’re your trading brain — in a box.
          </h2>
           <p className="text-center md:text-lg mb-5">
              No Copy trading. No central signal farm. No cloud execution. Just
              1:1 automation that works exactly like <strong>you</strong> — only
              better{" "}
            </p>
          <section className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl">
              <div className="flex-1 p-6 rounded-lg shadow text-lg ">
                <p>
                  TechNests is not just another trading tool. We’re not a signal
                  provider, marketplace, or brokerage. We’re your{" "}
                  <strong>personal trading assistant</strong> — built to enhance
                  your edge, discipline, and performance.
                </p>
              </div>
              <div className="flex-1 p-6 rounded-lg shadow text-lg ">
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
              These core principles guide everything we do and shape how we
              serve our community.
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced team combines decades of trading expertise with
              cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className=""
          >
            <div className="w-full py-4">
              <StickyScroll content={content} />
            </div>
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
                      <CardTitle className="text-xl">
                        {milestone.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
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
