"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText,
  Calendar,
  Mail
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Terms() {
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
              <FileText className="w-4 h-4 mr-2" />
              Legal Documents
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Please read these terms carefully before using Technests services.
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

      {/* Terms Content */}
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
                  <CardTitle>1. Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    By accessing and using Technests's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p>
                    These Terms of Service ("Terms") govern your use of our website located at Technests.com (the "Service") operated by Technests ("us", "we", or "our").
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Description of Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Technests provides automated trading signals and precision automation tools for financial markets. Our services include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Real-time trading signals for various financial instruments</li>
                    <li>Automated trading execution capabilities</li>
                    <li>Risk management tools and analytics</li>
                    <li>Educational resources and market analysis</li>
                    <li>Customer support and technical assistance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. User Accounts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                  </p>
                  <p>
                    You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Financial Risk Disclosure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-semibold text-destructive">
                    IMPORTANT: Trading financial instruments involves substantial risk and may not be suitable for all investors.
                  </p>
                  <p>
                    You acknowledge and understand that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Past performance is not indicative of future results</li>
                    <li>You may lose some or all of your invested capital</li>
                    <li>Trading signals are for informational purposes only</li>
                    <li>You are solely responsible for your trading decisions</li>
                    <li>We do not guarantee profits or prevent losses</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Subscription and Payment Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis ("Billing Cycle").
                  </p>
                  <p>
                    A valid payment method, including credit card, is required to process the payment for your subscription. You shall provide accurate and complete billing information.
                  </p>
                  <p>
                    Subscriptions automatically renew unless cancelled before the renewal date. You may cancel your subscription at any time through your account settings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Prohibited Uses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    You may not use our Service:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Intellectual Property Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of Technests and its licensors. The Service is protected by copyright, trademark, and other laws.
                  </p>
                  <p>
                    Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In no event shall Technests, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Termination</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                  </p>
                  <p>
                    If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                  <p>
                    What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>11. Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>legal@Technests.com</span>
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