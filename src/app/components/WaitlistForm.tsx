"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function WaitlistForm() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="waitlist" className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Value Props */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl">Join the Beta</h2>
              <p className="text-lg text-muted-foreground">
                Be among the first to transform your project intake process
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Beta access on release",
                "Pilot-term discounts",
                "Product updates",
                "Influence on the roadmap"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - HubSpot Form */}
          <div className="bg-background rounded-2xl shadow-xl p-8 border border-border">
            {mounted && (
              <div 
                className="hs-form-frame min-h-[400px]" 
                data-region="na1" 
                data-form-id="4b20c0a6-4f41-4413-ae67-8c592f28cfae" 
                data-portal-id="44587597"
              ></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}