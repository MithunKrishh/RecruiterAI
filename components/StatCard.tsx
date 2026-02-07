'use client';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  barHeight: number;
  delay?: number;
  color?: string;
}

export default function StatCard({ value, label, barHeight, delay = 0, color = 'bg-[#A5D8FF]' }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="flex flex-col items-center"
    >
      {/* Value Display */}
      <div className="mb-4 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-2"
        >
          {value}
        </motion.div>
        <p className="text-white/70 text-sm font-medium">{label}</p>
      </div>

      {/* Animated Bar */}
      <div className="w-full bg-white/5 rounded-full overflow-hidden h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${barHeight}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.4, ease: 'easeOut' }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
    </motion.div>
  );
}
