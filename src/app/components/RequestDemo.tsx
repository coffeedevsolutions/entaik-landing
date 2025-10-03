"use client";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Sparkles, Calendar, Clock, Users, Building } from "lucide-react";

interface RequestDemoProps {
  onNavigate?: (view: string) => void;
}

export function RequestDemo({ onNavigate }: RequestDemoProps) {
  return (
    <div className="pt-20 pb-20 font-[family-name:var(--font-suse-mono)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-6 pt-12">
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 hover:bg-blue-100 border-blue-200">
            <Sparkles className="w-4 h-4 mr-1" />
            Request a Demo
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
            See Uptaik in Action
          </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Schedule a personalized demo to learn how Uptaik can transform your project intake process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* HubSpot Form */}
          <Card className="p-8">
            <div className="space-y-4 mb-6">
              <h2 className="text-2xl font-bold">Request Your Demo</h2>
              <p className="text-muted-foreground">
                Fill out the form and we&apos;ll get back to you within 24 hours to schedule your personalized walkthrough.
              </p>
            </div>
            
            <div 
              className="hs-form-frame" 
              data-region="na1" 
              data-form-id="e34c3212-91bf-4fb6-811c-07addeefb9bb" 
              data-portal-id="44587597"
            ></div>
          </Card>

          {/* What to Expect */}
          <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl">What to expect</h2>
                <p className="text-muted-foreground">
                  Our demos are tailored to your specific use case and typically include:
                </p>
              </div>

              <div className="space-y-4">
                <Card className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">30-minute session</h3>
                    <p className="text-sm text-muted-foreground">
                      A focused walkthrough of features most relevant to your needs
                    </p>
                  </div>
                </Card>

                <Card className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Live Q&A</h3>
                    <p className="text-sm text-muted-foreground">
                      Ask questions and see how Uptaik solves your specific challenges
                    </p>
                  </div>
                </Card>

                <Card className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Industry examples</h3>
                    <p className="text-sm text-muted-foreground">
                      See workflows and templates built for your industry
                    </p>
                  </div>
                </Card>

                <Card className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Implementation guidance</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn about setup, timelines, and getting your team onboarded
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}