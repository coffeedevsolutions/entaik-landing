"use client";

import { useState } from 'react';
import { WorkflowHero } from './workflow-hero';
import { WorkflowStepCard } from './workflow-step-card';
import { WorkflowVerticalConnector } from './workflow-vertical-connector';
import { WorkflowBenefits } from './workflow-benefits';
import { WorkflowTimeline } from './workflow-timeline';
import { WorkflowConfig } from './workflow-configs';

interface WorkflowVisualizationProps {
  config: WorkflowConfig;
}

export function WorkflowVisualization({ config }: WorkflowVisualizationProps) {
  const [expandedStepIndex, setExpandedStepIndex] = useState<number>(0);

  const toggleStep = (index: number) => {
    setExpandedStepIndex(expandedStepIndex === index ? -1 : index);
  };

  // Get background gradient based on accent color
  const getBackgroundGradient = (gradient: string) => {
    if (gradient.includes('blue') && gradient.includes('purple')) {
      return 'from-slate-100 via-blue-50 to-purple-100';
    }
    if (gradient.includes('green') || gradient.includes('teal')) {
      return 'from-slate-100 via-teal-50 to-emerald-100';
    }
    if (gradient.includes('red') || gradient.includes('orange')) {
      return 'from-slate-100 via-orange-50 to-red-100';
    }
    // Default purple
    return 'from-slate-100 via-purple-50 to-indigo-100';
  };

  const bgGradient = getBackgroundGradient(config.accentColor);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-slate-50/50">
      {/* Hero Section */}
      <WorkflowHero
        title={config.title}
        description={config.description}
        accentColor={config.accentColor}
      />

      {/* Workflow Steps Section */}
      <div className={`relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${bgGradient}`}>
        {/* Dot grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgb(100, 116, 139) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Mobile Timeline */}
          <WorkflowTimeline
            totalSteps={config.steps.length}
            currentStep={expandedStepIndex}
            accentColor={config.accentColor}
          />

          {/* Desktop: Vertical Zigzag Flow */}
          <div className="hidden lg:block">
            {config.steps.map((step, index) => {
              // Alternate between left and right, starting with center for first step
              const alignment = index === 0 ? 'center' : index % 2 === 1 ? 'left' : 'right';
              const maxWidth = index === 0 ? 'max-w-2xl' : 'max-w-xl';
              const marginClass = alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : 'mr-auto';
              
              return (
                <div key={step.number}>
                  <div className={`${maxWidth} ${marginClass}`}>
                    <WorkflowStepCard 
                      step={step} 
                      index={index}
                      alignment={alignment}
                    />
                  </div>
                  {index < config.steps.length - 1 && (
                    <WorkflowVerticalConnector 
                      index={index}
                      accentColor={config.accentColor}
                      alignment="center"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: Vertical Stepper */}
          <div className="lg:hidden space-y-4">
            {config.steps.map((step, index) => (
              <WorkflowStepCard
                key={step.number}
                step={step}
                index={index}
                isMobile={true}
                isExpanded={expandedStepIndex === index}
                onToggle={() => toggleStep(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <WorkflowBenefits
        benefits={config.benefits}
        accentColor={config.accentColor}
      />
    </div>
  );
}

