import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Check, Sparkles } from "lucide-react";

interface PricingProps {
  onNavigate: (view: string) => void;
}

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with AI-powered intake",
    price: "$299",
    period: "/month",
    features: [
      "Up to 50 intake requests/month",
      "3 custom workflows",
      "Basic AI survey builder",
      "Email notifications",
      "Slack integration",
      "7-day response time SLA",
      "Email support"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    description: "For growing teams managing multiple intake streams",
    price: "$799",
    period: "/month",
    features: [
      "Up to 200 intake requests/month",
      "10 custom workflows",
      "Advanced AI with conditional logic",
      "Jira/Azure DevOps integration",
      "Auto-prioritization (RICE, WSJF, MoSCoW)",
      "Custom branding",
      "48-hour response time SLA",
      "Priority email & chat support",
      "Dedicated onboarding"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex intake needs",
    price: "Custom",
    period: "pricing",
    features: [
      "Unlimited intake requests",
      "Unlimited custom workflows",
      "White-label deployment",
      "Advanced security & compliance",
      "SSO/SAML authentication",
      "Custom API integrations",
      "24-hour response time SLA",
      "Dedicated success manager",
      "Custom training & workshops",
      "SLA guarantees"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const addOns = [
  {
    name: "Additional Workflows",
    price: "$50/month per workflow"
  },
  {
    name: "Extra Requests",
    price: "$1 per additional request"
  },
  {
    name: "Advanced Analytics",
    price: "$199/month"
  },
  {
    name: "Custom Integrations",
    price: "Custom pricing"
  }
];

export function Pricing({ onNavigate }: PricingProps) {
  return (
    <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6 pt-12">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200">
              Pricing
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-4xl mx-auto">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start with a 14-day free trial. No credit card required. Scale as you grow.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`p-8 space-y-6 relative ${plan.popular ? 'border-2 border-blue-600 shadow-xl' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 gap-1">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="text-2xl">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => plan.cta === "Contact Sales" ? onNavigate("request-demo") : null}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3 pt-6 border-t border-border">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4">Add-ons & Extensions</h2>
              <p className="text-lg text-muted-foreground">
                Enhance your plan with additional capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {addOns.map((addon) => (
                <Card key={addon.name} className="p-6 space-y-2">
                  <h4 className="text-base">{addon.name}</h4>
                  <p className="text-sm text-muted-foreground">{addon.price}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <Card className="p-6 space-y-2">
                <h4 className="text-lg">Can I change plans later?</h4>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
                </p>
              </Card>

              <Card className="p-6 space-y-2">
                <h4 className="text-lg">What happens if I exceed my request limit?</h4>
                <p className="text-muted-foreground">
                  Additional requests are billed at $1 per request. You&apos;ll receive notifications as you approach your limit.
                </p>
              </Card>

              <Card className="p-6 space-y-2">
                <h4 className="text-lg">Do you offer annual billing?</h4>
                <p className="text-muted-foreground">
                  Yes, annual billing is available with a 20% discount. Contact sales for details.
                </p>
              </Card>

              <Card className="p-6 space-y-2">
                <h4 className="text-lg">What integrations are included?</h4>
                <p className="text-muted-foreground">
                  All plans include Slack integration. Professional and Enterprise plans include Jira, Azure DevOps, and custom integrations via API.
                </p>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 p-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl text-center space-y-6">
            <h2 className="text-3xl">Ready to transform your intake process?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your free 14-day trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onNavigate("request-demo")}
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
}