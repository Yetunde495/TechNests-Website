"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar } from "lucide-react";

// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// };

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
              Technests Terms of Service
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
                    By accessing and using Technests's services, you accept and
                    agree to be bound by the terms and provision of this
                    agreement. If you do not agree to abide by the above, please
                    do not use this service.
                  </p>
                  <p>
                    These Terms of Service ("Terms") govern your use of our
                    website located at Technests.ai (the "Service") operated by
                    Technests ("us", "we", or "our").
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Description of Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Technests is a locally-installed software solution designed
                    to support structured trading within the NinjaTrader 8
                    desktop environment. The platform operates entirely on the
                    user’s local system and does not utilize cloud storage,
                    APIs, or external data transmission. Our services include:
                  </p>

                  <p>
                    We provide tools for strategy automation, rule enforcement,
                    and disciplined execution. It is not a broker-dealer,
                    investment advisor, or trading signal provider. The software
                    does not execute trades autonomously on behalf of any
                    financial institution.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. User Responsibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    All trading decisions, executions, and outcomes are the sole
                    responsibility of the user. Technests does not guarantee
                    profitability or prevent losses. Use of the platform implies
                    acknowledgment and acceptance of full trading risk.{" "}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Refund and Cancellation Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    All purchases are final. Technests maintains a no-refund
                    policy across all subscription tiers, regardless of
                    performance outcomes, technical conditions, or usage levels.
                    Users may cancel their subscription at any time; access
                    remains valid through the end of the billing cycle.{" "}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Subscription Structure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Users may subscribe under the following tiers:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Starter: Up to 5 evaluation and 5 funded accounts</li>
                    <li>Growth: Up to 10 evaluation and 10 funded accounts</li>
                    <li>Elite: Unlimited accounts</li>
                  </ul>
                  <p>
                    Subscriptions automatically renew unless cancelled before
                    the renewal date. You may cancel your subscription at any
                    time through your account settings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    6. User-Generated Content and Disclaimers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Testimonials, account screenshots, and user-submitted
                    performance data may appear on Technests’ marketing
                    channels, including websites and social platforms. These
                    materials are submitted voluntarily and are not
                    independently reviewed or verified. Such content should not
                    be interpreted as representative, typical, or indicative of
                    future results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Termination and Fair Use</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Technests reserves the right to suspend or revoke access in
                    cases of misuse, license sharing, reverse engineering,
                    unauthorized redistribution, or violation of these terms. No
                    refunds will be issued in the event of termination due to
                    breach.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Support and Communication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Technical support is provided via email only. No phone or
                    live chat support is currently offered. Inquiries may take
                    up to 72 hours for response.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Governing Law and Dispute Resolution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    These Terms and Conditions are governed by the laws of the
                    State of California, United States. Any disputes arising
                    under or in connection with the use of the Technests
                    platform will be resolved via arbitration in Los Angeles
                    County, California.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Disclaimer of Warranties</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The software is provided “as-is” and “as-available.”
                    Technests disclaims all express or implied warranties,
                    including but not limited to fitness for a particular
                    purpose, merchantability, or performance outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>11. Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We reserve the right, at our sole discretion, to modify or
                    replace these Terms at any time. If a revision is material,
                    we will provide at least 30 days notice prior to any new
                    terms taking effect.
                  </p>
                  <p>
                    What constitutes a material change will be determined at our
                    sole discretion. By continuing to access or use our Service
                    after any revisions become effective, you agree to be bound
                    by the revised terms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
