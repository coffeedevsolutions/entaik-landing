"use client";

import { motion } from 'framer-motion';

interface WorkflowHeroProps {
  title: string;
  description: string;
  accentColor?: string;
}

export function WorkflowHero({ title, description, accentColor = 'from-blue-500 to-purple-600' }: WorkflowHeroProps) {
  // Extract colors from the gradient string for the blobs and background
  const getColors = (gradient: string) => {
    if (gradient.includes('blue') && gradient.includes('purple')) {
      return { 
        blob1: 'bg-blue-500', 
        blob2: 'bg-purple-500', 
        blob3: 'bg-indigo-600',
        bgGradient: 'from-slate-900 via-blue-900 to-purple-900'
      };
    }
    if (gradient.includes('green') || gradient.includes('teal')) {
      return { 
        blob1: 'bg-green-500', 
        blob2: 'bg-teal-500', 
        blob3: 'bg-emerald-600',
        bgGradient: 'from-slate-900 via-teal-900 to-green-900'
      };
    }
    if (gradient.includes('red') || gradient.includes('orange')) {
      return { 
        blob1: 'bg-red-500', 
        blob2: 'bg-orange-500', 
        blob3: 'bg-rose-600',
        bgGradient: 'from-slate-900 via-red-900 to-orange-900'
      };
    }
    // Default purple gradient
    return { 
      blob1: 'bg-purple-500', 
      blob2: 'bg-pink-500', 
      blob3: 'bg-indigo-600',
      bgGradient: 'from-slate-900 via-purple-900 to-slate-900'
    };
  };

  const colors = getColors(accentColor);

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${colors.bgGradient}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-1/4 w-72 h-72 ${colors.blob1} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob`}></div>
        <div className={`absolute top-0 right-1/4 w-72 h-72 ${colors.blob2} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000`}></div>
        <div className={`absolute -bottom-8 left-1/3 w-72 h-72 ${colors.blob3} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000`}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          {/* Main gradient text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-white">
              {title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              {description}
            </p>
            
            {/* Decorative line */}
            <div className="mt-8 flex justify-center">
              <div className={`w-24 h-1 bg-gradient-to-r ${accentColor} rounded-full`}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


