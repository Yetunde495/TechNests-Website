"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search,
  BookOpen,
  Video,
  MessageCircle,
  Download,
  Settings,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Users,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const helpCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics of TradePro platform",
    articles: 12,
    color: "text-blue-500"
  },
  {
    icon: Settings,
    title: "Account & Settings",
    description: "Manage your account and preferences",
    articles: 8,
    color: "text-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Trading Signals",
    description: "Understanding and using our signals",
    articles: 15,
    color: "text-purple-500"
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Setting up automated trading",
    articles: 10,
    color: "text-yellow-500"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Interpreting your trading data",
    articles: 7,
    color: "text-red-500"
  },
  {
    icon: Shield,
    title: "Security & Safety",
    description: "Keeping your account secure",
    articles: 6,
    color: "text-indigo-500"
  }
];

const popularArticles = [
  {
    title: "How to Set Up Your First Trading Signal",
    category: "Getting Started",
    readTime: "5 min read",
    views: "2.3k views"
  },
  {
    title: "Understanding Risk Management Settings",
    category: "Trading Signals",
    readTime: "8 min read",
    views: "1.8k views"
  },
  {
    title: "Connecting Your Broker Account",
    category: "Account & Settings",
    readTime: "6 min read",
    views: "1.5k views"
  },
  {
    title: "Automated Trading Best Practices",
    category: "Automation",
    readTime: "10 min read",
    views: "1.2k views"
  },
  {
    title: "Reading Your Performance Dashboard",
    category: "Analytics & Reports",
    readTime: "7 min read",
    views: "980 views"
  }
];

const quickLinks = [
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    link: "/tutorials"
  },
  {
    icon: Download,
    title: "Download Center",
    description: "Apps, guides, and resources",
    link: "/downloads"
  },
  {
    icon: MessageCircle,
    title: "Community Forum",
    description: "Connect with other traders",
    link: "/community"
  },
  {
    icon: Phone,
    title: "Contact Support",
    description: "Get help from our team",
    link: "/contact"
  }
];

export default function Help() {
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
              <BookOpen className="w-4 h-4 mr-2" />
              Help Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to your questions and learn how to make the most of TradePro.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for help articles, tutorials, and guides..." 
                className="pl-12 py-6 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <link.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{link.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{link.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={link.link}>
                        Explore
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
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
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the information you need organized by topic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {category.articles} articles
                      </span>
                      <Button variant="ghost" size="sm">
                        View All
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
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
              Popular Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Most viewed help articles this month.
            </p>
          </motion.div>

          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge variant="outline">{article.category}</Badge>
                          <span>{article.readTime}</span>
                          <span>{article.views}</span>
                        </div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/community">
                  <Users className="mr-2 h-5 w-5" />
                  Join Community
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}