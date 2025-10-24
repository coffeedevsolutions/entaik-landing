"use client";

import { useState } from "react";
import { Navigation } from "./Navigation";
import { HeroHeader } from "./HeroHeader";
import { Hero } from "./Hero";
import { ProblemSolution } from "./ProblemSolution";
import { Features } from "./Features";
import { Outcomes } from "./Outcomes";
import { Industries } from "./Industries";
import { HowItWorks } from "./HowItWorks";
import { WaitlistForm } from "./WaitlistForm";
import { FAQ } from "./FAQ";
import { Resources } from "./Resources";
import { Footer } from "./Footer";
import { Pricing } from "./Pricing";
import { Workflows } from "./Workflows";
import { RequestDemo } from "./RequestDemo";
import { BlogHub } from "./BlogHub";
import { AISurveyPlatform } from "./features/AISurveyPlatform";
import { AutomatedDocumentation } from "./features/AutomatedDocumentation";
import { EnterpriseIntegrations } from "./features/EnterpriseIntegrations";
import { AnalyticsIntelligence } from "./features/AnalyticsIntelligence";

export default function App() {
  const [currentView, setCurrentView] = useState("home");

  const handleNavigation = (view: string) => {
    setCurrentView(view);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "pricing":
        return <Pricing onNavigate={handleNavigation} />;
      case "workflows":
        return <Workflows onNavigate={handleNavigation} />;
      case "request-demo":
        return <RequestDemo onNavigate={handleNavigation} />;
      case "blog-hub":
        return <BlogHub onNavigate={handleNavigation} />;
      case "ai-survey-platform":
        return <AISurveyPlatform onNavigate={handleNavigation} />;
      case "automated-documentation":
        return <AutomatedDocumentation onNavigate={handleNavigation} />;
      case "enterprise-integrations":
        return <EnterpriseIntegrations onNavigate={handleNavigation} />;
      case "analytics-intelligence":
        return <AnalyticsIntelligence onNavigate={handleNavigation} />;
      case "home":
      default:
        return (
          <div className="min-h-screen">
            {/* Hero Header - No Container */}
            <HeroHeader />

            {/* Hero Section Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m-4">
                <Hero />
              </div>
            </div>

            {/* Problem Solution Section Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m-4">
                <ProblemSolution />
              </div>
            </div>

            {/* Features Section Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m-4">
                <Features />
              </div>
            </div>

            {/* Outcomes Section Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m-4">
                <Outcomes />
              </div>
            </div>

            {/* Industries Section Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m-4">
                <Industries />
              </div>
            </div>

            {/* How It Works Section Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m-4">
                <HowItWorks />
              </div>
            </div>

            {/* Waitlist Section Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m-4">
                <WaitlistForm />
              </div>
            </div>

            {/* FAQ Section Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m-4">
                <FAQ />
              </div>
            </div>

            {/* Resources Section Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m-4">
                <Resources />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={handleNavigation} currentView={currentView} />
      
      <main>
        {renderCurrentView()}
      </main>
      
      {/* Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}
