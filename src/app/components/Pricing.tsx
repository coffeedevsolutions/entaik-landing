"use client";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Check, Sparkles, Users, Zap, Target, Award, TrendingUp, Shield } from "lucide-react";

interface PricingProps {
  onNavigate?: (view: string, section?: string) => void;
}

const betaBenefits = [
  {
    icon: Target,
    title: "Shape the Product",
    description: "Direct influence on our roadmap and feature development"
  },
  {
    icon: Zap,
    title: "Premium Features Unlocked",
    description: "Full access to Professional tier features at no cost"
  },
  {
    icon: Users,
    title: "Priority Support",
    description: "Dedicated onboarding and direct access to our product team"
  },
  {
    icon: Award,
    title: "Founding User Recognition",
    description: "Be featured as an early adopter with exclusive benefits at launch"
  },
  {
    icon: TrendingUp,
    title: "Early Adopter Advantages",
    description: "Special pricing and legacy benefits when we launch publicly"
  },
  {
    icon: Shield,
    title: "Risk-Free Partnership",
    description: "No cost during beta—just feedback, collaboration, and curiosity"
  }
];

const futureTiers = [
  {
    name: "Starter",
    designedFor: "Small teams",
    features: [
      "Core AI-powered intake features",
      "Limited workflow templates",
      "Basic integrations",
      "Email support"
    ],
    availability: "Launch 2025"
  },
  {
    name: "Professional",
    designedFor: "Growing organizations",
    features: [
      "Advanced workflows & automation",
      "Full integration suite",
      "Auto-prioritization (RICE, WSJF)",
      "Priority support & onboarding"
    ],
    availability: "Launch 2025",
    highlight: true
  },
  {
    name: "Enterprise",
    designedFor: "Large-scale deployments",
    features: [
      "Custom security & compliance",
      "SSO/SAML authentication",
      "Dedicated success manager",
      "White-label deployment"
    ],
    availability: "By Request"
  }
];

export function Pricing({ onNavigate }: PricingProps) {
  return (
    <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6 pt-12">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-600 hover:to-purple-600 border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              Join the Beta
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-4xl mx-auto">
              Early Access to the Future of Intake
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be among the first to shape the platform that transforms how teams handle intake and requirements. Limited seats available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate("home", "waitlist");
                  } else {
                    window.location.href = "/#waitlist";
                  }
                }}
              >
                Join the Beta
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="cursor-pointer"
                onClick={() => {
                    if (onNavigate) {
                      onNavigate("request-demo");
                    } else {
                      window.location.href = "/request-demo";
                    }
                  }} 
              >
                Request a Demo
              </Button>
            </div>
          </div>

          {/* Beta Program Overview */}
          <div className="mb-20">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-0">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold">How the Beta Program Works</h2>
                  <p className="text-lg text-muted-foreground">
                    No pricing yet — just partnership, feedback, and collaboration.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      What You Get
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Full access to all Professional tier features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Direct influence on product roadmap and priorities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Dedicated onboarding and training sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Priority support with direct product team access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Founding user recognition and exclusive launch benefits</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      What We Ask
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Regular feedback through surveys and calls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Willingness to test new features and provide input</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Potential participation in case studies (optional)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Active use of the platform to validate features</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-border">
                  <Card className="p-6 bg-white">
                    <h4 className="font-semibold mb-2">Duration</h4>
                    <p className="text-muted-foreground">Beta access runs through Q2 2025, with early access continuing beyond for founding users.</p>
                  </Card>
                  <Card className="p-6 bg-white">
                    <h4 className="font-semibold mb-2">Cost</h4>
                    <p className="text-muted-foreground">No cost during beta. Exclusive program access—future pricing will be shared before public launch.</p>
                  </Card>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits of Joining the Beta */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join the Beta?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Be part of something special from day one
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {betaBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Future Pricing Transparency */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Pricing (Coming 2025)</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                During beta, all participants enjoy full access to Professional tier features at no cost. Final pricing will be shared before public launch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {futureTiers.map((tier, index) => (
                <Card 
                  key={index} 
                  className={`p-6 space-y-6 relative ${tier.highlight ? 'border-2 border-blue-600 shadow-xl' : ''}`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                        Beta Includes This
                      </Badge>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground">{tier.designedFor}</p>
                  </div>

                  <div className="py-4 border-y border-border">
                    <div className="text-3xl font-bold text-muted-foreground">—</div>
                    <div className="text-sm text-muted-foreground mt-1">{tier.availability}</div>
                  </div>

                  <div className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
              <div className="text-center space-y-2">
                <p className="text-sm font-semibold text-amber-900">
                  Beta Participants Get Special Treatment
                </p>
                <p className="text-sm text-amber-800">
                  As a founding user, you&apos;ll receive preferential pricing, legacy benefits, and the option to lock in your plan before public rates take effect.
                </p>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <Card className="p-6 space-y-3">
                <h4 className="text-lg font-semibold">Will the beta be free?</h4>
                <p className="text-muted-foreground">
                  Yes. Beta participants will not be charged during the beta period. We&apos;re not asking for dollars—we&apos;re asking for feedback, collaboration, and curiosity. In return, you&apos;ll get early access to all Professional tier features and special founder benefits when pricing launches.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <h4 className="text-lg font-semibold">When will pricing be announced?</h4>
                <p className="text-muted-foreground">
                  Pricing will be announced before our general release in Q2 2025. Beta participants will receive advance notice and preferential pricing options, including the ability to lock in founding user rates.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <h4 className="text-lg font-semibold">What happens after the beta ends?</h4>
                <p className="text-muted-foreground">
                  You&apos;ll have the option to convert to a paid plan with exclusive discounts and legacy benefits not available to new customers. We&apos;ll work with you to ensure a smooth transition and find the right pricing tier for your needs.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <h4 className="text-lg font-semibold">How are beta participants selected?</h4>
                <p className="text-muted-foreground">
                  We&apos;re looking for teams who are genuinely interested in improving their intake processes and can provide meaningful feedback. We prioritize diversity of use cases, team sizes, and industries to ensure the platform works for everyone.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <h4 className="text-lg font-semibold">How much time commitment is required?</h4>
                <p className="text-muted-foreground">
                  We ask for monthly feedback calls (30-45 minutes) and occasional testing of new features. Most teams spend 2-3 hours per month on feedback activities. The more you engage, the more influence you&apos;ll have on the product roadmap.
                </p>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
            <div className="relative p-12 md:p-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-center space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Limited Seats Available
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Secure Your Spot in the Beta</h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  No pricing yet. No commitments. Just partnership, feedback, and collaboration.<br/>
                  <span className="font-semibold text-foreground">Be part of building the future of intake.</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer text-base"
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate("home", "waitlist");
                    } else {
                      window.location.href = "/#waitlist";
                    }
                  }}
                >
                  Join the Beta
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 cursor-pointer text-base"
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate("request-demo");
                    } else {
                      window.location.href = "/request-demo";
                    }
                  }}                 
                  >
                  Request a Demo
                </Button>
              </div>

              <p className="text-sm text-muted-foreground pt-4">
                Questions? <button 
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate("contact");
                    } else {
                      window.location.href = "/contact";
                    }
                  }} 
                  className="text-blue-600 hover:text-blue-700 font-semibold underline cursor-pointer"
                >
                  Get in touch
                </button> with our team
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}