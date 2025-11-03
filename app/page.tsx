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
  Quote,
  User,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useRef, useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import { faqData } from "@/data/mockdata";
import DeviceCarousel from "@/components/ui/device-carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlogPost, fetchBlogPosts, fetchFeaturedPosts } from "@/lib/blog-api";

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
    sublabel: "Using Technests daily",
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

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlay, setShowPlay] = useState(true);
  const [loading, setLoading] = useState(true);
  const [featuredPost, setFeaturedPost] = useState<BlogPost[]>([]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlay(false);
    }
  };

  const handleVideoPause = () => setShowPlay(true);
  const handleVideoPlay = () => setShowPlay(false);
  // Fetch data
  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch featured post only on first page without filters
        const posts = await fetchBlogPosts({ page: 1, limit: 3 });
        setFeaturedPost(posts?.data || []);
      } catch (error) {
        console.error("Error loading blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center flex-wrap justify-center gap-1 sm:gap-2.5 max-sm:gap-1">
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
             Build your Live <br />{" "}
              <span className="py-2 gradient-text !bg-clip-text text-transparent inline-block">
                Professional Portfolio
              </span>
              in minutes
            </h1>

            <p className="text-base text-[#374758] dark:text-zinc-100 mb-8 max-w-3xl mx-auto">
               Turn your experience into a professional portfolio website — without
              hiring a designer or paying for hosting. Create, customize, and share
              a personal link that lets recruiters view your profile, download your
              CV, and reach out instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/pricing">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
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
            <div className="w-full max-w-6xl 2xl:max-w-7xl rounded-xl relative">
              <video
                ref={videoRef}
                className="w-full h-full rounded-2xl shadow-lg max-h-[500px] object-cover"
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
            <h1 className="text-center lg:text-5xl sm:text-4xl font-bold text-3xl mb-3 text-slate-900 dark:text-white tracking-tight ">
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-[7%]">
        <div className="max-w-7xl mx-auto pattern-bg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
              Technests.ai combines cutting-edge AI technology with proven
              trading principles to give you the structure and discipline needed
              for prop firm success.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8, delay: 0.5 }}
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
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col w-full justify-center items-center py-12 my-10 gap-4 bg-[#F6F7F8] dark:bg-[#151515BF] p-5 rounded-lg"
          >
            <h2 className="text-3xl md:text-4xl text-center font-bold">
              Ready to Elevate your Trading Success?
            </h2>
            <p className="md:text-xl text-lg text-center text-muted-foreground max-w-3xl mx-auto">
              Join other traders around the world who have passed their prop
              firm evaluations with Technests
            </p>
            <div>
              <Button size="lg" className="text-lg px-8 py-6 mt-6" asChild>
                <Link href="/pricing">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-[7%]">
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
              No API required. No data shared. Just pure trading intelligence.
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

          <div className="mx-auto my-[8%] text-center bg-[#F6F7F8] dark:bg-[#151515BF] p-[5%] rounded-2xl border dark:border-zinc-800 border-zinc-300">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-center text-2xl font-bold md:text-3xl text-slate-900 dark:text-white tracking-tight mb-6">
                Why Local Execution Matters
              </h1>
              <p className="text-muted-foreground mb-8">
                In an age where your data is everywhere, Technests.ai keeps your
                trading strategies, performance data, and market insights
                completely private.
              </p>
              <div className="justify-center items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full">
                <div className="flex flex-col items-center text-sm justify-center gap-1 text-center">
                  <Shield className="text-[#17C964] w-10 h-10" />

                  <p className="text-zinc-900  font-semibold dark:text-zinc-100">
                    Complete Privacy
                  </p>
                  <p className="text-[#374758] dark:text-zinc-200">
                    Your strategies and data never leave your computer
                  </p>
                </div>
                <div className="flex flex-col items-center text-sm justify-center gap-1 text-center">
                  <Download className="text-[#08B0FF] w-10 h-10" />
                  <p className="text-zinc-900  font-semibold dark:text-zinc-100">
                    No API Required
                  </p>
                  <p className=" text-[#374758] dark:text-zinc-100">
                    Trade even when your connection is unreliable
                  </p>
                </div>
                <div className="flex flex-col items-center text-sm justify-center gap-1 text-center">
                  <Settings className="text-[#CD12DF] w-10 h-10" />
                  <p className="text-zinc-900  font-semibold dark:text-zinc-100">
                    Full Control
                  </p>
                  <p className=" text-[#374758] dark:text-zinc-100">
                    Customize everything to match your trading style
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Technest Works Section */}
      <section className="relative w-full bg-muted/50 overflow-clip px-3 lg:px-[7%]">
        <div className="max-w-6xl mx-auto">
          <Timeline data={data} />
        </div>
      </section>

      {/* Technests Html */}
      <section className="py-20 grid-frame bg-blend-soft-light px-4 sm:px-6 lg:px-[7%] bg-[#F6F7F8] dark:bg-[#151515BF]">
        <div className="max-w-7xl mx-auto flex w-full justify-center items-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <p className="text-[#08B0FF] text-center my-1 uppercase">
              techtnests ai App
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Empowering Traders with Smarter Systems
            </h2>
          </motion.div>

          <DeviceCarousel />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="md:text-xl text-muted-foreground max-w-3xl mx-auto mb-5">
              A complete AI trading system that runs locally on your computer.
              No API or Cloud required. No data shared. Just pure trading
              intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/pricing">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link href="/about">
                  About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-[7%] bg-muted/30">
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
            <p className="md:text-xl text-lg text-muted-foreground max-w-3xl mx-auto">
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
      {!loading && featuredPost?.length > 0 && (
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
              {featuredPost.map((post) => (
                <motion.div key={post._id} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video bg-muted">
                      <img
                        src={post?.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="py-4 px-3 max-sm:px-2">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {(
                                post.author?.firstName +
                                " " +
                                post?.author?.lastName
                              )
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-sm font-medium">
                              {post?.author?.firstName}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post?.readingTime}
                          </span>
                        </div>
                      </div>

                      <CardTitle className="text-lg">
                        <Link
                          href={`/blog/${post?.urlSlug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription>{post?.summary}</CardDescription>
                    </CardHeader>
                    <CardContent className="px-3 max-sm:px-2">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="w-fit mb-2">
                          {post?.category?.name}
                        </Badge>
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
              <Button variant="outline" size="lg" asChild>
                <Link href="/blog">
                  View More Articles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      )}

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
      <section className="py-20 px-4 sm:px-6 lg:px-[7%]">
        <div className="max-w-6xl mx-auto text-center bg-[#F6F7F8] dark:bg-[#151515BF] py-[7%] px-[5%] rounded-2xl border dark:border-zinc-800 border-zinc-300">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-center text-3xl font-bold md:text-4xl text-slate-900 dark:text-white tracking-tight mb-6">
              Ready to Pass Your Next
              <br />
              <span className="py-2 gradient-text !bg-clip-text text-transparent inline-block">
                Prop Firm Challenge?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of successful traders who've transformed their
              trading with Technests.ai. Get the discipline, structure, and
              AI-powered insights you need to succeed.
            </p>
            <div className="flex justify-center items-center grid-cols-1 gap-5 w-full">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center py-8">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/pricing">
                  View Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
