"use client";

import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, MessageSquare, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-12 space-y-6 pt-12">
        <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 hover:bg-blue-100 border-blue-200">
          <Mail className="w-4 h-4 mr-1" />
          Get in Touch
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
          We&apos;d Love to Hear From You
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions about Uptaik? Want to see how we can help your team? Drop us a message and we&apos;ll get back to you shortly.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left - Contact Form */}
        <Card className="p-8 lg:p-10">
          <div className="space-y-4 mb-6">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <p className="text-muted-foreground">
              Fill out the form below and our team will respond within 24 hours.
            </p>
          </div>
          
          {mounted && (
            <div 
              className="hs-form-frame min-h-[500px]" 
              data-region="na1" 
              data-form-id="dde89906-6838-4985-b9ae-2db2c953befc" 
              data-portal-id="44587597"
            ></div>
          )}
        </Card>

        {/* Right - Contact Info & FAQ */}
        <div className="space-y-8">
          {/* <div className="space-y-4">
            <h2 className="text-2xl font-bold">Other Ways to Reach Us</h2>
            <div className="space-y-4">
              <Card className="p-6 flex gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    General inquiries and support
                  </p>
                  <a href="mailto:hello@uptaik.com" className="text-sm text-blue-600 hover:text-blue-700">
                    hello@uptaik.com
                  </a>
                </div>
              </Card>

              <Card className="p-6 flex gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Sales</h3>
                  <p className="text-sm text-muted-foreground">
                    Pricing, demos, and enterprise inquiries
                  </p>
                  <a href="mailto:sales@uptaik.com" className="text-sm text-blue-600 hover:text-blue-700">
                    sales@uptaik.com
                  </a>
                </div>
              </Card>

              <Card className="p-6 flex gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9am - 6pm EST
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Weekend: Closed
                  </p>
                </div>
              </Card>
            </div>
          </div> */}

          {/* What to Expect */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">What to Expect</h2>
            <Card className="p-6 space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 24 business hours
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Personalized Attention</h3>
                  <p className="text-sm text-muted-foreground">
                    Your inquiry goes directly to our team, not a bot
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Expert Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Get answers from people who know the product inside out
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Card */}
          <div className="p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl space-y-4">
            <h3 className="text-lg font-semibold">Prefer to Schedule a Call?</h3>
            <p className="text-sm text-muted-foreground">
              If you&apos;d like to discuss your needs in detail, we&apos;d be happy to set up a time to chat.
            </p>
            <a
              href="/request-demo"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

