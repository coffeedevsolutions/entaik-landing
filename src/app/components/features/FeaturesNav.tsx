"use client";

import Link from "next/link";
import { Brain, FileText, Shield, BarChart3, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const features = [
  {
    id: "ai-survey-platform",
    name: "AI Survey Platform",
    description: "Adaptive surveys that get completed",
    icon: Brain,
    href: "/features/ai-survey-platform",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: "automated-documentation",
    name: "Automated Documentation",
    description: "Turn conversations into project briefs",
    icon: FileText,
    href: "/features/automated-documentation",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: "enterprise-integrations",
    name: "Enterprise & Integrations",
    description: "Secure, scalable, and compliant",
    icon: Shield,
    href: "/features/enterprise-integrations",
    gradient: "from-teal-500 to-emerald-600"
  },
  {
    id: "analytics-intelligence",
    name: "Analytics & Intelligence",
    description: "Data-driven insights and predictions",
    icon: BarChart3,
    href: "/features/analytics-intelligence",
    gradient: "from-orange-500 to-amber-600"
  }
];

interface FeaturesNavProps {
  variant?: "top" | "bottom";
}

export function FeaturesNav({ variant = "top" }: FeaturesNavProps) {
  const pathname = usePathname();

  return (
    <section className={`py-12 ${variant === "top" ? "bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200" : "bg-gradient-to-br from-gray-900 to-gray-800 text-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className={`text-2xl font-bold mb-2 ${variant === "bottom" ? "text-white" : "text-gray-900"}`}>
            {variant === "top" ? "Explore Platform Features" : "Discover More Features"}
          </h2>
          <p className={variant === "bottom" ? "text-gray-300" : "text-gray-600"}>
            See how Uptaik transforms your workflow at every stage
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isActive = pathname === feature.href;

            return (
              <Link
                key={feature.id}
                href={feature.href}
                className={`group relative rounded-xl p-6 transition-all duration-300 ${
                  isActive
                    ? variant === "bottom"
                      ? "bg-white/10 ring-2 ring-white/30 scale-105"
                      : "bg-white ring-2 ring-blue-500/30 shadow-lg scale-105"
                    : variant === "bottom"
                    ? "bg-white/5 hover:bg-white/10 hover:scale-105"
                    : "bg-white hover:shadow-xl hover:scale-105 border border-gray-200"
                }`}
              >
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className={`font-semibold ${variant === "bottom" ? "text-white" : "text-gray-900"} ${isActive ? "text-blue-600" : ""}`}>
                    {feature.name}
                  </h3>
                  <p className={`text-sm ${variant === "bottom" ? "text-gray-300" : "text-gray-600"}`}>
                    {feature.description}
                  </p>
                </div>

                {/* Arrow indicator for non-active items */}
                {!isActive && (
                  <div className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity ${variant === "bottom" ? "text-white" : "text-blue-600"}`}>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Bottom text for bottom variant */}
        {variant === "bottom" && (
          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              All features work seamlessly together to create a complete AI-powered workflow management solution
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

