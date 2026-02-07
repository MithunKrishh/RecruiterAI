"use client";

import React from "react";
import { motion } from "framer-motion";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function BenefitCard({
  icon,
  title,
  description,
  delay = 0,
}: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-3xl mb-6">
        {icon}
      </div>

      {/* Title - Updated with modern font */}
      <h3 className="text-white text-xl font-semibold mb-3 tracking-tight">
        {title}
      </h3>

      {/* Description - Updated with modern font */}
      <p className="text-white/60 text-sm leading-relaxed font-light">
        {description}
      </p>
    </motion.div>
  );
}