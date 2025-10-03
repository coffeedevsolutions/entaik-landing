"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

export interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  example: string;
  icon: LucideIcon;
  color?: string;
}

interface WorkflowStepCardProps {
  step: WorkflowStep;
  index: number;
  isMobile?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  alignment?: 'left' | 'right' | 'center';
}

export function WorkflowStepCard({ step, index, isMobile = false, isExpanded = true, onToggle, alignment = 'center' }: WorkflowStepCardProps) {
  const Icon = step.icon;
  const color = step.color || 'from-blue-500 to-purple-600';

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="relative"
      >
        <button
          onClick={onToggle}
          className="w-full text-left bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 font-[family-name:var(--font-suse-mono)]"
        >
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${color} text-white text-sm font-bold`}>
                      {step.number}
                    </span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3"
                    >
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-400 rounded-lg p-4">
                        <p className="text-sm text-gray-700 italic">{step.example}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
        {/* Step number badge */}
        <div className={`absolute -top-4 ${alignment === 'right' ? '-left-4' : '-right-4'} z-10`}>
          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg ring-4 ring-white`}>
            <span className="font-bold text-lg">{step.number}</span>
          </div>
        </div>

        <div className="p-8">
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h3 className="mb-3 text-xl font-bold">{step.title}</h3>

          {/* Description */}
          <p className="text-muted-foreground mb-4">
            {step.description}
          </p>

          {/* Example callout */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-400 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <span className="text-sm text-orange-600 font-semibold flex-shrink-0">Example:</span>
              <p className="text-sm text-gray-700 italic">{step.example}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

