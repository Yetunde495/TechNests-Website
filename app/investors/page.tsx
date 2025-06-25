"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp,
  Calendar,
  Download,
  Mail,
  BarChart3,
  Users,
  DollarSign,
  Globe,
  FileText,
  PieChart
} from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const keyMetrics = [
  {
    icon: Users,
    label: "Active Users",
    value: "25,000+",
    growth: "+45% YoY"
  },
  {
    icon: DollarSign,
    label: "Revenue",
    value: "$12.5M",
    growth: "+78% YoY"
  },
  {
    icon: Globe,
    label: "Markets",
    value: "50+",
    growth: "+25% YoY"
  },
  {
    icon: BarChart3,
    label: "Trading Volume",
    value: "$2.1B",
    growth: "+92% YoY"
  }
];

const financialReports = [
  {
    title: "Q4 2023 Earnings Report",
    date: "2024-01-15",
    type: "Quarterly Report",
    size: "2.3 MB"
  },
  {
    title: "Annual Report 2023",
    date: "2024-01-10",
    type: "Annual Report",
    size: "5.7 MB"
  },
  {
    title: "Q3 2023 Earnings Report",
    date: "2023-10-15",
    type: "Quarterly Report",
    size: "2.1 MB"
  },
  {
    title: "Investor Presentation Q4 2023",
    date: "2024-01-15",
    type: "Presentation",
    size: "8.4 MB"
  }
];

const upcomingEvents = [
  {
    title: "Q1 2024 Earnings Call",
    date: "2024-04-15",
    time: "4:00 PM EST",
    type: "Earnings Call"
  },
  {
    title: "FinTech Innovation Summit",
    date: "2024-03-20",
    time: "10:00 AM EST",
    type: "Conference"
  },
  {
    title: "Investor Day 2024",
    date: "2024-05-10",
    time: "9:00 AM EST",
    type: "Investor Event"
  }
];

const milestones = [
  {
    year: "2024",
    title: "Series B Funding",
    description: "Raised $50M Series B led by top-tier VCs"
  },
  {
    year: "2023",
    title: "25K Users Milestone",
    description: "Reached 25,000 active traders on platform"
  },
  {
    year: "2022",
    title: "Series A Funding",
    description: "Completed $15M Series A funding round"
  },
  {
    year: "2021",
    title: "International Expansion",
    description: "Launched in 20+ international markets"
  }
];

export default function Investors() {
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
              <TrendingUp className="w-4 h-4 mr-2" />
              Investor Relations
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Investor Relations
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Financial information, reports, and updates for TradePro investors and stakeholders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
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
              Key Performance Metrics
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our latest financial and operational performance indicators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-bold">{metric.value}</CardTitle>
                    <CardDescription>{metric.label}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="text-emerald-600">
                      {metric.growth}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Reports */}
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
              Financial Reports
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Access our latest financial reports, earnings statements, and investor presentations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {financialReports.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline">{report.type}</Badge>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {new Date(report.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="font-semibold mb-2">{report.title}</h3>
                        <p className="text-sm text-muted-foreground">{report.size}</p>
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

      {/* Upcoming Events */}
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
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground">
              Mark your calendar for upcoming investor events and earnings calls.
            </p>
          </motion.div>

          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(event.date).toLocaleDateString()}
                          </span>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Add to Calendar
                        </Button>
                        <Button size="sm">
                          Register
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

      {/* Company Milestones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Company Milestones
            </h2>
            <p className="text-xl text-muted-foreground">
              Key achievements and milestones in our growth journey.
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
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
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
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
              Investment Highlights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key reasons why TradePro represents a compelling investment opportunity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle>Market Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Leading position in the rapidly growing retail trading automation market with strong competitive moats.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-emerald-500" />
                  </div>
                  <CardTitle>Strong Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Consistent revenue growth with expanding user base and increasing trading volumes across global markets.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <PieChart className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle>Scalable Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Proprietary AI-powered platform with high scalability and strong unit economics driving profitability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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
              Investor Contact
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              For investor inquiries, financial information, or to schedule a meeting with our IR team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Mail className="mr-2 h-5 w-5" />
                investors@tradepro.com
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="mr-2 h-5 w-5" />
                Download Investor Kit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}