import { BarChart3, ShieldCheck, TrendingUp } from "lucide-react";

export const blogPosts = [
  {
    id: "ai-powered-trading-signals",
    title: "How AI is Transforming Trading Signal Generation",
    excerpt: "Discover how machine learning algorithms are revolutionizing the way we identify and execute profitable trades.",
    author: "Sarah Johnson",
    authorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "AI & Technology",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
  },
  {
    id: "crypto-trading-automation",
    title: "Automating Cryptocurrency Trading: Best Practices",
    excerpt: "Essential tips and strategies for successful automated cryptocurrency trading in volatile markets.",
    author: "David Rodriguez",
    authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Cryptocurrency",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
  },
  {
    id: "market-volatility-strategies",
    title: "Trading Strategies for High Volatility Markets",
    excerpt: "How to adapt your trading approach during periods of extreme market volatility and uncertainty.",
    author: "Emily Parker",
    authorAvatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    date: "2024-01-08",
    readTime: "5 min read",
    category: "Market Analysis",
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
  },
  {
    id: "backtesting-trading-strategies",
    title: "The Complete Guide to Backtesting Trading Strategies",
    excerpt: "Learn how to properly test your trading strategies using historical data to improve performance.",
    author: "Michael Chen",
    authorAvatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Strategy Testing",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
  },
  {
    id: "psychology-of-trading",
    title: "Mastering the Psychology of Automated Trading",
    excerpt: "Understanding the mental aspects of trading and how automation can help overcome emotional biases.",
    author: "Sarah Johnson",
    authorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    date: "2024-01-03",
    readTime: "8 min read",
    category: "Trading Psychology",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
  },
  {
    id: "forex-market-hours",
    title: "Understanding Global Forex Market Hours for Better Trading",
    excerpt: "Optimize your trading schedule by understanding when different forex markets are most active.",
    author: "David Rodriguez", 
    authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Forex",
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
  }
];

export const faqData = [
  {
    question: "What is Technests?",
    answer: "Technests is a local AI-powered automation platform that helps prop firm traders pass evaluations, stay funded, and trade consistently by automating their trading rules."
  },
    {
    question: 'How does it work?',
    answer:
      'Choose your prop firm, subscribe, and let your personalized trading assistant handle trading and analytics in real-time.',
  },
  {
    question: 'Can beginners use Technests?',
    answer:
      'Yes! Technests is built for both beginners and pros, with no technical setup required.',
  },
  {
    question: "Does Technests give me trading capital?",
    answer: "No. Technests doesn’t provide capital — it helps you earn and keep it by improving your execution, discipline, and rule adherence."
  },
  {
    question: "Is this copy trading or signals?",
    answer: "No. Technests is not a signal provider or copy trading system. Your bot runs your strategy, locally and independently."
  },
  {
    question: "What platforms does it support?",
    answer: "Technests currently integrates with NinjaTrader for futures trading and is compatible with firms like Apex, Topstep, and Earn2Trade."
  },
  {
    question: "Can I run multiple accounts?",
    answer: "Yes. Technests supports multi-account automation so you can trade several evaluations or funded accounts simultaneously."
  },
  {
    question: "Is it cloud-based?",
    answer: "No. Technests runs locally on your device, ensuring low latency, privacy, and direct control over your trades."
  },
];

export const subscriptionPlans = {
  headline: "Technests Subscription Plans",
  subheadline: "Tailored for serious traders — built to scale, protect, and win.",
  note: "All yearly plans include 1 month FREE.",
  plans: [
  {
    id: 'starter',
    name: 'Starter',
    color: 'border-blue-500',
    monthly: 165,
    yearly: 1815,
    yearlySavings: 165,
    tagline: 'Perfect for focused traders managing a small portfolio.',
    icon: BarChart3,
    features: [
      'Supports up to 10 accounts',
      'Adapts to Evaluation & Funded rules',
      'Spots high-probability trade zones',
      'Applies dynamic self-aware risk logic',
      'Learns from every trade to guide better decisions',
      'Includes daily execution & market reports'
    ],
    cta: {
      text: 'Start Smart',
      subtext: 'Begin your funded journey with structured discipline.'
    }
  },
  {
    id: 'growth',
    name: 'Growth',
    color: 'border-yellow-500',
    monthly: 265,
    yearly: 2915,
    yearlySavings: 265,
    tagline: 'Ideal for traders ready to scale with structure and safety.',
    icon: TrendingUp,
    features: [
      'Supports up to 20 accounts',
      'Runs separate rule engines for each account type',
      'Enhances signal quality based on real-time data',
      'Prevents overtrading with time-based filters',
      'Prioritizes funded account preservation',
      'Designed for scaling evaluations and consistent payouts'
    ],
    cta: {
      text: 'Scale Confidently',
      subtext: 'Upgrade your edge, elevate your results.'
    },
    popular: true
  },
  {
    id: 'elite',
    name: 'Elite',
    color: 'border-red-500',
    monthly: 365,
    yearly: 4015,
    yearlySavings: 365,
    tagline: 'Best for prop firms, power users, or serious traders running large systems.',
    icon: ShieldCheck,
    features: [
      'Supports unlimited accounts',
      'Handles complex strategy rotations with full automation',
      'Detects only top-tier trade setups',
      'Auto-adjusts risk based on results across accounts',
      'Provides deep performance analytics',
      'Designed to protect, grow, and dominate your portfolio'
    ],
    cta: {
      text: 'Go Unlimited',
      subtext: 'Command your prop empire with full control.'
    }
  }
],

  extras: {
    guarantee: "All plans include full access, no hidden fees, and zero lock-in.",
    security: "Your strategy. Our system. Real edge."
  }
};

