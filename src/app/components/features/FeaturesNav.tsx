"use client";

import Link from "next/link";
import { Brain, FileText, Shield, BarChart3, ChevronRight, ChevronLeft } from "lucide-react";
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
    id: "analytics-intelligence",
    name: "Analytics & Intelligence",
    description: "Data-driven insights and predictions",
    icon: BarChart3,
    href: "/features/analytics-intelligence",
    gradient: "from-orange-500 to-amber-600"
  },
  {
    id: "enterprise-integrations",
    name: "Enterprise & Integrations",
    description: "Secure, scalable, and compliant",
    icon: Shield,
    href: "/features/enterprise-integrations",
    gradient: "from-teal-500 to-emerald-600"
  }
];

interface FeaturesNavProps {
  variant?: "top" | "bottom";
}

export function FeaturesNav({ variant = "top" }: FeaturesNavProps) {
  const pathname = usePathname();

  const currentFeatureIndex = features.findIndex(f => f.href === pathname);
  const prevFeature = currentFeatureIndex > 0 ? features[currentFeatureIndex - 1] : null;
  const nextFeature = currentFeatureIndex < features.length - 1 ? features[currentFeatureIndex + 1] : null;

  return (
    <section className={`${variant === "top" ? "bg-gradient-to-br from-gray-50 to-gray-100 border-y border-gray-200" : "bg-gradient-to-br from-gray-900 to-gray-800 text-white border-t border-white/10"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-[family-name:var(--font-suse-mono)]">
        
        {/* MOBILE VIEW - Compact Horizontal Scroll */}
        <div className="lg:hidden py-4">
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between px-1">
              <p className={`text-xs font-semibold ${variant === "bottom" ? "text-gray-400" : "text-gray-600"} uppercase tracking-wide`}>
                Platform Features
              </p>
              {prevFeature && (
                <Link href={prevFeature.href} className={`text-xs ${variant === "bottom" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} flex items-center gap-1`}>
                  <ChevronLeft className="w-3 h-3" />
                  Prev
                </Link>
              )}
              {nextFeature && !prevFeature && (
                <Link href={nextFeature.href} className={`text-xs ${variant === "bottom" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} flex items-center gap-1`}>
                  Next
                  <ChevronRight className="w-3 h-3" />
                </Link>
              )}
            </div>

            {/* Horizontal Scrollable Feature Cards */}
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {features.map((feature) => {
                const Icon = feature.icon;
                const isActive = pathname === feature.href;

                return (
                  <Link
                    key={feature.id}
                    href={feature.href}
                    className={`flex-shrink-0 w-[280px] sm:w-[320px] snap-center rounded-xl p-4 transition-all mt-2 ${
                      isActive
                        ? variant === "bottom"
                          ? "bg-white/15 ring-2 ring-white/40 shadow-lg"
                          : "bg-white ring-2 ring-blue-500/40 shadow-lg"
                        : variant === "bottom"
                        ? "bg-white/5 hover:bg-white/10"
                        : "bg-white hover:shadow-md border border-gray-200"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className={`text-sm font-semibold ${variant === "bottom" ? "text-white" : "text-gray-900"} ${isActive ? "text-blue-600" : ""}`}>
                            {feature.name}
                          </h3>
                          {isActive && (
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                              <ChevronRight className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                        <p className={`text-xs ${variant === "bottom" ? "text-gray-300" : "text-gray-600"} line-clamp-2`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Scroll Indicator Dots */}
            <div className="flex items-center justify-center gap-1.5">
              {features.map((feature) => {
                const isActive = pathname === feature.href;
                return (
                  <div
                    key={feature.id}
                    className={`h-1 rounded-full transition-all ${
                      isActive
                        ? variant === "bottom"
                          ? "w-6 bg-white"
                          : "w-6 bg-blue-600"
                        : variant === "bottom"
                        ? "w-1 bg-white/30"
                        : "w-1 bg-gray-300"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW - Full Grid */}
        <div className="hidden lg:block py-12">
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
      </div>
    </section>
  );
}

