'use client';
import { motion } from 'framer-motion';

interface FlowStep {
  type: 'step' | 'decision';
  label: string;
  icon?: string;
  color?: string;
  branches?: { yes: string; no: string };
}

interface FlowchartCardProps {
  title: string;
  benefit: string;
  steps: FlowStep[];
  delay?: number;
}

export default function FlowchartCard({ title, benefit, steps, delay = 0 }: FlowchartCardProps) {
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="relative h-[600px] bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-accent/10 rounded-full blur-2xl" />
      <div className="absolute bottom-4 left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl" />

      {/* Header */}
      <div className="relative z-10 mb-8">
        <h3 className="font-serif text-2xl mb-2">{title}</h3>
        <p className="text-accent text-sm font-medium">✨ {benefit}</p>
      </div>

      {/* Flowchart - Positioned absolutely for creative layout */}
      <div className="relative h-[450px]">
        {steps.map((step, index) => {
          const yPosition = index * 90;
          const xOffset = index % 2 === 0 ? 0 : 40;

          return (
            <div key={index} className="absolute" style={{ top: `${yPosition}px`, left: `${xOffset}px`, right: `${xOffset}px` }}>
              {step.type === 'step' ? (
                <motion.div
                  animate={floatAnimation}
                  className="relative"
                >
                  <div className={`bg-white/10 backdrop-blur-sm border ${step.color || 'border-white/20'} rounded-xl px-4 py-3 shadow-lg`}>
                    <div className="flex items-center gap-2">
                      {step.icon && <span className="text-lg">{step.icon}</span>}
                      <span className="text-sm text-white/90">{step.label}</span>
                    </div>
                  </div>
                  
                  {/* Connecting line to next step */}
                  {index < steps.length - 1 && (
                    <svg 
                      className="absolute left-1/2 -translate-x-1/2" 
                      style={{ top: '100%' }}
                      width="2" 
                      height="20"
                    >
                      <line 
                        x1="1" 
                        y1="0" 
                        x2="1" 
                        y2="20" 
                        stroke="rgba(255,255,255,0.2)" 
                        strokeWidth="2"
                        strokeDasharray="4,4"
                      />
                    </svg>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  animate={floatAnimation}
                  className="relative"
                >
                  {/* Diamond Decision */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <div className="absolute w-20 h-20 bg-accent/20 border-2 border-accent rotate-45 rounded-lg" />
                      <span className="relative z-10 text-xs font-semibold text-white text-center px-2">
                        {step.label}
                      </span>
                    </div>
                  </div>
                  
                  {/* Branches */}
                  {step.branches && (
                    <div className="flex gap-2 justify-center">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-green-500/20 border border-green-500/40 rounded-lg px-3 py-2 text-xs text-green-300 backdrop-blur-sm"
                      >
                        ✓ {step.branches.yes}
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-red-500/20 border border-red-500/40 rounded-lg px-3 py-2 text-xs text-red-300 backdrop-blur-sm"
                      >
                        ✗ {step.branches.no}
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
