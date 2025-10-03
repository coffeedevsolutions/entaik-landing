"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface Benefit {
  text: string;
  icon: LucideIcon;
}

interface WorkflowBenefitsProps {
  benefits: Benefit[];
  accentColor?: string;
}

export function WorkflowBenefits({ benefits, accentColor = 'from-blue-500 to-purple-600' }: WorkflowBenefitsProps) {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold">Key Benefits</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your workflow with these powerful advantages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${accentColor} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="flex-1 pt-2">{benefit.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Summary card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className={`relative overflow-hidden bg-gradient-to-br ${accentColor} rounded-2xl p-8 shadow-2xl`}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
            <div className="relative text-center text-white">
              <h3 className="mb-3 text-white text-2xl font-bold">Ready to streamline your workflow?</h3>
              <p className="text-white/90 text-base">
                Get started today and experience the difference in productivity and clarity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

