"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield,
  Lock,
  Eye,
  Server,
  CheckCircle,
  AlertTriangle,
  Key,
  Database,
  Globe,
  UserCheck,
  FileText,
  Mail
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted using AES-256 encryption both in transit and at rest.",
    color: "text-blue-500"
  },
  {
    icon: Key,
    title: "Multi-Factor Authentication",
    description: "Secure your account with SMS, email, or authenticator app-based 2FA.",
    color: "text-emerald-500"
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Enterprise-grade cloud infrastructure with 99.9% uptime guarantee.",
    color: "text-purple-500"
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description: "Continuous security monitoring and threat detection systems.",
    color: "text-red-500"
  },
  {
    icon: Database,
    title: "Data Protection",
    description: "Regular backups and disaster recovery procedures to protect your data.",
    color: "text-yellow-500"
  },
  {
    icon: UserCheck,
    title: "Access Controls",
    description: "Role-based access controls and principle of least privilege.",
    color: "text-indigo-500"
  }
];

const certifications = [
  {
    title: "SOC 2 Type II",
    description: "Audited security controls for availability, confidentiality, and privacy",
    status: "Certified"
  },
  {
    title: "ISO 27001",
    description: "International standard for information security management systems",
    status: "Certified"
  },
  {
    title: "PCI DSS Level 1",
    description: "Payment card industry data security standard compliance",
    status: "Compliant"
  },
  {
    title: "GDPR Compliant",
    description: "European General Data Protection Regulation compliance",
    status: "Compliant"
  }
];

const securityPractices = [
  {
    category: "Data Security",
    practices: [
      "AES-256 encryption for data at rest",
      "TLS 1.3 encryption for data in transit",
      "Regular security audits and penetration testing",
      "Secure key management and rotation",
      "Data anonymization and pseudonymization"
    ]
  },
  {
    category: "Access Security",
    practices: [
      "Multi-factor authentication (MFA)",
      "Single sign-on (SSO) integration",
      "Role-based access control (RBAC)",
      "Session management and timeout",
      "IP whitelisting and geofencing"
    ]
  },
  {
    category: "Infrastructure Security",
    practices: [
      "AWS/GCP enterprise security features",
      "Network segmentation and firewalls",
      "DDoS protection and mitigation",
      "Intrusion detection and prevention",
      "Regular security patches and updates"
    ]
  },
  {
    category: "Operational Security",
    practices: [
      "24/7 security operations center (SOC)",
      "Incident response procedures",
      "Employee security training",
      "Background checks for all staff",
      "Secure development lifecycle (SDLC)"
    ]
  }
];

const incidentResponse = [
  {
    step: "1",
    title: "Detection",
    description: "Automated monitoring systems detect potential security incidents"
  },
  {
    step: "2", 
    title: "Assessment",
    description: "Security team assesses the severity and scope of the incident"
  },
  {
    step: "3",
    title: "Containment",
    description: "Immediate actions taken to contain and isolate the threat"
  },
  {
    step: "4",
    title: "Investigation",
    description: "Thorough investigation to understand the root cause"
  },
  {
    step: "5",
    title: "Recovery",
    description: "Systems restored and additional security measures implemented"
  },
  {
    step: "6",
    title: "Communication",
    description: "Stakeholders notified according to regulatory requirements"
  }
];

export default function Security() {
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
              <Shield className="w-4 h-4 mr-2" />
              Security & Trust
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Security & Compliance
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your security is our top priority. Learn about our comprehensive security 
              measures and compliance standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
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
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement multiple layers of security to protect your data and trading activities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{  opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest industry standards and regulatory compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-emerald-500" />
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="text-emerald-600">
                      {cert.status}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
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
              Security Practices
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security measures across all aspects of our platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityPractices.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.practices.map((practice, practiceIndex) => (
                        <li key={practiceIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
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
              Incident Response Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Our structured approach to handling security incidents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {incidentResponse.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg text-center">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
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
              Security Best Practices for Users
            </h2>
            <p className="text-xl text-muted-foreground">
              Help us keep your account secure by following these recommendations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  Protect Your Account
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Account Security</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Use a strong, unique password
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Enable two-factor authentication
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Regularly review account activity
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Log out from shared devices
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Safe Trading</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Verify all trading signals
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Set appropriate risk limits
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Monitor automated trades
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Report suspicious activity
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Security Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our security team is here to help with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Mail className="mr-2 h-5 w-5" />
                security@tradepro.com
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="mr-2 h-5 w-5" />
                Security Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}