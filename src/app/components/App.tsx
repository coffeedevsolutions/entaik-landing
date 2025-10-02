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
          <>
            <HeroHeader />
            <Hero />
            <ProblemSolution />
            <Features />
            <Outcomes />
            <Industries />
            <HowItWorks />
            <WaitlistForm />
            <FAQ />
            <Resources />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={handleNavigation} currentView={currentView} />
      
      <main>
        {renderCurrentView()}
      </main>
      
      <Footer />
    </div>
  );
}
