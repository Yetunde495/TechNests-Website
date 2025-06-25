"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Newspaper,
  Calendar,
  ExternalLink,
  Download,
  Mail,
  Award,
  TrendingUp,
  Users
} from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const pressReleases = [
  {
    title: "TradePro Reaches 25,000 Active Traders Milestone",
    date: "2024-01-15",
    excerpt: "Leading trading automation platform celebrates significant growth in user base and trading volume.",
    category: "Company News",
    link: "#"
  },
  {
    title: "TradePro Launches Advanced AI-Powered Risk Management Suite",
    date: "2024-01-10",
    excerpt: "New features help traders better manage risk with institutional-grade tools and real-time monitoring.",
    category: "Product Launch",
    link: "#"
  },
  {
    title: "TradePro Secures $50M Series B Funding Round",
    date: "2023-12-20",
    excerpt: "Investment will accelerate product development and global expansion efforts.",
    category: "Funding",
    link: "#"
  },
  {
    title: "TradePro Named 'Best Trading Platform' by FinTech Awards 2023",
    date: "2023-11-15",
    excerpt: "Recognition highlights platform's innovation in automated trading and user experience.",
    category: "Awards",
    link: "#"
  }
];

const mediaKit = [
  {
    title: "Company Logo Pack",
    description: "High-resolution logos in various formats (PNG, SVG, EPS)",
    size: "2.3 MB",
    type: "ZIP"
  },
  {
    title: "Executive Headshots",
    description: "Professional photos of key leadership team members",
    size: "15.7 MB", 
    type: "ZIP"
  },
  {
    title: "Product Screenshots",
    description: "High-quality screenshots of our trading platform",
    size: "8.4 MB",
    type: "ZIP"
  },
  {
    title: "Company Fact Sheet",
    description: "Key statistics, milestones, and company information",
    size: "1.2 MB",
    type: "PDF"
  }
];

const mediaFeatures = [
  {
    outlet: "TechCrunch",
    title: "How TradePro is Democratizing Algorithmic Trading",
    date: "2024-01-08",
    type: "Feature Article",
    link: "#"
  },
  {
    outlet: "Forbes",
    title: "The Rise of Retail Trading Automation",
    date: "2023-12-15",
    type: "Industry Analysis",
    link: "#"
  },
  {
    outlet: "Wall Street Journal",
    title: "AI-Powered Trading Platforms Gain Traction",
    date: "2023-11-22",
    type: "News Article",
    link: "#"
  },
  {
    outlet: "Bloomberg",
    title: "Interview: TradePro CEO on the Future of Trading",
    date: "2023-10-30",
    type: "Interview",
    link: "#"
  }
];

const awards = [
  {
    title: "Best Trading Platform 2023",
    organization: "FinTech Awards",
    year: "2023",
    icon: Award
  },
  {
    title: "Innovation in Financial Technology",
    organization: "Tech Excellence Awards",
    year: "2023",
    icon: TrendingUp
  },
  {
    title: "Best Customer Experience",
    organization: "Trading Platform Awards",
    year: "2022",
    icon: Users
  }
];

export default function Press() {
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
              <Newspaper className="w-4 h-4 mr-2" />
              Press Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Latest news, press releases, and media resources from TradePro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Latest Press Releases
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Stay updated with our latest company news and announcements.
            </p>
          </motion.div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline">{release.category}</Badge>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {new Date(release.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{release.title}</h3>
                        <p className="text-muted-foreground">{release.excerpt}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={release.link}>
                            Read More
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
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
              Media Coverage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what leading publications are saying about TradePro.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{feature.outlet}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(feature.date).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={feature.link}>
                        Read Article
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

      {/* Awards */}
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
              Awards & Recognition
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry recognition for our innovation and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <award.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{award.title}</CardTitle>
                    <CardDescription>{award.organization}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">{award.year}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
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
              Media Kit
            </h2>
            <p className="text-xl text-muted-foreground">
              Download our media assets and company information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaKit.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <Badge variant="outline">{item.type}</Badge>
                          <span>{item.size}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Media Inquiries
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              For press inquiries, interviews, or additional information, please contact our media team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Mail className="mr-2 h-5 w-5" />
                press@tradepro.com
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}