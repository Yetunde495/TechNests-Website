"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle,
  Shield,
  Zap,
  CreditCard,
  Lock,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 49,
    features: [
      "5 Trading Signals/Day",
      "Basic Risk Management", 
      "Email Support",
      "Mobile App Access",
      "Basic Analytics"
    ]
  },
  {
    id: "professional",
    name: "Professional",
    price: 149,
    popular: true,
    features: [
      "25 Trading Signals/Day",
      "Advanced Risk Management",
      "Priority Support", 
      "Mobile App Access",
      "Advanced Analytics",
      "Advanced Automation",
      "Custom Alerts"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise", 
    price: 399,
    features: [
      "Unlimited Trading Signals",
      "Institutional Risk Management",
      "24/7 Dedicated Support",
      "Mobile App Access", 
      "Advanced Analytics",
      "Advanced Automation",
      "Custom Alerts",
      "Custom Strategies"
    ]
  }
];

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    agreeToTerms: false,
    subscribeNewsletter: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real app, this would make API call to create subscription
      console.log('Subscription data:', {
        plan: selectedPlan,
        billing: billingCycle,
        user: formData
      });

      toast({
        title: "Welcome to TradePro!",
        description: "Your free trial has started. Check your email for next steps."
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        agreeToTerms: false,
        subscribeNewsletter: true
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan);
  const finalPrice = billingCycle === "yearly" ? 
    Math.round(selectedPlanData!.price * 12 * 0.8) : 
    selectedPlanData!.price;

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Start Your Free Trial
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join TradePro Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start your 7-day free trial. No credit card required. 
              Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Plan Selection */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Choose Your Plan</CardTitle>
                <CardDescription>
                  Select the plan that best fits your trading needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Billing Toggle */}
                <div className="flex items-center justify-center space-x-4 p-1 bg-muted rounded-lg">
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-4 py-2 rounded-md transition-all ${
                      billingCycle === "monthly" 
                        ? "bg-background shadow-sm" 
                        : "text-muted-foreground"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle("yearly")}
                    className={`px-4 py-2 rounded-md transition-all ${
                      billingCycle === "yearly" 
                        ? "bg-background shadow-sm" 
                        : "text-muted-foreground"
                    }`}
                  >
                    Yearly
                    <Badge variant="secondary" className="ml-2">
                      Save 20%
                    </Badge>
                  </button>
                </div>

                {/* Plan Options */}
                <div className="space-y-3">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedPlan === plan.id
                          ? "border-primary bg-primary/5"
                          : "border-muted hover:border-muted-foreground/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            selectedPlan === plan.id
                              ? "border-primary bg-primary"
                              : "border-muted-foreground"
                          }`}>
                            {selectedPlan === plan.id && (
                              <div className="w-full h-full rounded-full bg-background scale-50" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{plan.name}</h3>
                            {plan.popular && (
                              <Badge variant="default" className="mt-1">
                                Most Popular
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">
                            ${billingCycle === "yearly" ? Math.round(plan.price * 12 * 0.8) : plan.price}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            /{billingCycle === "yearly" ? "year" : "month"}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {plan.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-emerald-500" />
                            {feature}
                          </div>
                        ))}
                        {plan.features.length > 3 && (
                          <div className="text-sm text-muted-foreground">
                            +{plan.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Security Icons */}
                <div className="flex items-center justify-center gap-6 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    SSL Encrypted
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    Secure Payment
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CreditCard className="h-4 w-4" />
                    No Setup Fee
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Free Trial</CardTitle>
                <CardDescription>
                  Fill out the form below to begin your 7-day free trial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select onValueChange={(value) => handleInputChange("country", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I agree to the{" "}
                        <a href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.subscribeNewsletter}
                        onCheckedChange={(checked) => handleInputChange("subscribeNewsletter", checked)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for trading tips and updates
                      </Label>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Order Summary</h3>
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span>{selectedPlanData?.name} Plan</span>
                      <span>${selectedPlanData?.price}/{billingCycle === "yearly" ? "year" : "month"}</span>
                    </div>
                    {billingCycle === "yearly" && (
                      <div className="flex justify-between items-center text-sm text-emerald-600 mb-2">
                        <span>Yearly Discount (20%)</span>
                        <span>-${Math.round(selectedPlanData!.price * 12 * 0.2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center font-semibold pt-2 border-t">
                      <span>Total</span>
                      <span>
                        FREE for 7 days, then ${finalPrice}/{billingCycle === "yearly" ? "year" : "month"}
                      </span>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Starting Your Trial..."
                    ) : (
                      <>
                        Start Free Trial
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Your trial starts immediately. No credit card required. 
                    Cancel anytime during the trial period.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}