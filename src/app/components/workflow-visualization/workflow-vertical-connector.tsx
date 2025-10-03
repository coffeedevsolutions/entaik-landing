"use client";

import { motion } from 'framer-motion';

interface WorkflowVerticalConnectorProps {
  index: number;
  accentColor?: string;
  alignment?: 'left' | 'right' | 'center';
}

export function WorkflowVerticalConnector({ index, accentColor = 'from-blue-500 to-purple-600', alignment = 'center' }: WorkflowVerticalConnectorProps) {
  return (
    <div className={`relative h-24 flex ${alignment === 'left' ? 'justify-start pl-8' : alignment === 'right' ? 'justify-end pr-8' : 'justify-center'}`}>
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative w-1 origin-top"
      >
        {/* Gradient line */}
        <div className={`absolute inset-0 bg-gradient-to-b ${accentColor} rounded-full`} />
        
        {/* Animated glow pulse */}
        <motion.div
          animate={{
            y: [0, 96, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-white via-white to-transparent shadow-lg"
          style={{ filter: 'blur(1px)' }}
        />
      </motion.div>
    </div>
  );
}

