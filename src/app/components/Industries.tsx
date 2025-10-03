import { Card } from "./ui/card";
import { 
  HardHat, 
  Zap, 
  Heart, 
  Truck, 
  Settings, 
  Shield, 
  GraduationCap, 
  ShoppingCart, 
  Building2 
} from "lucide-react";

const industries = [
  {
    icon: HardHat,
    name: "Construction",
    description: "Manage capital project requests from site teams, track infrastructure needs, and prioritize safety improvements with complete documentation and stakeholder visibility."
  },
  {
    icon: Zap,
    name: "Utilities",
    description: "Centralize requests for grid upgrades, outage responses, and regulatory compliance projects. Automatically capture asset details and service area impacts."
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Streamline clinical system requests, facility improvements, and operational changes. Ensure compliance documentation and impact assessment for patient care."
  },
  {
    icon: Truck,
    name: "Logistics & Transportation",
    description: "Handle intake for fleet management, route optimization, and supply chain efficiency projects. Gain visibility into costs, timelines, and operational impacts."
  },
  {
    icon: Settings,
    name: "Manufacturing",
    description: "Centralize requests for production system upgrades, quality control improvements, and automation initiatives. Standardize intake to align with lean manufacturing workflows."
  },
  {
    icon: Shield,
    name: "Insurance",
    description: "Capture intake for claims systems, policy management upgrades, and compliance-driven projects. Prioritize IT requests by customer impact and regulatory need."
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Streamline academic technology requests, campus facility improvements, and administrative system updates. Ensure transparency across stakeholders while tracking compliance."
  },
  {
    icon: ShoppingCart,
    name: "Retail",
    description: "Manage requests for point-of-sale upgrades, e-commerce integrations, and store operations projects. Improve prioritization with ROI scoring and real-time impact visibility."
  },
  {
    icon: Building2,
    name: "Government & Public Sector",
    description: "Standardize intake for infrastructure projects, public service IT requests, and regulatory compliance initiatives. Improve transparency and reporting for constituents and oversight agencies."
  }
];

export function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-muted/30 font-[family-name:var(--font-suse-mono)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl">Built for Non-Tech Enterprises</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built for industries where projects are complex and stakeholders aren&apos;t always technical
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} className="p-8 space-y-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl">{industry.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}