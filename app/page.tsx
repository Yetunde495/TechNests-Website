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
  PlayCircle,
  MonitorSmartphone,
  CircleCheck,
  CircleCheckBig,
  Brain,
  Circle,
  Download,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRef, useState } from "react";
import { Timeline } from "@/components/ui/timeline";

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
    icon: Target,
    title: "Prop Firm Focused",
    description:
      "Specifically designed to help you pass evaluations and stay funded with FTMO, Apex, TopStep, and more.",
    color: "bg-gradient-to-br from-[#F31260] to-[#EC4899] text-white",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: `Your trading data, strategies, and performance
metrics stay on your computer. No cloud, no sharing.`,
    color: "bg-gradient-to-br from-[#22C55E] to-[#10B981] text-white",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: `Comprehensive performance tracking, draw  down
analysis, and detailed trade statistics to improve your edge.`,
    color: "bg-gradient-to-br from-[#EE06DB] to-[#CD12DF] text-white",
  },
  {
    icon: MonitorSmartphone,
    title: "Local AI Processing",
    description: `Powerful machine learning algorithms that run
entirely on your hardware without internet
dependency.`,
    color: "bg-gradient-to-br from-[#F5A524] to-[#C4841D] text-white",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Execution",
    description: `Eliminate emotional trading and maintain discipline
with AI-driven decision making and risk
management.`,
    color: "bg-gradient-to-br from-[#08B0FF] to-[#079EE6] text-white",
  },
  {
    icon: Zap,
    title: "Consistent Performance",
    description: `Lightning-fast trade execution and monitoring with
millisecond precision for optimal entry and exit
timing.`,
    color: "bg-gradient-to-br from-[#F97316] to-[#EF4444] text-white",
  },
];

