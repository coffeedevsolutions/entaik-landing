"use client";

import { motion } from 'framer-motion';

interface WorkflowTimelineProps {
  totalSteps: number;
  currentStep?: number;
  accentColor?: string;
}

export function WorkflowTimeline({ totalSteps, currentStep = 0, accentColor = 'from-blue-500 to-purple-600' }: WorkflowTimelineProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8 lg:hidden">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="relative"
        >
          <div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index <= currentStep
                ? `bg-gradient-to-br ${accentColor} shadow-md`
                : 'bg-gray-200'
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}

