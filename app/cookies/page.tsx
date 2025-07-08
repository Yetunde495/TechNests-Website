"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cookie,
  Calendar,
  Mail,
  Settings,
  BarChart3,
  Shield,
  Zap
} from 'lucide-react';

export default function Cookies() {
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
              <Cookie className="w-4 h-4 mr-2" />
              Cookie Policy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Learn about how we use cookies and similar technologies to enhance your experience.
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

      {/* Cookie Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.
                </p>
                <p>
                  We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period or until you delete them).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <CardTitle>Essential Cookies</CardTitle>
                    <CardDescription>Required for basic functionality</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  These cookies are necessary for our website to function properly and cannot be disabled:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Authentication:</strong> Keep you logged in to your account</li>
                  <li><strong>Security:</strong> Protect against cross-site request forgery attacks</li>
                  <li><strong>Load Balancing:</strong> Distribute traffic across our servers</li>
                  <li><strong>Session Management:</strong> Maintain your session state</li>
                </ul>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Legal Basis:</strong> Legitimate interest - these cookies are essential for providing our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Settings className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle>Functional Cookies</CardTitle>
                    <CardDescription>Enhance your user experience</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  These cookies remember your preferences and settings:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Theme Preferences:</strong> Remember your dark/light mode choice</li>
                  <li><strong>Language Settings:</strong> Store your preferred language</li>
                  <li><strong>Dashboard Layout:</strong> Save your customized dashboard configuration</li>
                  <li><strong>Notification Preferences:</strong> Remember your alert settings</li>
                </ul>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Legal Basis:</strong> Consent - you can disable these cookies, but some features may not work as expected.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <CardTitle>Analytics Cookies</CardTitle>
                    <CardDescription>Help us improve our platform</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  These cookies help us understand how you use our platform:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Usage Analytics:</strong> Track page views and user interactions</li>
                  <li><strong>Performance Monitoring:</strong> Identify slow-loading pages</li>
                  <li><strong>Error Tracking:</strong> Help us fix bugs and improve stability</li>
                  <li><strong>A/B Testing:</strong> Test different versions of features</li>
                </ul>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Third-party services:</strong> We use Google Analytics and other analytics tools. Data is anonymized and aggregated.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <CardTitle>Marketing Cookies</CardTitle>
                    <CardDescription>Personalized content and advertising</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  These cookies help us show you relevant content and measure campaign effectiveness:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Advertising:</strong> Show relevant ads on other websites</li>
                  <li><strong>Retargeting:</strong> Display personalized content based on your interests</li>
                  <li><strong>Campaign Tracking:</strong> Measure the effectiveness of our marketing</li>
                  <li><strong>Social Media:</strong> Enable sharing and social media features</li>
                </ul>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Legal Basis:</strong> Consent - you can opt out of these cookies at any time.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Your Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  You have several options for managing cookies:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Browser Settings</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Most browsers allow you to control cookies through their settings:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Block all cookies</li>
                      <li>Block third-party cookies only</li>
                      <li>Delete cookies when you close your browser</li>
                      <li>Get notified when cookies are set</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Cookie Preference Center</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Use our preference center to control which types of cookies you accept:
                    </p>
                    <Button variant="outline">
                      <Settings className="mr-2 h-4 w-4" />
                      Manage Cookie Preferences
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Opt-out Links</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Opt out of specific third-party services:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                      <li><a href="https://www.facebook.com/help/568137493302217" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Facebook Pixel Opt-out</a></li>
                      <li><a href="http://optout.aboutads.info/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Opt-out</a></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact of Disabling Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Disabling certain cookies may affect your experience:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-destructive">Without Essential Cookies:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Cannot log in to your account</li>
                      <li>Security features may not work</li>
                      <li>Forms may not submit properly</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-yellow-600">Without Functional Cookies:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Settings won't be remembered</li>
                      <li>Need to reconfigure preferences</li>
                      <li>Less personalized experience</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Updating the "Last updated" date at the top of this policy</li>
                  <li>Displaying a notice on our website</li>
                  <li>Sending an email notification for significant changes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>privacy@Technests.com</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}