const stats = [
  {
    label: "Win Rate",
    value: "77%",
    icon: CircleCheckBig,
    sublabel: "Prop firm evaluations",
  },
  {
    label: "Active Traders",
    value: "250+",
    icon: Users,
    sublabel: "Using TechNests daily",
  },
  {
    label: "Profits Generated",
    value: "$3.2M+",
    icon: TrendingUp,
    sublabel: "By our Community",
  },
  {
    label: "Prop Firms",
    value: "10+",
    icon: Clock,
    sublabel: "Successfully passed",
  },
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

const data = [
  {
    title: "Analyze the Markets",
    content: (
      <div>
        <p className="mb-8 font-medium sm:text-lg text-base text-neutral-800 dark:text-neutral-200">
          2 hours before the trading day starts, your AI scans 30-day,.
          <br /> 5-day, and overnight market movement (OHLC).
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/assets/analysis-1.png"
            alt="startup template"
            width={500}
            height={550}
            className="h-30 col-span-2 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <div className="w-full">
            <img
              src="/assets/analysis-2.png"
              alt="startup template"
              width={500}
              height={500}
              className="w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>

          <div className="w-full h-full max-w-[300px] max-h-[300px]">
            <img
              src="/assets/market-analysis-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="w-full h-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Prepare Custom Trade Plans",
    content: (
      <div>
        <p className="mb-8 sm:text-lg text-base font-medium text-neutral-800 dark:text-neutral-200">
          It audits each account, checks health, and prepares personalized trade
          plans
          <br /> based on your prop firm’s goals.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="/assets/report-1.png"
            alt="hero template"
            height={550}
            className="h-30 w-full  col-span-2 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/report-2.png"
            alt="feature template"
            height={550}
            className="w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/report-3.png"
            alt="bento template"
            height={550}
            className="w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          {/* <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          /> */}
        </div>
      </div>
    ),
  },
  {
    title: "Execute with Smart Risk Management",
    content: (
      <div>
        <p className="mb-4 sm:text-lg text-base font-medium text-neutral-800 dark:text-neutral-200">
          The TradeRx system executes trades on your behalf — in real-time —
          with dynamic risk control
        </p>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="/assets/exec-report-1.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/exec-report-2.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/exec-report-3.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/assets/exec-report-4.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Post-Trade Analytics",
    content: (
      <div>
        <p className="mb-4 sm:text-lg text-base font-medium text-neutral-800 dark:text-neutral-200">
          After the session, you get clean, clear analytics so you know what
          worked and how to improve.
        </p>

        <div className="grid grid-cols-1 gap-4">
          <img
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlay, setShowPlay] = useState(true);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlay(false);
    }
  };

  const handleVideoPause = () => setShowPlay(true);
  const handleVideoPlay = () => setShowPlay(false);
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
            <div className="flex items-center justify-center gap-2.5 max-sm:gap-1">
              <Badge variant="outline" className="mb-4 p-1 sm:px-4 sm:py-2">
                <Shield className="w-4 h-4 mr-2 text-[#08B0FF]" />
                Privacy First
              </Badge>{" "}
              <Badge variant="outline" className="mb-4 p-1 sm:px-4 sm:py-2">
                <MonitorSmartphone className="w-4 h-4 mr-2 text-[#CD12DF]" />
                Runs Locally
              </Badge>{" "}
              <Badge variant="outline" className="mb-4 sm:px-4 sm:py-2 p-1">
                <CircleCheckBig className="w-4 h-4 mr-2 text-[#17C964]" />
                67% Success Rate
              </Badge>
            </div>

            <h1 className="text-center lg:text-6xl sm:text-5xl font-bold text-4xl text-slate-900 dark:text-white tracking-tight mb-6">
              Precision Automation for <br /> Serious{" "}
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

          {/* Product Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mt-12"
          >
            <div className="w-full max-w-5xl 2xl:max-w-6xl relative max-h-[650px]">
              <video
                ref={videoRef}
                className="w-full h-full rounded-2xl shadow-lg"
                controls
                poster="/assets/stock-1863880_1920.jpg"
                src="/assets/Trading-Video.mp4"
                preload="metadata"
                onPause={handleVideoPause}
                onPlay={handleVideoPlay}
              />
              {showPlay && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ pointerEvents: "auto" }}
                  aria-label="Play video"
                  type="button"
                >
                  <span className="bg-black/60 rounded-full p-6 hover:bg-black/80 transition">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </span>
                </button>
              )}
            </div>
          </motion.div>
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="py-[9%] flex flex-col w-full justify-center items-center text-center"
          >
            <h1 className="text-center lg:text-5xl sm:text-4xl font-bold text-4xl mb-3 text-slate-900 dark:text-white tracking-tight ">
              Trusted By Successful Prop Traders
            </h1>
            <p className="text-base text-[#374758] dark:text-zinc-100 mb-6 max-w-3xl mx-auto">
              Our AI trading assistant has helped thousands pass evaluations and
              stay <br />
              funded across major prop firms.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center flex flex-col justify-center items-center"
                >
                  <div className="flex justify-center items-center h-14 w-14 rounded-xl p-2 button-gradient text-white mb-2">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pattern-bg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#08B0FF] text-center my-1">
              Why techtnests ai?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TechNests.ai combines cutting-edge AI technology with proven
              trading principles to give you the structure and discipline needed
              for prop firm success.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-[#F6F7F8] dark:bg-[#151515BF]">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}
                    >
                      <feature.icon className={`h-6 w-6`} />
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
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col w-full justify-center items-center my-10 gap-6 bg-[#F6F7F8] dark:bg-[#151515BF] p-5 rounded-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate your Trading Success?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join other traders around the world who have passed their prop
              firm evaluations with TechNests
            </p>
            <div>
              <Button size="lg" className="text-lg px-8 py-6 mt-6" asChild>
                <Link href="/subscription">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
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
            <p className="text-[#08B0FF] text-center my-1">TechNest Tools</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Trade Smarter, Grow Faster
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete AI trading system that runs locally on your computer.
              No internet required. No data shared. Just pure trading
              intelligence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className=""
          >
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center"
            >
              <div className="h-full">
                <CardHeader>
                  <div
                    className={`flex items-center justify-center gap-2 mb-4`}
                  >
                    <Brain className={`h-7 w-7 text-[#EE06DB]`} />
                    <CardTitle className="text-xl">Dr. Markets</CardTitle>
                    <span className="bg-[#08B0FF] rounded-full text-center py-1 px-2 text-white">
                      Analysis Engine
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Your AI market analyst that processes price action, volume,
                    and market structure to identify high-probability trading
                    opportunities.
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
              className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center"
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
                  <div
                    className={`flex items-center justify-center gap-2 mb-4`}
                  >
                    <Zap className={`h-6 w-6 text-[#22D3EE]`} />
                    <CardTitle className="text-xl">TradeRx</CardTitle>
                    <span className="bg-[#08B0FF] rounded-full text-center py-1 px-2 text-white">
                      Execution Engine
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Your disciplined execution partner that follows your rules
                    exactly, eliminates emotional trading, and maintains
                    consistent risk management.
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
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col w-full justify-center items-center my-10 gap-6 bg-[#F6F7F8] dark:bg-[#151515BF] p-5 rounded-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Local Execution Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In an age where your data is everywhere, TechNests.ai keeps your
              trading strategies, performance data, and market insights
              completely private.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
              <div className="flex items-center justify-center space-y-2.5 flex-col text-center">
                <Shield className="text-[#17C964] w-10 h-10" />
                <h6 className="font-bold md:text-xl text-lg text-zinc-900 dark:text-white">
                  Complete Privacy
                </h6>
                <p className="text-base text-[#374758] dark:text-zinc-100">
                  Your strategies and data never leave your computer
                </p>
              </div>
              <div className="flex items-center justify-center space-y-2.5 flex-col text-center">
                <Download className="text-[#00DCF1] w-10 h-10" />
                <h6 className="font-bold md:text-xl text-lg text-zinc-900 dark:text-white">
                  No Internet Required
                </h6>
                <p className="text-base text-[#374758] dark:text-zinc-100">
                  Trade even when your connection is unreliable
                </p>
              </div>
              <div className="flex items-center justify-center space-y-2.5 flex-col text-center">
                <Settings className="text-[#CD12DF] w-10 h-10" />
                <h6 className="font-bold md:text-xl text-lg text-zinc-900 dark:text-white">
                  Full Control
                </h6>
                <p className="text-base text-[#374758] dark:text-zinc-100">
                  Customize everything to match your trading style
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How To Section */}
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>

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
            <h1 className="text-center md:text-5xl font-bold text-4xl text-slate-900 dark:text-white tracking-tight mb-6">
              Ready to Pass Your Next
              <br />
              <span className="py-2 gradient-text !bg-clip-text text-transparent inline-block">
                Prop Firm Challenge?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of successful traders who've transformed their
              trading with TechNests.ai. Get the discipline, structure, and
              AI-powered insights you need to succeed.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
              <div className="flex items-center text-sm justify-center gap-1 text-center">
                <CircleCheck className="text-[#17C964]" />

                <p className=" text-[#374758] dark:text-zinc-100">
                  67% Success Rate
                </p>
              </div>
              <div className="flex items-center text-sm justify-center gap-1 text-center">
                <Shield className="text-[#00DCF1]" />

                <p className=" text-[#374758] dark:text-zinc-100">
                  100% Private & Local
                </p>
              </div>
              <div className="flex items-center text-sm justify-center gap-1 text-center">
                <Download className="text-[#CD12DF]" />

                <p className=" text-[#374758] dark:text-zinc-100">
                  Instant Download
                </p>
              </div>
            </div>
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
