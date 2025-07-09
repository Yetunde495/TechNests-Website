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

export default function PropFirmDisclaimer() {
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
              Disclaimer
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technests – Prop Firm Brand Affiliation Disclaimer
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Last updated: June 19, 2025
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
                  <CardTitle>
                    1. Third-Party Brand and Prop Firm References
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Technests may reference or display the names, trademarks, or
                    logos of third-party proprietary trading firms, including
                    but not limited to Apex Trader Funding, FTMO, TopStep,
                    FundedNext, MyForexFunds, E8, The5%ers, and other prop
                    firms, solely for the purposes of providing context,
                    compatibility information, or illustrative examples.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. No Affiliation or Endorsement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Unless explicitly stated, Technests is not affiliated with,
                    endorsed by, partnered with, or officially connected to any
                    of the aforementioned proprietary trading firms. All
                    trademarks, service marks, logos, and company names are the
                    property of their respective owners.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Purpose of References</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Any mention of these third-party firms is provided purely to
                    inform users about potential usage compatibility or
                    integration with Technests software. Such references do not
                    imply a business relationship, certification, sponsorship,
                    or representation..{" "}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Independence Statement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Technests is an independent software provider. The platform
                    is designed to assist traders who may choose to operate
                    within various proprietary trading ecosystems, but it does
                    not act as a broker-dealer, agent, or representative of any
                    prop trading firm.{" "}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Use of Logos and Brand Assets</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Logos or brand assets that may appear on Technests
                    materials, website, or demonstrations are used in a
                    nominative fair use capacity for identification purposes
                    only. No ownership, sponsorship, or approval is implied.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    If you are a representative of a proprietary trading firm
                    and have questions about brand references or require a
                    clarification, please contact us at team@technests.ai.
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
