"use client";

import React from "react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  name,
  title,
  company,
  avatar,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Quote */}
      <p className="text-gray-700 text-base leading-relaxed mb-6">
        "{quote}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#3B82F6]/20"
          />
        </div>

        {/* Name & Title */}
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
          <p className="text-gray-500 text-xs">
            {title}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}