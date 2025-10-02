"use client";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Calendar, Clock, Users, Building, CheckCircle } from "lucide-react";
import { useState } from "react";

interface RequestDemoProps {
  onNavigate?: (view: string) => void;
}

export function RequestDemo({ onNavigate }: RequestDemoProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-20 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20 space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl">Thank you for your interest!</h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              We&apos;ve received your demo request. Our team will reach out within 24 hours to schedule a personalized walkthrough.
            </p>
            <div className="pt-6">
              <Button 
                size="lg"
                onClick={() => onNavigate?.("home")}
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6 pt-12">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200">
              Request a Demo
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-4xl mx-auto">
              See IntakeAI in action
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule a personalized demo to learn how IntakeAI can transform your project intake process.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl">Tell us about yourself</h2>
                <p className="text-muted-foreground">
                  We&apos;ll use this information to customize your demo experience.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required placeholder="Smith" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input id="email" type="email" required placeholder="john.smith@company.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" required placeholder="Acme Corp" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role *</Label>
                    <select 
                      id="role" 
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select role</option>
                      <option value="product-manager">Product Manager</option>
                      <option value="pmo-director">PMO Director</option>
                      <option value="it-director">IT Director</option>
                      <option value="operations-manager">Operations Manager</option>
                      <option value="executive">Executive</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size *</Label>
                    <select 
                      id="teamSize" 
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-1000">201-1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <select 
                    id="industry" 
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select industry</option>
                    <option value="construction">Construction</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="utilities">Utilities</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="financial-services">Financial Services</option>
                    <option value="government">Government</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">What challenges are you looking to solve? *</Label>
                  <Textarea 
                    id="message" 
                    required
                    rows={4}
                    placeholder="Tell us about your current intake process and what you'd like to improve..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Request Demo
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
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
                    <h3 className="text-lg">30-minute session</h3>
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
                    <h3 className="text-lg">Live Q&A</h3>
                    <p className="text-sm text-muted-foreground">
                      Ask questions and see how IntakeAI solves your specific challenges
                    </p>
                  </div>
                </Card>

                <Card className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg">Industry examples</h3>
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
                    <h3 className="text-lg">Implementation guidance</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn about setup, timelines, and getting your team onboarded
                    </p>
                  </div>
                </Card>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl space-y-4">
                <h3 className="text-lg">Trusted by leading enterprises</h3>
                <p className="text-sm text-muted-foreground">
                  Join construction firms, healthcare systems, and utilities companies using IntakeAI to streamline their project intake.
                </p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <div className="text-2xl text-blue-600">3.5hrs</div>
                    <div className="text-muted-foreground">saved per request</div>
                  </div>
                  <div>
                    <div className="text-2xl text-purple-600">85%</div>
                    <div className="text-muted-foreground">faster intake</div>
                  </div>
                  <div>
                    <div className="text-2xl text-pink-600">100%</div>
                    <div className="text-muted-foreground">complete briefs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}