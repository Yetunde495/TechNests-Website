"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield,
  Calendar,
  Mail,
  Lock,
  Eye,
  Database,
  UserCheck
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Privacy() {
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
              Privacy & Security
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your information.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Last updated: January 1, 2025
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Eye className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <CardTitle>Information We Collect</CardTitle>
                      <CardDescription>What data we gather and why</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact us for support.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Personal Information:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Name and email address</li>
                      <li>Phone number (optional)</li>
                      <li>Billing and payment information</li>
                      <li>Trading preferences and settings</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Usage Information:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Log data and device information</li>
                      <li>Trading activity and performance data</li>
                      <li>Communication preferences</li>
                      <li>Support interactions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Database className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <CardTitle>How We Use Your Information</CardTitle>
                      <CardDescription>Our purposes for data processing</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We use the information we collect to provide, maintain, and improve our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and deliver our trading services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Analyze usage patterns to improve our platform</li>
                    <li>Detect and prevent fraudulent activities</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <UserCheck className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <CardTitle>Information Sharing</CardTitle>
                      <CardDescription>When and how we share your data</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Service Providers:</h4>
                    <p>
                      We may share information with trusted third-party service providers who assist us in operating our platform, conducting business, or serving our users.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Legal Requirements:</h4>
                    <p>
                      We may disclose information when required by law, regulation, legal process, or governmental request.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Business Transfers:</h4>
                    <p>
                      In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the transaction.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <Lock className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <CardTitle>Data Security</CardTitle>
                      <CardDescription>How we protect your information</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>AES-256 encryption for data storage</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Multi-factor authentication options</li>
                    <li>Access controls and employee training</li>
                    <li>Secure data centers with physical security</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Rights and Choices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    You have certain rights regarding your personal information:
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Access and Portability:</h4>
                    <p>You can request a copy of your personal information in a structured, machine-readable format.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Correction:</h4>
                    <p>You can update or correct your personal information through your account settings.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Deletion:</h4>
                    <p>You can request deletion of your personal information, subject to certain legal limitations.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Marketing Communications:</h4>
                    <p>You can opt out of marketing emails by clicking the unsubscribe link or updating your preferences.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cookies and Tracking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience:
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Essential Cookies:</h4>
                    <p>Required for the platform to function properly, including authentication and security.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Analytics Cookies:</h4>
                    <p>Help us understand how users interact with our platform to improve performance.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Preference Cookies:</h4>
                    <p>Remember your settings and preferences for a personalized experience.</p>
                  </div>
                  <p>
                    You can control cookie settings through your browser preferences, though this may affect platform functionality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Retention</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Account information: Until account deletion or 7 years after last activity</li>
                    <li>Trading data: 7 years for regulatory compliance</li>
                    <li>Support communications: 3 years</li>
                    <li>Marketing data: Until you opt out or 2 years of inactivity</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>International Transfers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Standard contractual clauses approved by regulatory authorities</li>
                    <li>Adequacy decisions for certain countries</li>
                    <li>Certification schemes and codes of conduct</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending an email notification to registered users</li>
                    <li>Displaying a prominent notice on our platform</li>
                  </ul>
                  <p>
                    Your continued use of our services after any changes indicates your acceptance of the updated policy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>privacy@tradepro.com</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="h-4 w-4 mt-1" />
                      <div>
                        <p>Data Protection Officer</p>
                        <p className="text-sm text-muted-foreground">
                          TradePro Inc.<br />
                          123 Wall Street, Suite 456<br />
                          New York, NY 10005
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}