import { Navigation } from "./Navigation";
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

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        
        <ProblemSolution />
        
        <Features />
        
        <Outcomes />
        
        <Industries />
        
        <HowItWorks />
        
        <WaitlistForm />
        
        <FAQ />
        
        <Resources />
      </main>
      
      <Footer />
    </div>
  );
}
